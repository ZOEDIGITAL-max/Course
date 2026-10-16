import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const NAMES = [
  "Chinedu", "Amina", "Oluwaseun", "Ngozi", "Emeka", "Fatima", 
  "Chioma", "Ibrahim", "Kehinde", "Ada", "Bolaji", "Zainab", 
  "Chukwudi", "Olamide", "Nnamdi", "Tolu", "Kemi", "Abubakar", 
  "Ebuka", "Bisi", "Ade", "Yusuf", "Halima", "Precious", "Mercy", "Victor"
];

const LOCATIONS = [
  "Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Enugu", 
  "Asaba", "Owerri", "Uyo", "Jos", "Kaduna", "Benin City", 
  "Calabar", "Abeokuta", "Ilorin"
];

const TIMES = [
  "Just now", 
  "2 minutes ago", 
  "5 minutes ago", 
  "12 minutes ago", 
  "1 hour ago", 
  "15 minutes ago", 
  "3 minutes ago", 
  "45 minutes ago",
  "8 minutes ago"
];

const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export const SalesPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [buyer, setBuyer] = useState({ name: '', location: '', time: '' });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const triggerPopup = () => {
      setBuyer({
        name: getRandomItem(NAMES),
        location: getRandomItem(LOCATIONS),
        time: getRandomItem(TIMES)
      });
      setIsVisible(true);

      // Hide after 5 seconds
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Initial delay before first popup (10 seconds)
    const initialDelay = setTimeout(triggerPopup, 10000);

    // Recurring interval (every 25 seconds)
    const interval = setInterval(() => {
      // Only trigger if not already visible to avoid glitches
      setIsVisible((current) => {
        if (!current) {
          triggerPopup();
        }
        return current;
      });
    }, 25000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeoutId);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl p-3 shadow-2xl flex items-center gap-3 w-72 sm:w-80 cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          <div className="bg-emerald-500/20 text-emerald-400 rounded-full p-2 shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-200 truncate">
              <span className="font-bold text-white">{buyer.name}</span> from {buyer.location}
            </p>
            <p className="text-xs text-emerald-400 font-medium truncate">
              Just enrolled in the bootcamp!
            </p>
            <p className="text-[10px] text-slate-500 mt-0.5">
              {buyer.time}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
