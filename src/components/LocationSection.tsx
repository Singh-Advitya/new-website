import React from "react";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="w-full bg-[#FAF8F5] text-[#1A1C1B] py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 relative overflow-hidden border-b border-[#D9D3C7]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-mono text-[#736F66] uppercase tracking-widest block mb-4">
              12 / THE LIVERPOOL MEDICAL QUARTER
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#111212] leading-[0.95] tracking-tight">
              HERE,
              <br />
              WHEN YOU
              <br />
              <span className="italic font-normal text-[#234235]">NEED US.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-[#D9D3C7] lg:pl-8">
            <p className="text-sm text-[#403E3A] font-sans leading-relaxed">
              Rodney Street has defined North West British medicine since 1820. Our Georgian townhouse has been modernised with hospital-grade laminar air purification, triple-glazed acoustic privacy, and discreet accessible parking.
            </p>
          </div>
        </div>

        {/* Location Content & Cartographic Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Map Composition with Rodney Street Quarter Grid */}
          <div className="lg:col-span-7 bg-[#F5F1E8] border border-[#D9D3C7] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[380px]">
            {/* Visual Vector Cartography of Rodney Street & Hope Street Quarter */}
            <svg className="w-full h-full absolute inset-0 opacity-70" viewBox="0 0 700 450" fill="none">
              {/* Urban Grid Lines of Liverpool L1/L8 */}
              <line x1="80" y1="0" x2="80" y2="450" stroke="#D9D3C7" strokeWidth="1" />
              <line x1="220" y1="0" x2="220" y2="450" stroke="#234235" strokeWidth="2.5" /> {/* Rodney Street */}
              <line x1="380" y1="0" x2="380" y2="450" stroke="#C9C0AE" strokeWidth="2" /> {/* Hope Street */}
              <line x1="540" y1="0" x2="540" y2="450" stroke="#D9D3C7" strokeWidth="1" />

              <line x1="0" y1="90" x2="700" y2="90" stroke="#D9D3C7" strokeWidth="1" /> {/* Mount Pleasant */}
              <line x1="0" y1="220" x2="700" y2="220" stroke="#C9C0AE" strokeWidth="1.5" /> {/* Hardman Street / Leece St */}
              <line x1="0" y1="360" x2="700" y2="360" stroke="#D9D3C7" strokeWidth="1" />

              {/* Landmark Callouts */}
              <text x="230" y="40" fill="#234235" fontSize="10" fontFamily="Plus Jakarta Sans" letterSpacing="0.2em" fontWeight="600">
                RODNEY STREET (MEDICAL ROW)
              </text>
              <text x="390" y="40" fill="#736F66" fontSize="10" fontFamily="Plus Jakarta Sans" letterSpacing="0.2em">
                HOPE STREET / QUARTER
              </text>
              <text x="30" y="80" fill="#736F66" fontSize="9" fontFamily="Plus Jakarta Sans">
                MOUNT PLEASANT
              </text>

              {/* 48 Rodney Street Clinic Pin Indicator */}
              <circle cx="220" cy="180" r="18" fill="#234235" fillOpacity="0.15" />
              <circle cx="220" cy="180" r="7" fill="#234235" />
              <circle cx="220" cy="180" r="2.5" fill="#FAF8F5" />
              
              <rect x="240" y="165" width="200" height="34" rx="2" fill="#FAF8F5" stroke="#234235" strokeWidth="1.5" />
              <text x="252" y="186" fill="#111212" fontSize="11" fontFamily="Plus Jakarta Sans" fontWeight="700">
                48 RODNEY STREET
              </text>
            </svg>

            {/* Cartographic Overlaid Details */}
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-[#FAF8F5] border border-[#D9D3C7] text-[10px] uppercase font-mono tracking-widest text-[#234235] mb-2 font-medium">
                MERSEYSIDE CONSERVATION PRECINCT
              </div>
              <h4 className="font-serif text-2xl text-[#111212]">
                Historic Rodney Street Townhouse
              </h4>
            </div>

            <div className="relative z-10 pt-16 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#5C5952] font-sans">
                <span className="block text-[#111212] font-semibold">Rail & Transit Links:</span>
                Liverpool Central (8 min walk) · Lime Street Intercity (12 min walk)
              </div>
              <a
                href="https://maps.google.com/?q=48+Rodney+Street+Liverpool+L1+9ED"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#111212] hover:bg-[#234235] text-xs font-sans uppercase tracking-widest text-[#FAF8F5] transition-colors cursor-pointer"
              >
                Directions Map →
              </a>
            </div>
          </div>

          {/* Right: Operational Information & Contact */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#D9D3C7] p-6 sm:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#736F66] block mb-1">
                  CONSULTING ADDRESS
                </span>
                <p className="font-serif text-2xl text-[#111212]">
                  48 Rodney Street
                  <br />
                  Liverpool, Merseyside
                  <br />
                  L1 9ED, United Kingdom
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D9D3C7] text-xs font-sans">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#736F66] block mb-1">
                    CLINIC TELEPHONE
                  </span>
                  <a href="tel:01517094800" className="text-[#111212] hover:text-[#234235] font-mono text-sm font-semibold">
                    0151 709 4800
                  </a>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#736F66] block mb-1">
                    CONFIDENTIAL INTAKE
                  </span>
                  <a href="mailto:reception@liverpoolmedicalclinic.co.uk" className="text-[#111212] hover:text-[#234235] truncate block">
                    reception@liverpoolmedical...
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D9D3C7]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#736F66] block mb-2">
                  CONSULTATION APPOINTMENT HOURS
                </span>
                <div className="space-y-1.5 text-xs text-[#403E3A] font-mono">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="text-[#111212] font-semibold">08:00 – 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday (Executive Health Screening)</span>
                    <span className="text-[#111212] font-semibold">09:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between text-[#736F66]">
                    <span>Sunday & Bank Holidays</span>
                    <span>Closed (On-Call Protocol)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D9D3C7] text-xs text-[#5C5952] font-sans">
                <span className="font-semibold text-[#111212] block mb-0.5">Parking & Access:</span>
                Designated pay-and-display bays directly fronting Rodney Street. Mount Pleasant multi-storey is 3 minutes on foot. Level ground access via private courtyard.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
