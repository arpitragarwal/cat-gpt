import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin} from "@tabler/icons-react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="flex h-[50px] border-t border-gray-300 py-2 px-8 items-center sm:justify-between justify-center">
      <div className="sm:flex items-center"></div>

      <div className="sm:flex italic text-sm">
        Created by
        <a
          className="hover:opacity-50 mx-1"
          href="https://www.linkedin.com/in/arpit-agarwal/"
          target="_blank"
          rel="noreferrer"
        >
          Arpit Agarwal
        </a>
        based on a 
        <a
          className="hover:opacity-50 ml-1"
          href="https://github.com/rlancemartin/karpathy-gpt/"
          target="_blank"
          rel="noreferrer"
        >
          LangChain example 
        </a>
	<span>&nbsp;</span>	
	by Lance Martin
      </div>

      <div className="flex space-x-4">
        <a
          className="flex items-center hover:opacity-50"
          href="https://www.linkedin.com/in/arpit-agarwal/"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandLinkedin size={32} />
        </a>

        <a
          className="flex items-center hover:opacity-50"
          href="https://github.com/arpitragarwal/cat-gpt"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandGithub size={32} />
        </a>
      </div>
    </div>
  );
};
