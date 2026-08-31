import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Experience as ExperienceType,
  EXPERIENCES,
} from "../../constants/experiences";
import Header from "../../shared/components/Header";
import Wrapper from "../../shared/components/Wrapper";
import ExperienceItem from "../components/ExperienceItem";
import ExperienceModal from "../components/ExperienceModal";

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceType | null>(null);

  return (
    <section className="w-full bg-zinc-50 py-20 sm:py-24">
      <Wrapper>
        <Header text="Experience" />
        <div className="mt-8 grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              delay={(index % 2) * 0.08}
              onSelect={setSelectedExperience}
            />
          ))}
        </div>
      </Wrapper>

      <AnimatePresence>
        {selectedExperience && (
          <ExperienceModal
            key={selectedExperience.id}
            experience={selectedExperience}
            onClose={() => setSelectedExperience(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
