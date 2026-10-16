import React, { useState } from 'react';
import { 
  Globe, 
  ExternalLink, 
  Play, 
  Layers, 
  Sparkles, 
  Check, 
  Mail, 
  MessageCircle, 
  ArrowRight,
  Shield,
  Star,
  Film,
  Image as ImageIcon
} from 'lucide-react';
import { BOOTCAMP_INFO } from '../data/bootcampData';

interface PortfolioShowcaseProps {
  onOpenEnroll: () => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onOpenEnroll }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'videos' | 'graphics' | 'services'>('all');
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const portfolioProjects = [
    {
      id: "proj-1",
      type: "videos",
      title: "AI UGC Skincare Promo Reel",
      client: "GlowAura Beauty",
      description: "AI-generated avatar testimonial & dynamic B-roll clips for TikTok/Instagram ads.",
      duration: "0:30",
      format: "9:16 Vertical Video",
      tags: ["AI Voiceover", "CapCut AI", "UGC Video"],
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: "proj-2",
      type: "graphics",
      title: "5-Slide Educational Carousel",
      client: "FinTrack App",
      description: "High-save rate carousel explaining smart budget hacks with branded gradients.",
      duration: "5 Slides",
      format: "1080 x 1350 Carousel",
      tags: ["Canva AI", "Brand Kit", "Copywriting"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: "proj-3",
      type: "videos",
      title: "Real Estate Property Showcase",
      client: "Apex Realty Group",
      description: "AI voiceover tour highlighting luxury apartment amenities with motion graphics.",
      duration: "0:45",
      format: "16:9 Promo Video",
      tags: ["Voice AI", "Motion Captions", "Property Tour"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: "proj-4",
      type: "graphics",
      title: "Launch Event Flyer & Banner",
      client: "TechNexus Summit",
      description: "Eye-catching corporate webinar flyer created with custom AI backgrounds in Canva.",
      duration: "Print & Digital",
      format: "A4 Flyer + Story",
      tags: ["AI Image Gen", "Typography", "Event Flyer"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=80"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.type === activeTab);

  return (
    <section className="py-16 md:py-24 bg-slate-900/40 relative border-t border-slate-800/80" id="portfolio-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Module 03 Highlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            BUILD YOUR OWN PORTFOLIO WEBSITE
          </h2>
          <p className="text-base text-slate-300">
            One of the biggest problems beginners face is: 
            <span className="italic text-slate-200"> “I know how to do it, but I don't have anything to show people.”</span>
            <br />
            <strong className="text-emerald-400">We're fixing that.</strong>
          </p>
        </div>

        {/* The Comparison: "I'm still learning" vs "Here is my portfolio link" */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
          <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 text-slate-300">
            <span className="text-xs font-bold uppercase text-rose-400 block mb-1">❌ What Most Beginners Say:</span>
            <p className="text-sm font-semibold text-white">Client: “Can I see your previous work?”</p>
            <p className="text-xs text-slate-400 mt-1 italic">“Umm, I'm still learning... let me send you a scattered Google Drive link next week.”</p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-slate-300">
            <span className="text-xs font-bold uppercase text-emerald-400 block mb-1">✅ What You Will Send After This Bootcamp:</span>
            <p className="text-sm font-semibold text-white">Client: “Can I see your previous work?”</p>
            <p className="text-xs text-emerald-300 mt-1 font-bold">
              “Sure! Here is my live portfolio: <span className="underline">yourname.carrd.co</span> with my recent video ads, graphics, and pricing packages.”
            </p>
          </div>
        </div>

        {/* Interactive Mockup Browser Frame */}
        <div className="bg-slate-950 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden max-w-5xl mx-auto">
          
          {/* Browser Header Bar */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            <div className="flex items-center gap-2 bg-slate-950 px-4 py-1 rounded-lg border border-slate-800 text-xs text-slate-400 font-mono">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>https://alex-creator.carrd.co (Sample Student Portfolio)</span>
            </div>

            <div className="text-[11px] text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-800">
              Live Mockup
            </div>
          </div>

          {/* Simulated Portfolio Content Body */}
          <div className="p-6 sm:p-8 space-y-8 bg-slate-950">
            
            {/* Student Hero Header in Portfolio */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-4 text-left">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center font-extrabold text-slate-950 text-xl font-display shadow-md">
                  AO
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-display">Alex O. — AI Content Creator & Video Specialist</h4>
                  <p className="text-xs text-slate-400">Helping brands generate high-converting video reels & Canva visuals with AI</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Retainers
                </span>
              </div>
            </div>

            {/* Filter Navigation Inside Portfolio */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${activeTab === 'all' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
                >
                  All Showcase Projects (4)
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${activeTab === 'videos' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
                >
                  🎬 AI Videos (2)
                </button>
                <button
                  onClick={() => setActiveTab('graphics')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${activeTab === 'graphics' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
                >
                  🎨 Canva Graphics (2)
                </button>
              </div>

              <span className="text-xs text-slate-400 hidden sm:block">
                Built with <strong>Carrd / Notion / Bento</strong> (Zero Coding)
              </span>
            </div>

            {/* Portfolio Projects Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {filteredProjects.map((proj) => (
                <div 
                  key={proj.id}
                  className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div className="relative h-44 overflow-hidden bg-slate-800">
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-white uppercase border border-slate-700">
                        {proj.format}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        {proj.type === 'videos' ? <Film className="w-3.5 h-3.5" /> : <ImageIcon className="w-3.5 h-3.5" />}
                        {proj.client}
                      </span>
                      <span className="text-[11px] text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded font-mono">
                        {proj.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h5 className="font-bold text-sm text-white">{proj.title}</h5>
                    <p className="text-xs text-slate-400 line-clamp-2">{proj.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service & Contact Section Preview inside Portfolio */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Services & Pricing Packages
                </span>
                <p className="text-sm font-semibold text-white">
                  Monthly Retainers from ₦60,000 / month (12 Reels + 8 Branded Graphics)
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3.5 py-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Booking</span>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Portfolio CTA summary */}
        <div className="text-center mt-10">
          <p className="text-sm text-slate-300 mb-4">
            You will build and launch your own portfolio link during the bootcamp in Module 03.
          </p>
          <button
            onClick={onOpenEnroll}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
          >
            <span>Claim Your Spot for {BOOTCAMP_INFO.launchPrice}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
