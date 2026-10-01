import React from 'react';
import { ChevronDown, ArrowRight, Trophy } from 'lucide-react';
import { LaurelWreath, GreekMeanderStrip } from './GreekDecorations';
import { UmangLogo } from './UmangLogo';
import heroBgImage from '../assets/images/olympus_hero_cinematic_1790530158793.jpg';

interface HeroProps {
  onExploreSports: () => void;
  onRegisterNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSports, onRegisterNow }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with Royal Olympian Sapphire Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Mount Olympus with majestic classical Greek temple columns and golden sunlight breaking through clouds"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-fade-in"
          referrerPolicy="no-referrer"
        />
        {/* Layered cinematic overlays: Midnight Greek sapphire & dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040D24] via-[#07153B]/85 to-[#040D24]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(18,51,138,0.45)_0%,rgba(4,13,36,0.85)_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#040D24] to-transparent" />
      </div>

      {/* Decorative Classical Borders */}
      <div className="absolute top-20 left-0 right-0 z-10 pointer-events-none">
        <GreekMeanderStrip className="w-full h-3 text-[#F5B81C]" opacity="opacity-45" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Umang '26 Medallion Logo */}
        <div className="mb-4 animate-in fade-in zoom-in duration-500">
          <UmangLogo size="xl" withGlow withRing className="hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Pre-title Label */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-3 border-y border-[#F5B81C]/40 bg-[#07153B]/75 backdrop-blur-md">
          <LaurelWreath className="w-4 h-4 text-[#F5B81C]" />
          <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#FFC72C] uppercase">
            IIIT BANGALORE PRESENTS
          </span>
          <LaurelWreath className="w-4 h-4 text-[#F5B81C] scale-x-[-1]" />
        </div>

        {/* Festival Title */}
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl tracking-[0.35em] text-[#F8F9FA]/90 uppercase font-medium mb-2">
          UMANG 2026
        </h2>

        {/* Monumental Theme Heading */}
        <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.12em] uppercase leading-[0.95] text-gold-gradient drop-shadow-2xl my-2">
          OLYMPOUS
          <span className="block text-[#F8F9FA] font-black tracking-[0.14em] text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-1">
            REBORN
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-cinzel text-base sm:text-xl md:text-2xl font-bold tracking-[0.24em] text-[#FFC72C] uppercase mt-4 mb-2 max-w-2xl">
          THE GAMES RETURN. THE GODS AWAKEN.
        </p>

        {/* Canonical Sports from the Official Logo Emblem */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-3">
          {['VOLLEYBALL', 'FOOTBALL', 'BADMINTON', 'BASKETBALL'].map((sport) => (
            <span
              key={sport}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0A1E54]/80 border border-[#F5B81C]/35 text-[10px] sm:text-xs font-cinzel tracking-[0.18em] text-[#F8F9FA] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B81C]" />
              {sport}
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#12338A]/50 border border-[#F5B81C]/45 text-[10px] sm:text-xs font-cinzel tracking-[0.18em] text-[#FFE066] uppercase font-bold">
            <Trophy className="w-3 h-3 text-[#F5B81C]" />
            & 10+ MORE ARENAS
          </span>
        </div>

        {/* Description & Supporting Text */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#A0B2D6] max-w-2xl mx-auto font-light leading-relaxed mt-2 mb-8">
          A celebration of collegiate athleticism, unyielding honor, and campus spirit across IIIT Bangalore. Step onto the sacred fields and leave your mark in legend.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onRegisterNow}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#040D24] bg-gradient-to-r from-[#FFE066] via-[#F5B81C] to-[#FFC72C] border border-[#FFF4CE]/70 shadow-[0_0_30px_rgba(245,184,28,0.5)] hover:shadow-[0_0_45px_rgba(245,184,28,0.75)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4 text-[#040D24]" />
          </button>

          <button
            onClick={onExploreSports}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 font-cinzel text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#F8F9FA] bg-[#07153B]/80 hover:bg-[#0F2A75] border border-[#F5B81C]/40 hover:border-[#F5B81C] hover:text-[#FFC72C] transition-all duration-300"
          >
            <span>EXPLORE SPORTS</span>
          </button>
        </div>

        {/* Subtle Scroll Down Affordance */}
        <button
          onClick={onExploreSports}
          className="mt-12 inline-flex flex-col items-center gap-2 text-[#A0B2D6]/70 hover:text-[#F5B81C] transition-colors group cursor-pointer focus:outline-none"
          aria-label="Scroll to introduction and sports"
        >
          <span className="font-cinzel text-[10px] uppercase tracking-[0.3em]">
            SCROLL TO ENTER
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#F5B81C]" />
        </button>
      </div>

      {/* Bottom Greek Edge Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <GreekMeanderStrip className="w-full h-2 text-[#F5B81C]" opacity="opacity-35" />
      </div>
    </section>
  );
};
