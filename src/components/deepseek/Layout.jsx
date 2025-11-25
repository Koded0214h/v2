// components/Layout.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Home, User, Briefcase, FileText, Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import ClickSpark from './components/ClickSpark';

const Dock = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, href: "/", label: "Home" },
    { icon: User, href: "/about", label: "About" },
    { icon: Briefcase, href: "/projects", label: "Projects" },
    { icon: FileText, href: "/resume", label: "Resume" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Koded0214h", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/koded0214h?", label: "LinkedIn" },
    { 
        icon: () => (
          <svg 
            className="w-5 h-5 text-gray-600 dark:text-gray-400" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        ), 
        href: "https://x.com/coder0214h?s=21", 
        label: "X (Twitter)" 
    },
    { icon: MessageCircle, href: "https://wa.me/+2347030057130", label: "WhatsApp" },
    { icon: Mail, href: "mailto:coder0214h@gmail.com", label: "Email" },
  ];

  return (
    <>
      {/* Desktop Dock */}
      <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl px-4 py-6 flex flex-col items-center gap-6 shadow-2xl">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 group relative ${
                location.pathname === item.href 
                  ? 'bg-black/10 dark:bg-white/10' 
                  : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-5 h-5 ${
                location.pathname === item.href 
                  ? 'text-black dark:text-white' 
                  : 'text-gray-600 dark:text-gray-400'
              }`} />
              <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
          
          <div className="w-full h-px bg-gray-300 dark:bg-gray-700 my-2"></div>
          
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:scale-110"
          >
            {darkMode ? <Sun className="w-5 h-5 text-gray-600" /> : <Moon className="w-5 h-5 text-gray-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Dock */}
      <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-2xl">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 group relative ${
                location.pathname === item.href 
                  ? 'bg-black/10 dark:bg-white/10' 
                  : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-5 h-5 ${
                location.pathname === item.href 
                  ? 'text-black dark:text-white' 
                  : 'text-gray-600 dark:text-gray-400'
              }`} />
            </Link>
          ))}
          
          <div className="w-px h-8 bg-gray-300 dark:bg-gray-700 mx-2"></div>
          
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:scale-110"
          >
            {darkMode ? <Sun className="w-5 h-5 text-gray-600" /> : <Moon className="w-5 h-5 text-gray-600" />}
          </button>
        </div>
      </div>

      {/* Social Links - Fixed Right */}
      <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl px-4 py-6 flex flex-col items-center gap-6 shadow-2xl">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:scale-110 group relative"
            >
              <link.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-sm text-gray-600 dark:text-gray-400">Django • React JS • React Native</span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Koded. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ClickSpark
      sparkColor={darkMode ? '#ffffff' : '#000000'}
      sparkSize={8}
      sparkRadius={20}
      sparkCount={12}
      duration={600}
      easing="ease-out"
    >
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      <Dock darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main className="md:px-32 lg:px-48">{children}</main>
      <Footer />
    </div>
    </ClickSpark>
  );
};

export default Layout;