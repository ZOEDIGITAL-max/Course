import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Flame,
  Clock,
  Gift
} from 'lucide-react';
import { BOOTCAMP_INFO } from '../data/bootcampData';

interface FinalCtaProps {
  onOpenEnroll: () => void;
  onOpenWhatsApp: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenEnroll, onOpenWhatsApp }) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="final-cta">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-950 to-slate-950 -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Mindset Shift Box */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            YOU DON'T NEED TO HAVE EVERYTHING FIGURED OUT BEFORE YOU START.
          </h2>

          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-slate-300 font-medium pt-2">
            <span className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800">
              ✖ You don't need to become an AI expert.
            </span>
            <span className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800">
              ✖ You don't need to master 100 tools.
            </span>
            <span className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800">
              ✖ You don't need to wait until you're “good enough.”
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 text-slate-300 text-sm sm:text-base leading-relaxed space-y-2 mt-4 max-w-2xl mx-auto">
            <p className="font-semibold text-white">
              Start with one skill. Learn it. Create with it. Build your portfolio. Put your work out there.
            </p>
            <p className="text-emerald-300 font-bold text-base sm:text-lg">
              And give yourself the opportunity to see where that skill can take you.
            </p>
          </div>
        </div>

        {/* Master Conversion Pricing Card */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl border-2 border-emerald-500/50 p-6 sm:p-10 shadow-2xl shadow-emerald-950/50 text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="w-4 h-4 text-emerald-400" />
            <span>READY TO START CREATING WITH AI?</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
            JOIN THE AI CONTENT CREATOR BOOTCAMP
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-semibold mb-6">
            Get complete, instant access to:
          </p>

          {/* Core inclusions bullet list */}
          <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left mb-8">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
              <span className="text-lg">🎬</span>
              <span>AI Video Creation Masterclass</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
              <span className="text-lg">🎨</span>
              <span>AI + Canva Graphics Workshop</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
              <span className="text-lg">🌐</span>
              <span>Portfolio Website System</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
              <span className="text-lg">📱</span>
              <span>14-Day Content Challenge</span>
            </div>
            <div className="sm:col-span-2 p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-200">
              <span className="text-lg">📕</span>
              <span>FREE BONUS: 10 Ways to Make Your First ₦1.5 Million Online in 2026</span>
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="mb-6">
            <span className="text-xs uppercase text-slate-400 font-semibold block mb-1">
              REGULAR PRICE: <span className="line-through text-slate-500 font-bold">{BOOTCAMP_INFO.regularPrice}</span>
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs uppercase font-extrabold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                LAUNCH PRICE:
              </span>
              <span className="text-4xl sm:text-5xl font-black text-white font-display">
                {BOOTCAMP_INFO.launchPrice}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-400 font-bold mt-2">
              Start learning. Start creating. Start showing your work.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto mb-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenEnroll}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 shadow-xl shadow-emerald-500/30 transition-all cursor-pointer"
            >
              <span>🚀 JOIN THE BOOTCAMP — {BOOTCAMP_INFO.launchPrice}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-bold bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CHAT WITH ME</span>
            </motion.button>
          </div>

          {/* Guarantee / reassuring footer */}
          <div className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Secure 256-Bit SSL Checkout • Instant Community Onboarding</span>
          </div>

        </div>

      </div>
    </section>
  );
};
