import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin} from "@tabler/icons-react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="flex h-[50px] border-t border-gray-300 py-2 px-8 items-center sm:justify-between justify-center">
      <div className="sm:flex italic text-sm"> </div>

      <div className="sm:flex italic text-sm">
	  Created by <span>&nbsp;</span><a href="https://www.linkedin.com/in/arpit-agarwal/" className="my-link"> Arpit Agarwal </a><span>&nbsp;</span> based on a LangChain <span>&nbsp;</span><a href="https://github.com/rlancemartin/karpathy-gpt/" className="my-link">example</a><span>&nbsp;</span> by Lance Martin
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
