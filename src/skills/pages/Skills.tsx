import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../../constants/skillGroups";
import Header from "../../shared/components/Header";
import Wrapper from "../../shared/components/Wrapper";

const groupStyles = [
  {
    surface: "border-sky-200 bg-sky-50/60",
    title: "text-sky-950",
    chip: "border-sky-200 bg-white text-sky-900 hover:border-sky-400 hover:bg-sky-100",
    icon: "bg-sky-100 text-sky-700",
  },
  {
    surface: "border-cyan-200 bg-cyan-50/60",
    title: "text-cyan-950",
    chip: "border-cyan-200 bg-white text-cyan-900 hover:border-cyan-400 hover:bg-cyan-100",
    icon: "bg-cyan-100 text-cyan-700",
  },
  {
    surface: "border-indigo-200 bg-indigo-50/60",
    title: "text-indigo-950",
    chip: "border-indigo-200 bg-white text-indigo-900 hover:border-indigo-400 hover:bg-indigo-100",
    icon: "bg-indigo-100 text-indigo-700",
  },
  {
    surface: "border-emerald-200 bg-emerald-50/60",
    title: "text-emerald-950",
    chip: "border-emerald-200 bg-white text-emerald-900 hover:border-emerald-400 hover:bg-emerald-100",
    icon: "bg-emerald-100 text-emerald-700",
  },
];

const Skills: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <Wrapper>
        <Header text="Skills" />

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((group, groupIndex) => {
            const style = groupStyles[groupIndex % groupStyles.length];
            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.14 }}
                transition={{
                  duration: 0.4,
                  delay: (groupIndex % 2) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`rounded-[1.25rem] border p-5 sm:p-6 ${style.surface}`}
              >
                <h3 className={`text-lg font-bold tracking-tight ${style.title}`}>
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2, scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      transition={{ duration: 0.18 }}
                      className={`group flex min-h-[42px] items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold shadow-sm transition-colors ${style.chip}`}
                    >
                      <span
                        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg transition-transform duration-200 group-hover:rotate-3 group-hover:scale-105 ${style.icon}`}
                      >
                        <FontAwesomeIcon icon={skill.icon} aria-hidden="true" />
                      </span>
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default Skills;
