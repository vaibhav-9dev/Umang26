import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { LaurelWreath, GreekMeanderStrip } from './GreekDecorations';
import heroBgImage from '../assets/images/olympus_hero_cinematic_1790530158793.jpg';

interface HeroProps {
  onExploreSports: () => void;
  onRegisterNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSports, onRegisterNow }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with Cinematic Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Mount Olympus with majestic classical Greek temple columns and golden sunlight breaking through clouds"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-fade-in"
          referrerPolicy="no-referrer"
        />
        {/* Layered cinematic overlays: dark stone vignette and gold lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/75 to-[#0B0B0D]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B0B0D]/50 to-[#0B0B0D]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B0D] to-transparent" />
      </div>

      {/* Decorative Classical Borders */}
      <div className="absolute top-20 left-0 right-0 z-10 pointer-events-none">
        <GreekMeanderStrip className="w-full h-2 text-[#C9A227]" opacity="opacity-25" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Pre-title Label */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-5 border-y border-[#C9A227]/30 bg-[#171513]/40 backdrop-blur-sm">
          <LaurelWreath className="w-4 h-4 text-[#C9A227]" />
          <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#C9A227] uppercase">
            IIIT BANGALORE PRESENTS
          </span>
          <LaurelWreath className="w-4 h-4 text-[#C9A227] scale-x-[-1]" />
        </div>

        {/* Festival Title */}
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl tracking-[0.35em] text-[#F1EBDD]/90 uppercase font-medium mb-3">
          UMANG 2026
        </h2>

        {/* Monumental Theme Heading */}
        <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.12em] uppercase leading-[0.95] text-gold-gradient drop-shadow-2xl my-3">
          OLYMPOUS
          <span className="block text-[#F1EBDD] font-black tracking-[0.14em] text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-1">
            REBORN
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-cinzel text-base sm:text-xl md:text-2xl font-bold tracking-[0.24em] text-[#DFBF52] uppercase mt-4 mb-2 max-w-2xl">
          THE GAMES RETURN. THE GODS AWAKEN.
        </p>

        {/* Description & Supporting Text */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#AAA398] max-w-2xl mx-auto font-light leading-relaxed mt-2 mb-8">
          A celebration of sport, competition and campus spirit. Where legends rise, champions compete, and Olympus comes alive again.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onRegisterNow}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0B0B0D] bg-gradient-to-r from-[#DFBF52] via-[#C9A227] to-[#DFBF52] border border-[#FFF0C2]/50 shadow-[0_0_30px_rgba(201,162,39,0.35)] hover:shadow-[0_0_40px_rgba(201,162,39,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4 text-[#0B0B0D]" />
          </button>

          <button
            onClick={onExploreSports}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 font-cinzel text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#F1EBDD] bg-[#171513]/80 hover:bg-[#1f1d19] border border-[#C9A227]/40 hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-300"
          >
            <span>EXPLORE SPORTS</span>
          </button>
        </div>

        {/* Subtle Scroll Down Affordance */}
        <button
          onClick={onExploreSports}
          className="mt-14 inline-flex flex-col items-center gap-2 text-[#AAA398]/70 hover:text-[#C9A227] transition-colors group cursor-pointer focus:outline-none"
          aria-label="Scroll to introduction and sports"
        >
          <span className="font-cinzel text-[10px] uppercase tracking-[0.3em]">
            SCROLL TO ENTER
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#C9A227]" />
        </button>
      </div>

      {/* Bottom Greek Edge Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
      </div>
    </section>
  );
};
