import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { LINKEDIN_LINK } from "../../constants/links";
import Icon from "./Icon";

const Linkedin: React.FC<{ delay: number }> = (props) => {
  return (
    <Icon link={LINKEDIN_LINK} delay={props.delay} label="LinkedIn">
      <FontAwesomeIcon icon={faLinkedin} size="lg" />
    </Icon>
  );
};
export default Linkedin;
