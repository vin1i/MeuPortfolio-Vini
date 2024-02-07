import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Vini<span className="dot__footer">.</span></h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" id = "vini" className="footer__link">Vini.dev</a>
                    </li>

                    <li>
                        <a href="#about" className="footer__link">Sobre Mim</a>
                    </li>


                    <li>
                        <a href="#projects" className="footer__link">Projetos</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.linkedin.com/in/mvini21/" className="home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin-alt"></i>

            </a>

            <a href="https://github.com/vin1i" className="home__social-icon" target= "_blank" rel="noreferrer">
            <i className="uil uil-github-alt"></i>
                
            </a>

            <a href="mailto:marcosvinijobs342@outlook.com" className="home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-envelope-alt"></i>
                            
            </a>
            
                </div>
                <span className="footer__copy" > 
                &#169;2024 All Rights Reserved. Made with 💙 by Vini Matos
                 </span>
            
            </div>
        </footer>
    );
};

export default Footer;