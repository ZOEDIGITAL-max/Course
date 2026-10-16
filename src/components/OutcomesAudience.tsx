import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { BY_THE_END_LIST, WHO_IS_THIS_FOR, BOOTCAMP_INFO } from '../data/bootcampData';

interface OutcomesAudienceProps {
  onOpenEnroll: () => void;
}

export const OutcomesAudience: React.FC<OutcomesAudienceProps> = ({ onOpenEnroll }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-emerald-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    Briefcase: <Briefcase className="w-5 h-5 text-blue-400" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-cyan-400" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-rose-400" />,
    Layers: <Layers className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section className="py-16 md:py-24 bg-slate-900/50 relative border-y border-slate-800/80" id="outcomes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* BLOCK 1: BY THE END OF THE BOOTCAMP, YOU SHOULD HAVE */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Guaranteed Practical Takeaways</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              BY THE END OF THE BOOTCAMP, YOU SHOULD HAVE:
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Concrete assets and skills you can immediately showcase, publish, and monetize.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {BY_THE_END_LIST.map((item, index) => (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-start gap-3.5 group shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <Check className="w-3.5 h-3.5 text-emerald-400 group-hover:text-slate-950" />
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-semibold leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 2: THIS IS FOR YOU IF... */}
        <div id="who-is-this-for">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ideal Participant Profiles</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              THIS IS FOR YOU IF...
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Whether you are starting from zero or looking to 10x your current content output:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-10">
            {WHO_IS_THIS_FOR.map((profile, i) => (
              <div 
                key={i}
                className="p-6 rounded-3xl bg-slate-950 border border-slate-800/90 hover:border-slate-700 transition-all space-y-3 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {iconMap[profile.icon]}
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {profile.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-white font-display mb-1.5">{profile.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {profile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Zero Pre-requisites Reassurance Banner */}
          <div className="bg-gradient-to-r from-emerald-950/40 via-slate-950 to-teal-950/40 p-6 sm:p-8 rounded-3xl border border-emerald-500/30 max-w-4xl mx-auto text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span> You don't need to know how to code.
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span> You don't need to be a professional designer.
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span> You don't need expensive equipment.
              </span>
            </div>

            <div className="pt-2">
              <p className="text-base sm:text-lg font-bold text-white">
                You just need the willingness to learn and actually practice.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnroll}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
              >
                <span>JOIN NOW FOR {BOOTCAMP_INFO.launchPrice}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
