export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center border-t"
      style={{ borderColor: '#1e2d3d' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs" style={{ color: '#64748b' }}>
          Built with Next.js, Tailwind &amp; systems thinking.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-mono text-xs transition-colors hover:text-v4-accent"
            style={{ color: '#64748b' }}
          >
            ↑ Back to top
          </a>
          <span className="font-mono text-xs" style={{ color: '#1e2d3d' }}>·</span>
          <p className="font-mono text-xs" style={{ color: '#64748b' }}>
            © 2026 Raufu Abdulrahman
          </p>
        </div>
      </div>
    </footer>
  );
}
