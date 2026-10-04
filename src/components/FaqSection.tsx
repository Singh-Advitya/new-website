import React, { useState } from "react";
import { CLINIC_FAQS } from "../data/clinicData";

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#FAF9F5] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-b border-[#E2DDD3]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16">
          <span className="text-[11px] font-mono text-[#6B706C] uppercase tracking-widest block mb-2 font-medium">
            PRACTICE ENQUIRIES & GOVERNANCE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#111315] font-light">
            Frequently Clarified Questions
          </h2>
        </div>

        {/* Elegant Accordion in Pure Light Palette */}
        <div className="border-t border-[#E2DDD3]">
          {CLINIC_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border-b border-[#E2DDD3] transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-6 flex items-baseline justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#111315] group-hover:text-[#234E39] transition-colors pr-6 font-normal">
                    {faq.question}
                  </span>
                  <span className="text-sm font-mono text-[#6B706C] shrink-0 font-medium">
                    {isOpen ? "—" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 text-sm text-[#454A47] font-sans leading-relaxed pl-4 pr-6 border-l-2 border-[#234E39] my-2 bg-white/70 p-4 border-r border-t border-b border-[#E2DDD3] shadow-xs">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
