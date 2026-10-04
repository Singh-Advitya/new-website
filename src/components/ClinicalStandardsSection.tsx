import React from "react";

export const ClinicalStandardsSection: React.FC = () => {
  const standards = [
    {
      marker: "01",
      title: "GMC Specialist Registration",
      subtitle: "Independent Secondary-Care Consultants",
      description: "Every consultant practicing at Liverpool Medical Clinic holds verified inclusion on the General Medical Council (GMC) Specialist Register and active NHS or academic honorary appointments across the North West."
    },
    {
      marker: "02",
      title: "CQC Regulated Standards",
      subtitle: "Care Quality Commission Compliance",
      description: "Our premises, protocols, infection control, and prescribing safeguards are audited under independent UK Care Quality Commission standards, ensuring surgical-grade hygiene and clinical governance."
    },
    {
      marker: "03",
      title: "Unhurried Clinical Cadence",
      subtitle: "Protected 45–60 Minute Consultations",
      description: "We enforce deliberate buffer periods between appointments. Doctors are never under schedule pressure, allowing thorough physical examination and full diagnostic discussion without rushed compromise."
    },
    {
      marker: "04",
      title: "Direct Diagnostic Pathways",
      subtitle: "Rapid Imaging & Laboratory Network",
      description: "In addition to on-site ECG and diagnostic ultrasound, our direct agreements with Merseyside private scanning centres facilitate expedited MRI, CT, and bone densitometry reporting within 48 to 72 hours."
    }
  ];

  return (
    <section className="w-full bg-[#FAF9F5] py-24 sm:py-32 lg:py-36 px-6 sm:px-8 lg:px-12 border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-mono text-[#6B706C] uppercase tracking-widest font-medium">
            08 / GOVERNANCE & RIGOR
          </span>
          <div className="w-12 h-[1px] bg-[#E2DDD3]" />
          <span className="text-[11px] font-sans text-[#234E39] uppercase tracking-widest font-bold">
            VERIFIED CLINICAL PRACTICE
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#111315] leading-[1.0] tracking-[-0.02em]">
              EXPERIENCE
              <br />
              YOU CAN
              <br />
              <span className="italic font-normal text-[#234E39]">TRUST.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#454A47] font-sans leading-relaxed">
              We do not rely on manufactured slogans. Our clinical reputation is founded upon the rigorous peer-reviewed credentials of our senior medical faculty, unhurried time with each patient, and transparent clinical stewardship.
            </p>
          </div>
        </div>

        {/* Standards Grid with Clean Editorial Hairline Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-12 border-t border-[#E2DDD3]">
          {standards.map((item) => (
            <div key={item.marker} className="space-y-3 bg-white p-6 border border-[#E2DDD3] shadow-xs">
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#234E39] font-bold">
                  {item.marker}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-[#111315]">
                    {item.title}
                  </h3>
                  <div className="text-xs font-serif italic text-[#6B706C]">
                    {item.subtitle}
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#525754] font-sans leading-relaxed pl-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
