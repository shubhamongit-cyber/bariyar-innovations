import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Cpu, Layers } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionBadge } from '../components/common/SectionBadge';
import { CTASection } from '../components/common/CTASection';
import { OrbitingTechStack } from '../components/tech/OrbitingTechStack';
import { techStackData, techCategories } from '../data/techData';

export const TechnologiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ai');

  const currentCategoryObj = techCategories.find(c => c.id === selectedCategory) || techCategories[0];
  const filteredTech = techStackData.filter((t) => t.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Technologies & Cloud Frameworks — BARIYAR INNOVATIONS" 
        description="Explore the modern tech stack and cloud frameworks leveraged by BARIYAR INNOVATIONS: OpenAI, Claude, Llama, React, Vue, Node.js, Python, Flutter, PostgreSQL, Docker, and AWS."
      />

      <PageHero
        badge="Engineering Standards"
        badgeVariant="blue"
        title="Modern, Scalable & Resilient"
        highlightText="Technology Stacks"
        subtitle="We select battle-tested programming languages, modern frameworks, and cloud infrastructure based on project scalability, performance benchmarks, and long-term maintainability."
      />

      {/* Visual Solar System Orbit Section */}
      <section className="section-padding" style={{ paddingBottom: '30px', background: 'rgba(255, 255, 255, 0.01)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionBadge variant="orange">
            Interactive Ecosystem
          </SectionBadge>
          <h2 className="section-title" style={{ marginTop: '12px' }}>Continuous Innovation Core</h2>
          <p className="section-subtitle" style={{ marginBottom: '32px' }}>
            A synchronized universe of frontend libraries, backend runtimes, native mobile SDKs, and cloud databases.
          </p>

          <OrbitingTechStack />
        </div>
      </section>

      {/* Main Tech Stack */}
      <section className="section-padding">
        <div className="container">
          <div className="tech-filter-bar-full">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                className={`tech-filter-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {currentCategoryObj && currentCategoryObj.tagline && (
            <p className="tech-category-tagline">
              {currentCategoryObj.tagline}
            </p>
          )}

          <div className="tech-cards-masonry">
            {filteredTech.map((tech, idx) => (
              <div key={idx} className="tech-grid-card">
                <div className="tech-grid-icon-box">
                  {tech.icon ? (
                    <img src={tech.icon} alt={tech.name} className="tech-grid-icon-img" loading="lazy" />
                  ) : (
                    <span className="tech-grid-icon">⚡</span>
                  )}
                </div>
                <h4>{tech.name}</h4>
                <span className="tech-grid-badge">{tech.badge}</span>
                <p>{tech.desc}</p>
              </div>
            ))}
          </div>

          {/* Technology Selection Philosophy */}
          <div style={{ marginTop: '70px', background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '16px', padding: '48px' }}>
            <div className="section-header" style={{ marginBottom: '32px' }}>
              <SectionBadge variant="orange">Architecture Philosophy</SectionBadge>
              <h2 className="section-title">How We Choose Technology for Your Project</h2>
              <p className="section-subtitle">
                We avoid one-size-fits-all dogma. Our technology selection is driven by rigorous engineering principles:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              <div className="why-card">
                <h4>1. Long-Term Maintainability</h4>
                <p>We pick active open-source ecosystems with strong community backing and rich package repositories to prevent vendor lock-in.</p>
              </div>

              <div className="why-card">
                <h4>2. High Concurrency & Speed</h4>
                <p>Fast query execution, low memory overhead, and efficient async I/O pipelines ensure lightning page loads.</p>
              </div>

              <div className="why-card">
                <h4>3. Enterprise-Grade Security</h4>
                <p>Adherence to OWASP standards, type-safe data validation, automated dependency scanning, and zero-trust cloud setups.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Need Technical Guidance on the Best Stack?"
        subtitle="Schedule a free technical architecture consultation with our senior engineering team."
        btnText="Discuss Technical Stack"
      />
    </>
  );
};
