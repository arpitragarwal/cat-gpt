# for fetching list of youtube videos
from youtubesearchpython import *
import pandas as pd

# for downloading audio and extracting text
from langchain.document_loaders.generic import GenericLoader
from langchain.document_loaders.parsers import OpenAIWhisperParser
from langchain.document_loaders.blob_loaders.youtube_audio import YoutubeAudioLoader

# for saving embedding to vectordb
import os
import math
import pinecone
import pandas as pd
from langchain.chains import RetrievalQA
from langchain.vectorstores import Pinecone
from langchain.chat_models import ChatOpenAI
from langchain.embeddings import OpenAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter

import openai
import requests

import unicodedata

# channels = ChannelsSearch('JacksonGalaxy')
# print(channels.result())
channel_id = "UCheL-cUqfzUB8dfM_rFOfDQ" #pull out id from channels above
playlist = Playlist(playlist_from_channel_id(channel_id))

while playlist.hasMoreVideos:
    while playlist.hasMoreVideos:
    print('Getting more videos...')
    playlist.getNextVideos()
    print(f'Videos retrieved: {len(playlist.videos)}')

stor_metadata = pd.DataFrame()

for count, v in enumerate(playlist.videos):
    if count < float('inf'):
        stor_metadata.loc[v['title'],'link']=v['link']
        stor_metadata.loc[v['title'],'title']=v['title']
        stor_metadata.loc[v['title'],'img']=v['thumbnails'][3]['url']
        stor_metadata.loc[v['title'],'id']=int(count+1)

#print(stor_metadata)

urls=list(stor_metadata.link)
save_dir = "../Downloads/JacksonGalaxy"
openai.api_key = os.environ["OPENAI_API_KEY"]
loader = GenericLoader(YoutubeAudioLoader(urls,save_dir),OpenAIWhisperParser())
docs = loader.load()

# Consolidate text per episode
concatenated_text_by_source = {}
for doc in docs:
    source = doc.metadata['source']
    page_content = doc.page_content
    if source in concatenated_text_by_source:
        concatenated_text_by_source[source] += ' ' + page_content
    else:
        concatenated_text_by_source[source] = page_content

# Split each video and add metadata we'll use in UI
splits=[]
metadatas=[]

# Split parameters
text_splitter = RecursiveCharacterTextSplitter(chunk_size = 1500, chunk_overlap = 150)

# Build splits
for k in concatenated_text_by_source.keys():
    
    # Get downloaded title
    directory, filename = os.path.split(k)
    video_name = filename.split(".m4a")[0]    
    
    # Make splits
    episode_text = concatenated_text_by_source[k]
    episode_splits = text_splitter.split_text(episode_text)
    splits.append(episode_splits)
    
    # With title, we can fetch associated metadata we wrote earlier to stor_metadata
    # using unicode data to fix issue with downloaded filenames
    video_name_corrected = unicodedata.normalize('NFKD', video_name)
    episode_number = str(stor_metadata.loc[video_name_corrected,"id"])
    episode_link = stor_metadata.loc[video_name_corrected,"link"] 
    img_url = stor_metadata.loc[video_name_corrected,"img"] 
    
    # Save the video thumbnail for later use the UI
    with open("../nextjs/public/0%s.jpg"%str(episode_number), 'wb') as f:
        response = requests.get(img_url)
        f.write(response.content)
    
    # Save metadata
    episode_metadatas=[{"source":video_name + " " +episode_number,"id":episode_number,"link":episode_link,"title":video_name} for s in episode_splits]
    metadatas.append(episode_metadatas)


# Join the list of lists 
splits_all = []
for sublist in splits:
    splits_all.extend(sublist)
metadatas_all = []
for sublist in metadatas:
    metadatas_all.extend(sublist)

pinecone.init(api_key=os.environ.get('PINECONE_API_KEY'), environment="us-west4-gcp-free")

index_name = "cat-gpt"
embeddings = OpenAIEmbeddings()
p = Pinecone.from_existing_index(index_name=index_name,embedding=embeddings)

# Add data in chunk to avoid data ingest errors
chunk_size = 100
last_chunk = 0
num_chunks = math.ceil(len(splits_all) / chunk_size)

for i in range(last_chunk, num_chunks):
    # Set chunks to add
    start_idx = i * chunk_size
    end_idx = min(start_idx + chunk_size, len(splits_all))
    
    # Extract the current chunks
    current_splits = splits_all[start_idx:end_idx]
    current_metadatas = metadatas_all[start_idx:end_idx]
    
    # Add the current chunk to the vector database
    p.add_texts(texts = current_splits, metadatas=current_metadatas)
