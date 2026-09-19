import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Code2, 
  Palette, 
  Database, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionBadge } from '../components/common/SectionBadge';
import { CTASection } from '../components/common/CTASection';
import { servicesData } from '../data/servicesData';

const iconMap = {
  Globe: <Globe size={28} />,
  Smartphone: <Smartphone size={28} />,
  Code2: <Code2 size={28} />,
  Palette: <Palette size={28} />,
  Database: <Database size={28} />,
  ShieldCheck: <ShieldCheck size={28} />
};

export const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Services — Web, Mobile, Custom Software & Cloud Solutions" 
        description="Explore BARIYAR INNOVATIONS full spectrum of digital engineering services: web development, mobile apps, custom software, UI/UX design, APIs, and maintenance."
      />

      <PageHero
        badge="Our Engineering Capabilities"
        badgeVariant="orange"
        title="Full-Lifecycle Digital Engineering"
        highlightText="Services"
        subtitle="From responsive customer-facing web applications to enterprise backends and native mobile apps, we build scalable software designed for real business growth."
      />

      {/* Services List */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <SectionBadge variant="blue">Tailored Solutions</SectionBadge>
            <h2 className="section-title">Specialized Development Practices</h2>
            <p className="section-subtitle">
              Every project is led by senior software architects with deep expertise in modern cloud architectures, frameworks, and interface design.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon-wrap">
                  {iconMap[service.icon] || <Globe size={28} />}
                </div>

                <SectionBadge variant={service.id === 'web-development' || service.id === 'software-development' ? 'orange' : 'blue'}>
                  {service.badge}
                </SectionBadge>

                <h3 className="service-card-title" style={{ marginTop: '12px' }}>{service.title}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>

                <ul className="service-features-list">
                  {service.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-footer">
                  <Link to={`/services/${service.slug}`} className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
                    <span>View Dedicated Service Page</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Need a Custom Technical Architecture?"
        subtitle="Our software architects will review your business specifications and provide a recommended tech stack and milestone roadmap."
        btnText="Discuss Your Project"
      />
    </>
  );
};
