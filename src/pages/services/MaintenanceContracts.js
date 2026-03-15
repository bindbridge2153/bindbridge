import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const MaintenanceContracts = () => {
  const preventiveService = [
    'Boost Equipment Lifespan & Efficiency',
    'Minimize Downtime & Improve Productivity',
    'Lower Costs on Repairs & Spare Parts',
    'Predictable Maintenance Expenses with Fixed Plans',
    'Regular Inspections & Timely Repairs'
  ];

  const comprehensiveCoverage = [
    'Detailed Equipment Audits & Performance Checks',
    'On-Site Inspections & Fine-Tuning',
    'Early Issue Detection & Resolution',
    'Dedicated Expert Support'
  ];

  const reliableMaintenance = [
    'Scheduled Preventive Maintenance to prevent failures',
    'Proactive Adjustments & Repairs for seamless operations',
    'Annual Overhauls & Comprehensive Inspections'
  ];

  const costEffective = [
    'Fixed-Cost Maintenance for Easy Budgeting',
    'Reduced Spare Parts Inventory & Admin Overhead',
    'On-Site Engineers with Essential Repair Parts'
  ];

  const serviceQuality = [
    {
      title: 'Extensive Industry Expertise & Reliable Maintenance Solutions',
      description: ''
    },
    {
      title: 'Personalized Service with Dedicated Support Engineers',
      description: ''
    },
    {
      title: 'Fast Response Times & Proactive Problem Resolution',
      description: ''
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="container">
          <h1 className="product-detail-hero-title">Maintenance Contracts</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            Maintenance Contracts - Reduce Downtime, Increase Efficiency
          </h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content-full">
            <p className="intro-paragraph">
              At <strong>Bindbridge Packaging Solutions</strong>, we understand that <strong>unplanned downtime</strong> can disrupt operations and lead to costly delays. Our <strong>Maintenance Contracts</strong> are designed to keep your equipment running at peak efficiency, ensuring reliability, longevity, and <strong>seamless performance</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Service Features Grid */}
      <section className="key-features-section">
        <div className="container">
          <div className="service-features-grid">
            {/* Preventive Maintenance */}
            <div className="service-feature-box">
              <h3 className="service-feature-title">Preventive Maintenance Service</h3>
              <ul className="service-feature-list">
                {preventiveService.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Comprehensive Coverage */}
            <div className="service-feature-box">
              <h3 className="service-feature-title">Comprehensive Coverage Includes:</h3>
              <ul className="service-feature-list">
                {comprehensiveCoverage.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Reliable Maintenance */}
            <div className="service-feature-box">
              <h3 className="service-feature-title">Reliable Maintenance & Repairs</h3>
              <ul className="service-feature-list">
                {reliableMaintenance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Cost-Effective */}
            <div className="service-feature-box">
              <h3 className="service-feature-title">Cost-Effective, Hassle-Free Solutions</h3>
              <ul className="service-feature-list">
                {costEffective.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Leading Service Quality */}
      <section className="product-intro-section">
        <div className="container">
          <h2 className="section-title">Industry-Leading Service Quality</h2>
          <p className="intro-paragraph">
            Our team of <strong>certified engineers</strong>, with an average of <strong>8+ years of experience</strong>, ensures <strong>high-quality maintenance solutions</strong> tailored to your business needs. With <strong>dedicated service personnel</strong>, you receive expert care from professionals who understand your equipment inside and out.
          </p>
          <ul className="why-list">
            {serviceQuality.map((item, index) => (
              <li key={index} className="why-item">
                <strong>{item.title}</strong>
              </li>
            ))}
          </ul>
          <p className="intro-paragraph">
            Ensure <strong>maximum uptime, cost-effective maintenance, and expert service</strong> with our <strong>Maintenance Contracts</strong>. Let's create a customized maintenance plan tailored to your operational needs.
          </p>
          <p className="intro-paragraph">
            <strong>Get the best maintenance solutions for your equipment today!</strong>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="product-cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Optimize Your Equipment Performance?</h2>
          <p className="cta-closing">
            Contact us today to discuss your maintenance requirements and create a customized plan that keeps your operations running smoothly.
          </p>
          <Link to="/contact" className="btn-cta-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MaintenanceContracts;