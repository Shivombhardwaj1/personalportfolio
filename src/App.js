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

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio" style={{ overflowX: 'hidden' }}>
      <header className="header">
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            width: '80%',
            marginLeft: '100px',
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

      <main>
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
            bottom: '30px',
            right: '30px',
            padding: '12px 16px',
            fontSize: '20px',
            borderRadius: '50%',
            backgroundColor: '#1abc9c',
            color: 'white',
            border: 'none',
            boxShadow: '0 0 15px #1abc9c',
            cursor: 'pointer',
            opacity: showTopBtn ? 1 : 0,
            transition: 'opacity 0.4s ease',
            zIndex: 999,
            bottom: '70px'
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
