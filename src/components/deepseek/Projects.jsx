// pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from './data/projects';

const Projects = () => {

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

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Explore modern web experiences that turn bold ideas into fast, functional, and responsive products.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="h-48 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                {project.images && project.images.length > 0 ? (
                  <img
                    src={project.images[0]}
                    alt="Project Image"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <div className="text-4xl opacity-20">🚀</div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <span className="inline-block px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <Link 
                    to={`/projects/${project.id}`}
                    className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity group"
                >
                <button className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity group">
                  More Details 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center py-12 border-t border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-bold mb-6">Got questions?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative and exciting projects!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">coder0214h@gmail.com</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400">+234 703 005 7130</p>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity">
              Contact Me
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Projects;