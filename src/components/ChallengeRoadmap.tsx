import React, { useState } from 'react';
import { 
  Smartphone, 
  Calendar, 
  Sparkles, 
  Eye, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  TrendingUp, 
  Share2,
  Users
} from 'lucide-react';
import { CHALLENGE_DAYS, BOOTCAMP_INFO } from '../data/bootcampData';

interface ChallengeRoadmapProps {
  onOpenEnroll: () => void;
}

export const ChallengeRoadmap: React.FC<ChallengeRoadmapProps> = ({ onOpenEnroll }) => {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  const weekPillars = [
    {
      week: 1,
      name: "Week 1: Learning in Public & Skill Proof",
      focus: "Break the ice, share behind-the-scenes creation, and test your first AI voiceover and video clips.",
      color: "border-emerald-500/40 text-emerald-400"
    },
    {
      week: 2,
      name: "Week 2: Sample Projects & Portfolio Drop",
      focus: "Publish high-save carousels, UGC case studies, and launch your live portfolio website.",
      color: "border-cyan-500/40 text-cyan-400"
    },
    {
      week: 3,
      name: "Week 3: Positioning, Services & Client Inbounds",
      focus: "Package your offerings, post problem-solving client content, and invite paid inquiries.",
      color: "border-amber-500/40 text-amber-400"
    }
  ];

  const contentCategories = [
    "Your work",
    "Your learning journey",
    "Your services",
    "Sample projects",
    "Business content",
    "Promotional content",
    "Educational content",
    "Your portfolio",
    "Client-focused content",
    "Calls-to-action"
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="challenge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-emerald-400" />
            <span>The Visibility Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            THE 14-DAY CONTENT & VISIBILITY CHALLENGE
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            This is where you stop hiding behind the <span className="italic text-slate-200">“I'm still learning”</span> phase.
          </p>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl mx-auto">
            For 14 days, you'll be challenged to create and publish content around your new skill, transforming from a passive student into a visible creator.
          </p>
        </div>

        {/* The 3 Core Questions We Answer For Your Audience */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-teal-950/40 p-6 sm:p-8 rounded-3xl border border-emerald-500/30 mb-12 shadow-xl">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-extrabold block mb-1">
              Positioning Masterclass
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-white font-display">
              You'll learn how to position your content so people clearly understand:
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-2 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto font-bold text-lg">
                1
              </div>
              <h4 className="text-base font-extrabold text-white font-display">WHAT YOU DO</h4>
              <p className="text-xs text-slate-400">Clear communication of your AI video creation & Canva design capabilities.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-2 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mx-auto font-bold text-lg">
                2
              </div>
              <h4 className="text-base font-extrabold text-white font-display">WHO YOU CAN HELP</h4>
              <p className="text-xs text-slate-400">Targeting business owners, brands, creators, and event organizers.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-2 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto font-bold text-lg">
                3
              </div>
              <h4 className="text-base font-extrabold text-white font-display">HOW THEY WORK WITH YOU</h4>
              <p className="text-xs text-slate-400">Frictionless booking flows via your portfolio and direct WhatsApp links.</p>
            </div>
          </div>

          <div className="text-center mt-6 pt-4 border-t border-slate-800/80">
            <p className="text-sm font-semibold text-emerald-300">
              Because learning the skill is only half of the journey. <span className="text-white font-extrabold">You also need to be seen.</span>
            </p>
          </div>
        </div>

        {/* Content Topics Covered Chips */}
        <div className="mb-12">
          <div className="text-center mb-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              The 10 Content Angles You'll Create & Publish:
            </h4>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {contentCategories.map((cat, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-200 font-medium flex items-center gap-1.5 hover:border-emerald-500/40 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{cat}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 3-Week Interactive Breakdown */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-wrap gap-2.5 mb-6">
            {weekPillars.map((wp) => (
              <button
                key={wp.week}
                onClick={() => setSelectedWeek(wp.week)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedWeek === wp.week
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                Week {wp.week}
              </button>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 mb-6">
            <h4 className="text-base font-bold text-white mb-1 font-display">
              {weekPillars[selectedWeek - 1].name}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              {weekPillars[selectedWeek - 1].focus}
            </p>
          </div>

          {/* Sample Prompts from Selected Week */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHALLENGE_DAYS.filter(d => d.week === selectedWeek).map((day) => (
              <div 
                key={day.day}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800/80 space-y-2.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-extrabold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Day {day.day} Prompt
                    </span>
                    <span className="text-slate-400 font-mono">{day.platformFocus}</span>
                  </div>
                  <h5 className="font-bold text-sm text-white mt-2">{day.title}</h5>
                  <p className="text-xs text-slate-400 mt-1">{day.objective}</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300 italic">
                  “{day.promptExample}”
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
