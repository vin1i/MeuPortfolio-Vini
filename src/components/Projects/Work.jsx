import React from "react";
import "./Projects.css";

import Projects from "./Projects";

const Work = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section__title">
        Portfolio<span className="dot">.</span>
      </h2>
      <span className="section__subtitle">Meus Projetos</span>

      <Projects />
    </section>
  );
};

export default Work;
