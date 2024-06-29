import React from "react";

const WorkItems = ({ item, handleToggle }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a
        href={item.demo}
        className="work__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      <span className="services__button" onClick={() => handleToggle(item)}>
        Veja mais <i className="uil uil-arrow-right services__button-icon"></i>
      </span>
    </div>
  );
};

export default WorkItems;
