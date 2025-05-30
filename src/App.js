import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

import logo from './components/images/logo.png';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="portfolio" style={{ overflowX: 'hidden' }}>
      <header
        className="header"
        style={{
          backgroundColor: theme === "dark" ? '#111' : '#f0f0f0',
          color: theme === "dark" ? 'white' : 'black',
        }}
      >
        <nav>
          <img
            src={logo}
            alt="Shiv Om Bhardwaj Logo"
            className="logo-img"
            style={{
              borderColor: theme === "dark" ? '#1abc9c' : '#006644',
              boxShadow: theme === "dark" ? '0 0 5px #1abc9c' : '0 0 5px #006644',
            }}
          />

          {/* Dark mode toggle on mobile - shown on mobile and desktop but styled later */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="theme-toggle mobile-left"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* Dark mode toggle on desktop, hidden on mobile */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="theme-toggle desktop-right"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </header>

      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
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
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
