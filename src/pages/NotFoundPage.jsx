import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="404 — Page Not Found | BARIYAR INNOVATIONS" 
        description="The requested page could not be found."
      />

      <div className="container">
        <div className="not-found-wrapper">
          <div className="not-found-code">404</div>
          <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Page Not Found</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '32px' }}>
            The page you are looking for might have been moved, renamed, or does not exist.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <Link to="/" className="btn btn-primary">
              <Home size={18} />
              <span>Return to Home</span>
            </Link>
            <Link to="/services" className="btn btn-secondary">
              <ArrowLeft size={18} />
              <span>Browse Services</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
