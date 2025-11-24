import { motion } from "framer-motion";
import { BackgroundPaths } from "../components/BackgroundPaths";
import Subheader from "../components/Subheader";
import Email from "../../shared/components/Email";
import Github from "../../shared/components/Github";
import Linkedin from "../../shared/components/Linkedin";
import Resume from "../../shared/components/Resume";

const ANIMATION_OFFSET = 0.4;

const Hero: React.FC<{
  onGoToPage: (newPage: string) => void;
}> = (props) => {
  return (
    <>
      <BackgroundPaths onGoToPage={props.onGoToPage}>
        <div className="text-left">
          <motion.p
            animate={{ y: [-40, 0], opacity: [0, 1] }}
            transition={{
              delay: ANIMATION_OFFSET,
              y: { type: "spring", stiffness: 100 },
              default: { duration: 0.5 },
            }}
            className="text-zinc-200 font-bold text-5xl sm:text-6xl md:text-7xl micro:text-5xl"
          >
            Miguel Aenlle
          </motion.p>
          <Subheader delay={ANIMATION_OFFSET+0.1}/>
          <br />
          <div className="flex flex-wrap gap-2 sm:gap-3 pb-3 justify-start">
            <Resume delay={0.2 + ANIMATION_OFFSET} />
            <Linkedin delay={0.3 + ANIMATION_OFFSET} />
            <Github delay={0.4 + ANIMATION_OFFSET} />
            <Email delay={0.5 + ANIMATION_OFFSET} />
          </div>
        </div>
    </BackgroundPaths>
    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none">

    </div>
    </>
  );
};
export default Hero;
