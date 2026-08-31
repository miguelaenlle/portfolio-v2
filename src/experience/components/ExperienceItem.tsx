import { motion, Variants } from "framer-motion";
import { Experience } from "../../constants/experiences";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease: "easeOut" },
  }),
};

export const CompanyMark: React.FC<{
  experience: Experience;
  large?: boolean;
}> = ({ experience, large = false }) => {
  const size = large ? "h-20 w-20" : "h-16 w-16";

  return (
    <div
      className={`${size} flex flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm`}
    >
      <img
        src={experience.logo}
        alt={`${experience.company} logo`}
        className={`h-full w-full object-contain ${
          experience.logoFull ? "p-0" : "p-2.5"
        }`}
      />
    </div>
  );
};

const ExperienceItem: React.FC<{
  experience: Experience;
  delay?: number;
  onSelect: (experience: Experience) => void;
}> = ({ experience, delay = 0, onSelect }) => {
  return (
    <motion.button
      type="button"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      custom={delay}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      onClick={() => onSelect(experience)}
      aria-haspopup="dialog"
      aria-label={`Open ${experience.company} experience details`}
      className="group relative flex w-full flex-col self-start overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 text-left shadow-md transition-colors duration-300 hover:border-zinc-300 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
    >
      <div className="relative flex w-full items-start justify-between gap-4">
        <motion.div transition={{ duration: 0.25 }} className="group-hover:scale-105">
          <CompanyMark experience={experience} />
        </motion.div>
        {experience.current && (
          <span className="flex items-center gap-2 rounded-full border border-cyan-300 bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">
            <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_0_4px_rgba(6,182,212,0.14)]" />
            Current
          </span>
        )}
      </div>

      <div className="relative mt-5">
        <h3 className="text-2xl font-bold leading-tight text-zinc-900">
          {experience.company}
        </h3>
        <div className="mt-3 space-y-1.5">
          {experience.roles.slice(0, 2).map((role) => (
            <p key={`${role.title}-${role.dates}`} className="text-base leading-6">
              <span className="font-normal text-zinc-800">{role.title}</span>
              <span className="px-2 text-xl leading-none text-zinc-400">·</span>
              <span className="text-zinc-950">{role.dates}</span>
            </p>
          ))}
        </div>
      </div>

      <p className="text-balance relative mt-5 text-base leading-relaxed text-zinc-600">
        {experience.summary}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-2" aria-label="Keywords">
        {experience.keywords.slice(0, 3).map((keyword) => (
          <span
            key={keyword}
            className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm"
          >
            {keyword}
          </span>
        ))}
      </div>
    </motion.button>
  );
};

export default ExperienceItem;
