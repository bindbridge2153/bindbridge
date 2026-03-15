import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Youtube, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
    { name: 'Contract Packaging', path: '/contract-packaging' },
  ];

  const socialLinks = [
    { icon: Linkedin, url: '#', name: 'Linkedin' },
    { icon: Facebook, url: '#', name: 'Facebook' },
    { icon: Youtube, url: '#', name: 'YouTube' },
    { icon: Instagram, url: '#', name: 'Instagram' },
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container-footer">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-col footer-col-logo">
              <div className="footer-logo-wrapper">
                <img 
                  src="/images/logo-white.png" 
                  alt="Bindbridge" 
                  className="footer-logo-img" 
                  onError={(e) => {
                    // If white logo doesn't exist, use regular logo with invert filter
                    e.target.src = '/images/logo.png';
                    e.target.classList.add('footer-logo-inverted');
                  }}
                />
              </div>
              <p className="footer-desc">
                Our aim is to work in your best interest. As your packaging partner, we will work with you at every step, to ensure safe delivery of your product to your customers with peace of mind.
              </p>
              {/* Vendor Logos */}
              <div className="vendor-logos">
                <div className="vendor-logo-item">
                  <img 
                    src="/images/vendor1.png" 
                    alt="Vendor 1" 
                    onError={(e) => e.target.parentElement.style.display = 'none'} 
                  />
                </div>
                <div className="vendor-logo-item">
                  <img 
                    src="/images/vendor2.png" 
                    alt="Vendor 2" 
                    onError={(e) => e.target.parentElement.style.display = 'none'} 
                  />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h3 className="footer-title">Quick Link</h3>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="footer-col">
              <h3 className="footer-title">Follow Us</h3>
              <ul className="footer-links footer-social-links">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Grab Our Flyer */}
              <div className="footer-flyer">
                <h4 className="footer-flyer-title">Grab Our Flyer!</h4>
                <a href="/flyer.pdf" className="btn-download" download>
                  Download
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h3 className="footer-title">Contact Us</h3>
              <div className="footer-contact-info">
                <p className="footer-contact-item">
                  <strong>Address:</strong> Bindbridge Packaging Solutions, Sr. No 8, Sagun Niwas, Dange Chowk – Tathawade Road Opp. Rajiv Gandhi College, Tathawade, Pune – 411033
                </p>
                <p className="footer-contact-item">
                  <strong>Contact No. :</strong> <a href="tel:+917351591955">+91 7351 591 955</a>
                </p>
                <p className="footer-contact-item">
                  <strong>Mail Id :</strong> <a href="mailto:info@bindbridgepackaging.com">info@bindbridgepackaging.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-footer">
          <p className="footer-copyright">Copyright © {new Date().getFullYear()} Bindbridge Packaging Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;