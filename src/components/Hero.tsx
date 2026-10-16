import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Video, 
  Palette, 
  Globe, 
  Smartphone, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Flame,
  Zap
} from 'lucide-react';
import { BOOTCAMP_INFO, CORE_PILLARS } from '../data/bootcampData';

interface HeroProps {
  onOpenEnroll: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnroll, onOpenWhatsApp }) => {
  // Countdown timer calculation for launch urgency
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 42,
    seconds: 18
  });
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Simulate chatbot typing delay
    const typingTimer = setTimeout(() => {
      setIsTyping(false);
    }, 1500);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" id="hero-section">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges and Urgency */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <Flame className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>AI CONTENT CREATOR BOOTCAMP</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Launch Offer Closes in {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}</span>
          </div>
        </div>

        {/* Chatbot Interface Design */}
        <div className="max-w-4xl mx-auto mb-10 space-y-6">
          
          {/* User Message */}
          <div className="flex justify-end animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-[85%] sm:max-w-[70%] bg-slate-800 text-slate-100 p-4 sm:p-5 rounded-2xl rounded-tr-sm shadow-sm border border-slate-700/50">
              <p className="text-sm sm:text-base font-medium leading-relaxed">
                I want to start creating digital content and offering it as a service, but I don't know which AI tools to use or how to build a portfolio that actually gets clients.
              </p>
            </div>
          </div>

          {/* ZoeDigital Message */}
          <div className="flex justify-start items-end gap-3 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
            <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 items-center justify-center overflow-hidden">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
            
            <div className="max-w-[90%] sm:max-w-[80%] bg-slate-900 border border-emerald-500/30 p-5 sm:p-7 rounded-2xl rounded-bl-sm shadow-xl shadow-emerald-900/20 relative min-h-[100px]">
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-emerald-400">ZoeDigital AI</span>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">Verified Instructor</span>
              </div>

              {isTyping ? (
                <div className="flex items-center gap-1.5 pt-2 pb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 typing-dot" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400 typing-dot" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400 typing-dot" />
                </div>
              ) : (
                <div className="animate-in fade-in duration-500">
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 font-display">
                    Become an AI Content Creator — <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                      Even If You're Starting From Zero.
                    </span>
                  </h1>

                  <p className="text-sm sm:text-lg text-slate-300 font-medium mb-6 leading-relaxed">
                    Learn how to create AI videos, professional graphics and build your own portfolio website — then start showcasing your skills to potential clients and businesses.
                  </p>

                  <div className="bg-slate-950/50 rounded-xl border border-slate-800 p-4 sm:p-5 mb-5">
                    <p className="text-xs sm:text-sm font-semibold text-emerald-400 mb-3">Inside this practical bootcamp, you'll learn:</p>
                    <ul className="space-y-2 text-sm text-slate-300 font-medium">
                      <li className="flex items-center gap-2"><span className="text-lg">🎬</span> AI Video Creation</li>
                      <li className="flex items-center gap-2"><span className="text-lg">🎨</span> AI Graphics + Canva</li>
                      <li className="flex items-center gap-2"><span className="text-lg">🌐</span> Portfolio Website Creation</li>
                      <li className="flex items-center gap-2"><span className="text-lg">📱</span> 14-Day Content &amp; Visibility Challenge</li>
                    </ul>
                  </div>

                  <div className="flex items-start gap-2 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-xs sm:text-sm text-emerald-200">
                    <span className="text-base shrink-0">💡</span>
                    <p>No coding. No expensive equipment. No professional editing experience required.</p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* 4 Core Highlights Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-10">
          {CORE_PILLARS.map((pillar) => (
            <div 
              key={pillar.id}
              className={`p-4 rounded-2xl bg-slate-900/80 border ${pillar.border} backdrop-blur-sm flex flex-col items-center text-center hover:scale-[1.02] transition-transform shadow-md`}
            >
              <div className="text-2xl sm:text-3xl mb-2">{pillar.emoji}</div>
              <h3 className="font-bold text-sm sm:text-base text-white mb-1 font-display">{pillar.title}</h3>
              <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-2">{pillar.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Pricing Box & CTA Action Area */}
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-emerald-500/40 shadow-2xl shadow-emerald-950/40 text-center relative overflow-hidden">
          
          {/* Discount Tag */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-teal-500 text-slate-950 text-xs font-black uppercase px-4 py-1.5 rounded-bl-2xl shadow-md">
            Save {BOOTCAMP_INFO.discountPercentage}
          </div>

          <div className="mb-5">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display flex items-center justify-center gap-2">
              <span>🔥</span> JOIN THE BOOTCAMP TODAY FOR ONLY ₦10,000
            </h2>
            <p className="text-sm text-slate-400 font-medium">
              Regular Price <span className="line-through text-slate-500">₦15,000</span>
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col items-center justify-center gap-3.5 mb-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="hero-enroll-primary-btn"
              onClick={onOpenEnroll}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base sm:text-lg font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 shadow-xl shadow-emerald-500/30 transition-all cursor-pointer"
            >
              <span className="text-xl">🟢</span>
              <span>JOIN THE AI CONTENT CREATOR BOOTCAMP</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="hero-whatsapp-btn"
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-slate-800/80 hover:bg-slate-800 text-emerald-300 border border-emerald-500/30 transition-all hover:border-emerald-400/60 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>CHAT WITH ME</span>
            </motion.button>
          </div>

          {/* Quick trust row */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-slate-300 pt-3 border-t border-slate-800/80">
            <span>Limited launch offer</span>
            <span className="text-slate-500 mx-1">•</span>
            <span>Instant access after payment.</span>
          </div>

        </div>

      </div>
    </section>
  );
};
