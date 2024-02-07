import React from "react";
import './skills.css';
import Frontend from "./Frontend";
import Backend from "./Backend";
//import Softskills from "./Softskills";

const Skills = () => {

    return (

        <section className="skills section" id="skills">

            <h2 className="section__title">Skills<span className="dot__skills">.</span></h2>
                <span className="section__subtitle">
                Competências Profissionais </span>

            <div className="skills__container container grid">

                <Frontend/>
                <Backend/>
                {/* <Softskills/>*/}
                
            </div>
        </section>
    );
};

export default Skills;


