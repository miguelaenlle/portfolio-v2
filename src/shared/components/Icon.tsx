import { motion } from "framer-motion";

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
}) => {
  const isExternal = !link.startsWith("mailto:");

  return (
    <motion.a
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        delay,
        duration: 0.42,
        ease: [0.22, 1, 0.36, 1],
      }}
      href={link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-slate-500/80 bg-slate-800/45 px-3.5 py-2 text-slate-200 shadow-sm backdrop-blur-md transition-colors duration-200 hover:border-cyan-300/70 hover:bg-slate-700/70 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/40"
    >
      <span className="transition-transform duration-200 group-hover:scale-105">
        {children}
      </span>
      {label && <span className="text-sm font-semibold">{label}</span>}
    </motion.a>
  );
};

export default Icon;
