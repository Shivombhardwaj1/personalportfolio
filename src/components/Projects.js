import React, { useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Site",
      description: "Responsive store with cart, payments, and admin.",
      image: "https://plus.unsplash.com/premium_photo-1683288295814-84a199da83d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Chat Application",
      description: "React app for Chatting",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Freelance Portal",
      description: "Job board for freelancers with matching & messaging.",
      image: "https://plus.unsplash.com/premium_photo-1744967143306-0ec5b49ca2eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];


  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div
            className="project-card"
            key={index}
            ref={el => (cardsRef.current[index] = el)}
            style={{ backgroundImage: `url(${proj.image})` }}
          >
            <div className="project-overlay">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
