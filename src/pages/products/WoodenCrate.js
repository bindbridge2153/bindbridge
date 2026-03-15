import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const WoodenCreate = () => {
  const crateTypes = [
    {
      title: 'Heavy-Duty Wooden Crates',
      description: 'Designed for large, heavy, and high-value shipments. Ideal for industrial machinery, bulk packaging, and export shipments. Provides maximum impact resistance and load-bearing capacity.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Heavy-Duty+Crates'
    },
    {
      title: 'Standard Wooden Crates',
      description: 'Lightweight yet strong enough for safe transit. Cost-efficient for domestic transport, warehousing, and storage. Available in custom sizes for optimized protection.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Standard+Crates'
    },
    {
      title: 'Custom Wooden Crates',
      description: 'Designed with PP partitions, reinforcements, and additional protective layers. Ideal for fragile items, electronics, and precision instruments. Ensures maximum safety with tailored packaging solutions.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Custom+Crates'
    }
  ];

  const whyChoose = [
    {
      title: 'Superior Strength & Durability',
      description: 'Engineered to withstand heavy loads, rough handling, and long transit.'
    },
    {
      title: 'Custom-Built for Your Needs',
      description: 'Available in various sizes, strengths, and reinforcements to match your packaging requirements.'
    },
    {
      title: 'Cost-Effective & Lightweight',
      description: 'Offers affordable packaging without compromising on protection.'
    },
    {
      title: 'ISPM-15 Certified for Export',
      description: 'Ensures compliance with international shipping regulations.'
    },
    {
      title: 'Eco-Friendly & Sustainable',
      description: 'Made from responsibly sourced wood to support sustainable packaging.'
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="container">
          <h1 className="product-detail-hero-title">Wooden Crates</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            Durable & Cost-Effective Wooden Crates for Secure Packaging
          </h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <p className="intro-paragraph">
                At <strong>Bindbridge Packaging Solutions</strong>, we provide high-quality <strong>wooden crates</strong> designed for maximum protection, durability, and cost-efficiency. Whether you need heavy-duty wooden crate packaging for industrial shipments or standard wooden crates for local transport, our solutions are tailored to ensure safe and damage-free deliveries.
              </p>
            </div>
            <div className="intro-image">
              <img 
                src="https://via.placeholder.com/500x400/29577e/ffffff?text=Wooden+Crate" 
                alt="Wooden Crate"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Bindbridge Wooden Crates?</h2>
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

      {/* Crate Types */}
      <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Our Wooden Crate Packaging Solutions</h2>
          <div className="box-types-grid">
            {crateTypes.map((crate, index) => (
              <div key={index} className="box-type-card">
                <div className="box-type-image">
                  <img src={crate.image} alt={crate.title} />
                </div>
                <div className="box-type-content">
                  <h3 className="box-type-title">{crate.title}</h3>
                  <p className="box-type-desc">{crate.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="product-intro-section">
        <div className="container">
          <h2 className="section-title">Get High-Quality Wooden Crates at the Best Price!</h2>
          <p className="intro-paragraph">
            <strong>Bindbridge Packaging Solutions</strong> is your trusted partner for custom wooden crate packaging that ensures safety, durability, and cost savings. Contact us today for a free consultation and get the best wooden packaging solutions for your business.
          </p>
          <p className="intro-paragraph">
            <strong>Serving Across Maharashtra: Pune, Nashik & More</strong>
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

export default WoodenCreate;