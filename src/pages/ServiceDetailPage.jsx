import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Code2, 
  Palette, 
  Database, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionBadge } from '../components/common/SectionBadge';
import { CTASection } from '../components/common/CTASection';
import { servicesData } from '../data/servicesData';

const iconMap = {
  Globe: <Globe size={32} />,
  Smartphone: <Smartphone size={32} />,
  Code2: <Code2 size={32} />,
  Palette: <Palette size={32} />,
  Database: <Database size={32} />,
  ShieldCheck: <ShieldCheck size={32} />
};

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = servicesData.filter((s) => s.slug !== slug);

  return (
    <>
      <SEO 
        title={`${service.title} Services — BARIYAR INNOVATIONS`} 
        description={service.tagline}
      />

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link to="/">Home</Link></li>
            <li>/</li>
            <li><Link to="/services">Services</Link></li>
            <li>/</li>
            <li className="breadcrumb-current">{service.title}</li>
          </ul>
        </div>
      </div>

      <PageHero
        badge={service.badge}
        badgeVariant="orange"
        title={service.title}
        subtitle={service.heroSubtitle}
      >
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="btn btn-primary btn-lg">
            <span>Inquire About {service.shortTitle}</span>
            <ArrowRight size={18} />
          </Link>
          <Link to="/pricing" className="btn btn-secondary btn-lg">
            <span>View Pricing Plans</span>
          </Link>
        </div>
      </PageHero>

      {/* Service Details Main Content */}
      <section className="section-padding">
        <div className="container service-detail-grid">
          {/* Main Column */}
          <div className="service-detail-main">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="service-icon-wrap" style={{ margin: 0, width: '54px', height: '54px' }}>
                {iconMap[service.icon]}
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem' }}>Overview & Core Capabilities</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0 }}>{service.tagline}</p>
              </div>
            </div>

            <div style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: 1.75, whiteSpace: 'pre-line', marginBottom: '32px' }}>
              {service.detailedDescription}
            </div>

            <h3 style={{ fontSize: '1.35rem', marginBottom: '16px', color: 'var(--text-main)' }}>What We Engineer & Deliver</h3>
            <div className="detail-features-grid">
              {service.features.map((feat, idx) => (
                <div key={idx} className="detail-feat-item">
                  <CheckCircle2 size={18} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Deliverables */}
            <div style={{ marginTop: '36px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '28px' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#FB923C', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={18} />
                <span>Project Deliverables & Artifacts</span>
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {service.deliverables.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-body)' }}>
                    <span style={{ color: '#38BDF8', fontWeight: 'bold' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Workflow Steps */}
            {service.workflow && (
              <div style={{ marginTop: '40px' }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '20px' }}>Engineering Workflow for {service.shortTitle}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {service.workflow.map((w) => (
                    <div key={w.step} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-card)', borderRadius: '10px', padding: '20px' }}>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FB923C', marginBottom: '6px' }}>{w.step}</div>
                      <h4 style={{ fontSize: '1.02rem', marginBottom: '4px' }}>{w.title}</h4>
                      <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', margin: 0 }}>{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="service-detail-sidebar">
            {/* Tech Stack Widget */}
            <div className="sidebar-widget">
              <h4>Technologies Leveraged</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {service.technologies.map((t, idx) => (
                  <span 
                    key={idx} 
                    style={{
                      background: 'rgba(2, 132, 199, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      color: '#38BDF8',
                      padding: '5px 12px',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Consultation Widget */}
            <div className="sidebar-widget" style={{ background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(2, 132, 199, 0.08) 100%)', borderColor: 'rgba(249, 115, 22, 0.3)' }}>
              <SectionBadge variant="orange">Quick Action</SectionBadge>
              <h3 style={{ fontSize: '1.3rem', margin: '12px 0 8px 0' }}>Plan Your {service.shortTitle}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Get an accurate project estimation, technical architecture suggestion, and milestone timeline.
              </p>
              <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="btn btn-primary" style={{ width: '100%' }}>
                <span>Request Project Proposal</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Other Services Navigation */}
            <div className="sidebar-widget">
              <h4>Other Service Practices</h4>
              <ul className="sidebar-links-list">
                {otherServices.map((other) => (
                  <li key={other.id}>
                    <Link to={`/services/${other.slug}`}>
                      <span>{other.title}</span>
                      <ChevronRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title={`Ready to Build Your ${service.shortTitle} Solution?`}
        subtitle="Speak directly with our solutions architect to outline your scope, budget, and deployment schedule."
      />
    </>
  );
};
