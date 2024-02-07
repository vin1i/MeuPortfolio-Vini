import React from 'react'
//import { ProjectsData } from './Data';
//import { projectsNav } from './Data';
import PortfolioItems from './PortfolioItems';
import { ProjectsData, projectsNav } from './Data';



const Portfolio = () => {
  return (
        <div> 
          <div className="portfolio__filters">
        {projectsNav.map((item, index) =>{
          return (  
            <span className="portfolio__item" key={index}>{item.name}</span>
            
          )
        })}
          
          </div>
            


        <div className="portfolio__container container grid"> 
        {ProjectsData.map((item) => {
          return <PortfolioItems  item={item} key={item.id}/> 
        })}
         
          
      
        
        </div>
        </div>
  );
};

export default Portfolio;