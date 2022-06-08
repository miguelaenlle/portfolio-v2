import Skill from "../../shared/models/Skill";

const SkillItem: React.FC<{ skill: Skill; compact: boolean }> = (props) => {
  return (
    <div className={`flex items-center ${!props.compact ? "p-2 space-x-2": "space-x-2 p-1 px-2"}`}>
      <img
        className={`transition-all ${props.compact ? "h-5": "h-6"} micro:h-5 group-hover:scale-110`}
        src={`/icons/libs/${props.skill.icon}.png`}
        alt={props.skill.icon}
      />
      <p className={`transition-all text-zinc-500 text-md ${props.compact ? "text-lg" : "text-xl"}`}>
        {props.skill.name}
      </p>
    </div>
  );
};
export default SkillItem;
