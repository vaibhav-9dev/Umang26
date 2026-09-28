import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { useNavigation } from '../context/NavigationContext';

export const ContactPage: React.FC = () => {
  const { navigateToHome } = useNavigation();

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F1EBDD] pt-24 pb-12">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between py-3 border-b border-[#C9A227]/20 text-xs font-cinzel">
          <div className="flex items-center gap-2 text-[#AAA398]">
            <button onClick={navigateToHome} className="hover:text-[#C9A227] transition-colors uppercase tracking-wider">
              HOME
            </button>
            <span className="text-[#8C6239]">/</span>
            <span className="text-[#DFBF52] font-bold uppercase tracking-wider">
              CONTACT & MAP
            </span>
          </div>
          <span className="text-[11px] text-[#AAA398] tracking-widest uppercase">
            ELECTRONIC CITY · BENGALURU
          </span>
        </div>
      </div>

      {/* Main Contact Section: Coordinators, Satellite View, & Instagram */}
      <ContactSection />
    </div>
  );
};
