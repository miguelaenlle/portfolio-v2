import Preview from "../../shared/models/Preview";
import { useInView } from "react-hook-inview";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const laptopVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, x: 200 },
};

const LaptopMockup: React.FC<{ images: Preview[] }> = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  if (props.images.length > 0) {
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={laptopVariants}
        className="flex justify-center"
      >
        <img
          className={`transition-all block object-contain max-w-3xl w-full`}
          src={props.images[0].mockupPath}
        />
      </motion.div>
    );
  } else {
    return <div></div>;
  }
};
export default LaptopMockup;
