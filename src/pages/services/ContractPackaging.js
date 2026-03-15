import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const ContractPackaging = () => {
  const processSteps = [
    {
      number: '1',
      title: 'Packaging Audit',
      description: 'Our team conducts a detailed assessment of your current packaging process to identify areas for improvement.'
    },
    {
      number: '2',
      title: 'Testing & Evaluation',
      description: 'We analyze packaging materials, machinery, and workflow to enhance performance and reduce waste.'
    },
    {
      number: '3',
      title: 'Design & Development',
      description: 'Customized packaging solutions are developed to align with product specifications, branding, and sustainability goals.'
    },
    {
      number: '4',
      title: 'Execution & Implementation',
      description: 'We manage the entire packaging process, from procurement to production, ensuring a smooth transition and optimized workflow.'
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
          <h1 className="product-detail-hero-title">Contract Packaging</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            Contract Packaging Services - Your One-Stop Packaging Solution
          </h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content-full">
            <div className="intro-text">
              <p className="intro-paragraph">
                At <strong>Bindbridge Packaging Solutions</strong>, we offer comprehensive <strong>contract packaging services</strong> designed to streamline your packaging process, reduce costs, and ensure top-tier efficiency. Whether you need primary, secondary, or tertiary packaging, our <strong>end-to-end bespoke solutions</strong> guarantee seamless execution with <strong>tangible and intangible benefits</strong> that enhance your supply chain.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Our Contract Packaging Process</h2>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-number">{step.number}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Contract Packaging Services?</h2>
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

      {/* Get Started */}
      <section className="product-intro-section">
        <div className="container">
          <h2 className="section-title">Get Started with Hassle-Free Packaging</h2>
          <p className="intro-paragraph">
            Transform your packaging process with our <strong>reliable, cost-effective, and scalable</strong> contract packaging solutions. Contact us today for a free consultation and let our experts handle your packaging needs while you focus on growing your business.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="product-cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Streamline Your Packaging?</h2>
          <p className="cta-closing">
            Let <strong>Bindbridge Packaging Solutions</strong> handle your complete packaging needs from design to delivery.
          </p>
          <Link to="/contact" className="btn-cta-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContractPackaging;