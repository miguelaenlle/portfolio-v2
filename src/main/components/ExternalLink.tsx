import { ExternalLinkIcon } from "@heroicons/react/solid";

const ExternalLink: React.FC<{}> = (props) => {
  return (
    <div className="group hover:cursor-pointer flex items-center space-x-1">
      <p className="transition-all text-xl text-zinc-600 group-hover:text-zinc-400">
        View resume
      </p>
      <ExternalLinkIcon className="transition-all h-7 font-thin text-zinc-600 group-hover:text-zinc-500 group-hover:scale-110" />
    </div>
  );
};
export default ExternalLink;
