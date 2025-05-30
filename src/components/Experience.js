import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Developer – Jio Platforms Limited',
    date: 'Dec 2023 – Present',
    location: 'Mumbai, Maharashtra',
    description:
      'Working on scalable full–stack solutions and contributing to high-impact software projects.',
  },
  {
    title: 'Intern – HighRadius Corporation',
    date: 'Jan 2023 – May 2023',
    location: 'Mohali, Punjab',
    description:
      'Worked on business finance automation solutions, assisted in product development, and gained hands-on experience in real-world software projects.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        EXPERIENCE
      </motion.h2>

      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <motion.div
            className="experience-item"
            key={idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="circle" />
            <motion.div whileHover={{ scale: 1.03 }} className="experience-card">
              <h3>{exp.title}</h3>
              <p className="date">{exp.date} | {exp.location}</p>
              <p>{exp.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
