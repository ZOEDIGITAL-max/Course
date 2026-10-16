import React from 'react';
import { 
  Check, 
  Sparkles, 
  Gift, 
  ArrowRight, 
  ShieldCheck, 
  Flame,
  CheckCircle2
} from 'lucide-react';
import { OFFER_STACK, BOOTCAMP_INFO } from '../data/bootcampData';

interface OfferStackProps {
  onOpenEnroll: () => void;
}

export const OfferStack: React.FC<OfferStackProps> = ({ onOpenEnroll }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/60 relative border-t border-slate-800/80" id="offer-stack">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>The Complete Bundle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            WHAT YOU GET
          </h2>
          <p className="text-base text-slate-300">
            A complete end-to-end curriculum, no-code portfolio system, and daily visibility engine.
          </p>
        </div>

        {/* Stack Items List */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-4 mb-8">
          {OFFER_STACK.map((item, idx) => (
            <div 
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border transition-all ${
                item.isBonus 
                  ? 'bg-gradient-to-r from-emerald-950/40 via-slate-900 to-amber-950/20 border-emerald-500/40 shadow-sm' 
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                  item.isBonus ? 'bg-amber-500 text-slate-950' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                }`}>
                  {item.isBonus ? <Gift className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-base sm:text-lg text-white font-display">
                      {item.title}
                    </h4>
                    {item.isBonus && (
                      <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        FREE BONUS
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-right sm:pl-4">
                <span className="text-xs uppercase text-slate-500 block font-semibold">Value</span>
                <span className="text-sm sm:text-base font-bold text-slate-400 line-through">
                  {item.value}
                </span>
              </div>
            </div>
          ))}

          {/* Pricing Total Summary Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/50 mt-8 text-center space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-slate-300">
              <div>
                <span className="text-xs uppercase text-slate-400 block font-semibold">Total Value</span>
                <span className="text-xl font-bold text-slate-400 line-through">₦100,000+</span>
              </div>
              
              <div className="hidden sm:block text-slate-600">|</div>

              <div>
                <span className="text-xs uppercase text-slate-400 block font-semibold">Regular Price</span>
                <span className="text-xl font-bold text-slate-400 line-through">{BOOTCAMP_INFO.regularPrice}</span>
              </div>

              <div className="hidden sm:block text-slate-600">|</div>

              <div>
                <span className="text-xs uppercase text-emerald-400 block font-black">LAUNCH PRICE</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                  {BOOTCAMP_INFO.launchPrice}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-300 font-semibold max-w-xl mx-auto">
              Get complete instant access to all 4 training modules + Portfolio website templates + 14-day challenge + 10 Ways to Make Your First ₦1.5 Million Online in 2026.
            </p>

            <button
              onClick={onOpenEnroll}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 shadow-xl shadow-emerald-500/25 transition-all hover:scale-105"
            >
              <span>CLAIM EVERYTHING FOR {BOOTCAMP_INFO.launchPrice}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
