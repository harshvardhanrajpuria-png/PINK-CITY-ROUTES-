import React, { useState, useEffect, useRef } from 'react';
import { Lock, Unlock, Eye, EyeOff, ShieldCheck, X, AlertCircle, Sparkles } from 'lucide-react';
import { verifyAdminPasscode, setAdminSessionActive } from '../utils/adminAuth';

interface AdminPasscodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AdminPasscodeModal: React.FC<AdminPasscodeModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [pin, setPin] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setPin('');
      setError(null);
      setIsVerifying(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setError(null);

    if (verifyAdminPasscode(pin)) {
      setAdminSessionActive(true);
      setTimeout(() => {
        setIsVerifying(false);
        onSuccess();
        onClose();
      }, 300);
    } else {
      setTimeout(() => {
        setIsVerifying(false);
        setError('Incorrect passcode. Access is restricted to verified administrators.');
        setPin('');
        inputRef.current?.focus();
      }, 350);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#101B2B] via-[#1A2A40] to-[#101B2B] p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-[#C83E5C]/20 border border-[#C83E5C]/40 text-[#C83E5C] flex items-center justify-center mx-auto mb-3 shadow-inner">
            <Lock className="w-6 h-6 text-pink-400" />
          </div>

          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full mb-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            Harsh Vardhan Gupta, Ananya Gupta & Editorial Access
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
            Admin Passcode Required
          </h3>

          <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
            Blog publishing and management controls are reserved for Pinkcityroutes administrators.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2 text-xs text-rose-700 animate-in shake">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Enter Secret Admin Passcode / PIN
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type={showPassword ? 'text' : 'password'}
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="Enter passcode..."
                className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl pl-4 pr-11 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C] font-mono tracking-wider"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-slate-600 p-1"
                aria-label={showPassword ? 'Hide passcode' : 'Show passcode'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
              <span>Regular visitors can browse and read all travel stories freely.</span>
            </p>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 px-4 rounded-xl border border-stone-300 text-xs font-bold text-slate-700 hover:bg-stone-100 transition-colors"
            >
              Cancel (View Only)
            </button>

            <button
              type="submit"
              disabled={isVerifying || !pin.trim()}
              className="flex-1 py-2.5 px-4 rounded-xl bg-[#C83E5C] hover:bg-[#B0334E] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>{isVerifying ? 'Verifying...' : 'Unlock Controls'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
