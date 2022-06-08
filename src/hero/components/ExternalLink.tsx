import { DocumentTextIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { RESUME_LINK } from "../../constants/links";
import { useDisplay } from "../../shared/hooks/use-display";

const ExternalLink: React.FC<{ delay: number }> = (props) => {
  const { displayed } = useDisplay(props.delay-100);
  return (
    <a href={RESUME_LINK} target="_blank">
      <div
        className={`${
          displayed
            ? "block animate-in fade-in slide-in-from-top duration-500"
            : "invisible"
        } transition-all group hover:cursor-pointer flex items-center space-x-1`}
      >
        <p className="transition-all text-xl text-slate-400 group-hover:text-slate-800 group-hover:font-bold">
          View resume
        </p>
        <ExternalLinkIcon className="transition-all h-7 text-slate-400 group-hover:text-slate-800" />
      </div>
    </a>
  );
};
export default ExternalLink;
