import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Sun,
  Moon,
  Globe2,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenAiChat: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDemo,
  onOpenAiChat,
  isDarkMode,
  onToggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Global Hubs', href: '#global-presence' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Insights', href: '#insights' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 glass-panel border-b border-white/10 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Animated 3D Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 via-rose-600 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-105 transition-all">
              <Globe2 className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center space-x-1 italic">
                <span>NEXUS</span>
                <span className="text-red-500 font-light">GLOBAL</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
                Enterprise Platform
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 glass-panel px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-red-400 px-3.5 py-1.5 rounded-full hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions Bar */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-full glass-panel text-slate-300 hover:text-red-400 hover:border-red-500/40 transition-all"
              title="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
            </button>

            {/* AI Assistant Button */}
            <button
              onClick={onOpenAiChat}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-full glass-panel text-xs font-semibold text-rose-200 hover:text-white hover:border-red-500/50 transition-all group shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-400 group-hover:rotate-12 transition-transform" />
              <span>NEXUS AI</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </button>

            {/* Schedule Demo CTA */}
            <button
              onClick={onOpenDemo}
              className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-sm font-semibold text-white shadow-lg shadow-red-600/35 transition-all flex items-center space-x-2"
            >
              <span>Consult Experts</span>
              <ArrowRight className="w-4 h-4 text-rose-200 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenAiChat}
              className="p-2 rounded-lg bg-purple-900/50 border border-purple-500/30 text-purple-200"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-blue-900/40 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top-5 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium text-slate-300 hover:text-cyan-400 p-2 rounded-lg bg-slate-900/50 border border-slate-800/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Schedule Executive Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
