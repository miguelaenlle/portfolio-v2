import Preview from "../../shared/models/Preview";

const ProjectScreenshot: React.FC<{ preview: Preview }> = (props) => {
  if (props.preview.formFactor === "laptop") {
    return <img src={props.preview.mockupPath} className="w-10/12 mx-auto" />;
  } else if (props.preview.formFactor === "desktop") {
    return <img src={props.preview.mockupPath} className="w-full mx-auto" />;
  } else if (props.preview.formFactor === "tablet") {
    return <img src={props.preview.mockupPath} className="w-8/12 mx-auto" />;
  } else if (props.preview.formFactor === "phone") {
    return <img src={props.preview.mockupPath} className="w-1/3 mx-auto" />;
  } else {
    return <div></div>;
  }
};
export default ProjectScreenshot;
