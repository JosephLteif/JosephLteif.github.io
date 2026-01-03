import React from 'react';
import './Hero.css'; // Will create this file next

function Hero() {
  const summary = `Hey there! I'm Joseph Lteif, a passionate Full-Stack Software Engineer with 2.5+ years of experience, always eager to dive into new challenges. My journey has taken me through optimizing high-bandwidth systems and fortifying software security at Murex, to crafting engaging cross-platform applications with Flutter and powerful backends with .NET Core. I love building things that make a difference, whether it's streamlining complex data processes or bringing creative ideas like an online Werewolf game to life. Beyond the code, I'm driven by continuous learning and collaborating on impactful tech. Let's build something amazing together!`;

  const profilePic = "https://lh3.googleusercontent.com/a/ACg8ocKk6PYy_I4GK2BeVe0t72pVwpga1w_eZ_gx_vboNRB1ZI4usI3R=s288-c-no";

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src={profilePic} alt="Joseph Lteif" className="profile-pic" />
        <h1 className="hero-title">Joseph Lteif</h1>
        <p className="hero-subtitle">Bringing Ideas to Life with Code</p>
        <p className="hero-summary">{summary}</p>
        <div className="hero-actions">
          <a href="#contact" className="button primary">Get in Touch</a>
          <a href="https://drive.google.com/file/d/1CneY60Or7FrVN2CfXPUJ6nLVVQCZfCdT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="button secondary">View Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;