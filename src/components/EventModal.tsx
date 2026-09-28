import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { Sport, SportEvent } from '../data/sportsData';
import { openRegistrationForm } from '../config/registrationLinks';
import { LaurelWreath, GreekColumnIcon } from './GreekDecorations';

interface EventModalProps {
  sport: Sport | null;
  onClose: () => void;
  onEventRegistered: (eventName: string) => void;
}

export const EventModal: React.FC<EventModalProps> = ({
  sport,
  onClose,
  onEventRegistered,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (sport) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sport, onClose]);

  if (!sport) return null;

  const handleRegisterClick = (event: SportEvent) => {
    openRegistrationForm(event.registrationKey);
    onEventRegistered(`${sport.name} - ${event.name}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#0B0B0D]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-sport-title"
    >
      {/* Modal Card Container */}
      <div
        className="relative w-full max-w-2xl bg-[#141210] border border-[#C9A227]/40 shadow-[0_0_50px_rgba(0,0,0,0.9)] p-6 sm:p-8 text-[#F1EBDD] my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Greek Classical Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C9A227]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C9A227]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C9A227]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C9A227]" />

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#C9A227]/20 pb-5 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-cinzel text-xs font-semibold text-[#8C6239] tracking-[0.2em] uppercase">
                ARENA {sport.orderNumber}
              </span>
              <span className="text-[#AAA398]/40">·</span>
              <span className="font-cinzel text-xs text-[#AAA398] tracking-widest uppercase">
                {sport.greekDeity}
              </span>
            </div>

            <h3
              id="modal-sport-title"
              className="font-cinzel text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.16em] text-[#F1EBDD]"
            >
              {sport.name}
            </h3>

            <p className="font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-[#DFBF52] mt-0.5">
              {sport.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#AAA398] hover:text-[#C9A227] hover:bg-[#1f1d19] border border-white/5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A227]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable Events Area */}
        <div className="overflow-y-auto py-6 pr-1 space-y-4">
          <div className="p-3 bg-[#1B1916]/80 border border-[#C9A227]/15 mb-2">
            <p className="font-sans text-xs text-[#AAA398] italic leading-relaxed">
              &ldquo;{sport.mythosQuote}&rdquo;
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 pb-1">
            <span className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#AAA398]">
              AVAILABLE EVENTS ({sport.events.length})
            </span>
            <span className="text-[11px] font-sans text-[#AAA398]/70">
              Direct Google Form Registration
            </span>
          </div>

          {/* List of Events */}
          <div className="space-y-3">
            {sport.events.map((event) => (
              <div
                key={event.id}
                className="group relative p-4 bg-[#181614] hover:bg-[#1E1C18] border border-white/10 hover:border-[#C9A227]/50 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Event Information */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-cinzel text-sm sm:text-base font-bold tracking-[0.12em] text-[#F1EBDD] group-hover:text-[#DFBF52] transition-colors">
                      {event.name}
                    </span>
                    <span className="text-[10px] font-sans px-1.5 py-0.5 uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 border border-[#C9A227]/30">
                      {event.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#AAA398]">
                    <span>Format: {event.format}</span>
                    <span>·</span>
                    <span className="text-[#AAA398]/70 italic">{event.notes}</span>
                  </div>
                </div>

                {/* Direct Register Action Button */}
                <button
                  onClick={() => handleRegisterClick(event)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-[#0B0B0D] bg-gradient-to-r from-[#DFBF52] via-[#C9A227] to-[#DFBF52] hover:brightness-110 active:scale-[0.98] border border-[#FFF0C2]/40 shadow-md transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
                  title={`Register for ${event.name}`}
                >
                  <span>REGISTER</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0B0B0D]" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-[#C9A227]/20 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-[#AAA398] shrink-0">
          <div className="flex items-center gap-2">
            <LaurelWreath className="w-4 h-4 text-[#C9A227]" />
            <span>Registration takes you directly to the official Google Form</span>
          </div>

          <button
            onClick={onClose}
            className="font-cinzel uppercase tracking-[0.2em] text-[#AAA398] hover:text-[#F1EBDD] text-left sm:text-right"
          >
            RETURN TO ARENA
          </button>
        </div>
      </div>
    </div>
  );
};
