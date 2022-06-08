import { ArrowsExpandIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ProjectItem from "../../shared/models/ProjectItem";
import SkillItem from "../../skills/components/SkillItem";
import Mockup from "./Mockup";
const Project: React.FC<{
  project: ProjectItem;
}> = (props) => {
  const history = useHistory();
  const location = useLocation();

  const mockup = <Mockup project={props.project} />;
  const handleOpenProject = () => {
    history.push({
      pathname: `/project/${props.project.url}`,
      state: {
        background: location,
      },
    });
  };

  return (
    <div className="lg:flex py-40 border-b-2 border-zinc-200">
      <div className="flex items-start lg:hidden w-full h-50 pb-5">
        {mockup}
      </div>
      <div className="w-full lg:w-2/5 space-y-4 flex flex-col justify-center">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl text-zinc-800 font-bold">
            {props.project.displayTitle}
          </h2>
        </div>
        <p className="text-zinc-400 text-xl micro:text-md">
          {props.project.description}
        </p>

        {props.project.impact && (
          <p className="text-zinc-500 text-xl micro:text-md pb-4">
            {props.project.impact}
          </p>
        )}

        <button
          onClick={handleOpenProject}
          className="w-fit group transition-all bg-zinc-100 shadow-md rounded-lg p-4  hover:bg-zinc-200"
        >
          <div className="flex items-center space-x-3">
            <ArrowsExpandIcon className="transition-all w-7 h-7 text-zinc-600 group-hover:text-zinc-800 group-hover:scale-1" />
            <p className="text-lg transition-all text-zinc-600 group-hover:font-bold group-hover:text-zinc-800">
              View Project
            </p>
          </div>
        </button>
        <div className="flex flex-wrap pt-4">
          {props.project.skills.map((skill) => {
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
      <div className="px-5 nonlg:hidden w-full h-50 lg:w-3/5">{mockup}</div>
    </div>
  );
};
export default Project;
