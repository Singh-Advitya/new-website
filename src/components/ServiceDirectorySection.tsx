import React, { useState } from "react";
import { CLINIC_SERVICES, ServiceItem } from "../data/clinicData";
import { EditorialVisual } from "./EditorialVisual";

interface ServiceDirectorySectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: (serviceId: string) => void;
}

export const ServiceDirectorySection: React.FC<ServiceDirectorySectionProps> = ({
  onSelectService,
  onOpenBooking
}) => {
  const [activeService, setActiveService] = useState<ServiceItem>(CLINIC_SERVICES[0]);
  const [isHoveringList, setIsHoveringList] = useState(false);

  return (
    <section id="services" className="w-full bg-[#FAF8F5] text-[#1E2024] py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 relative overflow-hidden border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-6 border-b border-[#E2DDD3] gap-4">
          <div>
            <span className="text-[11px] font-mono text-[#6B706C] uppercase tracking-widest block mb-2 font-medium">
              04 / CLINICAL DIRECTORY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#111315] font-light">
              Medical Specialties
            </h2>
          </div>
          <div className="text-xs font-sans text-[#6B706C] uppercase tracking-widest sm:text-right">
            <span>DIRECT ACCESS CONSULTANTS</span>
            <span className="mx-2">·</span>
            <span className="text-[#234E39] font-bold">NO GP REFERRAL REQUIRED</span>
          </div>
        </div>

        {/* Giant Interactive Service Directory (NO CARDS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Giant Interactive Directory List */}
          <div 
            className="lg:col-span-7 flex flex-col"
            onMouseEnter={() => setIsHoveringList(true)}
            onMouseLeave={() => setIsHoveringList(false)}
          >
            {CLINIC_SERVICES.map((service) => {
              const isSelected = activeService.id === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => onSelectService(service)}
                  className={`group relative py-6 sm:py-7 border-b border-[#E2DDD3] transition-all duration-300 cursor-pointer ${
                    isHoveringList && !isSelected ? "opacity-45 hover:opacity-100" : "opacity-100"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span className="text-xs sm:text-sm font-mono text-[#6B706C] tracking-wider">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#111315] group-hover:text-[#234E39] group-hover:translate-x-2 transition-transform duration-300 font-normal">
                          {service.name}
                        </h3>
                        <p className="text-xs text-[#525754] font-sans mt-1.5 hidden sm:block">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-xs uppercase tracking-widest text-[#6B706C] font-sans group-hover:text-[#234E39] transition-colors hidden md:inline font-medium">
                        EXPLORE SCOPE →
                      </span>
                      <span className="text-base text-[#6B706C] group-hover:text-[#234E39] group-hover:translate-x-1 transition-all">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Bespoke Sticky Preview Window in Warm Porcelain */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white border border-[#E2DDD3] p-8 shadow-sm relative">
              {/* Dynamic Service Visual Art */}
              <div className="aspect-[16/10] w-full mb-6 border border-[#E2DDD3] overflow-hidden relative">
                <EditorialVisual
                  type="service-general"
                  className="w-full h-full"
                  badge={`SPECIALTY ${activeService.number}`}
                />
              </div>

              {/* Dynamic Service Content Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#6B706C] font-mono">
                  <span>{activeService.consultantDiscipline}</span>
                  <span className="text-[#111315] font-semibold">{activeService.duration}</span>
                </div>

                <h4 className="font-serif text-2xl text-[#111315]">
                  {activeService.name}
                </h4>

                <p className="text-sm text-[#454A47] font-sans leading-relaxed">
                  {activeService.lead}
                </p>

                <div className="pt-4 border-t border-[#E2DDD3] flex items-center justify-between">
                  <div className="text-xs text-[#234E39] font-mono font-bold">
                    {activeService.feeGuidance}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onSelectService(activeService)}
                      className="text-xs uppercase tracking-widest font-sans text-[#111315] hover:text-[#234E39] underline underline-offset-4 cursor-pointer font-medium"
                    >
                      Scope & Details
                    </button>
                    <button
                      onClick={() => onOpenBooking(activeService.id)}
                      className="px-4 py-2 bg-[#234E39] text-white hover:bg-[#1A3A2B] text-xs font-sans uppercase tracking-widest font-medium transition-colors cursor-pointer shadow-xs"
                    >
                      Book This
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
