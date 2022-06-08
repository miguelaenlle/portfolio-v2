import { XIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { PROJECTS } from "../../constants/projects";
import Modal from "../../shared/components/Modal";
import ProjectItem from "../../shared/models/ProjectItem";
import Header from "../components/Header";
import ProjectDemos from "../components/ProjectDemos";
import ProjectDescription from "../components/ProjectDescription";
import ProjectScreenshots from "../components/ProjectScreenshots";
import ProjectSkills from "../components/ProjectSkills";
import ProjectVideos from "../components/ProjectVideos";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-20vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
  exit: {
    y: "-20vh",
    opacity: 0,
  },
};

const ProjectPage: React.FC<{}> = (props) => {
  const params = useParams<{ projectId: string }>();
  const projectID = params.projectId;
  const history = useHistory();
  const handleDismiss = () => {
    document.body.style.overflow = "unset";
    history.push("/");
  };

  const [project, setProject] = useState<ProjectItem | undefined>();

  useEffect(() => {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    const currentProject = PROJECTS.find(
      (project) => project.url === projectID
    );
    setProject(currentProject);
  }, [projectID]);

  return (
    <Modal handleDismiss={handleDismiss}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-zinc-50 w-2/3 nonlg:w-5/6 micro:w-full max-w-3xl mx-auto mt-24 rounded-lg p-7 mb-52 micro:mt-3"
      >
        {project ? (
          <React.Fragment>
            <Header project={project} handleDismiss={handleDismiss} />
            <br />

            <ProjectSkills skills={project.skills} />
            <ProjectDescription descriptionList={project.mainDescription} />

            <ProjectDemos
              appStoreLink={project.appDemoLink}
              websiteLink={project.webDemoLink}
              githubLink={project.githubLink}
            />
            <br />
            <ProjectVideos embeds={project.videos} />
            <br />
            <ProjectScreenshots screenshots={project.previews} />
          </React.Fragment>
        ) : (
          <div className="flex items-center">
            <div className="flex items-center">
              <p className="text-zinc-500">Project does not exist.</p>
            </div>
            <div className="flex-grow"></div>
            <XIcon
              onClick={handleDismiss}
              className="w-7 h-7 hover:cursor-pointer text-zinc-500 hover:text-zinc-800"
            />
          </div>
        )}
      </motion.div>
    </Modal>
  );
};
export default ProjectPage;
