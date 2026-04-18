import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { SectionLabel } from '../ui/SectionWrapper';
import ArchDiagram from '../ui/ArchDiagram';
import { experiences } from '../../lib/data/experience';

function MetricChip({ label, value, color = '#00d9ff' }) {
  return (
    <div
      className="flex flex-col items-center px-4 py-3 rounded-lg border text-center"
      style={{ borderColor: `${color}33`, backgroundColor: `${color}08` }}
    >
      <span className="font-mono text-lg font-bold" style={{ color, textShadow: `0 0 12px ${color}66` }}>
        {value}
      </span>
      <span className="font-mono text-[10px] mt-0.5 uppercase tracking-wide" style={{ color: '#64748b' }}>
        {label}
      </span>
    </div>
  );
}

function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl border overflow-hidden transition-all duration-150"
      style={{
        borderColor: open ? '#00d9ff33' : '#1e2d3d',
        backgroundColor: '#0f1623',
      }}
    >
      {/* Collapsed header */}
      <button
        className="w-full text-left p-5 flex items-start gap-4"
        onClick={() => setOpen((o) => !o)}
      >
        {/* Logo */}
        <div
          className="w-10 h-10 rounded-lg border flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5"
          style={{ borderColor: '#1e2d3d', backgroundColor: '#1a2332', color: '#00d9ff' }}
        >
          {exp.logo}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="font-semibold" style={{ color: '#e2e8f0' }}>{exp.company}</h3>
              <p className="text-sm" style={{ color: '#64748b' }}>
                {exp.role}
                <span
                  className="ml-2 font-mono text-[10px] px-1.5 py-0.5 rounded border"
                  style={{ borderColor: '#1e2d3d', color: '#64748b' }}
                >
                  {exp.type}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs" style={{ color: '#64748b' }}>{exp.period}</span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-xs"
                style={{ color: '#64748b' }}
              >
                ↓
              </motion.span>
            </div>
          </div>

          <p className="text-sm mt-1.5" style={{ color: '#94a3b8' }}>{exp.oneliner}</p>

          {/* Tech tags (always visible) */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2 py-0.5 rounded border"
                style={{ borderColor: '#1e2d3d', color: '#64748b', backgroundColor: '#1a2332' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </button>

      {/* Expanded details */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div
              className="px-5 pb-5 border-t"
              style={{ borderColor: '#1e2d3d' }}
            >
              {/* Achievements */}
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((a, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 text-sm"
                    style={{ color: '#94a3b8' }}
                  >
                    <span style={{ color: '#00d9ff', flexShrink: 0, marginTop: 2 }}>›</span>
                    {a}
                  </motion.li>
                ))}
              </ul>

              {/* Metrics */}
              {exp.metrics.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-5">
                  {exp.metrics.map((m) => (
                    <MetricChip key={m.label} label={m.label} value={m.value} color={m.color} />
                  ))}
                </div>
              )}

              {/* Architecture diagram */}
              {exp.archNodes?.length > 0 && (
                <div className="mt-5">
                  <ArchDiagram nodes={exp.archNodes} title="system architecture" />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionLabel text="systems_i_built.sh" />
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#e2e8f0' }}>
          Experience
        </h2>
        <p className="text-sm mb-10" style={{ color: '#64748b' }}>
          Click any card to expand the full story, metrics, and architecture.
        </p>

        <div className="flex flex-col gap-3">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
