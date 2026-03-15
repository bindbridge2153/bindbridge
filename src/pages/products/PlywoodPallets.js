import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const PlywoodPallets = () => {
  const palletTypes = [
    {
      title: 'Standard Plywood Pallets',
      description: 'Lightweight yet durable for domestic and light-duty applications. Cost-efficient for warehousing, retail, and distribution.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Standard+Plywood'
    },
    {
      title: 'Heavy-Duty Plywood Pallets',
      description: 'Built for industrial shipments and high-load capacities. Ideal for heavy machinery, automotive parts, and export logistics.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Heavy-Duty+Plywood'
    },
    {
      title: 'Custom Plywood Pallets',
      description: 'Available in custom dimensions, thicknesses, and weight capacities. Designed with reinforcements, coatings, and special finishes as per your needs.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Custom+Plywood'
    }
  ];

  const whyChoose = [
    {
      title: 'Lightweight Yet Strong',
      description: 'Reduces shipping costs while ensuring reliable load-bearing capacity.'
    },
    {
      title: 'ISPM-15 Compliant for Export',
      description: 'Meets international shipping standards without requiring fumigation.'
    },
    {
      title: 'Moisture & Pest Resistant',
      description: 'Manufactured from high-quality treated plywood, ensuring long-lasting durability.'
    },
    {
      title: 'Custom Sizes & Load Capacities',
      description: 'Designed to fit your specific storage and transport needs.'
    },
    {
      title: 'Eco-Friendly & Sustainable',
      description: 'Made from recyclable plywood, offering a greener packaging solution.'
    }
  ];

  const applications = [
    {
      title: 'Export & International Shipping',
      description: 'Compliant with global shipping standards.'
    },
    {
      title: 'Warehousing & Storage',
      description: 'Space-efficient and stackable for better inventory management.'
    },
    {
      title: 'Manufacturing & Industrial Use',
      description: 'Suitable for bulk transport and supply chain optimization.'
    },
    {
      title: 'Retail & E-commerce',
      description: 'Reliable support for safe and damage-free product handling.'
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="container">
          <h1 className="product-detail-hero-title">Plywood Pallets</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            High-Quality Plywood Pallets - Lightweight, Durable & Cost-Effective
          </h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <p className="intro-paragraph">
                At <strong>Bindbridge Packaging Solutions</strong>, we offer premium <strong>plywood pallets</strong> designed for secure, efficient, and sustainable packaging. Whether for domestic shipping, export logistics, or warehousing, our plywood pallets provide the perfect balance of strength, durability, and cost-effectiveness.
              </p>
            </div>
            <div className="intro-image">
              <img 
                src="https://via.placeholder.com/500x400/29577e/ffffff?text=Plywood+Pallets" 
                alt="Plywood Pallets"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Bindbridge Plywood Pallets?</h2>
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

      {/* Pallet Types */}
      <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Types of Plywood Pallets We Offer</h2>
          <div className="box-types-grid">
            {palletTypes.map((pallet, index) => (
              <div key={index} className="box-type-card">
                <div className="box-type-image">
                  <img src={pallet.image} alt={pallet.title} />
                </div>
                <div className="box-type-content">
                  <h3 className="box-type-title">{pallet.title}</h3>
                  <p className="box-type-desc">{pallet.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="key-features-section">
        <div className="container">
          <div className="why-applications-grid">
            <div className="why-choose-column">
              <h2 className="section-title">Applications of Plywood Pallets</h2>
              <ul className="why-list">
                {applications.map((app, index) => (
                  <li key={index} className="why-item">
                    <strong>{app.title}:</strong> {app.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="applications-column">
              <div className="intro-image">
                <img 
                  src="https://via.placeholder.com/400x350/29577e/ffffff?text=Applications" 
                  alt="Plywood Pallet Applications"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="product-intro-section">
        <div className="container">
          <h2 className="section-title">Get the Best Plywood Pallets for Your Business!</h2>
          <p className="intro-paragraph">
            At <strong>Bindbridge Packaging Solutions</strong>, we are committed to providing strong, cost-effective, and export-ready plywood pallets to meet your business needs. Contact us today to discuss your requirements and get a custom quote.
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

export default PlywoodPallets;