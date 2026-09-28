import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LaurelWreath } from './GreekDecorations';
import { useNavigation } from '../context/NavigationContext';

export const Navbar: React.FC = () => {
  const {
    currentRoute,
    navigateToHome,
    navigateToSports,
    navigateToAbout,
    navigateToTeam,
    navigateToContact,
  } = useNavigation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  const isActive = (route: string) => {
    if (route === 'sports' && (currentRoute === 'sports' || currentRoute === 'sport-detail')) return true;
    return currentRoute === route;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0D]/95 backdrop-blur-md border-b border-[#C9A227]/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0B0B0D]/90 via-[#0B0B0D]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Wordmark */}
        <button
          onClick={navigateToHome}
          className="group flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
          aria-label="UMANG 2026 Home"
        >
          <div className="w-8 h-8 rounded-full border border-[#C9A227]/50 flex items-center justify-center bg-[#171513] group-hover:border-[#C9A227] transition-colors">
            <LaurelWreath className="w-5 h-5 text-[#C9A227]" />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.2em] text-[#F1EBDD] group-hover:text-[#C9A227] transition-colors whitespace-nowrap">
              UMANG 2026
            </span>
            <span className="font-cinzel text-[9px] uppercase tracking-[0.28em] text-[#AAA398] group-hover:text-[#C9A227]/80 transition-colors">
              IIIT Bangalore
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation Links with Active Highlighting */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          <button
            onClick={navigateToHome}
            className={`font-cinzel text-xs uppercase tracking-[0.22em] transition-colors py-1 relative group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A227] ${
              isActive('home') ? 'text-[#DFBF52] font-bold' : 'text-[#AAA398] hover:text-[#C9A227]'
            }`}
          >
            HOME
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A227] transition-all duration-300 ${
                isActive('home') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>
          <button
            onClick={navigateToSports}
            className={`font-cinzel text-xs uppercase tracking-[0.22em] transition-colors py-1 relative group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A227] ${
              isActive('sports') ? 'text-[#DFBF52] font-bold' : 'text-[#AAA398] hover:text-[#C9A227]'
            }`}
          >
            SPORTS
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A227] transition-all duration-300 ${
                isActive('sports') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>
          <button
            onClick={navigateToAbout}
            className={`font-cinzel text-xs uppercase tracking-[0.22em] transition-colors py-1 relative group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A227] ${
              isActive('about') ? 'text-[#DFBF52] font-bold' : 'text-[#AAA398] hover:text-[#C9A227]'
            }`}
          >
            ABOUT
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A227] transition-all duration-300 ${
                isActive('about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>
          <button
            onClick={navigateToTeam}
            className={`font-cinzel text-xs uppercase tracking-[0.22em] transition-colors py-1 relative group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A227] ${
              isActive('team') ? 'text-[#DFBF52] font-bold' : 'text-[#AAA398] hover:text-[#C9A227]'
            }`}
          >
            SPORTS COMM TEAM
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A227] transition-all duration-300 ${
                isActive('team') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>
          <button
            onClick={navigateToContact}
            className={`font-cinzel text-xs uppercase tracking-[0.22em] transition-colors py-1 relative group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A227] ${
              isActive('contact') ? 'text-[#DFBF52] font-bold' : 'text-[#AAA398] hover:text-[#C9A227]'
            }`}
          >
            CONTACT & MAP
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A227] transition-all duration-300 ${
                isActive('contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>
        </nav>

        {/* Right: Primary Action (Register Now) */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={navigateToSports}
            className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#0B0B0D] bg-gradient-to-r from-[#DFBF52] via-[#C9A227] to-[#DFBF52] rounded-none border border-[#FFF0C2]/40 shadow-lg hover:shadow-[0_0_20px_rgba(201,162,39,0.4)] transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-4 h-4 text-[#0B0B0D]" />
          </button>
        </div>

        {/* Mobile / Tablet Controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={navigateToSports}
            className="px-3.5 py-1.5 font-cinzel text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B0B0D] bg-[#C9A227] active:scale-95"
          >
            REGISTER
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F1EBDD] hover:text-[#C9A227] focus-visible:outline-none"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0D]/98 border-b border-[#C9A227]/30 px-6 py-6 mt-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-3.5 text-center">
            <button
              onClick={() => handleLinkClick(navigateToHome)}
              className={`font-cinzel text-sm uppercase tracking-[0.25em] py-2 border-b border-white/5 ${
                isActive('home') ? 'text-[#DFBF52] font-bold' : 'text-[#F1EBDD] hover:text-[#C9A227]'
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => handleLinkClick(navigateToSports)}
              className={`font-cinzel text-sm uppercase tracking-[0.25em] py-2 border-b border-white/5 ${
                isActive('sports') ? 'text-[#DFBF52] font-bold' : 'text-[#F1EBDD] hover:text-[#C9A227]'
              }`}
            >
              SPORTS
            </button>
            <button
              onClick={() => handleLinkClick(navigateToAbout)}
              className={`font-cinzel text-sm uppercase tracking-[0.25em] py-2 border-b border-white/5 ${
                isActive('about') ? 'text-[#DFBF52] font-bold' : 'text-[#F1EBDD] hover:text-[#C9A227]'
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => handleLinkClick(navigateToTeam)}
              className={`font-cinzel text-sm uppercase tracking-[0.25em] py-2 border-b border-white/5 ${
                isActive('team') ? 'text-[#DFBF52] font-bold' : 'text-[#F1EBDD] hover:text-[#C9A227]'
              }`}
            >
              SPORTS COMM TEAM
            </button>
            <button
              onClick={() => handleLinkClick(navigateToContact)}
              className={`font-cinzel text-sm uppercase tracking-[0.25em] py-2 border-b border-white/5 ${
                isActive('contact') ? 'text-[#DFBF52] font-bold' : 'text-[#F1EBDD] hover:text-[#C9A227]'
              }`}
            >
              CONTACT & MAP
            </button>

            <button
              onClick={() => handleLinkClick(navigateToSports)}
              className="mt-2 w-full py-3 font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#0B0B0D] bg-gradient-to-r from-[#DFBF52] to-[#C9A227] flex items-center justify-center gap-2"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
