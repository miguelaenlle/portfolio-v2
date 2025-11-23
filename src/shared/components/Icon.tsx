import { useDisplay } from "../hooks/use-display";
import { motion } from "framer-motion";
import { useState } from "react";

interface IconProps {
  link: string;
  children: JSX.Element;
  delay: number;
  label?: string;
  showLabel?: boolean;
}

const Icon: React.FC<IconProps> = ({
  link,
  children,
  delay,
  label,
  showLabel = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      animate={{ y: [-52, 0], opacity: [0, 1] }}
      transition={{
        delay,
        y: { type: "spring", stiffness: 100 },
        default: { duration: 0.4 },
      }}
      href={link}
      target="_blank"
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="group bg-slate-700/40 backdrop-blur-sm border-2 border-slate-500 hover:border-slate-300 hover:bg-slate-600/60 hover:cursor-pointer px-3 py-2 rounded-full shadow-md hover:shadow-lg flex items-center justify-center"
      >
        <div className="transition-all group-hover:scale-110 text-slate-300 group-hover:text-white pl-2">
          {children}
        </div>
        {label && (
          <motion.span
            initial={{ opacity: showLabel ? 1 : 0, width: showLabel ? "auto" : 0 }}
            animate={
              showLabel
                ? { opacity: 1, width: "auto" }
                : isHovered
                ? { opacity: 1, width: "auto" }
                : { opacity: 0, width: 0 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-slate-300 group-hover:text-white text-sm font-medium overflow-hidden whitespace-nowrap px-1"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.a>
  );
};
export default Icon;
