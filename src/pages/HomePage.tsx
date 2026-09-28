import React from 'react';
import { Hero } from '../components/Hero';
import { IntroSection } from '../components/IntroSection';
import { SPORTS_DATA, Sport } from '../data/sportsData';
import { LaurelWreath, GreekColumnIcon, OlympianDivider } from '../components/GreekDecorations';
import { ArrowRight, Trophy, Users, MapPin, ExternalLink } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { FinalCTA } from '../components/FinalCTA';
import sportsArenaImg from '../assets/images/olympus_athletics_arena_1790530172404.jpg';

interface HomePageProps {
  onEventRegistered: (eventName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  const { 
    navigateToSports, 
    navigateToSportDetail, 
    navigateToAbout, 
    navigateToTeam, 
    navigateToContact 
  } = useNavigation();

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F1EBDD]">
      {/* 1. Full-Screen Cinematic Hero */}
      <Hero
        onExploreSports={navigateToSports}
        onRegisterNow={navigateToSports}
      />

      {/* 2. Intro Section: The Olympus Calls & Roman Stats */}
      <IntroSection />

      {/* 3. Featured Arenas Showcase */}
      <section className="py-24 bg-[#0B0B0D] relative overflow-hidden" id="featured-arenas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-4 border-b border-[#C9A227]/20">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <LaurelWreath className="w-5 h-5 text-[#C9A227]" />
                <span className="font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-[#C9A227]">
                  CHOOSE YOUR BATTLEFIELD
                </span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-5xl font-black uppercase tracking-[0.14em] text-[#F1EBDD]">
                ENTER THE ARENA
              </h2>
            </div>

            <button
              onClick={navigateToSports}
              className="inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-[0.2em] text-[#DFBF52] hover:text-[#FFF0C2] transition-colors"
            >
              <span>VIEW ALL 9 SPORTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3x3 Sports Grid Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SPORTS_DATA.map((sport) => (
              <div
                key={sport.id}
                className="group relative bg-[#131210] border border-[#C9A227]/25 hover:border-[#C9A227] transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 shadow-lg hover:shadow-[0_0_35px_rgba(201,162,39,0.2)]"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                    <span className="font-cinzel text-xs font-bold text-[#8C6239] tracking-[0.2em]">
                      ARENA {sport.orderNumber}
                    </span>
                    <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#C9A227]/80">
                      {sport.events.length} {sport.events.length === 1 ? 'EVENT' : 'EVENTS'}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-2xl font-extrabold uppercase tracking-[0.14em] text-[#F1EBDD] group-hover:text-[#DFBF52] transition-colors">
                    {sport.name}
                  </h3>

                  <p className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#C9A227] mt-1 mb-3">
                    {sport.subtitle}
                  </p>

                  <p className="font-sans text-xs text-[#AAA398] italic leading-relaxed mb-6 font-light">
                    &ldquo;{sport.mythosQuote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <button
                    onClick={() => navigateToSportDetail(sport.id)}
                    className="w-full py-3 px-4 font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#F1EBDD] bg-[#181614] hover:bg-[#C9A227] hover:text-[#0B0B0D] border border-[#C9A227]/40 hover:border-[#C9A227] transition-all flex items-center justify-center gap-2"
                  >
                    <span>VIEW EVENTS & RULES</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Quick Portal Teaser Strips */}
      <section className="py-16 bg-[#0E0D0B] border-y border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* About Portal Card */}
            <div className="p-6 bg-[#131210] border border-white/5 hover:border-[#C9A227]/40 transition-colors flex flex-col justify-between">
              <div>
                <LaurelWreath className="w-6 h-6 text-[#C9A227] mb-3" />
                <h4 className="font-cinzel text-lg font-bold uppercase tracking-wider text-[#F1EBDD] mb-2">
                  THE OLYMPIAN HERITAGE
                </h4>
                <p className="font-sans text-xs text-[#AAA398] leading-relaxed mb-4">
                  Discover the story behind Olympus Reborn and the pillars of athletic honour at IIIT Bangalore.
                </p>
              </div>
              <button
                onClick={navigateToAbout}
                className="inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-wider text-[#DFBF52] hover:text-white"
              >
                <span>EXPLORE ABOUT FEST</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Sports Comm Council Card */}
            <div className="p-6 bg-[#131210] border border-white/5 hover:border-[#C9A227]/40 transition-colors flex flex-col justify-between">
              <div>
                <Users className="w-6 h-6 text-[#C9A227] mb-3" />
                <h4 className="font-cinzel text-lg font-bold uppercase tracking-wider text-[#F1EBDD] mb-2">
                  THE COUNCIL OF OLYMPUS
                </h4>
                <p className="font-sans text-xs text-[#AAA398] leading-relaxed mb-4">
                  Meet the student sports committee members managing grounds, athlete logistics, and competitions.
                </p>
              </div>
              <button
                onClick={navigateToTeam}
                className="inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-wider text-[#DFBF52] hover:text-white"
              >
                <span>VIEW SPORTS COMM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Satellite Map & Contact Card */}
            <div className="p-6 bg-[#131210] border border-white/5 hover:border-[#C9A227]/40 transition-colors flex flex-col justify-between">
              <div>
                <MapPin className="w-6 h-6 text-[#C9A227] mb-3" />
                <h4 className="font-cinzel text-lg font-bold uppercase tracking-wider text-[#F1EBDD] mb-2">
                  SACRED GROUNDS & RADAR
                </h4>
                <p className="font-sans text-xs text-[#AAA398] leading-relaxed mb-4">
                  Explore satellite view directions to IIIT Bangalore and connect directly with student leads.
                </p>
              </div>
              <button
                onClick={navigateToContact}
                className="inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-wider text-[#DFBF52] hover:text-white"
              >
                <span>VIEW MAP & CONTACTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCTA onRegisterNow={navigateToSports} />
    </div>
  );
};
