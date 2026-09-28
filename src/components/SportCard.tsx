import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Sport, SportEvent } from '../data/sportsData';
import { openRegistrationForm } from '../config/registrationLinks';
import { GreekMeanderStrip, LaurelWreath } from './GreekDecorations';

interface SportCardProps {
  sport: Sport;
  onSelectSport: (sport: Sport) => void;
  onEventRegistered: (eventName: string) => void;
}

export const SportCard: React.FC<SportCardProps> = ({
  sport,
  onSelectSport,
  onEventRegistered,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleRegister = (e: React.MouseEvent, event: SportEvent) => {
    e.stopPropagation();
    openRegistrationForm(event.registrationKey);
    onEventRegistered(`${sport.name} - ${event.name}`);
  };

  return (
    <div className="group relative bg-[#131210] border border-[#C9A227]/25 hover:border-[#C9A227]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_0_35px_rgba(201,162,39,0.18)]">
      {/* Classical Corner Notches */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors z-10" />
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors z-10" />
      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors z-10" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors z-10" />

      {/* Subtle Greek Background Texture & Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#171513] via-[#131210] to-[#0D0C0A] opacity-90" />
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#C9A227]/5 rounded-full blur-2xl group-hover:bg-[#C9A227]/10 transition-colors pointer-events-none" />

      {/* Card Header Content */}
      <div className="relative z-10 p-6 sm:p-7 flex-1 flex flex-col">
        {/* Roman Order Numeral & Domain */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-xs font-bold text-[#8C6239] tracking-[0.2em]">
              ARENA {sport.orderNumber}
            </span>
            <span className="text-[#AAA398]/30">·</span>
            <span className="text-[11px] font-sans text-[#AAA398]/80 tracking-wider">
              {sport.events.length} {sport.events.length === 1 ? 'EVENT' : 'EVENTS'}
            </span>
          </div>
          <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#C9A227]/80">
            {sport.greekDeity.split('Domain of ')[1] || 'Olympus'}
          </span>
        </div>

        {/* Sport Name */}
        <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.14em] text-[#F1EBDD] group-hover:text-gold-light-gradient transition-all">
          {sport.name}
        </h3>

        {/* Mythology Subtitle */}
        <p className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#C9A227] mt-1 mb-3">
          {sport.subtitle}
        </p>

        {/* Mythos Quote */}
        <p className="font-sans text-xs text-[#AAA398] italic leading-relaxed mb-6 font-light">
          &ldquo;{sport.mythosQuote}&rdquo;
        </p>

        {/* Events Preview Pills */}
        <div className="mt-auto pt-4 border-t border-white/5">
          <div className="flex items-center justify-between text-xs text-[#AAA398] mb-2.5">
            <span className="font-cinzel text-[10px] uppercase tracking-[0.2em]">
              EVENTS LIST
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 text-[11px] text-[#C9A227] hover:underline cursor-pointer"
            >
              <span>{isExpanded ? 'Hide' : 'Quick view'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Quick Expandable Event Register Drawer */}
          {isExpanded && (
            <div className="space-y-2 mb-4 animate-in fade-in duration-200">
              {sport.events.map((event) => (
                <div
                  key={event.id}
                  className="p-2.5 bg-[#1B1916] border border-[#C9A227]/20 flex items-center justify-between gap-2"
                >
                  <div className="truncate pr-2">
                    <span className="font-cinzel text-xs text-[#F1EBDD] font-medium block truncate">
                      {event.name}
                    </span>
                    <span className="text-[10px] text-[#AAA398]">
                      {event.format}
                    </span>
                  </div>

                  <button
                    onClick={(e) => handleRegister(e, event)}
                    className="px-3 py-1 bg-[#C9A227] hover:bg-[#DFBF52] text-[#0B0B0D] font-cinzel text-[10px] font-bold uppercase tracking-wider shrink-0 transition-colors flex items-center gap-1"
                    title={`Register for ${event.name}`}
                  >
                    <span>REGISTER</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Collapsed event summary */}
          {!isExpanded && (
            <div className="text-xs text-[#AAA398]/70 flex flex-wrap gap-x-2 gap-y-1">
              {sport.events.map((ev, i) => (
                <span key={ev.id}>
                  {ev.name}
                  {i < sport.events.length - 1 && <span className="text-[#AAA398]/30 ml-2">/</span>}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Greek Meander Accent Line */}
      <GreekMeanderStrip className="w-full h-1.5 text-[#C9A227]" opacity="opacity-30" />

      {/* Card Action: VIEW EVENTS Button */}
      <div className="relative z-10 p-5 pt-0 bg-transparent">
        <button
          onClick={() => onSelectSport(sport)}
          className="w-full py-3 px-4 font-cinzel text-xs font-bold uppercase tracking-[0.24em] text-[#F1EBDD] bg-[#181614] hover:bg-[#C9A227] hover:text-[#0B0B0D] border border-[#C9A227]/40 hover:border-[#C9A227] transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(201,162,39,0.25)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A227]"
        >
          <span>VIEW EVENTS</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
