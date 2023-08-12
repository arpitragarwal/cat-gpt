import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { FC } from "react";
import king from "../public/cat.png";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[60px] border-b border-gray-300 py-2 px-8 items-center justify-between">
      <div className="font-bold text-2xl flex items-center">
        <a
          className="flex hover:opacity-50 items-center"
          href="https://cat-gpt-alpha.vercel.app/"
        >
          <Image
            className="hidden sm:flex"
            src={king}
            alt="CatGPT"
            height={40}
          />
          <div className="ml-2">CatGPT</div>
        </a>
      </div>
      <div>
	<a href="./about" className="my-link">About CatGPT</a>
      </div>
    </div>
  );
};
