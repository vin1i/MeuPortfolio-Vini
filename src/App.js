import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills';
import Services from './components/services/Services.jsx'
import Qualifications from './components/qualifications/Qualifications.jsx'
//import Testimonials from './components/testimonials/Testimonials.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import ScrollUp from './components/scrollup/ScrollUp.jsx';
import Projects from './components/Projects/Projects.jsx';


const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualifications/>
      <Projects/>
      <Contact/>

    
    </main>
    <Footer/>
      <ScrollUp/>
    </>
  );
};

export default App;