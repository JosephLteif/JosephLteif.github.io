import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WerewolfGame from './components/WerewolfGame';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Volunteering />
        <WerewolfGame />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
