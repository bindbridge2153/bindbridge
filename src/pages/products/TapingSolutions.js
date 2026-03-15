import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const TapingSolutions = () => {
  const tapingConsumables = [
    {
      title: 'BOPP Tapes',
      description: 'Transparent and colored variants. Ideal for FMCG, e-commerce, and logistics.',
      image: '/images/tapingsolutions/BOPP Tape.png'
    },
    {
      title: 'Paper Tapes',
      description: 'Eco-friendly and recyclable. Water-activated for secure and sustainable sealing.',
      image: '/images/tapingsolutions/Paper Tapes.png'
    }
  ];

  const tapingMachines = [
    {
      title: 'Compact semi-automatic carton sealers',
      description: 'Compact semi-automatic carton sealers.',
      image: '/images/tapingsolutions/Compact semi-automatic carton sealers..png'
    },
    {
      title: 'Heavy-duty automatic machines',
      description: 'Heavy-duty automatic machines for high-speed sealing.',
      image: '/images/tapingsolutions/Heavy-duty automatic machines.png'
    },
    {
      title: 'Random case sealers',
      description: 'Random case sealers for mixed box sizes.',
      image: '/images/tapingsolutions/Random case sealers.png'
    },
    {
      title: 'Flexible machines',
      description: 'Flexible machines for different carton formats.',
      image: '/images/tapingsolutions/Flexible machines .png'
    },
    {
      title: 'Case sealer',
      description: 'Case sealer for smaller cartons.',
      image: '/images/tapingsolutions/Case sealer.png'
    },
    {
      title: 'Taping-Strapping Combo Machines',
      description: 'Taping-Strapping Combo Machines – Integrated solutions for taping and strapping in one step.',
      image: '/images/tapingsolutions/Taping-Strapping Combo Machines.png'
    }
  ];

  const whyChoose = [
    // {
    //   title: 'Authorized Signode India Partner',
    //   description: ''
    // },
    {
      title: 'Complete range of consumables & machines',
      description: ''
    },
    {
      title: 'Expert consultation and after-sales support',
      description: ''
    },
    {
      title: 'Tailored solutions for your industry needs',
      description: ''
    },
    {
      title: 'Seamless integration with strapping & wrapping systems',
      description: ''
    },
    {
      title: 'Support & quick response service',
      description: ''
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="container">
          <h1 className="product-detail-hero-title">Taping Solutions</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            Taping Solutions - Case Packaging Systems
          </h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content-full">
            <p className="intro-paragraph">
              <strong>Bindbridge Packaging Solutions</strong>, offers a complete range of industrial taping solutions for efficient and reliable case sealing. From conventional box taping machinery to advanced automated systems, we help streamline your packaging operations with smart, scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Reliable Solutions */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Reliable, Customizable & High-Performance Taping Systems</h2>
          <p className="section-subtitle">
          At Bindbridge, we provide end-to-end taping solutions for carton and box sealing — built to meet the dynamic needs of modern industries like FMCG, pharmaceuticals, logistics, retail, e-commerce, and manufacturing.
          </p>
          <p className="section-subtitle">
          We bring you high-quality products, expert support, and technology-driven taping systems that enhance speed, consistency, and cost-efficiency across your packaging line.
          </p>
        </div>
      </section>

      {/* Taping Consumables */}
      <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Taping Consumables</h2>
          <p className="section-subtitle">
            We supply a wide range of high-quality tape consumables designed for both manual and automated operations:
          </p>
          <div className="box-types-grid two-column">
            {tapingConsumables.map((item, index) => (
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

      {/* Taping Machines */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Taping Machines</h2>
          <p className="section-subtitle">
            We offer a full range of automatic and semi-automatic case sealing machines that suit varied production volumes and box types:
          </p>
          <div className="box-types-grid">
            {tapingMachines.map((machine, index) => (
              <div key={index} className="box-type-card">
                <div className="box-type-image">
                  <img src={machine.image} alt={machine.title} />
                </div>
                <div className="box-type-content">
                  <h3 className="box-type-title">{machine.title}</h3>
                  <p className="box-type-desc">{machine.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="section-subtitle">
            These machines are designed to maximize efficiency, minimize labor, and ensure consistent sealing quality.
          </p>
        </div>
      </section>

      {/* Why Choose & CTA */}
      <section className="why-applications-section">
        <div className="container">
          <div className="why-applications-grid">
            {/* Why Choose */}
            <div className="why-choose-column">
              <h2 className="section-title">Why Choose Bindbridge for Taping Solutions?</h2>
              <ul className="why-list">
                {whyChoose.map((item, index) => (
                  <li key={index} className="why-item">
                    <strong>{item.title}</strong>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optimize CTA */}
            <div className="applications-column">
              <h2 className="section-title">Let's Optimize Your Packaging Line</h2>
              <p className="intro-paragraph">
                Whether you're upgrading your current setup or building a new packaging facility, our team can guide you to the right taping solution — ensuring faster throughput, lower costs, and stronger box security.
              </p>
              <p className="intro-paragraph">
                <strong>Request a Demo, Sample, or Technical Consultation Today!</strong>
              </p>
              <Link to="/contact" className="btn-cta-primary">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TapingSolutions;