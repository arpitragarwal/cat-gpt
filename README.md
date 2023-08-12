# CatGPT

## What is CatGPT?
GPT-powered search providing reliable answers along with relevant sources for cat-related questions.
  
## What does it do?
CatGPT is a 'Retrieval Augmented Generation (RAG)' system that augments your search query with the most relevant snippets of content from a 'trusted corpus' to your query, to ultimately generate the answer.
  
CatGPT relies on a 'trusted corpus' of youtube transcripts (currently only Jackson Galaxy's youtube channel). It searches through a vector representation of this corpus to find the closest matches to your search query. By limiting the context to this trusted corpus alone, it hopes to generate reliable, high-quailty answers.
  
These matched snippets are then provided to the LLM as context for the answer, and shown to the user below as sources for their answer. Users can quickly skim over the transcripts, or watch the actual source video for more details.

![image](https://docs.aws.amazon.com/images/sagemaker/latest/dg/images/jumpstart/jumpstart-fm-rag.jpg)

## How is it built?
Corpus: Audio from Jackson Galaxy's youtube channel is transcribed and a vector embedding is created for chunks of the transcripts. OpenAI API is used for transcribing the youtube audios, and Pinecone is used for the vector embeddings and similarity search.
  
Answer generation: GPT-3.5 is used to generate an answer to the query augmented with the relevant snippets.
  
Web app: The backend is based on Fast API and is hosted on Railway.app; the frontend is made and hosted using Next.js and Vercel.
  
Overall framework: CatGPT is made using LangChain, and is based on a template provided by LanceMartin. The complete source code for the project is here.
  
![image](https://github.com/rlancemartin/karpathy-gpt/assets/122662504/775af292-e528-4760-9793-c8547dff3bcb)
