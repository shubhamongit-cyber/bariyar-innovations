/**
 * BARIYAR INNOVATIONS — Interactive Web Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFaqAccordion();
  initTechFilter();
  initEstimator();
  initModals();
  initContactForm();
  initStatsCounter();
});

/* 1. Header & Navigation */
function initNavbar() {
  const header = document.querySelector('.header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Active section scrollspy
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* 2. Interactive FAQ Accordion & Live Search */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  const searchInput = document.getElementById('faqSearch');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close other open accordions
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('open')) {
          otherItem.classList.remove('open');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Live FAQ search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      faqItems.forEach(item => {
        const questionText = item.querySelector('.faq-question').textContent.toLowerCase();
        const answerText = item.querySelector('.faq-answer').textContent.toLowerCase();

        if (questionText.includes(query) || answerText.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
}

/* 3. Technology Stack Filter */
function initTechFilter() {
  const filterBtns = document.querySelectorAll('.tech-filter-btn');
  const techCards = document.querySelectorAll('.tech-item-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      techCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* 4. Interactive Project Scope & Estimator */
function initEstimator() {
  const typePills = document.querySelectorAll('.pill-type');
  const scopePills = document.querySelectorAll('.pill-scope');
  const supportPills = document.querySelectorAll('.pill-support');

  const timelineElem = document.getElementById('calcTimeline');
  const budgetElem = document.getElementById('calcBudget');

  function calculateEstimate() {
    let typeVal = document.querySelector('.pill-type.active')?.getAttribute('data-val') || 'web';
    let scopeVal = document.querySelector('.pill-scope.active')?.getAttribute('data-val') || 'standard';
    let supportVal = document.querySelector('.pill-support.active')?.getAttribute('data-val') || 'standard';

    let weeks = 3;
    let priceTier = "Custom Quote";

    if (typeVal === 'web') {
      if (scopeVal === 'mvp') weeks = 2;
      else if (scopeVal === 'standard') weeks = 4;
      else if (scopeVal === 'enterprise') weeks = 8;
    } else if (typeVal === 'app') {
      if (scopeVal === 'mvp') weeks = 4;
      else if (scopeVal === 'standard') weeks = 8;
      else if (scopeVal === 'enterprise') weeks = 14;
    } else if (typeVal === 'software') {
      if (scopeVal === 'mvp') weeks = 6;
      else if (scopeVal === 'standard') weeks = 10;
      else if (scopeVal === 'enterprise') weeks = 18;
    }

    if (supportVal === 'priority') {
      weeks += 1;
    }

    if (timelineElem) {
      timelineElem.textContent = `${weeks} - ${weeks + 2} Weeks`;
    }
  }

  function handlePillClick(group, pill) {
    group.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    calculateEstimate();
  }

  typePills.forEach(pill => pill.addEventListener('click', () => handlePillClick(typePills, pill)));
  scopePills.forEach(pill => pill.addEventListener('click', () => handlePillClick(scopePills, pill)));
  supportPills.forEach(pill => pill.addEventListener('click', () => handlePillClick(supportPills, pill)));

  calculateEstimate();
}

/* 5. Modals (Services, Case Studies, Legal) */
const MODAL_DATA = {
  web: {
    title: "Web Development Services",
    badge: "Web Solutions",
    content: `
      <h3>Modern Websites & Scalable Web Applications</h3>
      <p>BARIYAR INNOVATIONS creates responsive, fast, and secure web applications built to scale with your business demands.</p>
      <h4>What We Build:</h4>
      <ul>
        <li><strong>Corporate & Business Websites:</strong> Showcase your authority and convert visitors.</li>
        <li><strong>Customer Portals & Dashboards:</strong> Self-service client accounts and telemetry portals.</li>
        <li><strong>E-Commerce Platforms:</strong> Seamless shopping carts, payment gateways, and order management.</li>
        <li><strong>SaaS Platforms & Web Apps:</strong> High-performance frontend and resilient backends.</li>
      </ul>
      <h4>Core Priorities:</h4>
      <p>Performance · Enterprise Security · Mobile Responsive · SEO-Friendly Architecture · Maintainability</p>
    `
  },
  app: {
    title: "Mobile App Development",
    badge: "Mobile Solutions",
    content: `
      <h3>Mobile Apps Built Around Real User Needs</h3>
      <p>We craft high-performance Android, iOS, and cross-platform apps with smooth user experience and rock-solid architecture.</p>
      <h4>Capabilities:</h4>
      <ul>
        <li>Native Android (Kotlin/Java) & iOS (Swift) Development</li>
        <li>Cross-Platform Flutter & React Native Engineering</li>
        <li>Secure Backend & REST API Integrations</li>
        <li>Push Notifications, Geolocation & Offline Storage</li>
        <li>Secure Payment Gateways & Biometric Authentication</li>
      </ul>
    `
  },
  software: {
    title: "Custom Software Development",
    badge: "Enterprise Software",
    content: `
      <h3>Software Tailored Exactly to Your Workflows</h3>
      <p>Stop forcing your business into rigid off-the-shelf software. We build bespoke systems that match your exact operational rules.</p>
      <h4>Solutions We Build:</h4>
      <ul>
        <li>CRM & Customer Management Systems</li>
        <li>ERP-Style Business Portals & Workflow Automation</li>
        <li>Inventory, Logistics & Supply Chain Tracking</li>
        <li>Custom Reporting, Analytics & BI Dashboards</li>
        <li>Booking, Reservation & Billing Systems</li>
      </ul>
    `
  },
  uiux: {
    title: "UI/UX Design Systems",
    badge: "Design & UX",
    content: `
      <h3>Design That Makes Technology Simple & Intuitive</h3>
      <p>We turn complex user workflows into clean, effortless digital interfaces that reduce friction and maximize conversion.</p>
      <h4>Our Design Workflow:</h4>
      <ul>
        <li>User Journey Mapping & Information Architecture</li>
        <li>Interactive Wireframes & High-Fidelity Prototypes</li>
        <li>Design Systems & Reusable Component Libraries</li>
        <li>Multi-Device Responsive Breakpoint Optimization</li>
      </ul>
    `
  },
  case1: {
    title: "Enterprise ERP Portal",
    badge: "Case Study: Custom Software",
    content: `
      <p><strong>Client Challenge:</strong> The client was struggling with fragmented spreadsheets and manual billing operations across 5 regional teams.</p>
      <p><strong>Our Solution:</strong> BARIYAR INNOVATIONS engineered a unified ERP web portal with role-based access control, automated invoice generation, real-time inventory tracking, and executive telemetry dashboards.</p>
      <p><strong>Technologies:</strong> Node.js, React, PostgreSQL, Redis, Docker, Tailwind/Custom CSS</p>
      <p><strong>Result:</strong> Reduced administrative processing time by 74% and eliminated billing discrepancies completely.</p>
    `
  },
  case2: {
    title: "Smart Logistics Mobile App",
    badge: "Case Study: Mobile App",
    content: `
      <p><strong>Client Challenge:</strong> Real-time field driver tracking, dispatch synchronization, and customer delivery confirmation.</p>
      <p><strong>Our Solution:</strong> Built a cross-platform Flutter application integrated with background GPS tracking, offline syncing, digital signature collection, and instant push alerts.</p>
      <p><strong>Technologies:</strong> Flutter, Dart, Firebase, Node.js, Google Maps Platform API</p>
      <p><strong>Result:</strong> On-time delivery rate surged to 98.6% with 5-star customer feedback.</p>
    `
  },
  case3: {
    title: "Global E-Commerce Platform",
    badge: "Case Study: Web & Backend",
    content: `
      <p><strong>Client Challenge:</strong> High checkout drop-off and slow page loads during peak seasonal traffic.</p>
      <p><strong>Our Solution:</strong> Rebuilt the storefront architecture with responsive micro-frontend components, headless cart API, ultra-fast caching, and localized multi-currency checkout.</p>
      <p><strong>Technologies:</strong> Vue.js, Node.js, MongoDB, Stripe API, Cloudflare Edge</p>
      <p><strong>Result:</strong> 3.2x faster load times and a 42% lift in completed checkout conversions.</p>
    `
  },
  privacy: {
    title: "Privacy Policy",
    badge: "Legal",
    content: `
      <p><em>Last Updated: September 2026</em></p>
      <p>BARIYAR INNOVATIONS respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, handle, and safeguard your details when you visit our website or communicate with us.</p>
      <h4>1. Information We Collect</h4>
      <p>We may collect information you voluntarily provide via inquiry forms, emails, or phone, including your name, email address, phone number, company name, and project specifications.</p>
      <h4>2. How We Use Information</h4>
      <p>We use your information exclusively to respond to inquiries, prepare project estimates, fulfill development contracts, provide technical support, and improve our services.</p>
      <h4>3. Data Security</h4>
      <p>We implement industry-standard encryption, firewalls, and access control policies to ensure your data remains secure and private.</p>
    `
  },
  terms: {
    title: "Terms & Conditions",
    badge: "Legal",
    content: `
      <p><em>Last Updated: September 2026</em></p>
      <p>By accessing or browsing the BARIYAR INNOVATIONS website, you agree to comply with and be bound by the following terms and conditions.</p>
      <h4>1. Intellectual Property</h4>
      <p>All trademarks, graphics, code, and content displayed on this website are the property of BARIYAR INNOVATIONS or licensed partners.</p>
      <h4>2. Project Deliverables</h4>
      <p>All client project milestones, deliverables, payment terms, and intellectual property transfers are governed by specific written Service Level Agreements (SLAs) and project contracts.</p>
      <h4>3. Contact</h4>
      <p>For questions regarding terms or legal inquiries, reach out through our contact channels.</p>
    `
  }
};

function initModals() {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');

  if (!modalOverlay || !modalBody) return;

  function openModal(dataKey) {
    const data = MODAL_DATA[dataKey];
    if (!data) return;

    modalBody.innerHTML = `
      <div class="section-badge section-badge-orange">${data.badge}</div>
      <h2>${data.title}</h2>
      <div>${data.content}</div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach triggers
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const key = trigger.getAttribute('data-modal');
      openModal(key);
    });
  });
}

/* 6. Contact Form Validation & Toast Notification */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toastContainer = document.getElementById('toastContainer');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const service = form.querySelector('#service').value;

    if (!name || !email) {
      showToast('Validation Error', 'Please provide both your name and email address.', '#EF4444');
      return;
    }

    // Success simulation
    showToast('Inquiry Received!', `Thank you ${name}! Our engineering team will review your ${service || 'project'} requirements and reach out promptly.`, '#10B981');
    form.reset();
  });

  function showToast(title, message, color) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    if (color) toast.style.borderLeftColor = color;

    toast.innerHTML = `
      <div class="toast-icon">✓</div>
      <div class="toast-body">
        <h5>${title}</h5>
        <p>${message}</p>
      </div>
    `;

    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }
}

/* 7. Stats Counter Animation */
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-count');
  let animated = false;

  function countUp() {
    const triggerBottom = window.innerHeight * 0.9;
    const banner = document.querySelector('.stats-banner');
    if (!banner) return;

    const bannerTop = banner.getBoundingClientRect().top;

    if (bannerTop < triggerBottom && !animated) {
      animated = true;
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 1600;
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target + (counter.getAttribute('data-suffix') || '');
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current) + (counter.getAttribute('data-suffix') || '');
          }
        }, stepTime);
      });
    }
  }

  window.addEventListener('scroll', countUp);
  countUp();
}
