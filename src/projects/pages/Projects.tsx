import React from "react";
import { PROJECTS } from "../../constants/projects";
import Header from "../../shared/components/Header";
import Wrapper from "../../shared/components/Wrapper";
import Project from "../components/Project";

const Projects: React.FC<{}> = (props) => {
  return (
    <Wrapper>
      <React.Fragment>
        <Header text="Projects" />
        {PROJECTS.map((project, index) => {
          return <Project key={project.id} project={project} last={index === PROJECTS.length - 1} />;
        })}
      </React.Fragment>
    </Wrapper>
  );
};
export default Projects;
