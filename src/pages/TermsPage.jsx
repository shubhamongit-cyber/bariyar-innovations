import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionBadge } from '../components/common/SectionBadge';

export const TermsPage = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions — BARIYAR INNOVATIONS" 
        description="Review the terms and conditions governing the use of the BARIYAR INNOVATIONS website and software development services."
      />

      <PageHero
        badge="Legal Information"
        badgeVariant="blue"
        title="Terms & Conditions"
        subtitle="Last Updated: September 2026"
      />

      <section className="section-padding">
        <div className="container">
          <div className="legal-content-card">
            <div className="legal-section-block">
              <h3>1. Agreement to Terms</h3>
              <p>
                By accessing or using the BARIYAR INNOVATIONS website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.
              </p>
            </div>

            <div className="legal-section-block">
              <h3>2. Intellectual Property & Code Ownership</h3>
              <p>
                All website design, trademarks, copy, and graphics displayed on this site are the exclusive property of BARIYAR INNOVATIONS.
              </p>
              <p>
                For bespoke software engineering client projects, all source code, database architectures, graphics, and intellectual property rights are transferred in full to the client upon final milestone delivery and payment settlement in accordance with the individual Master Services Agreement (MSA) or Statement of Work (SOW).
              </p>
            </div>

            <div className="legal-section-block">
              <h3>3. Service Proposals & Milestones</h3>
              <p>
                Estimations provided through our online scope calculator or initial consultations are non-binding technical projections. Binding project scopes, pricing, sprint deliverables, and SLAs are codified in formal written agreements executed between BARIYAR INNOVATIONS and the client.
              </p>
            </div>

            <div className="legal-section-block">
              <h3>4. Limitation of Liability</h3>
              <p>
                While BARIYAR INNOVATIONS strives for high accuracy and uptime, the website content is provided on an "as-is" basis. We are not liable for direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website.
              </p>
            </div>

            <div className="legal-section-block">
              <h3>5. Governing Law</h3>
              <p>
                These terms shall be governed by and construed in accordance with the laws applicable to enterprise commercial contracts, without giving effect to any principles of conflicts of law.
              </p>
            </div>

            <div className="legal-section-block">
              <h3>6. Inquiries</h3>
              <p>
                For questions regarding these Terms & Conditions or formal vendor onboarding:
              </p>
              <p style={{ fontWeight: 600, color: 'var(--primary-orange)' }}>
                info@bariyarinnovations.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
