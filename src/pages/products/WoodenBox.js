import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const WoodenBox = () => {
  const boxTypes = [
    {
      title: 'Heavy-Duty Wooden Boxes',
      description: 'Designed for transporting heavy machinery, industrial equipment, and bulk shipments. These large-capacity wooden boxes offer unmatched protection and stability.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Heavy-Duty+Boxes'
    },
    {
      title: 'Wooden Boxes with PP Partitions',
      description: 'Perfect for fragile items, glassware, and electronic components, these wooden boxes feature PP partitions that enhance organization and safeguard against impact.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=PP+Partition+Boxes'
    },
    {
      title: 'Custom Wooden Boxes',
      description: 'Our custom wooden packaging solutions are built to precise dimensions, ensuring optimal fit and security for diverse products.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Custom+Boxes'
    }
  ];

  const whyChoose = [
    {
      title: 'Superior Strength & Durability',
      description: 'Engineered to withstand heavy loads and long transit durations.'
    },
    {
      title: 'Customizable Designs',
      description: 'Tailored solutions to meet your unique shipping and storage requirements.'
    },
    {
      title: 'Eco-Friendly & Sustainable',
      description: 'Made from responsibly sourced materials, reducing environmental impact.'
    },
    {
      title: 'Safe & Secure Transport',
      description: 'Protects products from damage, moisture, and handling wear.'
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'Optimized packaging that reduces shipping costs while ensuring product safety.'
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="container">
          <h1 className="product-detail-hero-title">Wooden Boxes</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            Premium Wooden Packaging Solutions by Bindbridge
          </h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <p className="intro-paragraph">
                At <strong>Bindbridge Packaging Solutions</strong>, we provide high-quality <strong>wooden packaging solutions</strong> designed for durability, security, and cost-efficiency. As a trusted packaging partner, we cater to industries across Maharashtra, Pune, and Nashik, ensuring seamless transportation and storage for a wide range of products.
              </p>
            </div>
            <div className="intro-image">
              <img 
                src="https://via.placeholder.com/500x400/29577e/ffffff?text=Wooden+Box" 
                alt="Wooden Box"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Bindbridge Wooden Packaging?</h2>
          <div className="features-list">
            {whyChoose.map((item, index) => (
              <div key={index} className="feature-item">
                <h3 className="feature-number">{item.title}:</h3>
                <p className="feature-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Box Types */}
      <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Our Range of Wooden Packaging Solutions</h2>
          <div className="box-types-grid">
            {boxTypes.map((box, index) => (
              <div key={index} className="box-type-card">
                <div className="box-type-image">
                  <img src={box.image} alt={box.title} />
                </div>
                <div className="box-type-content">
                  <h3 className="box-type-title">{box.title}</h3>
                  <p className="box-type-desc">{box.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="product-intro-section">
        <div className="container">
          <h2 className="section-title">Get in Touch for Your Wooden Packaging Needs</h2>
          <ul className="why-list">
            <li className="why-item">
              <strong>Expertise & Industry Knowledge:</strong> Years of experience in delivering top-tier wooden packaging solutions.
            </li>
            <li className="why-item">
              <strong>Fully Customizable Solutions:</strong> From size and design to branding and protection enhancements.
            </li>
            <li className="why-item">
              <strong>Timely Delivery Across Maharashtra:</strong> Serving Pune, Nashik, and surrounding regions with prompt delivery.
            </li>
            <li className="why-item">
              <strong>Commitment to Quality & Sustainability:</strong> Eco-conscious packaging that meets global standards.
            </li>
          </ul>
          <p className="intro-paragraph">
            Need custom wooden packaging for your business? <strong>Bindbridge Packaging Solutions</strong> is here to provide the best solutions tailored to your requirements.
          </p>
          <p className="intro-paragraph">
            Contact us today for expert consultation and a competitive quote on your wooden packaging needs!
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="product-cta-section">
        <div className="container">
          <Link to="/contact" className="btn-cta-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WoodenBox;