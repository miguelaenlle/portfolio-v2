import Header from "../../shared/components/Header";
import SkillGroup from "../components/SkillGroup";
import Wrapper from "../../shared/components/Wrapper";
import React from "react";

const Skills: React.FC<{}> = (props) => {
  return (
    <Wrapper>
      <React.Fragment>
        <Header text="Skills" />
        <div className="py-10">
          <SkillGroup skillTitle="Frontend Development" skillID="FRONTEND" />
          <SkillGroup skillTitle="Backend Development" skillID="BACKEND" />
          <SkillGroup skillTitle="Soft Skills" skillID="SOFT" />
          <SkillGroup skillTitle="Tools" skillID="TOOLS" />
        </div>
      </React.Fragment>
    </Wrapper>
  );
};
export default Skills;
