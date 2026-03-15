import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const CorrugatedBoxes = () => {
  const boxTypes = [
    {
      title: 'Regular Slotted Container (RSC) Boxes',
      description: 'The most common type of corrugated box with equal-length flaps that meet in the middle. Ideal for consumer goods, electronics, and food packaging.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=RSC+Boxes'
    },
    {
      title: 'Corrugated Boxes with Partitions',
      description: 'Featuring internal dividers for added protection and organization. Perfect for electronics, glassware, and fragile items.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=With+Partitions'
    },
    {
      title: 'Laminated Corrugated Boxes',
      description: 'Coated with a thin plastic or film layer for resistance against moisture, dirt, and damage. Suitable for electronics, cosmetics, and luxury goods.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Laminated+Boxes'
    },
    {
      title: 'Custom Printed Corrugated Boxes with Binding Cloth',
      description: 'Designed for premium packaging with added protection at the corners. Ideal for e-commerce, subscription boxes, and high-end packaging.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Custom+Printed'
    },
    {
      title: 'Die-Cut Corrugated Boxes',
      description: 'Custom-designed boxes made from a single sheet of material, perfect for unique shapes and retail displays.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=Die-Cut+Boxes'
    },
    {
      title: 'Custom Corrugated Boxes with Handles',
      description: 'Lightweight single-wall boxes, durable double-wall boxes, or ultra-strong triple-wall options tailored for medium to heavy-weight items.',
      image: 'https://via.placeholder.com/400x300/29577e/ffffff?text=With+Handles'
    }
  ];

  const keyFeatures = [
    {
      title: 'Exceptional Durability and Strength',
      description: 'Designed with high-quality materials, our corrugated boxes ensure superior protection during storage and transportation. These boxes are sturdy and reliable, safeguarding your products from damage.'
    },
    {
      title: 'Custom Sizes and Designs',
      description: 'We understand that packaging needs vary. That\'s why we offer fully customizable corrugated boxes in different sizes, shapes, and designs—from small fragile items to large industrial goods.'
    },
    {
      title: 'Eco-Friendly Packaging',
      description: 'Our corrugated boxes are made from recyclable and biodegradable materials, providing a sustainable and environmentally responsible packaging solution.'
    },
    {
      title: 'Lightweight Yet Strong',
      description: 'Despite their lightweight construction, our boxes provide excellent protection, reducing shipping costs without sacrificing quality.'
    },
    {
      title: 'Cost-Effective and Reliable',
      description: 'Get high-quality packaging at competitive prices without compromising on strength or performance.'
    },
    {
      title: 'Versatility Across Industries',
      description: 'Our corrugated boxes are ideal for e-commerce, retail, manufacturing, logistics, and more. They are perfect for shipping, storage, or retail display.'
    }
  ];

  const whyChoose = [
    {
      title: 'Protective Packaging',
      description: 'Ensure your products arrive safely with durable corrugated packaging.'
    },
    {
      title: 'Tailored to Your Needs',
      description: 'Custom sizes, shapes, and designs to meet your unique packaging requirements.'
    },
    {
      title: 'Sustainability',
      description: 'Reduce your environmental impact with eco-friendly materials.'
    },
    {
      title: 'Affordable Solutions',
      description: 'High-quality packaging at cost-effective prices.'
    },
    {
      title: 'Fast Delivery',
      description: 'We provide timely delivery to locations across Maharashtra, including Pune and Nashik.'
    }
  ];

  const applications = [
    {
      title: 'E-Commerce Packaging',
      description: 'Reliable and branded packaging solutions for online businesses.'
    },
    {
      title: 'Industrial Shipments',
      description: 'Strong boxes designed for heavy machinery, automotive parts, and industrial goods.'
    },
    {
      title: 'Retail Display',
      description: 'Custom boxes with printed branding for an attractive retail presence.'
    },
    {
      title: 'Food and Beverage Packaging',
      description: 'Hygienic, safe, and sustainable packaging for food products.'
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="container">
          <h1 className="product-detail-hero-title">Corrugated Boxes</h1>
        </div>
      </section>

      {/* Main Title */}
      <section className="product-detail-intro">
        <div className="container">
          <h2 className="product-detail-main-title">
            Corrugated Boxes: Durable, Reliable, and Customizable Packaging Solutions
          </h2>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="product-intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <p className="intro-paragraph">
                Welcome to <strong>Bindbridge Packaging Solutions</strong>, your trusted partner in <strong>corrugated packaging solutions</strong>. Based in Maharashtra, with a strong presence in Pune and Nashik, we are dedicated to delivering innovative and sustainable packaging tailored to meet the needs of businesses across industries.
              </p>
              <p className="intro-paragraph">
                We specialize in high-quality <strong>corrugated boxes</strong> that cater to various business needs. Whether you need packaging for fragile items, bulk shipments, or retail-ready solutions, our corrugated boxes provide the durability, strength, and customization required to protect your products effectively.
              </p>
            </div>
            <div className="intro-image">
              <img 
                src="/images/curogated-box.jpg" 
                alt="Corrugated Packaging"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-title">Key Features of Our Corrugated Boxes:</h2>
          <div className="features-list">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="feature-item">
                <h3 className="feature-number">{index + 1}. {feature.title}:</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Box Types Grid */}
      {/* <section className="box-types-section">
        <div className="container">
          <h2 className="section-title">Types of Corrugated Boxes We Offer</h2>
          <div className="box-types-grid">
            {boxTypes.map((box, index) => (
              <div key={index} className="box-type-card">
                <div className="box-type-image">
                  <img src={box.image} alt={box.title} />
                </div>
                <div className="box-type-content">
                  <h3 className="box-type-title">{box.title}</h3>
                  <p className="box-type-desc">{box.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose & Applications */}
      <section className="why-applications-section">
        <div className="container">
          <div className="why-applications-grid">
            {/* Why Choose */}
            <div className="why-choose-column">
              <h2 className="section-title">Why Choose Our Corrugated Boxes?</h2>
              <ul className="why-list">
                {whyChoose.map((item, index) => (
                  <li key={index} className="why-item">
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="applications-column">
              <h2 className="section-title">Applications of Corrugated Boxes</h2>
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

      {/* Final CTA */}
      <section className="product-cta-section">
        <div className="container">
          <h2 className="cta-title">Get Your Corrugated Boxes Today!</h2>
          <div className="cta-points">
            <p><strong>1. Local Expertise in Maharashtra:</strong> Serving Mumbai, Pune, Nashik, and nearby areas with fast and reliable delivery.</p>
            <p><strong>2. Sustainable Practices:</strong> Our commitment to eco-friendly packaging helps businesses reduce their environmental impact.</p>
            <p><strong>3. Custom Solutions:</strong> Tailored corrugated boxes to meet diverse business needs.</p>
            <p><strong>4. Industry-Leading Quality:</strong> High-strength boxes designed for superior performance and durability.</p>
          </div>
          <p className="cta-closing">
            At <strong>Bindbridge Packaging Solutions</strong>, we are dedicated to providing the highest quality <strong>corrugated packaging solutions</strong> for businesses in Maharashtra and beyond. Whether you need <strong>regular slotted containers</strong>, <strong>custom die-cut boxes</strong>, or <strong>laminated corrugated packaging</strong>, we have the perfect solution for you.
          </p>
          <p className="cta-final">
            <strong>Contact us today</strong> to discuss your requirements or request a quote. Let us help you protect your products with durable, eco-friendly, and cost-effective corrugated boxes tailored to your business needs.
          </p>
          <Link to="/contact" className="btn-cta-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CorrugatedBoxes;