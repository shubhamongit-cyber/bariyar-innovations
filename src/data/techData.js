export const techCategories = [
  { 
    id: "frontend", 
    label: "Frontend",
    tagline: "Modern UI frameworks, reactive architectures, and typed client systems."
  },
  { 
    id: "backend", 
    label: "Backend & API",
    tagline: "High-throughput asynchronous runtimes, microservices, and secure REST/GraphQL APIs."
  },
  { 
    id: "mobile", 
    label: "Mobile Apps",
    tagline: "Cross-platform and native iOS & Android applications engineered for speed."
  },
  { 
    id: "database", 
    label: "Databases",
    tagline: "ACID-compliant relational, NoSQL document, and real-time in-memory stores."
  },
  { 
    id: "tools", 
    label: "Cloud & DevOps",
    tagline: "Automated CI/CD pipelines, container orchestration, and cloud infrastructure."
  },
  { 
    id: "ai", 
    label: "AI", 
    tagline: "AI-powered platforms and LLMs to build intelligent, generative applications." 
  }
];

export const techStackData = [
  // ==================== FRONTEND ====================
  {
    name: "React.js",
    category: "frontend",
    badge: "UI Library",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
    desc: "Component-based, highly reactive web interfaces with virtual DOM and modern state hooks."
  },
  {
    name: "Next.js",
    category: "frontend",
    badge: "SSR & Fullstack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#000000",
    desc: "Server-side rendering, static site generation, and optimized enterprise web applications."
  },
  {
    name: "TypeScript",
    category: "frontend",
    badge: "Typed JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
    desc: "Strict type safety preventing runtime errors across mission-critical web applications."
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    badge: "Core Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
    desc: "Modern asynchronous architecture, event streams, and dynamic interactive client logic."
  },
  {
    name: "Vue.js",
    category: "frontend",
    badge: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    color: "#4FC08D",
    desc: "Progressive, lightweight JavaScript framework for fast single-page applications."
  },
  {
    name: "Angular",
    category: "frontend",
    badge: "Enterprise SPA",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    color: "#DD0031",
    desc: "Robust, enterprise-grade architecture with two-way data binding and dependency injection."
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    badge: "Utility Styling",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    color: "#38BDF8",
    desc: "Utility-first design tokens enabling responsive, pixel-perfect, custom design systems."
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    badge: "Semantic Web",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
    desc: "Modern semantic HTML, CSS Grid, Flexbox, glassmorphism, and responsive layouts."
  },
  {
    name: "Vite",
    category: "frontend",
    badge: "Build Tool",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    color: "#646CFF",
    desc: "Next-generation frontend tooling offering instant hot module replacement (HMR)."
  },

  // ==================== BACKEND & API ====================
  {
    name: "Node.js",
    category: "backend",
    badge: "JS Runtime",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#68A063",
    desc: "High-throughput asynchronous non-blocking event loop runtime for microservices."
  },
  {
    name: "Express.js",
    category: "backend",
    badge: "API Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "#000000",
    desc: "Fast, unopinionated, minimalist web and REST API framework for Node.js."
  },
  {
    name: "Python",
    category: "backend",
    badge: "Core Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
    desc: "Versatile backend computing, AI/ML integrations, data analytics, and automation scripts."
  },
  {
    name: "FastAPI",
    category: "backend",
    badge: "Async Python API",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    color: "#009688",
    desc: "High-performance ASGI Python framework with automatic Swagger OpenAPI generation."
  },
  {
    name: "Django",
    category: "backend",
    badge: "Fullstack Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    color: "#092E20",
    desc: "Batteries-included enterprise Python web framework with built-in ORM and security."
  },
  {
    name: "PHP",
    category: "backend",
    badge: "Web Engine",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "#777BB4",
    desc: "Widely supported server-side scripting language powering high-scale web platforms."
  },
  {
    name: "Laravel",
    category: "backend",
    badge: "PHP Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    color: "#FF2D20",
    desc: "Elegant MVC web ecosystem with robust Eloquent ORM, queues, auth, and scheduling."
  },
  {
    name: "Java",
    category: "backend",
    badge: "Enterprise",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "#007396",
    desc: "Strictly typed, high-performance JVM backends with Spring Boot architecture."
  },
  {
    name: "GraphQL",
    category: "backend",
    badge: "Query Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    color: "#E10098",
    desc: "Precise declarative client data fetching preventing over-fetching and under-fetching."
  },
  {
    name: "NestJS",
    category: "backend",
    badge: "TypeScript Node",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    color: "#E0234E",
    desc: "Scalable enterprise server-side Node.js applications with Angular-inspired modularity."
  },

  // ==================== MOBILE ====================
  {
    name: "Flutter",
    category: "mobile",
    badge: "Cross-Platform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    color: "#02569B",
    desc: "Single codebase compiling into pixel-perfect native iOS and Android apps with 60fps."
  },
  {
    name: "Dart",
    category: "mobile",
    badge: "Client Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    color: "#0175C2",
    desc: "Client-optimized programming language for lightning-fast apps on any platform."
  },
  {
    name: "React Native",
    category: "mobile",
    badge: "Cross-Platform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
    desc: "Native iOS and Android user experiences built with React components and JavaScript."
  },
  {
    name: "Kotlin (Android)",
    category: "mobile",
    badge: "Native Android",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    color: "#7F52FF",
    desc: "Modern Kotlin coroutines and Jetpack Compose for dedicated Android solutions."
  },
  {
    name: "Swift (iOS)",
    category: "mobile",
    badge: "Native Apple iOS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    color: "#F05138",
    desc: "SwiftUI and UIKit for high-end Apple ecosystem applications on iPhone & iPad."
  },
  {
    name: "Android SDK",
    category: "mobile",
    badge: "Mobile OS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    color: "#3DDC84",
    desc: "Deep Android OS hardware integration, Bluetooth BLE, notifications, and background services."
  },
  {
    name: "Apple iOS",
    category: "mobile",
    badge: "Mobile OS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    color: "#999999",
    desc: "Strict Apple App Store guidelines, In-App Purchases, APNs, and HealthKit integration."
  },

  // ==================== DATABASES ====================
  {
    name: "PostgreSQL",
    category: "database",
    badge: "Relational SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#4169E1",
    desc: "Enterprise-grade ACID compliant relational database for complex relational datasets."
  },
  {
    name: "MySQL",
    category: "database",
    badge: "Relational SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4479A1",
    desc: "Dependable, widely deployed relational database engine for high-traffic web apps."
  },
  {
    name: "MongoDB",
    category: "database",
    badge: "NoSQL Document",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
    desc: "Flexible JSON-like document database ideal for rapid schema iterations and real-time data."
  },
  {
    name: "Redis",
    category: "database",
    badge: "In-Memory Cache",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    color: "#DC382D",
    desc: "Ultra-fast in-memory data store for caching, session management, and rate limiting."
  },
  {
    name: "Firebase",
    category: "database",
    badge: "Realtime BaaS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "#FFCA28",
    desc: "Managed real-time sync, auth rules, Firestore collections, and cloud edge triggers."
  },
  {
    name: "Supabase",
    category: "database",
    badge: "Open-Source BaaS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    color: "#3ECF8E",
    desc: "Postgres database with instant RESTful and Realtime APIs, Auth, and Storage."
  },
  {
    name: "SQLite",
    category: "database",
    badge: "Embedded SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    color: "#003B57",
    desc: "Self-contained, serverless zero-configuration transactional database engine."
  },

  // ==================== CLOUD & DEVOPS ====================
  {
    name: "Docker",
    category: "tools",
    badge: "Containerization",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
    desc: "Reproducible container environments ensuring seamless dev-to-production parity."
  },
  {
    name: "Kubernetes",
    category: "tools",
    badge: "Orchestration",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    color: "#326CE5",
    desc: "Automated scaling, container scheduling, cluster management, and zero-downtime rolls."
  },
  {
    name: "AWS Cloud",
    category: "tools",
    badge: "Cloud Infrastructure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    color: "#FF9900",
    desc: "Elastic compute (EC2/ECS), S3 storage, serverless lambdas, and CloudFront CDNs."
  },
  {
    name: "Google Cloud (GCP)",
    category: "tools",
    badge: "Cloud Services",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    color: "#4285F4",
    desc: "Cloud Run, Kubernetes Engine (GKE), BigQuery, Firebase, and AI engine hosting."
  },
  {
    name: "Git & GitHub",
    category: "tools",
    badge: "Version Control",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#181717",
    desc: "Branching strategies, peer code reviews, automated PR checks, and version histories."
  },
  {
    name: "CI/CD (Jenkins/Actions)",
    category: "tools",
    badge: "Automated Ops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    color: "#D24939",
    desc: "Automated testing pipelines, build validation, and zero-downtime deployment triggers."
  },
  {
    name: "Postman",
    category: "tools",
    badge: "API Testing",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    color: "#FF6C37",
    desc: "Comprehensive API lifecycle design, mocking, automated testing, and team workspaces."
  },
  {
    name: "Figma",
    category: "tools",
    badge: "UI/UX Design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "#F24E1E",
    desc: "Collaborative interface design, interactive wireframing, and component design tokens."
  },

  // ==================== AI & LLMs ====================
  {
    name: "OpenAI API",
    category: "ai",
    badge: "LLM & GPT-4o",
    icon: "./assets/tech/openai.svg",
    color: "#10A37F",
    desc: "Enterprise GPT-4o, reasoning models, Whisper audio transcription, and custom assistive AI agents."
  },
  {
    name: "Claude API",
    category: "ai",
    badge: "Anthropic Claude 3.5",
    icon: "./assets/tech/claude.svg",
    color: "#CC785C",
    desc: "High-context intelligence, code generation, nuanced reasoning, and enterprise AI workflows."
  },
  {
    name: "Meta",
    category: "ai",
    badge: "Llama 3 & Open AI",
    icon: "./assets/tech/meta.svg",
    color: "#0668E1",
    desc: "Self-hosted high-efficiency open weights models with fine-tuning on custom enterprise data."
  },
  {
    name: "Mistral AI",
    category: "ai",
    badge: "High-Speed LLMs",
    icon: "./assets/tech/mistral.svg",
    color: "#FF7000",
    desc: "State-of-the-art European open & optimized models including Mistral Large and Codestral."
  },
  {
    name: "Google",
    category: "ai",
    badge: "Gemini & Vertex AI",
    icon: "./assets/tech/google.svg",
    color: "#4285F4",
    desc: "Gemini 1.5 Pro multimodal processing, Vertex AI, and native Google Cloud enterprise AI ecosystems."
  },
  {
    name: "Hugging Face",
    category: "ai",
    badge: "Model Hub & Inference",
    icon: "./assets/tech/huggingface.svg",
    color: "#FFD21E",
    desc: "Open-source model repository, Transformers pipelines, datasets, and serverless edge endpoints."
  },
  {
    name: "Grok",
    category: "ai",
    badge: "xAI Real-Time",
    icon: "./assets/tech/grok.svg",
    color: "#000000",
    desc: "High-throughput reasoning, real-time data ingestion, and advanced conversational agent architectures."
  },
  {
    name: "Antigravity",
    category: "ai",
    badge: "Agentic AI & IDE",
    icon: "./assets/tech/antigravity.svg",
    color: "#4285F4",
    desc: "Autonomous agentic engineering, intelligent pair programming, and full-stack software intelligence."
  }
];
