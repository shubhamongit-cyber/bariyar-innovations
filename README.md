# BARIYAR INNOVATIONS — Official Web Application

Modern, enterprise-standard **React** single-page application built with **Vite**, **React Router DOM**, and modular component architecture.

---

## 🚀 Key Features

- **Route-Based Architecture**: Dedicated component and route for every page (`/`, `/about`, `/services`, `/services/:slug`, `/portfolio`, `/portfolio/:slug`, `/technologies`, `/process`, `/pricing`, `/faq`, `/contact`, `/privacy-policy`, `/terms`).
- **Interactive Project Scope Estimator**: Live timeline and budget calculator.
- **Filterable Tech Stack**: Categorized interactive technology grid (Frontend, Backend, Mobile, DBs, Cloud & DevOps).
- **Searchable FAQ Directory**: Real-time keyword search and categorized expandable accordions.
- **Interactive Portfolio & Case Studies**: Modal preview and dedicated detail routes.
- **Enterprise Contact Form**: Real-time validation, service/budget state mapping, and toast notification alerts.
- **Design System**: Rich dark theme, custom gradients, glassmorphism, responsive navigation drawer, and modern typography (`Outfit` & `Plus Jakarta Sans`).

---

## 🛠️ Scripts & Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build locally
npm run preview

# 5. Run standard Node.js server
node server.js
```

---

## 📁 Project Structure

```
BARIYAR-INNOVATIONS-website-content/
├── src/
│   ├── assets/           # Bundled vector graphics and logos
│   ├── components/
│   │   ├── common/       # Navbar, Footer, ScrollToTop, PageHero, SEO, CTA
│   │   ├── estimator/    # Interactive Scope & Timeline Estimator
│   │   ├── portfolio/    # Case study cards and modal preview
│   │   └── contact/      # Contact form with validation and toast integration
│   ├── context/          # ToastContext provider
│   ├── data/             # Structured data (services, portfolio, tech, pricing, faq, process)
│   ├── layouts/          # RootLayout with header, outlet, and footer
│   ├── pages/            # Standalone page components for each route
│   ├── styles/           # Design system tokens, layout, components, and pages CSS
│   ├── App.jsx           # React Router route definitions
│   └── main.jsx          # React DOM entry point
├── public/               # Static assets
├── index.html            # Vite HTML shell
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies and scripts
```

---

© 2026 BARIYAR INNOVATIONS. All rights reserved.
