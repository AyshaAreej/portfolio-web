import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Moon,
  Sun,
  Github,
  Download,
  Star,
} from "lucide-react";

// Enhanced theme hook
function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}

// Data
const skillCategories = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  Frontend: [
    "React.js",
    "Redux",
    "Next.js",
    "React Native",
    "Angular",
    "Material UI",
    "Tailwind CSS",
    "Bootstrap",
  ],
  Backend: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "MongoDB"],
  Tools: ["Git", "Docker", "Swagger", "Postman", "Figma", "Adobe XD", "CI/CD"],
};

const projects = [
  {
    title: "Health Exam Platform (ERP)",
    period: "2024 – 2025",
    description:
      "Comprehensive healthcare ERP with React + Redux dashboards for doctors, staff, and patients with PHI compliance.",
    achievements: [
      "Reduced load times by 30%",
      "Automated claims reduced errors by 30%",
    ],
    tech: ["React", "Redux", "NestJS", "PostgreSQL", "PHI Compliance"],
    links: { live: "#", code: "#" },
    featured: true,
  },
  {
    title: "Fyllup (Fuel Delivery Platform)",
    period: "2023 – 2024",
    description:
      "End-to-end fuel delivery mobile/web platform enabling customers to schedule, track, and pay for on-demand refueling services.",
    achievements: [
      "Improved booking experience with 40% faster checkout",
      "Integrated secure digital payments and order tracking",
      "Developed responsive React Native app for Android/iOS",
    ],
    tech: ["React", "React Native", "NestJS", "PostgreSQL", "Stripe API"],
    links: { live: "#", code: "#" },
    featured: true,
  },
  {
    title: "Real Deal (Property Marketplace)",
    period: "2022 – 2023",
    description:
      "Real estate marketplace for buyers, sellers, and agents with advanced search, property listings, and integrated communication tools.",
    achievements: [
      "Enabled 5,000+ property listings with scalable APIs",
      "Optimized search filters reducing query time by 50%",
      "Enhanced UX with responsive and mobile-first design",
    ],
    tech: ["React", "Redux Toolkit", "Express", "MongoDB", "Mapbox API"],
    links: { live: "#", code: "#" },
    featured: true,
  },
  {
    title: "Instafixit (On-Demand Services)",
    period: "2023 – 2024",
    description:
      "Mobile-first React application for booking and live-tracking services (plumbing, electrical, car repair).",
    achievements: [
      "Scaled to 10K+ active users",
      "Reduced UI crashes by 25%",
      "Reduced booking failures by 25%",
    ],
    tech: ["React", "Redux", "NestJS", "Socket.IO", "Real-time Notifications"],
    links: { live: "#", code: "#" },
    featured: true,
  },

  {
    title: "Wholesale E-Commerce Platform",
    period: "2022 – 2023",
    description:
      "B2B marketplace with bulk purchasing workflows, vendor dashboards, and payment integration.",
    achievements: ["Scaled to 500+ vendors", "Processed $200K+ transactions"],
    tech: ["React", "Stripe", "Node.js", "MongoDB", "Payment Gateway"],
    links: { live: "#", code: "#" },
  },
];

const experiences = [
  {
    company: "Devbox Lahore",
    role: "Software Engineer",
    period: "Aug 2021 – Present",
    projects: [
      "EmployeeHub (HRMS): React.js + Redux dashboards, improved data visualization by 35%",
      "Real Deal Marketplace: Responsive React SPA, reduced load time by 40%",
      "Tractor Online: React marketplace with dynamic filters, increased engagement by 25%",
      "Pulse PMS (POS): React frontend integrated with REST APIs for sales and inventory",
      "Fyllup: Enhanced React dashboards for fuel management, improved retention by 20%",
    ],
  },
  {
    company: "Technercia Sahiwal",
    role: "Trainee Software Engineer",
    period: "Summer 2019 – 2020",
    projects: [
      "Hospital Management System: Built responsive UI with HTML/CSS/JS and Bootstrap",
      "Full-Stack Development: Assisted in frontend and backend tasks across SDLC",
    ],
  },
];

const certifications = [
  "React Development - Udemy",
  "MERN Stack Development - Udemy",
  "Data Science - Johns Hopkins University",
  "JavaScript - UC Davis",
  "Docker & System Design - DEVBOX",
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "experience",
      "projects",
      "skills",
      "certifications",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio-container">
      {/* Embedded Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.6;
          color: #1f2937;
          overflow-x: hidden;
        }

        .portfolio-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          transition: all 0.3s ease;
        }

        .dark .portfolio-container {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          color: #f8fafc;
        }

        /* Navigation Styles */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .dark .navbar {
          background: rgba(15, 23, 42, 0.9);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-link {
          padding: 8px 16px;
          border-radius: 24px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }

        .nav-link:hover {
          background: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
        }

        .nav-link.active {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          color: white;
        }

        .theme-toggle {
          margin-left: 16px;
          padding: 8px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.05);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dark .theme-toggle {
          background: rgba(255, 255, 255, 0.1);
        }

        .theme-toggle:hover {
          transform: scale(1.1);
          background: rgba(139, 92, 246, 0.2);
        }

        .mobile-menu {
          display: none;
          align-items: center;
          gap: 8px;
        }

        .menu-button {
          padding: 8px;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.05);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dark .menu-button {
          background: rgba(255, 255, 255, 0.1);
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          padding: 80px 24px 0;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%);
          animation: gradient-animation 10s ease infinite;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #8b5cf6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-animation 3s ease infinite;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #64748b;
          margin-bottom: 32px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .dark .hero-subtitle {
          color: #94a3b8;
        }

        .hero-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-bottom: 48px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .dark .info-item {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .info-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2);
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-top: 32px;
        }

        .btn-primary {
          padding: 16px 32px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(139, 92, 246, 0.4);
        }

        .btn-secondary {
          padding: 14px 30px;
          background: transparent;
          color: #8b5cf6;
          border: 2px solid #8b5cf6;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .btn-secondary:hover {
          background: #8b5cf6;
          color: white;
          transform: translateY(-2px);
        }

        /* Section Styles */
        .section {
          padding: 80px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          margin-bottom: 64px;
        }

        .section-title h2 {
          font-size: 3rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .dark .section-title h2 {
          color: #f8fafc;
        }

        .section-title .underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* Cards */
        .card {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .dark .card {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(139, 92, 246, 0.15);
        }

        /* Grid Layouts */
        .grid {
          display: grid;
          gap: 24px;
        }

        .grid-2 {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .grid-3 {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        .grid-4 {
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }

        /* Stats */
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 24px;
          margin: 48px 0;
        }

        .stat {
          text-align: center;
          padding: 24px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 16px;
          border: 1px solid rgba(139, 92, 246, 0.2);
          transition: all 0.3s ease;
        }

        .dark .stat {
          background: rgba(255, 255, 255, 0.05);
        }

        .stat:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(139, 92, 246, 0.2);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: #8b5cf6;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #64748b;
        }

        .dark .stat-label {
          color: #94a3b8;
        }

        /* Skills */
        .skill-pill {
          display: inline-block;
          padding: 6px 12px;
          background: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
          border-radius: 20px;
          font-size: 0.875rem;
          margin: 4px;
          transition: all 0.3s ease;
        }

        .skill-pill:hover {
          background: #8b5cf6;
          color: white;
          transform: translateY(-2px);
        }

        /* Timeline */
        .timeline {
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 24px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #8b5cf6, #ec4899);
        }

        .timeline-item {
          position: relative;
          padding-left: 80px;
          margin-bottom: 48px;
        }

        .timeline-dot {
          position: absolute;
          left: 16px;
          top: 24px;
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border-radius: 50%;
          border: 4px solid #ffffff;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }

        .dark .timeline-dot {
          border-color: #0f172a;
        }

        /* Contact Form */
        .form-group {
          margin-bottom: 24px;
        }

        .form-input {
          width: 100%;
          padding: 16px;
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .dark .form-input {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
          color: #f8fafc;
        }

        .form-input:focus {
          outline: none;
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
        }

        /* Footer */
        .footer {
          background: #1f2937;
          color: #f8fafc;
          text-align: center;
          padding: 48px 24px;
        }

        .dark .footer {
          background: #020617;
        }

        /* Animations */
        @keyframes gradient-animation {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu {
            display: flex;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }
          
          .section-title h2 {
            font-size: 2rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-info {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .navbar-content {
            padding: 0 16px;
          }
          
          .hero {
            padding: 80px 16px 0;
          }
          
          .section {
            padding: 60px 16px;
          }
          
          .card {
            padding: 24px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo" onClick={() => scrollToSection("home")}>
            Aysha Areej
          </div>

          <div className="nav-links">
            {[
              "home",
              "about",
              "experience",
              "projects",
              "skills",
              "certifications",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeSection === item ? "active" : ""}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button onClick={toggle} className="theme-toggle">
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="mobile-menu">
            <button onClick={toggle} className="menu-button">
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "16px",
              borderTop: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            className="mobile-menu-dropdown"
          >
            <div className="dark:bg-gray-900/95 dark:border-white/10">
              {[
                "home",
                "about",
                "experience",
                "projects",
                "skills",
                "certifications",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${
                    activeSection === item ? "active" : ""
                  }`}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    margin: "8px 0",
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title animate-float">Aysha Areej</h1>
          <p className="hero-subtitle">
            Frontend-focused{" "}
            <strong style={{ color: "#8b5cf6" }}>Software Engineer</strong>{" "}
            specializing in{" "}
            <strong style={{ color: "#ec4899" }}>React.js</strong> and modern
            web technologies
          </p>

          <div className="hero-info">
            <div className="info-item">
              <MapPin size={20} style={{ color: "#8b5cf6" }} />
              <span>Lahore, Punjab, Pakistan</span>
            </div>
            <div className="info-item">
              <Briefcase size={20} style={{ color: "#ec4899" }} />
              <span>3+ Years Experience</span>
            </div>
          </div>

          <div className="hero-info">
            <a
              href="mailto:ayshaareej71@gmail.com"
              className="info-item"
              style={{ textDecoration: "none" }}
            >
              <Mail size={20} style={{ color: "#3b82f6" }} />
              <span>ayshaareej71@gmail.com</span>
            </a>
            <a
              href="tel:+923374765461"
              className="info-item"
              style={{ textDecoration: "none" }}
            >
              <Phone size={20} style={{ color: "#10b981" }} />
              <span>+92 337 476 5461</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aysha-areej-514a28183/"
              target="_blank"
              rel="noreferrer"
              className="info-item"
              style={{ textDecoration: "none" }}
            >
              <Linkedin size={20} style={{ color: "#0077b5" }} />
              <span>LinkedIn</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection("about")}
              className="btn-primary"
            >
              Explore My Work
              <ChevronRight size={18} />
            </button>
              <a
                href="/Resume.pdf"
                download="Aysha_Areej_Resume.pdf"
                className="btn-secondary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                }}
              >
                <Download size={18} />
                Download CV
              </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="underline"></div>
          <p
            style={{
              marginTop: "16px",
              fontSize: "1.125rem",
              color: "#64748b",
            }}
          >
            Passionate developer crafting digital experiences
          </p>
        </div>

        <div className="grid grid-2" style={{ alignItems: "center" }}>
          <div>
            <p
              style={{
                fontSize: "1.125rem",
                marginBottom: "24px",
                lineHeight: "1.7",
              }}
            >
              With over{" "}
              <strong style={{ color: "#8b5cf6" }}>
                3 years of experience
              </strong>{" "}
              as a Frontend-focused Software Engineer, I specialize in building
              scalable web applications using{" "}
              <strong style={{ color: "#ec4899" }}>React.js</strong>,
              TypeScript, and modern development practices.
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                marginBottom: "32px",
                lineHeight: "1.7",
              }}
            >
              I've delivered projects from healthcare ERP to e-commerce
              platforms, improving performance metrics and user experience. I
              work end-to-end across the lifecycle — from design to deployment.
            </p>

            <div className="stats">
              <div className="stat">
                <Briefcase
                  style={{ margin: "0 auto 8px", color: "#8b5cf6" }}
                  size={32}
                />
                <div className="stat-value">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <Code
                  style={{ margin: "0 auto 8px", color: "#ec4899" }}
                  size={32}
                />
                <div className="stat-value">15+</div>
                <div className="stat-label">Projects Done</div>
              </div>
              <div className="stat">
                <Star
                  style={{ margin: "0 auto 8px", color: "#f59e0b" }}
                  size={32}
                />
                <div className="stat-value">10K+</div>
                <div className="stat-label">Users Served</div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid" style={{ gap: "24px" }}>
              <div
                className="card"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      padding: "12px",
                      background: "rgba(139, 92, 246, 0.2)",
                      borderRadius: "12px",
                    }}
                  >
                    <GraduationCap style={{ color: "#8b5cf6" }} size={24} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        marginBottom: "4px",
                      }}
                    >
                      Education
                    </h3>
                    <p style={{ color: "#8b5cf6", fontWeight: "500" }}>
                      BS Software Engineering
                    </p>
                  </div>
                </div>
                <p style={{ color: "#64748b" }}>COMSATS University Islamabad</p>
                <p style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
                  2017 – 2021
                </p>
              </div>

              <div
                className="card"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1))",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      padding: "12px",
                      background: "rgba(236, 72, 153, 0.2)",
                      borderRadius: "12px",
                    }}
                  >
                    <Code style={{ color: "#ec4899" }} size={24} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        marginBottom: "4px",
                      }}
                    >
                      Expertise
                    </h3>
                    <p style={{ color: "#ec4899", fontWeight: "500" }}>
                      Frontend Development
                    </p>
                  </div>
                </div>
                <p style={{ color: "#64748b" }}>
                  React.js • TypeScript • Redux
                </p>
                <p style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
                  Modern Web Technologies
                </p>
              </div>
            </div>

            <div style={{ marginTop: "32px" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "24px",
                }}
              >
                Key Achievements
              </h3>
              <div style={{ gap: "16px" }}>
                {[
                  "Improved data visualization speed by 35% in HRMS systems",
                  "Reduced application load times by 40% through optimization",
                  "Scaled applications to 10K+ active users",
                  "Processed $200K+ in e-commerce transactions",
                  "Increased user engagement by 25% through UX improvements",
                ].map((achievement, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "start",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                        borderRadius: "50%",
                        marginTop: "8px",
                        flexShrink: 0,
                      }}
                    ></div>
                    <p style={{ color: "#64748b" }}>{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-title">
          <h2>Professional Journey</h2>
          <div className="underline"></div>
          <p
            style={{
              marginTop: "16px",
              fontSize: "1.125rem",
              color: "#64748b",
            }}
          >
            Building impactful solutions across diverse industries
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="card">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginBottom: "24px",
                  }}
                >
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                    {exp.role}
                  </h3>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      color: "#8b5cf6",
                      fontWeight: "600",
                    }}
                  >
                    {exp.company}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 12px",
                      background:
                        "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
                      color: "#8b5cf6",
                      borderRadius: "20px",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      width: "fit-content",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <div style={{ marginBottom: "12px" }}>
                  {exp.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "12px",
                        marginBottom: "12px",
                        padding: "8px",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.background =
                          "rgba(139, 92, 246, 0.05)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.background =
                          "transparent")
                      }
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          background:
                            "linear-gradient(135deg, #8b5cf6, #ec4899)",
                          borderRadius: "50%",
                          marginTop: "10px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <p style={{ color: "#64748b", lineHeight: "1.6" }}>
                        {project}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <div className="underline"></div>
          <p
            style={{
              marginTop: "16px",
              fontSize: "1.125rem",
              color: "#64748b",
            }}
          >
            Showcasing my latest work and achievements
          </p>
        </div>

        <div className="grid grid-2">
          {projects.map((project, index) => (
            <div key={index} className="card" style={{ position: "relative" }}>
              {project.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "4px 8px",
                    background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                    color: "white",
                    borderRadius: "12px",
                    fontSize: "0.75rem",
                    fontWeight: "500",
                  }}
                >
                  <Star size={12} />
                  Featured
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      marginBottom: "8px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
                    {project.period}
                  </p>
                </div>
                <div
                  style={{
                    padding: "8px",
                    background: "rgba(139, 92, 246, 0.1)",
                    borderRadius: "8px",
                  }}
                >
                  <Code style={{ color: "#8b5cf6" }} size={20} />
                </div>
              </div>

              <p
                style={{
                  color: "#64748b",
                  marginBottom: "16px",
                  lineHeight: "1.6",
                }}
              >
                {project.description}
              </p>

              <div style={{ marginBottom: "16px" }}>
                {project.achievements.map((achievement, achIndex) => (
                  <div
                    key={achIndex}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <ChevronRight
                      size={14}
                      style={{ color: "#10b981", flexShrink: 0 }}
                    />
                    <span style={{ fontSize: "0.875rem", color: "#64748b" }}>
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "24px",
                }}
              >
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="skill-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ padding: "8px 16px", fontSize: "0.875rem" }}
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: "6px 14px", fontSize: "0.875rem" }}
                >
                  <Github size={14} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-title">
          <h2>Technical Arsenal</h2>
          <div className="underline"></div>
          <p
            style={{
              marginTop: "16px",
              fontSize: "1.125rem",
              color: "#64748b",
            }}
          >
            Technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-4">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div key={category} className="card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    background:
                      index === 0
                        ? "rgba(139, 92, 246, 0.1)"
                        : index === 1
                        ? "rgba(236, 72, 153, 0.1)"
                        : index === 2
                        ? "rgba(59, 130, 246, 0.1)"
                        : "rgba(16, 185, 129, 0.1)",
                    borderRadius: "8px",
                  }}
                >
                  <Code
                    style={{
                      color:
                        index === 0
                          ? "#8b5cf6"
                          : index === 1
                          ? "#ec4899"
                          : index === 2
                          ? "#3b82f6"
                          : "#10b981",
                    }}
                    size={20}
                  />
                </div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: "600" }}>
                  {category}
                </h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section">
        <div className="section-title">
          <h2>Certifications & Learning</h2>
          <div className="underline"></div>
          <p
            style={{
              marginTop: "16px",
              fontSize: "1.125rem",
              color: "#64748b",
            }}
          >
            Continuous growth and professional development
          </p>
        </div>

        <div className="grid grid-3">
          {certifications.map((cert, index) => (
            <div key={index} className="card">
              <div
                style={{ display: "flex", alignItems: "start", gap: "16px" }}
              >
                <div
                  style={{
                    padding: "12px",
                    background: "rgba(245, 158, 11, 0.1)",
                    borderRadius: "8px",
                    flexShrink: 0,
                  }}
                >
                  <Award style={{ color: "#f59e0b" }} size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    {cert}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        background: "linear-gradient(135deg, #f59e0b, #f97316)",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <span style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
                      Verified Certification
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-title">
          <h2>Let's Connect</h2>
          <div className="underline"></div>
          <p
            style={{
              marginTop: "16px",
              fontSize: "1.125rem",
              color: "#64748b",
            }}
          >
            Ready to start your next project? Let's talk!
          </p>
        </div>

        <div
          className="grid grid-2"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <div className="card">
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "24px",
              }}
            >
              Get in touch
            </h3>

            <div style={{ gap: "20px" }}>
              {[
                {
                  icon: Mail,
                  text: "ayshaareej71@gmail.com",
                  href: "mailto:ayshaareej71@gmail.com",
                  color: "#3b82f6",
                },
                {
                  icon: Phone,
                  text: "+92 337 476 5461",
                  href: "tel:+923374765461",
                  color: "#10b981",
                },
                {
                  icon: Linkedin,
                  text: "LinkedIn Profile",
                  href: "https://www.linkedin.com/in/aysha-areej-514a28183/",
                  color: "#0077b5",
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    color: "inherit",
                    marginBottom: "12px",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.background =
                      "rgba(139, 92, 246, 0.05)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.background = "transparent")
                  }
                >
                  <div
                    style={{
                      padding: "12px",
                      background: "rgba(0, 0, 0, 0.05)",
                      borderRadius: "8px",
                    }}
                  >
                    <contact.icon size={20} style={{ color: contact.color }} />
                  </div>
                  <span style={{ flex: 1, fontWeight: "500" }}>
                    {contact.text}
                  </span>
                  {contact.href.startsWith("http") && (
                    <ExternalLink size={16} style={{ color: "#9ca3af" }} />
                  )}
                </a>
              ))}
            </div>

            <div
              style={{
                marginTop: "24px",
                padding: "16px",
                background:
                  "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))",
                borderRadius: "12px",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#10b981",
                    borderRadius: "50%",
                    animation: "pulse 2s infinite",
                  }}
                ></div>
                <span style={{ color: "#10b981", fontWeight: "600" }}>
                  Available for new projects
                </span>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#059669" }}>
                I'm currently available for freelance work and full-time
                opportunities.
              </p>
            </div>
          </div>

          <div className="card">
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "24px",
              }}
            >
              Send a message
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for your message! I'll get back to you soon.");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="form-input"
                  style={{ resize: "vertical" }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Aysha Areej
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            {[
              {
                icon: Mail,
                href: "mailto:ayshaareej71@gmail.com",
                label: "Email",
              },
              { icon: Phone, href: "tel:+923374765461", label: "Phone" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/aysha-areej-514a28183/",
                label: "LinkedIn",
              },
              { icon: Github, href: "#", label: "GitHub" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                style={{
                  padding: "12px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#f8fafc",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background =
                    "rgba(139, 92, 246, 0.2)";
                  (e.target as HTMLElement).style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background =
                    "rgba(255, 255, 255, 0.1)";
                  (e.target as HTMLElement).style.transform = "scale(1)";
                }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              paddingTop: "24px",
            }}
          >
            <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
              © {new Date().getFullYear()} Aysha Areej. Built with ❤️ using
              React
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
