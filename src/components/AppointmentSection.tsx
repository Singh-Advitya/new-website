import React from "react";

interface AppointmentSectionProps {
  onOpenBooking: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="w-full bg-[#FAF9F5] text-[#1E2024] py-28 sm:py-36 lg:py-44 px-6 sm:px-8 lg:px-12 relative overflow-hidden border-t border-[#E2DDD3]">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Metadata Kicker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#234E39]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#6B706C] font-semibold">
            13 / PRIVATE INTAKE & CONSULTATION
          </span>
        </div>

        {/* Large Statement */}
        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#111315] leading-[0.98] tracking-[-0.03em] mb-8 text-balance">
          LET’S START
          <br />
          WITH A
          <br />
          <span className="italic font-normal text-[#234E39]">CONVERSATION.</span>
        </h2>

        {/* Short, Human, Reassuring Supporting Copy */}
        <p className="max-w-xl text-base sm:text-lg text-[#454A47] font-sans font-light leading-relaxed mb-12">
          No GP referral is required. Whether you are seeking an exhaustive multi-organ health screening, a second opinion on unresolved symptoms, or ongoing preventative care, our consultants are ready to listen.
        </p>

        {/* Actions Cluster in Light Aesthetic */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-9 py-4 bg-[#234E39] text-white hover:bg-[#1A3A2B] text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all shadow-md cursor-pointer"
          >
            Book an Appointment →
          </button>

          <a
            href="tel:01517094800"
            className="w-full sm:w-auto px-8 py-4 border border-[#DBD5C7] bg-white hover:bg-[#F5F2EA] text-xs font-sans uppercase tracking-[0.2em] text-[#111315] transition-colors text-center font-medium shadow-xs"
          >
            Call Practice: 0151 709 4800
          </a>
        </div>

        {/* Quiet Reassurance Strip */}
        <div className="mt-14 pt-8 border-t border-[#E2DDD3] flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B706C] font-sans">
          <span>Private Outpatient Practice</span>
          <span>·</span>
          <span>Absolute Medical Confidentiality</span>
          <span>·</span>
          <span className="text-[#234E39] font-bold">Care Quality Commission (CQC) Registered</span>
        </div>
      </div>
    </section>
  );
};
