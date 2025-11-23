import { motion } from "framer-motion";

const NavbarButton: React.FC<{
  delay: number;
  text: string;
  selectedButton: string;
  backgroundIsTransparent: boolean;
  handleGoToPage: (newPage: string) => void;
}> = (props) => {
  const handleSelect = () => {
    props.handleGoToPage(props.text);
  };


  const buttonColor = props.backgroundIsTransparent ? 
      (props.selectedButton === props.text ? "text-zinc-200 font-bold" : "text-zinc-400") : 
      (props.selectedButton === props.text? "text-zinc-800 font-bold" : "text-zinc-500")

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{
        delay: props.delay,
        y: { type: "spring", stiffness: 100 },
        default: { duration: 0.5 },
      }}
      onClick={handleSelect}
      className={`hover:cursor-pointer ${
        buttonColor
      } hover:text-zinc-800 hover:font-bold text-xl p-2`}
    >
      {props.text}
    </motion.div>
  );
};
export default NavbarButton;
