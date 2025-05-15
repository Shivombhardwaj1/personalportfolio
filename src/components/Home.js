import React from 'react';
import './Home.css'; 
import img from './images/pic.jpg'; 
function Home() {
  return (
 <section id="home" className="home-section">
  <div className="home-content">
    <div className="home-intro">
      <h1 className="home-fade-in">
        Hi, I'm <span className="home-highlight">Shiv Om Bhardwaj</span>
      </h1>
      <p className="home-fade-in home-delay">
        A passionate Full Stack Developer who loves clean code and beautiful design.
      </p>
    </div>
    <img src={img} alt="My Portrait" className="home-profile-pic" />
  </div>
</section>

  );
}

export default Home;
