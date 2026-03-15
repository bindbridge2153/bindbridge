import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const FieldEngineering = () => {
  const solutions = [
    {
      number: '1',
      title: 'Pack Style Development',
      description: 'Custom packaging solutions tailored to meet your product protection and handling requirements.'
    },
    {
      number: '2',
      title: 'Export Packaging',
      description: 'Secure and compliant packaging for international shipments, reducing transit damage risks.'
    },
    {
      number: '3',
      title: 'Sustainable Packaging Solutions',
      description: 'Replace or minimize wood usage in packaging, ensuring compliance with global sustainability standards.'
    },
    {
      number: '4',
      title: 'Cost Reduction & Spend Evaluation',
      description: 'Thorough analysis to optimize costs and eliminate unnecessary packaging expenses.'
    },
    {
      number: '5',
      title: 'Packaging Audit, Consultancy & Training',
      description: 'Expert guidance to refine packaging processes and train teams for best practices in packaging management.'
    },
    {
      number: '6',
      title: 'Onsite Evaluation & Field Trials',
      description: 'Real-time testing, in-transit vibration monitoring, to ensure product integrity during transportation.'
    }
  ];

  const whyChoose = [
    {
      title: 'One-Stop Solution',
      description: 'We handle everything from packaging design to shipping, giving you a single point of contact.'
    },
    {
      title: 'Cost & Time Efficiency',
      description: 'Reduce operational costs and free up resources for innovation and growth.'
    },
    {
      title: 'No Vendor Hassles',
      description: 'Eliminate the need for multiple suppliers with our comprehensive material sourcing and management.'
    },
    {
      title: 'Labor & Compliance Support',
      description: 'Get access to a skilled workforce without the complexities of labor management.'
    },
    {
      title: 'Inventory Management',
      description: 'Maintain 30-day safety stock to avoid shortages and delays.'
    },
    {
      title: 'Transparent Pricing',
      description: 'Fixed per-product pricing for a year, protecting you from market fluctuations.'
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="container">
          <h1 className="product-detail-hero-title">Field Engineering</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            Field Engineering Services - Optimized Packaging & Logistics
          </h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content-full">
            <div className="intro-text">
              <p className="intro-paragraph">
                At <strong>Bindbridge Packaging Solutions</strong>, we specialize in <strong>Field Engineering Services</strong> that help businesses <strong>optimize their packaging, handling, and shipping processes</strong>. Our expertise lies in designing cost-effective, high-performance solutions that enhance efficiency while reducing operational expenses. With a <strong>dedicated Test Lab and specialized resources</strong>, we analyze packaging challenges and develop tailored strategies to improve durability, sustainability, and compliance.
              </p>
              <p className="intro-paragraph">
                We collaborate with <strong>global leaders</strong> like Signode and Zavenir Daubert to bring cutting-edge innovations to our clients. From selecting the right materials to implementing advanced protection techniques, we ensure that your products are securely packaged and efficiently transported. Whether you're looking to reduce damage rates, lower costs, or improve sustainability, our team is committed to delivering results that drive long-term value for your business.
              </p>
            </div>
            {/* <div className="intro-image">
              <img 
                src="https://via.placeholder.com/500x400/29577e/ffffff?text=Field+Engineering" 
                alt="Field Engineering Services"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Our Comprehensive Field Engineering Solutions</h2>
          <div className="numbered-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="numbered-card">
                <div className="numbered-circle">{solution.number}</div>
                <h3 className="numbered-title">{solution.title}</h3>
                <p className="numbered-desc">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="product-intro-section">
        <div className="container">
          <h2 className="section-title">Why Choose Bindbridge Field Engineering Services?</h2>
          <ul className="why-list">
            {whyChoose.map((item, index) => (
              <li key={index} className="why-item">
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Get Started */}
      <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Get Started with Hassle-Free Packaging</h2>
          <p className="section-subtitle">
            Transform your packaging process with our reliable, cost-effective, and scalable contract packaging solutions. Contact us today for a free consultation and let our experts handle your packaging needs while you focus on growing your business.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="product-cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Optimize Your Packaging Process?</h2>
          <p className="cta-closing">
            Let our <strong>Field Engineering experts</strong> analyze your packaging needs and deliver customized solutions for maximum efficiency.
          </p>
          <Link to="/contact" className="btn-cta-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FieldEngineering;