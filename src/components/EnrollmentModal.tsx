import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  Building2, 
  MessageCircle, 
  Copy, 
  Check, 
  ArrowRight, 
  Sparkles,
  Lock,
  Gift
} from 'lucide-react';
import { BOOTCAMP_INFO } from '../data/bootcampData';
import { RegistrationFormData } from '../types';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWhatsApp: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose, onOpenWhatsApp }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    whatsappNumber: '',
    currentRole: 'Beginner / Aspirant',
    primaryGoal: 'Learn AI video & build my first portfolio',
    paymentMethod: 'bank_transfer'
  });
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(BOOTCAMP_INFO.bankDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.whatsappNumber) return;
    setStep(2);
  };

  const handleCompletePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 1200);
  };

  const generateWhatsAppConfirmationLink = () => {
    return BOOTCAMP_INFO.whatsappLink;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm font-display">AI Content Creator Bootcamp</h3>
              <p className="text-[11px] text-emerald-400 font-semibold">Launch Offer: {BOOTCAMP_INFO.launchPrice} (Reg {BOOTCAMP_INFO.regularPrice})</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="grid grid-cols-3 bg-slate-950/60 border-b border-slate-800 text-[11px] text-center font-medium">
          <div className={`py-2 border-b-2 transition-colors ${step >= 1 ? 'border-emerald-500 text-emerald-400 font-bold' : 'border-transparent text-slate-500'}`}>
            1. Your Info
          </div>
          <div className={`py-2 border-b-2 transition-colors ${step >= 2 ? 'border-emerald-500 text-emerald-400 font-bold' : 'border-transparent text-slate-500'}`}>
            2. Payment ({BOOTCAMP_INFO.launchPrice})
          </div>
          <div className={`py-2 border-b-2 transition-colors ${step === 3 ? 'border-emerald-500 text-emerald-400 font-bold' : 'border-transparent text-slate-500'}`}>
            3. Instant Access
          </div>
        </div>

        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Registration Form */}
          {step === 1 && (
            <form onSubmit={handleSubmitStep1} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Collins Chukwu"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsappNumber}
                    onChange={e => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    placeholder="e.g. 08123456789"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Current Status / Background
                </label>
                <select
                  value={formData.currentRole}
                  onChange={e => setFormData({ ...formData, currentRole: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 text-sm"
                >
                  <option value="Beginner / Aspirant">Absolute Beginner (No Experience)</option>
                  <option value="Content Creator / Social Media">Content Creator / Social Media Manager</option>
                  <option value="Freelancer / Virtual Assistant">Freelancer / Virtual Assistant</option>
                  <option value="Student / Graduate">Student / Young Professional</option>
                  <option value="Business Owner / Founder">Business Owner / Marketer</option>
                </select>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                <Gift className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Includes free bonus <strong>10 Ways to Make Your First ₦1.5M Online</strong> + VIP WhatsApp group.</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all text-sm mt-4 cursor-pointer"
              >
                <span>Continue to Secure Payment ({BOOTCAMP_INFO.launchPrice})</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          )}

          {/* STEP 2: Payment Options */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block">Enrolling:</span>
                  <span className="font-bold text-white text-sm">{formData.fullName}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 block">Amount Due:</span>
                  <span className="font-extrabold text-emerald-400 text-base">{BOOTCAMP_INFO.launchPrice}</span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'bank_transfer' })}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                    formData.paymentMethod === 'bank_transfer'
                      ? 'bg-slate-950 border-emerald-500 text-white'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold text-xs block">Direct Bank Transfer</span>
                    <span className="text-[10px] text-slate-400">Zero fee • Instant receipt</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                    formData.paymentMethod === 'card'
                      ? 'bg-slate-950 border-emerald-500 text-white'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold text-xs block">Card / Paystack</span>
                    <span className="text-[10px] text-slate-400">Mastercard / Visa / Verve</span>
                  </div>
                </button>
              </div>

              {/* Bank Transfer Details Box */}
              {formData.paymentMethod === 'bank_transfer' && (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Bank Name:</span>
                    <span className="font-bold text-white">{BOOTCAMP_INFO.bankDetails.bankName}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-emerald-400 text-sm">
                        {BOOTCAMP_INFO.bankDetails.accountNumber}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyAccount}
                        className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[10px] text-slate-200 font-bold flex items-center gap-1"
                      >
                        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Account Name:</span>
                    <span className="font-bold text-white">{BOOTCAMP_INFO.bankDetails.accountName}</span>
                  </div>

                  <p className="text-[11px] text-slate-400 italic">
                    💡 Please use <strong>{formData.fullName || 'Your Name'}</strong> as the transfer narration.
                  </p>
                </div>
              )}

              {/* Card option message */}
              {formData.paymentMethod === 'card' && (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-center text-xs text-slate-300">
                  <Lock className="w-5 h-5 text-emerald-400 mx-auto" />
                  <p className="font-semibold text-white">Instant Card Checkout</p>
                  <p className="text-slate-400 text-[11px]">
                    Supports Nigerian & International Cards. Click below to verify and complete enrollment.
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="button"
                  disabled={isProcessing}
                  onClick={handleCompletePayment}
                  className="w-full py-4 rounded-xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all text-sm cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Verifying Enrollment...</span>
                  ) : (
                    <>
                      <span>I Have Transferred / Confirm Payment ({BOOTCAMP_INFO.launchPrice})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                <div className="flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-slate-400 hover:text-white underline"
                  >
                    ← Edit my details
                  </button>

                  <a
                    href={generateWhatsAppConfirmationLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Send Receipt via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Onboarding & Access Granted */}
          {step === 3 && (
            <div className="text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase font-extrabold text-emerald-400 tracking-wider block mb-1">
                  Registration Successful
                </span>
                <h3 className="text-2xl font-extrabold text-white font-display">
                  Welcome to the Bootcamp, {formData.fullName}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  Your spot for the <strong>{BOOTCAMP_INFO.title}</strong> is reserved at the launch price of <strong>{BOOTCAMP_INFO.launchPrice}</strong>.
                </p>
              </div>

              {/* Access Links Box */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Your Next Steps:
                </h4>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                  <span className="font-bold text-white bg-emerald-500/20 px-2 py-0.5 rounded text-[10px]">Step 1</span>
                  <div className="text-slate-300">
                    Join the <strong>Private VIP WhatsApp Group</strong> to receive the schedule, templates, and classroom links.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                  <span className="font-bold text-white bg-emerald-500/20 px-2 py-0.5 rounded text-[10px]">Step 2</span>
                  <div className="text-slate-300">
                    Download the <strong>Bonus: 10 Ways to Make Your First ₦1.5M Online</strong> sent to <strong>{formData.email}</strong>.
                  </div>
                </div>
              </div>

              {/* Direct Access CTA */}
              <div className="space-y-3">
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={generateWhatsAppConfirmationLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-lg shadow-emerald-500/25 transition-all text-sm cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Open WhatsApp & Enter VIP Student Hub</span>
                </motion.a>

                <p className="text-[10px] text-slate-400 text-center font-mono mt-1">
                  Or message us directly at: {BOOTCAMP_INFO.whatsappDisplay}
                </p>

                <button
                  onClick={onClose}
                  className="w-full text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Close this window & return to page
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
