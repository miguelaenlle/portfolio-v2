import { GITHUB_PROJECT_LINK } from "../../constants/links";

const Footer: React.FC<{}> = (props) => {
  return (
    <div>
      <p className="flex flex-col items-center py-10">
        <p className="text-sm">Built and Designed by Miguel Aenlle</p>
        <a href={GITHUB_PROJECT_LINK} target="_blank">
          <p className="transition-all text-sm text-slate-400 hover:text-slate-800">GitHub</p>
        </a>
      </p>
    </div>
  );
};
export default Footer;
