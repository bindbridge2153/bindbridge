import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const HeavyDutyBoxes = () => {
  const productVariants = [
    {
      title: 'Vertical Heavy Duty Corrugated Box',
      description: 'Best for tall or upright items, offering superior protection during transit.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Vertical+HDC+Box'
    },
    {
      title: 'Heavy Duty Bulk Packaging Solutions',
      description: 'A durable option for shipping bulky or heavy items with added partitioning for extra safety.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Bulk+Packaging'
    },
    {
      title: 'Stacking in Heavy Duty Packaging',
      description: 'Oversized boxes tailored to ensure safe packaging for specific vertical items.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Stacking+Boxes'
    }
  ];

  const whyChoose = [
    {
      title: 'Maximum Strength and Durability',
      description: 'Made from heavy-duty corrugated material, our boxes withstand heavy loads, rough handling, and impacts with ease.'
    },
    {
      title: 'Sea-Worthy Protection',
      description: 'Designed specifically for international shipping, these boxes ensure your goods are protected against harsh weather and tough voyages.'
    },
    {
      title: 'Eco-Friendly & Sustainable',
      description: 'Our corrugated packaging is made from recyclable materials, making it an environmentally friendly choice.'
    },
    {
      title: 'Alternative to Wooden Packaging',
      description: 'Eliminate risks like splinters, mold, and pest infestations while enjoying the strength of wood with lower costs.'
    },
    {
      title: 'Customizable Options',
      description: 'Tailored dimensions, strengths, and designs to meet your unique business needs.'
    },
    {
      title: 'Cost-Effective',
      description: 'A high-quality packaging solution at a fraction of the cost of wooden or metal alternatives.'
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Protection',
      description: 'Safeguard your products with superior strength and durability.'
    },
    {
      title: 'Lightweight Efficiency',
      description: 'Reduce shipping costs with strong yet lightweight packaging.'
    },
    {
      title: 'Safety First',
      description: 'Avoid splinters and sharp edges often associated with wooden packaging.'
    },
    {
      title: 'Wide Application',
      description: 'Perfect for industries such as manufacturing, retail, logistics, and exports.'
    }
  ];

  const applications = [
    {
      title: 'Sea Freight & International Shipping',
      description: 'Designed to endure moisture, vibrations, and rough handling during long-distance shipping.'
    },
    {
      title: 'Industrial Shipments',
      description: 'Ideal for transporting heavy, oversized items like machinery, automotive parts, and construction materials.'
    },
    {
      title: 'Retail & E-Commerce',
      description: 'Provides robust, reliable packaging for bulk shipments or individual consumer orders.'
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="container">
          <h1 className="product-detail-hero-title">Heavy Duty Corrugated Boxes</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            Bindbridge Heavy Duty Corrugated Boxes
          </h2>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h3 className="intro-subtitle">HDC Boxes: Premium Packaging for Maximum Protection</h3>
              <p className="intro-paragraph">
                Welcome to <strong>Bindbridge Packaging Solutions</strong>, your trusted partner in <strong>heavy-duty corrugated packaging solutions</strong>. Based in Maharashtra, with a strong presence in Pune and Nashik, we deliver innovative and sustainable packaging solutions tailored to meet your industrial needs. Whether it's heavy machinery, electronics, or bulk goods, our <strong>heavy-duty corrugated boxes</strong> are designed to ensure the safe and secure delivery of your products.
              </p>
              <p className="intro-paragraph">
                Our <strong>Heavy Duty Corrugated (HDC) Boxes</strong> are engineered to meet and exceed industry standards in performance and durability. As the perfect alternative to traditional wooden packaging, these boxes offer superior strength and are ideal for sea-worthy shipments and long-distance transit.
              </p>
            </div>
            <div className="intro-image">
              <img 
                src="https://via.placeholder.com/500x400/29577e/ffffff?text=Heavy+Duty+Boxes" 
                alt="Heavy Duty Corrugated Boxes"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Bindbridge Heavy Duty Corrugated Boxes?</h2>
          <div className="features-list">
            {whyChoose.map((item, index) => (
              <div key={index} className="feature-item">
                <h3 className="feature-number">{index + 1}. {item.title}:</h3>
                <p className="feature-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Applications */}
      <section className="why-applications-section">
        <div className="container">
          <div className="why-applications-grid">
            {/* Benefits */}
            <div className="why-choose-column">
              <h2 className="section-title">Benefits of Bindbridge Corrugated Packaging</h2>
              <ul className="why-list">
                {benefits.map((item, index) => (
                  <li key={index} className="why-item">
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="applications-column">
              <h2 className="section-title">Applications of Heavy Duty Corrugated Boxes</h2>
              <ul className="applications-list">
                {applications.map((app, index) => (
                  <li key={index} className="application-item">
                    <strong>{app.title}:</strong> {app.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Variants */}
      <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Product Variants</h2>
          <div className="box-types-grid">
            {productVariants.map((variant, index) => (
              <div key={index} className="box-type-card">
                <div className="box-type-image">
                  <img src={variant.image} alt={variant.title} />
                </div>
                <div className="box-type-content">
                  <h3 className="box-type-title">{variant.title}</h3>
                  <p className="box-type-desc">{variant.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="product-cta-section">
        <div className="container">
          <h2 className="cta-title">Optimize Your Packaging with Bindbridge</h2>
          <p className="cta-closing">
            Upgrade your packaging with <strong>Bindbridge Heavy Duty Corrugated Boxes</strong>, a sustainable and cost-effective solution for modern businesses. Contact us today to discuss your requirements or request a custom quote. Let <strong>Bindbridge Packaging Solutions</strong> be your trusted partner in reliable and eco-friendly corrugated packaging solutions.
          </p>
          <div className="cta-points">
            <p><strong>Expert Engineering:</strong> Designed to exceed industry standards, ensuring maximum protection.</p>
            <p><strong>Custom Solutions:</strong> Tailored packaging to fit your exact needs, including branded printing and unique dimensions.</p>
            <p><strong>Affordable & Sustainable:</strong> Eco-friendly materials that balance cost-efficiency and premium quality.</p>
            <p><strong>Local Expertise:</strong> With operations in Pune and Nashik, we provide fast, efficient service to businesses across Maharashtra.</p>
          </div>
          <Link to="/contact" className="btn-cta-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeavyDutyBoxes;