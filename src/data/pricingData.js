export const pricingPlans = [
  {
    id: "starter",
    title: "Starter Website",
    badge: "Essential Presence",
    popular: false,
    subtitle: "For individuals, startups, and small businesses looking for immediate market credibility.",
    delivery: "2 - 3 Weeks Delivery",
    features: [
      "Responsive bespoke UI/UX web design",
      "Up to 5 essential brand pages (Home, About, Services, Contact, Legal)",
      "Interactive lead generation contact form",
      "Core SEO markup & mobile speed optimization",
      "SSL certificate setup & Cloudflare DNS integration",
      "Standard deployment & 30-day post-launch warranty"
    ],
    ctaText: "Get Started with Starter",
    ctaLink: "/contact?plan=Starter"
  },
  {
    id: "business",
    title: "Business Website & Portal",
    badge: "Most Popular",
    popular: true,
    subtitle: "For growing businesses requiring dynamic workflows, multiple sections, and conversion engines.",
    delivery: "4 - 6 Weeks Delivery",
    features: [
      "Custom bespoke UI/UX design with interactive wireframes",
      "Unlimited dynamic sections & custom page layouts",
      "Third-party API, CRM, or payment gateway integration",
      "Interactive calculator / search / filter widgets",
      "Google Analytics 4 & Meta Pixel conversion tracking",
      "Content Management System (CMS) or admin dashboard",
      "60-day dedicated warranty & performance tuning"
    ],
    ctaText: "Start Business Plan",
    ctaLink: "/contact?plan=Business"
  },
  {
    id: "custom",
    title: "Custom Solution & ERP",
    badge: "Enterprise Scaled",
    popular: false,
    subtitle: "For enterprises needing tailor-made web platforms, native mobile apps, or internal ERP systems.",
    delivery: "6 - 12+ Weeks Delivery",
    features: [
      "Comprehensive technical discovery & software architecture blueprint",
      "Full frontend, backend & database engineering",
      "Native iOS / Android or cross-platform mobile apps",
      "Complex role-based access control (RBAC) & workflow automation",
      "Automated unit, integration, and load testing pipelines",
      "Multi-region cloud infrastructure setup & CI/CD deployment",
      "Dedicated SLA response times & ongoing maintenance options"
    ],
    ctaText: "Request Custom Quote",
    ctaLink: "/contact?plan=Custom"
  }
];

export const supportPlans = [
  {
    id: "essential-care",
    title: "Essential Care",
    price: "Standard",
    features: [
      "Monthly security patching & framework updates",
      "Automated weekly cloud database backups",
      "24/7 uptime monitoring & ping alerts",
      "Standard email ticketing support (48h SLA)"
    ]
  },
  {
    id: "priority-growth",
    title: "Priority Growth SLA",
    price: "Recommended",
    features: [
      "Weekly security sweeps & priority dependency upgrades",
      "Automated daily off-site database & asset backups",
      "Continuous performance audits & Core Web Vitals tuning",
      "Dedicated Slack / WhatsApp direct engineer channel",
      "Guaranteed 8-hour SLA emergency hotfix window",
      "10 hours/month included for ongoing feature expansion"
    ]
  }
];
