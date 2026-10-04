import React from "react";
import { DoctorProfile } from "../data/clinicData";
import { EditorialVisual } from "./EditorialVisual";

interface DoctorModalProps {
  doctor: DoctorProfile | null;
  onClose: () => void;
  onBookWithDoctor: (doctorId: string) => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({
  doctor,
  onClose,
  onBookWithDoctor
}) => {
  if (!doctor) return null;

  const getVisualType = (id: string): any => {
    switch (id) {
      case "dr-alistair-vance":
        return "doctor-vance";
      case "dr-eleanor-hughes":
        return "doctor-hughes";
      case "mr-marcus-thornton":
        return "doctor-thornton";
      case "dr-tariq-rahman":
        return "doctor-rahman";
      default:
        return "doctor-vance";
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#FAF9F5] border border-[#E2DDD3] text-[#1E2024] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-8 py-5 border-b border-[#E2DDD3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#6B706C]">
              FACULTY PROFILE · GMC {doctor.gmcNumber}
            </span>
            <span className="text-[10px] font-mono text-[#234E39] font-bold">
              VERIFIED SPECIALIST REGISTER
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 border border-[#DBD5C7] hover:border-[#234E39] flex items-center justify-center text-sm font-sans transition-colors cursor-pointer bg-white"
          >
            ✕
          </button>
        </div>

        {/* Content: Asymmetric Layout (Portrait Left + Dossier Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column in Pure Light Porcelain */}
          <div className="md:col-span-5 bg-[#F5F2EA] border-r border-[#E2DDD3] flex flex-col justify-between">
            <div className="aspect-[3/4] w-full border-b border-[#E2DDD3]">
              <EditorialVisual
                type={getVisualType(doctor.id)}
                className="w-full h-full"
              />
            </div>
            <div className="p-6 bg-white border-t border-[#E2DDD3] text-xs font-sans text-[#525754] space-y-2">
              <div className="flex justify-between">
                <span className="text-[#6B706C]">Clinical Days:</span>
                <span className="text-[#111315] font-semibold">{doctor.daysAtClinic}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B706C]">Clinical Tenure:</span>
                <span className="text-[#111315] font-semibold">{doctor.experience}</span>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Biography & Scope */}
          <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-8 max-h-[80vh] overflow-y-auto bg-white">
            <div>
              <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#234E39] mb-2 font-bold">
                {doctor.specialty}
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#111315] mb-2">
                {doctor.name}
              </h3>
              <div className="text-sm font-serif italic text-[#6B706C] mb-6">
                {doctor.qualifications} · {doctor.title}
              </div>

              <div className="space-y-4 text-sm text-[#454A47] font-sans leading-relaxed border-t border-[#E2DDD3] pt-6">
                <h4 className="text-xs uppercase tracking-widest font-mono text-[#111315] font-semibold">
                  PROFESSIONAL BIOGRAPHY
                </h4>
                <p>{doctor.biography}</p>
              </div>

              {/* Areas of Clinical Practice */}
              <div className="mt-6 pt-6 border-t border-[#E2DDD3]">
                <h4 className="text-xs uppercase tracking-widest font-mono text-[#111315] mb-3 font-semibold">
                  AREAS OF CLINICAL CARE
                </h4>
                <ul className="space-y-2">
                  {doctor.areasOfCare.map((area, idx) => (
                    <li key={idx} className="text-xs text-[#525754] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#234E39]" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fellowships */}
              <div className="mt-6 pt-6 border-t border-[#E2DDD3]">
                <h4 className="text-xs uppercase tracking-widest font-mono text-[#111315] mb-3 font-semibold">
                  COLLEGE FELLOWSHIPS & ACCREDITATIONS
                </h4>
                <div className="space-y-1.5">
                  {doctor.fellowships.map((f, i) => (
                    <div key={i} className="text-xs text-[#6B706C] font-serif italic">
                      · {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-[#E2DDD3] flex items-center justify-between">
              <span className="text-xs font-mono text-[#6B706C]">
                Direct Consultant Consultation
              </span>
              <button
                onClick={() => {
                  onClose();
                  onBookWithDoctor(doctor.id);
                }}
                className="px-6 py-3 bg-[#234E39] text-white hover:bg-[#1A3A2B] text-xs font-sans uppercase tracking-widest font-semibold transition-colors cursor-pointer shadow-xs"
              >
                Schedule with {doctor.name.split(" ")[0]} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
