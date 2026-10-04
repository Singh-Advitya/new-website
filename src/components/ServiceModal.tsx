import React from "react";
import { ServiceItem } from "../data/clinicData";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#FAF9F5] border border-[#E2DDD3] text-[#1E2024] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-8 py-5 border-b border-[#E2DDD3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#6B706C]">
              CLINICAL SPECIFICATION · INDEX {service.number}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 border border-[#DBD5C7] hover:border-[#234E39] flex items-center justify-center text-sm font-sans transition-colors cursor-pointer bg-white"
          >
            ✕
          </button>
        </div>

        <div className="p-8 sm:p-10 space-y-8 max-h-[85vh] overflow-y-auto bg-white">
          {/* Main Title & Lead */}
          <div>
            <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#234E39] mb-2 font-bold">
              {service.consultantDiscipline}
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#111315] mb-3">
              {service.name}
            </h3>
            <p className="text-base font-serif italic text-[#454A47] leading-relaxed">
              "{service.lead}"
            </p>
          </div>

          {/* Key Parameters in Soft Light Box */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-[#FAF9F5] border border-[#E2DDD3] text-xs font-sans">
            <div>
              <span className="text-[#6B706C] block text-[10px] uppercase tracking-wider font-medium">Duration</span>
              <span className="font-bold text-[#111315]">{service.duration}</span>
            </div>
            <div>
              <span className="text-[#6B706C] block text-[10px] uppercase tracking-wider font-medium">Fee Guidance</span>
              <span className="font-bold text-[#234E39] font-mono">{service.feeGuidance}</span>
            </div>
            <div>
              <span className="text-[#6B706C] block text-[10px] uppercase tracking-wider font-medium">Location</span>
              <span className="font-semibold text-[#111315]">48 Rodney Street Suite</span>
            </div>
          </div>

          {/* Full Description */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-mono text-[#111315] font-semibold">
              CLINICAL SCOPE & METHODOLOGY
            </h4>
            <p className="text-sm text-[#454A47] font-sans leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Scope Checklist */}
          <div className="space-y-3 pt-4 border-t border-[#E2DDD3]">
            <h4 className="text-xs uppercase tracking-widest font-mono text-[#111315] font-semibold">
              INCLUDED INVESTIGATIONS & ACTIONS
            </h4>
            <ul className="space-y-2">
              {service.scopeOfCare.map((item, i) => (
                <li key={i} className="text-xs sm:text-sm text-[#525754] font-sans flex items-start gap-2.5">
                  <span className="text-[#234E39] font-mono font-bold">0{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preparation */}
          <div className="p-4 bg-[#F5F2EA] border border-[#E2DDD3] text-xs text-[#525754] font-sans">
            <span className="font-bold text-[#111315] block mb-1">Patient Preparation Guidance:</span>
            {service.preparation}
          </div>

          {/* CTA Footer */}
          <div className="pt-6 border-t border-[#E2DDD3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#6B706C] font-sans font-medium">
              Direct access without GP referral.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-3 border border-[#DBD5C7] bg-white text-xs font-sans uppercase tracking-widest hover:border-[#111315] cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookService(service.id);
                }}
                className="w-full sm:w-auto px-6 py-3 bg-[#234E39] text-white hover:bg-[#1A3A2B] text-xs font-sans uppercase tracking-widest cursor-pointer shadow-xs font-semibold"
              >
                Book This Specialty →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
