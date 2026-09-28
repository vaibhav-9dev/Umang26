import React from 'react';
import { MapPin, Mail, Phone, Instagram, Linkedin, Globe, ExternalLink } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/contactData';
import { LaurelWreath, GreekColumnIcon } from './GreekDecorations';
import { useNavigation } from '../context/NavigationContext';

export const Footer: React.FC = () => {
  const {
    navigateToHome,
    navigateToSports,
    navigateToAbout,
    navigateToTeam,
    navigateToContact,
  } = useNavigation();

  return (
    <footer className="relative bg-[#070709] border-t border-[#C9A227]/30 text-[#AAA398] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid: Brand, Address & College Details, Contact Info & Leads, Umang Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand & Theme (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full border border-[#C9A227]/50 flex items-center justify-center bg-[#171513]">
                <LaurelWreath className="w-5 h-5 text-[#C9A227]" />
              </div>
              <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-[#F1EBDD]">
                UMANG 2026
              </span>
            </div>

            <p className="font-cinzel text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227] mb-2">
              OLYMPOUS REBORN
            </p>

            <p className="font-sans text-xs text-[#AAA398] leading-relaxed mb-4">
              The flagship annual sports festival of the International Institute of Information Technology Bangalore. Where legends rise, champions compete, and Olympus comes alive again.
            </p>

            <div className="mt-auto flex items-center gap-2 text-xs font-cinzel tracking-wider text-[#C9A227]/70">
              <GreekColumnIcon className="w-3 h-5 text-[#C9A227]/50" />
              <span>IIIT BANGALORE · SPORTS FESTIVAL</span>
            </div>
          </div>

          {/* Column 2: College Address & Directions (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#F1EBDD] mb-4 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
              COLLEGE ADDRESS
            </span>

            <div className="font-sans text-xs text-[#AAA398] space-y-2 leading-relaxed">
              <strong className="text-[#F1EBDD] block font-medium">
                {CONTACT_CONFIG.collegeName}
              </strong>
              <p>
                {CONTACT_CONFIG.address.street}
              </p>
              <p>
                {CONTACT_CONFIG.address.city}, {CONTACT_CONFIG.address.state} — {CONTACT_CONFIG.address.pincode}
              </p>
              <p className="text-[11px] text-[#AAA398]/80 italic">
                Landmark: {CONTACT_CONFIG.address.landmark}
              </p>

              <div className="pt-2">
                <a
                  href={CONTACT_CONFIG.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C9A227] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Info & Student Leads (2.5 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#F1EBDD] mb-4 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
              CONTACT INFO
            </span>

            <div className="font-sans text-xs text-[#AAA398] space-y-3">
              <div>
                <span className="text-[10px] uppercase font-cinzel text-[#AAA398]/70 block tracking-wider">Helpdesk Email</span>
                <a
                  href={`mailto:${CONTACT_CONFIG.contacts.sportsEmail}`}
                  className="text-[#F1EBDD] hover:text-[#C9A227] transition-colors break-all"
                >
                  {CONTACT_CONFIG.contacts.sportsEmail}
                </a>
              </div>

              {/* Three Contact Persons & Mobile Numbers */}
              <div className="pt-1 border-t border-white/5 space-y-2">
                <span className="text-[10px] uppercase font-cinzel text-[#DFBF52] block tracking-wider font-semibold">
                  STUDENT LEADS
                </span>
                
                {CONTACT_CONFIG.coordinators.map((c) => (
                  <div key={c.id} className="text-[11px]">
                    <span className="text-[#F1EBDD] block font-medium truncate">{c.name}</span>
                    <a
                      href={`tel:${c.phoneRaw}`}
                      className="font-mono text-[#AAA398] hover:text-[#C9A227] transition-colors flex items-center gap-1 mt-0.5"
                    >
                      <Phone className="w-2.5 h-2.5 text-[#C9A227]" />
                      <span>{c.phone}</span>
                    </a>
                  </div>
                ))}
              </div>

              <div className="pt-1 border-t border-white/5">
                <span className="text-[10px] uppercase font-cinzel text-[#AAA398]/70 block tracking-wider">Campus Desk</span>
                <span className="text-[#F1EBDD] font-mono text-xs">
                  {CONTACT_CONFIG.contacts.studentConvenorPhone}
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: College Umang Social Media (2.5 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#F1EBDD] mb-4">
              COLLEGE & UMANG SOCIALS
            </span>

            <div className="space-y-3">
              {/* Official Instagram */}
              <a
                href={CONTACT_CONFIG.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 bg-[#131210] hover:bg-[#1A1815] border border-white/5 hover:border-[#C9A227]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-[#DFBF52]" />
                  <div className="text-left">
                    <span className="text-xs font-cinzel font-semibold text-[#F1EBDD] block">
                      Umang Instagram
                    </span>
                    <span className="text-[11px] font-sans text-[#AAA398]">
                      {CONTACT_CONFIG.socialMedia.instagramHandle}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#AAA398] group-hover:text-[#DFBF52] transition-colors" />
              </a>

              {/* IIIT Bangalore LinkedIn */}
              <a
                href={CONTACT_CONFIG.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 bg-[#131210] hover:bg-[#1A1815] border border-white/5 hover:border-[#C9A227]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#C9A227]" />
                  <div className="text-left">
                    <span className="text-xs font-cinzel font-semibold text-[#F1EBDD] block">
                      IIIT Bangalore LinkedIn
                    </span>
                    <span className="text-[11px] font-sans text-[#AAA398]">
                      Official University Page
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#AAA398] group-hover:text-[#C9A227] transition-colors" />
              </a>

              {/* IIITB Website */}
              <a
                href={CONTACT_CONFIG.socialMedia.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 bg-[#131210] hover:bg-[#1A1815] border border-white/5 hover:border-[#C9A227]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#C9A227]" />
                  <div className="text-left">
                    <span className="text-xs font-cinzel font-semibold text-[#F1EBDD] block">
                      IIITB Official Portal
                    </span>
                    <span className="text-[11px] font-sans text-[#AAA398]">
                      www.iiitb.ac.in
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#AAA398] group-hover:text-[#C9A227] transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Quick Navigation Bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/5">
          <nav className="flex flex-wrap items-center gap-6 text-xs font-cinzel tracking-[0.2em]">
            <button
              onClick={navigateToHome}
              className="text-[#AAA398] hover:text-[#C9A227] transition-colors uppercase"
            >
              HOME
            </button>
            <button
              onClick={navigateToSports}
              className="text-[#AAA398] hover:text-[#C9A227] transition-colors uppercase"
            >
              SPORTS
            </button>
            <button
              onClick={navigateToAbout}
              className="text-[#AAA398] hover:text-[#C9A227] transition-colors uppercase"
            >
              ABOUT
            </button>
            <button
              onClick={navigateToTeam}
              className="text-[#AAA398] hover:text-[#C9A227] transition-colors uppercase"
            >
              SPORTS COMM TEAM
            </button>
            <button
              onClick={navigateToContact}
              className="text-[#AAA398] hover:text-[#C9A227] transition-colors uppercase"
            >
              CONTACT & MAP
            </button>
            <button
              onClick={navigateToSports}
              className="text-[#DFBF52] hover:text-[#FFF0C2] font-bold transition-colors uppercase"
            >
              REGISTER
            </button>
          </nav>

          <div className="flex items-center gap-2 text-xs font-cinzel tracking-wider text-[#C9A227]">
            <GreekColumnIcon className="w-3 h-5 text-[#C9A227]" />
            <span>IIIT BANGALORE · OLYMPOUS REBORN</span>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#AAA398]/70 text-center sm:text-left">
          <p className="font-cinzel tracking-wider">
            © 2026 UMANG — IIIT Bangalore. All rights reserved.
          </p>

          <p className="text-[11px]">
            Direct registration via Google Forms · No accounts or logins required
          </p>
        </div>

      </div>
    </footer>
  );
};
