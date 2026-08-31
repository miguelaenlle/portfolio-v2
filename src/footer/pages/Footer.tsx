import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  EMAIL_LINK,
  GITHUB_LINK,
  GITHUB_PROJECT_LINK,
  LINKEDIN_LINK,
} from "../../constants/links";

const socialLinks = [
  { label: "LinkedIn", href: LINKEDIN_LINK, icon: faLinkedin },
  { label: "GitHub", href: GITHUB_LINK, icon: faGithub },
  { label: "Email", href: EMAIL_LINK, icon: faEnvelope },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((link) => {
            const external = !link.href.startsWith("mailto:");
            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/30"
              >
                <FontAwesomeIcon icon={link.icon} aria-hidden="true" />
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-slate-800 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Designed and built by Miguel Aenlle.</p>
          <a
            href={GITHUB_PROJECT_LINK}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-slate-300 transition-colors hover:text-cyan-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/30"
          >
            Source on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
