import React, { useState } from "react";
import { EditorialVisual } from "./EditorialVisual";

export const ClinicArchitectureSection: React.FC = () => {
  const [activeFacet, setActiveFacet] = useState<number>(0);

  const facets = [
    {
      index: "01",
      title: "ENVIRONMENT",
      subtitle: "Acoustic Silence & Air Purity",
      text: "Situated inside a classical Georgian townhouse on Rodney Street, the clinic has been engineered with medical-grade HEPA filtration, triple-glazed acoustic isolation, and natural Portland stone to eliminate clinical sensory fatigue."
    },
    {
      index: "02",
      title: "APPROACH",
      subtitle: "Absolute Physician Autonomy",
      text: "Our consultants practice without corporate quotas or time limitations. Every diagnostic recommendation is dictated entirely by your unique clinical presentation and evidence-based medicine."
    },
    {
      index: "03",
      title: "EXPERIENCE",
      subtitle: "The Absence of Waiting Rooms",
      text: "We do not believe in crowded reception areas. Appointments are staggered deliberately so that you are received directly into your private consultation suite upon arrival."
    }
  ];

  return (
    <section id="the-clinic" className="w-full bg-[#F5F2EA] py-24 sm:py-32 lg:py-36 px-6 sm:px-8 lg:px-12 border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 gap-4">
          <div>
            <span className="text-[11px] font-mono text-[#6B706C] uppercase tracking-widest block mb-2 font-medium">
              03 / THE CLINIC SPACE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#111315] font-light">
              Architecture for Healing
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest font-sans text-[#6B706C] max-w-xs font-medium">
            48 Rodney Street · Restored Georgian Practice · Liverpool L1
          </p>
        </div>

        {/* Asymmetrical Architectural Composition: Large Left Vertical + Editorial Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Vertical Architectural Visual with Floating Labels */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-[#E2DDD3] bg-white shadow-sm overflow-hidden aspect-[4/5]">
              <EditorialVisual 
                type="clinic-architecture" 
                className="w-full h-full"
                caption="Consultation Suite 02 · Natural sash daylight & private acoustic isolation"
              />
            </div>

            {/* Floating Architectural Indicators in Light Stone */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-white p-5 border border-[#E2DDD3] shadow-md max-w-xs">
              <span className="text-[10px] font-mono text-[#234E39] tracking-widest uppercase block mb-1 font-bold">
                MATERIAL ARCHITECTURE
              </span>
              <p className="text-xs text-[#525754] font-sans leading-snug">
                Honed limestone, natural linen, acoustic oak panels, and daylight-balanced illumination.
              </p>
            </div>
          </div>

          {/* Right: Short Editorial Text & Interactive Architectural Facets */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#234E39] font-mono font-bold block mb-3">
                DESIGN PHILOSOPHY
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#111315] font-light leading-snug mb-6">
                A physical sanctuary designed to reduce cortisol before the doctor enters.
              </h3>
              <p className="text-base text-[#454A47] font-sans leading-relaxed">
                Hospital environments often produce autonomic anxiety—harsh fluorescent glare, sterile vinyl, and the constant hum of alarms. We designed Liverpool Medical Clinic with the tactile restraint of a private residence and the operational sterility of a modern diagnostic center.
              </p>
            </div>

            {/* Facets Selector in Pure Light Porcelain */}
            <div className="space-y-4 pt-4 border-t border-[#E2DDD3]">
              {facets.map((facet, idx) => (
                <div
                  key={facet.index}
                  onClick={() => setActiveFacet(idx)}
                  className={`p-5 transition-all cursor-pointer border ${
                    activeFacet === idx
                      ? "bg-white border-[#234E39] shadow-xs"
                      : "bg-[#FAF9F5] border-[#E2DDD3] hover:border-[#234E39]/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#234E39] font-bold">
                        {facet.index} / {facet.title}
                      </span>
                      <span className="text-xs font-serif italic text-[#6B706C]">
                        {facet.subtitle}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#6B706C]">
                      {activeFacet === idx ? "—" : "+"}
                    </span>
                  </div>
                  {activeFacet === idx && (
                    <p className="text-xs sm:text-sm text-[#454A47] font-sans leading-relaxed mt-2 pl-6 border-l-2 border-[#234E39]">
                      {facet.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
