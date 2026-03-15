import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled
      setIsScrolled(currentScrollY > 50);
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Products', 
      path: '/products',
      dropdown: [
        { name: 'Corrugated Box', path: '/products/corrugated-boxes' },
        // { name: 'Heavy Duty Corrugated Boxes', path: '/products/heavy-duty-boxes' },
        // { 
        //   name: 'Wooden Packaging',
        //   isSubmenu: true,
        //   submenu: [
        //     { name: 'Wooden Box', path: '/products/wooden-box' },
        //     { name: 'Wooden Crate', path: '/products/wooden-crate' },
        //     { name: 'Plywood Pallets', path: '/products/plywood-pallets' },
        //     { name: 'Wooden Pallet', path: '/products/wooden-pallet' }
        //   ]
        // },
        { name: 'Taping Solutions', path: '/products/taping-solutions' },
        { name: 'Strapping Solutions', path: '/products/strapping-solutions' },
        { name: 'Wrapping Solutions', path: '/products/wrapping-solutions' },
        { name: 'Protective Packaging', path: '/products/protective-packaging' }
      ]
    },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Contract Packaging', path: '/services/contract-packaging' },
        { name: 'Field Engineering', path: '/services/field-engineering' },
        { name: 'Machines & Tools Service', path: '/services/machines-tools-service' },
        { name: 'Maintenance Contracts', path: '/services/maintenance-contracts' }
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="Bindbridge Packaging Solutions" className="logo-img" />
            <div className="logo-text">
              <span className="logo-primary">BINDBRIDGE</span>
              <span className="logo-secondary">PACKAGING SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav">
            {navItems.map((item) => (
              <li 
                key={item.name}
                className={location.pathname === item.path ? 'active' : ''}
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={item.path}>
                  {item.name}
                  {item.dropdown && <ChevronDown size={16} />}
                </Link>
                {item.dropdown && activeDropdown === item.name && (
                  <ul className="dropdown">
                    {item.dropdown.map((subItem, index) => (
                      <li key={index} className={subItem.isSubmenu ? 'has-submenu' : ''}>
                        {subItem.isSubmenu ? (
                          <>
                            <span className="submenu-title">
                              {subItem.name}
                              <ChevronDown size={14} className="submenu-arrow" />
                            </span>
                            <ul className="submenu">
                              {subItem.submenu.map((item) => (
                                <li key={item.path}>
                                  <Link to={item.path}>{item.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link to={subItem.path}>{subItem.name}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <Link to="/contact" className="btn btn-primary desktop-btn">Get Quote</Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="nav-links mobile-nav">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path}>{item.name}</Link>
                {item.dropdown && (
                  <ul className="mobile-dropdown">
                    {item.dropdown.map((subItem, index) => (
                      <li key={index}>
                        {subItem.isSubmenu ? (
                          <>
                            <span className="mobile-submenu-title">{subItem.name}</span>
                            <ul className="mobile-submenu">
                              {subItem.submenu.map((item) => (
                                <li key={item.path}>
                                  <Link to={item.path}>{item.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link to={subItem.path}>{subItem.name}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                Get Quote
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;