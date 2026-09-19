import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionBadge } from '../common/SectionBadge';

export const InteractiveEstimator = () => {
  const [platform, setPlatform] = useState('web');
  const [scope, setScope] = useState('standard');
  const [support, setSupport] = useState('standard');

  const calculateEstimate = () => {
    let weeks = 3;
    let budgetLabel = "Custom Quote";

    if (platform === 'web') {
      if (scope === 'mvp') { weeks = 2; budgetLabel = "Starter ($1k - $3k)"; }
      else if (scope === 'standard') { weeks = 4; budgetLabel = "Growth ($3k - $6k)"; }
      else if (scope === 'enterprise') { weeks = 8; budgetLabel = "Enterprise ($8k+)"; }
    } else if (platform === 'app') {
      if (scope === 'mvp') { weeks = 4; budgetLabel = "MVP ($3k - $6k)"; }
      else if (scope === 'standard') { weeks = 8; budgetLabel = "Full App ($6k - $12k)"; }
      else if (scope === 'enterprise') { weeks = 14; budgetLabel = "Enterprise ($15k+)"; }
    } else if (platform === 'software') {
      if (scope === 'mvp') { weeks = 6; budgetLabel = "Core ERP ($5k - $10k)"; }
      else if (scope === 'standard') { weeks = 10; budgetLabel = "Full System ($10k - $20k)"; }
      else if (scope === 'enterprise') { weeks = 18; budgetLabel = "Enterprise Scaled ($25k+)"; }
    }

    if (support === 'priority') {
      weeks += 1;
    }

    return {
      timeline: `${weeks} - ${weeks + 2} Weeks`,
      budget: budgetLabel
    };
  };

  const estimate = calculateEstimate();

  return (
    <div className="estimator-wrapper">
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
        <SectionBadge variant="orange">
          ⚡ Interactive Calculator
        </SectionBadge>
        <h3 style={{ fontSize: '1.8rem', marginTop: '10px' }}>Instant Timeline & Scope Estimator</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem' }}>
          Select your platform type and project scope to see estimated development sprints.
        </p>
      </div>

      <div className="estimator-grid">
        <div className="calc-options-col">
          {/* Platform */}
          <div className="calc-row-group">
            <label>1. Select Platform Type</label>
            <div className="calc-pill-group">
              <button
                type="button"
                className={`calc-pill-btn ${platform === 'web' ? 'active' : ''}`}
                onClick={() => setPlatform('web')}
              >
                Web Application
              </button>
              <button
                type="button"
                className={`calc-pill-btn ${platform === 'app' ? 'active' : ''}`}
                onClick={() => setPlatform('app')}
              >
                Mobile App (iOS / Android)
              </button>
              <button
                type="button"
                className={`calc-pill-btn ${platform === 'software' ? 'active' : ''}`}
                onClick={() => setPlatform('software')}
              >
                Custom ERP / Software
              </button>
            </div>
          </div>

          {/* Scope */}
          <div className="calc-row-group">
            <label>2. Development Scope</label>
            <div className="calc-pill-group">
              <button
                type="button"
                className={`calc-pill-btn ${scope === 'mvp' ? 'active' : ''}`}
                onClick={() => setScope('mvp')}
              >
                MVP / Essential
              </button>
              <button
                type="button"
                className={`calc-pill-btn ${scope === 'standard' ? 'active' : ''}`}
                onClick={() => setScope('standard')}
              >
                Standard Full-Feature
              </button>
              <button
                type="button"
                className={`calc-pill-btn ${scope === 'enterprise' ? 'active' : ''}`}
                onClick={() => setScope('enterprise')}
              >
                Enterprise Scaled
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="calc-row-group">
            <label>3. Post-Launch SLA Support</label>
            <div className="calc-pill-group">
              <button
                type="button"
                className={`calc-pill-btn ${support === 'standard' ? 'active' : ''}`}
                onClick={() => setSupport('standard')}
              >
                Standard Warranty
              </button>
              <button
                type="button"
                className={`calc-pill-btn ${support === 'priority' ? 'active' : ''}`}
                onClick={() => setSupport('priority')}
              >
                Priority SLA Maintenance
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="calc-result-box">
          <span>Estimated Delivery Timeline</span>
          <div className="calc-timeline-value">{estimate.timeline}</div>
          <p className="calc-note">
            Includes UI/UX wireframes, full-stack development, QA testing, and production deployment.
          </p>
          <Link
            to={`/contact?platform=${platform}&scope=${scope}&support=${support}`}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <span>Discuss This Estimate</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
