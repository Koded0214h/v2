import './v4.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Journey from './components/sections/Journey';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import DevFootprint from './components/sections/DevFootprint';
import Contact from './components/sections/Contact';

export default function V4App() {
  return (
    <div
      className="v4-scroll"
      style={{
        backgroundColor: '#000000',
        color: '#e2e8f0',
        fontFamily: "'Inter', system-ui, sans-serif",
        minHeight: '100vh',
      }}
    >
      <Navbar />

      <main>
        <Hero />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #1e2d3d, transparent)' }} />
        </div>

        {/* Dot grid for content sections */}
        <div className="v4-dot-grid relative">
          <Journey />
          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #1e2d3d, transparent)' }} />
          </div>
          <Experience />
          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #1e2d3d, transparent)' }} />
          </div>
          <Projects />
          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #1e2d3d, transparent)' }} />
          </div>
          <TechStack />
          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #1e2d3d, transparent)' }} />
          </div>
          <DevFootprint />
          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #1e2d3d, transparent)' }} />
          </div>
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
