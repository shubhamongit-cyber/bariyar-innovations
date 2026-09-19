import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, HelpCircle } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionBadge } from '../components/common/SectionBadge';
import { InteractiveEstimator } from '../components/estimator/InteractiveEstimator';
import { CTASection } from '../components/common/CTASection';
import { pricingPlans, supportPlans } from '../data/pricingData';

export const PricingPage = () => {
  return (
    <>
      <SEO 
        title="Transparent Pricing & Project Scope Estimator — BARIYAR INNOVATIONS" 
        description="Explore clear, milestone-based pricing models for web, mobile app, and custom software development projects."
      />

      <PageHero
        badge="Predictable & Transparent"
        badgeVariant="orange"
        title="Development Plans Built Around"
        highlightText="Real Outcomes"
        subtitle="No hidden retainers or unexpected surprises. We offer transparent, milestone-driven pricing frameworks tailored to your project scale."
      />

      {/* Main Pricing Tiers */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <SectionBadge variant="blue">Engagement Models</SectionBadge>
            <h2 className="section-title">Select the Plan That Fits Your Vision</h2>
            <p className="section-subtitle">
              Every plan includes clean modular source code, full intellectual property transfer, and dedicated warranty support.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`pricing-card ${plan.popular ? 'featured' : ''}`}>
                {plan.popular && <span className="popular-ribbon">Most Popular</span>}

                <div className="pricing-header">
                  <SectionBadge variant={plan.popular ? 'orange' : 'blue'}>
                    {plan.badge}
                  </SectionBadge>
                  <h3 style={{ marginTop: '12px' }}>{plan.title}</h3>
                  <p>{plan.subtitle}</p>
                  <div className="pricing-delivery-badge">
                    <Clock size={14} />
                    <span>{plan.delivery}</span>
                  </div>
                </div>

                <ul className="pricing-features-list">
                  {plan.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.ctaLink} className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          {/* Scope Estimator */}
          <div style={{ marginTop: '60px' }}>
            <InteractiveEstimator />
          </div>

          {/* Support Plans */}
          <div style={{ marginTop: '80px' }}>
            <div className="section-header">
              <SectionBadge variant="blue">Ongoing Assurance</SectionBadge>
              <h2 className="section-title">Post-Launch SLA Maintenance Plans</h2>
              <p className="section-subtitle">
                Ensure your web applications and systems remain secure, fast, and constantly updated.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
              {supportPlans.map((sp) => (
                <div key={sp.id} className="why-card" style={{ padding: '36px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '1.4rem' }}>{sp.title}</h3>
                    <SectionBadge variant={sp.id === 'priority-growth' ? 'orange' : 'blue'}>
                      {sp.price}
                    </SectionBadge>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                    {sp.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem' }}>
                        <CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={`/contact?plan=${encodeURIComponent(sp.title)}`} className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
                    <span>Inquire About {sp.title}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Need a Bespoke Scope Assessment?"
        subtitle="Our engineering leads will provide a breakdown of milestones, developer hours, and fixed quote options."
        btnText="Request Custom Proposal"
      />
    </>
  );
};
