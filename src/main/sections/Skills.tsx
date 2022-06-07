import Header from "../components/Header";
import SkillGroup from "../components/SkillGroup";
import Wrapper from "../../shared/components/Wrapper";

const Skills: React.FC<{}> = (props) => {
  return (
    <Wrapper>
      <div className="">
        <Header text="Skills" />
        <SkillGroup skillTitle="Frontend Development" skillID="FRONTEND" />
        <SkillGroup skillTitle="Backend Development" skillID="BACKEND" />
        <SkillGroup skillTitle="Soft Skills" skillID="SOFT" />
        <SkillGroup skillTitle="Tools" skillID="TOOLS" />
      </div>
    </Wrapper>
  );
};
export default Skills;
