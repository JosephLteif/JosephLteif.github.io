import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
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
        <Projects />
        <WerewolfGame />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
