import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import NavbarButton from "./NavbarButton";

const navigationItems = ["About", "Experience", "Education", "Skills"];

const Navbar: React.FC<{
  isTransparent: boolean;
  handleGoToPage: (newPage: string) => void;
}> = ({ isTransparent, handleGoToPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const goToPage = (page: string) => {
    handleGoToPage(page);
    setMenuOpen(false);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed left-1/2 top-3 z-40 w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-2xl border px-2 py-1.5 shadow-lg backdrop-blur-xl transition-colors duration-300 sm:w-auto sm:rounded-full ${
        isTransparent
          ? "border-slate-700/70 bg-slate-950/60 shadow-black/10"
          : "border-zinc-200/70 bg-white/90 shadow-zinc-950/10"
      }`}
    >
      <div className="flex h-10 items-center justify-between gap-2 sm:justify-start">
        <button
          type="button"
          onClick={() => goToPage("About")}
          aria-label="Go to about section"
          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-black tracking-tight transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/35 ${
            isTransparent
              ? "bg-white/10 text-white hover:bg-white/20"
              : "bg-slate-900 text-white hover:bg-cyan-800"
          }`}
        >
          MA
        </button>

        <div className="hidden items-center gap-1 sm:flex">
          {navigationItems.map((buttonText, index) => (
            <NavbarButton
              key={buttonText}
              delay={0.035 * index}
              text={buttonText}
              backgroundIsTransparent={isTransparent}
              handleGoToPage={goToPage}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/35 sm:hidden ${
            isTransparent
              ? "text-slate-200 hover:bg-white/10 hover:text-white"
              : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
          }`}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden sm:hidden"
          >
            <div className="grid gap-1 border-t border-white/10 py-2">
              {navigationItems.map((buttonText) => (
                <NavbarButton
                  key={buttonText}
                  text={buttonText}
                  backgroundIsTransparent={isTransparent}
                  handleGoToPage={goToPage}
                  mobile
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
