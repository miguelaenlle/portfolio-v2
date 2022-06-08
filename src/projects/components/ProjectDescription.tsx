import React from "react";

const ProjectDescription: React.FC<{ descriptionList: string[] }> = (props) => {
  return (
    <ul className="list-disc px-5 py-5 space-y-3 pt-10">
      {props.descriptionList.map((description) => {
        return (
          <li
            key={`${Math.random.toString()}-descriptor`}
            className="text-zinc-800 text-md"
          >
            {description}
          </li>
        );
      })}
    </ul>
  );
};
export default ProjectDescription;
