import bizpulse1 from "./png/biz-pulse.png";
import gradify from './png/gradify.png';
import mta from './png/mta.png';
import trustgrid from './png/trustgrid.png'

export const projects = [
  // 1. BizPulse – AI-powered Business Intelligence (SCAFLD)
  {
    id: "bizpulse",
    title: "BizPulse",
    category: "fullstack & cloud",
    description: "AI-powered business intelligence co-pilot delivering narrative insights and actionable recommendations for SMBs.",
    duration: "10 days",
    service: "AI & Business Intelligence",
    client: "AWS Hackathon Project",
    teamSize: "3 Developers",
    images: [bizpulse1, "/bizpulse-2.jpg"],
    about: "BizPulse helps small and medium businesses understand their data through AI-powered narrative insights, anomaly detection, and recommendations.",
    features: [
      "Serverless AWS architecture with Lambda, Glue, Q, Lookout",
      "AI/ML pipelines using Amazon Bedrock",
      "Real-time insights and anomaly detection",
      "Actionable recommendations for SMB decision-making",
      "Dashboard analytics and visualizations"
    ],
    techStack: [
      { name: "AWS Lambda", description: "Serverless Compute" },
      { name: "AWS Glue", description: "Data ETL" },
      { name: "Amazon Q & Lookout", description: "AI/ML Analytics" },
      { name: "Bedrock", description: "Narrative AI" },
      { name: "AWS S3 Bucket", description: "Storage" },
      { name: "Django", description: "Backend" },
      { name: "React", description: "Frontend" },
    ],
    outcomes: [
      "Enabled SMBs to make data-driven decisions",
      "Implemented AI pipelines for automated insights",
      "Built production-ready serverless BI solution"
    ],
    links: { live: "https://biz-pulse.vercel.app/", code: "https://github.com/Koded0214h/Biz-Pulse" }
  },

  // 2. SoroSurance – Voice-first Insurance Platform
  {
    id: "sorosurance",
    title: "SoroSurance",
    category: "backend",
    description: "AI-powered voice-first insurance claim platform for elderly, visually impaired, and low-literate users.",
    duration: "1 month",
    service: "Accessibility & Insurance",
    client: "ECX5.0 Hackathon Project",
    teamSize: "2 Developers",
    images: ["/sorosurance-1.jpg", "/sorosurance-2.jpg"],
    about: "SoroSurance allows users to file insurance claims just by speaking. Supports multiple local languages, guest mode, and full accessibility.",
    features: [
      "Voice-first insurance claims (no forms)",
      "Local language support",
      "Guest mode accessibility",
      "AI-powered speech-to-text claim processing",
      "Secure claim management system"
    ],
    techStack: [
      { name: "Django", description: "Backend" },
      { name: "AssemblyAI STT", description: "Speech-to-Text" },
      { name: "Gemini AI", description: "AI Assistance" },
      { name: "Spitch API", description: "STT & TTS" },
      { name: "Render", description: "Cloud Hosting" }
    ],
    outcomes: [
      "Enabled low-literacy users to file claims independently",
      "Achieved real-time processing with high accuracy",
      "Improved accessibility in insurance tech"
    ],
    links: { live: "https://soro-surance.vercel.app/", code: "https://github.com/Koded0214h/Soro-surance" }
  },

  // 3. MediPal – AI-driven Health Savings Platform
  {
    id: "medipal",
    title: "MediPal",
    category: "fullstack",
    description: "AI-driven health savings platform helping Nigerians prepare financially for medical emergencies.",
    duration: "1 month",
    service: "FinTech & Health",
    client: "Personal Project",
    teamSize: "3 Developer",
    images: ["/medipal-1.jpg", "/medipal-2.jpg"],
    about: "MediPal helps users create health wallets, access verified providers, receive risk predictions, and optionally join community savings circles.",
    features: [
      "Personalized health risk predictions",
      "Locked health wallets for emergency savings",
      "Verified health providers",
      "Optional community savings circles",
      "AI-driven recommendations"
    ],
    techStack: [
      { name: "Django", description: "Backend" },
      { name: "React", description: "Frontend" },
      { name: "Celery", description: "Async Tasks" },
      { name: "PostgreSQL", description: "Database" }
    ],
    outcomes: [
      "Enabled Nigerians to save and prepare for health emergencies",
      "Built AI-driven financial prediction models",
      "Created a secure and responsive web platform"
    ],
    links: { live: "https://medi-pal-dfpt.onrender.com/", code: "https://github.com/Koded0214h/MediPal" }
  },

  // 4. Newsly.AI – Personalized AI News Digest
  {
    id: "newsly-ai",
    title: "Newsly.AI",
    category: "backend",
    description: "AI-powered personalized news digest platform with email & voice summaries.",
    duration: "1 month",
    service: "AI & News Aggregation",
    client: "CJID Hackathon Project",
    teamSize: "2 Developers",
    images: ["/newsly-1.jpg", "/newsly-2.jpg"],
    about: "Newsly.AI delivers interest-based news summaries with optional AI voice recaps, daily/weekly email digests, and trending topic analysis.",
    features: [
      "Personalized AI news feed",
      "Email digest automation",
      "AI voice summaries",
      "Trending topic detection",
      "Clean and responsive UI"
    ],
    techStack: [
      { name: "Django", description: "Backend" },
      { name: "React", description: "Frontend" },
      { name: "Celery", description: "Async Tasks" },
      { name: "AI Summarization", description: "NLP Models" },
      { name: "NewsData API", description: "News API" },
      { name: "GNews", description: "News API" },
    ],
    outcomes: [
      "Delivered highly personalized news experiences",
      "Built automated digest pipelines",
      "Increased user engagement with AI voice recaps"
    ],
    links: { live: "#", code: "https://github.com/Koded0214h/Newsly.AI" }
  },

  // 5. AURA – Interactive Digital Twin Health Platform
  {
    id: "aura",
    title: "AURA",
    category: "backend",
    description: "Digital twin platform for real-time health visualization and predictive insights.",
    duration: "20 days",
    service: "Digital Health",
    client: "TechStars Hackathon Project",
    teamSize: "2 Developers",
    images: ["/aura-1.jpg", "/aura-2.jpg"],
    about: "AURA simulates lifestyle choices, visualizes user health, and predicts future health risks using data-driven insights.",
    features: [
      "Real-time health visualization",
      "Lifestyle simulation and predictions",
      "Personalized insights",
      "Interactive dashboard",
      "Mobile-friendly interface"
    ],
    techStack: [
      { name: "Django", description: "Backend" },
      { name: "React", description: "Frontend" },
      { name: "Chart.js", description: "Visualization" },
      { name: "AI Analytics", description: "Health Prediction" }
    ],
    outcomes: [
      "Enabled users to track health trends",
      "Provided predictive insights for lifestyle adjustments",
      "Built a highly interactive web experience"
    ],
    links: { live: "#", code: "https://github.com/vivi123-pro/AURA" }
  },

  // 6. Gradify – Assignment Distribution & AI Grading
  {
    id: "gradify",
    title: "Gradify",
    category: "backend",
    description: "Web app for streamlined assignment distribution, submission, and AI-assisted grading.",
    duration: "1 month",
    service: "Education Tech",
    client: "Schools & Universities",
    teamSize: "2 Developer",
    images: [gradify, "/gradify-2.jpg"],
    about: "Gradify provides role-based dashboards, file/code uploads, AI-assisted grading, and a mobile-friendly interface for students and lecturers.",
    features: [
      "Role-based dashboards",
      "AI-assisted grading",
      "File and code uploads",
      "Clean and mobile-friendly UI",
      "Secure academic workflows"
    ],
    techStack: [
      { name: "Django", description: "Backend" },
      { name: "React", description: "Frontend" },
      { name: "Gemini AI", description: "AI" },
      { name: "Celery", description: "Async Tasks" },
      { name: "PostgreSQL", description: "Database" }
    ],
    outcomes: [
      "Streamlined academic assignment processes",
      "Reduced manual grading effort",
      "Improved student and lecturer experience"
    ],
    links: { live: "https://gradify-vert.vercel.app/", code: "https://github.com/Koded0214h/Gradify" }
  },

  // 7. MediDoc – Medical Appointment Management
  {
    id: "medidoc",
    title: "MediDoc",
    category: "fullstack",
    description: "Medical appointment scheduling and management system for patients and healthcare professionals.",
    duration: "24hours",
    service: "Healthcare Tech",
    client: "Cavista Hackathon Project",
    teamSize: "4 Developers",
    images: ["/medidoc-1.jpg", "/medidoc-2.jpg"],
    about: "MediDoc enables seamless booking, management, and tracking of medical appointments with patient/provider dashboards.",
    features: [
      "Appointment scheduling",
      "Patient and provider dashboards",
      "Automated notifications",
      "Mobile-friendly design",
      "Secure data management"
    ],
    techStack: [
      { name: "Django", description: "Backend" },
      { name: "React", description: "Frontend" },
      { name: "Google Cloud", description: "Cloud infra" },
      { name: "PostgreSQL", description: "Database" }
    ],
    outcomes: [
      "Simplified appointment management",
      "Improved patient-provider communication",
      "Built a responsive and secure platform"
    ],
    links: { live: "#", code: "#" }
  },

  // 8. Django CRUD Kit – Open Source
  {
    id: "django-crud-kit",
    title: "Django CRUD Kit",
    category: "open-source",
    description: "Library toolkit that simplifies CRUD interface generation in Django apps.",
    duration: "Ongoing",
    service: "Developer Tool",
    client: "Open Source",
    teamSize: "Solo",
    images: ["/django-crud-1.jpg", "/django-crud-2.jpg"],
    about: "Automatically generates CRUD views, templates, and URLs for Django models, customizable and flexible for developers.",
    features: [
      "Automatic CRUD generation",
      "Customizable templates and views",
      "Supports multiple models and apps",
      "Time-saving developer tool",
      "Open-source and community-friendly"
    ],
    techStack: [
      { name: "Django", description: "Backend" },
      { name: "Python", description: "Programming Language" }
    ],
    outcomes: [
      "Simplified CRUD development",
      "Adopted by multiple developers",
      "Saved hours of repetitive work"
    ],
    links: { live: "#", code: "https://github.com/Koded0214h/Django-Crud-Kit" }
  },

  // 9. Skill Drop – In Progress
  {
    id: "skill-drop",
    title: "Skill Drop",
    category: "backend",
    description: "Platform connecting students to real-world mini-projects (gigs).",
    duration: "In Progress",
    service: "Education Tech & Web3",
    client: "Startups & NGOs",
    teamSize: "2 Developers",
    images: ["/skilldrop-1.jpg", "/skilldrop-2.jpg"],
    about: "Skill Drop allows students to discover mini-projects, submit CVs, and earn on-chain skill badges.",
    features: [
      "Gig discovery and applications",
      "CV upload and employer feedback",
      "On-chain skill badges",
      "Dashboard tracking",
      "Real-world project exposure"
    ],
    techStack: [
      { name: "Django", description: "Backend" },
      { name: "React", description: "Frontend" },
      { name: "Web3.js", description: "Blockchain Integration" },
      { name: "PostgreSQL", description: "Database" }
    ],
    outcomes: [
      "Connecting students to practical experiences",
      "Bridging skill gaps efficiently",
      "In-progress feature development"
    ],
    links: { live: "#", code: "https://github.com/Koded0214h/Skill-Drop" }
  },

  // 10. Skill Bridge – In Progress
  {
    id: "skill-bridge",
    title: "Skill Bridge",
    category: "fullstack",
    description: "Learner-centric platform for skill-building content discovery and tracking.",
    duration: "In Progress",
    service: "Education Tech",
    client: "Learners",
    teamSize: "3 Developers",
    images: ["/skillbridge-1.jpg", "/skillbridge-2.jpg"],
    about: "Skill Bridge helps learners discover curated content, track progress, and bridge the gap between current skills and goals.",
    features: [
      "Personalized learning paths",
      "Progress tracking",
      "Curated skill-building content",
      "Dashboards for learners",
      "Goal-oriented recommendations"
    ],
    techStack: [
      { name: "Django", description: "Backend" },
      { name: "React", description: "Frontend" },
      { name: "PostgreSQL", description: "Database" },
      { name: "Celery", description: "Async Tasks" }
    ],
    outcomes: [
      "Personalized and goal-driven skill-building",
      "In-progress development",
      "Engaged learners with curated resources"
    ],
    links: { live: "#", code: "https://github.com/Koded0214h/Skill-Bridge" }
  },
  // 11. SmartMail AI – Gmail-integrated AI Assistant
{
  id: "smartmail-ai",
  title: "SmartMail AI",
  category: "fullstack",
  description: "Gmail-integrated AI assistant that filters emails, generates smart replies, and syncs calendar events.",
  duration: "on-going",
  service: "Productivity & AI",
  client: "Personal / SCAFLD",
  teamSize: "1 Developer",
  images: ["/smartmail-1.jpg", "/smartmail-2.jpg"],
  about: "SmartMail AI automates inbox management, provides AI-generated replies, and intelligently schedules calendar events.",
  features: [
    "Keyword-based email filtering",
    "AI-generated smart replies",
    "Calendar event sync",
    "Daily digest summaries",
    "Secure Gmail API integration"
  ],
  techStack: [
    { name: "Django", description: "Backend" },
    { name: "DRF", description: "API Layer" },
    { name: "Google Mail API", description: "Email Integration" },
    { name: "Gemini AI", description: "AI Processing" }
  ],
  outcomes: [
    "Automated email workflows",
    "Reduced manual inbox management",
    "Enhanced productivity for users"
  ],
  links: { live: "#", code: "https://github.com/Koded0214h/Smart-Mail-AI" }
},

// 12. Isele – WhatsApp Smart Event Assistant
{
  id: "isele",
  title: "Isele",
  category: "fullstack",
  description: "Smart event management assistant that lives in WhatsApp, enabling natural chat-based scheduling.",
  duration: "10 days",
  service: "AI Assistant",
  client: "Sanni Shazily",
  teamSize: "1 Developer",
  images: ["/isele-1.jpg", "/isele-2.jpg"],
  about: "Isele lets users chat naturally to schedule events, view calendars, and discover local happenings using AI-powered WhatsApp interactions.",
  features: [
    "WhatsApp chatbot interface",
    "Natural language understanding",
    "Event scheduling and reminders",
    "Calendar integration",
    "Location-based event suggestions"
  ],
  techStack: [
    { name: "Django", description: "Backend" },
    { name: "Twilio API", description: "WhatsApp Integration" },
    { name: "AI NLP", description: "Natural Language Processing" }
  ],
  outcomes: [
    "Simplified event management via chat",
    "Improved accessibility for casual users",
    "Built AI assistant workflows"
  ],
  links: { live: "#", code: "https://github.com/Koded0214h/Isele" }
},

// 13. ReadFlow – PDF-to-Readable Format Converter
{
  id: "readflow",
  title: "ReadFlow",
  category: "backend",
  description: "Transforms PDFs into flowing, web-readable formats inspired by Webtoon and LightReader.",
  duration: "1 month",
  service: "Document & Content AI",
  client: "Codematics Hackathon Project",
  teamSize: "2 Developers",
  images: ["/readflow-1.jpg", "/readflow-2.jpg"],
  about: "ReadFlow converts traditional PDFs into a seamless, vertical scrolling reading experience with modern UI.",
  features: [
    "PDF upload and parsing",
    "Flowing web-readable output",
    "Mobile-friendly layout",
    "AI-enhanced readability",
    "Customizable reading themes"
  ],
  techStack: [
    { name: "Django", description: "Backend" },
    { name: "React", description: "Frontend" },
    { name: "PyPDF", description: "PDF Parsing" },
    { name: "AI Text Formatting", description: "Readability Enhancement" }
  ],
  outcomes: [
    "Improved PDF reading experience",
    "Accessible content presentation",
    "Built scalable PDF-to-web pipeline"
  ],
  links: { live: "#", code: "https://github.com/Koded0214h/ReadFlow" }
},

// 14. TrustGrid – AI Privacy Compliance Platform
{
  id: "trustgrid",
  title: "TrustGrid",
  category: "Toolikit",
  description: "AI-powered privacy compliance platform ensuring NDPR compliance for organizations in Nigeria.",
  duration: "3 months",
  service: "Privacy & Compliance",
  client: "Enterprises",
  teamSize: "3 Developers",
  images: [trustgrid, "/trustgrid-2.jpg"],
  about: "TrustGrid enables organizations to request citizen data with automated consent management, audit trails, and transparency, fully NDPR-compliant.",
  features: [
    "Automated consent management",
    "Audit trails and reporting",
    "AI-based privacy checks",
    "Citizen data transparency",
    "Secure and scalable system"
  ],
  techStack: [
    { name: "Django", description: "Backend" },
    { name: "React", description: "Frontend" },
    { name: "PostgreSQL", description: "Database" },
    { name: "AI Compliance Checks", description: "Privacy Enforcement" }
  ],
  outcomes: [
    "Improved organizational compliance",
    "Built trust with end-users",
    "Automated privacy workflows"
  ],
  links: { live: "#", code: "https://github.com/qcoderx/Trust-Grid" }
},

// 15. EnderAI – AI Form Automation & Essay Assistant
{
  id: "enderai",
  title: "EnderAI",
  category: "fullstack",
  description: "Conquers complex forms and drafts personalized essays using Chrome AI APIs.",
  duration: "2 months",
  service: "AI Productivity",
  client: "Google Built-in challenge Hakcathon Project",
  teamSize: "1 Developer",
  images: ["/enderai-1.jpg", "/enderai-2.jpg"],
  about: "EnderAI intelligently autofills forms, drafts essays (scholarship statements, applications), and proofreads final submissions using AI.",
  features: [
    "Chrome AI API integration",
    "Form autofill and validation",
    "Essay drafting and rewriting",
    "Proofreading and grammar check",
    "User-friendly Chrome extension"
  ],
  techStack: [
    { name: "Chrome API", description: "Browser Extension" },
    { name: "AI Writer / Rewriter", description: "Text Generation" },
    { name: "React", description: "Extension UI" }
  ],
  outcomes: [
    "Automated repetitive tasks",
    "Enabled faster form submissions",
    "Improved writing quality for users"
  ],
  links: { live: "#", code: "https://github.com/Koded0214h/EnderAI" }
},

// 16. OpenTrace – Universal Anti-Theft Mobile Protocol
{
  id: "opentrace",
  title: "OpenTrace",
  category: "fullstack",
  description: "Universal dual-layer anti-theft protocol for mobile devices.",
  duration: "3 months",
  service: "Security Tech",
  client: "Personal Project",
  teamSize: "2 Developers",
  images: ["/opentrace-1.jpg", "/opentrace-2.jpg"],
  about: "OpenTrace can locate and secure any mobile device globally, independent of OS or geography, with dual-layer tracking and anti-theft measures.",
  features: [
    "Device tracking and locking",
    "Cross-platform support",
    "Geolocation & remote commands",
    "Dual-layer security",
    "Tamper alerts and reporting"
  ],
  techStack: [
    { name: "React Native", description: "Mobile App" },
    { name: "Django", description: "Backend" },
    { name: "Firebase", description: "Real-time Tracking" }
  ],
  outcomes: [
    "Enhanced mobile device security",
    "Implemented cross-platform anti-theft protocol",
    "Built scalable real-time tracking system"
  ],
  links: { live: "#", code: "#" }
},

// 17. Multi-Trend Aggregator API
{
  id: "multi-trend-api",
  title: "Multi-Trend Aggregator API",
  category: "backend",
  description: "Aggregates trending topics from multiple platforms into a single unified dashboard.",
  duration: "1 month",
  service: "API / Analytics",
  client: "Personal Project",
  teamSize: "2 Developers",
  images: [mta],
  about: "Pulls trending topics from Twitter (X), TikTok, and other platforms to provide a consolidated view of social trends.",
  features: [
    "Multi-platform trend aggregation",
    "API-based data retrieval",
    "Real-time updates",
    "Dashboard-ready JSON output"
  ],
  techStack: [
    { name: "Django", description: "Backend API" },
    { name: "Celery", description: "Async Tasks" },
    { name: "REST API", description: "Data Access" }
  ],
  outcomes: [
    "Simplified trend analysis",
    "Built real-time aggregation pipeline",
    "Enables data-driven content strategies"
  ],
  links: { live: "https://multi-platform-trend-aggregator-api.vercel.app/", code: "https://github.com/Koded0214h/Multi-platform-Trend-Aggregator-API" }
},

// 18. Inventory – Django + React Native Stock Management
{
  id: "inventory",
  title: "Inventory",
  category: "fullstack",
  description: "Stock management system for small businesses and individuals.",
  duration: "2 months",
  service: "Inventory Management",
  client: "SMBs / Personal",
  teamSize: "1 Developer",
  images: ["/inventory-1.jpg", "/inventory-2.jpg"],
  about: "Tracks items, suppliers, and usage in real-time, simplifying monitoring of available materials and stock levels.",
  features: [
    "Item and supplier tracking",
    "Real-time stock updates",
    "Dashboard analytics",
    "Mobile-friendly app",
    "Notifications for low inventory"
  ],
  techStack: [
    { name: "Django", description: "Backend" },
    { name: "React Native", description: "Mobile App" },
    { name: "PostgreSQL", description: "Database" }
  ],
  outcomes: [
    "Simplified stock monitoring for SMBs",
    "Improved inventory transparency",
    "Enabled real-time notifications and tracking"
  ],
  links: { live: "#", code: "#" }
}

];