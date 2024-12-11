import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle"> 1 ano </span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt-2 about__icon"></i>

        <h3 className="about__title">Projetos</h3>
        <span className="about__subtitle">
          {" "}
          <b> +10</b>
        </span>
      </div>
    </div>
  );
};

export default Info;
