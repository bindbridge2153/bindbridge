import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const MachinesToolsService = () => {
  const machinesService = [
    {
      number: '1',
      title: 'Equipment Audits',
      description: 'Regular inspections to assess equipment condition and identify potential issues before they escalate.'
    },
    {
      number: '2',
      title: 'Emergency Breakdown Repair',
      description: 'Fast and reliable service to minimize downtime and keep your production running smoothly.'
    },
    {
      number: '3',
      title: 'Installation & Commissioning',
      description: 'Seamless setup of new Signode equipment, ensuring proper functionality and optimal performance.'
    },
    {
      number: '4',
      title: 'Preventive Maintenance Service Program',
      description: 'A proactive approach to keep your equipment operating at maximum efficiency, reducing unexpected failures.'
    },
    {
      number: '5',
      title: 'Operator & Maintenance Staff Training',
      description: 'Hands-on training to help your team operate and maintain equipment efficiently, reducing human errors.'
    },
    {
      number: '6',
      title: 'Genuine Signode Spare Parts',
      description: 'We use only original Signode quality spare parts to ensure durability and reliability.'
    }
  ];

  const toolsService = [
    {
      number: '1',
      title: 'On-Site Repairs',
      description: 'Our engineers can conduct on-site repairs if required, reducing equipment downtime.'
    },
    {
      number: '2',
      title: 'Quick Access to Spare Parts',
      description: 'Our large inventory ensures fast availability of genuine Signode parts, minimizing repair wait times.'
    },
    {
      number: '3',
      title: 'No Unnecessary Repairs',
      description: 'We diagnose and fix only what is needed, ensuring cost-effective service solutions.'
    },
    {
      number: '4',
      title: 'Repair Tracking System',
      description: 'Keep track of repairs and service history for better equipment lifecycle management.'
    },
    {
      number: '5',
      title: 'Full Testing & Quality Assurance',
      description: 'We ensure that all repairs meet optimal tension and joint strength standards.'
    },
    {
      number: '6',
      title: 'Training & Operational Support',
      description: 'Comprehensive training on tool operation and maintenance for better performance and longevity.'
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="container">
          <h1 className="product-detail-hero-title">Machines & Tools Service</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            Machines & Tools Service - Expert Repair & Maintenance Solutions
          </h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content-full">
            <div className="intro-text">
              <p className="intro-paragraph">
                At <strong>Bindbridge Packaging Solutions</strong>, we provide <strong>specialized Machines & Tools Service</strong> to ensure the smooth operation and longevity of your <strong>Signode India equipment and tools</strong>. Our team of highly trained field service engineers is dedicated to maintaining your machinery at peak performance levels, reducing downtime and unexpected costs.
              </p>
            </div>
            {/* <div className="intro-image">
              <img 
                src="https://via.placeholder.com/500x400/29577e/ffffff?text=Machines+Tools+Service" 
                alt="Machines & Tools Service"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Our Comprehensive Services */}
      <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Our Comprehensive Machines & Tools Services</h2>
          
          <h3 className="section-subtitle-bold">Machines Service</h3>
          <p className="section-subtitle">
            Our full-line, experienced field engineers offer a complete range of repair and maintenance services for Signode India equipment.
          </p>
          <div className="numbered-grid">
            {machinesService.map((service, index) => (
              <div key={index} className="numbered-card">
                <div className="numbered-circle">{service.number}</div>
                <h3 className="numbered-title">{service.title}</h3>
                <p className="numbered-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Service */}
      <section className="key-features-section">
        <div className="container">
          <h3 className="section-subtitle-bold">Tools Service</h3>
          <p className="section-subtitle">
            We offer expert repair and maintenance services for Signode India strapping hand tools, using genuine parts and ensuring operational excellence.
          </p>
          <div className="numbered-grid">
            {toolsService.map((service, index) => (
              <div key={index} className="numbered-card">
                <div className="numbered-circle">{service.number}</div>
                <h3 className="numbered-title">{service.title}</h3>
                <p className="numbered-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhance Equipment Performance */}
      <section className="product-intro-section">
        <div className="container">
          <h2 className="section-title">Enhance Equipment Performance with Reliable Maintenance</h2>
          <p className="intro-paragraph">
            Maximize productivity and minimize downtime with our <strong>Machines & Tools Service</strong>. Contact us today for expert repair, maintenance, and support tailored to your operational needs.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="product-cta-section">
        <div className="container">
          <h2 className="cta-title">Keep Your Equipment Running at Peak Performance</h2>
          <p className="cta-closing">
            Trust <strong>Bindbridge Packaging Solutions</strong> for professional maintenance and repair services that extend the life of your Signode equipment.
          </p>
          <Link to="/contact" className="btn-cta-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MachinesToolsService;