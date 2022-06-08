import Preview from "../../shared/models/Preview";
import ProjectScreenshot from "./ProjectScreenshot";

const ProjectScreenshots: React.FC<{ screenshots: Preview[] }> = (props) => {
  return (
    <div className="w-full">
      {props.screenshots.map((screenshot) => {
        return (
          <div key={`screenshot-div-${Math.random().toString()}`} className = "py-2 border-b-2 border-b-zinc-200">
            <ProjectScreenshot
              key={`screenshot-${Math.random().toString()}`}
              preview={screenshot}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ProjectScreenshots;
