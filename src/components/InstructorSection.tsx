import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ShieldCheck, 
  Target, 
  ArrowRight, 
  Award, 
  TrendingUp, 
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { BOOTCAMP_INFO } from '../data/bootcampData';

interface InstructorSectionProps {
  onOpenEnroll: () => void;
  onOpenWhatsApp: () => void;
}

export const InstructorSection: React.FC<InstructorSectionProps> = ({ onOpenEnroll, onOpenWhatsApp }) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="why-us">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* BLOCK 1: WHY LEARN FROM ME? */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: ZoeDigital Philosophy */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Instructor & Founder Perspective</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                WHY LEARN FROM ME?
              </h2>

              <h3 className="text-lg sm:text-xl font-bold text-emerald-400">
                I'm not teaching AI because it's trending.
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I've actually used digital content and AI-powered tools as part of the real work I do with businesses, brands, and clients.
                </p>

                <p>
                  I've seen firsthand the monumental difference between simply knowing how to use a tool and knowing <strong className="text-white">how to turn that skill into an actual service that businesses are happy to pay for.</strong>
                </p>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">The Reality Check:</p>
                  <p className="text-sm text-slate-300">
                    My journey wasn't: <span className="line-through text-slate-400 italic">“Learn one tool → magically start making money.”</span>
                  </p>
                  <p className="text-sm font-semibold text-white">
                    It was learning skills, creating content, putting my work out there, working with people, improving my process and understanding what businesses actually need.
                  </p>
                </div>

                <p>
                  And that's the exact, unvarnished approach I'm bringing into this bootcamp.
                </p>

                <p className="font-bold text-white">
                  I'm not interested in dumping 50 random tools on you and telling you to “go and explore.”
                </p>

                <p className="text-emerald-300 font-semibold">
                  I want you to learn, create, and walk away with something tangible to show for what you've learned.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center">
                <span className="text-xs uppercase font-bold text-emerald-400 block mb-1">The Proven Equation</span>
                <span className="text-base sm:text-lg font-black text-white tracking-wide font-display">
                  SKILL + PRACTICE + PORTFOLIO + VISIBILITY
                </span>
              </div>
            </div>

            {/* Right Col: Instructor Photo & Founder Details */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4">
              <div className="relative w-full aspect-[4/5] max-w-[280px] rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-xl shadow-emerald-950/50 group bg-slate-950">
                <img 
                  src="https://i.ibb.co/7JQ4DyWc/Woman-seated-on-chair-202607161644.jpg" 
                  alt="ZoeDigital Bootcamp Instructor" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-white px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/60">
                    Lead Instructor
                  </span>
                  <span className="text-[11px] font-bold text-emerald-400 px-2 py-1 rounded-lg bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ZoeDigital
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white font-display">ZoeDigital</h4>
                <p className="text-xs text-emerald-400 font-semibold mt-0.5">{BOOTCAMP_INFO.brandSubtitle}</p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {BOOTCAMP_INFO.brandMission}
                </p>
              </div>

              <div className="w-full pt-3 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Bootcamp Format:</span>
                  <span className="font-semibold text-white">Interactive + Practical</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Support Channel:</span>
                  <span className="font-semibold text-emerald-400">WhatsApp VIP Group</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Deliverable:</span>
                  <span className="font-semibold text-white">Live Portfolio Site</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenWhatsApp}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 text-xs font-bold border border-emerald-500/30 transition-colors cursor-pointer"
              >
                Questions? Chat on WhatsApp
              </motion.button>
            </div>

          </div>
        </div>

        {/* BLOCK 2: WHAT MAKES THIS DIFFERENT? */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              The Fundamental Difference
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              WHAT MAKES THIS DIFFERENT?
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-left pt-2">
              {/* Most courses */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-rose-500/30 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-rose-400 block">
                  ❌ Most Courses Stop At:
                </span>
                <p className="text-lg font-bold text-slate-300">
                  “Here's how to use the tool.”
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  They show button clicks, theory, and surface demos—leaving you with zero assets and no idea how to pitch clients.
                </p>
              </div>

              {/* ZoeDigital Bootcamp */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/50 space-y-3 shadow-lg shadow-emerald-500/10">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 block">
                  ✅ We're Going Further:
                </span>
                <p className="text-lg font-extrabold text-white">
                  Learn the tool → Create the work → Build your portfolio → Start showing your work.
                </p>
                <p className="text-xs text-emerald-200/90 leading-relaxed font-semibold">
                  That's the difference between endless tutorial watching and building an in-demand digital service.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
