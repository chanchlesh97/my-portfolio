// Portfolio Configuration
export const portfolioConfig = {
  personal: {
    name: "Chanchlesh Nagre",
    title: "Senior Engineer - Full Stack Developer",
    subtitle: "Healthcare & Web Solutions Expert",
    bio: "Senior engineer with 5+ years of full-stack development experience. Specialized in Angular, React, Spring Boot, .NET, and healthcare technology. Passionate about building high-performance, scalable applications with focus on user experience and code quality.",
    email: "chanchlesh.dev@gmail.com",
    phone: "+91 7000497967",
    location: "Bangalore, Karnataka",
  },

  hero: {
    badge: "🚀 Senior Developer at Siemens Healthineers ",
    headline: "Chanchlesh Nagre",
    description:
      "5+ years building scalable microservices and healthcare applications. Expert in Java, Spring Boot, ASP.NET Core, and cloud-native technologies. Proven track record of optimizing distributed systems, improving performance, and delivering enterprise-grade solutions.",
    ctaButtons: [
      { text: "View My Work", href: "#projects" },
      { text: "Contact Me", href: "#contact", variant: "secondary" },
    ],
    stats: [
      { number: "1000+", label: "Coding Problems Solved" },
      { number: "5+", label: "Years Experience" },
      { number: "1644", label: "LeetCode Rating" },
    ],
  },

  about: {
    title: "About Me",
    description:
      "I'm a Senior Engineer specializing in 🏗️ distributed systems and 🔗 microservices architecture. With expertise at 🏥 Siemens Healthineers and 💼 TCS, I combine technical excellence with enterprise-grade system design.",
    content:
      "As a Senior Engineer at 🏥 Siemens Healthineers, I've architected and optimized high-performance distributed systems through 📨 async Kafka-based architecture and 💾 strategic Redis caching. I specialize in ☕ Java, 🍃 Spring Boot, 🟦 ASP.NET Core, and cloud technologies including ☁️ Azure, 🐳 Docker, and ☸️ Kubernetes. I've built responsive 🅰️ Angular dashboards with optimal performance, implemented 📡 real-time systems with Server-Sent Events, and delivered enterprise-grade microservices with 🔐 OAuth2 security, comprehensive monitoring, and observability. I'm passionate about writing clean, scalable code and solving complex technical challenges.",
  },

  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Languages",
        skills: [
          "Java (Primary)",
          "Python",
          "JavaScript",
          "TypeScript",
          "C",
          "SQL",
        ],
      },
      {
        name: "Backend & Frameworks",
        skills: ["Spring Boot", "ASP.NET Core", "Node.js", "Express"],
      },
      {
        name: "Frontend",
        skills: ["Angular", "React", "NgRx", "Responsive Design"],
      },
      {
        name: "Databases",
        skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB"],
      },
      {
        name: "API & Protocols",
        skills: ["Kafka", "gRPC", "REST", "SSE", "WebSockets"],
      },
      {
        name: "Cloud & DevOps",
        skills: ["Azure", "Docker", "Kubernetes", "Prometheus", "Git"],
      },
    ],
  },

  projects: {
    title: "Featured Projects",
    items: [
      {
        id: 1,
        title: "CuraLink - Enterprise Microservices Patient Management",
        description:
          "Enterprise-grade microservices system using Spring Boot 3, Java 21, API Gateway, and database-per-service design. Built scalable REST APIs with DTOs, validation, pagination, and Swagger documentation. Implemented Kafka for async workflows and gRPC for low-latency inter-service communication. Enhanced with Redis caching, circuit breaking, JWT/OAuth security, and Prometheus monitoring.",
        tags: [
          "Spring Boot 3",
          "Java 21",
          "Kafka",
          "gRPC",
          "Redis",
          "PostgreSQL",
          "Docker",
          "Prometheus",
        ],
        emoji: "🏥",
        links: [
          { text: "Live", href: "https://curalink.example.com" },
          { text: "GitHub", href: "https://github.com/chanchlesh/curalink" },
        ],
      },
      {
        id: 2,
        title: "CryptoWave - AI-Powered Crypto Trading Platform",
        description:
          "Secure and scalable crypto trading platform with real-time data, AI chatbot using Gemini API, advanced wallet functionality, and two-factor authentication. Implemented smooth buy/sell interface, portfolio management, transaction history, and payment integration with Stripe and Razorpay.",
        tags: [
          "Spring Boot",
          "React",
          "MySQL",
          "Tailwind CSS",
          "Gemini API",
          "Stripe",
        ],
        emoji: "💰",
        links: [
          { text: "Live", href: "https://cryptowave.example.com" },
          { text: "GitHub", href: "https://github.com/chanchlesh/cryptowave" },
        ],
      },
      {
        id: 3,
        title: "Healthcare ATA Platform Backend",
        description:
          "Distributed backend system with ASP.NET Web API and Python microservices connected via Kafka. Achieved 73% reduction in API timeouts through async workload offloading. Implemented Redis caching reducing latency by 64%. Built file processing pipelines with Azure Blob Storage, real-time SSE updates, OAuth2 authentication, and MongoDB persistence.",
        tags: [
          "ASP.NET Core",
          "Python",
          "Kafka",
          "Redis",
          "Azure",
          "MongoDB",
          "OAuth2",
        ],
        emoji: "⚙️",
        links: [
          { text: "Live", href: "https://healthcare-ata.example.com" },
          {
            text: "GitHub",
            href: "https://github.com/chanchlesh/ata-platform",
          },
        ],
      },
      {
        id: 4,
        title: "Angular 18 Responsive Healthcare Dashboard",
        description:
          "High-performance Angular 18 dashboard using NgRx state management, lazy loading, and AOT compilation. Improved load times by 56%. Built with responsive design, sub-500ms query latency through MongoDB optimization, real-time diagnostics with SSE, and comprehensive role-based authorization.",
        tags: [
          "Angular 18",
          "NgRx",
          "TypeScript",
          "Responsive Design",
          "MongoDB",
          "SSE",
        ],
        emoji: "📊",
        links: [
          { text: "Live", href: "https://dashboard.example.com" },
          {
            text: "GitHub",
            href: "https://github.com/chanchlesh/angular-dashboard",
          },
        ],
      },
      {
        id: 5,
        title: "Full-Stack E-Commerce with REST APIs",
        description:
          "Full-stack e-commerce application with React frontend and Java Spring backend. Designed secure RESTful APIs reducing response times by 50%. Incorporated advanced state management and responsive design. Built scalable backend with proper API design patterns, pagination, and filtering.",
        tags: ["React", "Java Spring", "REST API", "PostgreSQL", "JWT"],
        emoji: "🛍️",
        links: [
          { text: "Live", href: "https://ecommerce.example.com" },
          {
            text: "GitHub",
            href: "https://github.com/chanchlesh/ecommerce-platform",
          },
        ],
      },
      {
        id: 6,
        title: "Real-time Diagnostics & Chat System",
        description:
          "Real-time platform integrating .NET Web APIs with Angular frontend for live diagnostics. Leveraged Server-Sent Events (SSE) for assay data streaming with token-aware reconnection logic. Implemented comprehensive monitoring and structured logging for reliability.",
        tags: [".NET Core", "Angular", "SSE", "Real-time", "OAuth2", "Azure"],
        emoji: "💬",
        links: [
          { text: "Live", href: "https://diagnostics.example.com" },
          {
            text: "GitHub",
            href: "https://github.com/chanchlesh/diagnostics-platform",
          },
        ],
      },
    ],
  },

  experience: {
    title: "Work Experience",
    items: [
      {
        id: 1,
        title: "Senior Engineer - Design & Development",
        company: "Siemens Healthineers",
        duration: "Jan 2024 – Present",
        description:
          "Improved ATA backend performance by offloading CPU-intensive workloads to async services connected via Kafka, reducing synchronous API timeouts by 73%. Added Redis caching (cache-aside, TTL-based) for frequently accessed metadata and filters, reducing API latency by 64%. Deployed and operated services on Azure Cloud, integrating structured logging, correlation IDs, monitoring, and failure-isolation patterns to improve system reliability.",
      },
      {
        id: 2,
        title: "Engineer - Design & Development",
        company: "Siemens Healthineers",
        duration: "July 2022 – Dec 2023",
        description:
          "Contributed to developing a distributed backend system with ASP.NET Web API for ATA platform and Python microservices for asynchronous data processing, connected via Kafka. Implemented file upload and processing pipelines using Azure Blob Storage for raw files and Python analytics services for log parsing and aggregation. Persisted processed and user-related data in MongoDB, optimizing queries and avoiding repeated raw-file reads, improving dashboard query latency to sub-500ms.",
      },
      {
        id: 3,
        title: "Associate Software Developer",
        company: "TATA Consultancy Services (TCS)",
        duration: "Sept 2019 – Dec 2020",
        description:
          "Developed and maintained scalable React-based web applications with Java Spring backend, delivering secure REST APIs and reducing API response times by 50%. Redesigned complex React UIs using advanced state management and responsive design, increasing user interaction and reducing bounce rates by 27%.",
      },
    ],
  },

  contact: {
    title: "Let's Connect",
    description:
      "I'm always open to discussing new projects, opportunities, and insights into full-stack development. Feel free to reach out!",
    methods: [
      { type: "Email", value: "chanchlesh.dev@gmail.com", icon: "📧" },
      { type: "Phone", value: "+91 7000497967", icon: "📱" },
      { type: "Location", value: "Bangalore, Karnataka", icon: "📍" },
    ],
  },

  social: [
    {
      name: "GitHub",
      url: "https://github.com/chanchlesh",
      icon: "🐙",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/chanchlesh",
      icon: "💼",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com",
      icon: "💻",
    },
    { name: "Email", url: "mailto:chanchlesh.dev@gmail.com", icon: "✉️" },
  ],
};
