import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Heart } from 'lucide-react';
import { BOOTCAMP_INFO } from '../data/bootcampData';

interface FooterProps {
  onOpenWhatsApp: () => void;
  onOpenEnroll: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, onOpenEnroll }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-slate-950">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white font-display">ZoeDigital</span>
                <span className="text-[11px] block text-emerald-400 font-medium">{BOOTCAMP_INFO.brandSubtitle}</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              {BOOTCAMP_INFO.brandMission}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs font-display">Bootcamp Navigation</h5>
            <ul className="space-y-1.5">
              <li><a href="#modules" className="hover:text-emerald-400 transition-colors">Curriculum Breakdown</a></li>
              <li><a href="#portfolio-preview" className="hover:text-emerald-400 transition-colors">Portfolio Website System</a></li>
              <li><a href="#challenge" className="hover:text-emerald-400 transition-colors">14-Day Visibility Challenge</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Student Case Studies</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs font-display">Questions & Inquiries</h5>
            <p className="text-xs text-slate-400">
              Questions? Chat with us on WhatsApp directly for quick answers about enrollment.
            </p>
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-bold hover:bg-emerald-900/40 transition-colors text-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat with us on WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-slate-400 text-[11px] leading-relaxed">
          <p className="italic">
            *This program teaches practical digital and AI skills. Results will vary based on your effort, skill development, consistency, market, and ability to find and serve clients. No specific income is guaranteed.*
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2026 ZoeDigital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built for aspiring creators & professionals</span>
            <span>•</span>
            <button onClick={onOpenEnroll} className="text-emerald-400 hover:underline">
              Enroll for {BOOTCAMP_INFO.launchPrice}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
