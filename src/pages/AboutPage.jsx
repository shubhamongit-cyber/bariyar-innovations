import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  HeartHandshake, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionBadge } from '../components/common/SectionBadge';
import { CTASection } from '../components/common/CTASection';

export const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Us — Technology, Innovation & Engineering Rigor"
        description="Learn about BARIYAR INNOVATIONS, our mission, company values, and engineering philosophy in building world-class digital products."
      />

      <PageHero
        badge="About BARIYAR INNOVATIONS"
        badgeVariant="blue"
        title="Engineering Software That Drives"
        highlightText="Measurable Business Value"
        subtitle="We combine commercial awareness with precision engineering to create digital products that are fast, intuitive, and built for scalable operations."
      />

      {/* Main Narrative */}
      <section className="section-padding">
        <div className="container">
          <div className="about-mission-grid">
            <div>
              <SectionBadge variant="orange">Our Story & Identity</SectionBadge>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Building Digital Solutions for Modern Enterprises</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '16px' }}>
                BARIYAR INNOVATIONS was established with a singular conviction: businesses deserve technology partners who understand their commercial objectives as deeply as their technical stack.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.7 }}>
                Too often, software development projects suffer from bloated timelines, brittle architectures, and poor communication. We take a different path: lean, agile development cycles, clean modular codebases, transparent milestone delivery, and unwavering post-launch support.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Whether you are launching a greenfield startup product or refactoring an enterprise ERP workflow, our multidisciplinary team of engineers, UI/UX designers, and systems architects ensures your software becomes a competitive asset.
              </p>

              <div className="mission-highlight-card">
                <h4>Our Core Mission</h4>
                <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', margin: 0 }}>
                  To help ambitious businesses harness the power of modern web, mobile, and custom software engineering—simplifying operational complexities and creating delight for end users.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="why-card" style={{ padding: '32px' }}>
                <div className="why-icon-wrap" style={{ background: 'rgba(2, 132, 199, 0.12)', color: '#38BDF8' }}>
                  <Award size={24} />
                </div>
                <h4>Engineering Rigor</h4>
                <p>
                  Every architecture is designed for fault-tolerance, high concurrency, and clean testability before deployment.
                </p>
              </div>

              <div className="why-card" style={{ padding: '32px' }}>
                <div className="why-icon-wrap" style={{ background: 'rgba(249, 115, 22, 0.12)', color: '#FB923C' }}>
                  <Users size={24} />
                </div>
                <h4>Dedicated Partnership</h4>
                <p>
                  We operate as an extension of your internal team, providing proactive engineering insights and transparent updates.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div style={{ marginTop: '40px' }}>
            <div className="section-header">
              <SectionBadge variant="blue">Our Foundational Principles</SectionBadge>
              <h2 className="section-title">Values That Guide Our Engineering</h2>
              <p className="section-subtitle">
                These six core values shape every technical decision, user interface, and client relationship at BARIYAR INNOVATIONS.
              </p>
            </div>

            <div className="values-cards-grid">
              <div className="value-item-card">
                <div className="value-item-icon"><Zap size={22} /></div>
                <h4>Innovation With Purpose</h4>
                <p>We leverage cutting-edge tools and frameworks not because they are trendy, but because they deliver superior performance and speed.</p>
              </div>

              <div className="value-item-card">
                <div className="value-item-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#34D399' }}><CheckCircle2 size={22} /></div>
                <h4>Uncompromising Quality</h4>
                <p>Code reviews, automated regression tests, and security benchmarking ensure production software is resilient under heavy load.</p>
              </div>

              <div className="value-item-card">
                <div className="value-item-icon" style={{ background: 'rgba(56, 189, 248, 0.12)', color: '#38BDF8' }}><Layers size={22} /></div>
                <h4>Absolute Transparency</h4>
                <p>Open communication, accessible sprint demo environments, and clear milestone schedules with no hidden surprises.</p>
              </div>

              <div className="value-item-card">
                <div className="value-item-icon" style={{ background: 'rgba(249, 115, 22, 0.12)', color: '#FB923C' }}><ShieldCheck size={22} /></div>
                <h4>Reliability & Security</h4>
                <p>We adhere to enterprise security standards, data encryption protocols, and zero-trust cloud deployment practices.</p>
              </div>

              <div className="value-item-card">
                <div className="value-item-icon" style={{ background: 'rgba(139, 92, 246, 0.12)', color: '#A78BFA' }}><HeartHandshake size={22} /></div>
                <h4>Customer-Centric Focus</h4>
                <p>We listen closely to user feedback, optimizing interfaces to reduce cognitive friction and maximize conversion rates.</p>
              </div>

              <div className="value-item-card">
                <div className="value-item-icon" style={{ background: 'rgba(236, 72, 153, 0.12)', color: '#F472B6' }}><TrendingUp size={22} /></div>
                <h4>Continuous Growth</h4>
                <p>Software is a living asset. We provide continuous support, telemetry insights, and iterative improvements as your business scales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Ready to Collaborate With Our Engineering Team?"
        subtitle="Let's build a software solution that accelerates your company's operational capabilities."
        btnText="Schedule an Architecture Call"
      />
    </>
  );
};
