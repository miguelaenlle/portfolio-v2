import React from "react";
import { LINKEDIN_LINK } from "../../constants/links";
import Icon from "../components/Icon";
const Linkedin = () => {
  return (
    <Icon link={LINKEDIN_LINK}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.98 2.5C4.98 3.881 3.87 5 2.5 5C1.13 5 0.02 3.881 0.02 2.5C0.02 1.12 1.13 0 2.5 0C3.87 0 4.98 1.12 4.98 2.5ZM5 7H0V23H5V7ZM12.982 7H8.014V23H12.983V14.601C12.983 9.931 19.012 9.549 19.012 14.601V23H24V12.869C24 4.989 15.078 5.276 12.982 9.155V7Z"
          fill="white"
        />
      </svg>
    </Icon>
  );
};
export default Linkedin;
