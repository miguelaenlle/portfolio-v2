import Header from "../../shared/components/Header";
import Wrapper from "../../shared/components/Wrapper";
import ExperienceItem from "../components/ExperienceItem";
import { EXPERIENCES } from "../../constants/projects";

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-20 bg-white w-full">
      <Wrapper>
        <Header text="Experience" />

        <div className="mt-10 w-full">
          <ul className="w-full">
            {EXPERIENCES.map((experience, index) => {
              const dateRange = `${experience.startDate} - ${experience.endDate}`;
              const isFirst = index === 0;
              const isLast = index === EXPERIENCES.length - 1;

              return (
                <li
                  key={`${experience.company}-${index}`}
                  className="relative grid grid-cols-[auto_minmax(0,1fr)] sm:grid-cols-[150px_auto_minmax(0,2fr)] gap-x-4 sm:gap-x-6 last:pb-0"
                >
                  {/* Date on the left (desktop/tablet only) */}
                  <div className="hidden sm:flex items-start pt-[35px] justify-end pr-4">
                    <p className="text-xs sm:text-sm font-semibold text-gray-500 text-right whitespace-nowrap">
                      {dateRange}
                    </p>
                  </div>

                  {/* Center column: vertical line + dot */}
                  <div className="flex items-stretch justify-center">
                    <div className="flex flex-col items-center h-full">
                      {/* Line above dot */}
                      <div
                        className={`h-[3px] sm:h-[37px] border-l border-gray-200 ${
                          isFirst ? "opacity-0" : ""
                        }`}
                      />
                      {/* Dot */}
                      <div className="w-3 h-3 rounded-full bg-blue-500 border-4 border-white shadow-md" />
                      {/* Line below dot */}
                      <div
                        className={`flex-1 border-l border-gray-200 ${
                          isLast ? "opacity-0" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card on the right */}
                  <div className="pl-4">
                    {/* Mobile date above card */}
                    <p className="text-sm font-semibold text-gray-500 mb-2 sm:hidden">
                      {dateRange}
                    </p>

                    <ExperienceItem
                      title={experience.title}
                      company={experience.company}
                      logo={experience.logo}
                      logoFull={experience.logoFull}
                      dateRange={dateRange}
                      description={experience.description}
                      delay={index * 0.1}
                      showDate={false} // we handle dates manually for responsive layout
                      projects={experience.projects}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </div>
  );
};

export default Experience;