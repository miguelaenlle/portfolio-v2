import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ACTIVITIES,
  Experience as ExperienceType,
} from "../../constants/experiences";
import ExperienceItem from "../../experience/components/ExperienceItem";
import ExperienceModal from "../../experience/components/ExperienceModal";
import Header from "../../shared/components/Header";
import Wrapper from "../../shared/components/Wrapper";

const Activities: React.FC = () => {
  const [selectedActivity, setSelectedActivity] =
    useState<ExperienceType | null>(null);

  return (
    <section className="w-full bg-zinc-50 py-20 sm:py-24">
      <Wrapper>
        <Header text="Activities" />
        <div className="mt-8 grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
          {ACTIVITIES.map((activity, index) => (
            <ExperienceItem
              key={activity.id}
              experience={activity}
              delay={index * 0.08}
              onSelect={setSelectedActivity}
            />
          ))}
        </div>
      </Wrapper>

      <AnimatePresence>
        {selectedActivity && (
          <ExperienceModal
            key={selectedActivity.id}
            experience={selectedActivity}
            onClose={() => setSelectedActivity(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Activities;
