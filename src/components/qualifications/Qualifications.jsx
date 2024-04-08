import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">
        Qualificações<span className="dot__qualifications">.</span>
      </h2>

      <span className="section__subtitle">Minha Jornada </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification__active button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educação
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification__active button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiência
          </div>
        </div>

        <div className="qualification__sections">
          {/*-----------------------------------------------------------------------------------------Conteúdo dentro de EDUCAÇÃO--------------------------------------------------------------------------------- */}

          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Análise e Desenvolvimento de Sistemas
                </h3>
                <span className="qualification__subtitle">
                  {" "}
                  Instituição - Uninassau
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - Presente
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              {/* <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">....</h3>
                            <span className="qualification__subtitle"> ....</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                ...
                            </div>
                        </div> */}
            </div>
          </div>

          {/*-----------------------------------------------------------------------------------------Conteúdo dentro de EXPERIÊNCIA--------------------------------------------------------------------------------- */}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Projetos Pessoais</h3>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - Presente
                </div>
                {/* <span className="qualification__subtitle">  </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2023 - Presente
                            </div> */}
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Estágio - Desenvolvedor Frontend
                </h3>
                <span className="qualification__subtitle">
                  {" "}
                  Inovação Marketing Digital
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2024 - Presente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
