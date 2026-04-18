import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import SectionWrapper, { SectionLabel } from '../ui/SectionWrapper';
import ArchDiagram from '../ui/ArchDiagram';
import { projects } from '../../lib/data/projects';

function ImpactChip({ label, value }) {
  return (
    <div
      className="flex flex-col items-center px-3 py-2 rounded-lg border text-center"
      style={{ borderColor: '#00d9ff22', backgroundColor: '#00d9ff08' }}
    >
      <span
        className="font-mono text-base font-bold"
        style={{ color: '#00d9ff', textShadow: '0 0 10px rgba(0,217,255,0.5)' }}
      >
        {value}
      </span>
      <span className="font-mono text-[10px] mt-0.5 uppercase tracking-wide" style={{ color: '#64748b' }}>
        {label}
      </span>
    </div>
  );
}

function ProjectCard({ project, onShowArch }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className="rounded-xl border flex flex-col h-full transition-all duration-150"
      style={{
        borderColor: '#1e2d3d',
        backgroundColor: '#0f1623',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#00d9ff33';
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,217,255,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#1e2d3d';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="p-5 flex-1">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-lg font-bold" style={{ color: '#e2e8f0' }}>{project.title}</h3>
          <p className="font-mono text-xs" style={{ color: '#00d9ff' }}>{project.subtitle}</p>
        </div>

        {/* Problem */}
        <p className="text-xs mb-4 leading-relaxed" style={{ color: '#64748b' }}>
          <span style={{ color: '#94a3b8', fontWeight: 500 }}>Problem: </span>
          {project.problem}
        </p>

        {/* What I built */}
        <ul className="space-y-1.5 mb-4">
          {project.built.map((b, i) => (
            <li key={i} className="flex gap-2 text-xs leading-relaxed" style={{ color: '#94a3b8' }}>
              <span style={{ color: '#00d9ff', flexShrink: 0 }}>›</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Impact chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.impact.map((m) => (
            <ImpactChip key={m.label} label={m.label} value={m.value} />
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-0.5 rounded border"
              style={{ borderColor: '#1e2d3d', color: '#64748b', backgroundColor: '#1a2332' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer actions */}
      <div className="px-5 py-3 border-t flex items-center gap-3" style={{ borderColor: '#1e2d3d' }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-v4-accent"
          style={{ color: '#64748b' }}
        >
          <Github size={13} />
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-v4-accent"
            style={{ color: '#64748b' }}
          >
            <ExternalLink size={13} />
            Live
          </a>
        )}
        <button
          onClick={() => onShowArch(project)}
          className="ml-auto flex items-center gap-1.5 text-xs font-mono transition-colors hover:text-v4-accent"
          style={{ color: '#00d9ff' }}
        >
          See Architecture ↗
        </button>
      </div>
    </motion.div>
  );
}

function ArchModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-2xl rounded-2xl border overflow-hidden"
        style={{ backgroundColor: '#0f1623', borderColor: '#1e2d3d' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: '#1e2d3d', backgroundColor: '#1a2332' }}
        >
          <div>
            <h3 className="font-semibold" style={{ color: '#e2e8f0' }}>{project.title}</h3>
            <p className="font-mono text-xs" style={{ color: '#64748b' }}>System Architecture</p>
          </div>
          <button
            onClick={onClose}
            className="transition-colors hover:text-v4-text-primary"
            style={{ color: '#64748b' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Diagram */}
        <div className="p-5">
          <ArchDiagram nodes={project.archNodes} title={`${project.title.toLowerCase()}_arch`} />

          {/* Built bullets inside modal */}
          <ul className="mt-5 space-y-2">
            {project.built.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: '#94a3b8' }}>
                <span style={{ color: '#00d9ff', flexShrink: 0 }}>›</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [archProject, setArchProject] = useState(null);

  return (
    <SectionWrapper id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="deployed_systems/" />
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#e2e8f0' }}>
          Featured Projects
        </h2>
        <p className="text-sm mb-10" style={{ color: '#64748b' }}>
          Production systems — real problems, real scale, real impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <ProjectCard project={p} onShowArch={setArchProject} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {archProject && (
          <ArchModal project={archProject} onClose={() => setArchProject(null)} />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
