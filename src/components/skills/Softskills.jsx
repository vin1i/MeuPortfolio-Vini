import React from "react";

const Softskills = () => {

    return (
        <div className="skills__content">
            <h3 className="skills__title">Soft Skills</h3>

            <div className="skills__box">

                <div className="skills__group">

                    <div className="skills__data">
                    <i class='bx bx-check-circle'></i>

                    <div>
                        <h3 className="skills__name">Comunicação Efetiva</h3>
                        
                    </div>
                    </div>

                    
                    <div className="skills__data">
                    <i class='bx bx-check-circle'></i>

                    <div>
                        <h3 className="skills__name">Compromisso</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                    
                    <div className="skills__data">
                    <i class='bx bx-check-circle'></i>

                    <div>
                        <h3 className="skills__name">Colaboração</h3>
                       
                    </div>
                    </div>


                    
                </div>

           
            </div>


        </div>
    );
};

export default Softskills;