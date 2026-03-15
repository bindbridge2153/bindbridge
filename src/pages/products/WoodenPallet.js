import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const WoodenPallet = () => {
  const palletTypes = [
    {
      title: 'Two-Way Wooden Pallets',
      description: 'Designed for forklift and pallet jack handling from two sides. Ideal for warehousing and light industrial applications.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Two-Way+Pallets'
    },
    {
      title: 'Four-Way Wooden Pallets',
      description: 'Accessible from all four sides, ensuring maximum efficiency in logistics and storage. Best for heavy-duty applications and export shipments.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Four-Way+Pallets'
    },
    {
      title: 'Block Wooden Pallets',
      description: 'Engineered for superior strength and stacking capability. Used in industrial supply chains and bulk material handling.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Block+Pallets'
    },
    {
      title: 'Stringer Wooden Pallets',
      description: 'Cost-effective solution for domestic shipping and storage. Available in various sizes and load-bearing capacities.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Stringer+Pallets'
    },
    {
      title: 'Custom Wooden Pallets',
      description: 'Designed to fit your unique dimensions and specifications. Available with heat treatment, fumigation, and special coatings.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Custom+Pallets'
    }
  ];

  const whyChoose = [
    {
      title: 'Heavy-Duty & Durable',
      description: 'Designed to withstand heavy loads and rough handling.'
    },
    {
      title: 'ISPM-15 Compliant for Export',
      description: 'Suitable for international shipments with heat treatment certification.'
    },
    {
      title: 'Custom Sizes & Load Capacities',
      description: 'Tailored to your specific storage and transport needs.'
    },
    {
      title: 'Eco-Friendly & Recyclable',
      description: 'Made from sustainable wood sources, reducing environmental impact.'
    },
    {
      title: 'Cost-Effective Packaging Solution',
      description: 'Affordable alternative to metal and plastic pallets.'
    }
  ];

  const applications = [
    {
      title: 'Export & International Shipping',
      description: 'ISPM-15 compliant for global trade.'
    },
    {
      title: 'Manufacturing & Heavy Industries',
      description: 'Ideal for machinery, automotive, and bulk materials.'
    },
    {
      title: 'Retail & E-commerce Warehousing',
      description: 'Ensures safe handling and efficient storage.'
    },
    {
      title: 'Food & Pharmaceutical Industries',
      description: 'Available in sanitized and treated options.'
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="container">
          <h1 className="product-detail-hero-title">Wooden Pallets</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            Premium Wooden Pallets - Durable, Reliable & Cost-Effective
          </h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <p className="intro-paragraph">
                At <strong>Bindbridge Packaging Solutions</strong>, we manufacture and supply high-quality <strong>wooden pallets</strong> designed for safe, efficient, and cost-effective material handling and transportation. Whether for domestic logistics, international shipping, or warehouse storage, our wooden pallets provide superior strength, durability, and sustainability.
              </p>
            </div>
            <div className="intro-image">
              <img 
                src="https://via.placeholder.com/500x400/29577e/ffffff?text=Wooden+Pallets" 
                alt="Wooden Pallets"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Bindbridge Wooden Pallets?</h2>
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
          <h2 className="section-title">Types of Wooden Pallets We Offer</h2>
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
          <h2 className="section-title">Applications of Wooden Pallets</h2>
          <ul className="why-list">
            {applications.map((app, index) => (
              <li key={index} className="why-item">
                <strong>{app.title}:</strong> {app.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="product-cta-section">
        <div className="container">
          <h2 className="cta-title">Get High-Quality Wooden Pallets for Your Business!</h2>
          <p className="cta-closing">
            At <strong>Bindbridge Packaging Solutions</strong>, we are committed to providing strong, reliable, and sustainable wooden pallets tailored to your needs. Contact us today for a custom quote and find the perfect pallet solution for your supply chain!
          </p>
          <Link to="/contact" className="btn-cta-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WoodenPallet;