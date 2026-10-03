import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Volunteering from './components/Volunteering';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Notes from './components/Notes';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Volunteering />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
