export const servicesData = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    tagline: "Modern, high-performance websites and dynamic web applications built for business impact.",
    badge: "Web Solutions",
    icon: "Globe",
    shortDesc: "Responsive corporate websites, customer portals, dashboards, SaaS platforms, and custom web applications designed for conversion.",
    heroSubtitle: "We engineer fast, secure, and scalable web solutions tailored to your operational workflows and customer journeys.",
    features: [
      "Corporate & Brand Websites with high conversion UI",
      "Interactive Customer Portals & Telemetry Dashboards",
      "Headless & Custom E-Commerce Architectures",
      "Scalable SaaS Application Frontends & APIs",
      "Responsive Multi-Device Layouts with Pixel Precision",
      "SEO-First Structural Markup & Core Web Vitals Optimization"
    ],
    deliverables: [
      "Full frontend & backend source code with git version control",
      "Custom responsive UI component library",
      "Database models and secure REST / GraphQL endpoints",
      "Automated testing and CI/CD deployment scripts",
      "Admin dashboard with role-based access control",
      "Production deployment documentation and warranty support"
    ],
    technologies: ["React.js", "Vue.js", "TypeScript", "Node.js", "HTML5 & Modern CSS", "REST / GraphQL"],
    detailedDescription: `
      At BARIYAR INNOVATIONS, web development is not just about writing code—it is about creating high-value digital experiences that turn visitors into loyal clients. We specialize in building responsive, lightning-fast web applications designed around actual business needs.

      Whether you need an enterprise corporate portal to establish market authority, a customer self-service platform, or a complex multi-tenant SaaS application, our engineering team adheres to modern web standards, strict security practices, and clean modular codebases.
    `,
    workflow: [
      { step: "01", title: "Information Architecture", desc: "User journeys, wireframes, and database relationship modeling." },
      { step: "02", title: "Frontend Engineering", desc: "Component-driven development with React/TypeScript and responsive CSS." },
      { step: "03", title: "Backend & API Integration", desc: "Secure API endpoints, database optimizations, and auth layers." },
      { step: "04", title: "Testing & Go-Live", desc: "Cross-browser testing, SEO audits, speed optimization, and zero-downtime deployment." }
    ]
  },
  {
    id: "app-development",
    slug: "app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline: "Engaging, ultra-fluid Android, iOS, and cross-platform mobile applications.",
    badge: "Mobile Engineering",
    icon: "Smartphone",
    shortDesc: "Modern native and cross-platform applications built for peak performance, smooth navigation, and effortless user experiences.",
    heroSubtitle: "Transform your mobile vision into intuitive, feature-rich iOS and Android apps that your customers love to use every day.",
    features: [
      "Native Android (Kotlin) & Native iOS (Swift) Applications",
      "Cross-Platform Engineering using Flutter & React Native",
      "Seamless REST API & Real-time WebSocket Integration",
      "Push Notifications, Geolocation & Offline Storage",
      "Biometric Authentication & Secure Payment Gateways",
      "App Store & Google Play Store Submission & Compliance"
    ],
    deliverables: [
      "Compiled Android (APK/AAB) and iOS (IPA) release builds",
      "Complete mobile codebase with clean modular architecture",
      "Backend API connectors and real-time push services",
      "Store listing graphics, metadata, and submission guidance",
      "Crashlytics & performance telemetry integration",
      "Post-launch update support and OS version compatibility"
    ],
    technologies: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase", "Node.js API"],
    detailedDescription: `
      Mobile devices are the primary touchpoint for modern businesses. BARIYAR INNOVATIONS crafts high-performance mobile applications that deliver smooth 60fps animations, intuitive gesture navigation, and robust offline capabilities.

      We evaluate your target demographic, budget, and performance goals to recommend either native or cross-platform mobile frameworks, ensuring rapid time-to-market without compromising on app responsiveness or security.
    `,
    workflow: [
      { step: "01", title: "UX Flows & Interactive Prototypes", desc: "Device-specific touch targets, navigation bars, and gesture interactions." },
      { step: "02", title: "Native / Cross-Platform Dev", desc: "Clean architecture implementation using Flutter or React Native." },
      { step: "03", title: "Hardware & Cloud Hooks", desc: "Camera, GPS, Bluetooth, push notifications, and payment gateways." },
      { step: "04", title: "Store Publishing & SLA", desc: "Compliance verification, App Store / Play Store release, and continuous updates." }
    ]
  },
  {
    id: "software-development",
    slug: "software-development",
    title: "Custom Software & ERP",
    shortTitle: "Custom Software",
    tagline: "Bespoke internal software designed around your actual operational workflows.",
    badge: "Enterprise Software",
    icon: "Code2",
    shortDesc: "Tailored business software, CRM systems, ERP portals, inventory management, and automated workflow pipelines.",
    heroSubtitle: "Stop forcing your organization into rigid off-the-shelf software. We build tailored platforms that adapt to your exact processes.",
    features: [
      "Custom CRM & Customer Lifecycle Management Systems",
      "ERP-Style Centralized Business & Operations Portals",
      "Multi-Branch Inventory & Supply Chain Tracking",
      "Automated Billing, Invoicing & Financial Reporting",
      "Role-Based Access Control (RBAC) & Audit Logs",
      "Custom Workflow Automation & Third-Party Connectors"
    ],
    deliverables: [
      "Production-ready enterprise software platform",
      "Granular role-based security & permissions engine",
      "Custom reporting & analytics export modules (PDF/Excel)",
      "Database migration scripts and automated daily backup routines",
      "Comprehensive staff user documentation & training walkthroughs",
      "Dedicated SLA enterprise support"
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "MySQL", "Docker", "Redis"],
    detailedDescription: `
      Generic off-the-shelf software often burdens growing companies with unwanted complexity, per-seat licensing fees, and workflow mismatches. BARIYAR INNOVATIONS designs custom software from the ground up to match your operational reality.

      Our software solutions streamline multi-department communication, automate repetitive manual data entry, safeguard confidential business intelligence, and provide management with real-time operational insights.
    `,
    workflow: [
      { step: "01", title: "Operational Audit", desc: "Analyzing internal spreadsheets, user roles, bottlenecks, and data schemas." },
      { step: "02", title: "Database & Architecture", desc: "Scalable schema design, ACID transactions, and access control policies." },
      { step: "03", title: "Module Development", desc: "Sprint-by-sprint release of CRM, inventory, invoicing, and reporting modules." },
      { step: "04", title: "Data Migration & Rollout", desc: "Safe historical data import, staff onboarding, and ongoing scaling." }
    ]
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design Systems",
    shortTitle: "UI/UX Design",
    tagline: "Clean, intuitive interfaces that turn complex workflows into effortless digital experiences.",
    badge: "Design & UX",
    icon: "Palette",
    shortDesc: "User research, interactive wireframing, high-fidelity UI prototypes, and reusable design systems tailored to your brand.",
    heroSubtitle: "We merge aesthetic beauty with usability research to create interfaces that reduce cognitive friction and delight users.",
    features: [
      "User Journey Mapping & Information Architecture",
      "Low-Fidelity Wireframing & Structural Ideation",
      "Interactive High-Fidelity Figma Prototypes",
      "Comprehensive Design Systems & Component Tokens",
      "Multi-Device Responsive Breakpoints & Accessibility (a11y)",
      "Developer Hand-Off Specs with CSS Tokens & Assets"
    ],
    deliverables: [
      "Complete Figma project files with organized component hierarchy",
      "Interactive clickable prototypes for stakeholder demonstrations",
      "Brand style guide including typography, color palette, and iconography",
      "Design token export (JSON/CSS) ready for engineering implementation",
      "Exported vector SVG graphics, illustration assets, and icons",
      "Usability testing report and recommendations"
    ],
    technologies: ["Figma", "Design Tokens", "Wireframing", "Prototyping", "A11y Standards"],
    detailedDescription: `
      Great software is intuitive from the very first second. Our UI/UX design team crafts clean, purposeful digital interfaces that eliminate clutter, emphasize clarity, and guide users smoothly toward conversion or task completion.

      We employ user-centered design methodologies, building thorough wireframes, responsive design systems, and clickable prototypes that ensure total alignment before a single line of backend code is written.
    `,
    workflow: [
      { step: "01", title: "Empathy & User Research", desc: "Understanding persona needs, pain points, and task hierarchies." },
      { step: "02", title: "Wireframes & Information Flow", desc: "Structuring page layouts and navigational architectures." },
      { step: "03", title: "Visual Design & System", desc: "Crafting polished UI screens, typography scales, and color hierarchies." },
      { step: "04", title: "Interactive Prototyping", desc: "Clickable testable demos and seamless developer handoff." }
    ]
  },
  {
    id: "api-backend",
    slug: "api-backend",
    title: "Backend & API Development",
    shortTitle: "Backend & APIs",
    tagline: "Resilient server architectures, ultra-fast REST/GraphQL APIs, and secure database backbones.",
    badge: "Cloud & APIs",
    icon: "Database",
    shortDesc: "Scalable Node/Python APIs, database schema optimization, auth layers, third-party integrations, and cloud architectures.",
    heroSubtitle: "Power your digital interfaces with high-concurrency, secure, and fault-tolerant cloud backends.",
    features: [
      "High-Performance REST & GraphQL API Architecture",
      "Relational (PostgreSQL, MySQL) & NoSQL (MongoDB) Database Design",
      "OAuth2, JWT Authentication & Multi-Factor Auth (MFA)",
      "Payment Gateway Integrations (Stripe, Razorpay, PayPal)",
      "Microservices & Serverless Cloud Functions",
      "Data Caching Pipelines with Redis & Edge Caching"
    ],
    deliverables: [
      "Documented API endpoints with Swagger / Postman collections",
      "Database schema definitions, indexes, and migration scripts",
      "Encrypted authentication and authorization middleware",
      "Webhook listeners and background job queues",
      "Load balancing and auto-scaling cloud configuration",
      "Automated security patching and vulnerability reports"
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    detailedDescription: `
      A flawless frontend interface is only as reliable as the backend infrastructure powering it. BARIYAR INNOVATIONS builds backend services engineered for high availability, low latency, and uncompromising data security.

      From designing complex relational databases to integrating third-party APIs and managing asynchronous job queues, our backend solutions keep your operations running 24/7.
    `,
    workflow: [
      { step: "01", title: "API Contract & Schema", desc: "Designing RESTful specs, payload schemas, and database entity relationships." },
      { step: "02", title: "Core Logic & Security", desc: "Implementing business rules, validation middleware, and encryption." },
      { step: "03", title: "Integrations & Queues", desc: "Connecting payment gateways, SMS/email services, and background workers." },
      { step: "04", title: "Performance Benchmarking", desc: "Load testing, query indexing, caching layers, and cloud deployment." }
    ]
  },
  {
    id: "maintenance-support",
    slug: "maintenance-support",
    title: "Maintenance & SLA Support",
    shortTitle: "Maintenance",
    tagline: "Continuous uptime monitoring, proactive security updates, and ongoing technical enhancements.",
    badge: "Support & SLA",
    icon: "ShieldCheck",
    shortDesc: "Ongoing technical improvements, security patching, uptime monitoring, bug resolution, and continuous feature expansion.",
    heroSubtitle: "Ensure your software remains fast, secure, and compatible with evolving operating systems and browser updates.",
    features: [
      "24/7 Proactive Server & Application Uptime Monitoring",
      "Regular Security Audits & Dependency Patching",
      "Automated Off-Site Daily Database & Media Backups",
      "Rapid SLA Bug Resolution & Emergency Hotfixes",
      "Speed & Core Web Vitals Performance Optimization",
      "Continuous Iterative Feature Enhancements"
    ],
    deliverables: [
      "Monthly health, uptime, and performance telemetry reports",
      "Dedicated technical support channel (Slack / Email / Phone)",
      "Priority SLA response window for critical incidents",
      "Scheduled framework and security dependency updates",
      "Staging environment for pre-release verification",
      "Continuous backlog grooming and iterative rollouts"
    ],
    technologies: ["Cloudflare", "Docker", "Linux VPS", "AWS / GCP", "CI/CD", "Monitoring Tools"],
    detailedDescription: `
      Launching your software is only the beginning. As your user base expands and software dependencies evolve, maintaining peak performance and security is paramount.

      BARIYAR INNOVATIONS provides comprehensive post-launch SLA maintenance agreements that give business leaders complete peace of mind. We protect your digital assets, resolve issues before they affect users, and continuously roll out improvements.
    `,
    workflow: [
      { step: "01", title: "Telemetry Onboarding", desc: "Setting up real-time error tracking, logging, and uptime alerts." },
      { step: "02", title: "Routine Maintenance", desc: "Weekly dependency audits, database maintenance, and security sweeps." },
      { step: "03", title: "Incident Response", desc: "Rapid triage and resolution under guaranteed SLA timeframes." },
      { step: "04", title: "Continuous Evolution", desc: "Planning and implementing iterative enhancements based on user feedback." }
    ]
  }
];
