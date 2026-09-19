import React from 'react';
import { SectionBadge } from './SectionBadge';

export const PageHero = ({ badge, badgeVariant = "blue", title, highlightText, subtitle, children }) => {
  return (
    <section className="page-hero-section">
      <div className="container">
        <div className="page-hero-content">
          {badge && (
            <SectionBadge variant={badgeVariant}>
              {badge}
            </SectionBadge>
          )}

          <h1 className="page-hero-title">
            {title}{' '}
            {highlightText && (
              <span className={badgeVariant === "orange" ? "text-gradient-orange" : "text-gradient-blue"}>
                {highlightText}
              </span>
            )}
          </h1>

          {subtitle && <p className="page-hero-desc">{subtitle}</p>}

          {children && <div style={{ marginTop: '28px' }}>{children}</div>}
        </div>
      </div>
    </section>
  );
};
