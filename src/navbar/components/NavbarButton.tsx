import { motion } from "framer-motion";

const NavbarButton: React.FC<{
  delay?: number;
  text: string;
  backgroundIsTransparent: boolean;
  handleGoToPage: (newPage: string) => void;
  mobile?: boolean;
}> = ({
  delay = 0,
  text,
  backgroundIsTransparent,
  handleGoToPage,
  mobile = false,
}) => {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      onClick={() => handleGoToPage(text)}
      className={`min-h-[38px] rounded-full px-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/35 ${
        mobile ? "w-full text-left" : "whitespace-nowrap"
      } ${
        backgroundIsTransparent
          ? "text-slate-300 hover:bg-white/10 hover:text-white"
          : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950"
      }`}
    >
      {text}
    </motion.button>
  );
};

export default NavbarButton;
