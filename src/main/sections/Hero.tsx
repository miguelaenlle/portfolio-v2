import Wrapper from "../../shared/components/Wrapper";
import ExternalLink from "../components/ExternalLink";
import Email from "../icons/Email";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";

const Hero: React.FC<{}> = (props) => {
  return (
    <div className="flex py-36 bg-hero-pattern">
      <Wrapper>
        <div className="w-screen space-y-3">
          <p className="text-slate-800 font-bold text-7xl ">Miguel Aenlle</p>
          <p className="text-slate-600 text-2xl">
            Fullstack Web & Mobile Developer
          </p>
          <br />
          <br />
          <div className="flex space-x-3 pb-5">
            <Email />
            <Github />
            <Linkedin />
          </div>
          <ExternalLink />
        </div>
      </Wrapper>
    </div>
  );
};
export default Hero;
