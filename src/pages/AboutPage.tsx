import React from 'react';
import { LaurelWreath, GreekColumnIcon, OlympianDivider, GreekMeanderStrip } from '../components/GreekDecorations';
import { useNavigation } from '../context/NavigationContext';
import { FinalCTA } from '../components/FinalCTA';
import sportsArenaImg from '../assets/images/olympus_athletics_arena_1790530172404.jpg';
import greekStatueImg from '../assets/images/olympus_greek_statue_1790530183863.jpg';

export const AboutPage: React.FC = () => {
  const { navigateToHome, navigateToSports } = useNavigation();

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F1EBDD] pt-24 pb-20">
      
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between py-3 border-b border-[#C9A227]/20 text-xs font-cinzel">
          <div className="flex items-center gap-2 text-[#AAA398]">
            <button onClick={navigateToHome} className="hover:text-[#C9A227] transition-colors uppercase tracking-wider">
              HOME
            </button>
            <span className="text-[#8C6239]">/</span>
            <span className="text-[#DFBF52] font-bold uppercase tracking-wider">
              ABOUT FESTIVAL
            </span>
          </div>
          <span className="text-[11px] text-[#AAA398] tracking-widest uppercase">
            IIIT BANGALORE · UMANG 2026
          </span>
        </div>
      </div>

      {/* Main Narrative Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative bg-[#131210] border border-[#C9A227]/30 p-8 sm:p-14 lg:p-20 shadow-2xl overflow-hidden">
          
          {/* Subtle Background Scrim */}
          <div className="absolute inset-0 z-0 opacity-15">
            <img
              src={sportsArenaImg}
              alt="Collegiate sports arena with classical Greek marble colonnades"
              className="w-full h-full object-cover filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131210] via-transparent to-[#131210]" />
          </div>

          {/* Classical Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C9A227] z-10" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C9A227] z-10" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C9A227] z-10" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C9A227] z-10" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <LaurelWreath className="w-5 h-5 text-[#C9A227]" />
              <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
                IIIT BANGALORE ANNUAL SPORTS FESTIVAL
              </span>
              <LaurelWreath className="w-5 h-5 text-[#C9A227] scale-x-[-1]" />
            </div>

            <h1 className="font-cinzel text-4xl sm:text-6xl font-black uppercase tracking-[0.14em] text-[#F1EBDD] leading-tight mb-4">
              ONE FESTIVAL. ONE ARENA.
            </h1>

            <p className="font-cinzel text-sm sm:text-lg font-bold uppercase tracking-[0.24em] text-[#DFBF52] mb-8">
              WHERE LEGENDS RISE AND OLYMPUS AWAKENS
            </p>

            <div className="w-24 h-[1.5px] bg-[#C9A227]/40 mx-auto mb-8" />

            <p className="font-sans text-base sm:text-lg text-[#F1EBDD]/90 leading-relaxed font-light mb-6">
              Umang 2026 brings together students and athletes for a celebration of sport, competition and community. Inspired by the legendary arenas of Olympus, this year's edition invites every competitor to step forward and create their own legend.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#AAA398] leading-relaxed font-light">
              From the roaring hardwood of the basketball court to the quiet contemplation of the chessboard, Umang celebrates collegiate athletic prowess, unshakeable camaraderie, and the timeless pursuit of greatness.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10">
            <GreekMeanderStrip className="w-full h-1.5 text-[#C9A227]" opacity="opacity-30" />
          </div>
        </div>
      </div>

      {/* The 3 Classical Pillars of Olympus Reborn */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227] block mb-1">
            CORE FOUNDATION
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold uppercase tracking-[0.14em] text-[#F1EBDD]">
            THE THREE PILLARS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 bg-[#141210] border border-white/10 hover:border-[#C9A227]/50 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 border border-[#C9A227]/60 flex items-center justify-center mb-6 text-[#C9A227] bg-[#1A1815]">
                <GreekColumnIcon className="w-5 h-7" />
              </div>
              <h3 className="font-cinzel text-lg font-bold uppercase tracking-[0.18em] text-[#F1EBDD] mb-3">
                ATHLETIC EXCELLENCE
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#AAA398] leading-relaxed font-light">
                Every arena is primed for high-octane collegiate competition, pushing limits and setting new benchmarks of physical achievement across 9 sports disciplines.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-cinzel text-[#DFBF52] tracking-widest uppercase">
              POWER · SPEED · ENDURANCE
            </div>
          </div>

          <div className="p-8 bg-[#141210] border border-white/10 hover:border-[#C9A227]/50 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 border border-[#C9A227]/60 flex items-center justify-center mb-6 text-[#C9A227] bg-[#1A1815]">
                <LaurelWreath className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold uppercase tracking-[0.18em] text-[#F1EBDD] mb-3">
                HONOUR & FAIR PLAY
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#AAA398] leading-relaxed font-light">
                True victory is won not only on the scoreboard, but through noble conduct, mutual respect, and unyielding sportsmanship that mirrors ancient Olympic ideals.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-cinzel text-[#DFBF52] tracking-widest uppercase">
              VALOUR · INTEGRITY · RESPECT
            </div>
          </div>

          <div className="p-8 bg-[#141210] border border-white/10 hover:border-[#C9A227]/50 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 border border-[#C9A227]/60 flex items-center justify-center mb-6 text-[#C9A227] bg-[#1A1815]">
                <span className="font-cinzel text-xs font-bold">IIITB</span>
              </div>
              <h3 className="font-cinzel text-lg font-bold uppercase tracking-[0.18em] text-[#F1EBDD] mb-3">
                CAMPUS SPIRIT
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#AAA398] leading-relaxed font-light">
                A vibrant celebration uniting colleges across the country under the grand banner of Umang, forging friendships and memories that outlast the season.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-cinzel text-[#DFBF52] tracking-widest uppercase">
              UNITY · BROTHERHOOD · PASSION
            </div>
          </div>

        </div>
      </section>

      {/* Historical Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative p-2 border border-[#C9A227]/30 bg-[#171513]/60 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#131210]">
                <img
                  src={greekStatueImg}
                  alt="Ancient Greek athlete in dynamic motion"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227] block mb-2">
              THE OLYMPIAN RITUAL
            </span>
            <h3 className="font-cinzel text-2xl sm:text-4xl font-extrabold uppercase tracking-[0.14em] text-[#F1EBDD] mb-6">
              THE SACRED GROUNDS OF IIIT BANGALORE
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#AAA398] leading-relaxed font-light mb-4">
              Situated in the technological heartland of Electronics City, IIIT Bangalore opens its courts, pitches, and halls to hundreds of collegiate athletes from across India.
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#AAA398] leading-relaxed font-light mb-8">
              Umang represents the apex of student athletic culture, completely organized, coordinated, and championed by the student sports committee. No logins or complicated profiles are required: choose your sport, gather your team, and step directly onto the field of glory.
            </p>

            <button
              onClick={navigateToSports}
              className="px-7 py-3 bg-gradient-to-r from-[#DFBF52] via-[#C9A227] to-[#DFBF52] text-[#0B0B0D] font-cinzel text-xs font-bold uppercase tracking-[0.22em] hover:brightness-110 transition-all"
            >
              BROWSE ALL SPORTS & REGISTER
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA onRegisterNow={navigateToSports} />
    </div>
  );
};
