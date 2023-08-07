# CatGPT

## What is CatGPT?
CatGPT is a search bot for providing reliable answers to cat-related questions along with relevant sources.
  
## What does it do?
CatGPT finds the most relevant snippets of youtube content based on your search query, which serve as context to generate the response from.
  
By limiting the context to educational youtube channels only it hopes to generate reliable, high-quality answers.
  
It provides the relevant youtube transcripts used as context for the answer, along with the actual youtube source video. Users can quickly skim over the transcripts, or watch the actual source video for more details.
  
## How does it work?
Using a pre-made vector embedding of video transcripts of Jackson Galaxy's youtube channel, CatGPT finds the top 3 most relevant snippets to your search query. OpenAI API is used for transcribing the youtube videos, and Pinecone is used for the vector embeddings and similarity search.
  
The relevant snippets are provided as context along with your search query to OpenAI's API to generate an answer.
  
The backend is based on Fast API and is hosted on Railway.app; the front end is made and hosted using Next.js and Vercel.
  
CatGPT is made using LangChain, and is based on a [template](https://github.com/rlancemartin/karpathy-gpt/) provided by LanceMartin.
  

![image](https://github.com/rlancemartin/karpathy-gpt/assets/122662504/775af292-e528-4760-9793-c8547dff3bcb)
