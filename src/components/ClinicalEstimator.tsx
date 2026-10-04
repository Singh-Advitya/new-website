import React, { useState } from "react";
import { CLINIC_SERVICES, CLINIC_PHYSICIANS, ServiceItem } from "../data/clinicData";

interface ClinicalEstimatorProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: (serviceId: string, doctorId?: string) => void;
}

export const ClinicalEstimator: React.FC<ClinicalEstimatorProps> = ({
  onSelectService,
  onOpenBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("cardio");

  const categories = [
    {
      id: "cardio",
      label: "Heart & Circulation",
      symptomQuery: "Palpitations, chest tightness, high blood pressure, or family history of cardiac disease",
      serviceId: "cardiovascular",
      doctorId: "dr-tariq-rahman",
      duration: "60 Minutes",
      fee: "From £320",
      sameDayTests: ["12-Lead Resting ECG", "Echocardiogram", "Blood Pressure Profiling", "ApoB & Lipid Subfractions"],
      physicianName: "Dr. Tariq Rahman",
      physicianTitle: "Consultant Cardiologist & Hemodynamic Lead"
    },
    {
      id: "hormonal",
      label: "Women's Health & Hormones",
      symptomQuery: "Perimenopause, hot flushes, mood shifts, brain fog, sleep disturbance, HRT review",
      serviceId: "womens-health",
      doctorId: "dr-eleanor-hughes",
      duration: "45 Minutes",
      fee: "From £220",
      sameDayTests: ["Hormonal Cascade Bio-assay", "Body-Identical HRT Titration", "Thyroid Profile", "Cervical Cytology"],
      physicianName: "Dr. Eleanor Hughes",
      physicianTitle: "Lead for Women's Health & BMS Specialist"
    },
    {
      id: "screening",
      label: "Executive Health Screening",
      symptomQuery: "Complete physiological audit, multi-organ evaluation, preventative longevity roadmap",
      serviceId: "advanced-screening",
      doctorId: "dr-alistair-vance",
      duration: "90–120 Minutes",
      fee: "From £550",
      sameDayTests: ["60+ Blood Biomarkers", "Abdominal Ultrasound", "Resting Spirometry", "Bound Written Physician Dossier"],
      physicianName: "Dr. Alistair Vance",
      physicianTitle: "Clinical Director & Senior Consultant Physician"
    },
    {
      id: "joints",
      label: "Joint & Spine Mobility",
      symptomQuery: "Knee, hip, shoulder pain, spinal stiffness, sports injury, mobility decline",
      serviceId: "musculoskeletal",
      doctorId: "mr-marcus-thornton",
      duration: "45 Minutes",
      fee: "From £240",
      sameDayTests: ["Point-of-Care Diagnostic Ultrasound", "Targeted Joint Injection", "48hr Fast-Track MRI Referral"],
      physicianName: "Mr. Marcus Thornton",
      physicianTitle: "Consultant Orthopaedic & MSK Specialist"
    },
    {
      id: "general",
      label: "General Consultant Medicine",
      symptomQuery: "Persistent fatigue, unexplained symptoms, second opinions, complex multi-system complaints",
      serviceId: "general-medicine",
      doctorId: "dr-alistair-vance",
      duration: "45–60 Minutes",
      fee: "From £195",
      sameDayTests: ["Comprehensive Physical Examination", "On-site Phlebotomy", "Same-Day Pharmacy Liaison"],
      physicianName: "Dr. Alistair Vance",
      physicianTitle: "Senior Consultant Physician"
    }
  ];

  const current = categories.find((c) => c.id === selectedCategory) || categories[0];
  const matchedService = CLINIC_SERVICES.find((s) => s.id === current.serviceId) || CLINIC_SERVICES[0];

  return (
    <section className="w-full bg-[#FAF9F5] py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-[#E2DDD3]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-mono text-[#6B706C] uppercase tracking-widest block mb-2 font-medium">
              CLINICAL TRIAGE & TRANSPARENCY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111315] font-light">
              Find Your Consultation Pathway
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest font-sans text-[#6B706C] sm:text-right font-medium">
            Transparent fee guidance · Direct consultant assignment
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#E2DDD3]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 text-xs font-sans uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#234E39] text-white shadow-xs font-semibold"
                  : "bg-white text-[#454A47] hover:text-[#111315] hover:bg-[#F5F2EA] border border-[#DBD5C7]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Triage Match Plate in Pure Light Stone */}
        <div className="bg-white border border-[#E2DDD3] p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#234E39] font-bold block mb-2">
                COMMON PRESENTATIONS
              </span>
              <p className="text-base sm:text-lg font-serif italic text-[#111315]">
                "{current.symptomQuery}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#E2DDD3] space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#6B706C] block font-medium">
                SAME-DAY ON-SITE INVESTIGATIONS
              </span>
              <div className="flex flex-wrap gap-2">
                {current.sameDayTests.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-[#FAF8F5] border border-[#E2DDD3] text-[#363A38] font-sans"
                  >
                    ✓ {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DDD3] flex items-center gap-4 text-xs font-sans text-[#525754]">
              <div>
                <span className="text-[#6B706C] block text-[10px] uppercase font-mono font-medium">LEAD CONSULTANT</span>
                <span className="font-serif text-sm font-bold text-[#111315]">{current.physicianName}</span>
              </div>
              <span className="text-[#D5CDC0]">|</span>
              <div>
                <span className="text-[#6B706C] block text-[10px] uppercase font-mono font-medium">CONSULTATION TIME</span>
                <span className="font-semibold text-[#111315]">{current.duration}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E2DDD3] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#6B706C] block mb-1 font-medium">
                CONSULTATION FEE
              </span>
              <div className="font-serif text-3xl sm:text-4xl text-[#234E39] font-light mb-1">
                {current.fee}
              </div>
              <span className="text-xs text-[#6B706C] font-sans block">
                Itemised invoice provided for insurance claim reimbursement.
              </span>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#E2DDD3]">
              <button
                onClick={() => onOpenBooking(current.serviceId, current.doctorId)}
                className="w-full py-3.5 bg-[#234E39] text-white hover:bg-[#1A3A2B] text-xs font-sans uppercase tracking-[0.15em] font-medium transition-colors text-center cursor-pointer shadow-sm"
              >
                Schedule With {current.physicianName.split(" ")[0]} →
              </button>
              <button
                onClick={() => onSelectService(matchedService)}
                className="w-full py-2.5 border border-[#D5CDC0] bg-white text-[#111315] hover:bg-[#F5F2EA] text-xs font-sans uppercase tracking-widest text-center cursor-pointer font-medium"
              >
                Inspect Clinical Scope
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
