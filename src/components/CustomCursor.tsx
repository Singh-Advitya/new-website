import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest("button, a, input, select, textarea, [role='button']");
      const serviceItem = target.closest("#services [class*='cursor-pointer']");
      const visualArea = target.closest("[class*='aspect-']");

      if (serviceItem) {
        setCursorText("EXPLORE");
        setIsPointer(true);
      } else if (visualArea) {
        setCursorText("VIEW");
        setIsPointer(true);
      } else if (clickable?.textContent?.toLowerCase().includes("book") || clickable?.textContent?.toLowerCase().includes("consult")) {
        setCursorText("BOOK");
        setIsPointer(true);
      } else if (clickable) {
        setCursorText("");
        setIsPointer(true);
      } else {
        setCursorText("");
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="hidden lg:block fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)"
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-200 ${
          cursorText
            ? "px-3 py-1 bg-[#234E39] text-white border border-[#3C6E54] shadow-md text-[9px] font-mono tracking-widest uppercase scale-110"
            : isPointer
            ? "w-8 h-8 bg-[#234E39]/15 border border-[#234E39] backdrop-blur-[1px]"
            : "w-3 h-3 bg-[#234E39]/60 border border-white"
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
};
