import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Shield, FileText } from 'lucide-react';
import logoSvg from '../../assets/bariyar-innovations-logo.svg';

export const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <Link to="/" className="brand-logo-link" aria-label="BARIYAR INNOVATIONS Home">
              <img 
                src={logoSvg} 
                alt="BARIYAR INNOVATIONS" 
                className="brand-logo-img" 
                width="210" 
                height="50"
              />
            </Link>
            <p>
              BARIYAR INNOVATIONS engineers modern websites, native mobile applications, and custom software systems designed around real business outcomes.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
              <span className="badge badge-orange" style={{ textTransform: 'none' }}>
                🚀 Built for Growth
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/about">About Our Firm</Link></li>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/process">6-Step Methodology</Link></li>
              <li><Link to="/technologies">Tech Stack</Link></li>
              <li><Link to="/portfolio">Recent Work</Link></li>
              <li><Link to="/pricing">Pricing Plans</Link></li>
              <li><Link to="/faq">Frequently Asked</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-col">
            <h4>Core Services</h4>
            <ul className="footer-links-list">
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/app-development">Mobile App Engineering</Link></li>
              <li><Link to="/services/software-development">Custom Software & ERP</Link></li>
              <li><Link to="/services/ui-ux-design">UI/UX Design Systems</Link></li>
              <li><Link to="/services/api-backend">Backend & APIs</Link></li>
              <li><Link to="/services/maintenance-support">Maintenance & SLAs</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="footer-col">
            <h4>Contact Hub</h4>
            <ul className="footer-links-list">
              <li>
                <a href="mailto:info@bariyarinnovations.com">
                  <Mail size={15} style={{ color: '#FB923C' }} />
                  <span>info@bariyarinnovations.com</span>
                </a>
              </li>
              <li>
                <Link to="/contact">
                  <Phone size={15} style={{ color: '#38BDF8' }} />
                  <span>Schedule Consultation</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy">
                  <Shield size={15} style={{ color: '#94A3B8' }} />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms">
                  <FileText size={15} style={{ color: '#94A3B8' }} />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} BARIYAR INNOVATIONS. All rights reserved.</p>
          <div className="footer-legal-nav">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms">Terms & Conditions</Link>
            <span>·</span>
            <Link to="/contact">Client Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
