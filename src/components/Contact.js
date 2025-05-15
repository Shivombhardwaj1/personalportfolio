import React, { useRef } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_z5upt9c',   
        'template_6zg7s3r',  
        form.current,
        'x8moyuBvUHvc18RcD' 
      )
      .then(() => {
        toast.success('Message sent successfully!');
        form.current.reset();
      })
      .catch(() => {
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-wrapper">
        <div className="contact-left">
          <p><strong>Email:</strong> shivombhardwaj3156@gmail.com</p>
          <p><strong>Phone:</strong> +91 9816825316</p>

          <div className="social-inline">
            <a href="https://github.com/Shivombhardwaj1" target="_blank" rel="noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shiv-om-bhardwaj-31qwq/" target="_blank" rel="noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" title="Instagram">
              <FaInstagram />
            </a>
          </div>

          <a href="/resume.pdf" download className="download-btn">
            <FaDownload style={{ marginRight: '6px' }} />
            Download Resume
          </a>
        </div>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="user_name" id="name" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" id="email" placeholder="Your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" placeholder="Your message..." required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </section>
  );
};

export default Contact;
