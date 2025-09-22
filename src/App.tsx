import React, { useEffect, useRef, useState } from "react";
import Footer from "./footer/pages/Footer";
import ContactForm from "./contact/pages/ContactForm";
import Hero from "./hero/pages/Hero";
import Projects from "./projects/pages/Projects";
import Skills from "./skills/pages/Skills";
import NavbarWrapper from "./navbar/pages/NavbarWrapper";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import ProjectPage from "./projects/pages/ProjectPage";

function App() {
  const location = useLocation();

  const state: any = location.state;
  const background = state && state.background;

  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [selectedPage, setSelectedPage] = useState("About");

  const [refLocations, setRefLocations] = useState<{ [key: string]: number }>(
    {}
  );

  let timer: ReturnType<typeof setTimeout>;

  window.addEventListener("scroll", function () {

    if (Object.keys(refLocations).length > 0) {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        const currentLocation = window.scrollY;
        let minimumDistance = null;
        let page = null;
        for (const key in refLocations) {
          const topLocation = refLocations[key] + 50;
          const distance = Math.abs(topLocation - currentLocation);

          if (!minimumDistance || distance < minimumDistance) {
            minimumDistance = distance;
            page = key;
          }
        }
        if (page) {
          setSelectedPage(page);
        }
      }, 10);
    }
  });

  useEffect(() => {
    if (aboutRef && skillsRef && projectsRef && contactRef) {
      setRefLocations(fetchAllLocations());
    }
  }, [aboutRef, skillsRef, projectsRef, contactRef]);

  const fetchAllLocations = () => {
    const aboutLocation = fetchLocation(aboutRef);
    const skillsLocation = fetchLocation(skillsRef);
    const projectLocation = fetchLocation(projectsRef);
    const contactLocation = fetchLocation(contactRef);
    const list: { [key: string]: number } = {
      About: aboutLocation - 0,
      Skills: skillsLocation - 50,
      Projects: projectLocation - 50,
      Contact: contactLocation + 50,
    };
    return list;
  };

  const fetchLocation = (ref: React.RefObject<HTMLDivElement>): number => {
    if (ref.current) {
      const location = ref.current.offsetTop;
      return location;
    } else {
      return 0;
    }
  };

  const handleGoToPage = (newPage: string) => {
    setSelectedPage(newPage);
    const locations = fetchAllLocations();
    const location = locations[newPage];
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <Switch location={background || location}>
        <Route path="/">
          <NavbarWrapper
            selectedPage={selectedPage}
            handleGoToPage={handleGoToPage}
          >
            <div className="overflow-x-hidden">
              <div ref={aboutRef}>
                <Hero />
              </div>
              <div ref={projectsRef}>
                <Projects />
              </div>
              <div ref={skillsRef}>
                <Skills />
              </div>
              <div ref={contactRef}>
                <ContactForm />
              </div>
              <br />
              <Footer />
            </div>
          </NavbarWrapper>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/project/:projectId">
          <ProjectPage />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
