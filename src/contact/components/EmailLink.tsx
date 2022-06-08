import { MailIcon } from "@heroicons/react/outline";
import { EMAIL, EMAIL_LINK } from "../../constants/links";

const EmailLink: React.FC<{}> = (props) => {
  return (
    <a href={EMAIL_LINK} target="_blank">
      <div className="group first-letter:marker hover:cursor-pointer flex items-center space-x-2">
        <MailIcon className="transition-all h-7 w-7 text-cyan-600 group-hover:text-cyan-800" />
        <p className="transition-all text-cyan-600 group-hover:text-cyan-800 text-xl group-hover:font-bold">
          {EMAIL}
        </p>
      </div>
    </a>
  );
};
export default EmailLink;
