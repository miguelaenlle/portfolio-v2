import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GITHUB_LINK } from "../../constants/links";
import Icon from "./Icon";

const Github: React.FC<{ delay: number }> = (props) => {
  return (
    <Icon link={GITHUB_LINK} delay={props.delay} label="GitHub">
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </Icon>
  );
};
export default Github;
