import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { SectionBadge } from '../common/SectionBadge';

export const CaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <SectionBadge variant="orange">
          Case Study: {project.categoryTag || project.category}
        </SectionBadge>

        <h2 style={{ fontSize: '1.8rem', margin: '14px 0 8px 0' }}>{project.title}</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
          Client: <strong style={{ color: 'var(--text-main)' }}>{project.client}</strong>
        </p>

        {/* Metrics Grid */}
        {project.metrics && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
            {project.metrics.map((m, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FB923C' }}>{m.value}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Challenge & Solution */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#38BDF8', fontSize: '1rem', marginBottom: '6px' }}>The Business Challenge</h4>
          <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.6 }}>{project.challenge}</p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ color: '#34D399', fontSize: '1rem', marginBottom: '6px' }}>Our Solution & Architecture</h4>
          <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.6 }}>{project.solution}</p>
        </div>

        {/* Features list */}
        {project.features && (
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '10px' }}>Key Engineering Highlights</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} style={{ color: '#38BDF8', flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>Tech Stack</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map((t, idx) => (
              <span key={idx} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-light)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
          <Link to={`/portfolio/${project.slug}`} onClick={onClose} className="btn btn-secondary btn-sm">
            <span>View Dedicated Page</span>
            <ExternalLink size={14} />
          </Link>

          <Link to="/contact" onClick={onClose} className="btn btn-primary btn-sm">
            <span>Build Similar Project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
