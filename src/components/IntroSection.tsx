import React from 'react';
import { GreekColumnIcon, LaurelWreath, OlympianDivider } from './GreekDecorations';
import greekStatueImg from '../assets/images/olympus_greek_statue_1790530183863.jpg';
import { TOTAL_SPORTS_COUNT, TOTAL_EVENTS_COUNT } from '../data/sportsData';

export const IntroSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0B0D] overflow-hidden" id="intro">
      {/* Subtle radial backdrop accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A227]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Classical Pillar & Statue Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Classical Frame */}
              <div className="relative p-2 border border-[#C9A227]/30 bg-[#171513]/60 shadow-2xl">
                {/* Corner Accents */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#C9A227]" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#C9A227]" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#C9A227]" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#C9A227]" />

                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#131210]">
                  <img
                    src={greekStatueImg}
                    alt="Classical Greek athletic statue sculpted in marble and bronze under dramatic lighting"
                    className="w-full h-full object-cover object-center filter contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-80" />

                  {/* Classical Inscription Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0B0B0D]/85 backdrop-blur-md border border-[#C9A227]/25 flex items-center justify-between">
                    <div>
                      <span className="font-cinzel text-[10px] uppercase tracking-[0.25em] text-[#AAA398] block">
                        ATHLETIC TRADITION
                      </span>
                      <span className="font-cinzel text-xs font-bold tracking-[0.18em] text-[#F1EBDD]">
                        HONOUR · VALOUR · STRENGTH
                      </span>
                    </div>
                    <GreekColumnIcon className="w-4 h-8 text-[#C9A227]" />
                  </div>
                </div>
              </div>

              {/* Behind-frame decorative Greek accent line */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-[#C9A227]/20 pointer-events-none hidden sm:block" />
            </div>
          </div>

          {/* Right Column: Editorial Narrative & The Olympus Calls */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header label */}
            <div className="flex items-center gap-2 mb-3">
              <LaurelWreath className="w-5 h-5 text-[#C9A227]" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-[#C9A227]">
                UMANG 2026 EDITION
              </span>
            </div>

            {/* Monumental Section Title */}
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[0.16em] text-[#F1EBDD] leading-tight">
              THE OLYMPUS CALLS
            </h2>

            {/* Gold Hairline Divider */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#C9A227] to-transparent my-6" />

            {/* Narrative text */}
            <p className="font-sans text-base sm:text-lg text-[#AAA398] leading-relaxed mb-6 font-light">
              Umang returns in 2026, bringing athletes and teams together for a celebration of competition, athleticism and campus spirit. Choose your arena. Gather your team. Enter the games.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#AAA398]/80 leading-relaxed mb-10 font-light">
              Rooted in the eternal legacy of ancient Olympia and ignited by the fierce collegiate pride of IIIT Bangalore, every match is a crucible of determination, team synergy, and relentless passion.
            </p>

            {/* Roman-inspired Three Stat Pillars */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-[#C9A227]/20">
              
              {/* Stat 1: 09 Sports */}
              <div className="flex flex-col">
                <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#8C6239] mb-1">
                  ARENAS
                </span>
                <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-gold-gradient tracking-tight tabular-nums">
                  0{TOTAL_SPORTS_COUNT}
                </span>
                <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#F1EBDD] uppercase mt-1">
                  SPORTS
                </span>
              </div>

              {/* Stat 2: 18 Events */}
              <div className="flex flex-col">
                <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#8C6239] mb-1">
                  CONTESTS
                </span>
                <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-gold-gradient tracking-tight tabular-nums">
                  {TOTAL_EVENTS_COUNT}
                </span>
                <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#F1EBDD] uppercase mt-1">
                  EVENTS
                </span>
              </div>

              {/* Stat 3: 01 Olympus */}
              <div className="flex flex-col">
                <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#8C6239] mb-1">
                  PANTHÉON
                </span>
                <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-gold-gradient tracking-tight tabular-nums">
                  01
                </span>
                <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#F1EBDD] uppercase mt-1">
                  OLYMPUS
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

      <div className="mt-20">
        <OlympianDivider />
      </div>
    </section>
  );
};
