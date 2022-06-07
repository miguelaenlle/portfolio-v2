import React from "react";
import Footer from "./footer/sections/Footer";
import ContactForm from "./main/sections/ContactForm";
import Hero from "./main/sections/Hero";
import Projects from "./main/sections/Projects";
import Skills from "./main/sections/Skills";

function App() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
