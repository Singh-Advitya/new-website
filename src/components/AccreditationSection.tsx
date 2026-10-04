import React from "react";

export const AccreditationSection: React.FC = () => {
  const bodies = [
    {
      acronym: "CQC",
      name: "Care Quality Commission",
      role: "Independent Regulator of Health and Social Care in England",
      status: "Audited & Registered Provider"
    },
    {
      acronym: "GMC",
      name: "General Medical Council",
      role: "Official Medical Register of the United Kingdom",
      status: "100% Specialist Register Consultants"
    },
    {
      acronym: "IDF",
      name: "Independent Doctors Federation",
      role: "Promoting Excellence in Independent Medical Practice",
      status: "Member Practice"
    },
    {
      acronym: "RCP",
      name: "Royal Colleges of Physicians & Surgeons",
      role: "Fellowship Standards in Internal Medicine & Surgery",
      status: "Consultant Fellowships"
    }
  ];

  return (
    <section className="w-full bg-[#F5F2EA] py-16 sm:py-20 px-6 sm:px-8 lg:px-12 border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-[11px] font-mono text-[#6B706C] uppercase tracking-widest mb-8 text-center sm:text-left font-medium">
          11 / REGULATORY FRAMEWORK & PROFESSIONAL ASSOCIATIONS
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bodies.map((b) => (
            <div key={b.acronym} className="p-6 bg-white border border-[#E2DDD3] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-normal text-[#111315]">
                    {b.acronym}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#234E39] font-bold bg-[#EDF3EF] px-2 py-0.5">
                    {b.status}
                  </span>
                </div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#111315] mb-1">
                  {b.name}
                </h4>
                <p className="text-xs text-[#525754] font-sans leading-relaxed">
                  {b.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
