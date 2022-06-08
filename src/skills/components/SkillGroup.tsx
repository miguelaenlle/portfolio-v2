import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "../../constants/skills";
import Skill from "../../shared/models/Skill";
import SkillItem from "./SkillItem";
import { motion } from "framer-motion";
import React, { useEffect, useMemo } from "react";

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const itemContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const SkillGroup: React.FC<{ skillTitle: string; skillID: string }> = (
  props
) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const motionList = useMemo(() => {
    return (
      <motion.div
        animate={controls}
        initial={"hidden"}
        variants={itemContainerVariants}
        className="md:flex md:flex-wrap pt-2"
      >
        {SKILLS[props.skillID].map((skill: Skill) => {
          return (
            <SkillItem
              key={`skill-item-${Math.random().toString()}`}
              skill={skill}
              compact={false}
            />
          );
        })}
      </motion.div>
    );
  }, [controls, itemContainerVariants]);

  return (
    <div
      ref={ref}
      className="bg-zinc-50 my-5 p-3 py-5 rounded-lg shadow-md overflow-hidden"
    >
      <motion.p
        animate={controls}
        initial={"hidden"}
        variants={titleVariants}
        className="text-zinc-800 text-lg px-2 font-medium"
      >
        {props.skillTitle}
      </motion.p>

      {motionList}
    </div>
  );
};
export default SkillGroup;
