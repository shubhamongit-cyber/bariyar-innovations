import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const ProjectCard = ({ project, onQuickPreview }) => {
  const visibleTech = project.technologies ? project.technologies.slice(0, 5) : [];
  const remainingCount = project.technologies && project.technologies.length > 5 
    ? project.technologies.length - 5 
    : 0;

  return (
    <div className="editorial-project-card">
      {/* Top Header Row */}
      <div className="card-top-row">
        <div className="card-avatar-meta">
          <img 
            src={project.image} 
            alt={project.title} 
            className="card-avatar-img" 
            loading="lazy" 
          />
          <div className="card-meta-text">
            <span className="card-meta-subtitle">{project.subtitle || project.title}</span>
            <span className="card-badge-pill">{project.badge || 'SAAS'}</span>
          </div>
        </div>

        <Link 
          to={`/portfolio/${project.slug}`} 
          className="card-arrow-btn" 
          aria-label={`View ${project.title} case study`}
        >
          <ArrowUpRight size={20} />
        </Link>
      </div>

      {/* Main Serif Headline */}
      <h3 className="card-main-title">
        <Link to={`/portfolio/${project.slug}`}>
          {project.title}
        </Link>
      </h3>

      {/* Description Summary */}
      <p className="card-desc">
        {project.summary}
      </p>

      {/* Tech Stack Pills */}
      <div className="card-stack-section">
        <span className="card-stack-label">S T A C K</span>
        <div className="card-stack-pills">
          {visibleTech.map((tech, idx) => (
            <span key={idx} className="stack-pill">{tech}</span>
          ))}
          {remainingCount > 0 && (
            <span className="stack-pill-more">+{remainingCount}</span>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="card-divider" />

      {/* Bottom Footer Row */}
      <div className="card-footer-row">
        <div className="card-footer-tags">
          {project.tags && project.tags.map((tag, idx) => (
            <span key={idx} className="footer-tag-pill">{tag}</span>
          ))}
          {(!project.tags || project.tags.length === 0) && (
            <span className="footer-tag-pill">{project.category}</span>
          )}
        </div>

        <div className="card-footer-actions">
          {onQuickPreview && (
            <button 
              type="button" 
              className="card-preview-btn"
              onClick={() => onQuickPreview(project)}
            >
              Quick View
            </button>
          )}

          <Link to={`/portfolio/${project.slug}`} className="card-case-study-link">
            <span>Case study</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
};
