import Wrapper from "../../shared/components/Wrapper";
import ExternalLink from "../components/ExternalLink";
import Email from "../../shared/components/Email";
import Github from "../../shared/components/Github";
import Linkedin from "../../shared/components/Linkedin";
import Subheader from "../components/Subheader";

const Hero: React.FC<{}> = (props) => {
  return (
    <div className="flex py-36 bg-hero-pattern">
      <Wrapper>
        <div className="w-screen space-y-3">
          <p className="text-zinc-800 font-bold text-7xl animate-in fade-in slide-in-from-top duration-500">
            Miguel Aenlle
          </p>
          <Subheader />
          <br />
          <br />
          <div className="flex space-x-3 pb-5">
            <Email delay={350}/>
            <Github delay={400}/>
            <Linkedin delay={450}/>
          </div>
          <ExternalLink delay={500}/>
        </div>
      </Wrapper>
    </div>
  );
};
export default Hero;
