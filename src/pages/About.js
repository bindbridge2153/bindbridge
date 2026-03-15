import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1>About Bindbridge</h1>
          <p>Building the future of sustainable packaging solutions</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{color: 'var(--primary-color)', textAlign: 'center', marginBottom: '40px'}}>
            Bindbridge Packaging Solutions & Bindbridge Industrial Solutions Pvt. Ltd.
          </h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#555', maxWidth: '900px', margin: '0 auto'}}>
            Bindbridge Packaging Solutions was founded with a vision to revolutionize packaging. 
            What began as a focused initiative has now evolved into a comprehensive one-stop destination 
            for complete industrial packaging solutions. Today, we partner with global leaders to offer 
            world-class technologies, consumables, and customized solutions tailored for diverse industries.
          </p>
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
