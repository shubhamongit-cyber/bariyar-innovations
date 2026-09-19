import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const ContactForm = () => {
  const location = useLocation();
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Development',
    budget: 'Growth ($2,000 - $5,000)',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const planParam = params.get('plan');
    const platformParam = params.get('platform');

    if (planParam) {
      if (planParam === 'Starter') {
        setFormData(prev => ({ ...prev, service: 'Web Development', budget: 'Starter ($500 - $2,000)' }));
      } else if (planParam === 'Business') {
        setFormData(prev => ({ ...prev, service: 'Web Development', budget: 'Growth ($2,000 - $5,000)' }));
      } else if (planParam === 'Custom') {
        setFormData(prev => ({ ...prev, service: 'Custom Software / ERP', budget: 'Enterprise ($15,000+)' }));
      }
    } else if (platformParam) {
      if (platformParam === 'web') setFormData(prev => ({ ...prev, service: 'Web Development' }));
      else if (platformParam === 'app') setFormData(prev => ({ ...prev, service: 'Mobile App Development' }));
      else if (platformParam === 'software') setFormData(prev => ({ ...prev, service: 'Custom Software / ERP' }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate reliable async submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      addToast(`Thank you ${formData.name}! Your project inquiry has been received. Our team will contact you within 24 hours.`, 'success', 6000);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="contact-form-panel" style={{ textAlign: 'center', padding: '60px 40px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: '#34D399', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
          <CheckCircle2 size={36} />
        </div>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>Inquiry Received!</h3>
        <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', maxWidth: '440px', margin: '0 auto 28px auto' }}>
          Thank you for reaching out to BARIYAR INNOVATIONS. Our technical engineering lead will review your specifications and get back to you within 24 hours.
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              service: 'Web Development',
              budget: 'Growth ($2,000 - $5,000)',
              message: ''
            });
          }}
          className="btn btn-secondary"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-panel">
      <h3>Start Your Project Inquiry</h3>
      <p>Fill out the form below and our engineering team will get in touch with a roadmap.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-inputs-grid">
          <div className="form-field-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="form-input-control"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-field-group">
            <label htmlFor="email">Work Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-input-control"
              placeholder="e.g. john@company.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-field-group">
            <label htmlFor="phone">Phone / WhatsApp</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input-control"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-field-group">
            <label htmlFor="company">Company / Organization</label>
            <input
              type="text"
              id="company"
              name="company"
              className="form-input-control"
              placeholder="e.g. Acme Tech Inc."
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-field-group">
            <label htmlFor="service">Primary Service</label>
            <select
              id="service"
              name="service"
              className="form-input-control"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Custom Software / ERP">Custom Software / ERP</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Backend & API">Backend & API</option>
              <option value="Maintenance & Support">Maintenance & Support</option>
            </select>
          </div>

          <div className="form-field-group">
            <label htmlFor="budget">Estimated Budget Range</label>
            <select
              id="budget"
              name="budget"
              className="form-input-control"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="Starter ($500 - $2,000)">Starter ($500 - $2,000)</option>
              <option value="Growth ($2,000 - $5,000)">Growth ($2,000 - $5,000)</option>
              <option value="Scale ($5,000 - $15,000)">Scale ($5,000 - $15,000)</option>
              <option value="Enterprise ($15,000+)">Enterprise ($15,000+)</option>
            </select>
          </div>

          <div className="form-field-group full-width">
            <label htmlFor="message">Project Objectives & Requirements *</label>
            <textarea
              id="message"
              name="message"
              required
              className="form-input-control"
              placeholder="Describe what you are looking to build, any technical requirements, target launch timeline, or current challenges..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ width: '100%' }}
          disabled={submitting}
        >
          {submitting ? (
            <span>Sending Inquiry...</span>
          ) : (
            <>
              <span>Send Project Inquiry</span>
              <Send size={18} />
            </>
          )}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
          <ShieldCheck size={16} style={{ color: '#10B981' }} />
          <span>Non-Disclosure Agreement (NDA) respected & strictly confidential.</span>
        </div>
      </form>
    </div>
  );
};
