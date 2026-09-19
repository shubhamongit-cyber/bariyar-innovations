import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionBadge } from '../components/common/SectionBadge';
import { CTASection } from '../components/common/CTASection';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { CaseStudyModal } from '../components/portfolio/CaseStudyModal';
import { portfolioData } from '../data/portfolioData';

const categories = [
  { id: 'all', label: 'All Projects (8)' },
  { id: 'Web + Enterprise', label: 'Web + Enterprise' },
  { id: 'Web + Mobile', label: 'Web + Mobile Apps' },
  { id: 'Mobile + IoT', label: 'Mobile + IoT' },
  { id: 'Web + Mobile + IoT', label: 'Industrial & Smart IoT' }
];

export const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'all'
    ? portfolioData
    : portfolioData.filter((p) => p.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Client Portfolio & Case Studies — BARIYAR INNOVATIONS" 
        description="Explore recent production web applications, native mobile apps, and custom software systems engineered by BARIYAR INNOVATIONS."
      />

      <PageHero
        badge="Proven Track Record"
        badgeVariant="orange"
        title="Selected Client Work &"
        highlightText="Case Studies"
        subtitle="Explore how we solve complex enterprise challenges with clean engineering, resilient databases, and intuitive user interfaces."
      />

      {/* Filter and Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="tech-filter-bar-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`tech-filter-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onQuickPreview={setActiveModalProject}
                showMetrics={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Have a Similar Project in Mind?"
        subtitle="Let's engineer a purpose-built software application designed around your business processes."
        btnText="Discuss Scope with Engineers"
      />

      {/* Modal */}
      {activeModalProject && (
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </>
  );
};
