import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionWrapper({ children, id, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionLabel({ text }) {
  return (
    <p
      className="font-mono text-xs font-medium tracking-widest uppercase mb-6"
      style={{ color: '#00d9ff' }}
    >
      <span style={{ opacity: 0.6 }}>&gt; </span>{text}
    </p>
  );
}
