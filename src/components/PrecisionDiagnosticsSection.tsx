import React from "react";
import { EditorialVisual } from "./EditorialVisual";

export const PrecisionDiagnosticsSection: React.FC = () => {
  const diagnosticCapabilities = [
    {
      label: "ELECTROCARDIOGRAPHY",
      title: "12-Lead Rest & Ambulatory ECG",
      detail: "Computerised rhythm analysis detecting subclinical conduction anomalies, silent ischemia, and autonomic heart rate variability on-site."
    },
    {
      label: "ECHOCARDIOGRAPHY",
      title: "Point-of-Care Transthoracic Ultrasound",
      detail: "Real-time hemodynamic evaluation of valvular structure, ejection dynamics, and pericardial compliance directly inside the Rodney Street suite."
    },
    {
      label: "PATHOLOGY & BIOCHEMISTRY",
      title: "Direct Phlebotomy & 60+ Biomarkers",
      detail: "Direct courier processing with our Liverpool accredited clinical laboratory. Advanced lipid subfractions, ApoB, hormonal assays within 24–48 hours."
    },
    {
      label: "VASCULAR BIOMETRICS",
      title: "Arterial Stiffness & Wave Velocity",
      detail: "Non-invasive aortic pulse wave velocity measurement calculating biological vascular age and endothelial compliance."
    }
  ];

  return (
    <section className="w-full bg-[#F6F9F7] text-[#1E2024] py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 border-b border-[#D5E0DA] relative overflow-hidden bg-subtle-light-grid">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Scale Contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#234E39]" />
              <span className="text-[11px] font-mono text-[#4F6358] uppercase tracking-[0.25em] font-semibold">
                07 / DIAGNOSTIC RIGOR
              </span>
            </div>

            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#111315] leading-[0.95] tracking-[-0.03em]">
              PRECISION
              <br />
              <span className="italic font-normal text-[#234E39]">MATTERS.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-[#D5E0DA] lg:pl-8">
            <p className="text-sm sm:text-base text-[#4F5451] font-sans font-light leading-relaxed">
              Clinical acumen must be validated by objective physiological measurements. We pair unhurried consultations with high-resolution diagnostic equipment on-site, providing immediate clarity with zero waiting list delays.
            </p>
          </div>
        </div>

        {/* Center Technical Visualization Window in Crisp Light Studio */}
        <div className="w-full mb-16 border border-[#CFDBD5] overflow-hidden shadow-sm bg-white">
          <EditorialVisual
            type="precision-diagnostics"
            className="w-full h-full"
            caption="Direct In-House 12-Lead Diagnostic Telemetry · Rodney Street Suite"
          />
        </div>

        {/* Technical Grid of Real Clinical Facilities in Crisp Light Porcelain */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#D5E0DA]">
          {diagnosticCapabilities.map((cap) => (
            <div key={cap.label} className="bg-white p-6 border border-[#D5E0DA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#234E39] uppercase tracking-widest font-semibold block mb-2">
                  {cap.label}
                </span>
                <h3 className="font-serif text-xl text-[#111315] mb-2.5">
                  {cap.title}
                </h3>
                <p className="text-xs text-[#525754] font-sans leading-relaxed">
                  {cap.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
