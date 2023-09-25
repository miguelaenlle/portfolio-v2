import {
  ASJH_ID,
  COSTBOOK_ID,
  EASYMEAL_ID,
  GANTTCHART_ID,
  NCDB_ID,
  REDDIT_ID,
  RENTR_ID,
  SCATTER_ID,
  TIDYNOTE_ID,
} from "../../constants/projects";
import ProjectItem from "../../shared/models/ProjectItem";
import DualPhoneMockup from "./DualPhoneMockup";
import LaptopMockup from "./LaptopMockup";
import TabletMockup from "./TabletMockup";

const Mockup: React.FC<{ project: ProjectItem }> = (props) => {
  const projectID = props.project.id;

  if (projectID === REDDIT_ID) {
    return <LaptopMockup images={props.project.screenshots} />;
  } else if (projectID === SCATTER_ID) {
    return <DualPhoneMockup images={props.project.screenshots} />;
  } else if (projectID === TIDYNOTE_ID) {
    return <TabletMockup images={props.project.screenshots} />;
  } else if (projectID === RENTR_ID) {
    return <DualPhoneMockup images={props.project.screenshots} />;
  } else if (projectID === ASJH_ID) {
    return <LaptopMockup images={props.project.screenshots} />;
  } else if (projectID === EASYMEAL_ID) {
    return <DualPhoneMockup images={props.project.screenshots} />;
  } else if (projectID === GANTTCHART_ID) {
    return <LaptopMockup images={props.project.screenshots} />;
  } else if (projectID === COSTBOOK_ID) {
    return <LaptopMockup images={props.project.screenshots} />;
  } else if (projectID === NCDB_ID) {
    return <LaptopMockup images={props.project.screenshots} />;
  } else {
    return <div></div>;
  }
};
export default Mockup;
