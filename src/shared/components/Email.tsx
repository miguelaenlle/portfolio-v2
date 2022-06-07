import { ExternalLinkIcon, MailIcon } from "@heroicons/react/solid";
import { EMAIL_LINK } from "../../constants/links";
import Icon from "./Icon";

const Email: React.FC<{delay: number}> = (props) => {
  return (
    <Icon link={EMAIL_LINK} delay={props.delay}>
      <MailIcon className="text-white" />
    </Icon>
  );
};
export default Email;
