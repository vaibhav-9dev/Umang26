import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  ExternalLink, 
  Copy, 
  Check, 
  MessageCircle 
} from 'lucide-react';
import { CONTACT_CONFIG } from '../data/contactData';
import { LaurelWreath, GreekColumnIcon, OlympianDivider } from './GreekDecorations';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopyPhone = (phone: string, id: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(id);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0B0D] overflow-hidden" id="contact">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[#C9A227]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <LaurelWreath className="w-5 h-5 text-[#C9A227]" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-[#C9A227]">
              VENUE & OFFICIAL COMMUNICATIONS
            </span>
            <LaurelWreath className="w-5 h-5 text-[#C9A227] scale-x-[-1]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-black uppercase tracking-[0.14em] text-[#F1EBDD] leading-tight">
            CONTACT & DIRECTIONS
          </h2>

          <p className="font-cinzel text-sm sm:text-base font-semibold tracking-[0.22em] text-[#DFBF52] uppercase mt-2">
            STUDENT COORDINATORS · SATELLITE RADAR · IIITB CAMPUS
          </p>

          <p className="font-sans text-sm sm:text-base text-[#AAA398] mt-4 leading-relaxed font-light">
            Connect directly with our sports leads, explore satellite directions to the IIIT Bangalore campus, and follow Umang on Instagram.
          </p>

          <div className="mt-6 flex items-center justify-center">
            <div className="w-24 h-[1.5px] bg-[#C9A227]/40" />
          </div>
        </div>

        {/* ============================================================ */}
        {/* 1. THREE STUDENT CONTACT COORDINATORS WITH HOVER SOCIALS & PHONES */}
        {/* ============================================================ */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#C9A227]/20">
            <div>
              <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227] block">
                DIRECT FESTIVAL LIAISONS
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#F1EBDD]">
                STUDENT COORDINATORS
              </h3>
            </div>
            <span className="font-sans text-xs text-[#AAA398] hidden sm:block">
              Hover photo for LinkedIn & Instagram
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CONTACT_CONFIG.coordinators.map((person) => (
              <div
                key={person.id}
                className="group relative bg-[#131210] border border-[#C9A227]/30 hover:border-[#C9A227] transition-all duration-300 p-6 flex flex-col justify-between shadow-xl hover:shadow-[0_0_35px_rgba(201,162,39,0.22)]"
              >
                {/* Classical Greek Corner Accents */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />

                <div>
                  {/* Photo Container with Hover Overlay for LinkedIn & Instagram */}
                  <div className="relative aspect-square w-full overflow-hidden bg-[#1A1815] border border-[#C9A227]/25 mb-5 group/photo">
                    <img
                      src={person.photoUrl}
                      alt={person.name}
                      className="w-full h-full object-cover object-center filter contrast-105 group-hover/photo:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Base Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/80 via-transparent to-transparent opacity-60 group-hover/photo:opacity-0 transition-opacity" />

                    {/* HOVER OVERLAY: REVEALS LINKEDIN & INSTAGRAM */}
                    <div className="absolute inset-0 bg-[#0B0B0D]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover/photo:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                      <LaurelWreath className="w-6 h-6 text-[#C9A227] mb-2" />
                      <span className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#DFBF52] font-bold mb-1">
                        CONNECT ON SOCIALS
                      </span>
                      <p className="font-sans text-[11px] text-[#AAA398] mb-4">
                        {person.name}
                      </p>

                      <div className="flex items-center gap-3">
                        {/* LinkedIn on hover */}
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-[#0077B5]/20 hover:bg-[#0077B5] border border-[#0077B5]/40 text-[#F1EBDD] text-xs font-sans transition-all duration-200 transform hover:scale-105"
                          title={`${person.name} on LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                          <span className="font-medium text-[11px]">LinkedIn</span>
                        </a>

                        {/* Instagram on hover */}
                        <a
                          href={person.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-[#E1306C]/20 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#D62976] hover:to-[#962FBF] border border-[#E1306C]/40 text-[#F1EBDD] text-xs font-sans transition-all duration-200 transform hover:scale-105"
                          title={`${person.name} on Instagram`}
                        >
                          <Instagram className="w-4 h-4" />
                          <span className="font-medium text-[11px]">Instagram</span>
                        </a>
                      </div>
                    </div>

                    {/* Touch device indicator (shows icon pills if on touch or not hovered) */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-1.5 opacity-80 group-hover:opacity-0 transition-opacity bg-[#0B0B0D]/80 backdrop-blur-sm px-2 py-1 border border-white/10 z-10">
                      <Linkedin className="w-3 h-3 text-[#AAA398]" />
                      <Instagram className="w-3 h-3 text-[#AAA398]" />
                      <span className="text-[10px] font-sans text-[#AAA398]">Hover</span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="mb-4">
                    <h4 className="font-cinzel text-lg sm:text-xl font-bold uppercase tracking-[0.12em] text-[#F1EBDD] group-hover:text-[#DFBF52] transition-colors">
                      {person.name}
                    </h4>
                    <p className="font-sans text-xs font-semibold text-[#C9A227] uppercase tracking-wider mt-0.5">
                      {person.role}
                    </p>
                    <p className="font-sans text-[11px] text-[#AAA398] mt-0.5">
                      {person.department}
                    </p>
                  </div>
                </div>

                {/* Mobile Number & Action Buttons */}
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div>
                    <span className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-[#AAA398] block mb-1">
                      MOBILE NUMBER
                    </span>

                    <div className="flex items-center justify-between gap-2 p-2 bg-[#1A1815] border border-white/10">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                        <a
                          href={`tel:${person.phoneRaw}`}
                          className="font-mono text-xs font-bold text-[#F1EBDD] hover:text-[#C9A227] transition-colors tracking-wider"
                          title="Click to call"
                        >
                          {person.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-1">
                        {/* Copy phone button */}
                        <button
                          onClick={() => handleCopyPhone(person.phone, person.id)}
                          className="p-1.5 text-[#AAA398] hover:text-[#DFBF52] hover:bg-white/5 transition-colors"
                          title="Copy phone number"
                          aria-label={`Copy phone number for ${person.name}`}
                        >
                          {copiedPhone === person.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {/* WhatsApp / Chat link */}
                        <a
                          href={`https://wa.me/${person.phoneRaw.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-[#AAA398] hover:text-emerald-400 hover:bg-white/5 transition-colors"
                          title="Message on WhatsApp"
                          aria-label={`WhatsApp ${person.name}`}
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Button Bar */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={`tel:${person.phoneRaw}`}
                      className="py-1.5 px-3 bg-[#1A1815] hover:bg-[#C9A227] hover:text-[#0B0B0D] border border-[#C9A227]/30 text-[11px] font-cinzel uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>CALL</span>
                    </a>

                    <a
                      href={`mailto:${person.email}`}
                      className="py-1.5 px-3 bg-[#1A1815] hover:bg-[#C9A227] hover:text-[#0B0B0D] border border-[#C9A227]/30 text-[11px] font-cinzel uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <Mail className="w-3 h-3" />
                      <span>EMAIL</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. GOOGLE MAPS SATELLITE VIEW & UMANG INSTAGRAM SHOWCASE */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column (7 cols): Google Maps Satellite View Embed */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative bg-[#131210] border border-[#C9A227]/30 p-2 sm:p-3 shadow-2xl flex-1 flex flex-col">
              
              {/* Map Title Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#1A1815] border border-white/5 mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C9A227]" />
                  <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#F1EBDD]">
                    SATELLITE ORBIT · IIIT BANGALORE
                  </span>
                </div>
                <span className="font-sans text-[11px] text-[#AAA398]">
                  Electronics City Phase 1
                </span>
              </div>

              {/* Embedded Satellite View Map Iframe */}
              <div className="relative w-full h-[360px] sm:h-[440px] overflow-hidden bg-[#0A0A0C] border border-white/10">
                <iframe
                  title="IIIT Bangalore Satellite View Map"
                  src={CONTACT_CONFIG.map.embedSatelliteUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.08) saturate(1.1)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Satellite Badge Overlay */}
                <div className="absolute top-3 left-3 bg-[#0B0B0D]/90 backdrop-blur-md px-3 py-1 border border-[#C9A227]/30 flex items-center gap-2 pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-cinzel text-[10px] tracking-wider uppercase text-[#DFBF52]">
                    LIVE SATELLITE PERSPECTIVE
                  </span>
                </div>
              </div>

              {/* Action Bar beneath Map */}
              <div className="mt-3 p-3 bg-[#1A1815] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-left">
                  <p className="font-sans text-xs text-[#F1EBDD] font-medium">
                    {CONTACT_CONFIG.address.street}
                  </p>
                  <p className="font-sans text-[11px] text-[#AAA398]">
                    {CONTACT_CONFIG.address.landmark}
                  </p>
                </div>

                <a
                  href={CONTACT_CONFIG.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 font-cinzel text-xs font-bold uppercase tracking-wider text-[#0B0B0D] bg-gradient-to-r from-[#DFBF52] to-[#C9A227] hover:brightness-110 transition-all shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>GET DIRECTIONS IN GOOGLE MAPS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Umang Instagram & Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Highlighted Card: College Umang Instagram Page */}
            <div className="relative bg-gradient-to-br from-[#181614] via-[#141210] to-[#1F1914] border border-[#C9A227]/40 p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#8C6239] via-[#C9A227] to-[#DFBF52] flex items-center justify-center text-[#0B0B0D]">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-sm font-bold uppercase tracking-widest text-[#F1EBDD]">
                      COLLEGE UMANG INSTAGRAM
                    </h3>
                    <span className="font-sans text-xs text-[#DFBF52]">
                      {CONTACT_CONFIG.socialMedia.instagramHandle}
                    </span>
                  </div>
                </div>
                <LaurelWreath className="w-6 h-6 text-[#C9A227]" />
              </div>

              <p className="font-sans text-xs text-[#AAA398] leading-relaxed mb-5">
                Catch behind-the-scenes arena preparations, fixture announcements, real-time match results, and athlete spotlights from IIIT Bangalore.
              </p>

              <a
                href={CONTACT_CONFIG.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-[#0B0B0D] bg-gradient-to-r from-[#DFBF52] via-[#C9A227] to-[#DFBF52] hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <Instagram className="w-4 h-4 text-[#0B0B0D]" />
                <span>FOLLOW @UMANG_IIITB</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#0B0B0D]" />
              </a>
            </div>

            {/* Inquiries & Direct Email Card */}
            <div className="bg-[#131210] border border-white/10 p-6 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                <Mail className="w-4 h-4 text-[#C9A227]" />
                <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#F1EBDD]">
                  OFFICIAL INQUIRIES & HELPDESK
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#AAA398] block mb-0.5">Festival & Sports Queries:</span>
                  <a
                    href={`mailto:${CONTACT_CONFIG.contacts.sportsEmail}`}
                    className="font-sans text-sm text-[#F1EBDD] hover:text-[#C9A227] transition-colors font-medium flex items-center gap-1.5"
                  >
                    <span>{CONTACT_CONFIG.contacts.sportsEmail}</span>
                    <ExternalLink className="w-3 h-3 text-[#AAA398]" />
                  </a>
                </div>

                <div>
                  <span className="text-[#AAA398] block mb-0.5">Sports Committee Desk:</span>
                  <a
                    href={`mailto:${CONTACT_CONFIG.contacts.generalEmail}`}
                    className="font-sans text-sm text-[#F1EBDD] hover:text-[#C9A227] transition-colors font-medium flex items-center gap-1.5"
                  >
                    <span>{CONTACT_CONFIG.contacts.generalEmail}</span>
                    <ExternalLink className="w-3 h-3 text-[#AAA398]" />
                  </a>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#AAA398]">
                  <span>Institute Desk: {CONTACT_CONFIG.contacts.studentConvenorPhone}</span>
                  <span className="text-[#C9A227]">Bengaluru, India</span>
                </div>
              </div>
            </div>

            {/* Transit Guidance */}
            <div className="p-4 bg-[#161412] border border-[#C9A227]/20 flex items-start gap-3">
              <GreekColumnIcon className="w-4 h-7 text-[#C9A227] shrink-0 mt-0.5" />
              <div className="text-xs text-[#AAA398] leading-relaxed">
                <strong className="text-[#F1EBDD] block font-cinzel text-[11px] uppercase tracking-wider mb-0.5">
                  CAMPUS ENTRY & ACCESS
                </strong>
                Located in Electronic City Phase 1. Accessible via Namma Metro Yellow Line and the Elevated Tollway from Silk Board.
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="mt-20">
        <OlympianDivider />
      </div>
    </section>
  );
};
