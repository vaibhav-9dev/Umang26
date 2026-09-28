import React, { useState, useMemo } from 'react';
import { Search, Flame, Trophy, Award } from 'lucide-react';
import { SPORTS_DATA, Sport } from '../data/sportsData';
import { SportCard } from './SportCard';
import { LaurelWreath, GreekMeanderStrip } from './GreekDecorations';

interface SportsSectionProps {
  onSelectSport: (sport: Sport) => void;
  onEventRegistered: (eventName: string) => void;
}

export const SportsSection: React.FC<SportsSectionProps> = ({
  onSelectSport,
  onEventRegistered,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'team' | 'individual' | 'women'>('all');

  const filteredSports = useMemo(() => {
    return SPORTS_DATA.filter((sport) => {
      // Search matching either sport name, subtitle, or any of its events
      const matchesSearch =
        searchQuery.trim() === '' ||
        sport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sport.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sport.events.some((e) => e.name.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      // Category tab filtering
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'team') {
        return sport.events.some((e) => e.name.toLowerCase().includes('team') || e.format.includes('vs') || e.format.includes('Court'));
      }
      if (selectedCategory === 'individual') {
        return sport.events.some((e) => e.name.toLowerCase().includes('singles'));
      }
      if (selectedCategory === 'women') {
        return sport.events.some((e) => e.name.toLowerCase().includes("women") || e.category === 'Women');
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0B0D]" id="arena">
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[#C9A227]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <LaurelWreath className="w-5 h-5 text-[#C9A227]" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-[#C9A227]">
              CHOOSE YOUR ARENA
            </span>
            <LaurelWreath className="w-5 h-5 text-[#C9A227] scale-x-[-1]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[0.14em] text-[#F1EBDD] leading-tight">
            ENTER THE ARENA
          </h2>

          <p className="font-cinzel text-base sm:text-lg font-semibold tracking-[0.22em] text-[#DFBF52] uppercase mt-2">
            CHOOSE YOUR BATTLEFIELD.
          </p>

          <p className="font-sans text-sm sm:text-base text-[#AAA398] mt-4 leading-relaxed font-light">
            Select your sport and register directly through its official Google Form. Every contest is forged for those who dare to seek immortal glory.
          </p>

          <div className="mt-6 flex items-center justify-center">
            <div className="w-24 h-[1.5px] bg-[#C9A227]/40" />
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-2 bg-[#141210] border border-[#C9A227]/20 shadow-xl">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto p-1 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#C9A227] text-[#0B0B0D] font-bold shadow-sm'
                  : 'text-[#AAA398] hover:text-[#F1EBDD] hover:bg-white/5'
              }`}
            >
              All Arenas (9)
            </button>
            <button
              onClick={() => setSelectedCategory('team')}
              className={`px-4 py-2 font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-colors ${
                selectedCategory === 'team'
                  ? 'bg-[#C9A227] text-[#0B0B0D] font-bold shadow-sm'
                  : 'text-[#AAA398] hover:text-[#F1EBDD] hover:bg-white/5'
              }`}
            >
              Team Sports
            </button>
            <button
              onClick={() => setSelectedCategory('individual')}
              className={`px-4 py-2 font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-colors ${
                selectedCategory === 'individual'
                  ? 'bg-[#C9A227] text-[#0B0B0D] font-bold shadow-sm'
                  : 'text-[#AAA398] hover:text-[#F1EBDD] hover:bg-white/5'
              }`}
            >
              Singles & Duels
            </button>
            <button
              onClick={() => setSelectedCategory('women')}
              className={`px-4 py-2 font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-colors ${
                selectedCategory === 'women'
                  ? 'bg-[#C9A227] text-[#0B0B0D] font-bold shadow-sm'
                  : 'text-[#AAA398] hover:text-[#F1EBDD] hover:bg-white/5'
              }`}
            >
              Women's Divisions
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[260px] md:max-w-xs px-2 py-1">
            <Search className="w-4 h-4 text-[#AAA398] absolute left-5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sport or event..."
              className="w-full bg-[#1A1815] border border-white/10 hover:border-[#C9A227]/40 focus:border-[#C9A227] focus:outline-none text-xs text-[#F1EBDD] placeholder-[#AAA398]/60 pl-9 pr-4 py-2 transition-colors font-sans"
            />
          </div>
        </div>

        {/* 9 Sports Grid */}
        {filteredSports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSports.map((sport) => (
              <SportCard
                key={sport.id}
                sport={sport}
                onSelectSport={onSelectSport}
                onEventRegistered={onEventRegistered}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-white/5 bg-[#141210] p-8">
            <p className="font-cinzel text-lg text-[#F1EBDD] uppercase tracking-widest mb-2">
              No arena matches your search
            </p>
            <p className="text-xs text-[#AAA398] font-sans mb-4">
              Clear your search term or select &ldquo;All Arenas&rdquo; to view all 9 sports.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-5 py-2 font-cinzel text-xs font-bold text-[#0B0B0D] bg-[#C9A227] uppercase tracking-wider"
            >
              RESET FILTERS
            </button>
          </div>
        )}

        {/* Direct Journey Notice */}
        <div className="mt-16 p-6 border border-[#C9A227]/25 bg-[#141210]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#C9A227]/50 flex items-center justify-center shrink-0 bg-[#1A1815]">
              <LaurelWreath className="w-6 h-6 text-[#C9A227]" />
            </div>
            <div>
              <h4 className="font-cinzel text-sm font-bold uppercase tracking-[0.16em] text-[#F1EBDD]">
                DIRECT OFFICIAL REGISTRATION JOURNEY
              </h4>
              <p className="font-sans text-xs text-[#AAA398] mt-0.5">
                HOME → SPORTS → SELECT EVENT → REGISTER → GOOGLE FORM. No student account or password required.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="font-cinzel text-xs text-[#DFBF52] tracking-wider uppercase font-semibold">
              18 OFFICIAL CONTESTS
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
