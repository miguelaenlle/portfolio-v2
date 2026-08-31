import {
  faArrowUpRightFromSquare,
  faCalendarDays,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Experience } from "../../constants/experiences";
import { CompanyMark } from "./ExperienceItem";

const ExperienceModal: React.FC<{
  experience: Experience;
  onClose: () => void;
}> = ({ experience, onClose }) => {
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-zinc-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.section
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`experience-modal-${experience.id}`}
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="relative max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-zinc-50 shadow-2xl sm:rounded-3xl"
      >
        <div className="sticky top-0 z-10 flex justify-end bg-gradient-to-b from-zinc-50 via-zinc-50/95 to-transparent px-5 pb-4 pt-5 sm:px-8">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close experience details"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="px-6 pb-10 sm:px-10 sm:pb-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <CompanyMark experience={experience} large />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h2
                  id={`experience-modal-${experience.id}`}
                  className="text-3xl font-bold leading-tight text-zinc-900"
                >
                  {experience.company}
                </h2>
                {experience.current && (
                  <span className="rounded-full border border-cyan-300 bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">
                    Current
                  </span>
                )}
              </div>
              <p className="text-balance mt-2 max-w-2xl text-base leading-relaxed text-zinc-600">
                {experience.summary}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2" aria-label="Keywords">
            {experience.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-sm font-medium text-cyan-800"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-6">
            {experience.roles.map((role, roleIndex) => (
              <article
                key={`${role.title}-${role.dates}`}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-5">
                  <h3 className="text-xl font-normal text-zinc-900">{role.title}</h3>
                  <p className="flex items-center gap-2 text-base font-normal text-zinc-950">
                    <FontAwesomeIcon icon={faCalendarDays} aria-hidden="true" />
                    {role.dates}
                  </p>
                </div>
                {role.summary && (
                  <p className="text-balance mt-4 leading-relaxed text-zinc-600">{role.summary}</p>
                )}
                {roleIndex === 0 && experience.references && (
                  <div
                    className="mt-5 grid gap-3 sm:grid-cols-2"
                    aria-label="PrairieLearn references"
                  >
                    {experience.references.map((reference) => (
                      <a
                        key={reference.href}
                        href={reference.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex min-h-[48px] items-center justify-between gap-3 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-3 text-sm font-bold text-cyan-900 transition hover:border-cyan-400 hover:bg-cyan-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
                      >
                        {reference.label}
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-xs text-cyan-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </div>
                )}
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 marker:text-cyan-500 sm:text-base">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {experience.link && (
            <a
              href={experience.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-bold text-cyan-700 transition hover:text-cyan-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
            >
              {experience.linkLabel ?? `Visit ${experience.company}`}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
            </a>
          )}
        </div>
      </motion.section>
    </motion.div>,
    modalRoot
  );
};

export default ExperienceModal;
