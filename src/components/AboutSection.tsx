import React from 'react';
import { LaurelWreath, GreekColumnIcon, OlympianDivider } from './GreekDecorations';
import sportsArenaImg from '../assets/images/olympus_athletics_arena_1790530172404.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0E0D0B] overflow-hidden" id="about">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={sportsArenaImg}
          alt="Atmospheric dark sports arena with classical Greek marble colonnades"
          className="w-full h-full object-cover filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0D0B] via-transparent to-[#0E0D0B]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Tag */}
        <div className="inline-flex items-center gap-2 mb-4">
          <LaurelWreath className="w-5 h-5 text-[#C9A227]" />
          <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            IIIT BANGALORE ANNUAL SPORTS FESTIVAL
          </span>
          <LaurelWreath className="w-5 h-5 text-[#C9A227] scale-x-[-1]" />
        </div>

        {/* Section Heading */}
        <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[0.14em] text-[#F1EBDD] leading-tight mb-8">
          ONE FESTIVAL. ONE ARENA.
        </h2>

        {/* Narrative Copy */}
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-base sm:text-xl text-[#F1EBDD]/90 leading-relaxed font-light mb-6">
            Umang 2026 brings together students and athletes for a celebration of sport, competition and community. Inspired by the legendary arenas of Olympus, this year's edition invites every competitor to step forward and create their own legend.
          </p>

          <p className="font-sans text-sm sm:text-base text-[#AAA398] leading-relaxed font-light mb-12">
            From the roaring hardwood of the basketball court to the quiet contemplation of the chessboard, Umang celebrates collegiate athletic prowess, unshakeable camaraderie, and the timeless pursuit of greatness.
          </p>
        </div>

        {/* 3 Pillars of Olympus Reborn */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6 border-t border-[#C9A227]/20">
          
          <div className="p-6 bg-[#141210]/90 border border-white/5 hover:border-[#C9A227]/40 transition-colors">
            <div className="w-8 h-8 rounded-none border border-[#C9A227]/60 flex items-center justify-center mb-4 text-[#C9A227]">
              <GreekColumnIcon className="w-4 h-6" />
            </div>
            <h3 className="font-cinzel text-sm font-bold uppercase tracking-[0.18em] text-[#F1EBDD] mb-2">
              ATHLETIC EXCELLENCE
            </h3>
            <p className="font-sans text-xs text-[#AAA398] leading-relaxed">
              Every arena is primed for high-octane collegiate competition, pushing limits and setting new benchmarks of physical achievement.
            </p>
          </div>

          <div className="p-6 bg-[#141210]/90 border border-white/5 hover:border-[#C9A227]/40 transition-colors">
            <div className="w-8 h-8 rounded-none border border-[#C9A227]/60 flex items-center justify-center mb-4 text-[#C9A227]">
              <LaurelWreath className="w-4 h-4" />
            </div>
            <h3 className="font-cinzel text-sm font-bold uppercase tracking-[0.18em] text-[#F1EBDD] mb-2">
              HONOUR & FAIR PLAY
            </h3>
            <p className="font-sans text-xs text-[#AAA398] leading-relaxed">
              True victory is won not only on the scoreboard, but through noble conduct, mutual respect, and unyielding sportsmanship.
            </p>
          </div>

          <div className="p-6 bg-[#141210]/90 border border-white/5 hover:border-[#C9A227]/40 transition-colors">
            <div className="w-8 h-8 rounded-none border border-[#C9A227]/60 flex items-center justify-center mb-4 text-[#C9A227]">
              <span className="font-cinzel text-xs font-bold">IIITB</span>
            </div>
            <h3 className="font-cinzel text-sm font-bold uppercase tracking-[0.18em] text-[#F1EBDD] mb-2">
              CAMPUS SPIRIT
            </h3>
            <p className="font-sans text-xs text-[#AAA398] leading-relaxed">
              A vibrant celebration uniting colleges across the region under the grand banner of Umang, forging memories that outlast the season.
            </p>
          </div>

        </div>

      </div>

      <div className="mt-20">
        <OlympianDivider />
      </div>
    </section>
  );
};
