import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Smartphone, 
  Code2, 
  Palette, 
  Database, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Zap, 
  ChevronRight,
  Search
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionBadge } from '../components/common/SectionBadge';
import { InteractiveEstimator } from '../components/estimator/InteractiveEstimator';
import { CaseStudyModal } from '../components/portfolio/CaseStudyModal';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { CTASection } from '../components/common/CTASection';
import { OrbitingTechStack } from '../components/tech/OrbitingTechStack';
import { AnimatedCounter } from '../components/common/AnimatedCounter';

import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';
import { techStackData, techCategories } from '../data/techData';
import { pricingPlans } from '../data/pricingData';
import { faqData } from '../data/faqData';
import { processSteps } from '../data/processData';

const iconMap = {
  Globe: <Globe size={28} />,
  Smartphone: <Smartphone size={28} />,
  Code2: <Code2 size={28} />,
  Palette: <Palette size={28} />,
  Database: <Database size={28} />,
  ShieldCheck: <ShieldCheck size={28} />
};

export const HomePage = () => {
  const [selectedTechCategory, setSelectedTechCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqId, setOpenFaqId] = useState(1);

  const filteredTech = selectedTechCategory === 'all' 
    ? techStackData.slice(0, 12) 
    : techStackData.filter(t => t.category === selectedTechCategory);

  const filteredFaqs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <>
      <SEO 
        title="Engineering Modern Web, Mobile & Custom Software Solutions" 
        description="BARIYAR INNOVATIONS creates modern websites, mobile apps, and custom software designed around real business goals. Fast, scalable, secure and reliable."
      />

      {/* ==================== HERO SECTION ==================== */}
      <section className="hero-wrapper">
        <div className="container hero-grid">
          <div className="hero-content">
            <SectionBadge variant="orange" icon={<Zap size={14} />}>
              Innovative Engineering & Digital Growth
            </SectionBadge>

            <h1 className="hero-lead-title">
              We Build <span className="text-gradient-blue">Digital Solutions</span> That Help Businesses <span className="text-gradient-orange">Grow</span>
            </h1>

            <p className="hero-lead-text">
              BARIYAR INNOVATIONS creates modern websites, high-performance mobile applications, and custom software systems tailored around your real operational workflows.
            </p>

            <div className="hero-btn-group">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                <span>Explore Services</span>
              </Link>
            </div>

            <div className="hero-trust-list">
              <div className="hero-trust-item">
                <CheckCircle2 size={18} />
                <span>Fast & Scalable</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={18} />
                <span>Secure Architecture</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={18} />
                <span>Dedicated SLA Support</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Orbiting Tech Stack */}
          <div className="hero-visual" style={{ display: 'flex', justifyContent: 'center' }}>
            <OrbitingTechStack />
          </div>
        </div>
      </section>

      {/* ==================== STATS BANNER ==================== */}
      <section className="stats-banner">
        <div className="container stats-grid">
          <div className="stat-item">
            <h3>
              <AnimatedCounter target={99.9} decimals={1} suffix="%" duration={2200} />
            </h3>
            <p>Service Reliability</p>
          </div>
          <div className="stat-item">
            <h3>
              <AnimatedCounter target={10} decimals={0} suffix="+" duration={1800} />
            </h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-item">
            <h3>
              <AnimatedCounter target={100} decimals={0} suffix="%" duration={2000} />
            </h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-item">
            <h3>
              <AnimatedCounter target={24} decimals={0} suffix="/7" duration={1800} />
            </h3>
            <p>Dedicated Support</p>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT & VALUES PREVIEW ==================== */}
      <section className="section-padding">
        <div className="container">
          <div className="about-mission-grid">
            <div>
              <SectionBadge variant="blue">About BARIYAR INNOVATIONS</SectionBadge>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Building Technology With Purpose</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '16px' }}>
                BARIYAR INNOVATIONS is a full-lifecycle software development firm dedicated to creating reliable digital products that deliver quantifiable business results.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                We partner with startups, growing enterprises, and established organizations to turn complex technical challenges into smooth, user-friendly digital experiences.
              </p>

              <div className="mission-highlight-card">
                <h4>Our Mission</h4>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', margin: 0 }}>
                  To empower businesses through thoughtful software engineering, helping them automate workflows, delight customers, and scale sustainably.
                </p>
              </div>

              <div style={{ marginTop: '28px' }}>
                <Link to="/about" className="btn btn-secondary">
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '20px' }}>Our Core Pillars</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="why-card">
                  <div className="why-icon-wrap"><Zap size={20} /></div>
                  <h4>Innovation</h4>
                  <p>Embracing modern architectures to solve complex hurdles.</p>
                </div>
                <div className="why-card">
                  <div className="why-icon-wrap" style={{ color: '#34D399', background: 'rgba(16, 185, 129, 0.12)' }}><CheckCircle2 size={20} /></div>
                  <h4>Quality First</h4>
                  <p>Strict QA testing and code reviews on every sprint.</p>
                </div>
                <div className="why-card">
                  <div className="why-icon-wrap" style={{ color: '#38BDF8', background: 'rgba(2, 132, 199, 0.12)' }}><Layers size={20} /></div>
                  <h4>Transparency</h4>
                  <p>Clear milestone schedules and honest communication.</p>
                </div>
                <div className="why-card">
                  <div className="why-icon-wrap"><ShieldCheck size={20} /></div>
                  <h4>Reliability</h4>
                  <p>Rock-solid infrastructure built for long-term scalability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <SectionBadge variant="orange">Comprehensive Solutions</SectionBadge>
            <h2 className="section-title">End-to-End Technology Services</h2>
            <p className="section-subtitle">
              From high-converting web applications to native mobile apps and custom enterprise backends, we build digital infrastructure tailored to your exact business objectives.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon-wrap">
                  {iconMap[service.icon] || <Globe size={28} />}
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>

                <ul className="service-features-list">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-footer">
                  <Link to={`/services/${service.slug}`} className="service-detail-link">
                    <span>Explore Service Details</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn btn-secondary btn-lg">
              <span>View All Services & Deliverables</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== HOW WE WORK / PROCESS ==================== */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <SectionBadge variant="blue">Our Process</SectionBadge>
            <h2 className="section-title">How We Turn Ideas Into Reality</h2>
            <p className="section-subtitle">
              A structured, transparent 6-step delivery framework ensuring precision engineering, timely delivery, and clear communication.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div key={step.step} className="process-card">
                <div className="process-num-badge">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/process" className="btn btn-secondary">
              <span>Explore Our Full Engineering Workflow</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== PORTFOLIO / SELECTED WORK ==================== */}
      <section className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <SectionBadge variant="orange">Selected Case Studies</SectionBadge>
            <h2 className="section-title">Selected Client Work & Case Studies</h2>
            <p className="section-subtitle">
              Explore how BARIYAR INNOVATIONS designs, builds, and delivers company-level mission-critical software platforms and digital ecosystems.
            </p>
          </div>

          <div className="portfolio-grid">
            {portfolioData.slice(0, 4).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onQuickPreview={setActiveModalProject}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/portfolio" className="btn btn-secondary btn-lg">
              <span>View All Portfolio Case Studies</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== TECHNOLOGIES PREVIEW ==================== */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <SectionBadge variant="blue">Modern Tech Stack</SectionBadge>
            <h2 className="section-title">Technologies We Master</h2>
            <p className="section-subtitle">
              We select robust technology stacks based on performance, scalability, security, and long-term maintainability.
            </p>
          </div>

          <div className="tech-filter-bar-full">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                className={`tech-filter-tab ${selectedTechCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedTechCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="tech-cards-masonry">
            {filteredTech.map((tech, idx) => (
              <div key={idx} className="tech-grid-card">
                <div className="tech-grid-icon-box">
                  {tech.icon && (tech.icon.startsWith('http') || tech.icon.startsWith('/')) ? (
                    <img src={tech.icon} alt={tech.name} className="tech-grid-icon-img" loading="lazy" />
                  ) : (
                    <span className="tech-grid-icon">{tech.icon}</span>
                  )}
                </div>
                <h4>{tech.name}</h4>
                <span className="tech-grid-badge">{tech.badge}</span>
                <p>{tech.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/technologies" className="btn btn-secondary">
              <span>View Full Tech Ecosystem</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== PRICING & ESTIMATOR ==================== */}
      <section className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <SectionBadge variant="orange">Transparent Engagement</SectionBadge>
            <h2 className="section-title">Development Plans Built for Value</h2>
            <p className="section-subtitle">
              Milestone-based, predictable pricing frameworks tailored for modern businesses.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`pricing-card ${plan.popular ? 'featured' : ''}`}>
                {plan.popular && <span className="popular-ribbon">Most Popular</span>}

                <div className="pricing-header">
                  <h3>{plan.title}</h3>
                  <p>{plan.subtitle}</p>
                  <div className="pricing-delivery-badge">{plan.delivery}</div>
                </div>

                <ul className="pricing-features-list">
                  {plan.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.ctaLink} className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          {/* Interactive Calculator */}
          <InteractiveEstimator />
        </div>
      </section>

      {/* ==================== FAQ ACCORDION ==================== */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <SectionBadge variant="blue">Got Questions?</SectionBadge>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our technical capabilities, workflow, and deliverables.
            </p>
          </div>

          <div className="faq-search-box">
            <Search className="faq-search-icon" size={18} />
            <input
              type="text"
              className="faq-search-input"
              placeholder="Search frequently asked questions..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
            />
          </div>

          <div className="faq-list-wrapper">
            {filteredFaqs.map((faq) => {
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
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/faq" className="btn btn-secondary">
              <span>View All Questions & Knowledge Base</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== GLOBAL CTA ==================== */}
      <CTASection />

      {/* Case Study Modal */}
      {activeModalProject && (
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </>
  );
};
