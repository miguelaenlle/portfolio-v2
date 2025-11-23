import { ExternalLinkIcon } from "@heroicons/react/outline";
import { RESUME_LINK } from "../../constants/links";
import { motion } from "framer-motion";

const ExternalLink: React.FC<{ delay: number }> = (props) => {
  return (
    <motion.a
      href={RESUME_LINK}
      target="_blank"
      animate={{ opacity: [0, 1], y: [-30, 0] }}
      transition={{
        delay: props.delay,
        y: { type: "spring", stiffness: 100 },
        default: { duration: 0.5 },
      }}
      className={`group hover:cursor-pointer flex items-center space-x-1`}
    >
      <p className="text-xl text-cyan-500 group-hover:text-cyan-700">
        View resume
      </p>
      <ExternalLinkIcon className="h-7 text-cyan-500 group-hover:text-cyan-700" />
    </motion.a>
  );
};
export default ExternalLink;
