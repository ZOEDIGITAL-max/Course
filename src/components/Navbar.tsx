import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';
import { BOOTCAMP_INFO } from '../data/bootcampData';

interface NavbarProps {
  onOpenEnroll: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnroll, onOpenWhatsApp }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "What You'll Learn", href: "#modules" },
    { name: "Portfolio", href: "#portfolio-preview" },
    { name: "14-Day Challenge", href: "#challenge" },
    { name: "Why ZoeDigital", href: "#why-us" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
        : 'bg-transparent py-4'
    }`}>
      {/* Top Banner Notice */}
      <div className="hidden lg:block bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border-b border-emerald-500/20 py-1 px-4 text-xs text-center text-emerald-300 font-medium">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>Launch Price Active: <strong>{BOOTCAMP_INFO.launchPrice}</strong> (Regular {BOOTCAMP_INFO.regularPrice})</span>
          <span className="text-slate-400">•</span>
          <span>Only <strong>{BOOTCAMP_INFO.spotsLeft} launch slots</strong> left</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group" id="nav-brand-logo">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg text-white tracking-tight font-display">ZoeDigital</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Bootcamp</span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">AI • Content • Portfolio</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-emerald-400 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="nav-whatsapp-btn"
            onClick={onOpenWhatsApp}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 border border-emerald-500/30 rounded-lg transition-all cursor-pointer"
            title="Chat with me on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="nav-enroll-btn"
            onClick={onOpenEnroll}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
          >
            <span>Join</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-5 py-6 mt-2 space-y-4 animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-400 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnroll();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <span>JOIN THE BOOTCAMP — {BOOTCAMP_INFO.launchPrice}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold border border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/30 text-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask a Question on WhatsApp</span>
            </motion.button>
          </div>
        </div>
      )}
    </header>
  );
};
