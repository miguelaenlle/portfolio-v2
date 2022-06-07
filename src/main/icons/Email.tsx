import { ExternalLinkIcon, MailIcon } from "@heroicons/react/solid";
import { EMAIL_LINK } from "../../constants/links";
import Icon from "../components/Icon";

const Email: React.FC<{}> = (props) => {
  return (
    <Icon link={EMAIL_LINK}>
      <MailIcon className="text-white" />
    </Icon>
  );
};
export default Email;
