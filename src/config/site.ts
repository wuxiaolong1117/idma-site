export const siteConfig = {
  companyName: "iDma international Ltd",
  productName: "iDma AI handwriting",
  websiteUrl: "https://www.idma.ai",
  tagline: "Smart handwriting & interactive learning ecosystem",
  description: "iDma provides real-time handwriting capture and dual-board interactive tutoring solutions for schools, tutoring centers, educators, and enterprise training teams.",
  keywords: [
    "handwriting capture",
    "interactive learning",
    "dual-board tutoring",
    "remote teaching",
    "online tutoring",
    "digital whiteboard",
    "education technology",
    "edtech",
    "real-time collaboration",
    "AI learning",
    "smart handwriting",
    "interactive tutoring",
  ],
  // Google Analytics ID
  analytics: {
    googleAnalyticsId: "G-01391XBS97",
  },
  contactEmail: "contact@idma.ai",
  phone: "+44 7547 237151",
  address: {
    street: "71-75 Shelton Street, Covent Garden",
    city: "London",
    postcode: "WC2H 9JQ",
    country: "United Kingdom",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/111557964",
    youtube: "https://youtube.com/@idma",
    x: "https://x.com/idma",
    github: undefined, // Optional
  },
  brand: {
    primaryAccentName: "blue", // For Tailwind color reference
  },
  navigation: [
    { label: "Product", href: "/product" },
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Partners", href: "/partners" },
    { label: "Downloads", href: "/downloads" },
    { label: "Support", href: "/support" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    primary: "Request a Demo",
    secondary: "Download Brochure",
  },
  features: [
    "Real-time ink sync",
    "Low-latency correction",
    "Lesson replay",
    "AI summaries",
    "Multi-platform video integration",
    "Classroom management",
    "Secure deployment options",
    "Export & sharing",
  ],
  testimonials: [
    {
      name: "Sarah Chen",
      role: "Head of Mathematics, St. James School",
      content: "iDma has transformed how we deliver remote tutoring. The dual-board setup means students can see corrections in real-time, which has significantly reduced the time spent re-explaining steps.",
      location: "London, UK",
    },
    {
      name: "Michael Thompson",
      role: "Director, Elite Tutoring Centre",
      content: "The AI summaries feature saves our tutors hours each week. We can focus on teaching rather than note-taking, and parents appreciate the detailed session reports.",
      location: "Manchester, UK",
    },
    {
      name: "Dr. Emma Wilson",
      role: "Corporate Training Manager, TechCorp",
      content: "Our training sessions are now more engaging and effective. The ability to replay lessons and export content has improved knowledge retention across our teams.",
      location: "Birmingham, UK",
    },
  ],
  faqs: [
    {
      question: "What hardware is required for iDma?",
      answer: "iDma works with compatible digital pens and tablets. We provide a list of recommended devices that support real-time handwriting capture. The software runs on Windows, macOS, and select mobile platforms.",
    },
    {
      question: "Can iDma integrate with existing video conferencing tools?",
      answer: "Yes, iDma supports integration with major video platforms including Zoom, Microsoft Teams, and Google Meet. The handwriting layer works seamlessly alongside video calls.",
    },
    {
      question: "Is my data secure with iDma?",
      answer: "Security is a priority. We offer cloud, on-premises, and hybrid deployment options. All data transmission is encrypted, and we comply with GDPR and other regional data protection regulations.",
    },
    {
      question: "How does the dual-board tutoring feature work?",
      answer: "Both teacher and student use iDma devices. The teacher's writing appears on the student's screen in real-time, and vice versa. This enables interactive correction and collaborative problem-solving.",
    },
    {
      question: "What kind of AI summaries does iDma provide?",
      answer: "After each session, iDma can generate summaries of key topics covered, important points discussed, and action items. These summaries are designed to support learning and meeting documentation, not to replace professional note-taking.",
    },
    {
      question: "Do you offer training and support?",
      answer: "Yes, we provide onboarding training, documentation, and ongoing support. Our support team can help with setup, troubleshooting, and best practices for your specific use case.",
    },
  ],
  caseStudies: [
    {
      slug: "st-james-mathematics",
      title: "St. James School Mathematics Department",
      excerpt: "How dual-board tutoring improved student engagement and reduced re-teaching time.",
      outcome: "Reduced time spent re-explaining steps by 40%",
      location: "London, UK",
      type: "School",
    },
    {
      slug: "elite-tutoring-centre",
      title: "Elite Tutoring Centre",
      excerpt: "Scaling 1:1 tutoring sessions with AI-assisted documentation and lesson replay.",
      outcome: "Improved parent satisfaction scores by 35%",
      location: "Manchester, UK",
      type: "Tutoring",
    },
    {
      slug: "techcorp-training",
      title: "TechCorp Corporate Training",
      excerpt: "Enhancing knowledge retention in technical training sessions with replay and export features.",
      outcome: "Increased knowledge retention rates by 28%",
      location: "Birmingham, UK",
      type: "Enterprise",
    },
  ],
  pricing: {
    starter: {
      name: "Starter",
      price: "From £49",
      period: "per month",
      description: "Ideal for individual tutors and small groups",
      features: [
        "Up to 5 concurrent sessions",
        "Basic dual-board functionality",
        "Cloud storage (10GB)",
        "Email support",
        "Standard video integration",
      ],
    },
    school: {
      name: "School",
      price: "From £199",
      period: "per month",
      description: "Designed for schools and tutoring centers",
      features: [
        "Unlimited sessions",
        "Advanced dual-board features",
        "AI summaries",
        "Classroom management",
        "Cloud storage (100GB)",
        "Priority support",
        "Custom branding options",
      ],
    },
    enterprise: {
      name: "Enterprise",
      price: "Contact Sales",
      period: "",
      description: "For large organizations with custom requirements",
      features: [
        "Everything in School plan",
        "On-premises deployment option",
        "Hybrid deployment support",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees",
        "Training and onboarding",
      ],
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
