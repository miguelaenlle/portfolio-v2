import Skill from "./Skill";
import Preview from "./Preview";

class ProjectItem {
  id = "";
  iconName = "";
  displayTitle = "";
  actualTitle = "";
  description = "";
  impact: string | null = null;
  url = "";
  skills: Skill[] = [];

  organization = "";
  location = "";
  occupation = "";
  startTime = "";
  endTime = "";

  services: string[] = [];
  mainDescription: string[] = [];
  screenshots: Preview[] = [];
  previews: Preview[] = [];
  videos: string[] = [];

  appDemoLink: string | null = null;
  webDemoLink: string | null = null;
  githubLink: string | null = null;

  constructor(
    id: string,
    iconName: string,
    displayTitle: string,
    actualTitle: string,
    description: string,
    impact: string | null,
    url: string,
    skills: Skill[],

    organization: string,
    location: string,
    occupation: string,
    startTime: string,
    endTime: string,

    services: string[],
    mainDescription: string[],
    screenshots: Preview[],
    previews: Preview[],
    videos: string[],

    appDemoLink: string | null,
    webDemoLink: string | null,
    githubLink: string | null
  ) {
    this.id = id;
    this.iconName = iconName;
    this.displayTitle = displayTitle;
    this.actualTitle = actualTitle;
    this.description = description;
    this.impact = impact;
    this.url = url;
    this.skills = skills;

    this.organization = organization;
    this.location = location;
    this.occupation = occupation;
    this.startTime = startTime;
    this.endTime = endTime;

    this.services = services;
    this.mainDescription = mainDescription;
    this.screenshots = screenshots;
    this.previews = previews;
    this.videos = videos;

    this.appDemoLink = appDemoLink;
    this.webDemoLink = webDemoLink;
    this.githubLink = githubLink;
  }
}

export default ProjectItem;
