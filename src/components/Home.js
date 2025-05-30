import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import img from "./images/pic.jpg";

const words = [
  "Full Stack Developer",
];

function Home() {
  const sectionRef = useRef(null);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

 
  useEffect(() => {
    if (!visible) return; 

    if (!deleting && charIndex === words[wordIndex].length + 1) {
      setTimeout(() => setDeleting(true), 1200);
      return;
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
      setText(words[wordIndex].substring(0, charIndex));
    }, deleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, visible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <div className="starfield">
        <div className="stars stars1"></div>
        <div className="stars stars2"></div>
      </div>

      <section ref={sectionRef} className={`home ${visible ? "visible" : ""}`}>
        <div className="text-area">
          <h1>
            Hey, I’m <span className="highlight">Shiv Om Bhardwaj</span>
          </h1>
          <h2 className="typing-text">
            {text}
            <span className="cursor">|</span>
          </h2>
        </div>

     <div className="image-container">
  <div className="image-wrapper">
    <img src={img} alt="Shiv Om Bhardwaj" />
  </div>
</div>

      </section>
    </>
  );
}

export default Home;
