import React from "react";
import { EditorialVisual } from "./EditorialVisual";

export const HumanCareSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#1A1C1B] py-20 sm:py-28 lg:py-36 px-6 sm:px-8 lg:px-12 relative overflow-hidden border-b border-[#D9D3C7]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-mono text-[#736F66] uppercase tracking-widest">
            06 / THE CLINICAL RELATIONSHIP
          </span>
          <div className="w-8 h-[1px] bg-[#D9D3C7]" />
          <span className="text-[11px] font-sans text-[#234235] uppercase tracking-widest font-medium">
            EMPATHETIC RIGOR
          </span>
        </div>

        {/* Enormous Human Visual Spread */}
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border border-[#D9D3C7] overflow-hidden shadow-xl bg-[#F5F1E8] flex items-center justify-center">
          {/* Background Human Dialogue Visual */}
          <EditorialVisual
            type="human-dialogue"
            className="w-full h-full absolute inset-0"
          />

          {/* Elegant Scrim for Typographic Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/95 via-[#FAF8F5]/75 to-transparent pointer-events-none" />

          {/* Statement Overlaid Directly on the Visual */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-20 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#234235] font-sans font-semibold block mb-4">
              CONTINUITY OF CONSULTANT ATTENTION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-[#111212] mb-6 text-balance">
              THERE’S A PERSON
              <br />
              BEHIND EVERY
              <br />
              <span className="italic font-normal text-[#234235]">APPOINTMENT.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#403E3A] font-sans font-light leading-relaxed max-w-xl">
              We never reduce our patients to an isolated test abnormal or a ten-minute hurried dialogue. Restoring health requires understanding the cadence of your life, the physical stresses you absorb, and providing direct consultant continuity across every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
