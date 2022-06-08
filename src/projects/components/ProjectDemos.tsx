import DemoLink from "./DemoLink";

const ProjectDemos: React.FC<{
  appStoreLink: string | null;
  websiteLink: string | null;
  githubLink: string | null;
}> = (props) => {
  return (
    <div className="space-y-3">
      <br />
      {props.appStoreLink && (
        <DemoLink
          linkId="app-store"
          linkText="App Store Link"
          link={props.appStoreLink}
        />
      )}
      {props.websiteLink && (
        <DemoLink
          linkId="website"
          linkText="Website Link"
          link={props.websiteLink}
        />
      )}
      {props.githubLink && (
        <DemoLink
          linkId="github"
          linkText="GitHub Link"
          link={props.githubLink}
        />
      )}
      <br />
    </div>
  );
};
export default ProjectDemos;
