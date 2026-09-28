import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Scroll, 
  Image as ImageIcon, 
  Trophy, 
  ShieldCheck, 
  AlertCircle, 
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';
import { SPORTS_DATA, Sport, SportEvent, SportGalleryItem } from '../data/sportsData';
import { openRegistrationForm } from '../config/registrationLinks';
import { LaurelWreath, GreekColumnIcon, OlympianDivider, GreekMeanderStrip } from '../components/GreekDecorations';
import { useNavigation } from '../context/NavigationContext';

interface SportDetailPageProps {
  sportId: string;
  onEventRegistered: (eventName: string) => void;
}

export const SportDetailPage: React.FC<SportDetailPageProps> = ({
  sportId,
  onEventRegistered,
}) => {
  const { navigateToSports, navigateToHome, navigateToSportDetail } = useNavigation();
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<SportGalleryItem | null>(null);

  // Find sport or fallback to first
  const sport = SPORTS_DATA.find((s) => s.id === sportId) || SPORTS_DATA[0];

  const handleRegister = (event: SportEvent) => {
    openRegistrationForm(event.registrationKey);
    onEventRegistered(`${sport.name} - ${event.name}`);
  };

  const otherSports = SPORTS_DATA.filter((s) => s.id !== sport.id);

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F1EBDD] pt-24 pb-20">
      
      {/* Top Breadcrumb & Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-[#C9A227]/20 text-xs">
          
          {/* Breadcrumb path */}
          <nav className="flex items-center gap-2 text-[#AAA398] font-cinzel">
            <button
              onClick={navigateToHome}
              className="hover:text-[#C9A227] transition-colors uppercase tracking-wider"
            >
              HOME
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#8C6239]" />
            <button
              onClick={navigateToSports}
              className="hover:text-[#C9A227] transition-colors uppercase tracking-wider"
            >
              SPORTS ARENA
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#8C6239]" />
            <span className="text-[#DFBF52] font-bold uppercase tracking-wider">
              {sport.name}
            </span>
          </nav>

          {/* Back button */}
          <button
            onClick={navigateToSports}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#171513] hover:bg-[#1E1C18] border border-[#C9A227]/30 text-xs font-cinzel text-[#F1EBDD] hover:text-[#C9A227] transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL SPORTS</span>
          </button>
        </div>
      </div>

      {/* Sport Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative overflow-hidden bg-[#131210] border border-[#C9A227]/35 shadow-2xl">
          {/* Background Highlight Visual */}
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src={sport.heroImage}
              alt={sport.name}
              className="w-full h-full object-cover filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131210] via-[#131210]/80 to-[#131210]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#131210] via-[#131210]/70 to-transparent" />
          </div>

          {/* Classical Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C9A227] z-10" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C9A227] z-10" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C9A227] z-10" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C9A227] z-10" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl">
            {/* Deity and Order Tag */}
            <div className="inline-flex items-center gap-3 px-3 py-1 border border-[#C9A227]/30 bg-[#171513]/80 backdrop-blur-sm mb-4">
              <LaurelWreath className="w-4 h-4 text-[#C9A227]" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                ARENA {sport.orderNumber} · {sport.greekDeity}
              </span>
            </div>

            {/* Sport Name */}
            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-[0.14em] text-[#F1EBDD] leading-tight mb-2">
              {sport.name}
            </h1>

            {/* Mythological Subtitle */}
            <p className="font-cinzel text-base sm:text-xl font-bold uppercase tracking-[0.24em] text-[#DFBF52] mb-6">
              {sport.subtitle}
            </p>

            {/* Mythos Quote */}
            <div className="p-4 bg-[#1A1815]/90 border-l-2 border-[#C9A227] mb-6 max-w-2xl">
              <p className="font-sans text-xs sm:text-sm text-[#AAA398] italic leading-relaxed">
                &ldquo;{sport.mythosQuote}&rdquo;
              </p>
            </div>

            {/* Overview narrative */}
            <p className="font-sans text-sm sm:text-base text-[#F1EBDD]/90 leading-relaxed font-light max-w-3xl mb-8">
              {sport.overview}
            </p>

            {/* Quick jump anchor buttons */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-cinzel tracking-wider">
              <a
                href="#events"
                className="px-5 py-2.5 bg-gradient-to-r from-[#DFBF52] to-[#C9A227] text-[#0B0B0D] font-bold uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2"
              >
                <Trophy className="w-4 h-4 text-[#0B0B0D]" />
                <span>REGISTER FOR EVENTS ({sport.events.length})</span>
              </a>

              <a
                href="#rules"
                className="px-5 py-2.5 bg-[#171513] hover:bg-[#1E1C18] border border-[#C9A227]/40 text-[#F1EBDD] uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <Scroll className="w-4 h-4 text-[#C9A227]" />
                <span>OFFICIAL RULES</span>
              </a>

              <a
                href="#gallery"
                className="px-5 py-2.5 bg-[#171513] hover:bg-[#1E1C18] border border-[#C9A227]/40 text-[#F1EBDD] uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <ImageIcon className="w-4 h-4 text-[#C9A227]" />
                <span>ARENA GALLERY</span>
              </a>
            </div>
          </div>

          <GreekMeanderStrip className="w-full h-1.5 text-[#C9A227]" opacity="opacity-30" />
        </div>
      </div>

      {/* ============================================================ */}
      {/* 1. EVENTS SELECTION & DIRECT REGISTER BUTTONS */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-28" id="events">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#C9A227]/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-cinzel uppercase tracking-[0.25em] text-[#C9A227] mb-1">
              <LaurelWreath className="w-4 h-4 text-[#C9A227]" />
              <span>OFFICIAL CONTESTS</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold uppercase tracking-[0.14em] text-[#F1EBDD]">
              CHOOSE YOUR EVENT & REGISTER
            </h2>
          </div>

          <p className="font-sans text-xs text-[#AAA398] max-w-sm">
            Clicking REGISTER redirects directly to the official Google Form for that event in a new tab.
          </p>
        </div>

        {/* Events Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sport.events.map((event) => (
            <div
              key={event.id}
              className="group relative bg-[#131210] border border-[#C9A227]/30 hover:border-[#C9A227] p-6 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_0_30px_rgba(201,162,39,0.2)]"
            >
              {/* Corner Notches */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />

              <div>
                {/* Event Category Tag */}
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                  <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#C9A227] border border-[#C9A227]/40 px-2.5 py-0.5 bg-[#171513]">
                    {event.category} DIVISION
                  </span>
                  <span className="font-sans text-[11px] text-[#AAA398]/80">
                    Format: {event.format}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold uppercase tracking-[0.12em] text-[#F1EBDD] group-hover:text-[#DFBF52] transition-colors mb-2">
                  {event.name}
                </h3>

                {/* Format description & notes */}
                <p className="font-sans text-xs text-[#AAA398] mb-6 leading-relaxed">
                  Inter-college championship contest for {sport.name}. {event.notes || "Details will be announced soon."}
                </p>
              </div>

              {/* Direct Register Action Button */}
              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => handleRegister(event)}
                  className="w-full py-3 px-4 font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#0B0B0D] bg-gradient-to-r from-[#DFBF52] via-[#C9A227] to-[#DFBF52] hover:brightness-110 active:scale-[0.98] border border-[#FFF0C2]/40 shadow-md transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>REGISTER</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0B0B0D] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
                <span className="block text-center text-[10px] font-sans text-[#AAA398]/70 mt-2">
                  Opens Google Form in a new tab
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================ */}
      {/* 2. OFFICIAL RULES & GUIDELINES */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-28" id="rules">
        <div className="bg-[#141210] border border-[#C9A227]/35 p-8 sm:p-12 relative shadow-2xl">
          {/* Classical Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C9A227]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C9A227]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C9A227]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C9A227]" />

          <div className="flex items-center gap-2 mb-2">
            <Scroll className="w-4 h-4 text-[#C9A227]" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
              TOURNAMENT CODE OF OLYMPUS
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold uppercase tracking-[0.14em] text-[#F1EBDD] mb-4">
            RULES & GUIDELINES
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#AAA398] mb-8 max-w-2xl leading-relaxed">
            All participating athletes and college contingents must uphold strict adherence to the official rulebook and collegiate conduct guidelines.
          </p>

          {/* Rules List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {sport.rules.map((rule, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#181614] border border-white/5 flex items-start gap-3 text-xs leading-relaxed"
              >
                <div className="w-6 h-6 rounded-none border border-[#C9A227]/60 bg-[#1A1815] flex items-center justify-center font-cinzel text-[11px] font-bold text-[#DFBF52] shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <p className="text-[#F1EBDD]/90 font-sans">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          {/* Notice Box */}
          <div className="p-4 bg-[#161412] border border-[#C9A227]/20 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
            <div className="text-xs text-[#AAA398] leading-relaxed">
              <strong className="text-[#F1EBDD] block font-cinzel text-[11px] uppercase tracking-wider mb-0.5">
                FIXTURES & SCHEDULE ANNOUNCEMENT
              </strong>
              Official tournament draws, court allotments, and reporting timings will be announced soon. Team captains will receive briefing instructions prior to the tournament opening ceremony.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ARENA GALLERY */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-28" id="gallery">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C9A227]/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-cinzel uppercase tracking-[0.25em] text-[#C9A227] mb-1">
              <ImageIcon className="w-4 h-4 text-[#C9A227]" />
              <span>VISUAL CHRONICLES</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold uppercase tracking-[0.14em] text-[#F1EBDD]">
              ARENA GALLERY
            </h2>
          </div>
          <span className="font-sans text-xs text-[#AAA398] hidden sm:block">
            Click image to view full scale
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sport.gallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedGalleryImage(item)}
              className="group relative bg-[#131210] border border-[#C9A227]/25 hover:border-[#C9A227] cursor-pointer overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1815]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Enlarge Icon Badge */}
                <div className="absolute top-3 right-3 p-1.5 bg-[#0B0B0D]/80 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity text-[#DFBF52]">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-4 bg-[#141210] border-t border-white/5">
                <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#F1EBDD] group-hover:text-[#DFBF52] transition-colors">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-[#AAA398] mt-1 leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. EXPLORE OTHER ARENAS BAR */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OlympianDivider title="EXPLORE OTHER ARENAS" />

        <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-2">
          {otherSports.map((s) => (
            <button
              key={s.id}
              onClick={() => navigateToSportDetail(s.id)}
              className="px-4 py-2.5 bg-[#141210] hover:bg-[#1E1C18] border border-[#C9A227]/25 hover:border-[#C9A227] text-left shrink-0 transition-all group"
            >
              <span className="font-cinzel text-[10px] text-[#8C6239] block uppercase tracking-widest">
                ARENA {s.orderNumber}
              </span>
              <span className="font-cinzel text-xs font-bold text-[#F1EBDD] group-hover:text-[#DFBF52] uppercase tracking-wider">
                {s.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox Image Modal */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0D]/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#141210] border border-[#C9A227]/50 p-2 sm:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#0B0B0D]/80 border border-white/10 text-[#F1EBDD] hover:text-[#C9A227] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black mb-3">
              <img
                src={selectedGalleryImage.imageUrl}
                alt={selectedGalleryImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-2 sm:p-4 text-left">
              <h3 className="font-cinzel text-lg font-bold uppercase tracking-wider text-[#DFBF52]">
                {selectedGalleryImage.title}
              </h3>
              <p className="font-sans text-xs text-[#AAA398] mt-1">
                {selectedGalleryImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
