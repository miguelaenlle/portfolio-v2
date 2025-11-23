import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { EMAIL_LINK } from "../../constants/links";
import Icon from "./Icon";

const Email: React.FC<{delay: number}> = (props) => {
  return (
    <Icon link={EMAIL_LINK} delay={props.delay} label="Email">
      <FontAwesomeIcon icon={faEnvelope} size="lg" />
    </Icon>
  );
};
export default Email;
