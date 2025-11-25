import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RESUME_LINK } from "../../constants/links";
import Icon from "./Icon";

const Resume: React.FC<{ delay: number }> = ({ delay }) => {
  return (
    <Icon link={RESUME_LINK} delay={delay} label="Resume" showLabel>
      <FontAwesomeIcon icon={faAddressBook} size="lg" />
    </Icon>
  );
};
export default Resume;
