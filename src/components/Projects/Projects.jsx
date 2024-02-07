import React from 'react';
import './Projects.css';
import Portfolio from './Portfolio';

const Projects = () => {
  return (
   <section className="project section" id="projects">
    <h2 className="section__title">Projetos<span className="dot__projects">.</span></h2>
    <span className="section__subtitle"> Meus Projetos</span>
      <Portfolio/>
   </section>
  )
}



export default Projects;