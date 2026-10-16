import React, { useState } from 'react';
import { 
  Video, 
  Palette, 
  Globe, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Target, 
  Eye, 
  Briefcase,
  Share2
} from 'lucide-react';
import { MODULES_DATA, BOOTCAMP_INFO } from '../data/bootcampData';

interface ModulesSectionProps {
  onOpenEnroll: () => void;
}

export const ModulesSection: React.FC<ModulesSectionProps> = ({ onOpenEnroll }) => {
  const [activeTab, setActiveTab] = useState<string>("module-01");

  const iconsMap: Record<string, React.ReactNode> = {
    "Video": <Video className="w-6 h-6 text-rose-400" />,
    "Palette": <Palette className="w-6 h-6 text-amber-400" />,
    "Globe": <Globe className="w-6 h-6 text-cyan-400" />,
    "Smartphone": <Smartphone className="w-6 h-6 text-emerald-400" />,
  };

  const selectedModule = MODULES_DATA.find(m => m.id === activeTab) || MODULES_DATA[0];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="modules">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Practical Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            WHAT YOU'LL LEARN
          </h2>
          <p className="text-base text-slate-400">
            Four targeted phases engineered to move you from complete beginner to client-ready creator with proof of work.
          </p>
        </div>

        {/* Module Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {MODULES_DATA.map((mod) => {
            const isActive = activeTab === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 border-emerald-400 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-black uppercase tracking-wider ${isActive ? 'text-emerald-400' : 'text-slate-500'}`}>
                    Module {mod.number}
                  </span>
                  {iconsMap[mod.icon]}
                </div>
                <h4 className={`text-xs sm:text-sm font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {mod.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Module Detail Showcase */}
        <div className="bg-gradient-to-b from-slate-900/90 to-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Title, Overview, and Topics */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-extrabold text-xs font-display">
                    MODULE {selectedModule.number}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Hands-on Skill & Implementation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mb-3">
                  {selectedModule.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                  {selectedModule.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {selectedModule.description}
                </p>
              </div>

              {/* Topics Grid */}
              <div>
                <h5 className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  <span>What You Will Create & Master:</span>
                </h5>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {selectedModule.topics.map((topic, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Takeaway Quote */}
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20">
                <p className="text-xs text-emerald-300/80 font-bold uppercase tracking-wider mb-1">Core Outcome:</p>
                <p className="text-sm text-emerald-100 font-semibold italic">
                  “{selectedModule.keyTakeaway}”
                </p>
              </div>
            </div>

            {/* Right 5 cols: Deliverable Box, Tools, and Fast Action */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Deliverable Card */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Briefcase className="w-4 h-4" />
                  <span>Concrete Output / Deliverable</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold text-sm sm:text-base leading-snug">
                  {selectedModule.deliverable}
                </div>
                
                <div>
                  <span className="text-xs text-slate-400 block mb-2 font-medium">Tools & Workflows Included:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedModule.toolsCovered.map((tool, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300 font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Module-Specific Highlight Summary */}
              {selectedModule.id === "module-01" && (
                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 text-rose-200 text-xs leading-relaxed">
                  <strong>The Goal:</strong> Not simply to learn another AI tool, but to learn how to produce videos people can actually use and pay you for.
                </div>
              )}

              {selectedModule.id === "module-02" && (
                <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20 text-amber-200 text-xs leading-relaxed">
                  <strong>The Goal:</strong> Learn the strategic design process behind high-converting content — not just where to click in Canva.
                </div>
              )}

              {selectedModule.id === "module-03" && (
                <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-cyan-200 text-xs leading-relaxed">
                  <strong>The Goal:</strong> When someone asks "Can I see your work?", you never say "I'm still learning" — you send your live portfolio link.
                </div>
              )}

              {selectedModule.id === "module-04" && (
                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-200 text-xs leading-relaxed">
                  <strong>The Goal:</strong> Position your content so people understand: <em>What you do</em>, <em>Who you help</em>, and <em>How they can work with you</em>.
                </div>
              )}

              {/* Direct CTA */}
              <button
                onClick={onOpenEnroll}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.01]"
              >
                <span>Get Full Access for {BOOTCAMP_INFO.launchPrice}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

        {/* 4 Cards Grid View for complete reading */}
        <div className="grid md:grid-cols-2 gap-6">
          {MODULES_DATA.map((mod) => (
            <div 
              key={`card-${mod.id}`}
              className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black px-2.5 py-1 rounded bg-slate-800 text-emerald-400 font-display">
                  PHASE {mod.number}
                </span>
                {iconsMap[mod.icon]}
              </div>
              <h4 className="text-lg font-bold text-white font-display">{mod.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{mod.subtitle}</p>
              
              <ul className="space-y-1.5 pt-2">
                {mod.topics.slice(0, 4).map((t, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
