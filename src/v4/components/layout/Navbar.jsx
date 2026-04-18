import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Journey',    href: '#journey' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Stack',      href: '#stack' },
  { label: 'Footprint',  href: '#footprint' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(0,0,0,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #1e2d3d' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="font-mono text-base font-bold tracking-tight"
          style={{ color: '#e2e8f0' }}
        >
          koded<span style={{ color: '#00d9ff' }} className="text-glow">.</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium transition-colors duration-150 hover:text-v4-accent"
              style={{ color: '#64748b' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Available badge */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border success-glow"
            style={{ borderColor: '#22c55e33', color: '#22c55e', backgroundColor: '#0a1e160a' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-v4-success animate-pulse" />
            AVAILABLE
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden transition-colors"
          style={{ color: '#e2e8f0' }}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t"
            style={{ backgroundColor: '#0f1623', borderColor: '#1e2d3d' }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium py-1 transition-colors hover:text-v4-accent"
                  style={{ color: '#e2e8f0' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 text-xs font-mono pt-2 border-t" style={{ borderColor: '#1e2d3d', color: '#22c55e' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-v4-success animate-pulse" />
                AVAILABLE FOR HIRE
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
