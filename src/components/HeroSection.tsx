import React from "react";
import { EditorialVisual } from "./EditorialVisual";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreSpecialty: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onExploreSpecialty }) => {
  return (
    <section className="relative w-full min-h-screen bg-[#FAF9F5] text-[#1E2024] flex flex-col justify-between pt-28 pb-12 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-[#E2DDD3]">
      {/* Background Luminous Architectural Sanctuary */}
      <div className="absolute inset-0 z-0">
        <EditorialVisual type="hero-clinic" className="w-full h-full" />
      </div>

      {/* Top Editorial Row with Fine Hairline Rules */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#E2DDD3]">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#234E39]" />
          <span className="text-[11px] tracking-[0.28em] uppercase font-sans font-semibold text-[#234E39]">
            PRIVATE PRACTICE · CONSULTANT MEDICINE
          </span>
        </div>
        <div className="text-[11px] tracking-[0.25em] uppercase font-sans text-[#6B706C] sm:text-right font-medium">
          RODNEY STREET · EST. 2012
        </div>
      </div>

      {/* Center Cinematic Statement with Scale Contrast */}
      <div className="relative z-10 my-auto py-12 lg:py-20 max-w-5xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] uppercase tracking-[0.32em] text-[#5C5F5D] font-mono font-medium">
            A RETURN TO UNHURRIED CLINICAL CARE
          </span>
          <div className="w-8 h-[1px] bg-[#D5CDC0]" />
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-[7.2rem] xl:text-[8rem] font-light leading-[0.92] tracking-[-0.035em] text-[#111315] mb-8 text-balance">
          CARE,
          <br />
          <span className="italic font-normal text-[#234E39]">CONSIDERED.</span>
        </h1>

        <p className="max-w-xl text-base sm:text-lg text-[#454A47] font-sans font-light leading-relaxed mb-10">
          Where senior NHS and private consultants allocate 45 to 60 unhurried minutes to investigate root causes, backed by on-site diagnostic ultrasound, 12-lead ECG, and rapid pathology in a restored Georgian sanctuary.
        </p>

        {/* Quick Intake Pathways in Crisp Light Styling */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-[10px] uppercase tracking-widest font-mono text-[#6B706C] mr-2 font-medium">
            Priority Departments:
          </span>
          {[
            { id: "general-medicine", label: "General & Preventative" },
            { id: "cardiovascular", label: "Cardiovascular Health" },
            { id: "advanced-screening", label: "Executive Screening" },
            { id: "womens-health", label: "Women’s Health & HRT" },
            { id: "musculoskeletal", label: "Joint & MSK" }
          ].map((dept) => (
            <button
              key={dept.id}
              onClick={() => onExploreSpecialty(dept.id)}
              className="text-xs px-3.5 py-1.5 bg-white hover:bg-[#234E39] hover:text-white border border-[#D5CDC0] text-[#2D4539] font-sans font-medium transition-all duration-150 cursor-pointer shadow-xs"
            >
              {dept.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Editorial Anchors & Primary Action */}
      <div className="relative z-10 w-full pt-8 border-t border-[#E2DDD3] flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-8 text-xs text-[#525754] font-sans">
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-[#6B706C] mb-1 font-mono font-medium">
              PRACTICE LOCATION
            </span>
            <span className="text-[#111315] font-semibold">
              48 Rodney Street, Liverpool L1 9ED
            </span>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-[#D5CDC0]" />
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-[#6B706C] mb-1 font-mono font-medium">
              APPOINTMENT CADENCE
            </span>
            <span className="text-[#111315] font-semibold">
              Unhurried 45–60 Minute Sessions
            </span>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-[#D5CDC0]" />
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-[#6B706C] mb-1 font-mono font-medium">
              CLINICAL GOVERNANCE
            </span>
            <span className="text-[#234E39] font-bold">
              CQC Audited & GMC Specialists
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#the-clinic"
            className="hidden lg:inline-flex items-center text-xs uppercase tracking-widest text-[#6B706C] hover:text-[#234E39] transition-colors font-medium"
          >
            <span>The Rodney St Clinic</span>
            <span className="ml-1.5">↓</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-[#234E39] text-white hover:bg-[#1A3A2B] text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all duration-200 shadow-md cursor-pointer"
          >
            Request Consultation →
          </button>
        </div>
      </div>
    </section>
  );
};
