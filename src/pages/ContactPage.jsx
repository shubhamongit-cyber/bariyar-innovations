import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionBadge } from '../components/common/SectionBadge';
import { ContactForm } from '../components/contact/ContactForm';

export const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact Us & Project Discovery — BARIYAR INNOVATIONS" 
        description="Connect with BARIYAR INNOVATIONS to discuss web development, mobile applications, and custom software solutions. Fast 24-hour response."
      />

      <PageHero
        badge="Let's Build Together"
        badgeVariant="orange"
        title="Start Your Digital Project With"
        highlightText="BARIYAR INNOVATIONS"
        subtitle="Tell us about your project objectives. Our engineering leads will review your specifications and schedule a discovery consultation."
      />

      {/* Main Contact Hub */}
      <section className="section-padding">
        <div className="container contact-hub-grid">
          {/* Info Side */}
          <div className="contact-info-panel">
            <SectionBadge variant="blue">Direct Channels</SectionBadge>
            <h3>Get in Touch Directly</h3>
            <p>
              We respond to all verified project inquiries within 24 business hours with an initial technical assessment.
            </p>

            <div className="contact-channel-list">
              <a href="mailto:info@bariyarinnovations.com" className="channel-card">
                <div className="channel-icon-wrap">
                  <Mail size={22} />
                </div>
                <div className="channel-info">
                  <span>Direct Email</span>
                  <strong>info@bariyarinnovations.com</strong>
                </div>
              </a>

              <a href="tel:+919876543210" className="channel-card">
                <div className="channel-icon-wrap" style={{ color: '#34D399', background: 'rgba(16, 185, 129, 0.12)' }}>
                  <Phone size={22} />
                </div>
                <div className="channel-info">
                  <span>Phone & WhatsApp</span>
                  <strong>+91 (Consultation Direct)</strong>
                </div>
              </a>

              <div className="channel-card">
                <div className="channel-icon-wrap" style={{ color: '#FB923C', background: 'rgba(249, 115, 22, 0.12)' }}>
                  <MapPin size={22} />
                </div>
                <div className="channel-info">
                  <span>Engineering Headquarters</span>
                  <strong>BARIYAR INNOVATIONS HQ</strong>
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ fontSize: '1rem', color: '#FB923C', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} />
                <span>What Happens Next?</span>
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <CheckCircle2 size={14} style={{ color: '#10B981', marginTop: '3px' }} />
                  <span>1. Initial review of requirements by senior architect</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <CheckCircle2 size={14} style={{ color: '#10B981', marginTop: '3px' }} />
                  <span>2. 30-minute discovery call to align on scope & milestones</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <CheckCircle2 size={14} style={{ color: '#10B981', marginTop: '3px' }} />
                  <span>3. Formal fixed quote & technical roadmap delivery</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <ContactForm />
        </div>
      </section>
    </>
  );
};
