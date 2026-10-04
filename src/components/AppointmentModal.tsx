import React, { useState } from "react";
import { CLINIC_SERVICES, CLINIC_PHYSICIANS } from "../data/clinicData";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialDoctorId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialDoctorId
}) => {
  const [step, setStep] = useState<number>(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceId, setServiceId] = useState(initialServiceId || CLINIC_SERVICES[0].id);
  const [doctorId, setDoctorId] = useState(initialDoctorId || "any");
  const [healthQuery, setHealthQuery] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [timeWindow, setTimeWindow] = useState("Morning (08:30 – 12:00)");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  if (!isOpen) return null;

  const selectedService = CLINIC_SERVICES.find((s) => s.id === serviceId) || CLINIC_SERVICES[0];
  const selectedDoctor = CLINIC_PHYSICIANS.find((d) => d.id === doctorId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = "LMC-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF9F5] border border-[#E2DDD3] text-[#1E2024] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="px-8 pt-8 pb-6 border-b border-[#E2DDD3] flex items-center justify-between bg-white">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#6B706C] block mb-1 font-semibold">
              48 RODNEY STREET · CONFIDENTIAL APPOINTMENT
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#111315]">
              {isSubmitted ? "Appointment Requested" : "Private Consultation Intake"}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-9 h-9 border border-[#DBD5C7] hover:border-[#234E39] flex items-center justify-center text-sm font-sans transition-colors cursor-pointer bg-white"
            aria-label="Close appointment panel"
          >
            ✕
          </button>
        </div>

        {/* Step Progress Bar in Soft Ivory */}
        {!isSubmitted && (
          <div className="px-8 pt-4 pb-2 bg-[#F5F2EA] border-b border-[#E2DDD3] flex items-center justify-between text-xs font-mono text-[#6B706C]">
            <div className="flex items-center gap-6">
              <span className={step >= 1 ? "text-[#234E39] font-bold" : ""}>
                01. DETAILS
              </span>
              <span>·</span>
              <span className={step >= 2 ? "text-[#234E39] font-bold" : ""}>
                02. CLINICAL NEED
              </span>
              <span>·</span>
              <span className={step >= 3 ? "text-[#234E39] font-bold" : ""}>
                03. SCHEDULE
              </span>
              <span>·</span>
              <span className={step >= 4 ? "text-[#234E39] font-bold" : ""}>
                04. CONFIRM
              </span>
            </div>
            <span>STEP {step}/4</span>
          </div>
        )}

        {/* Main Content Area */}
        <div className="p-8">
          {isSubmitted ? (
            /* Success Screen */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full border border-[#234E39] text-[#234E39] flex items-center justify-center font-serif text-2xl mx-auto bg-white shadow-xs">
                ✓
              </div>

              <div>
                <span className="text-xs font-mono text-[#6B706C] uppercase tracking-widest block mb-2 font-medium">
                  CONFIDENTIAL REFERENCE: {bookingRef}
                </span>
                <h4 className="font-serif text-3xl text-[#111315] mb-3">
                  Thank you, {fullName}.
                </h4>
                <p className="text-sm text-[#454A47] font-sans leading-relaxed max-w-md mx-auto">
                  Our clinical coordinator will telephone you within two operating hours to confirm your scheduled consultation time with {selectedDoctor ? selectedDoctor.name : "the relevant specialist"} for {selectedService.name}.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#E2DDD3] text-left text-xs space-y-2 max-w-md mx-auto font-sans shadow-xs">
                <div className="flex justify-between">
                  <span className="text-[#6B706C]">Consultation:</span>
                  <span className="font-semibold text-[#111315]">{selectedService.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B706C]">Selected Window:</span>
                  <span className="font-semibold text-[#111315]">{timeWindow}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B706C]">Practice Location:</span>
                  <span className="font-semibold text-[#111315]">48 Rodney Street, L1 9ED</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E2DDD3]">
                  <span className="text-[#6B706C]">Fee Guidance:</span>
                  <span className="font-mono text-[#234E39] font-bold">{selectedService.feeGuidance}</span>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-6 py-3 bg-[#234E39] text-white hover:bg-[#1A3A2B] text-xs font-sans uppercase tracking-widest cursor-pointer shadow-sm"
              >
                Return to Clinic Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1: Details */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-widest text-[#6B706C] font-mono font-medium">
                    YOUR PATIENT CONTACT DETAILS
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#111315] mb-1 font-sans">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 bg-white border border-[#DBD5C7] focus:border-[#234E39] outline-none text-sm font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#111315] mb-1 font-sans">
                        Telephone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 07700 900123"
                        className="w-full px-4 py-3 bg-white border border-[#DBD5C7] focus:border-[#234E39] outline-none text-sm font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#111315] mb-1 font-sans">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. patient@example.co.uk"
                        className="w-full px-4 py-3 bg-white border border-[#DBD5C7] focus:border-[#234E39] outline-none text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-[#6B706C] font-sans">
                    Information shared is strictly protected under General Data Protection Regulation (GDPR) and GMC medical confidentiality.
                  </div>

                  <div className="flex justify-end pt-4 border-t border-[#E2DDD3]">
                    <button
                      type="button"
                      disabled={!fullName || !phone || !email}
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-[#234E39] text-white hover:bg-[#1A3A2B] disabled:opacity-40 text-xs font-sans uppercase tracking-widest cursor-pointer shadow-xs"
                    >
                      Next: Clinical Need →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Clinical Need */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-widest text-[#6B706C] font-mono font-medium">
                    SELECT SERVICE & CONSULTANT
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#111315] mb-1 font-sans">
                      Primary Clinical Specialty *
                    </label>
                    <select
                      value={serviceId}
                      onChange={(e) => setServiceId(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#DBD5C7] focus:border-[#234E39] outline-none text-sm font-sans"
                    >
                      {CLINIC_SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.number} — {s.name} ({s.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#111315] mb-1 font-sans">
                      Preferred Consultant (Optional)
                    </label>
                    <select
                      value={doctorId}
                      onChange={(e) => setDoctorId(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#DBD5C7] focus:border-[#234E39] outline-none text-sm font-sans"
                    >
                      <option value="any">First Available Senior Consultant</option>
                      {CLINIC_PHYSICIANS.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name} — {d.specialty}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#111315] mb-1 font-sans">
                      Brief Description of Symptoms or Concern
                    </label>
                    <textarea
                      rows={3}
                      value={healthQuery}
                      onChange={(e) => setHealthQuery(e.target.value)}
                      placeholder="e.g. Ongoing palpitations and fatigue for three months, seeking comprehensive cardiovascular appraisal..."
                      className="w-full px-4 py-3 bg-white border border-[#DBD5C7] focus:border-[#234E39] outline-none text-sm font-sans"
                    />
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#E2DDD3]">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3 border border-[#DBD5C7] bg-white text-xs font-sans uppercase tracking-widest hover:border-[#111315] cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 bg-[#234E39] text-white hover:bg-[#1A3A2B] text-xs font-sans uppercase tracking-widest cursor-pointer shadow-xs"
                    >
                      Next: Preferred Schedule →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Schedule */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-widest text-[#6B706C] font-mono font-medium">
                    PREFERRED APPOINTMENT TIMING
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#111315] mb-1 font-sans">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 bg-white border border-[#DBD5C7] focus:border-[#234E39] outline-none text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#111315] mb-2 font-sans">
                      Preferred Consultation Window
                    </label>
                    <div className="space-y-2">
                      {[
                        "Morning (08:30 – 12:00)",
                        "Afternoon (12:30 – 16:00)",
                        "Late Afternoon / Evening (16:30 – 19:00)"
                      ].map((win) => (
                        <label
                          key={win}
                          className={`flex items-center gap-3 p-3 border cursor-pointer transition-colors ${
                            timeWindow === win
                              ? "bg-white border-[#234E39] shadow-xs"
                              : "border-[#E2DDD3] bg-white/60 hover:bg-white"
                          }`}
                        >
                          <input
                            type="radio"
                            name="timeWindow"
                            checked={timeWindow === win}
                            onChange={() => setTimeWindow(win)}
                            className="accent-[#234E39]"
                          />
                          <span className="text-xs font-sans font-semibold text-[#111315]">
                            {win}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-white border border-[#E2DDD3] text-[11px] text-[#6B706C] font-sans">
                    Fast-track appointments: If urgent same-day access is required, please call Rodney Street directly on 0151 709 4800.
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#E2DDD3]">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-3 border border-[#DBD5C7] bg-white text-xs font-sans uppercase tracking-widest hover:border-[#111315] cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="px-6 py-3 bg-[#234E39] text-white hover:bg-[#1A3A2B] text-xs font-sans uppercase tracking-widest cursor-pointer shadow-xs"
                    >
                      Review & Confirm →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Confirm */}
              {step === 4 && (
                <div className="space-y-5">
                  <div className="text-xs uppercase tracking-widest text-[#6B706C] font-mono font-medium">
                    SUMMARY OF CONSULTATION REQUEST
                  </div>

                  <div className="p-5 bg-white border border-[#E2DDD3] space-y-3 text-xs font-sans shadow-xs">
                    <div className="flex justify-between border-b border-[#E2DDD3] pb-2">
                      <span className="text-[#6B706C]">Patient Name:</span>
                      <span className="font-bold text-[#111315]">{fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E2DDD3] pb-2">
                      <span className="text-[#6B706C]">Service Requested:</span>
                      <span className="font-bold text-[#111315]">{selectedService.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E2DDD3] pb-2">
                      <span className="text-[#6B706C]">Consultant:</span>
                      <span className="font-bold text-[#111315]">
                        {selectedDoctor ? selectedDoctor.name : "Next Available Senior Consultant"}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-[#E2DDD3] pb-2">
                      <span className="text-[#6B706C]">Timing Window:</span>
                      <span className="font-bold text-[#111315]">
                        {preferredDate ? `${preferredDate} · ` : ""}{timeWindow}
                      </span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-[#6B706C]">Standard Fee Guidance:</span>
                      <span className="font-mono font-bold text-[#234E39]">
                        {selectedService.feeGuidance}
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#6B706C] font-sans leading-relaxed">
                    By submitting, our practice reception will contact you to confirm the appointment slot. Payment is taken following consultation or invoiced directly to approved private insurers. 24 hours cancellation notice is appreciated.
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#E2DDD3]">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-5 py-3 border border-[#DBD5C7] bg-white text-xs font-sans uppercase tracking-widest hover:border-[#111315] cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#234E39] text-white hover:bg-[#1A3A2B] text-xs font-sans uppercase tracking-[0.15em] font-semibold cursor-pointer shadow-md"
                    >
                      Confirm Booking Request
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
