import React from "react";

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-t border-[#E2DDD3] px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <button
          onClick={onOpenBooking}
          className="flex-1 py-2.5 px-3 bg-[#234E39] text-white text-xs font-sans uppercase tracking-widest font-medium text-center truncate cursor-pointer shadow-xs"
        >
          Book Consultation
        </button>

        <a
          href="tel:01517094800"
          className="py-2.5 px-4 border border-[#DBD5C7] bg-white text-[#1E2024] text-xs font-sans uppercase tracking-wider text-center cursor-pointer shadow-xs"
        >
          Call
        </a>

        <a
          href="https://wa.me/441517094800?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation%20at%20Liverpool%20Medical%20Clinic."
          target="_blank"
          rel="noreferrer"
          className="py-2.5 px-3 border border-[#DBD5C7] bg-white text-[#234E39] text-xs font-sans uppercase tracking-wider text-center cursor-pointer font-semibold shadow-xs"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};
