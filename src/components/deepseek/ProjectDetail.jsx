// pages/ProjectDetail.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github, Mail, Phone } from 'lucide-react';
import { projects } from './data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back to List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to List
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-gray-400 text-sm mb-2">Duration</h3>
              <p className="text-xl font-semibold">{project.duration}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-gray-400 text-sm mb-2">Service</h3>
              <p className="text-xl font-semibold">{project.service}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-gray-400 text-sm mb-2">Client</h3>
              <p className="text-xl font-semibold">{project.client}</p>
            </div>
          </div>

          {/* Live Preview Button */}
          <div className="flex gap-4">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live Preview
            </a>
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          </div>
        </motion.div>

        {/* Project Images */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Project Images</h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl h-96 overflow-hidden">
            {/* Image placeholder - replace with actual images */}
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />

            
            {/* Image Navigation */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === currentImageIndex ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                  {currentImageIndex + 1}/{project.images.length}
                </div>
              </>
            )}
          </div>
        </motion.section>

        {/* About the Project */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">About the Project</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.about}
          </p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Technical Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Technical Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-600 dark:text-gray-400"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Project Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-gray-400 text-sm mb-2">Duration</h3>
              <p className="text-lg font-semibold">{project.duration}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-gray-400 text-sm mb-2">Team Size</h3>
              <p className="text-lg font-semibold">{project.teamSize}</p>
            </div>
          </div>
        </motion.section>

        {/* Project Outcomes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Project Outcomes</h2>
          <ul className="space-y-3">
            {project.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">{outcome}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
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

export default ProjectDetail;