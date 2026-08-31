import { MailIcon } from "@heroicons/react/outline";
import { EMAIL, EMAIL_LINK } from "../../constants/links";

const EmailLink: React.FC<{}> = (props) => {
  return (
    <a
      href={EMAIL_LINK}
      className="group inline-flex min-h-[48px] items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/30"
    >
        <MailIcon className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        <p className="text-sm font-bold sm:text-base">
          {EMAIL}
        </p>
    </a>
  );
};
export default EmailLink;
