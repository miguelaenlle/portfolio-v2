import { motion } from "framer-motion";
import { BackgroundPaths } from "../components/BackgroundPaths";
import Email from "../../shared/components/Email";
import Github from "../../shared/components/Github";
import Linkedin from "../../shared/components/Linkedin";
import Resume from "../../shared/components/Resume";

const ANIMATION_OFFSET = 0.18;

const Hero: React.FC<{
  onGoToPage: (newPage: string) => void;
}> = (props) => {
  return (
    <>
      <BackgroundPaths onGoToPage={props.onGoToPage}>
        <div className="mx-auto max-w-5xl text-left">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: ANIMATION_OFFSET,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl font-bold tracking-[-0.04em] text-zinc-100 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Miguel Aenlle
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_OFFSET + 0.12,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 flex flex-wrap justify-start gap-2 pb-3 sm:gap-3"
          >
            <Resume delay={0.2 + ANIMATION_OFFSET} />
            <Linkedin delay={0.3 + ANIMATION_OFFSET} />
            <Github delay={0.4 + ANIMATION_OFFSET} />
            <Email delay={0.5 + ANIMATION_OFFSET} />
          </motion.div>
        </div>
    </BackgroundPaths>
    </>
  );
};
export default Hero;
