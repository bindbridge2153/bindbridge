import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Wrench } from 'lucide-react';
import './Services.css';

const Services = () => {
  const servicesList = [
    // {
    //   title: 'Contract Packaging',
    //   description: 'One-Stop Solution: We handle everything from packaging design to shipping, giving you a single point of contact.',
    //   icon: Package,
    //   link: '/services/contract-packaging'
    // },
    {
      title: 'Field Engineering',
      description: 'Expert guidance to refine packaging processes and train teams for best practices in packaging management.',
      icon: Users,
      link: '/services/field-engineering'
    },
    {
      title: 'Maintenance Contracts',
      description: 'Our Annual Maintenance Contracts are designed to keep your equipment running at peak efficiency, ensuring reliability, longevity, and seamless performance.',
      icon: Award,
      link: '/services/maintenance-contracts'
    },
    {
      title: 'Machines & Tools Services',
      description: 'Expert repair and maintenance services for Signode India strapping hand tools, using genuine parts and ensuring operational excellence.',
      icon: Wrench,
      link: '/services/machines-tools'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="container">
          <h1 className="services-hero-title">Our Services</h1>
        </div>
      </section>

      {/* Page Title */}
      <section className="services-intro">
        <div className="container">
          <h2 className="services-main-title">Comprehensive Packaging Services Tailored to Your Needs</h2>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-listing">
        <div className="container">
          <div className="services-grid">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-item">
                  <div className="service-item-content">
                    <div className="service-item-text">
                      <h3 className="service-item-title">{service.title}</h3>
                      <p className="service-item-desc">{service.description}</p>
                    </div>
                    <div className="service-item-icon-wrapper">
                      <div className="service-item-icon">
                        <Icon size={120} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta-content">
            <h2>Need Help with Easier Industrial Solutions? We Are Experts!</h2>
            <Link to="/contact" className="btn-learn-more">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;