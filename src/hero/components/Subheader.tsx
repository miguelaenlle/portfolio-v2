import { motion } from "framer-motion";
const Subheader: React.FC<{ delay: number }> = (props) => {
  return (
    <motion.p
      animate={{ y: [-30, 0], opacity: [0, 1] }}
      transition={{
        delay: props.delay,
        y: { type: "spring", stiffness: 100 },
        default: { duration: 0.5 },
      }}
      className={`text-zinc-600 break-words text-2xl micro:text-xl w-full`}
    >
      Fullstack Web & Mobile Developer
    </motion.p>
  );
};
export default Subheader;
