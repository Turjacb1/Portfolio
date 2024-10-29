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

const App = () => (
  <div className="App">
    <Header />
    <main>
      <About />
      <Skills />
      <SecondSkil/>
      <Portfolio />
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