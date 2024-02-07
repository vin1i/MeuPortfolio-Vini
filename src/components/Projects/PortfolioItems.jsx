import React, { useState } from 'react'


const PortfolioItems = ({item}) => {

    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };


  return (
    
   <section className="portfolio__container container grid">
    <div className="portfolio__card"  key={item.id}> 
        <img src={item.image} alt="" className="portfolio__img" />
        <h3 className="portfolio__title">{item.title}</h3>
        {item.imageIcon.map(icon => (
          <img src={icon.url} key={item.id}alt="Icon" className="icon-img" />
        ))}
      
       
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">{item.details.title}</h3>
                        <p className="services__modal-description">
                        {item.details.description}</p>
                    </div>
                </div>

                
        <a href= {item.demo} className="portfolio__button-demo" target="_blank" rel="noreferrer">
          Demo<i className="bx bx-right-arrow-alt portfolio__button-icon-demo"></i>

        </a>
        <a href={item.repository} className="portfolio__button" target="_blank" rel="noreferrer">
            Repositório <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
        </a> 
          
        <span className="portfolio__button" onClick={() => toggleTab(1)}>Detalhes <i className="bx bx-right-arrow-alt portfolio__button-icon">
                    </i></span>
            
        

        
        
    </div>
        {/*<div className="portfolio__card"> 
        <img src={destaques} alt="" className="portfolio__img" />
        <h3 className="portfolio__title">Em breve</h3>
    
      

        <a href="https://meuportfolio-gamma.vercel.app/" className="portfolio__button" target="_blank" rel="noreferrer">
          Demo<i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
            
        </a>
        <a href="https://github.com/vin1i/FlyinGames" className="portfolio__button" target="_blank" rel="noreferrer">
            Repositório <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
        </a>

        

        
        
    </div>

    <div className="portfolio__card"> 
        <img src={destaques} alt="" className="portfolio__img" />
        <h3 className="portfolio__title">Em breve</h3>
  
      

        <a href="https://flyingames.vercel.app/" className="portfolio__button" target="_blank" rel="noreferrer">
          Demo<i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
            
        </a>
        <a href="https://github.com/vin1i/FlyinGames" className="portfolio__button" target="_blank" rel="noreferrer">
            Repositório <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
        </a>

        

        
        
    </div> */}
        
    
    </section> 
    
  )
}

export default PortfolioItems;