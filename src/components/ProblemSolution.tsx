import React from 'react';
import { XCircle, CheckCircle2, HelpCircle, Layers, ArrowRight, Target, Flame, Sparkles } from 'lucide-react';
import { BOOTCAMP_INFO } from '../data/bootcampData';

interface ProblemSolutionProps {
  onOpenEnroll: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenEnroll }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/60 relative border-y border-slate-800/80" id="problem-solution">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-4">
            The Truth About Online Courses
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
            YOU DON'T NEED ANOTHER COURSE YOU'LL NEVER FINISH.
          </h2>
        </div>

        {/* Conversational Narrative Box */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          
          {/* User Pain Point Message */}
          <div className="flex justify-end">
            <div className="max-w-[90%] sm:max-w-[70%] bg-slate-800 text-slate-200 p-5 rounded-2xl rounded-tr-sm shadow-sm border border-slate-700/50 space-y-3">
              <p className="text-sm sm:text-base">
                I've tried those <span className="line-through text-slate-400">"Learn AI in 30 days"</span> or <span className="line-through text-slate-400">"Master ChatGPT in 1 hour"</span> courses.
              </p>
              <p className="text-sm sm:text-base font-semibold text-rose-200">
                I watch a few lessons, try a few tools, and then get stuck wondering: "Okay... but what do I actually DO with this?"
              </p>
            </div>
          </div>

          {/* ZoeDigital Response Message */}
          <div className="flex justify-start items-end gap-3">
            <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 items-center justify-center overflow-hidden">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
            
            <div className="max-w-[90%] sm:max-w-[75%] bg-slate-900 border border-emerald-500/30 p-5 sm:p-6 rounded-2xl rounded-bl-sm shadow-xl shadow-emerald-900/20 space-y-4 relative">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-emerald-400">ZoeDigital</span>
              </div>
              
              <p className="text-sm sm:text-base text-slate-300">
                You don't need another course you'll never finish. That's exactly where this bootcamp is different.
              </p>
              
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                <p className="text-sm sm:text-base font-bold text-white">
                  I'm not just going to show you AI tools. We're going to turn the skills you learn into <span className="text-emerald-400 underline decoration-emerald-500/50 underline-offset-4">actual content, actual projects and an actual portfolio.</span>
                </p>
              </div>
              
              <p className="text-sm text-slate-400 font-mono">
                Because knowing how to use a tool is one thing. Knowing how to turn it into something people will pay you for is another. Here is the 4-step framework we use:
              </p>
            </div>
          </div>

        </div>

        {/* 4-Step Action System Visual */}
        <div className="bg-gradient-to-r from-emerald-950/50 via-slate-900/80 to-teal-950/50 p-6 sm:p-8 rounded-3xl border border-emerald-500/30">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              The ZoeDigital 4-Pillar Transformation Engine
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Not random tool exploration — a direct sequence from learning to paid opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center relative group hover:border-emerald-500/50 transition-colors">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">Step 1</span>
              <h4 className="text-base font-extrabold text-white mb-1 font-display">SKILL</h4>
              <p className="text-xs text-slate-400">Master high-leverage AI video & Canva design workflows.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center relative group hover:border-emerald-500/50 transition-colors">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">Step 2</span>
              <h4 className="text-base font-extrabold text-white mb-1 font-display">PRACTICE</h4>
              <p className="text-xs text-slate-400">Create real marketing assets, video reels, and client flyers.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center relative group hover:border-emerald-500/50 transition-colors">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">Step 3</span>
              <h4 className="text-base font-extrabold text-white mb-1 font-display">PORTFOLIO</h4>
              <p className="text-xs text-slate-400">Assemble your live website so you have concrete proof of work.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center relative group hover:border-emerald-500/50 transition-colors">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">Step 4</span>
              <h4 className="text-base font-extrabold text-white mb-1 font-display">VISIBILITY</h4>
              <p className="text-xs text-slate-400">14 days of structured posting to attract paying clients.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
