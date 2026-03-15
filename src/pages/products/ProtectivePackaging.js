import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const ProtectivePackaging = () => {
  const transitProtection = [
    {
      title: 'Lashing & Bracing Systems',
      description: 'High-performance cargo lashing and bracing solutions to ensure maximum safety and stability during transit.',
      image: '/images/cross_lashing.png'
    },
    {
      title: 'Dunnage Bags',
      description: 'Air bags offer quick, reusable, and impact-resistant protection for safe and stable transit.',
      image: '/images/Dunnage-bags.png'
    }
  ];

  const edgeProtection = [
    {
      title: 'Angleboard / Edgeboard',
      description: 'Compact and semi-automatic ideal for small boxes and e-commerce shipments. Provides uniform wrapping with minimal effort.',
      image: '/images/corner_protectors.png'
    },
    {
      title: 'OD / ID Protractor',
      description: 'Inner and outer diameter protectors contour to the circumference of metal coils protecting the inside and outside edges from damage during shipping and handling.',
      image: '/images/od-id.jpg'
    }
  ];

  const rustProtection = [
    {
      title: 'Metal Cutting',
      description: 'Metal cutting solutions that ensure precision machining, enhanced tool life, and superior surface finish.',
      image: '/images/x-cool.png'
    },
    {
      title: 'Metal Cleaning',
      description: 'High-performance, EHS-compliant metal cleaning solutions tailored to modern manufacturing processes.',
      image: '/images/x-clean.png'
    },
    // {
    //   title: 'Rust Preventive',
    //   description: 'Rust Preventives ensures long-term protection for metal components during storage, transit, and operational use, reducing costs and enhancing product longevity.',
    //   image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Rust+Preventive'
    // },
    {
      title: 'VCI Packaging Films & Bags',
      description: 'Daubert VCI Packaging Solutions, ensuring that metal parts remain corrosion-free during shipping, storage, and layup, even in harsh environments.',
      image: '/images/vcifilms.png'
    }
  ];

  const whyChoose = [
    {
      title: 'Trusted partner for industrial & export-grade protection',
      description: ''
    },
    {
      title: 'Customized packaging designs & product selection',
      description: ''
    },
    {
      title: 'Integrated supply across Maharashtra & PAN India',
      description: ''
    },
    {
      title: 'In-house technical team for audits & recommendations',
      description: ''
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="container">
          <h1 className="product-detail-hero-title">Protective Packaging Solutions</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            Comprehensive Damage Prevention for Industrial & Export Packaging
          </h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content-full">
            <p className="intro-paragraph">
              At <strong>Bindbridge Packaging Solutions</strong>, we provide a complete range of protective packaging products designed to prevent damage during storage, handling, and transportation. Whether it's protecting sharp edges, delicate surfaces, or rust-prone metal parts, our specialized solutions ensure that your goods remain secure and intact across the supply chain.

            </p>
            <p className="intro-paragraph">
            We serve diverse industries including automotive, engineering, electronics, FMCG, and export logistics with high-performance materials designed to deliver reliability and consistent protection. Explore our core protective packaging categories:
            </p>
          </div>
        </div>
      </section>

      {/* Transit Protection */}
      <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Transit Protection</h2>
          <p className="section-subtitle">Keep cargo stable, secure, and impact-resistant during transport.</p>
          <div className="box-types-grid two-column">
            {transitProtection.map((item, index) => (
              <div key={index} className="box-type-card">
                <div className="box-type-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="box-type-content">
                  <h3 className="box-type-title">{item.title}</h3>
                  <p className="box-type-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Protection */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Edge Protection</h2>
          <p className="section-subtitle">Reinforce pallet corners and edges to prevent crushing and strapping damage.</p>
          <div className="box-types-grid two-column">
            {edgeProtection.map((item, index) => (
              <div key={index} className="box-type-card">
                <div className="box-type-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="box-type-content">
                  <h3 className="box-type-title">{item.title}</h3>
                  <p className="box-type-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rust Protection */}
      <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Rust Protection</h2>
          <p className="section-subtitle">Prevent corrosion with specialty oils, VCI films, and pre-packaging treatments for metal parts.</p>
          <div className="box-types-grid">
            {rustProtection.map((item, index) => (
              <div key={index} className="box-type-card">
                <div className="box-type-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="box-type-content">
                  <h3 className="box-type-title">{item.title}</h3>
                  <p className="box-type-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose & Need Guidance */}
      <section className="why-applications-section">
        <div className="container">
          <div className="why-applications-grid">
            {/* Why Choose */}
            <div className="why-choose-column">
              <h2 className="section-title">Why Choose Bindbridge?</h2>
              <ul className="why-list">
                {whyChoose.map((item, index) => (
                  <li key={index} className="why-item">
                    <strong>{item.title}</strong>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need Guidance */}
            <div className="applications-column">
              <h2 className="section-title">Need guidance?</h2>
              <p className="intro-paragraph">
                Let our team help you choose the right protective packaging for your product and transit conditions.
              </p>
              <Link to="/contact" className="btn-cta-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProtectivePackaging;