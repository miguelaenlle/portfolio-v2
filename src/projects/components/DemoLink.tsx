import { ExternalLinkIcon } from "@heroicons/react/outline";
import { GlobeAltIcon } from "@heroicons/react/outline";
import Github from "../../shared/components/Github";
import AppStoreIcon from "../icons/AppStoreIcon";
import GithubIcon from "../icons/GithubIcon";

const DemoLink: React.FC<{ linkId: string; linkText: string; link: string }> = (
  props
) => {
  return (
    <a
      href={props.link}
      target={"_blank"}
      className="group flex items-center space-x-1 hover:cursor-pointer"
    >
      {props.linkId === "website" && (
        <GlobeAltIcon className="transition-all w-5 h-5 text-cyan-600 group-hover:text-cyan-800 group-hover:scale-105" />
      )}
      {props.linkId === "github" && <GithubIcon />}
      {props.linkId === "app-store" && <AppStoreIcon />}
      <p className="transition-all text-lg text-cyan-600 group-hover:text-cyan-800 group-hover:font-bold">
        {props.linkText}
      </p>
      <ExternalLinkIcon className=" transition-all w-5 h-5 text-cyan-600 group-hover:text-cyan-800 group-hover:scale-105" />
    </a>
  );
};
export default DemoLink;
