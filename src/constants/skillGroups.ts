import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAws,
  faCloudflare,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faGithub,
  faGolang,
  faHtml5,
  faJava,
  faJs,
  faLinux,
  faNodeJs,
  faPython,
  faReact,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightArrowLeft,
  faBolt,
  faBrain,
  faChartLine,
  faCloud,
  faCode,
  faCodeBranch,
  faCubes,
  faDatabase,
  faDiagramProject,
  faEye,
  faFaceSmile,
  faFire,
  faGaugeHigh,
  faLeaf,
  faLink,
  faMicrochip,
  faNetworkWired,
  faPlug,
  faRotate,
  faServer,
  faTableCells,
  faTableColumns,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

export type PortfolioSkill = {
  name: string;
  icon: IconDefinition;
};

export type PortfolioSkillGroup = {
  id: string;
  title: string;
  skills: PortfolioSkill[];
};

export const SKILL_GROUPS: PortfolioSkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "Python", icon: faPython },
      { name: "Go", icon: faGolang },
      { name: "C++", icon: faCode },
      { name: "C", icon: faCode },
      { name: "Java", icon: faJava },
      { name: "TypeScript", icon: faJs },
      { name: "JavaScript", icon: faJs },
      { name: "SQL", icon: faDatabase },
      { name: "Bash", icon: faTerminal },
      { name: "Swift", icon: faSwift },
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3Alt },
    ],
  },
  {
    id: "systems-cloud",
    title: "Distributed Systems & Cloud",
    skills: [
      { name: "AWS", icon: faAws },
      { name: "GCP", icon: faCloud },
      { name: "Cloudflare", icon: faCloudflare },
      { name: "Kubernetes", icon: faCubes },
      { name: "Docker", icon: faDocker },
      { name: "Linux", icon: faLinux },
      { name: "Prometheus", icon: faChartLine },
    ],
  },
  {
    id: "ai-ml",
    title: "Applied AI",
    skills: [
      { name: "PyTorch", icon: faFire },
      { name: "torch.distributed", icon: faNetworkWired },
      { name: "DDP", icon: faDiagramProject },
      { name: "NCCL", icon: faNetworkWired },
      { name: "NVLink", icon: faLink },
      { name: "CUDA", icon: faMicrochip },
      { name: "vLLM", icon: faGaugeHigh },
      { name: "LangGraph", icon: faDiagramProject },
      { name: "Hugging Face", icon: faFaceSmile },
      { name: "scikit-learn", icon: faBrain },
      { name: "OpenCV", icon: faEye },
      { name: "NumPy", icon: faTableCells },
      { name: "Pandas", icon: faTableColumns },
      { name: "Generative AI", icon: faFire },
      { name: "Adversarial ML", icon: faBrain },
    ],
  },
  {
    id: "web-data",
    title: "Production Engineering & Security",
    skills: [
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNodeJs },
      { name: "Express", icon: faServer },
      { name: "REST", icon: faArrowRightArrowLeft },
      { name: "tRPC", icon: faCodeBranch },
      { name: "WebSockets", icon: faArrowRightArrowLeft },
      { name: "Socket.IO", icon: faPlug },
      { name: "PostgreSQL", icon: faDatabase },
      { name: "Redis", icon: faBolt },
      { name: "MongoDB", icon: faLeaf },
      { name: "CI/CD", icon: faRotate },
      { name: "Git", icon: faGitAlt },
      { name: "GitHub Actions", icon: faGithub },
    ],
  },
];
