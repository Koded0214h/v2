import { motion } from 'framer-motion';
import SectionWrapper, { SectionLabel } from '../ui/SectionWrapper';
import { stackCategories } from '../../lib/data/stack';

const CATEGORY_ACCENTS = {
  'Backend':           '#00d9ff',
  'AI / Agents':       '#8b5cf6',
  'Real-time & Data':  '#f59e0b',
  'Cloud & Infra':     '#22c55e',
};

function TechChip({ name, accent }) {
  return (
    <span
      className="tech-chip font-mono text-xs px-3 py-1.5 rounded-lg border"
      style={{
        borderColor: '#1e2d3d',
        color: '#94a3b8',
        backgroundColor: '#0f1623',
      }}
    >
      {name}
    </span>
  );
}

export default function TechStack() {
  return (
    <SectionWrapper id="stack" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="tech_stack.json" />
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#e2e8f0' }}>
          Tools & Systems
        </h2>
        <p className="text-sm mb-12" style={{ color: '#64748b' }}>
          The tools I reach for when building at scale.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((cat, ci) => {
            const accent = CATEGORY_ACCENTS[cat.label] || '#00d9ff';
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: ci * 0.08, duration: 0.5 }}
                className="rounded-xl border p-5"
                style={{ borderColor: '#1e2d3d', backgroundColor: '#0f1623' }}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: accent }}
                  />
                  <h3
                    className="font-mono text-xs font-semibold uppercase tracking-widest"
                    style={{ color: accent }}
                  >
                    {cat.label}
                  </h3>
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-4"
                  style={{ background: `linear-gradient(to right, ${accent}44, transparent)` }}
                />

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <TechChip key={item} name={item} accent={accent} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
