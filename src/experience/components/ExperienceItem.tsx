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
      className="rounded-lg overflow-hidden"
    >
      {/* Header */}
      <div className="bg-zinc-100 p-3 flex flex-col sm:flex-row gap-4 sm:items-center">
        {logo && (
          <div className="flex-shrink-0">
            <div className="h-16 w-16 bg-zinc-200 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt={company}
                className="w-full h-full object-contain p-2"
              />
            </div>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600 font-medium text-sm sm:text-base">
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
        <div className="space-y-3 mb-3 bg-zinc-100 px-3 pb-3 pt-2">
          {projects.map((project, idx) => (
            <motion.div
              key={`${project.name}-${idx}`}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-xs sm:text-sm bg-white p-3 rounded-lg"
            >
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                  {project.name}
                </h4>
                {project.links &&
                  project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] sm:text-xs text-blue-600 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
              </div>
              {project.bullets?.[0] && (
                <p className="text-gray-700">{project.bullets[0]}</p>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceItem;
