import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

const TERMINAL_LINES = [
  '> Initializing...',
  '> Hello, I\'m Raufu Abdulrahman (Koded).',
  '> I build things that work at scale.',
  '> Software Engineer | Backend · Web3 · AI Systems',
  '> Python · Go · Rust · Solidity · AWS',
];

function useTypewriter(lines, charDelay = 38, lineDelay = 380) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (lineIndex >= lines.length) { setDone(true); return; }

    const line = lines[lineIndex];

    if (charIndex < line.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          if (next.length <= lineIndex) next.push('');
          next[lineIndex] = line.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex((c) => c + 1);
      }, charDelay);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, lineDelay);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex, done, lines, charDelay, lineDelay]);

  return { displayed, done };
}

export default function Hero() {
  const { displayed, done } = useTypewriter(TERMINAL_LINES);

  const scrollToNext = () => {
    const el = document.querySelector('#journey');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Dot grid */}
      <div className="v4-dot-grid absolute inset-0 pointer-events-none" />
      {/* Diagonal data-flow lines */}
      <div className="v4-hero-lines absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        {/* Tag line above terminal */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-widest uppercase mb-6 text-center"
          style={{ color: '#64748b' }}
        >
          &gt; portfolio v4 — 2026
        </motion.p>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl overflow-hidden border accent-glow"
          style={{ borderColor: '#1e2d3d', backgroundColor: '#0f1623' }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ backgroundColor: '#1a2332', borderColor: '#1e2d3d' }}
          >
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ef4444' }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#22c55e' }} />
            <span className="ml-auto font-mono text-xs" style={{ color: '#64748b' }}>
              koded@terminal ~ %
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-4 sm:p-6 min-h-[220px] font-mono text-[11px] sm:text-sm leading-6 sm:leading-7">
            {displayed.map((line, i) => {
              const isFirst = i === 0;
              const isLast = i === displayed.length - 1;
              return (
                <div key={i} style={{ color: isFirst ? '#64748b' : '#00d9ff' }}>
                  {line}
                  {isLast && !done && (
                    <span className="cursor-blink ml-0.5" style={{ color: '#00d9ff' }}>█</span>
                  )}
                </div>
              );
            })}
            {done && (
              <span className="cursor-blink" style={{ color: '#00d9ff' }}>█</span>
            )}
          </div>
        </motion.div>

        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-4 flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-full border w-fit"
          style={{
            borderColor: '#1e2d3d',
            color: '#00d9ff',
            backgroundColor: '#0a1a240a',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-v4-success animate-pulse" />
          Powering Skurel FraudMonit
          <span style={{ color: '#1e2d3d' }}>·</span>
          99.9% uptime
          <span style={{ color: '#1e2d3d' }}>·</span>
          1M+ signals/month
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-6 flex items-center gap-3"
        >
          <button
            onClick={scrollToNext}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-medium transition-all duration-150 hover:border-v4-accent hover:text-v4-accent"
            style={{ borderColor: '#1e2d3d', color: '#e2e8f0' }}
          >
            Explore My Systems
            <ArrowDown size={14} />
          </button>
          <a
            href="/resume-raufu-abdulrahman.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 hover:opacity-85"
            style={{ backgroundColor: '#00d9ff', color: '#000000' }}
          >
            <Download size={14} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#1e2d3d' }}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}



// for teh hero seciton, on mobile make teh textx smaller so tehy dont slip into the next line, and teh two CTA buttons should be side by side on mobile


// claude --resume 2eac99fe-9e9d-4502-aa1d-f3aef0e9a97c