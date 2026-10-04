import React from "react";
import { CLINIC_SERVICES } from "../data/clinicData";

interface FooterProps {
  onOpenBooking: () => void;
  onSelectServiceById: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onSelectServiceById }) => {
  return (
    <footer className="w-full bg-[#F4F1EA] text-[#22252A] pt-20 pb-28 lg:pb-16 px-6 sm:px-8 lg:px-12 border-t border-[#DBD5C7] font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Tier: Wordmark and Practice Purpose */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#DBD5C7]">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl lg:text-3xl text-[#111315] tracking-tight font-medium">
              Liverpool Medical Clinic
            </h3>
            <p className="text-xs text-[#525754] max-w-sm leading-relaxed">
              Private practice in internal medicine, preventative cardiology, and specialized outpatient care. Situated in Liverpool’s historic Rodney Street medical quarter.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#2D4539] font-medium">
              CQC Provider ID: 1-9824128 · GMC Practice Governance
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B706C] block mb-2 font-semibold">
              SPECIALTIES DIRECTORY
            </span>
            <ul className="space-y-2">
              {CLINIC_SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectServiceById(s.id)}
                    className="text-[#454A47] hover:text-[#2D4539] hover:underline transition-colors cursor-pointer text-left"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4 text-xs">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B706C] block mb-2 font-semibold">
              PRACTICE SANCTUARY
            </span>
            <div className="text-[#363A38] space-y-1">
              <div className="text-[#111315] font-semibold">48 Rodney Street</div>
              <div>Liverpool, Merseyside, L1 9ED</div>
              <div>Telephone: 0151 709 4800</div>
              <div>Direct: reception@liverpoolmedicalclinic.co.uk</div>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 border border-[#C5BDAF] bg-white hover:bg-[#FAF8F5] text-[11px] uppercase tracking-widest text-[#111315] font-medium transition-colors cursor-pointer shadow-sm"
              >
                Intake Consultation →
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Medical Disclaimer in Light Ivory */}
        <div className="p-4 bg-white/80 border border-[#DBD5C7] text-[11px] text-[#525754] leading-relaxed shadow-sm">
          <strong className="text-[#111315]">Emergency Notice:</strong> Liverpool Medical Clinic is an outpatient private consultation and diagnostic practice. We do not operate an emergency or urgent casualty department. For severe sudden illness, suspected stroke, cardiac arrest, or serious acute trauma, please dial 999 immediately or attend the Accident & Emergency department at the Royal Liverpool University Hospital (Prescot St, Liverpool L7 8XP).
        </div>

        {/* Bottom Tier: Copyright and Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B706C] pt-4">
          <div>
            © {new Date().getFullYear()} Liverpool Medical Clinic Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#111315] cursor-pointer">Medical Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-[#111315] cursor-pointer">GDPR Safeguards</span>
            <span>·</span>
            <span className="hover:text-[#111315] cursor-pointer">CQC Inspection Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
