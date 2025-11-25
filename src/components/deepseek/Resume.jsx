// pages/Resume.js
import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, ArrowLeft } from "lucide-react";
import KodedPhoto from '../../assets/pfp.jpg';
import { Link } from "react-router-dom";

const projects = [
  { name: "Rapid Scaffolder", tech: "Django, React", desc: "Instantly generate full backend & APIs." },
  { name: "SmartMail AI", tech: "Django, AI", desc: "Gmail AI assistant for smart replies & calendar sync." },
  { name: "Newsly AI", tech: "Django, React", desc: "Personalized news digest with automated insights." },
];

const skills = [
  "Django", "React", "Tailwind", "AI/ML"
];

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume-raufu-abdulrahman.pdf";
    link.download = "Raufu_Abdulrahman_Resume.pdf";
    link.click();
  };

  const handleView = () => {
    window.open("/resume-raufu-abdulrahman.pdf", "_blank");
  };

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

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex flex-col lg:flex-row items-center gap-8 mb-12"
        >
          {/* Image */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-800 dark:border-gray-200 shadow-lg">
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <img
                  src={KodedPhoto} // replace with your image path
                  alt="Koded"
                  className="w-48 h-48 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
                />
            </div>
          </div>

          {/* Info */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
              Raufu Abdulrahman
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              AI-focused Fullstack Engineer | Backend & Automation Expert
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl">
              Building intelligent, scalable platforms that combine AI, modern backend systems, and sleek frontend experiences.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Download className="w-5 h-5" /> Download Resume
              </button>
              <button
                onClick={handleView}
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" /> View Full Resume
              </button>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full mb-12"
        >
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-white/10 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full mb-12"
        >
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Highlighted Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="font-bold text-black dark:text-white mb-2 text-lg">{project.name}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400 mb-3 inline-block">{project.tech}</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full mb-12"
        >
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Hackathon & Leadership Highlights</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <ul className="space-y-3">
              <li className="text-gray-600 dark:text-gray-400 flex items-center gap-3">
                <span className="w-2 h-2 bg-black dark:bg-white rounded-full flex-shrink-0"></span>
                Led 3 MVPs & 2 regional hackathon wins
              </li>
              <li className="text-gray-600 dark:text-gray-400 flex items-center gap-3">
                <span className="w-2 h-2 bg-black dark:bg-white rounded-full flex-shrink-0"></span>
                Backend tutor mentoring emerging tech talents
              </li>
              <li className="text-gray-600 dark:text-gray-400 flex items-center gap-3">
                <span className="w-2 h-2 bg-black dark:bg-white rounded-full flex-shrink-0"></span>
                Built AI-powered SaaS & automation platforms
              </li>
              <li className="text-gray-600 dark:text-gray-400 flex items-center gap-3">
                <span className="w-2 h-2 bg-black dark:bg-white rounded-full flex-shrink-0"></span>
                Organized hackathons for 70+ participants
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12 border-t border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">Got questions?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            I'm always excited to collaborate on innovative and exciting projects!
          </p>

          <div className="flex justify-center">
            <a
              href="mailto:coder0214h@gmail.com"
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Resume;