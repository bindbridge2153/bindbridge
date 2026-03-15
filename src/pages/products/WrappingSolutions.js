import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const WrappingSolutions = () => {
  const wrappingConsumables = [
    {
      title: 'Machine Wrap Film',
      description: 'Designed for automatic and semi-automatic stretch wrapping machines. Reduces film usage while ensuring tight and secure wrapping.',
      image: '/images/machine-wrap-film-1000x700.png'
    },
    {
      title: 'Mimolite Oriented Wrapping Film',
      description: 'Oriented film with high holding force at lower thicknesses. Eco-friendly and cost-effective.',
      image: '/images/oriented-stretch-film-1000x700.png'
    }
  ];

  const wrappingMachines = [
    {
      title: 'CW - Carton Stretch Wrapper',
      description: 'Compact and semi-automatic ideal for small boxes and e-commerce shipments. Provides uniform wrapping with minimal effort.',
      image: '/images/c-w.png'
    },
    {
      title: 'FELP - Turntable Wrapper',
      description: 'Designed for medium-volume pallet wrapping. Customizable film tension and wrap settings. Rugged turntable ensures stable, consistent rotation.',
      image: '/images/fle-p.png'
    },
    {
      title: 'HLS - Heavy-Duty Stretch Wrapper',
      description: 'Built for irregular, heavy, or large-size loads. Delivers secure load containment with minimal film waste.',
      image: '/images/hl-s.png'
    },
    {
      title: 'Octopus S Series',
      description: 'Rotary ring stretch wrapper for high capacity lines. High-speed wrapping with reduced wear and maintenance.',
      image: '/images/octopus.jpg'
    }
  ];

  const whyChoose = [
    // {
    //   title: 'Authorized Partner of Signode India',
    //   description: 'World leader in stretch wrapping technology'
    // },
    {
      title: 'Complete Solutions',
      description: 'Stretch films, machines, and line integration'
    },
    {
      title: 'Customized Machines',
      description: 'Based on your load type, volume, and automation level'
    },
    {
      title: 'Local Support Teams',
      description: 'Fast service and technical assistance across Maharashtra'
    },
    {
      title: 'Sustainability Focused',
      description: 'Film optimization and eco-friendly alternatives available'
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="container">
          <h1 className="product-detail-hero-title">Wrapping Solutions</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            Wrapping Solutions - Secure, Protect & Stabilize Your Shipments
          </h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content-full">
            <p className="intro-paragraph">
              <strong>Bindbridge Packaging Solutions</strong>, provides complete stretch wrapping solutions to ensure safe and secure transportation of your products. Our solutions include high-performance stretch films for manual, semi-automatic, and automatic wrapping machines, along with custom integration services designed to suit a wide variety of industrial applications.
            </p>
            <p className="intro-paragraph">
            Whether you're wrapping lightweight cartons or heavy-duty pallets, our wrapping systems are engineered to deliver optimum load stability, film efficiency, and operational cost savings.
            </p>
          </div>
        </div>
      </section>

      {/* Wrapping Consumables */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Wrapping Consumables</h2>
          <p className="section-subtitle">
            We offer machine-grade stretch films and oriented wrapping films that deliver superior load containment, film economy, and durability. Our films are suitable for various industries including logistics, manufacturing, e-commerce, FMCG, and automotive.
          </p>
          <div className="box-types-grid two-column">
            {wrappingConsumables.map((item, index) => (
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

      {/* Stretch Wrapping Machines */}
      <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Stretch Wrapping Machines</h2>
          <p className="section-subtitle">
            Our range of semi-automatic and fully automatic wrapping machines is built for consistent film application and reliable load containment, regardless of load size or industry.
          </p>
          <div className="box-types-grid">
            {wrappingMachines.map((machine, index) => (
              <div key={index} className="box-type-card card-small">
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
        </div>
      </section>

      {/* Why Choose & CTA */}
      <section className="why-applications-section">
        <div className="container">
          <div className="why-applications-grid">
            {/* Why Choose */}
            <div className="why-choose-column">
              <h2 className="section-title">Why Choose Bindbridge for Wrapping Systems?</h2>
              <ul className="why-list">
                {whyChoose.map((item, index) => (
                  <li key={index} className="why-item">
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* Optimize CTA */}
            <div className="applications-column">
              <h2 className="section-title">Let's Optimize Your Packaging Line</h2>
              <p className="intro-paragraph">
                Looking to upgrade your unit load containment, reduce film usage, or automate your wrapping line?
              </p>
              <p className="intro-paragraph">
                Let our team help you select the most suitable stretch film and wrapping equipment to optimize your packaging process and reduce costs.
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

export default WrappingSolutions;