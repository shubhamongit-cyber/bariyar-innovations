import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import logoSvg from '../../assets/bariyar-innovations-logo.svg';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrolled = false;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 25;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="brand-logo-link" onClick={closeMenu} aria-label="BARIYAR INNOVATIONS Home">
            <img 
              src={logoSvg} 
              alt="BARIYAR INNOVATIONS" 
              className="brand-logo-img" 
              width="210" 
              height="50"
            />
          </Link>

          <nav>
            <ul className="nav-links-list">
              <li>
                <NavLink to="/" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/process" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  Process
                </NavLink>
              </li>
              <li>
                <NavLink to="/technologies" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  Tech
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary btn-sm">
              <span>Start Project</span>
              <ArrowRight size={15} />
            </Link>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation drawer"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer Content */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <Link to="/" onClick={closeMenu}>
            <img src={logoSvg} alt="BARIYAR INNOVATIONS" style={{ height: '36px' }} />
          </Link>
          <button className="mobile-drawer-close" onClick={closeMenu} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <ul className="mobile-drawer-nav">
          <li>
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/process" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              How We Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/technologies" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              Technologies
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              Case Studies
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              Pricing & Estimator
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link to="/contact" onClick={closeMenu} className="btn btn-primary" style={{ width: '100%' }}>
            <span>Start Your Project</span>
            <Sparkles size={16} />
          </Link>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            info@bariyarinnovations.com
          </p>
        </div>
      </div>
    </>
  );
};
