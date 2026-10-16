import React, { useState } from 'react';
import { 
  Star, 
  MessageSquare, 
  Play, 
  CheckCircle2, 
  Quote, 
  ArrowRight,
  ShieldCheck,
  Video
} from 'lucide-react';
import { TESTIMONIALS, BOOTCAMP_INFO } from '../data/bootcampData';

interface TestimonialsSectionProps {
  onOpenEnroll: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenEnroll }) => {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WHAT STUDENTS ARE SAYING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-3">
            REAL PEOPLE. REAL EXPERIENCES.
          </h2>
          <p className="text-base text-slate-300 font-medium">
            Don't just take my word for it. See how our creators are turning AI skills into real client retainers.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="p-6 rounded-2xl rounded-tl-sm bg-slate-900 border border-slate-700/50 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4 relative shadow-lg group"
            >
              {/* Top rating & quote icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                  {t.badge}
                </span>
              </div>

              {/* Highlight Tag */}
              <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-emerald-300 text-xs font-bold font-mono">
                🎯 {t.highlight}
              </div>

              {/* Quote text */}
              <p className="text-sm text-slate-200 leading-relaxed italic">
                “{t.quote}”
              </p>

              {/* Student Profile Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-emerald-500/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="font-bold text-sm text-white">{t.name}</h5>
                  <p className="text-[11px] text-slate-400 font-mono">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Spotlight Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Student Video Case Studies</h4>
              <p className="text-xs text-slate-400">
                Watch how beginners with zero tech experience launched their first AI reels and got their first client inbounds.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenEnroll}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition-transform hover:scale-105"
          >
            <span>Join Our Next Success Cohort</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
