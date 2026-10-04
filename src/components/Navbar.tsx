import React, { useState, useEffect } from "react";
import { CLINIC_SERVICES, ServiceItem } from "../data/clinicData";

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onSelectService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<ServiceItem>(CLINIC_SERVICES[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md py-4 border-b border-[#D9D3C7]/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Single Text Element Brand Wordmark */}
          <a
            href="#"
            className="text-lg lg:text-xl font-serif font-medium tracking-tight text-[#111212] hover:text-[#234235] transition-colors"
          >
            Liverpool Medical Clinic
          </a>

          {/* Zone 2: 4-6 Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-sans font-medium text-[#5C5952]">
            <a
              href="#philosophy"
              className="hover:text-[#111212] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111212] hover:after:w-full after:transition-all"
            >
              Philosophy
            </a>
            <a
              href="#the-clinic"
              className="hover:text-[#111212] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111212] hover:after:w-full after:transition-all"
            >
              The Clinic
            </a>
            <button
              onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
              className="flex items-center gap-1.5 hover:text-[#111212] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111212] hover:after:w-full after:transition-all cursor-pointer"
            >
              <span>Services</span>
              <span className="text-[10px] text-[#234235] font-mono font-semibold">
                [{CLINIC_SERVICES.length}]
              </span>
            </button>
            <a
              href="#care-journey"
              className="hover:text-[#111212] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111212] hover:after:w-full after:transition-all"
            >
              Care Journey
            </a>
            <a
              href="#physicians"
              className="hover:text-[#111212] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111212] hover:after:w-full after:transition-all"
            >
              Physicians
            </a>
            <a
              href="#location"
              className="hover:text-[#111212] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111212] hover:after:w-full after:transition-all"
            >
              Location
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#234E39] text-white hover:bg-[#1A3A2B] text-xs font-sans uppercase tracking-widest font-medium transition-colors cursor-pointer shadow-sm"
            >
              <span>Book Consultation</span>
              <span className="ml-2 font-serif text-sm">→</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#111212] hover:text-[#234235] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <div className="w-5 flex flex-col gap-1.5 items-end">
                <span className={`h-[1.5px] bg-current transition-all duration-300 ${mobileMenuOpen ? "w-5 rotate-45 translate-y-2" : "w-5"}`} />
                <span className={`h-[1.5px] bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "w-3"}`} />
                <span className={`h-[1.5px] bg-current transition-all duration-300 ${mobileMenuOpen ? "w-5 -rotate-45 -translate-y-2" : "w-4"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Editorial Mega Menu for Services (Desktop) */}
        {servicesMenuOpen && (
          <div className="hidden lg:block absolute top-full left-0 right-0 bg-[#FAF8F5] border-b border-[#D9D3C7] shadow-xl transition-all">
            <div className="max-w-7xl mx-auto px-12 py-10 grid grid-cols-12 gap-10">
              {/* Left: Category Overview */}
              <div className="col-span-3 border-r border-[#D9D3C7] pr-8">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#736F66] font-sans block mb-2">
                  CLINICAL DIRECTORY
                </span>
                <h4 className="font-serif text-2xl text-[#111212] mb-4">
                  Outpatient Specialties
                </h4>
                <p className="text-xs text-[#5C5952] leading-relaxed mb-6 font-sans">
                  Direct access to senior physicians, non-invasive diagnostic investigations, and continuity of unhurried care.
                </p>
                <div className="pt-4 border-t border-[#D9D3C7] text-[11px] text-[#234235] font-mono font-medium">
                  GMC Specialist Governance
                </div>
              </div>

              {/* Center: Service Links */}
              <div className="col-span-5 grid grid-cols-1 gap-2">
                {CLINIC_SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onMouseEnter={() => setHoveredService(service)}
                    onClick={() => {
                      onSelectService(service);
                      setServicesMenuOpen(false);
                    }}
                    className={`text-left py-2 px-3 transition-colors flex items-center justify-between group cursor-pointer ${
                      hoveredService.id === service.id
                        ? "bg-[#EAE4D7] text-[#111212]"
                        : "hover:bg-[#F5F2EB] text-[#403E3A]"
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-[10px] font-mono text-[#736F66]">
                        {service.number}
                      </span>
                      <span className="text-sm font-serif group-hover:translate-x-1 transition-transform">
                        {service.name}
                      </span>
                    </div>
                    <span className="text-xs text-[#234235] opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      Explore →
                    </span>
                  </button>
                ))}
              </div>

              {/* Right: Dynamic Preview */}
              <div className="col-span-4 bg-[#FDFCF9] p-6 border border-[#D9D3C7] flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#736F66] mb-3">
                    <span>INDEX {hoveredService.number}</span>
                    <span className="text-[#111212] font-semibold">{hoveredService.duration}</span>
                  </div>
                  <h5 className="font-serif text-lg text-[#111212] mb-2">
                    {hoveredService.name}
                  </h5>
                  <p className="text-xs text-[#5C5952] font-sans leading-relaxed mb-4">
                    {hoveredService.lead}
                  </p>
                  <div className="text-[11px] text-[#234235] font-mono font-semibold">
                    {hoveredService.feeGuidance}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D9D3C7] flex items-center justify-between">
                  <button
                    onClick={() => {
                      onSelectService(hoveredService);
                      setServicesMenuOpen(false);
                    }}
                    className="text-xs uppercase tracking-widest text-[#111212] hover:text-[#234235] font-medium cursor-pointer"
                  >
                    View Clinical Scope →
                  </button>
                  <button
                    onClick={() => {
                      onOpenBooking(hoveredService.id);
                      setServicesMenuOpen(false);
                    }}
                    className="text-xs uppercase tracking-widest px-3 py-1.5 bg-[#111212] text-[#FAF8F5] hover:bg-[#234235] cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] pt-24 px-8 pb-12 flex flex-col justify-between lg:hidden overflow-y-auto">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#736F66] font-sans mb-6">
              NAVIGATION
            </div>
            <nav className="flex flex-col gap-5 text-xl font-serif text-[#111212]">
              <a
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#234235]"
              >
                Philosophy
              </a>
              <a
                href="#the-clinic"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#234235]"
              >
                The Clinic & Architecture
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#234235]"
              >
                Clinical Specialties ({CLINIC_SERVICES.length})
              </a>
              <a
                href="#care-journey"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#234235]"
              >
                The Care Journey
              </a>
              <a
                href="#physicians"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#234235]"
              >
                Consultant Physicians
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#234235]"
              >
                Rodney Street Location
              </a>
            </nav>
          </div>

          <div className="pt-8 border-t border-[#D9D3C7]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 bg-[#111212] text-[#FAF8F5] text-xs font-sans uppercase tracking-widest font-medium mb-3 shadow-md"
            >
              Book an Appointment
            </button>
            <div className="text-center text-xs text-[#736F66] font-sans">
              48 Rodney Street, Liverpool · 0151 709 4800
            </div>
          </div>
        </div>
      )}
    </>
  );
};
