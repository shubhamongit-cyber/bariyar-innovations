import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

export const CTASection = ({
  badge = "Ready to Build?",
  title = "Let's Turn Your Concept Into a Scalable Digital Product",
  subtitle = "Tell us what you want to build. BARIYAR INNOVATIONS delivers clean engineering, transparent roadmaps, and dedicated support.",
  btnText = "Start Your Project Inquiry",
  btnLink = "/contact"
}) => {
  return (
    <section className="section-padding" style={{ paddingTop: '30px' }}>
      <div className="container">
        <div className="cta-banner-wrapper">
          <SectionBadge variant="orange" icon={<Sparkles size={14} />}>
            {badge}
          </SectionBadge>

          <h2>{title}</h2>
          <p>{subtitle}</p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to={btnLink} className="btn btn-primary btn-lg">
              <span>{btnText}</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/pricing" className="btn btn-secondary btn-lg">
              <span>View Plans & Estimator</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
