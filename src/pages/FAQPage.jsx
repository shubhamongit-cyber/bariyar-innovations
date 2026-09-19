import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionBadge } from '../components/common/SectionBadge';
import { CTASection } from '../components/common/CTASection';
import { faqData, faqCategories } from '../data/faqData';

export const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState(1);

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesQuery = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <SEO 
        title="Frequently Asked Questions (FAQ) — BARIYAR INNOVATIONS" 
        description="Get instant answers about our technical processes, ownership, security practices, and engagement models."
      />

      <PageHero
        badge="Knowledge Directory"
        badgeVariant="blue"
        title="Answers to Your Questions About"
        highlightText="Engagement & Delivery"
        subtitle="Learn more about how we structure software projects, protect client IP, maintain code quality, and provide SLA support."
      />

      {/* Main FAQ Search & List */}
      <section className="section-padding">
        <div className="container">
          {/* Search Box */}
          <div className="faq-search-box">
            <Search className="faq-search-icon" size={18} />
            <input
              type="text"
              className="faq-search-input"
              placeholder="Search by keywords (e.g. native apps, pricing, source code, maintenance)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="faq-categories-bar">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                className={`faq-cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="faq-list-wrapper">
            {filteredFaqs.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', background: 'var(--bg-card)', borderRadius: '12px' }}>
                <HelpCircle size={36} style={{ color: 'var(--text-muted)', marginBottom: '12px' }} />
                <h3>No matching questions found</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Try a different search query or contact our engineering team directly.
                </p>
                <Link to="/contact" className="btn btn-secondary btn-sm" style={{ marginTop: '16px' }}>
                  <span>Ask Us Directly</span>
                </Link>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                    <button
                      className="faq-question-btn"
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronRight size={18} className="faq-chevron" />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-body">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Have a Question Not Listed Here?"
        subtitle="Our software leads are happy to answer any technical or logistical questions you may have."
        btnText="Send Us a Question"
      />
    </>
  );
};
