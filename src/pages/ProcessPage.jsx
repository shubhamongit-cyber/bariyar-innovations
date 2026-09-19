import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Layers, 
  Sparkles, 
  Terminal, 
  Rocket, 
  Activity 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionBadge } from '../components/common/SectionBadge';
import { CTASection } from '../components/common/CTASection';
import { processSteps } from '../data/processData';

const stepIcons = {
  "01": <Compass size={28} />,
  "02": <Layers size={28} />,
  "03": <Sparkles size={28} />,
  "04": <Terminal size={28} />,
  "05": <Rocket size={28} />,
  "06": <Activity size={28} />
};

export const ProcessPage = () => {
  return (
    <>
      <SEO 
        title="Our Process & Delivery Framework — BARIYAR INNOVATIONS" 
        description="Learn about our structured 6-step agile delivery framework: Discover, Plan, Design, Develop, Launch, and Grow."
      />

      <PageHero
        badge="Agile Engineering Methodology"
        badgeVariant="orange"
        title="A Structured Framework for"
        highlightText="Predictable Success"
        subtitle="We eliminate ambiguity through a disciplined 6-stage development framework that balances creative agility with engineering precision."
      />

      {/* Process Deep Dive */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '960px', margin: '0 auto' }}>
            {processSteps.map((step) => (
              <div 
                key={step.step}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '16px',
                  padding: '36px',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '32px',
                  alignItems: 'flex-start',
                  position: 'relative'
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div className="process-num-badge" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{step.step}</div>
                  <div style={{ color: '#FB923C' }}>
                    {stepIcons[step.step]}
                  </div>
                </div>

                <div>
                  <SectionBadge variant="blue">{step.phase}</SectionBadge>
                  <h3 style={{ fontSize: '1.6rem', margin: '12px 0 10px 0' }}>{step.title}</h3>
                  <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '20px' }}>
                    {step.summary}
                  </p>

                  <h4 style={{ fontSize: '0.95rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>Key Activities</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {step.details.map((d, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid #38BDF8', padding: '12px 16px', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Stage Milestone: </span>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{step.outcome}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Ready to Begin Step 01 (Discover)?"
        subtitle="Schedule a 30-minute discovery call to share your vision, requirements, and milestones."
        btnText="Schedule Discovery Call"
      />
    </>
  );
};
