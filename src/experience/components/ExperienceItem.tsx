import { ExternalLinkIcon } from "@heroicons/react/solid";
import { motion, Variants } from "framer-motion";

interface ExperienceProjectLink {
  label: string;
  href: string;
}

interface ExperienceProject {
  name: string;
  bullets: string[];
  skills: string[];
  links?: ExperienceProjectLink[];
}

interface ExperienceItemProps {
  logo?: string;
  logoFull?: boolean;
  title: string;
  company: string;
  dateRange?: string;
  description?: string;
  delay?: number;
  showDate?: boolean;
  projects?: ExperienceProject[];
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay,
      ease: "easeOut",
    },
  }),
};

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  logo,
  logoFull,
  title,
  company,
  dateRange,
  description,
  delay = 0,
  showDate = true,
  projects,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
    >
      {/* Header */}
      <div className="bg-zinc-100 p-3 flex gap-4 items-center rounded-t-lg">
        {logo && (
          <div className="flex-shrink-0">
            <div className="h-16 w-16 bg-zinc-200 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={logo}
                alt={company}
                className={`w-full h-full object-contain ${logoFull ? "p-0" : "p-2"}`}
              />
            </div>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600 font-medium text-base">
            {company}
          </p>
          {showDate && dateRange && (
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              {dateRange}
            </p>
          )}
        </div>
      </div>

      {/* Projects */}
      {projects && projects.length > 0 && (
        <div className="space-y-3 mb-3 bg-zinc-100 px-3 pb-3 pt-2 rounded-b-lg">
          {projects.map((project, idx) => (
            <motion.div
              key={`${project.name}-${idx}`}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-xs text-sm bg-white p-3 rounded-lg"
            >
              <div className="flex flex-wrap items-center mb-2 gap-2">
                <h4 className="font-semibold text-gray-900 text-base">
                  {project.name}
                </h4>
                {project.links &&
                  project.links.map((link) => (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-600"
                    >
                      <div className="flex items-center gap-1 group hover:cursor-pointer" key={link.href}>
                        <ExternalLinkIcon className="h-6 w-6 text-cyan-600 group-hover:text-cyan-800" />
                        <p className="text-base group-hover:text-cyan-800">
                          {link.label}
                        </p>
                      </div>
                    </a>
                  ))}
              </div>
              {project.bullets && project.bullets.length > 0 && (
                <ul className="list-disc list-outside pl-5 text-gray-700 text-base leading-relaxed space-y-1">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceItem;
