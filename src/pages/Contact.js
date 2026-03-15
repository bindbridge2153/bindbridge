import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Let's discuss how we can help your business grow</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-cards">
              <div className="info-card">
                <MapPin size={32} color="var(--primary-color)" />
                <h3>Address</h3>
                <p>Bindbridge Packaging Solutions, Sr. No 8, Sagun Niwas, Dange Chowk, Tathawade, Pune – 411033</p>
              </div>
              <div className="info-card">
                <Phone size={32} color="var(--primary-color)" />
                <h3>Phone</h3>
                <p>+91 73515 91955</p>
              </div>
              <div className="info-card">
                <Mail size={32} color="var(--primary-color)" />
                <h3>Email</h3>
                <p>info@bindbridgepackaging.com</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" placeholder="Your Name *" value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                <input type="email" placeholder="Email *" value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                <input type="text" placeholder="Subject *" value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})} required />
                <textarea rows="5" placeholder="Your Message *" value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
