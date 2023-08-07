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

export default function About() {

  return (
    <>
      <Head>
        <title>Cat GPT</title>
        <meta
          name="description"
          content={`AI-powered search and chat for the Jackson Galaxy youtube channel.`}
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
              		<li> CatGPT is a search bot for providing reliable answers to cat-related questions along with relevant sources.</li>
			<li> <span>&nbsp;&nbsp;</span> </li>
        	</ul>
		
		{
		<b> What does it do?</b>
		}
		<ul class="bullet-list">
              		<li> CatGPT finds the most relevant snippets of youtube content based on your search query, which serve as context to generate the response from.</li>
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li> By limiting the context to educational youtube channels only it hopes to generate reliable, high-quality answers. </li> 
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li> It provides the relevant youtube transcripts used as context for the answer, along with the actual youtube source video. Users can quickly skim over the transcripts, or watch the actual source video for more details.</li>
			<li> <span>&nbsp;&nbsp;</span> </li>
        	</ul>
		{
		<b> How does it work?</b>
		}
		<ul class="bullet-list">
              		<li> Using a pre-made vector embedding of video transcripts of Jackson Galaxy's youtube channel CatGPT finds the top 3 most relevant snippets with respect to your search query. OpenAI API is used for transcribing the youtube videos, and PineconeDB is used for the vector embeddings and similarity search. </li>
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li> The relevant snippets are provided as context along with your search query to OpenAI's API to generate an answer.</li>
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li> The backend is based on Fast API and is hosted on Railway.app, and the front end uses Next.js and is hosted on vercel.</li>
			<li> <span>&nbsp;&nbsp;</span> </li>
			<li> CatGPT is made using LangChain, and is based on a template provided by LanceMartin. See for a more detailed description. </li>
        	</ul>

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

