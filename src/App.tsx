import React, { useCallback, useRef } from "react";
import Footer from "./footer/pages/Footer";
import Hero from "./hero/pages/Hero";
import About from "./about/pages/About";
import Skills from "./skills/pages/Skills";
import Experience from "./experience/pages/Experience";
import NavbarWrapper from "./navbar/pages/NavbarWrapper";
import Education from "./education/pages/Education";
import Activities from "./activities/pages/Activities";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const fetchLocation = useCallback(
    (ref: React.RefObject<HTMLDivElement>): number =>
      ref.current?.offsetTop ?? 0,
    []
  );

  const fetchAllLocations = useCallback(() => {
    const locations: Record<string, number> = {
      About: fetchLocation(aboutRef),
      Experience: fetchLocation(experienceRef) - 64,
      Education: fetchLocation(educationRef) - 64,
      Activities: fetchLocation(activitiesRef) - 64,
      Skills: fetchLocation(skillsRef) - 64,
    };
    return locations;
  }, [fetchLocation]);

  const handleGoToPage = (newPage: string) => {
    const locations = fetchAllLocations();
    const location = locations[newPage];
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  return (
    <NavbarWrapper handleGoToPage={handleGoToPage}>
      <div className="overflow-x-hidden">
        <Hero onGoToPage={handleGoToPage} />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={activitiesRef}>
          <Activities />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <Footer />
      </div>
    </NavbarWrapper>
  );
}

export default App;
