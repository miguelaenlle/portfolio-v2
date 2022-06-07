import { DocumentTextIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { RESUME_LINK } from "../../constants/links";

const ExternalLink: React.FC<{}> = (props) => {
  return (
    <a href={RESUME_LINK} target="_blank">
      <div className="animate-in fade-in slide-in-from-top duration-500 transition-all group hover:cursor-pointer flex items-center space-x-1">
        <p className="transition-all text-xl text-slate-400 group-hover:text-zinc-800 group-hover:font-bold">
          View resume
        </p>
        <ExternalLinkIcon className="transition-all h-7 text-slate-400 group-hover:text-zinc-800" />
      </div>
    </a>
  );
};
export default ExternalLink;
