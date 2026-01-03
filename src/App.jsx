import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Volunteering from './components/Volunteering';
import Terminal from './components/Terminal';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Volunteering />
        <Terminal />
      </main>
      <Footer />
    </>
  );
}

export default App;
