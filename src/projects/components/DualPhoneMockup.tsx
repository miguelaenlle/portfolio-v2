import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-hook-inview";
import Preview from "../../shared/models/Preview";

const phone1 = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, y: -200 },
};
const phone2 = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  hidden: { opacity: 0, y: -200 },
};

const DualPhoneMockup: React.FC<{ images: Preview[] }> = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  if (props.images.length > 1) {
    return (
      <div ref={ref} className="w-full flex lg:justify-center">
        <motion.img
          animate={controls}
          initial="hidden"
          className={`object-contain nonlg:w-1/2 lg:w-1/3 nonlg:max-w-[250px]`}
          src={props.images[0].mockupPath}
          variants={phone1}
        />
        <motion.img
          animate={controls}
          initial="hidden"
          className={`object-contain nonlg:w-1/2 lg:w-1/3 nonlg:max-w-[250px]`}
          src={props.images[1].mockupPath}
          variants={phone2}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default DualPhoneMockup;
