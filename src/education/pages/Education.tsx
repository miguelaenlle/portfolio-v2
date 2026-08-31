import { motion } from "framer-motion";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../shared/components/Header";
import Wrapper from "../../shared/components/Wrapper";

const coursework = [
  "Distributed Systems",
  "Cloud Computing",
  "Operating Systems",
  "Machine Learning Systems",
  "Database Systems",
  "Deep Learning",
  "Computer Vision",
  "Computer Architecture",
];

const honors = [
  {
    name: "Provost Scholarship — Full-tuition Scholarship",
    href: "https://osfa.illinois.edu/types-of-aid/scholarships/merit-based-scholarships/",
  },
  {
    name: "UIUC Research Park Most Outstanding Intern Award — 1 of 800 interns",
    href: "https://researchpark.illinois.edu/19th-annual-intern-awards/",
  },
  {
    name: "Engineering Visionary Scholarship — 2025/2026",
    href: "https://grainger.illinois.edu/giving/evs",
  },
  {
    name: "James Scholar",
    href: "https://students.grainger.illinois.edu/jscholar/about/",
  },
  {
    name: "Dean's List — 2024/2025/2026",
    href: "https://stratcom.illinois.edu/lists/deans-list-spring-2025/",
  },
  {
    name: "GFX Innovation Scholar",
    href: "https://gfx.grainger.illinois.edu/gfx-scholars/innovation",
  },
];

const Education: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <Wrapper>
        <Header text="Education" />
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 overflow-hidden rounded-[1.25rem] border border-zinc-200 bg-white shadow-sm"
        >
          <div className="p-5 sm:p-8 md:p-10">
            <div className="grid gap-5 sm:grid-cols-[64px_minmax(0,1fr)] sm:items-center">
              <motion.div
                whileHover={{ scale: 1.04, rotate: -1 }}
                transition={{ duration: 0.22 }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-2.5 shadow-sm"
              >
                <img
                  src="/icons/organizations/uiuc-block-i.png"
                  alt="University of Illinois Block I"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <div className="min-w-0">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl">
                  University of Illinois Urbana-Champaign
                </h3>
              </div>
            </div>

            <div className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">
              <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6">
                <h4 className="font-semibold text-zinc-900 sm:text-lg">
                  Master of Science in Computer Science
                </h4>
                <p className="whitespace-nowrap text-sm font-medium text-zinc-500 sm:text-base">
                  Expected May 2028
                </p>
              </div>
              <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-baseline sm:gap-6">
                <h4 className="font-semibold text-zinc-900 sm:text-lg">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="whitespace-nowrap text-sm font-medium text-zinc-700 sm:text-base">
                  GPA 4.0/4.0
                </p>
                <p className="whitespace-nowrap text-sm font-medium text-zinc-500 sm:text-base">
                  Expected May 2027
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-base font-semibold text-zinc-900 sm:text-lg">
                Honors
              </h4>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {honors.map((honor) => (
                  <a
                    key={honor.name}
                    href={honor.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#ff5f05]/20 bg-orange-50 px-3 py-2 text-sm font-medium leading-5 text-[#9f3a00] transition hover:border-[#ff5f05]/45 hover:bg-orange-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                  >
                    <span>{honor.name}</span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="flex-shrink-0 text-xs"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-base font-semibold text-zinc-900 sm:text-lg">
                Selected coursework
              </h4>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {coursework.map((course, index) => (
                  <span key={course} className="inline-flex items-center gap-3 text-sm text-zinc-600 sm:text-base">
                    <span>{course}</span>
                    {index < coursework.length - 1 && (
                      <span className="text-base font-bold text-[#ff5f05]" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </Wrapper>
    </section>
  );
};

export default Education;
