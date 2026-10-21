import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  X,
  Compass,
  MessageSquare,
  Ticket,
  SlidersHorizontal,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';

interface TravelerAdvisoryModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const TravelerAdvisoryModal: React.FC<TravelerAdvisoryModalProps> = ({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [hasDismissedFloatingBadge, setHasDismissedFloatingBadge] = useState(false);

  // Sync external controlled state if provided
  const isModalOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleOpen = () => {
    if (externalIsOpen === undefined) {
      setInternalIsOpen(true);
    }
  };

  const handleClose = () => {
    if (externalOnClose) {
      externalOnClose();
    }
    setInternalIsOpen(false);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Listen to a custom global event so any button on the page can open this modal
  useEffect(() => {
    const handleTriggerEvent = () => {
      setInternalIsOpen(true);
    };
    window.addEventListener('open-traveler-advisory', handleTriggerEvent);
    return () => window.removeEventListener('open-traveler-advisory', handleTriggerEvent);
  }, []);

  return (
    <>
      {/* 1. Persistent Floating Corner Notice Badge (Bottom-Left to avoid clashing with Floating WhatsApp on right) */}
      {!hasDismissedFloatingBadge && (
        <div className="fixed bottom-5 left-5 z-40 max-w-xs animate-fade-in">
          <div className="bg-[#0F172A]/95 text-white backdrop-blur-md border border-amber-500/30 rounded-2xl shadow-2xl p-3.5 flex items-start gap-3 transition-transform hover:-translate-y-0.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
              <ShieldAlert className="w-5 h-5" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  Traveler Notice
                </span>
                <button
                  type="button"
                  onClick={() => setHasDismissedFloatingBadge(true)}
                  aria-label="Dismiss corner badge"
                  className="text-slate-400 hover:text-white p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-snug mt-0.5 line-clamp-2">
                Operational policy, monument ticket rules & pricing adjustments.
              </p>
              <button
                type="button"
                onClick={handleOpen}
                className="mt-2 text-[11px] font-bold text-amber-400 hover:text-amber-300 underline underline-offset-2 flex items-center gap-1 cursor-pointer"
              >
                <span>Read Full Advisory</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Full Traveler Advisory & Operational Policy Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden transform transition-all"
            role="dialog"
            aria-modal="true"
            aria-labelledby="advisory-title"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#101B2B] via-[#1E293B] to-[#101B2B] text-white p-6 sm:p-8 relative">
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close advisory notice"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Global Traveler Advisory & Policy</span>
              </div>

              <h2
                id="advisory-title"
                className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white"
              >
                Important Traveler Notice & Operational Policy
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                To guarantee transparency, comfort, and safety across every journey curated by
                Harsh Vardhan Gupta & Ananya Gupta, please review our 4 core operating principles.
              </p>
            </div>

            {/* Modal Body - 4 Pillars */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto bg-stone-50/50">
              {/* Pillar 1: Flexible Sightseeing Sequence */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    Flexible Sightseeing Sequence & Timing
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md">
                      Smart Flow
                    </span>
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The day-wise itinerary is suggestive and planned for the smoothest travel flow.
                    While Pinkcityroutes guarantees covering every promised destination and attraction
                    listed in the package, the sequence of visits, timing, or scheduled days may be
                    adjusted based on local traffic conditions, monument weekly closures, opening hours,
                    or weather conditions.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Instant Operational Updates & Communication */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    Instant Operational Updates & Chauffeur Coordination
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md">
                      24/7 WhatsApp
                    </span>
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Travelers will receive prompt arrival notifications, departure schedules, routing
                    updates, and chauffeur details directly from their dedicated trip coordinator and
                    private chauffeur via WhatsApp/call. Founders Harsh Vardhan Gupta & Ananya Gupta
                    maintain direct oversight throughout your tour.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Universal Monument Ticket Exclusion */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Ticket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    Universal Monument Ticket & Activity Exclusion
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-amber-100 text-amber-800 rounded-md">
                      Pay On-Site
                    </span>
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    All monument entrance tickets, camera permits, national park safari passes,
                    cycle-rickshaw fees, and boat ride tickets are strictly excluded across all
                    destinations and must be paid directly on site. This ensures zero markups and lets
                    travelers choose their own pace, guide level, or skip-the-line privileges.
                  </p>
                </div>
              </div>

              {/* Pillar 4: Vehicle & Accommodation Pricing Adjustments */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    Vehicle & Accommodation Pricing Adjustments
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-rose-100 text-rose-700 rounded-md">
                      Price on Request
                    </span>
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    All packages default to <strong className="text-slate-800">"Price on Request"</strong>.
                    Selecting vehicle upgrades (Sedan, SUV, Innova Crysta, Tempo Traveller, Luxury)
                    or choosing 5-Star luxury heritage palaces and resorts directly adjusts the final
                    package price based on seasonality and room availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 sm:p-6 bg-white border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Transparent terms guaranteed by Harsh Vardhan Gupta & Ananya Gupta</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={getGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask Founders on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Got It, Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
