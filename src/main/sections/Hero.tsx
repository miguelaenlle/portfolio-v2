import ExternalLink from "../components/ExternalLink";
import Email from "../icons/Email";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";

const Hero: React.FC<{}> = (props) => {
  return (
    <div className="p-10 flex py-40">
      <div className="space-y-3">
        <p className="text-slate-800 font-medium text-7xl">Miguel Aenlle</p>
        <p className="text-slate-600 text-3xl">
          Fullstack Web & Mobile Developer
        </p>
        <br />
        <br />
        <div className="flex space-x-4 pb-3">
          <Email />
          <Github />
          <Linkedin />
        </div>
        <ExternalLink />
      </div>
    </div>
  );
};
export default Hero;
