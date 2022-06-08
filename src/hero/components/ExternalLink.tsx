import { DocumentTextIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { RESUME_LINK } from "../../constants/links";
import { useDisplay } from "../../shared/hooks/use-display";

const ExternalLink: React.FC<{ delay: number }> = (props) => {
  return (
    <a href={RESUME_LINK} target="_blank">
      <div
        className={`transition-all group hover:cursor-pointer flex items-center space-x-1`}
      >
        <p className="transition-all text-xl text-cyan-600 group-hover:text-cyan-800 group-hover:font-bold">
          View resume
        </p>
        <ExternalLinkIcon className="transition-all h-7 text-cyan-600 group-hover:text-cyan-800" />
      </div>
    </a>
  );
};
export default ExternalLink;
