// pages/Home.js
import React, {useState, useEffect} from 'react';
import { motion ,AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Mail, Phone, MapPin } from 'lucide-react';
import { projects } from './data/projects';

// Cycling Text Component
const CyclingText = ({ texts, className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [texts.length]);
  
    return (
      <div className={`relative h-12 ${className}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {texts[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

const Home = () => {
    const roles = [
        "AI Engineer",
        "Fullstack Developer", 
        "Platform Builder",
        "Mobile Developer",
        "Automation Engineer",
        "Systems Thinker"
      ];

      const featuredProjects = projects.slice(0, 3);


      const testimonials = [
        {
          name: "Anselm I.",
          role: "Founder, Search Labs",
          text: "Koded is one of the most driven young engineers I’ve ever worked with. He takes full ownership of projects, learns fast, and consistently delivers solutions far beyond what was expected."
        },
        {
          name: "Adejoke J.",
          role: "Tutor, Rubies Technology",
          text: "Working with Koded has been incredible. He built our entire backend and AI system with speed and clarity, always keeping the bigger picture in mind. Reliable, proactive, and truly world-class."
        },
        {
          name: "Abdulbasit F.",
          role: "Product Designer",
          text: "What stands out about Koded is his ability to translate ideas into fully functional products in record time. His attention to detail and problem-solving skills are exceptional."
        },
      ];
      

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            Hello! I'm <span className="text-black dark:text-white">Koded</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl mb-4 text-gray-600 dark:text-gray-400"
          >
            <CyclingText texts={roles} className="text-purple-500 font-semibold" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-500 dark:text-gray-500 mb-8 flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Lagos.
        </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I build intelligent, scalable systems from AI-powered platforms to production-ready SaaS tools.
            My work combines deep backend engineering, practical AI integration, and clean, modern frontend experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Contact Me
            </button>
          </motion.div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 group-hover:scale-105">
                  <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      Project Image
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.techStack.slice(0, 3).map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-md"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-3">
                      <a
                        href={project.links.demo}
                        className="flex items-center gap-1 text-xs hover:opacity-70 transition-opacity"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                      <a
                        href={project.links.code}
                        className="flex items-center gap-1 text-xs hover:opacity-70 transition-opacity"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What clients say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white/5 backdrop-blur-sm dark:bg-gray-800/50 hover:bg-white/10 dark:hover:bg-gray-800/70 transition-all duration-300"
              >
                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Got questions?</h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            I'm always excited to collaborate on innovative and exciting projects!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <h3 className="font-bold">Email</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">coder0214h@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <h3 className="font-bold">Phone</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">+234 703 005 7130</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;