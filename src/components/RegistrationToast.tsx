import React, { useEffect } from 'react';
import { ExternalLink, CheckCircle, X } from 'lucide-react';

interface RegistrationToastProps {
  eventName: string | null;
  onClose: () => void;
}

export const RegistrationToast: React.FC<RegistrationToastProps> = ({ eventName, onClose }) => {
  useEffect(() => {
    if (!eventName) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [eventName, onClose]);

  if (!eventName) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#171513] border border-[#C9A227]/60 shadow-[0_0_30px_rgba(201,162,39,0.3)] p-4 text-[#F1EBDD] relative">
        {/* Corner Greek Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#C9A227]" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#C9A227]" />

        <div className="flex items-start gap-3">
          <div className="p-1.5 bg-[#C9A227]/20 border border-[#C9A227]/40 shrink-0 mt-0.5">
            <CheckCircle className="w-4 h-4 text-[#C9A227]" />
          </div>

          <div className="flex-1 pr-2">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#DFBF52]">
              Redirecting to Google Form
            </h4>
            <p className="font-sans text-xs text-[#AAA398] mt-1 leading-snug">
              Official registration form for <strong className="text-[#F1EBDD] font-medium">{eventName}</strong> opened in a new tab.
            </p>
            <div className="flex items-center gap-1 mt-2 text-[10px] font-cinzel tracking-wider text-[#C9A227]/80">
              <ExternalLink className="w-3 h-3" />
              <span>Complete your registration in Google Forms</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#AAA398] hover:text-[#F1EBDD] p-1 transition-colors"
            aria-label="Dismiss notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
