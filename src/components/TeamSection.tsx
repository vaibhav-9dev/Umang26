import React, { useState } from 'react';
import { 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  MessageCircle 
} from 'lucide-react';
import { SPORTS_COMMITTEE } from '../data/teamData';
import { LaurelWreath, OlympianDivider } from './GreekDecorations';

export const TeamSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopyPhone = (phone: string, id: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(id);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0B0D] overflow-hidden" id="team">
      {/* Background Subtle Radial Accent */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#C9A227]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <LaurelWreath className="w-5 h-5 text-[#C9A227]" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-[#C9A227]">
              SPORTS COMMITTEE
            </span>
            <LaurelWreath className="w-5 h-5 text-[#C9A227] scale-x-[-1]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-black uppercase tracking-[0.14em] text-[#F1EBDD] leading-tight">
            THE COUNCIL OF OLYMPUS
          </h2>

          <p className="font-cinzel text-sm sm:text-base font-semibold tracking-[0.22em] text-[#DFBF52] uppercase mt-2">
            IIIT BANGALORE SPORTS COMM MEMBERS
          </p>

          <p className="font-sans text-sm sm:text-base text-[#AAA398] mt-4 leading-relaxed font-light">
            Meet the student leaders and sports committee members of IIIT Bangalore coordinating the competitions, athlete hospitality, grounds, and festival operations.
          </p>

          <div className="mt-6 flex items-center justify-center">
            <div className="w-24 h-[1.5px] bg-[#C9A227]/40" />
          </div>
        </div>

        {/* Committee Members Grid with Photos, Mobile Numbers, and Hover Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SPORTS_COMMITTEE.map((member) => (
            <div
              key={member.id}
              className="group relative bg-[#131210] border border-[#C9A227]/30 hover:border-[#C9A227] p-6 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_0_35px_rgba(201,162,39,0.22)]"
            >
              {/* Greek Classical Corner Accents */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C9A227]/60 group-hover:border-[#C9A227] transition-colors" />

              <div>
                {/* Photo Container with Hover Overlay for LinkedIn & Instagram */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#1A1815] border border-[#C9A227]/25 mb-5 group/photo">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-center filter contrast-105 group-hover/photo:scale-105 transition-transform duration-500"
                  />

                  {/* Top-Right Mythological Badge */}
                  <div className="absolute top-3 right-3 bg-[#0B0B0D]/90 backdrop-blur-md px-2.5 py-1 border border-[#C9A227]/30 z-10">
                    <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#DFBF52]">
                      {member.mythologicalTitle}
                    </span>
                  </div>

                  {/* Gradient Base Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/80 via-transparent to-transparent opacity-60 group-hover/photo:opacity-0 transition-opacity" />

                  {/* HOVER OVERLAY: REVEALS LINKEDIN & INSTAGRAM */}
                  <div className="absolute inset-0 bg-[#0B0B0D]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover/photo:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                    <LaurelWreath className="w-6 h-6 text-[#C9A227] mb-2" />
                    <span className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#DFBF52] font-bold mb-1">
                      CONNECT ON SOCIALS
                    </span>
                    <p className="font-sans text-[11px] text-[#AAA398] mb-4">
                      {member.name}
                    </p>

                    <div className="flex items-center gap-3">
                      {/* LinkedIn on hover */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-[#0077B5]/20 hover:bg-[#0077B5] border border-[#0077B5]/40 text-[#F1EBDD] text-xs font-sans transition-all duration-200 transform hover:scale-105"
                        title={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="font-medium text-[11px]">LinkedIn</span>
                      </a>

                      {/* Instagram on hover */}
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-[#E1306C]/20 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#D62976] hover:to-[#962FBF] border border-[#E1306C]/40 text-[#F1EBDD] text-xs font-sans transition-all duration-200 transform hover:scale-105"
                        title={`${member.name} on Instagram`}
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

                {/* Member Name */}
                <h3 className="font-cinzel text-xl font-bold uppercase tracking-[0.14em] text-[#F1EBDD] group-hover:text-[#DFBF52] transition-colors">
                  {member.name}
                </h3>

                {/* Official Role */}
                <p className="font-sans text-xs font-semibold text-[#C9A227] uppercase tracking-wider mt-1 mb-0.5">
                  {member.role}
                </p>

                {/* Department */}
                <p className="font-sans text-xs text-[#AAA398] mb-5">
                  {member.department}
                </p>
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
                        href={`tel:${member.phoneRaw}`}
                        className="font-mono text-xs font-bold text-[#F1EBDD] hover:text-[#C9A227] transition-colors tracking-wider"
                        title="Click to call"
                      >
                        {member.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-1">
                      {/* Copy phone button */}
                      <button
                        onClick={() => handleCopyPhone(member.phone, member.id)}
                        className="p-1.5 text-[#AAA398] hover:text-[#DFBF52] hover:bg-white/5 transition-colors"
                        title="Copy phone number"
                        aria-label={`Copy phone number for ${member.name}`}
                      >
                        {copiedPhone === member.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {/* WhatsApp / Chat link */}
                      <a
                        href={`https://wa.me/${member.phoneRaw.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-[#AAA398] hover:text-emerald-400 hover:bg-white/5 transition-colors"
                        title="Message on WhatsApp"
                        aria-label={`WhatsApp ${member.name}`}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${member.phoneRaw}`}
                    className="py-1.5 px-3 bg-[#1A1815] hover:bg-[#C9A227] hover:text-[#0B0B0D] border border-[#C9A227]/30 text-[11px] font-cinzel uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>CALL</span>
                  </a>

                  <a
                    href={`mailto:${member.email}`}
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

      <div className="mt-20">
        <OlympianDivider />
      </div>
    </section>
  );
};
