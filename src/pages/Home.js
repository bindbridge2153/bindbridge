import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Package, Shield, Leaf, Zap, ArrowRight,
  Users, Award, TrendingUp, Box, Wrench, ChevronLeft, ChevronRight,
  ShoppingCart, Smile, TreePine, Car, Cpu, Heart, Plane, Coffee, HardHat
} from 'lucide-react';
import './Home.css';

/* =========================
   City Landmark Icons (SVG)
========================= */

const SvgBase = ({ children, title = 'icon' }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    xmlns="http://www.w3.org/2000/svg"
    className="city-svg"
  >
    {children}
  </svg>
);

const GatewayOfIndiaIcon = () => (
  <SvgBase title="Mumbai - Gateway of India">
    <path
      d="M5 20h14M7 20v-5m10 5v-5M8 15h8M9 15V9m6 6V9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 9c0-2 1.2-3 3-3s3 1 3 3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 9h8M6.5 15h11"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgBase>
);

const FortIcon = ({ title = 'Fort' }) => (
  <SvgBase title={title}>
    <path
      d="M6 20v-8l2-1 2 1 2-1 2 1 2-1 2 1v8M6 12V9l2-1 2 1V12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 9V6h2v3M10 9V6h2v3M12 9V6h2v3M16 9V6h2v3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgBase>
);

const TempleIcon = ({ title = 'Temple' }) => (
  <SvgBase title={title}>
    <path
      d="M12 4l3 3-3 3-3-3 3-3z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M7 20v-8l5-2 5 2v8M10 20v-4h4v4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgBase>
);

const MonumentIcon = ({ title = 'Monument' }) => (
  <SvgBase title={title}>
    <path
      d="M9 20V10l3-2 3 2v10M8 10h8M10 8l2-2 2 2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgBase>
);

/* =========================
   Animated Counter
========================= */
const AnimatedCounter = ({ target, suffix = '', started }) => {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    // Only animate once when started becomes true
    if (!started || hasAnimatedRef.current) return;

    // Mark as animated to prevent re-runs
    hasAnimatedRef.current = true;

    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation (ease-out)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);

      setCount(currentCount);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target); // Ensure exact final value
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [started, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countersStarted, setCountersStarted] = useState(false);
  const countersRef = useRef(null);
  const observerInitializedRef = useRef(false);

  const heroSlides = [
    {
      title: "Bindbridge: Your One-Stop Sustainable Packaging Partner",
      subtitle: "Innovative & Eco-Friendly Solutions by Bindbridge Packaging Solutions.",
      cta: "strategy plans"
    },
    {
      title: "Secure Your Products in Transit & Storage",
      subtitle: "Reliable Packaging for Export, Domestic Shipping & Warehousing.",
      cta: "strategy plans"
    },
    {
      title: "Custom-Designed Packaging for Safety & Cost Efficiency",
      subtitle: "Innovative, Tailored Solutions to Optimize Protection & Reduce Costs.",
      cta: "learn more"
    },
    {
      title: "Automate & Streamline Your Packaging Process",
      subtitle: "Enhance Efficiency with Advanced Packaging Automation Solutions.",
      cta: "Learn More"
    },
    {
      title: "Rust Prevention for Long-Lasting Metal Protection",
      subtitle: "Advanced VCI & Corrosion Prevention Solutions for Maximum Durability.",
      cta: "start grow your brand"
    },
    {
      title: "End-to-End Contract Packaging Solutions",
      subtitle: "Seamless Packaging Management to Optimize Your Supply Chain.",
      cta: "learn more"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    // Prevent multiple observer initializations
    if (observerInitializedRef.current || !countersRef.current) return;

    const element = countersRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observerInitializedRef.current) {
            observerInitializedRef.current = true;
            setCountersStarted(true);
            // Disconnect immediately after first trigger
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: '0px'
      }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array - run only once on mount

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  const stats = [
    { icon: ShoppingCart, number: 75, label: "Product", suffix: "+" },
    { icon: TrendingUp, number: 30, label: "Experience", suffix: "+" },
    { icon: Smile, number: 1232, label: "Happy Clients", suffix: "" },
    { icon: TreePine, number: 5000, label: "Save Trees", suffix: "+" },
  ];

  const cities = [
    { name: "MUMBAI", Icon: GatewayOfIndiaIcon, iconTitle: "Mumbai - Gateway of India" },
    { name: "THANE", Icon: FortIcon, iconTitle: "Thane - Fort" },
    { name: "PUNE", Icon: FortIcon, iconTitle: "Pune - Fort" },
    { name: "NASHIK", Icon: TempleIcon, iconTitle: "Nashik - Temple" },
    { name: "INDORE", Icon: TempleIcon, iconTitle: "Indore - Temple" },
    { name: "BHOPAL", Icon: FortIcon, iconTitle: "Bhopal - Fort" },
    { name: "DEWAS", Icon: MonumentIcon, iconTitle: "Dewas - Monument" },
  ];

  const products = [
    {
      icon: Zap,
      title: "Packaging Automation",
      description: "Taping, strapping, and wrapping machines. Fully customized packaging automation systems to enhance productivity.",
      image: "/images/products/automation.jpg",
      link: "/products/taping-solutions"
    },
    {
      icon: Box,
      title: "Corrugated Packaging",
      description: "Heavy-duty corrugated boxes provide superior strength. Standard Corrugated Solutions for everyday shipping needs.",
      image: "/images/products/corrugated.jpg",
      link: "/products/corrugated-boxes"
    },
    {
      icon: Package,
      title: "Packaging Consumables",
      description: "High-quality materials for taping, strapping, and wrapping. Airbags, lashing systems, & protective packaging products.",
      image: "/images/products/consumables.jpg",
      link: "/products/strapping-solutions"
    },
    {
      icon: Shield,
      title: "Corrosion Prevention",
      description: "Comprehensive solutions for cutting, cleaning, protecting, and packing to prevent corrosion and extend product life.",
      image: "/images/products/corrosion.jpg",
      link: "/products/protective-packaging"
    },
    {
      icon: Package,
      title: "Transit Packaging",
      description: "Comprehensive solutions for cutting, cleaning, protecting, and packing to prevent corrosion and extend product life.",
      image: "/images/products/transit.jpg",
      link: "/products/protective-packaging"
    },
    {
      icon: Wrench,
      title: "Wooden Packaging",
      description: "Wooden Crates and Boxes for heavy-duty shipping and storage. Wooden Pallets: Sturdy and reliable for secure transport.",
      image: "/images/products/wooden.jpg",
      link: "/products/wooden-box"
    }
  ];

  const services = [
    {
      icon: Package,
      title: "Contract Packaging",
      description: "Customized packaging solutions to handle your specific needs, so you can focus on your business."
    },
    {
      icon: Users,
      title: "Field Engineering",
      description: "On-site support for installation, maintenance, and troubleshooting of your packaging equipment."
    },
    {
      icon: Award,
      title: "Maintenance Contracts",
      description: "AMC Ensure equipment operates at peak performance with regular maintenance, minimizing downtime and costs."
    },
    {
      icon: Wrench,
      title: "Machines & Tools Service",
      description: "Customized packaging solutions to handle your specific needs, so you can focus on your business."
    }
  ];

  const industries = [
    { name: "Automobile", icon: Car },
    { name: "Electronics", icon: Cpu },
    { name: "Healthcare", icon: Heart },
    { name: "Aerospace", icon: Plane },
    { name: "Food & Beverage", icon: Coffee },
    { name: "Construction", icon: HardHat }
  ];

  const whyChooseUs = [
    {
      title: "Customer-Centric Approach",
      description: "We understand your unique needs and deliver solutions that work for you."
    },
    {
      title: "Sustainability",
      description: "Eco-friendly practices to minimize environmental impact."
    },
    {
      title: "Innovation",
      description: "State-of-the-art products and systems to boost efficiency."
    },
    {
      title: "Cost Optimization",
      description: "Solutions designed to reduce operational expenses."
    }
  ];

  const customerLogos = [
    { name: "Tata", image: "/images/tata.png" },
    { name: "Tata", image: "/images/tata.png" },
    { name: "Tata", image: "/images/tata.png" },
    { name: "Tata", image: "/images/tata.png" },
  ];

  const allLogos = [...customerLogos, ...customerLogos];

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <section className="hero-section-fullscreen">
        <div className="hero-slider-fullscreen">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide-fullscreen ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="hero-overlay-fullscreen"></div>
              <div className="hero-content-fullscreen">
                <h1 className="hero-title-fullscreen">{slide.title}</h1>
                <p className="hero-subtitle-fullscreen">{slide.subtitle}</p>
                <Link to="/products" className="btn-hero-fullscreen">
                  {slide.cta}
                </Link>
              </div>
            </div>
          ))}

          <button className="slider-arrow slider-arrow-left" onClick={prevSlide} aria-label="Previous slide">
            <ChevronLeft size={40} />
          </button>
          <button className="slider-arrow slider-arrow-right" onClick={nextSlide} aria-label="Next slide">
            <ChevronRight size={40} />
          </button>

          <div className="slider-dots-fullscreen">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`dot-fullscreen ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section who-we-are-section">
        <div className="container">
          <div className="who-we-are-content">
            <h4 className="section-label">Who we are</h4>
            <h2 className="who-we-are-title">Committed to Innovation, Sustainability, and Customer Success</h2>
            <p className="who-we-are-text">
              At Bindbridge, we deliver <strong>innovative, sustainable</strong> and <strong>customized packaging solutions</strong> that <strong>protect</strong> your products and <strong>optimize costs</strong>. Committed to excellence, we collaborate closely with customers to understand their specific requirements, enabling us to provide tailored solutions that <strong>enhance operational efficiency</strong> and elevate <strong>end-customer satisfaction.</strong>
            </p>
            <Link to="/about" className="btn btn-primary">About Bindbridge</Link>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="stats-counter-section" ref={countersRef}>
        <div className="container">
          <div className="stats-counter-grid">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="stat-counter-card">
                  <div className="stat-counter-icon">
                    <Icon size={40} />
                  </div>
                  <h3 className="stat-counter-number">
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} started={countersStarted} />
                  </h3>
                  <p className="stat-counter-label">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="cities-section">
        <div className="container">
          <h3 className="cities-title">CITIES COVERED</h3>
          <div className="cities-grid">
            {cities.map(({ name, Icon, iconTitle }) => (
              <div key={name} className="city-badge" aria-label={`City: ${name}`}>
                <span className="city-badge-icon" aria-hidden="true">
                  <Icon title={iconTitle} />
                </span>
                <span className="city-badge-text">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products - Flip Cards */}
      <section className="section products-section-flip">
        <div className="container">
          <div className="section-title">
            <h2>Our Products & Solutions</h2>
            <p className="section-subtitle">We Provide Best Industrial Solutions For​</p>
          </div>
          <div className="products-flip-grid">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.title} className="product-flip-card">
                  <div className="product-flip-inner">
                    <div className="product-flip-front">
                      <div className="product-flip-image-wrapper">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="product-flip-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="product-flip-fallback">
                          <Icon size={60} />
                        </div>
                      </div>
                      <div className="product-flip-title-overlay">
                        <h3>{product.title}</h3>
                      </div>
                    </div>
                    <div className="product-flip-back">
                      <div className="product-flip-back-content">
                        <div className="product-flip-back-icon">
                          <Icon size={40} />
                        </div>
                        <h3 className="product-flip-back-title">{product.title}</h3>
                        <p className="product-flip-back-desc">{product.description}</p>
                        <Link to={product.link} className="product-flip-back-btn">
                          Learn More <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="industries-section-band">
        <div className="container">
          <div className="industries-band-content">
            <h3 className="industries-band-title">INDUSTRIES WE SERVE</h3>
            <div className="industries-band-grid">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div key={industry.name} className="industry-band-item">
                    <div className="industry-band-icon-box">
                      <Icon size={32} />
                    </div>
                    <span className="industry-band-name">{industry.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services-section-new">
        <div className="container">
          <div className="section-title">
            <h2 className="services-title">Our Services</h2>
            <p className="services-subtitle">Services designed around innovation and your needs</p>
          </div>
          <div className="services-grid-new">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="service-card-new">
                  <div className="service-content-wrapper">
                    <h3 className="service-title-new">{service.title}</h3>
                    <p className="service-desc-new">{service.description}</p>
                  </div>
                  <div className="service-icon-large">
                    <Icon size={80} strokeWidth={1} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Customers */}
      <section className="customers-section">
        <div className="customers-band">
          <div className="customers-band-title">
            <h3>Our Customers</h3>
          </div>
          <div className="customers-carousel">
            <div className="customers-track">
              {allLogos.map((logo, index) => (
                <div key={index} className="customer-logo-item">
                  <img 
                    src={logo.image} 
                    alt={logo.name}
                    className="customer-logo-img"
                    onError={(e) => {
                      e.target.style.opacity = '0.3';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us + Let's Work Together - MERGED SECTION */}
      <section className="section why-cta-combined-section">
        <div className="container">
          <div className="why-cta-grid">
            {/* Left Side - Content */}
            <div className="why-cta-content">
              <h2 className="why-cta-title">Why Choose Bindbridge?</h2>
              
              <div className="why-list">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="why-item">
                    <h3 className="why-item-title">{item.title}</h3>
                    <p className="why-item-desc">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="cta-block">
                <h2 className="cta-block-title">Let's Work Together</h2>
                <p className="cta-block-text">
                  We are dedicated to helping your business succeed with reliable, innovative, and cost-effective packaging solutions.
                </p>
                <Link to="/contact" className="btn-dark">Contact us now</Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="why-cta-image">
              <img 
                src="/images/why-choose.jpg" 
                alt="Why Choose Bindbridge"
                className="why-cta-img"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;