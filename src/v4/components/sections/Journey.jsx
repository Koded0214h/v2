import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pfpImage from '../../../assets/pfp.jpg'; // Import the profile picture
import {
  Terminal,
  GraduationCap,
  Zap,
  Link2,
  Bot,
  Building2,
  Rocket,
} from 'lucide-react';
import SectionWrapper, { SectionLabel } from '../ui/SectionWrapper';
import { journeyMilestones } from '../../lib/data/journey';

/* ─── Planet visual config ─────────────────────────────────────── */
const PLANET = {
  'first-script':    { icon: Terminal,      light: '#22c55e', dark: '#0a2a12', mid: '#14532d' },
  'chose-cs':        { icon: GraduationCap, light: '#60a5fa', dark: '#0a1433', mid: '#1e3a6e' },
  'first-real-code': { icon: Zap,           light: '#a78bfa', dark: '#160a33', mid: '#3b1a6e' },
  'went-web3':       { icon: Link2,         light: '#fbbf24', dark: '#2a1400', mid: '#78350f' },
  'ai-systems':      { icon: Bot,           light: '#c084fc', dark: '#1a0a2a', mid: '#4c1d95' },
  'full-time':       { icon: Building2,     light: '#00d9ff', dark: '#001a2a', mid: '#0e3a50' },
  'builder-mode':    { icon: Rocket,        light: '#f87171', dark: '#2a0000', mid: '#7f1d1d' },
  'koded':           { icon: Terminal,      light: '#00d9ff', dark: '#001a2a', mid: '#0e3a50' }, // Added koded config
};

/* Inner orbit holds the earlier era, outer holds the recent era */
const INNER_IDS = ['first-script', 'chose-cs', 'first-real-code'];
const OUTER_IDS = ['went-web3', 'ai-systems', 'full-time', 'builder-mode'];

/* ─── Responsive radii ─────────────────────────────────────────── */
function useOrbits() {
  const [r, setR] = useState({ inner: 120, outer: 200 });
  useEffect(() => {
    const upd = () =>
      setR(
        window.innerWidth < 640
          ? { inner: 92,  outer: 155 }
          : { inner: 120, outer: 200 }
      );
    upd();
    window.addEventListener('resize', upd);
    return () => window.removeEventListener('resize', upd);
  }, []);
  return r;
}

/* ─── Orbit ring component ─────────────────────────────────────── */
function OrbitRing({ radius, color }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width:  radius * 2,
        height: radius * 2,
        left:  `calc(50% - ${radius}px)`,
        top:   `calc(50% - ${radius}px)`,
        border: `1px dashed ${color}`,
        boxShadow: `0 0 ${radius / 3}px ${color}18`,
      }}
    />
  );
}

/* ─── Planet node ──────────────────────────────────────────────── */
function Planet({ milestone, x, y, isActive, onEnter, onLeave, onClick }) {
  const cfg  = PLANET[milestone.id];
  const Icon = cfg.icon;

  return (
    <div
      className="absolute"
      style={{
        left: '50%',
        top:  '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        zIndex: isActive ? 20 : 10,
      }}
    >
      <motion.button
        animate={{ scale: isActive ? 1.22 : 1 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={onClick}
        className="relative flex items-center justify-center rounded-full"
        style={{
          width:  52,
          height: 52,
          background: `radial-gradient(circle at 35% 30%, ${cfg.light}50 0%, ${cfg.dark} 65%)`,
          border: `1.5px solid ${isActive ? cfg.light : cfg.light + '55'}`,
          boxShadow: isActive
            ? `0 0 22px ${cfg.light}66, 0 0 44px ${cfg.light}22, inset 0 0 14px ${cfg.light}18`
            : `0 0 10px ${cfg.light}33, inset 0 0 8px ${cfg.light}0a`,
          outline: 'none',
        }}
      >
        <Icon
          size={19}
          style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.75)', flexShrink: 0 }}
        />
      </motion.button>

      {/* Year label beneath planet */}
      <p
        className="absolute w-full text-center font-mono pointer-events-none"
        style={{
          top: 56,
          fontSize: '9px',
          letterSpacing: '0.06em',
          color: isActive ? cfg.light : '#4b5563',
          transition: 'color 0.15s',
          whiteSpace: 'nowrap',
        }}
      >
        {milestone.year}
      </p>
    </div>
  );
}

/* ─── Detail panel (right side) ────────────────────────────────── */
function MilestoneImage({ milestone }) {
  const [loaded, setLoaded]  = useState(false);
  const [errored, setErrored] = useState(false);
  const cfg = PLANET[milestone.id];

  // Determine the image source based on milestone.id
  const imgSrc = milestone.id === 'koded' ? pfpImage : `/journey/${milestone.id}.jpg`;

  // Reset states when milestone changes
  useEffect(() => {
    setLoaded(false);
    setErrored(false);
  }, [milestone.id]);

  return (
    <div
      className="w-full h-44 rounded-xl overflow-hidden relative flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${cfg.dark}, ${cfg.mid})`,
        border: `1px solid ${cfg.light}22`,
      }}
    >
      {/* Real image — drop at /public/journey/{milestone.id}.jpg */}
      {!errored && (
        <img
          src={imgSrc}
          key={milestone.id}
          alt={milestone.label}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={() => setLoaded(true)}
          onError={() => {
            console.error(`Failed to load image: ${imgSrc}`);
            setErrored(true);
          }}
        />
      )}

      {/* Gradient fallback / loading */}
      {(!loaded || errored) && (
        <div className="relative z-10 flex flex-col items-center gap-3">
          {(() => { const Icon = PLANET[milestone.id].icon; return <Icon size={36} style={{ color: cfg.light, opacity: 0.85 }} />; })()}
          <span
            className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full"
            style={{ color: cfg.light, backgroundColor: `${cfg.light}14`, border: `1px solid ${cfg.light}33` }}
          >
            {milestone.year}
          </span>
        </div>
      )}

      {loaded && !errored && (
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
      )}
    </div>
  );
}

function DetailPanel({ milestone, onClose }) {
  const cfg = PLANET[milestone.id];
  return (
    <motion.div
      key={milestone.id}
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 14 }}
      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: `${cfg.light}33`, backgroundColor: '#0f1623' }}
    >
      <MilestoneImage milestone={milestone} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="font-mono text-xs font-medium" style={{ color: cfg.light }}>
              {milestone.year}
            </span>
            <h3 className="font-semibold text-base mt-0.5" style={{ color: '#e2e8f0' }}>
              {milestone.label}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden font-mono text-xs px-2 py-1 rounded border"
            style={{ borderColor: '#1e2d3d', color: '#64748b' }}
          >
            ✕
          </button>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
          {milestone.story}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Center "sun" ─────────────────────────────────────────────── */
function CenterSun({ onActivateKoded, isActive }) {
  return (
    <motion.button
      onClick={onActivateKoded}
      animate={{ scale: isActive ? 1.15 : 1 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="relative z-10 flex flex-col items-center justify-center rounded-full"
      style={{
        width: 84,
        height: 84,
        background: isActive ? 'radial-gradient(circle at 38% 32%, rgba(0,217,255,0.48) 0%, #001a2a 55%, #000 100%)' : 'radial-gradient(circle at 38% 32%, rgba(0,217,255,0.28) 0%, #001a2a 55%, #000 100%)',
        border: isActive ? '1.5px solid rgba(0,217,255,0.55)' : '1.5px solid rgba(0,217,255,0.35)',
        boxShadow: isActive ? '0 0 36px rgba(0,217,255,0.32), 0 0 72px rgba(0,217,255,0.12)' : '0 0 36px rgba(0,217,255,0.22), 0 0 72px rgba(0,217,255,0.07)',
        flexShrink: 0,
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      <span className="font-mono text-sm font-bold leading-none" style={{ color: '#00d9ff' }}>
        koded
      </span>
      <span className="font-mono font-bold" style={{ color: '#00d9ff', fontSize: '18px', lineHeight: 0.8 }}>
        .
      </span>
    </motion.button>
  );
}

/* ─── Main component ───────────────────────────────────────────── */
export default function Journey() {
  const orbits = useOrbits();
  const [angles, setAngles]   = useState({ inner: 0, outer: 0 });
  const [active, setActive]   = useState('koded'); // Default to koded milestone
  const anglesRef   = useRef({ inner: 0, outer: 0 });
  const isPausedRef = useRef(false);
  const rafRef      = useRef(null);

  useEffect(() => {
    const tick = () => {
      if (!isPausedRef.current) {
        anglesRef.current.inner += 0.0020;
        anglesRef.current.outer += 0.0011;
        setAngles({ ...anglesRef.current });
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleEnter = useCallback((id) => {
    isPausedRef.current = true;
    setActive(id);
  }, []);

  const handleLeave = useCallback(() => {
    isPausedRef.current = false;
    setActive(null);
  }, []);

  const activeMilestone = journeyMilestones.find((m) => m.id === active);

  /* Build planet position arrays */
  const innerMilestones = journeyMilestones.filter((m) => INNER_IDS.includes(m.id));
  const outerMilestones = journeyMilestones.filter((m) => OUTER_IDS.includes(m.id));

  const allPlanets = [...innerMilestones, ...outerMilestones];

  return (
    <SectionWrapper id="journey" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="journey.log" />
        <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#e2e8f0' }}>
          Origin Story
        </h2>
        <p className="text-sm mb-12" style={{ color: '#64748b' }}>
          From a Game Shakers at age 9 to production systems at scale. Hover a planet.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── LEFT: Orbital ── */}
          <div
            className="relative flex items-center justify-center mx-auto w-full"
            style={{
              height: window.innerWidth < 640 ? 380 : 468,
              maxWidth: 468,
            }}
          >
            {/* Space background — faint dot grid */}
            <div className="absolute inset-0 rounded-2xl v4-dot-grid pointer-events-none" style={{ opacity: 0.45 }} />

            {/* Orbit rings */}
            <OrbitRing radius={orbits.inner} color="rgba(96,165,250,0.22)" />
            <OrbitRing radius={orbits.outer} color="rgba(0,217,255,0.18)"  />

            {/* Sun */}
            <CenterSun onActivateKoded={() => {
              isPausedRef.current = true;
              setActive('koded');
            }} isActive={active === 'koded'} />

            {/* Planets */}
            {allPlanets.map(({ milestone, x, y }) => (
              <Planet
                key={milestone.id}
                milestone={milestone}
                x={x}
                y={y}
                isActive={active === milestone.id}
                onEnter={() => handleEnter(milestone.id)}
                onLeave={handleLeave}
                onClick={() =>
                  active === milestone.id ? handleLeave() : handleEnter(milestone.id)
                }
              />
            ))}

            {/* Orbit era labels */}
            <span
              className="absolute font-mono pointer-events-none"
              style={{
                right: `calc(50% - ${orbits.inner + 8}px)`,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '8px',
                color: 'rgba(96,165,250,0.45)',
                letterSpacing: '0.1em',
                writingMode: 'vertical-rl',
              }}
            >
              EARLY ERA
            </span>
            <span
              className="absolute font-mono pointer-events-none"
              style={{
                right: `calc(50% - ${orbits.outer + 8}px)`,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '8px',
                color: 'rgba(0,217,255,0.35)',
                letterSpacing: '0.1em',
                writingMode: 'vertical-rl',
              }}
            >
              RECENT ERA
            </span>
          </div>

          {/* ── RIGHT: Detail panel ── */}
          <div className="min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {activeMilestone ? (
                <DetailPanel
                  key={activeMilestone.id}
                  milestone={activeMilestone}
                  onClose={handleLeave}
                />
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center gap-3 h-52 rounded-2xl border"
                  style={{ borderColor: '#1e2d3d', borderStyle: 'dashed' }}
                >
                  <div className="flex gap-2">
                    {[Terminal, GraduationCap, Rocket].map((I, k) => (
                      <I key={k} size={16} style={{ color: '#1e2d3d' }} />
                    ))}
                  </div>
                  <p className="font-mono text-xs text-center" style={{ color: '#64748b' }}>
                    click the center or hover a planet to explore the story
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile pill buttons */}
        <div className="lg:hidden mt-8 flex flex-wrap gap-2 justify-center">
          {journeyMilestones.map((m) => {
            const cfg = PLANET[m.id];
            const Icon = cfg.icon;
            const isActive = active === m.id;
            return (
              <button
                key={m.id}
                onClick={() => (isActive ? handleLeave() : handleEnter(m.id))}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-mono transition-all duration-150"
                style={{
                  borderColor:     isActive ? cfg.light           : '#1e2d3d',
                  color:           isActive ? cfg.light           : '#64748b',
                  backgroundColor: isActive ? `${cfg.light}0a`   : 'transparent',
                }}
              >
                <Icon size={12} />
                {m.year}
              </button>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
