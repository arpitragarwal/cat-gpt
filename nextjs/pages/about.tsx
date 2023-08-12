import Link from 'next/link'
import { Answer } from "@/components/Answer/Answer";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { LEXChunk } from "@/types";
import { IconArrowRight, IconExternalLink, IconSearch } from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { Analytics} from '@vercel/analytics/react';
import cat_gpt_explainer from "../public/cat-gpt-explainer.png";
import RAG_explainer from "../public/RAG-explainer.jpeg";

export default function About() {

  return (
    <>
      <Head>
        <title>CatGPT</title>
        <meta
          name="description"
          content={`GPT-powered search providing reliable answers along with relevant sources for cat-related questions`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.jpeg"
        />
      </Head>

      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1 overflow-auto">
          <div className="mx-auto flex h-full w-full max-w-[750px] flex-col items-center px-3 pt-4 sm:pt-8">
            {<div className="mt-6 text-left text-lg">
		{
		<b> What is CatGPT?</b>
		}

		<ul className="bullet-list">
              		<li> GPT-powered search providing reliable answers along with relevant sources for cat-related questions.</li>
			<li> <span>&nbsp;&nbsp;</span> </li>
        	</ul>
		
		{
		<b> What does it do?</b>
		}
		<ul className="bullet-list">
			<li> CatGPT is a <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-customize-rag.html" className="my-link">'Retrieval Augmented Generation (RAG)</a>' system that augments your search query with the most relevant snippets of content from a 'trusted corpus' to your query, to ultimately generate the answer.</li> 
			<li> <span>&nbsp;&nbsp;</span> </li>
              		<li> CatGPT relies on a 'trusted corpus' of youtube transcripts (currently only <a href="https://www.youtube.com/@JacksonGalaxy/about" className="my-link"> Jackson Galaxy's</a> youtube channel). It searches through a vector representation of this corpus to find the closest matches to your search query. By limiting the context to this trusted corpus alone, it hopes to generate reliable, high-quailty answers.</li> 
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li> These matched snippets are then provided to the LLM as context for the answer, and shown to the user below as sources for their answer. Users can quickly skim over the transcripts, or watch the actual source video for more details.</li>
        	</ul>
          	<Image
            		className="sm:flex"
            		src={RAG_explainer}
            		alt="credit: AWS"
          	/>
		<p> <small>Image credit: <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-customize-rag.html" className="my-link">AWS Sagemaker guide</a></small></p>
		<div>
		&nbsp;
		</div>

		{
		<b> How is it built?</b>
		}
		<ul className="bullet-list">
			<li> <u>Corpus</u>: Audio from <a href="https://www.youtube.com/@JacksonGalaxy/" className="my-link">Jackson Galaxy's youtube channel</a> is transcribed and a vector embedding is created for chunks of the transcripts. <a href="https://platform.openai.com/docs/api-reference" className="my-link">OpenAI API</a> is used for transcribing the youtube audios, and <a href="https://www.pinecone.io/" className="my-link">Pinecone</a> is used for the vector embeddings and the similarity search. </li>
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li> <u> Answer generation</u>:  GPT-3.5 is used to generate an answer to the query augmented with the relevant snippets.</li>
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li> <u> Web app</u>: The backend is based on <a href="https://fastapi.tiangolo.com/" className="my-link">Fast API</a> and is hosted on <a href="https://railway.app/" className="my-link">Railway.app</a>; the frontend is made and hosted using <a href="https://nextjs.org/" className="my-link">Next.js</a> and <a href="https://vercel.com/" className="my-link">Vercel</a>.</li>
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li><u>Overall framework</u>: CatGPT is made using <a href="https://python.langchain.com/docs/get_started/introduction.html" className="my-link">LangChain</a>, and is based on a <a href="https://github.com/rlancemartin/karpathy-gpt/" className="my-link">template</a> provided by LanceMartin. The complete source code for the project is <a href="https://github.com/arpitragarwal/cat-gpt" className="my-link"> here.</a></li>
			<li> <span>&nbsp;&nbsp;</span> </li>
        	</ul>
	
          	<Image
            		className="sm:flex"
            		src={cat_gpt_explainer}
            		alt="credit: KarpathyGPT"
          	/>
		<p><small>Image credit: <a href="https://github.com/rlancemartin/karpathy-gpt">KarpathyGPT</a></small></p>

	     </div>
            }
          </div>
        </div>
        <Footer />
      </div>
      <Analytics />
    </>
  );
}

