import React, { useState } from "react";
import { CLINIC_PHYSICIANS, DoctorProfile } from "../data/clinicData";
import { EditorialVisual } from "./EditorialVisual";

interface PhysiciansSectionProps {
  onSelectDoctor: (doctor: DoctorProfile) => void;
  onOpenBookingWithDoctor: (doctorId: string) => void;
}

export const PhysiciansSection: React.FC<PhysiciansSectionProps> = ({
  onSelectDoctor,
  onOpenBookingWithDoctor
}) => {
  const [hoveredDoctor, setHoveredDoctor] = useState<string | null>(null);

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
    <section id="physicians" className="w-full bg-[#FAF9F5] py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 gap-4">
          <div>
            <span className="text-[11px] font-mono text-[#6B706C] uppercase tracking-widest block mb-2 font-medium">
              09 / MEDICAL FACULTY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#111315] font-light">
              Senior Physicians
            </h2>
          </div>
          <div className="text-xs uppercase tracking-widest font-sans text-[#6B706C] sm:text-right font-medium">
            <span>GENERAL MEDICAL COUNCIL SPECIALIST REGISTER</span>
            <span className="block mt-1 font-serif italic text-[#234E39] font-bold">Unhurried Continuity of Care</span>
          </div>
        </div>

        {/* Cinematic Vertical Gallery in Pure Light Porcelain */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLINIC_PHYSICIANS.map((doctor) => {
            const isHovered = hoveredDoctor === doctor.id;
            return (
              <div
                key={doctor.id}
                onMouseEnter={() => setHoveredDoctor(doctor.id)}
                onMouseLeave={() => setHoveredDoctor(null)}
                onClick={() => onSelectDoctor(doctor)}
                className="group flex flex-col justify-between bg-white border border-[#E2DDD3] transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div>
                  {/* Large Vertical Portrait Container */}
                  <div className="aspect-[3/4] w-full overflow-hidden bg-[#FAF9F5] relative border-b border-[#E2DDD3]">
                    <EditorialVisual
                      type={getVisualType(doctor.id)}
                      className={`w-full h-full transition-transform duration-500 ${
                        isHovered ? "scale-102" : "scale-100"
                      }`}
                    />
                    <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest text-[#234E39] font-bold bg-white/95 border border-[#E2DDD3] px-2 py-0.5 shadow-xs">
                      GMC {doctor.gmcNumber}
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6">
                    <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#234E39] font-bold mb-2">
                      {doctor.specialty}
                    </div>

                    <h3 className="font-serif text-2xl text-[#111315] mb-1 group-hover:text-[#234E39] transition-colors">
                      {doctor.name}
                    </h3>

                    <div className="text-xs font-serif italic text-[#6B706C] mb-4">
                      {doctor.qualifications}
                    </div>

                    {/* Animated Thin Hairline Rule */}
                    <div className="relative w-full h-[1.5px] bg-[#E2DDD3] my-4 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-[#234E39] transition-transform duration-500 ${
                          isHovered ? "translate-x-0" : "-translate-x-full"
                        }`}
                      />
                    </div>

                    <p className="text-xs text-[#525754] font-sans leading-relaxed line-clamp-3">
                      {doctor.biography}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 mt-4 flex items-center justify-between border-t border-[#E2DDD3] text-xs font-sans">
                  <span className="uppercase tracking-widest text-[#111315] group-hover:text-[#234E39] font-medium flex items-center gap-1.5">
                    View Dossier
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBookingWithDoctor(doctor.id);
                    }}
                    className="px-3 py-1.5 text-[11px] font-mono uppercase bg-white hover:bg-[#234E39] hover:text-white border border-[#DBD5C7] text-[#234E39] font-bold transition-colors cursor-pointer shadow-xs"
                  >
                    Consult
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
