import { motion } from 'framer-motion';

const NODE_COLORS = {
  client:  { border: '#1e2d3d', text: '#e2e8f0',  bg: '#0f1623' },
  service: { border: '#00d9ff', text: '#00d9ff',  bg: '#0a1e2e' },
  db:      { border: '#22c55e', text: '#22c55e',  bg: '#0a1e16' },
  queue:   { border: '#f59e0b', text: '#f59e0b',  bg: '#1e1500' },
  cloud:   { border: '#8b5cf6', text: '#8b5cf6',  bg: '#150e2a' },
};

function ArchNode({ node, index }) {
  const c = NODE_COLORS[node.type] || NODE_COLORS.service;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.35 }}
      className="flex flex-col items-center gap-1.5 flex-shrink-0"
    >
      <div
        className="px-3 py-2 rounded-lg text-xs font-mono font-medium text-center border"
        style={{
          borderColor: c.border,
          color: c.text,
          backgroundColor: c.bg,
          minWidth: '100px',
          boxShadow: `0 0 8px ${c.border}22`,
        }}
      >
        {node.label}
      </div>
      <span
        className="text-[9px] font-mono uppercase tracking-widest"
        style={{ color: '#64748b' }}
      >
        {node.type}
      </span>
    </motion.div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center flex-shrink-0 pb-5">
      <div className="h-px w-6" style={{ backgroundColor: '#1e2d3d' }} />
      <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
        <path d="M0 0L6 4L0 8V0Z" fill="#1e2d3d" />
      </svg>
    </div>
  );
}

export default function ArchDiagram({ nodes = [], title = 'Architecture' }) {
  return (
    <div
      className="rounded-xl p-5 border"
      style={{ backgroundColor: '#0a1117', borderColor: '#1e2d3d' }}
    >
      <p className="font-mono text-[10px] uppercase tracking-widest mb-4" style={{ color: '#64748b' }}>
        &gt; {title}
      </p>
      <div className="flex flex-wrap items-start gap-y-4 gap-x-0 overflow-x-auto">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex items-center">
            <ArchNode node={node} index={i} />
            {i < nodes.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        {Object.entries(NODE_COLORS).map(([type, c]) => (
          <div key={type} className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: c.border }} />
            <span className="text-[10px] font-mono" style={{ color: '#64748b' }}>{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
