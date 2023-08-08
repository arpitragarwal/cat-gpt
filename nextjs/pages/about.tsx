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

export default function About() {

  return (
    <>
      <Head>
        <title>CatGPT</title>
        <meta
          name="description"
          content={`GPT-powered search providing reliable answers along with relevant sources for cat-related questions.`}
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
              		<li> CatGPT finds the most relevant snippets of youtube content based on your search query, which serve as context to generate the response from.</li>
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li> By limiting the context to educational youtube channels alone, it hopes to generate reliable, high-quality answers. </li>
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li> It provides the relevant youtube transcripts used as context for the answer, along with the actual youtube source video. Users can quickly skim over the transcripts, or watch the actual source video for more details.</li>
			<li> <span>&nbsp;&nbsp;</span> </li>
        	</ul>
		{
		<b> How does it work?</b>
		}
		<ul className="bullet-list">
              		<li> Using a pre-made vector embedding of video transcripts of <a href="https://www.youtube.com/@JacksonGalaxy/">Jackson Galaxy's youtube channel</a>, CatGPT finds the top 3 most relevant snippets to your search query. <a href="https://platform.openai.com/docs/api-reference">OpenAI API</a> is used for transcribing the youtube videos, and <a href="https://www.pinecone.io/">Pinecone</a> is used for the vector embeddings and similarity search. </li>
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li> The relevant snippets are provided as context along with your search query to OpenAI's API to generate an answer.</li>
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li> The backend is based on <a href="https://fastapi.tiangolo.com/">Fast API</a> and is hosted on <a href="https://railway.app/">Railway.app</a>; the front end is made and hosted using <a href="https://nextjs.org/">Next.js</a> and <a href="https://vercel.com/">Vercel</a>.</li>
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li> CatGPT is made using <a href="https://python.langchain.com/docs/get_started/introduction.html">LangChain</a>, and is based on a <a href="https://github.com/rlancemartin/karpathy-gpt/">template</a> provided by LanceMartin. The complete source code for the project is <a href="https://github.com/arpitragarwal/cat-gpt"> here.</a></li>
			<li> <span>&nbsp;&nbsp;</span> </li>
        	</ul>
	
          	<Image
            		className="hidden sm:flex"
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

