import React, { useEffect, useState } from "react";
import { ProjectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Projects = () => {
  const [item, setItem] = useState({ name: "Todos" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [toggleState, setToggleState] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (item.name === "Todos") {
      setProjects(ProjectsData);
    } else {
      const newProjects = ProjectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  const handleToggle = (project) => {
    setActiveProject(project);
    setToggleState(1);
  };

  const closeModal = () => {
    setToggleState(0);
    setActiveProject(null);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`work__item ${active === index ? "active-work" : ""}`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return (
            <WorkItems item={item} key={item.id} handleToggle={handleToggle} />
          );
        })}
      </div>
      {activeProject && (
        <div
          className={
            toggleState === 1
              ? "services__modal active-modal"
              : "services__modal"
          }
        >
          <div className="services__modal-content">
            <i
              onClick={closeModal}
              className="uil uil-times services__modal-close"
            ></i>
            <h3 className="services__modal-title">{activeProject.title}</h3>
            <p className="services__modal-description">
              {activeProject.details.description}
            </p>
            <ul className="services__modal-services grid">
              {activeProject.details.repository && (
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a
                      href={activeProject.details.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repositório
                    </a>
                  </p>
                </li>
              )}
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  <a
                    href={activeProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
