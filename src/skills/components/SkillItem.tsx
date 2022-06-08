import Skill from "../../shared/models/Skill";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};

const SkillItem: React.FC<{
  skill: Skill;
  compact: boolean;
}> = (props) => {
  return (
    <motion.div
      variants={itemVariants}
      className={`flex items-center ${
        !props.compact ? "p-2 space-x-2" : "space-x-2 p-1 px-2"
      }`}
    >
      <img
        className={`${
          props.compact ? "h-5" : "h-6"
        } micro:h-5 group-hover:scale-110`}
        src={`/icons/libs/${props.skill.icon}.png`}
        alt={props.skill.icon}
      />
      <p
        className={`text-zinc-500 text-md ${
          props.compact ? "text-lg" : "text-xl"
        }`}
      >
        {props.skill.name}
      </p>
    </motion.div>
  );
};
export default SkillItem;
