import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Layers, 
  Award,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionBadge } from '../components/common/SectionBadge';
import { CTASection } from '../components/common/CTASection';
import { portfolioData } from '../data/portfolioData';

export const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const otherProjects = portfolioData.filter((p) => p.slug !== slug);

  return (
    <>
      <SEO 
        title={`${project.title} — Case Study | BARIYAR INNOVATIONS`} 
        description={project.summary}
      />

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link to="/">Home</Link></li>
            <li>/</li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li>/</li>
            <li className="breadcrumb-current">{project.title}</li>
          </ul>
        </div>
      </div>

      <PageHero
        badge={project.categoryTag || project.category}
        badgeVariant="orange"
        title={project.title}
        subtitle={project.summary}
      >
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-primary btn-lg">
            <span>Build a Similar Product</span>
            <ArrowRight size={18} />
          </Link>
          <Link to="/portfolio" className="btn btn-secondary btn-lg">
            <span>All Case Studies</span>
          </Link>
        </div>
      </PageHero>

      {/* Main Case Study */}
      <section className="section-padding">
        <div className="container service-detail-grid">
          {/* Main Column */}
          <div className="service-detail-main">
            {/* Metrics Ribbon */}
            {project.metrics && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '36px' }}>
                {project.metrics.map((m, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#FB923C' }}>{m.value}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ marginBottom: '32px' }}>
              <SectionBadge variant="blue">The Client Challenge</SectionBadge>
              <h3 style={{ fontSize: '1.45rem', marginTop: '12px', marginBottom: '14px' }}>Operational Roadblocks & Friction</h3>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: 1.75 }}>
                {project.challenge}
              </p>
            </div>

            <div style={{ marginBottom: '36px' }}>
              <SectionBadge variant="orange">Engineering Solution</SectionBadge>
              <h3 style={{ fontSize: '1.45rem', marginTop: '12px', marginBottom: '14px' }}>Architectural Approach & Implementation</h3>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: 1.75 }}>
                {project.solution}
              </p>
            </div>

            {/* Highlights */}
            {project.features && (
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '32px', marginBottom: '36px' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Layers size={20} style={{ color: '#38BDF8' }} />
                  <span>Technical & Functional Deliverables</span>
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {project.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} style={{ color: '#34D399', flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(2, 132, 199, 0.08) 100%)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '28px' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#34D399', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrendingUp size={20} />
                <span>Measurable Business Outcome</span>
              </h4>
              <p style={{ fontSize: '1rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.6 }}>
                {project.result}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="service-detail-sidebar">
            <div className="sidebar-widget">
              <h4>Project Metadata</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Client:</span>
                  <strong>{project.client}</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Category:</span>
                  <strong>{project.category}</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Engagement:</span>
                  <strong>Dedicated Squad</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Status:</span>
                  <strong style={{ color: '#10B981' }}>Live in Production</strong>
                </li>
              </ul>
            </div>

            <div className="sidebar-widget">
              <h4>Technology Stack</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.technologies.map((t, idx) => (
                  <span 
                    key={idx}
                    style={{
                      background: 'rgba(2, 132, 199, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      color: '#38BDF8',
                      padding: '5px 12px',
                      borderRadius: '6px',
                      fontSize: '0.85rem'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Projects */}
            <div className="sidebar-widget">
              <h4>More Case Studies</h4>
              <ul className="sidebar-links-list">
                {otherProjects.slice(0, 4).map((other) => (
                  <li key={other.id}>
                    <Link to={`/portfolio/${other.slug}`}>
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
        title="Want Results Like This for Your Company?"
        subtitle="Schedule a consultation with our software architects to review your challenges and plan a roadmap."
      />
    </>
  );
};
