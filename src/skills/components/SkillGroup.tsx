import { SKILLS } from "../../constants/skills";
import Skill from "../../shared/models/Skill";
import SkillItem from "./SkillItem";

const SkillGroup: React.FC<{ skillTitle: string; skillID: string }> = (
  props
) => {
  return (
    <div className="bg-zinc-50 my-5 p-3 py-5 rounded-lg shadow-md">
      <p className="text-zinc-500 text-xl px-2">{props.skillTitle}</p>
      <div className = "md:flex md:flex-wrap pt-2">
        {SKILLS[props.skillID].map((skill: Skill) => {
          return (
            <SkillItem
              key={`skill-item-${Math.random().toString()}`}
              skill={skill}
              compact={false}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SkillGroup;
