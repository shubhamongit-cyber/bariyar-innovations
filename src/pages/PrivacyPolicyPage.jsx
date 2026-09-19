import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionBadge } from '../components/common/SectionBadge';

export const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy — BARIYAR INNOVATIONS" 
        description="Read the official Privacy Policy of BARIYAR INNOVATIONS regarding data collection, protection, and usage."
      />

      <PageHero
        badge="Legal Information"
        badgeVariant="blue"
        title="Privacy Policy"
        subtitle="Last Updated: September 2026"
      />

      <section className="section-padding">
        <div className="container">
          <div className="legal-content-card">
            <div className="legal-section-block">
              <h3>1. Commitment to Privacy</h3>
              <p>
                BARIYAR INNOVATIONS ("we", "our", or "us") respects your privacy and is committed to protecting any personal and organizational information you share with us. This policy outlines how we collect, store, process, and safeguard information submitted via our website and direct communication channels.
              </p>
            </div>

            <div className="legal-section-block">
              <h3>2. Information We Collect</h3>
              <p>We may collect information you voluntarily provide, including:</p>
              <ul>
                <li><strong>Contact Identifiers:</strong> Name, work email address, telephone/WhatsApp number, company name.</li>
                <li><strong>Project Specifications:</strong> Technical requirements, RFP documents, budget estimations, and timeline expectations.</li>
                <li><strong>Technical Usage Data:</strong> Anonymized browser type, IP address, device telemetry, and page visit duration collected via analytics cookies to optimize user experience.</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h3>3. How We Use Collected Information</h3>
              <p>Information provided to BARIYAR INNOVATIONS is utilized exclusively for:</p>
              <ul>
                <li>Responding to project inquiries, preparing technical proposals, and estimating delivery roadmaps.</li>
                <li>Fulfilling contracted software engineering and maintenance agreements.</li>
                <li>Improving our web performance, service offerings, and security safeguards.</li>
                <li>Complying with applicable legal obligations and enforcing non-disclosure agreements (NDAs).</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h3>4. Confidentiality & Non-Disclosure (NDA)</h3>
              <p>
                We treat all proprietary client concepts, software requirements, database schemas, and codebase assets with strict enterprise confidentiality. We routinely sign bilateral Non-Disclosure Agreements (NDAs) prior to detailed discovery discussions.
              </p>
            </div>

            <div className="legal-section-block">
              <h3>5. Data Security Measures</h3>
              <p>
                We implement industry-standard encryption protocols (TLS/SSL), restricted role-based internal data access, and secure hosting environments to protect your personal details from unauthorized access, accidental alteration, or disclosure.
              </p>
            </div>

            <div className="legal-section-block">
              <h3>6. Third-Party Service Providers</h3>
              <p>
                We may utilize trusted third-party providers for web hosting (e.g. AWS, Cloudflare), email dispatch, and anonymized web analytics. These providers only process data in accordance with our instructions and under confidentiality terms.
              </p>
            </div>

            <div className="legal-section-block">
              <h3>7. Contact for Privacy Inquiries</h3>
              <p>
                If you have questions or concerns regarding our privacy practices or wish to request data deletion, please contact us at:
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
