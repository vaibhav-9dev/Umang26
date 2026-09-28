import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LaurelWreath, GreekMeanderStrip } from './GreekDecorations';
import templeSunsetImg from '../assets/images/olympus_temple_sunset_1790530195373.jpg';

interface FinalCTAProps {
  onRegisterNow: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRegisterNow }) => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden flex items-center justify-center">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src={templeSunsetImg}
          alt="Majestic temple at Mount Olympus summit bathed in sunset rays"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Dark Vignette & Gold Atmospheric Overlay */}
        <div className="absolute inset-0 bg-[#0B0B0D]/85 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Greek Decorative Accent */}
        <div className="inline-flex items-center gap-3 mb-6">
          <LaurelWreath className="w-6 h-6 text-[#C9A227]" />
          <span className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#DFBF52]">
            THE TIME HAS COME
          </span>
          <LaurelWreath className="w-6 h-6 text-[#C9A227] scale-x-[-1]" />
        </div>

        {/* Heading */}
        <h2 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-[0.14em] text-[#F1EBDD] leading-tight mb-6">
          YOUR OLYMPUS AWAITS
        </h2>

        {/* Subtitle / Text */}
        <p className="font-cinzel text-base sm:text-xl font-semibold uppercase tracking-[0.24em] text-[#C9A227] mb-8">
          Choose your sport. Gather your team. Enter the arena.
        </p>

        {/* Direct Register Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRegisterNow}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0B0B0D] bg-gradient-to-r from-[#DFBF52] via-[#C9A227] to-[#DFBF52] border border-[#FFF0C2]/50 shadow-[0_0_35px_rgba(201,162,39,0.4)] hover:shadow-[0_0_50px_rgba(201,162,39,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-4 h-4 text-[#0B0B0D]" />
          </button>
        </div>

        {/* Quick reminder */}
        <p className="font-sans text-xs text-[#AAA398] mt-6 tracking-wide">
          Direct Google Form registration · No account creation or login required
        </p>

      </div>

      {/* Decorative Meander Line on bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <GreekMeanderStrip className="w-full h-2 text-[#C9A227]" opacity="opacity-30" />
      </div>
    </section>
  );
};
