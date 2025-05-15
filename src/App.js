import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './components/Portfolio.css';
import logo from './components/images/logo.png';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowTopBtn(scrollTop > 300);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio" style={{ overflowX: 'hidden' }}>

      <header
        className="header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#111',
          color: 'white',
          zIndex: 1000,
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        }}
      >
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <img
            src={logo}
            alt="Shiv Om Bhardwaj Logo"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid #1abc9c',
              boxShadow: '0 0 5px #1abc9c',
            }}
          />
          <div>
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  marginLeft: '20px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '500',
                }}
                onMouseOver={(e) => (e.target.style.color = '#1abc9c')}
                onMouseOut={(e) => (e.target.style.color = 'white')}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <div
        style={{
          position: 'fixed',
          top: '100px',
          left: 0,
          height: '4px',
          width: `${scrollProgress}%`,
          backgroundColor: '#1abc9c',
          transition: 'width 0.25s ease-out',
          zIndex: 1001,
        }}
      ></div>

      <main style={{ paddingTop: '70px' }}>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>


      {showTopBtn && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '70px',
            right: '30px',
            padding: '12px 16px',
            fontSize: '20px',
            borderRadius: '50%',
            backgroundColor: '#1abc9c',
            color: 'white',
            border: 'none',
            boxShadow: '0 0 15px #1abc9c',
            cursor: 'pointer',
            transition: 'opacity 0.4s ease',
            zIndex: 999,
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App