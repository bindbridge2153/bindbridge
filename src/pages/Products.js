import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const productsList = [
    {
      title: 'Corrugated Packaging',
      description: 'Sustainable, Customizable TSW Corrugated Box Solutions Designed to Fit Your Unique Packaging',
      image: '/images/slider-bg.png',
      link: '/products/corrugated-boxes'
    },
    {
      title: 'Heavy Duty Corrugated Solutions',
      description: 'Engineered Tough: TSW Heavy-Duty Corrugated Packaging for Maximum Protection',
      image: '/images/slider-bg.png',
      link: '/products/heavy-duty-boxes'
    },
    {
      title: 'Carton Sealing',
      description: 'Fast, Secure Sealing with Signode Consumables and Advanced Automation Solutions',
      image: '/images/slider-bg.png',
      link: '/products/taping-solutions'
    },
    {
      title: 'Strapping System',
      description: 'Ideal for versatility and cost-efficiency, plastic strapping offers high-performance bundling without compromising on safety or speed.',
      image: '/images/slider-bg.png',
      link: '/products/strapping-solutions'
    },
    {
      title: 'Wrapping System',
      description: 'Protect Against Dust & Moisture During Transit with Signode Complete Wrapping Solutions.',
      image: '/images/slider-bg.png',
      link: '/products/wrapping-solutions'
    },
    {
      title: 'Protective Packaging',
      description: 'Protect fragile items and Increase load caring capacity for Optimized Safety of Sensitive and Heavy Items.',
      image: '/images/slider-bg.png',
      link: '/products/protective-packaging'
    },
    {
      title: 'Wooden Packaging',
      description: 'Wooden Boxes, Crates, and Pallets Engineered for Heavy-Duty Export & Domestic Packaging.',
      image: '/images/slider-bg.png',
      link: '/products/wooden-box'
    },
    {
      title: 'Rust Preventions',
      description: 'Zavenir Daubert- Metal cutting, cleaning, and corrosion protection with VCI packaging to prevent rust and extend product life.',
      image: '/images/slider-bg.png',
      link: '/products/rust-prevention'
    }
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-overlay"></div>
        <div className="container">
          <h1 className="products-hero-title">Products & Solutions</h1>
        </div>
      </section>

      {/* Page Title */}
      <section className="products-intro">
        <div className="container">
          <h2 className="products-main-title">Bindbridge End To End Industrail Packaging Solutions</h2>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-listing">
        <div className="container">
          <div className="products-grid">
            {productsList.map((product, index) => (
              <div key={index} className="product-item">
                <div className="product-item-content">
                  <div className="product-item-text">
                    <h3 className="product-item-title">{product.title}</h3>
                    <p className="product-item-desc">{product.description}</p>
                  </div>
                  <div className="product-item-image">
                    <img 
                      src={product.image} 
                      alt={product.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <div className="products-cta-content">
            <h2>Need Custom Packaging Solutions?</h2>
            <p>Contact us to discuss your specific requirements and get a tailored solution for your business.</p>
            <Link to="/contact" className="btn btn-primary-white">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;