import React from "react";

import {
  BriefcaseIcon,
  LocationMarkerIcon,
  OfficeBuildingIcon,
  XIcon,
  ClockIcon,
  ExternalLinkIcon,
} from "@heroicons/react/solid";
import ProjectItem from "../../shared/models/ProjectItem";
import ImageIcon from "./ImageIcon";

const Header: React.FC<{ project: ProjectItem; handleDismiss: () => void }> = (
  props
) => {
  return (
    <React.Fragment>
      <div className="flex items-center">
        <div className="flex items-center space-x-4">
          <ImageIcon id={props.project.id} imageName={props.project.iconName} />
        </div>
        <div className="flex-grow"></div>
        <XIcon
          onClick={props.handleDismiss}
          className="w-7 h-7 hover:cursor-pointer text-zinc-500 hover:text-zinc-800"
        />
      </div>
      <br />
      <h2 className="text-3xl font-bold mb-2">{props.project.actualTitle}</h2>
      <p className="text-xl text-zinc-600">{props.project.actualDescription}</p>
      <br />
      <div className = "space-y-2">
        <div className="flex items-center space-x-2 pr-5">
          <ClockIcon className="w-5 h-5 text-zinc-500" />
          <p className="text-lg text-zinc-500">
            {props.project.startTime} - {props.project.endTime}
          </p>
        </div>
        <div className="flex items-center space-x-2 pr-5">
          <LocationMarkerIcon className="w-5 h-5 text-zinc-500" />
          <p className="text-lg text-zinc-500">{props.project.location}</p>
        </div>
        {props.project.organizationURL && (
          <div className="flex pr-5">
            <a
              href={props.project.organizationURL}
              target={"_blank"}
              className="group flex items-center space-x-2 hover:cursor-pointer"
            >
              <OfficeBuildingIcon className="transition-all w-5 h-5 text-cyan-700 group-hover:text-cyan-900 group-hover:scale-105" />
              <p className="transition-all text-lg text-cyan-700 group-hover:text-cyan-900 group-hover:font-bold">
                {props.project.organization}
              </p>
              <ExternalLinkIcon className=" transition-all w-5 h-5 text-cyan-700 group-hover:text-cyan-900 group-hover:scale-105" />
            </a>
          </div>
        )}
        <div className="flex items-center space-x-2">
          <BriefcaseIcon className="w-5 h-5 text-zinc-500" />
          <p className="text-lg text-zinc-500">{props.project.occupation}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
