import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, MessageCircle, Moon, Sun, ExternalLink, ChevronLeft, ChevronRight, Code, Briefcase, Award, MessageSquare, Send } from 'lucide-react';

// Shuffle Text Component
const ShuffleText = ({ texts, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(texts[0]);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShuffling(true);
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let iterations = 0;
      const targetText = texts[(currentIndex + 1) % texts.length];
      
      const shuffleInterval = setInterval(() => {
        setDisplayText(prev => 
          targetText.split('').map((char, idx) => {
            if (idx < iterations) return targetText[idx];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('')
        );
        
        iterations += 1/3;
        
        if (iterations >= targetText.length) {
          clearInterval(shuffleInterval);
          setDisplayText(targetText);
          setCurrentIndex((currentIndex + 1) % texts.length);
          setIsShuffling(false);
        }
      }, 30);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, texts]);

  return <span className={className}>{displayText}</span>;
};

// Click Spark Component
const ClickSpark = ({ children, color = "rgb(139, 92, 246)" }) => {
  const [sparks, setSparks] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newSparks = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: (i * 45) * (Math.PI / 180)
    }));
    
    setSparks(prev => [...prev, ...newSparks]);
    setTimeout(() => setSparks(prev => prev.filter(s => !newSparks.find(ns => ns.id === s.id))), 600);
  };

  return (
    <div className="relative inline-block" onClick={handleClick}>
      {children}
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            left: spark.x,
            top: spark.y,
            background: color,
            animation: 'spark 0.6s ease-out forwards',
            transform: `rotate(${spark.angle}rad)`
          }}
        />
      ))}
      <style>{`
        @keyframes spark {
          to {
            transform: translateX(30px) rotate(${Math.random() * 360}deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

// Star Border Button
const StarBorderButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 font-medium text-white transition-all duration-300 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg overflow-hidden group ${className}`}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
      <span className="relative flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          animation: 'shimmer 2s infinite'
        }}
      ></div>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </button>
  );
};

// Dock Navigation
const Dock = ({ darkMode, toggleDarkMode }) => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-2xl">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 group relative"
          >
            <link.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {link.label}
            </span>
          </a>
        ))}
        <div className="w-px h-8 bg-white/20 mx-2"></div>
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110"
        >
          {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
        </button>
      </div>
    </div>
  );
};

// Project Card with Carousel
const ProjectCard = ({ project, isHovered, onHover, onLeave }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div
      className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 ${
        isHovered ? 'scale-105 shadow-2xl shadow-purple-500/20' : 'hover:border-purple-500/50'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative h-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
          {project.images[currentImage]}
        </div>
        {isHovered && project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-all z-10"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {project.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImage ? 'bg-white w-4' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {isHovered && (
          <div className="space-y-3 animate-fadeIn">
            <p className="text-gray-300 text-sm">{project.fullDescription}</p>
            <div className="flex gap-2">
              <StarBorderButton className="flex-1 text-sm py-2">
                <ExternalLink className="w-4 h-4" />
                Demo
              </StarBorderButton>
              <StarBorderButton className="flex-1 text-sm py-2">
                <Github className="w-4 h-4" />
                Code
              </StarBorderButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main App Component
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);

  const roles = [
    "AI Engineer",
    "Fullstack Developer",
    "Platform Builder",
    "Mobile Developer",
    "Automation Engineer",
    "Systems Thinker"
  ];

  const skills = {
    Frontend: ["React", "TailwindCSS", "Next.js", "React Native"],
    Backend: ["Django", "DRF", "PostgreSQL", "FastAPI"],
    "AI/LLMs": ["LangChain", "OpenAI API", "NLP", "RAG"],
    Tools: ["Git", "Docker", "Render", "Vercel"],
    Cloud: ["Supabase", "Firebase", "AWS"]
  };

  const projects = [
    {
      title: "SkillBridge",
      description: "AI-powered learning platform connecting mentors and learners",
      fullDescription: "Problem: Fragmented learning resources. Solution: Unified AI-driven platform. Impact: 10k+ active users. Stack: React, Django, OpenAI API",
      tags: ["React", "Django", "AI", "PostgreSQL"],
      images: ["🎓", "📚", "🤖"]
    },
    {
      title: "SmartMail AI",
      description: "Intelligent email assistant with natural language processing",
      fullDescription: "Problem: Email overload. Solution: AI categorization and smart responses. Impact: 70% time saved. Stack: React Native, LangChain, FastAPI",
      tags: ["React Native", "LangChain", "NLP"],
      images: ["📧", "🧠", "⚡"]
    },
    {
      title: "Newsly AI",
      description: "Personalized news aggregator with sentiment analysis",
      fullDescription: "Problem: Information overload. Solution: AI-curated news feed. Impact: 5k+ daily users. Stack: Next.js, Django, OpenAI",
      tags: ["Next.js", "Django", "AI", "NLP"],
      images: ["📰", "🤖", "📊"]
    },
    {
      title: "MediPal",
      description: "Healthcare companion app with symptom checker",
      fullDescription: "Problem: Limited healthcare access. Solution: AI symptom analysis. Impact: 15k+ consultations. Stack: React Native, Firebase, AI",
      tags: ["React Native", "Firebase", "Healthcare"],
      images: ["🏥", "💊", "📱"]
    },
    {
      title: "Greenly",
      description: "Sustainability tracker for carbon footprint reduction",
      fullDescription: "Problem: Climate awareness. Solution: Gamified tracking. Impact: 8k+ active users. Stack: React, Supabase, Analytics",
      tags: ["React", "Supabase", "Analytics"],
      images: ["🌱", "♻️", "🌍"]
    },
    {
      title: "Drop Zone",
      description: "Real-time collaboration workspace for teams",
      fullDescription: "Problem: Scattered team tools. Solution: Unified workspace. Impact: 3k+ teams. Stack: React, WebSocket, PostgreSQL",
      tags: ["React", "WebSocket", "Real-time"],
      images: ["🚀", "👥", "💼"]
    }
  ];

  const experiences = [
    {
      role: "Senior Fullstack Engineer",
      company: "Tech Innovations Inc.",
      period: "2023 - Present",
      description: "Led development of AI-powered SaaS platforms, managing a team of 5 engineers."
    },
    {
      role: "AI Engineer",
      company: "DataCorp Solutions",
      period: "2021 - 2023",
      description: "Built NLP models and integrated LLM APIs for enterprise clients."
    },
    {
      role: "Mobile Developer",
      company: "AppWorks Studio",
      period: "2020 - 2021",
      description: "Developed cross-platform mobile apps with React Native."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      text: "Working with this developer was a game-changer. The AI solutions delivered exceeded all expectations."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      text: "Incredible technical skills and communication. The platform built has transformed our business."
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "InnovateLabs",
      text: "One of the best developers I've worked with. Fast, efficient, and always delivers quality."
    }
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Dock darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            Hi, I'm Koded.
          </h1>
          
          <div className="text-2xl md:text-4xl mb-4 text-gray-300 font-light">
            I'm a <ShuffleText texts={roles} className="text-purple-400 font-semibold" />
          </div>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I build intelligent, fast, and scalable apps that solve real problems.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <ClickSpark>
              <StarBorderButton onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                <Code className="w-5 h-5" />
                View Projects
              </StarBorderButton>
            </ClickSpark>
            <ClickSpark>
              <StarBorderButton onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                <Send className="w-5 h-5" />
                Contact Me
              </StarBorderButton>
            </ClickSpark>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
            <div className="relative z-10">
              <p className="text-lg text-gray-300 mb-4">
                I'm a developer who loves building intelligent systems that make a difference.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                My passion lies in creating AI-powered platforms, fullstack applications, and mobile experiences that are both beautiful and functional.
              </p>
              <p className="text-lg text-gray-300">
                My mission: Bridge the gap between cutting-edge AI technology and real-world user needs, one project at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Stack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Briefcase className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-purple-400 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                isHovered={hoveredProject === idx}
                onHover={() => setHoveredProject(idx)}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Testimonials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-purple-400">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Build Something Together
          </h2>
          
          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind? I'd love to hear about it.
          </p>

          <ClickSpark>
            <StarBorderButton>
              <Mail className="w-5 h-5" />
              your.email@example.com
            </StarBorderButton>
          </ClickSpark>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10">
        <p>© 2025 Koded. Built with React & TailwindCSS</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}