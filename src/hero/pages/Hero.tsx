import Wrapper from "../../shared/components/Wrapper";
import ExternalLink from "../components/ExternalLink";
import Email from "../../shared/components/Email";
import Github from "../../shared/components/Github";
import Linkedin from "../../shared/components/Linkedin";
import Subheader from "../components/Subheader";
import { motion } from "framer-motion";

const ANIMATION_OFFSET = 0.4;

const Hero: React.FC<{}> = (props) => {
  return (
    <div className="flex py-36 bg-hero-pattern">
      <Wrapper>
        <div className="w-screen space-y-3">
          <motion.p
            animate={{ y: [-40, 0], opacity: [0, 1] }}
            transition={{
              delay: ANIMATION_OFFSET,
              y: { type: "spring", stiffness: 100 },
              default: { duration: 0.5 },
            }}
            className="text-zinc-800 font-bold text-7xl micro:text-5xl"
          >
            Miguel Aenlle
          </motion.p>
          <Subheader delay={ANIMATION_OFFSET+0.1}/>
          <br />
          <br />
          <div className="flex space-x-3 pb-3">
            <Email delay={0.2 + ANIMATION_OFFSET} />
            <Github delay={0.3 + ANIMATION_OFFSET} />
            <Linkedin delay={0.4 + ANIMATION_OFFSET} />
          </div>
          <ExternalLink delay={0.5 + ANIMATION_OFFSET} />
        </div>
      </Wrapper>
    </div>
  );
};
export default Hero;
