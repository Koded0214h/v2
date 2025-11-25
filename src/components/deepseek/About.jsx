// pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, ArrowLeft, Phone } from 'lucide-react';
import { experiences, education } from './data/experience';
import KodedPhoto from '../../assets/pfp.jpg';
import { Link } from 'react-router-dom';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiPython, 
  SiFirebase, 
  SiMui,
  SiMongodb,
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiAppwrite,
  SiDjango,
  SiPostman,
  SiDocker,
  SiRender,
  SiCelery,
  SiPostgresql
} from 'react-icons/si';

const About = () => {
  const tools = [

    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },

    // Backend you ACTUALLY use
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Django", icon: SiDjango, color: "#0C4B33" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },   
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    
    // DevOps / Infra
    { name: "Docker", icon: SiDocker, color: "#2496ED" },              
    { name: "Render", icon: SiRender, color: "#ffffff" },             
    { name: "Celery", icon: SiCelery, color: "#37814A" },              
    { name: "Postman", icon: SiPostman, color: "#37814A" },              
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },

    { name: "Appwrite", icon: SiAppwrite, color: "#FD366E" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Material UI", icon: SiMui, color: "#007FFF" },

  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Koded0214h", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/koded0214h?", label: "LinkedIn" },
    { 
      icon: () => (
        <svg 
          className="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: "https://x.com/coder0214h?s=21", 
      label: "X (Twitter)" 
    },
    { icon: MessageCircle, href: "https://wa.me/+2347030057130", label: "WhatsApp" },
    { icon: Mail, href: "mailto:coder0214h@gmail.com", label: "Email" },
  ];
  

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Raufu Abdulrahman</h1>
              <div className="text-2xl text-gray-600 dark:text-gray-400 mb-6">Software Engineer</div>
              
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                I'm Koded — an AI-focused fullstack developer from Nigeria. 
                I build intelligent, scalable systems that combine deep backend engineering 
                with clean, modern user interfaces. My work spans AI automation, SaaS platforms, 
                mobile apps, and high-performance backend APIs using technologies like Django, 
                React, Tailwind, and modern AI frameworks.
                </p>
                <p>
                  Founder of SCAFLD — a visual collaborative backend & workflow automation platform. 
                  I've built platforms like SmartMail AI, SkillBridge, Newsly AI, and several developer 
                  tools and automation systems. I collaborate with startups and teams to architect 
                  backend infrastructure, integrate AI models, and ship reliable, production-ready features.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center"
              >
                <img
                  src={KodedPhoto} // replace with your image path
                  alt="Koded"
                  className="w-48 h-48 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 md:hidden"
        >
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <link.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
            ))}
          </div>
        </motion.section>

        {/* Tools Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)"
                }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ color: tool.color }}
                  >
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <span className="font-medium text-lg">{tool.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)"
                }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-gray-400 text-sm mt-1 sm:mt-0">{exp.period}</span>
                </div>
                <h4 className="text-purple-400 mb-3 font-medium">{exp.company}</h4>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)"
                }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <span className="text-gray-400 text-sm mt-1 sm:mt-0">{edu.period}</span>
                </div>
                <h4 className="text-purple-400 mb-3 font-medium">{edu.degree}</h4>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center py-12 border-t border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-bold mb-6">Got questions?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            I'm always excited to collaborate on innovative and exciting projects!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
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
        </motion.section>
      </div>
    </div>
  );
};

export default About;