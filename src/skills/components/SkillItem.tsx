import Skill from "../../shared/models/Skill";

const SkillItem: React.FC<{ skill: Skill }> = (props) => {
  return (
    <div className="group hover:cursor-pointer flex items-center space-x-2 p-2">
      <img className = "transition-all w-6 h-6 group-hover:scale-110" src={`/icons/${props.skill.icon}.png`} alt={props.skill.icon} />
      <p className = "transition-all text-zinc-800 text-xl group-hover:font-bold">{props.skill.name}</p>
    </div>
  );
};
export default SkillItem;
