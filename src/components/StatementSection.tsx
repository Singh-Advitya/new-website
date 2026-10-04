import React from "react";

export const StatementSection: React.FC = () => {
  return (
    <section id="philosophy" className="w-full bg-[#FAF9F5] py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 border-b border-[#E2DDD3]">
      <div className="max-w-6xl mx-auto">
        {/* Tiny Editorial Kicker */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-[11px] font-mono text-[#6B706C] uppercase tracking-widest font-medium">
            02 / THE PRINCIPLE
          </span>
          <div className="h-[1px] w-12 bg-[#E2DDD3]" />
          <span className="text-[11px] font-sans text-[#234E39] uppercase tracking-widest font-semibold">
            CLINICAL PHILOSOPHY
          </span>
        </div>

        {/* Huge Typographic Statement */}
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-[#111315] leading-[1.0] tracking-[-0.025em] mb-12 sm:mb-16 max-w-4xl text-balance">
          YOUR HEALTH
          <br />
          DESERVES
          <br />
          <span className="italic font-normal text-[#234E39]">ATTENTION.</span>
        </h2>

        {/* Editorial Sub-Paragraph */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-[#E2DDD3]">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-widest text-[#6B706C] font-sans block mb-2 font-medium">
              Beyond the 10-Minute Consultation
            </span>
            <span className="text-sm font-serif italic text-[#111315]">
              "Medicine is not an assembly line. It is a nuanced scientific inquiry into an individual life."
            </span>
          </div>

          <div className="md:col-span-8 space-y-5 text-base sm:text-lg text-[#454A47] font-sans font-light leading-relaxed">
            <p>
              Contemporary healthcare has gradually compressed the clinical encounter into hurried questionnaires and reactive symptom management. Important early signals are dismissed as stress, and complex multi-system concerns remain unresolved.
            </p>
            <p>
              At Liverpool Medical Clinic, we deliberate. Every new patient consultation is allocated forty-five to sixty unhurried minutes with a senior accredited consultant. Here, your complete physiological history is examined, backed by immediate laboratory biochemistry and point-of-care diagnostics in a quiet, confidential space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
