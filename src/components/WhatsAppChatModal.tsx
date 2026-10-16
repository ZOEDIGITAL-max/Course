import React from 'react';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BOOTCAMP_INFO } from '../data/bootcampData';

interface WhatsAppChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppChatModal: React.FC<WhatsAppChatModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLaunchWhatsApp = () => {
    window.open(BOOTCAMP_INFO.whatsappLink, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
          className="relative w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-slate-950 shadow-md">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base font-display">Chat with ZoeDigital</h3>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online & Ready to Help</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6 text-center">
            
            <div className="space-y-2">
              <p className="text-sm text-slate-300">
                Have a question about the bootcamp, curriculum, or payment? Send us a message directly on WhatsApp.
              </p>
            </div>

            {/* Launch Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLaunchWhatsApp}
              className="w-full py-4 px-4 rounded-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all text-sm cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Continue to WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <div className="pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-400 mb-1">
                For those who couldn't click the link directly:
              </p>
              <p className="text-sm font-mono font-bold text-emerald-400 bg-slate-950 py-2 rounded-lg border border-slate-800">
                WhatsApp: {BOOTCAMP_INFO.whatsappDisplay}
              </p>
              <p className="text-[10px] text-slate-500 mt-2">
                Link: {BOOTCAMP_INFO.whatsappLink}
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
