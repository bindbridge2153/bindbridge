import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const StrappingSolutions = () => {
  const plasticStrapping = [
    {
      title: 'Polypropylene (PP)',
      description: 'Lightweight, flexible, and cost-effective. Ideal for light-duty bundling and carton closure.',
      image: '/images/strappingsolution/Polypropylene.png'
    },
    {
      title: 'Polyester (PET)',
      description: 'High tensile strength with excellent elongation recovery. Perfect for heavy-duty loads requiring rigid strapping.',
      image: '/images/strappingsolution/Polyester (PET).png'
    }
  ];

  const steelStrapping = [
    {
      title: 'Easy Steel Strapping',
      description: 'Designed for light to medium industrial loads. Offers strength, shock resistance.',
      image: '/images/strappingsolution/.png'
    },
    {
      title: 'Magnus Steel Strapping',
      description: 'High-carbon steel ideal with superior strength for extreme-duty and export packaging.',
      image: '/images/strappingsolution/.png'
    }
  ];

  const strappingMachines = [
    {
      title: 'Fully-automatic machine',
      description: 'Fully-automatic machine for high-volume operations.',
      image: '/images/strappingsolution/Fully-automatic machine.png'
    },
    {
      title: 'Semi-automatic strapping machine',
      description: 'Complete semi-automatic strapping machine.',
      image: '/images/strappingsolution/semi-automatic strapping machine.png'
    }
  ];

  const handTools = [
    {
      title: 'Battery-powered tool',
      description: 'Battery-powered tools for PP & PET strapping.',
      image: '/images/strappingsolution/Battery-powered tools.png'
    },
    {
      title: 'Combination Tools',
      description: 'Tension and cut-in-one action.',
      image: '/images/strappingsolution/Combination Tools.png'
    },
    {
      title: 'Manual Sealers',
      description: 'Lightweight and easy to use.',
      image: '/images/strappingsolution/Manual Sealers.png'
    },
    {
      title: 'Plastic Strapping Tensioners',
      description: 'Efficient tools for reliable packaging needs.',
      image: '/images/strappingsolution/Plastic Strapping Tensioners.png'
    }
  ];

  const steelHandTools = [
    // {
    //   title: 'RPT-L16',
    //   description: 'Heavy-duty battery-powered tensioner for ½" strapping.',
    //   image: '/images/strappingsolution/.png'
    // },
    // {
    //   title: 'PBolt-Ta',
    //   description: 'Pneumatic combination tool for easy strapping.',
    //   image: '/images/strappingsolution/.png'
    // },
    {
      title: 'Heavy-duty battery-powered strapping tool',
      description: 'Pneumatic combination tool for max pressure.',
      image: '/images/strappingsolution/Heavy-duty battery-powered strapping tool.png'
    },
    {
      title: 'Manual Tensioners',
      description: 'Durable options for field and export packaging.',
      image: '/images/strappingsolution/Manual Tensioners.png'
    }
  ];

  const accessories = [
    {
      title: 'Plastic Strapping Dispensers',
      description: 'Lightweight and portable.',
      image: '/images/strappingsolution/Plastic Strapping Dispensers.png'
    },
    {
      title: 'Steel Strapping Dispensers',
      description: 'Equipment with sealing systems for safe handling.',
      image: '/images/strappingsolution/Steel Strapping Dispensers.png'
    }
  ];

  const whyChoose = [
    // {
    //   title: 'Authorized Signode India Partner',
    //   description: ''
    // },
    {
      title: 'Complete solutions – straps, tools, machines & accessories',
      description: ''
    },
    {
      title: 'Suitable for all industries – from lightweight bundling to heavy pallets',
      description: ''
    },
    {
      title: 'On-site demonstrations and trials available',
      description: ''
    },
    {
      title: 'Strong presence across Maharashtra & PAN India',
      description: ''
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="container">
          <h1 className="product-detail-hero-title">Strapping Solutions</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            Strapping Solutions - Industrial Load Securing Systems
          </h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content-full">
            <p className="intro-paragraph">
              <strong>Bindbridge Packaging Solutions</strong>, offers end-to-end strapping solutions to secure, stabilize, and protect your load during handling, storage, and transit. From light cartons to heavy-duty pallets, our wide array of strapping materials, tools, machines, and accessories covers every application across industries including manufacturing, warehousing, logistics, export, and e-commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Durable & Cost-Effective */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Durable & Cost-Effective Strapping for Every Type</h2>
          <p className="section-subtitle">
            Our strapping systems are engineered to enhance load safety, reduce handling time, and improve packaging efficiency—supporting resilient performance under tough industrial conditions.
          </p>
        </div>
      </section>

      {/* Plastic Strapping */}
      <section className="box-types-section">
        <div className="container">
          <h3 className="section-subtitle-bold">Plastic Strapping</h3>
          <p className="section-subtitle">
            Explore our wide range of high-quality strapping materials suited for everything from light cartons to heavy pallets.
          </p>
          <div className="box-types-grid two-column">
            {plasticStrapping.map((item, index) => (
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

      {/* Steel Strapping */}
      <section className="key-features-section">
        <div className="container">
          <h3 className="section-subtitle-bold">Steel Strapping</h3>
          <div className="box-types-grid two-column">
            {steelStrapping.map((item, index) => (
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

      {/* Strapping Machines */}
      <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Strapping Machines</h2>
          <p className="section-subtitle">
            Boost packaging line efficiency with our range of automatic and semi-automatic strapping machines built for speed, safety, and durability.
          </p>
          <div className="box-types-grid two-column">
            {strappingMachines.map((item, index) => (
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

      {/* Strapping Hand Tools */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Strapping Hand Tools</h2>
          <p className="section-subtitle">
            Choose from our extensive range of manual, pneumatic, and battery-operated hand tools designed for operator comfort, reliability, and long-lasting use.
          </p>
          
          <h3 className="section-subtitle-bold">For Plastic Strapping:</h3>
          <div className="box-types-grid">
            {handTools.map((item, index) => (
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

          <h3 className="section-subtitle-bold">For Steel Strapping:</h3>
          <div className="box-types-grid">
            {steelHandTools.map((item, index) => (
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

      {/* Strapping Accessories & Dispensers */}
      <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Strapping Accessories & Dispensers</h2>
          <p className="section-subtitle">
            Elevate safety, mobility, and efficiency with our reliable accessories.
          </p>
          <div className="box-types-grid two-column">
            {accessories.map((item, index) => (
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

      {/* Why Choose & CTA */}
      <section className="why-applications-section">
        <div className="container">
          <div className="why-applications-grid">
            {/* Why Choose */}
            <div className="why-choose-column">
              <h2 className="section-title">Why Choose Bindbridge for Strapping Systems?</h2>
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
              Whether you're upgrading your current load strapping line or starting a new packaging facility, our team can help you choose the right strapping system—designed for durability, efficiency, and proven reliability.
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

export default StrappingSolutions;