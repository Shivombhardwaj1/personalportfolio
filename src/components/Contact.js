import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Contact Me</h2>
    <div className="contact-wrapper">
      {/* Left Side */}
      <div className="contact-left">
        <p><strong>Email:</strong> shivombhardwaj3156@gmail.com</p>
        <p><strong>Phone:</strong> +91 9816825316</p>

        <div className="social-inline">
          <a href="https://github.com/Shivombhardwaj1" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shiv-om-bhardwaj-31qwq/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>

        <a href="/resume.pdf" download className="download-btn">
          <FaDownload /> Download Resume
        </a>
      </div>

      {/* Right Side */}
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
