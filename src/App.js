import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import SecondSkil from './components/Skills/SecondSkil';
import MyStatement from './components/MyStatement/MyStatement';
import Review from './components/Review/Review';
import ThirdSkill from './components/Skills/ThirdSkill';
import VisitorCounter from './components/VisitorCounter/VisitorCounte';
import AppDevPortolio from './components/AppDevPortfolio/AppDevPortolio';
import ForthSkill from './components/Skills/ForthSkill';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <VisitorCounter/>
      <About />
      <Skills />
      <ForthSkill/>
      <SecondSkil/>
      <ThirdSkill/>
      <Portfolio />
      <br></br><br></br><br></br>
      <AppDevPortolio/>
      <Experience />
      
      <br></br>
      <MyStatement/>
      <br></br>
      
      <Review/>
      <Contact />
    </main>
  </div>
);

export default App;