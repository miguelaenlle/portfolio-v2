import Skill from "../../shared/models/Skill";
import SkillItem from "../../skills/components/SkillItem";

const ProjectSkills: React.FC<{ skills: Skill[] }> = (props) => {
  return (
    <div className="bg-zinc-100 shadow-md md:flex md:flex-wrap p-1 px-1 py-3 mt-2">
      {props.skills.map((skill) => {
        return (
          <SkillItem
            key={`skill-item-${Math.random().toString()}`}
            skill={skill}
            compact={true}
          />
        );
      })}
    </div>
  );
};
export default ProjectSkills;
