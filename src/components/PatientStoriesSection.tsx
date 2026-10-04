import React, { useState } from "react";
import { PATIENT_PERSPECTIVES } from "../data/clinicData";

export const PatientStoriesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = PATIENT_PERSPECTIVES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PATIENT_PERSPECTIVES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PATIENT_PERSPECTIVES.length) % PATIENT_PERSPECTIVES.length);
  };

  return (
    <section className="w-full bg-[#FAF9F5] py-24 sm:py-32 lg:py-36 px-6 sm:px-8 lg:px-12 border-b border-[#E2DDD3]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-[#6B706C] uppercase tracking-widest font-medium">
              10 / PATIENT PERSPECTIVES
            </span>
            <div className="w-8 h-[1px] bg-[#E2DDD3]" />
            <span className="text-[11px] font-sans text-[#234E39] uppercase tracking-widest font-bold">
              RECORDED CLINICAL EXPERIENCES
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#6B706C]">
            <span className="font-semibold text-[#111315]">0{currentIndex + 1}</span>
            <span>/</span>
            <span>0{PATIENT_PERSPECTIVES.length}</span>
          </div>
        </div>

        {/* One Single Patient Story at a Time */}
        <div className="relative py-4 bg-white p-8 sm:p-12 border border-[#E2DDD3] shadow-sm">
          {/* Subtle Delicate Quotation Mark */}
          <div className="font-serif text-7xl lg:text-8xl text-[#DBD5C7]/70 select-none leading-none -mb-6">
            “
          </div>

          {/* Large Quote Statement */}
          <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#111315] leading-[1.25] tracking-tight mb-12">
            {current.quote}
          </blockquote>

          {/* Attribution & Context Ribbon */}
          <div className="pt-8 border-t border-[#E2DDD3] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-widest font-sans font-bold text-[#234E39]">
                {current.treatmentCategory}
              </div>
              <div className="text-sm font-serif italic text-[#111315]">
                {current.patientInitials} · {current.tenure}
              </div>
              <div className="text-xs text-[#525754] font-sans">
                {current.context}
              </div>
            </div>

            {/* Subtle Editorial Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-[#DBD5C7] bg-white hover:bg-[#F5F2EA] flex items-center justify-center text-[#111315] text-sm transition-colors cursor-pointer shadow-xs"
                aria-label="Previous patient story"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-[#DBD5C7] bg-white hover:bg-[#F5F2EA] flex items-center justify-center text-[#111315] text-sm transition-colors cursor-pointer shadow-xs"
                aria-label="Next patient story"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
