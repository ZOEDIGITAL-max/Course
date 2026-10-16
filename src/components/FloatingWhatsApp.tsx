import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BOOTCAMP_INFO } from '../data/bootcampData';

interface FloatingWhatsAppProps {
  onOpenWhatsApp: () => void;
  onOpenEnroll: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenWhatsApp, onOpenEnroll }) => {
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bottom bar after scrolling past 400px
      setShowBottomBar(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Bubble (Bottom Right) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenWhatsApp}
          className="group flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-lg shadow-emerald-500/40 cursor-pointer border border-emerald-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-slate-950 fill-current" />
          <span className="hidden sm:inline font-extrabold text-xs tracking-tight uppercase">
            Questions? Chat
          </span>
        </motion.button>
      </div>

      {/* Sticky Mobile/Tablet Bottom Quick Conversion Bar */}
      <AnimatePresence>
        {showBottomBar && (
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed bottom-0 left-0 right-0 z-30 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 p-3 sm:p-4 md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-3"
          >
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block">
                Launch Price: <span className="line-through">{BOOTCAMP_INFO.regularPrice}</span>
              </span>
              <span className="text-base font-extrabold text-white font-display">
                {BOOTCAMP_INFO.launchPrice}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenWhatsApp}
                className="p-2.5 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-400 hover:bg-slate-800 text-xs shadow-sm shadow-emerald-500/10 cursor-pointer"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenEnroll}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 text-xs shadow-md shadow-emerald-500/25 cursor-pointer"
              >
                <span>JOIN NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
