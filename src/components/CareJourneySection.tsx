import React, { useState } from "react";
import { CARE_JOURNEY_STAGES } from "../data/clinicData";

export const CareJourneySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="care-journey" className="w-full bg-[#FAF9F5] py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-20 gap-4">
          <div>
            <span className="text-[11px] font-mono text-[#6B706C] uppercase tracking-widest block mb-2 font-medium">
              05 / THE CLINICAL METHOD
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#111315] font-light">
              The Consultation Architecture
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest font-sans text-[#6B706C] max-w-sm font-medium">
            Four disciplined phases designed to prevent missed pathology and ensure continuous therapeutic clarity.
          </p>
        </div>

        {/* Interactive Progress Line */}
        <div className="relative w-full mb-16 hidden md:block">
          <div className="w-full h-[1px] bg-[#E2DDD3]" />
          <div 
            className="absolute top-0 left-0 h-[2.5px] bg-[#234E39] transition-all duration-500 ease-out"
            style={{ width: `${((activeStage + 1) / CARE_JOURNEY_STAGES.length) * 100}%` }}
          />
          <div className="grid grid-cols-4 pt-4">
            {CARE_JOURNEY_STAGES.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setActiveStage(idx)}
                className={`text-left text-xs font-mono tracking-widest transition-colors cursor-pointer ${
                  activeStage === idx ? "text-[#234E39] font-bold" : "text-[#6B706C] hover:text-[#111315]"
                }`}
              >
                PHASE {s.step} · {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Full-Width Visual Sequence in Pure Light Palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CARE_JOURNEY_STAGES.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <div
                key={stage.step}
                onMouseEnter={() => setActiveStage(idx)}
                onClick={() => setActiveStage(idx)}
                className={`transition-all duration-300 p-8 border cursor-pointer flex flex-col justify-between min-h-[420px] ${
                  isActive
                    ? "bg-white text-[#111315] border-[#234E39] shadow-md ring-1 ring-[#234E39]/15"
                    : "bg-[#F5F2EA] text-[#363A38] border-[#E2DDD3] hover:border-[#234E39]/40"
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between mb-8">
                    <span
                      className={`font-serif text-5xl sm:text-6xl lg:text-7xl font-light transition-all ${
                        isActive ? "text-[#234E39] scale-105" : "text-[#9E9789]/60"
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span
                      className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${
                        isActive ? "text-[#234E39]" : "text-[#6B706C]"
                      }`}
                    >
                      {stage.timeframe}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-3xl sm:text-4xl font-normal tracking-wide mb-2 ${
                      isActive ? "text-[#111315]" : "text-[#22252A]"
                    }`}
                  >
                    {stage.label}
                  </h3>

                  <div
                    className={`text-xs uppercase tracking-wider font-sans mb-6 font-medium ${
                      isActive ? "text-[#234E39]" : "text-[#6B706C]"
                    }`}
                  >
                    {stage.title}
                  </div>

                  <p
                    className={`text-sm font-sans leading-relaxed ${
                      isActive ? "text-[#363A38]" : "text-[#525754]"
                    }`}
                  >
                    {stage.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E2DDD3] text-[11px] font-mono text-[#6B706C]">
                  Focus: {stage.focus}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
