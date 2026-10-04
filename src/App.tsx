/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { StatementSection } from "./components/StatementSection";
import { ClinicArchitectureSection } from "./components/ClinicArchitectureSection";
import { ServiceDirectorySection } from "./components/ServiceDirectorySection";
import { ClinicalEstimator } from "./components/ClinicalEstimator";
import { CareJourneySection } from "./components/CareJourneySection";
import { HumanCareSection } from "./components/HumanCareSection";
import { PrecisionDiagnosticsSection } from "./components/PrecisionDiagnosticsSection";
import { ClinicalStandardsSection } from "./components/ClinicalStandardsSection";
import { PhysiciansSection } from "./components/PhysiciansSection";
import { PatientStoriesSection } from "./components/PatientStoriesSection";
import { AccreditationSection } from "./components/AccreditationSection";
import { LocationSection } from "./components/LocationSection";
import { AppointmentSection } from "./components/AppointmentSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { CustomCursor } from "./components/CustomCursor";
import { AppointmentModal } from "./components/AppointmentModal";
import { DoctorModal } from "./components/DoctorModal";
import { ServiceModal } from "./components/ServiceModal";
import { CLINIC_SERVICES, DoctorProfile, ServiceItem } from "./data/clinicData";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceIdForBooking, setSelectedServiceIdForBooking] = useState<string | undefined>();
  const [selectedDoctorIdForBooking, setSelectedDoctorIdForBooking] = useState<string | undefined>();

  const [inspectingService, setInspectingService] = useState<ServiceItem | null>(null);
  const [inspectingDoctor, setInspectingDoctor] = useState<DoctorProfile | null>(null);

  const handleOpenBooking = (serviceId?: string, doctorId?: string) => {
    setSelectedServiceIdForBooking(serviceId);
    setSelectedDoctorIdForBooking(doctorId);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithDoctor = (doctorId: string) => {
    setSelectedDoctorIdForBooking(doctorId);
    setSelectedServiceIdForBooking(undefined);
    setIsBookingOpen(true);
  };

  const handleSelectServiceById = (serviceId: string) => {
    const s = CLINIC_SERVICES.find((item) => item.id === serviceId);
    if (s) {
      setInspectingService(s);
    }
  };

  const handleExploreSpecialtyFromHero = (serviceId: string) => {
    const s = CLINIC_SERVICES.find((item) => item.id === serviceId);
    if (s) {
      setInspectingService(s);
    } else {
      const el = document.getElementById("services");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-[#1E2024] overflow-x-hidden selection:bg-[#234E39] selection:text-white">
      {/* Subtle Desktop Custom Cursor */}
      <CustomCursor />

      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onSelectService={(service) => setInspectingService(service)}
      />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <HeroSection 
          onOpenBooking={() => handleOpenBooking()} 
          onExploreSpecialty={handleExploreSpecialtyFromHero}
        />

        {/* Section 02 — The Statement */}
        <StatementSection />

        {/* Section 03 — The Clinic (Architecture & Space) */}
        <ClinicArchitectureSection />

        {/* Section 04 — Interactive Medical Service Directory (NO CARDS) */}
        <ServiceDirectorySection
          onSelectService={(service) => setInspectingService(service)}
          onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* Interactive Clinical Triage & Fee Transparency Estimator */}
        <ClinicalEstimator
          onSelectService={(service) => setInspectingService(service)}
          onOpenBooking={(serviceId, doctorId) => handleOpenBooking(serviceId, doctorId)}
        />

        {/* Section 05 — The Care Journey */}
        <CareJourneySection />

        {/* Section 06 — Human Care */}
        <HumanCareSection />

        {/* Section 07 — Precision & Diagnostics (The Lone Strategic Dark Section) */}
        <PrecisionDiagnosticsSection />

        {/* Section 08 — Medical Standards & Verified Governance */}
        <ClinicalStandardsSection />

        {/* Section 09 — Senior Physicians Vertical Gallery */}
        <PhysiciansSection
          onSelectDoctor={(doctor) => setInspectingDoctor(doctor)}
          onOpenBookingWithDoctor={(doctorId) => handleOpenBookingWithDoctor(doctorId)}
        />

        {/* Section 10 — Patient Stories (Single at a time) */}
        <PatientStoriesSection />

        {/* Section 11 — Trust & Accreditation */}
        <AccreditationSection />

        {/* Section 12 — Rodney Street Location */}
        <LocationSection />

        {/* Section 13 — Conversion Appointment Flow */}
        <AppointmentSection onOpenBooking={() => handleOpenBooking()} />

        {/* Practice FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Editorial Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onSelectServiceById={handleSelectServiceById}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Appointment Flow Modal Panel */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={selectedServiceIdForBooking}
        initialDoctorId={selectedDoctorIdForBooking}
      />

      {/* Doctor Dossier Modal */}
      <DoctorModal
        doctor={inspectingDoctor}
        onClose={() => setInspectingDoctor(null)}
        onBookWithDoctor={(doctorId) => handleOpenBookingWithDoctor(doctorId)}
      />

      {/* Service Scope Inspector Modal */}
      <ServiceModal
        service={inspectingService}
        onClose={() => setInspectingService(null)}
        onBookService={(serviceId) => handleOpenBooking(serviceId)}
      />
    </div>
  );
}
