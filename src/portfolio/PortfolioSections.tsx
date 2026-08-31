import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faEnvelope,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  EMAIL,
  EMAIL_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  RESUME_LINK,
} from "../constants/links";

type Experience = {
  company: string;
  role: string;
  dates: string;
  logo: string;
  current?: boolean;
  description: string;
  highlights: string[];
  tags: string[];
};

const experiences: Experience[] = [
  {
    company: "PrairieLearn",
    role: "Software Engineer",
    dates: "Aug 2026 — Present",
    logo: "/icons/organizations/prairielearn.png",
    current: true,
    description:
      "Architecting agentic systems for course authoring, autograder debugging, and instructor analytics.",
    highlights: [
      "Runs untrusted LLM-generated code inside isolated per-agent Linux VMs.",
      "Sustains long-running sessions with R2 checkpoints and socket-streamed progress.",
    ],
    tags: ["Agents", "Cloudflare Workers", "R2", "Linux"],
  },
  {
    company: "Adobe",
    role: "Software Engineer Intern",
    dates: "May 2026 — Aug 2026",
    logo: "/icons/organizations/adobe.png",
    description:
      "Built a multi-agent generation workflow for Fortune 500 advertising teams.",
    highlights: [
      "Reduced manual campaign creation to five minutes.",
      "Searched and filtered 10,000+ multimodal assets and templates per client.",
    ],
    tags: ["LangGraph", "Gemini", "VLMs", "Evaluations"],
  },
  {
    company: "PrairieLearn",
    role: "Software Engineer Intern",
    dates: "Dec 2024 — May 2026",
    logo: "/icons/organizations/prairielearn.png",
    description:
      "Shipped AI grading and assessment infrastructure across a global education platform.",
    highlights: [
      "Achieved 99% grading accuracy on 10,000+ submissions and co-authored an AIED 2026 paper.",
      "Delivered concurrent inference and resumable workflows to 180,000+ students.",
    ],
    tags: ["TypeScript", "PostgreSQL", "WebSockets", "LLMs"],
  },
  {
    company: "Normandy Remodeling",
    role: "Software Engineer",
    dates: "Aug 2022 — Jan 2025",
    logo: "/icons/organizations/normandy.png",
    description:
      "Rebuilt a legacy business database as a secure full-stack operations platform.",
    highlights: [
      "Migrated 200,000 leads, 33,000 customers, and 9,900 projects.",
      "Designed authentication and role-based access for 10+ staff roles.",
    ],
    tags: ["React", "Node.js", "MongoDB", "RBAC"],
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "Go", "C++", "C", "Java", "TypeScript", "SQL", "Bash"],
  },
  {
    label: "Systems & cloud",
    items: ["AWS", "GCP", "Cloudflare", "Kubernetes", "Docker", "Linux", "Prometheus"],
  },
  {
    label: "AI infrastructure",
    items: ["PyTorch", "DDP", "NCCL", "CUDA", "vLLM", "LangGraph", "Hugging Face"],
  },
  {
    label: "Web & data",
    items: ["React", "Node.js", "PostgreSQL", "Redis", "WebSockets", "tRPC", "CI/CD"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ number, title, kicker }: { number: string; title: string; kicker: string }) {
  return (
    <motion.div
      className="section-heading"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-heading-line">
        <span>{number}</span>
        <p>{kicker}</p>
      </div>
      <h2>{title}</h2>
    </motion.div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="tag-list" aria-label="Technologies">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export function AboutSection() {
  const focusAreas = [
    ["01", "Agentic systems", "Durable, tool-using workflows that operate safely in production."],
    ["02", "ML infrastructure", "Distributed training, inference, orchestration, and observability."],
    ["03", "Product engineering", "Clear interfaces backed by reliable systems and measurable outcomes."],
  ];

  return (
    <section id="about" data-section="About" className="portfolio-section about-section">
      <div className="section-shell">
        <SectionHeading number="01" kicker="A little context" title="Engineering systems that hold up in the real world." />
        <div className="about-layout">
          <motion.div
            className="portrait-frame"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <img src="/images/miguel.jpg" alt="Miguel Aenlle" />
            <div className="portrait-status"><span /> Chicago · Champaign</div>
          </motion.div>
          <motion.div
            className="about-copy"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <p className="about-lead">
              I’m a computer scientist at UIUC focused on the intersection of
              <strong> AI agents</strong>, <strong>distributed systems</strong>, and
              <strong> machine learning infrastructure</strong>.
            </p>
            <p>
              I like taking ambitious ideas all the way to dependable software—whether that means sandboxing generated code, recovering GPU jobs from failure, or shipping AI tools to hundreds of thousands of students.
            </p>
            <div className="about-note">
              <span>Currently</span>
              <p>Software Engineer at PrairieLearn and ML Systems Research Intern at UIUC SSAIL.</p>
            </div>
          </motion.div>
        </div>
        <div className="focus-grid">
          {focusAreas.map(([number, title, description], index) => (
            <motion.article
              key={title}
              className="focus-card"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" data-section="Experience" className="portfolio-section experience-section">
      <div className="section-shell">
        <SectionHeading number="02" kicker="Production experience" title="Building useful things at meaningful scale." />
        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.dates}`}
              className={experience.current ? "experience-card is-current" : "experience-card"}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
            >
              <div className="experience-topline">
                <div className="company-mark">
                  <img src={experience.logo} alt="" aria-hidden="true" />
                </div>
                {experience.current && <span className="current-pill"><i /> Current</span>}
              </div>
              <div className="experience-title">
                <p>{experience.company}</p>
                <h3>{experience.role}</h3>
                <span>{experience.dates}</span>
              </div>
              <p className="experience-summary">{experience.description}</p>
              <ul className="impact-list">
                {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <TagList tags={experience.tags} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchGraphic({ type }: { type: "sim" | "cluster" | "vision" }) {
  if (type === "vision") {
    return (
      <div className="research-graphic vision-graphic" aria-hidden="true">
        <div><span style={{ width: "39%" }} /></div>
        <div><span style={{ width: "80%" }} /></div>
        <p><b>39%</b><FontAwesomeIcon icon={faArrowRight} /><b>80%</b></p>
      </div>
    );
  }

  return (
    <div className={`research-graphic node-graphic ${type}`} aria-hidden="true">
      {Array.from({ length: type === "cluster" ? 8 : 7 }, (_, index) => (
        <i key={index} style={{ "--index": index } as React.CSSProperties} />
      ))}
      <span className="graphic-core" />
    </div>
  );
}

export function ResearchSection() {
  const research = [
    {
      type: "sim" as const,
      label: "UIUC SSAIL · Aug 2026 — Present",
      title: "Teaching agents to operate LLM infrastructure.",
      description: "Building an agentic environment for scheduling, routing, and autoscaling policies across NVIDIA Dynamo inference clusters.",
      metric: "1,200×",
      metricLabel: "real-time simulation speed",
      tags: ["NVIDIA Dynamo", "DynoSim", "RL", "Distributed inference"],
    },
    {
      type: "cluster" as const,
      label: "OptiTrain · Jun 2026 — Present",
      title: "Making distributed training recover itself.",
      description: "Designed a lightweight control plane that detects GPU-node failures, restores checkpoints, and makes cluster behavior observable.",
      metric: "31 / 31",
      metricLabel: "injected failures recovered",
      tags: ["Go", "Kubernetes", "PyTorch", "Prometheus"],
    },
    {
      type: "vision" as const,
      label: "Google Summer of Code · Jun 2025 — Feb 2026",
      title: "Expanding scarce medical imaging data.",
      description: "Trained conditional diffusion and GAN models to augment proprietary gastric MRI data and improve downstream segmentation.",
      metric: "16×",
      metricLabel: "larger training set",
      tags: ["PyTorch", "Diffusion", "GANs", "Medical imaging"],
      link: "https://summerofcode.withgoogle.com/programs/2025/projects/QB45Mcpx",
    },
  ];

  return (
    <section id="research" data-section="Research" className="portfolio-section research-section">
      <div className="section-shell">
        <SectionHeading number="03" kicker="Research & systems" title="Exploring what reliable ML infrastructure can do next." />
        <div className="research-grid">
          {research.map((item, index) => (
            <motion.article
              key={item.title}
              className="research-card"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <ResearchGraphic type={item.type} />
              <p className="research-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p className="research-description">{item.description}</p>
              <div className="research-metric"><strong>{item.metric}</strong><span>{item.metricLabel}</span></div>
              <TagList tags={item.tags} />
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="text-link">
                  View program <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" data-section="Education" className="portfolio-section education-section">
      <div className="section-shell">
        <SectionHeading number="04" kicker="Education & toolkit" title="Strong foundations, built for systems work." />
        <motion.div
          className="education-card"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="illinois-mark">I</div>
          <div className="education-main">
            <div className="education-header">
              <div>
                <p>University of Illinois Urbana-Champaign</p>
                <span>Grainger College of Engineering</span>
              </div>
              <span className="gpa-pill">4.0 GPA</span>
            </div>
            <div className="degree-list">
              <div><h3>M.S. in Computer Science</h3><span>Expected May 2028</span></div>
              <div><h3>B.S. in Computer Science</h3><span>Expected May 2027</span></div>
            </div>
            <p className="coursework"><strong>Selected coursework</strong> Distributed Systems · Cloud Computing · Operating Systems · Machine Learning Systems · Deep Learning · Computer Architecture</p>
          </div>
        </motion.div>

        <div className="education-lower-grid">
          <motion.article
            className="leadership-card"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
          >
            <p>Leadership</p>
            <h3>Web Team Lead · HackIllinois</h3>
            <span>Led a four-engineer team shipping event systems used by 2,000+ attendees and generating 500,000+ page views.</span>
          </motion.article>
          <motion.div
            className="skill-matrix"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-row">
                <p>{group.label}</p>
                <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ContactFooter() {
  return (
    <footer className="contact-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="section-shell footer-layout">
        <p className="footer-kicker">Have an ambitious system to build?</p>
        <h2>Let’s make it reliable.</h2>
        <a className="footer-email" href={EMAIL_LINK}>
          {EMAIL} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
        <div className="footer-links">
          <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a>
          <a href={GITHUB_LINK} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
          <a href={RESUME_LINK} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFileLines} /> Résumé</a>
          <a href={EMAIL_LINK}><FontAwesomeIcon icon={faEnvelope} /> Email</a>
        </div>
        <div className="footer-bottom"><span>Miguel Aenlle</span><span>© 2026</span></div>
      </div>
    </footer>
  );
}
