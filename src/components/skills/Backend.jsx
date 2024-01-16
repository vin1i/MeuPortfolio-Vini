import React from "react";

const Backend = () => {

    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">

                <div className="skills__group">

                    <div className="skills__data">
                    <i class='bx bx-check-circle'></i>

                    <div>
                        <h3 className="skills__name">C#</h3>
                        
                    </div>
                    </div>

                    
                    <div className="skills__data">
                    <i class='bx bx-check-circle'></i>

                    <div>
                        <h3 className="skills__name">.NET</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                    
                    <div className="skills__data">
                    <i class='bx bx-check-circle'></i>

                    <div>
                        <h3 className="skills__name">TypeScript</h3>
                       
                    </div>
                    </div>

                </div>



            
            
            {/*ABAIXO, a div "skills__sql", diz respeito ao SQL que fica no box, fiz para chamar no CSS e alinhar melhor separadamente, por mais que "NodeJs" se encontre na div, ela não é o alvo em si*/ }
                <div className="skills__sql">

                <div className="skills__data">
                <i class='bx bx-check-circle'></i>

                <div>
                    <h3 className="skills__name">NodeJs</h3>
                    <span className="skills__level"></span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-check-circle'></i>

                <div>
                    <h3 className="skills__name">SQL</h3>
                    <span className="skills__level"></span>
                </div>
                </div>




</div>
            </div>


        </div>
    );
};

export default Backend;