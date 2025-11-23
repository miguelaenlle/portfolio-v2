import Header from "../../shared/components/Header";
import Wrapper from "../../shared/components/Wrapper";
import ExperienceItem from "../components/ExperienceItem";
import { EXPERIENCES } from "../../constants/projects";

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white w-full">
      <Wrapper>
        <Header text="Experience" />
        <div className="mt-8 space-y-6">
            {EXPERIENCES.map((experience, index) => (
                <ExperienceItem
                key={`${experience.company}-${index}`}
                title={experience.title}
                company={experience.company}
                dateRange={`${experience.startDate} - ${experience.endDate}`}
                delay={index * 0.1}
                />
            ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Experience;
