import React from "react";

interface EditorialVisualProps {
  type: 
    | "hero-clinic" 
    | "clinic-architecture" 
    | "human-dialogue" 
    | "precision-diagnostics" 
    | "doctor-vance" 
    | "doctor-hughes" 
    | "doctor-thornton" 
    | "doctor-rahman"
    | "service-cardio"
    | "service-general"
    | "service-screening"
    | "service-womens"
    | "service-mens"
    | "service-metabolic"
    | "service-msk";
  className?: string;
  caption?: string;
  badge?: string;
}

export const EditorialVisual: React.FC<EditorialVisualProps> = ({
  type,
  className = "",
  caption,
  badge
}) => {
  return (
    <div className={`relative overflow-hidden group select-none ${className}`}>
      {renderVisualContent(type)}

      {/* Subtle delicate grain / hairline border */}
      <div className="absolute inset-0 pointer-events-none border border-[#1A1C1B]/8" />

      {/* Optional Metadata Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/95 backdrop-blur-md border border-[#E2DDD3] text-[10px] uppercase tracking-widest text-[#2D4539] font-sans font-semibold shadow-sm">
          {badge}
        </div>
      )}

      {/* Optional Caption */}
      {caption && (
        <div className="absolute bottom-4 left-4 right-4 z-10 text-xs text-[#3C3F3D] font-serif italic bg-white/90 backdrop-blur-sm px-3.5 py-2 border border-[#E2DDD3] shadow-sm">
          {caption}
        </div>
      )}
    </div>
  );
};

function renderVisualContent(type: EditorialVisualProps["type"]) {
  switch (type) {
    case "hero-clinic":
      return (
        <div className="w-full h-full min-h-[580px] lg:min-h-[700px] relative bg-[#FAF9F5] flex items-center justify-center overflow-hidden">
          {/* Luminous Georgian Architectural Consultation Sanctuary */}
          <svg className="w-full h-full absolute inset-0 object-cover" viewBox="0 0 1600 950" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lightLimestoneWall" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#F9F7F2" />
                <stop offset="100%" stopColor="#EFECE3" />
              </linearGradient>
              <linearGradient id="pureSunStream" x1="0%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="40%" stopColor="#FCFBF7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#F5F2EA" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="lightFloorStone" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ECE7DC" />
                <stop offset="100%" stopColor="#E2DDD1" />
              </linearGradient>
              <linearGradient id="lightOakDesk" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D9CBB7" />
                <stop offset="50%" stopColor="#E5D9C7" />
                <stop offset="100%" stopColor="#CEBDA5" />
              </linearGradient>
            </defs>

            {/* Architectural Wall Plane */}
            <rect width="1600" height="950" fill="url(#lightLimestoneWall)" />

            {/* Ceiling Cornicing Detail */}
            <rect x="0" y="0" width="1600" height="65" fill="#FFFFFF" />
            <line x1="0" y1="65" x2="1600" y2="65" stroke="#E2DDD1" strokeWidth="1" />
            <line x1="0" y1="72" x2="1600" y2="72" stroke="#E2DDD1" strokeWidth="2" />
            <line x1="0" y1="84" x2="1600" y2="84" stroke="#E2DDD1" strokeWidth="1" />

            {/* Grand Georgian Sash Window Framing */}
            <rect x="880" y="100" width="580" height="660" rx="4" fill="#FFFFFF" stroke="#DBD5C7" strokeWidth="3" />
            <rect x="900" y="120" width="540" height="620" fill="url(#pureSunStream)" />

            {/* Sash Window Panes */}
            <line x1="1080" y1="120" x2="1080" y2="740" stroke="#DBD5C7" strokeWidth="2" />
            <line x1="1260" y1="120" x2="1260" y2="740" stroke="#DBD5C7" strokeWidth="2" />
            <line x1="900" y1="275" x2="1440" y2="275" stroke="#DBD5C7" strokeWidth="2" />
            <line x1="900" y1="430" x2="1440" y2="430" stroke="#DBD5C7" strokeWidth="3" />
            <line x1="900" y1="585" x2="1440" y2="585" stroke="#DBD5C7" strokeWidth="2" />

            {/* Honed Portland Stone Floor Plane */}
            <path d="M 0 740 L 1600 740 L 1600 950 L 0 950 Z" fill="url(#lightFloorStone)" />
            <line x1="0" y1="740" x2="1600" y2="740" stroke="#D3CCC0" strokeWidth="1.5" />
            
            {/* Soft Shadow Cast from Windows */}
            <polygon points="900,740 1440,740 1600,950 720,950" fill="#DDD7CB" fillOpacity="0.55" />

            {/* Natural Light Oak Consultation Table */}
            <rect x="460" y="660" width="620" height="230" rx="6" fill="url(#lightOakDesk)" stroke="#C7B8A0" strokeWidth="1.5" />
            <rect x="450" y="650" width="640" height="20" rx="3" fill="#FAF8F5" stroke="#DBD5C7" strokeWidth="1" />
            
            {/* Minimalist Ceramic Vessel & Sage Botanical Branch */}
            <ellipse cx="530" cy="648" rx="14" ry="4" fill="#DBD5C7" />
            <path d="M 522 648 C 520 625 515 605 528 580 C 532 570 540 560 538 540" stroke="#365847" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="538" cy="540" r="5" fill="#4B735F" />
            <circle cx="528" cy="580" r="4" fill="#4B735F" />
            <circle cx="542" cy="595" r="4.5" fill="#4B735F" />
            <path d="M 520 648 L 540 648 L 536 620 L 524 620 Z" fill="#FFFFFF" stroke="#DBD5C7" strokeWidth="1" />

            {/* Note Pad & Pen */}
            <rect x="760" y="640" width="130" height="90" rx="2" fill="#FFFFFF" stroke="#E2DDD1" strokeWidth="1" transform="rotate(-3 760 640)" />
            <line x1="775" y1="655" x2="865" y2="650" stroke="#E2DDD1" strokeWidth="1" />
            <line x1="775" y1="668" x2="855" y2="663" stroke="#E2DDD1" strokeWidth="1" />
            <line x1="880" y1="635" x2="895" y2="720" stroke="#3C3F3D" strokeWidth="2.5" strokeLinecap="round" />

            {/* Ambient Warm Sunlight Circle */}
            <circle cx="1170" cy="420" r="340" fill="#FFFDF8" fillOpacity="0.5" />
          </svg>

          {/* Gentle Light Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/95 via-[#FAF9F5]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-[#FAF9F5]/30 pointer-events-none" />

          {/* Quiet Monogram Stamp */}
          <div className="absolute top-10 right-10 text-right hidden lg:block select-none opacity-80">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#2D4539] font-mono font-semibold block">
              48 RODNEY STREET
            </span>
            <span className="text-xs text-[#6B6E6B] font-serif italic mt-0.5 block">
              Liverpool Medical Quarter · Est. 2012
            </span>
          </div>
        </div>
      );

    case "clinic-architecture":
      return (
        <div className="w-full h-full min-h-[460px] bg-[#FAF8F5] relative flex items-center justify-center p-8 overflow-hidden">
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 800 1000" fill="none" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="lightWallArch" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#F9F8F5" />
                <stop offset="100%" stopColor="#EFECE5" />
              </linearGradient>
            </defs>
            <rect width="800" height="1000" fill="url(#lightWallArch)" />

            {/* Georgian Archway in Soft Porcelain */}
            <rect x="60" y="60" width="680" height="880" stroke="#E2DDD3" strokeWidth="1.5" fill="none" />
            <rect x="100" y="100" width="600" height="800" stroke="#ECE7DE" strokeWidth="1" fill="none" />

            {/* Classical Arch */}
            <path d="M 220 900 L 220 420 C 220 300 300 220 400 220 C 500 220 580 300 580 420 L 580 900 Z" 
                  fill="#FFFFFF" stroke="#DBD5C7" strokeWidth="2" />
            
            {/* Soft Ambient Depth */}
            <path d="M 230 420 C 230 310 305 235 400 235 C 495 235 570 310 570 420 L 570 900 L 230 900 Z" 
                  fill="#F5F2EA" fillOpacity="0.6" />

            {/* Natural Oak Acoustic Slats */}
            {Array.from({ length: 16 }).map((_, i) => (
              <line 
                key={i} 
                x1={260 + i * 18} 
                y1="400" 
                x2={260 + i * 18} 
                y2="660" 
                stroke="#D9CBB7" 
                strokeWidth="4" 
              />
            ))}

            {/* Examination Suite Couch */}
            <rect x="290" y="670" width="220" height="12" rx="4" fill="#CEBDA5" />
            <line x1="330" y1="682" x2="330" y2="760" stroke="#B8A790" strokeWidth="2.5" />
            <line x1="470" y1="682" x2="470" y2="760" stroke="#B8A790" strokeWidth="2.5" />

            {/* Typographic Label */}
            <text x="400" y="830" textAnchor="middle" fill="#6B6E6B" fontFamily="Plus Jakarta Sans" fontSize="11" letterSpacing="0.25em">
              SUITE 02 · ACOUSTIC SANCTUARY
            </text>
          </svg>
        </div>
      );

    case "human-dialogue":
      return (
        <div className="w-full h-full min-h-[460px] bg-[#FAF8F5] relative flex items-center justify-center p-8 overflow-hidden">
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 1200 700" fill="none" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="pureDialogueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F5F2EA" />
              </linearGradient>
            </defs>
            <rect width="1200" height="700" fill="url(#pureDialogueGrad)" />

            {/* Two Consultation Armchairs in Light Sage and Soft Stone */}
            <circle cx="430" cy="330" r="18" fill="#365847" />
            <path d="M 370 470 C 370 380 410 360 460 360 C 485 360 510 380 510 470 Z" fill="#EAE4D7" stroke="#DBD5C7" strokeWidth="2" />
            
            <circle cx="770" cy="330" r="18" fill="#8C7A65" />
            <path d="M 690 470 C 690 380 720 360 770 360 C 815 360 830 380 830 470 Z" fill="#EAE4D7" stroke="#DBD5C7" strokeWidth="2" />

            {/* Connecting Dialogue Arc */}
            <path d="M 470 370 Q 600 320 730 370" stroke="#365847" strokeWidth="2" strokeDasharray="5 7" fill="none" />

            {/* Consultation Table */}
            <ellipse cx="600" cy="480" rx="90" ry="24" fill="#ECE7DE" stroke="#D3CCC0" strokeWidth="1.5" />
            <rect x="585" y="470" width="30" height="10" rx="2" fill="#FFFFFF" />

            <text x="600" y="560" textAnchor="middle" fill="#5C5F5D" fontFamily="Plus Jakarta Sans" fontSize="12" letterSpacing="0.2em">
              UNHURRIED CONSULTANT ENCOUNTER · 45 MINUTES
            </text>
          </svg>
        </div>
      );

    case "precision-diagnostics":
      return (
        /* Pristine High-Tech Modern Clinical Suite in Light Shades */
        <div className="w-full h-full min-h-[460px] bg-[#F7FAF8] relative flex items-center justify-center p-8 overflow-hidden">
          <svg className="w-full h-full absolute inset-0 opacity-95" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="pureConsoleBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F0F5F2" />
              </linearGradient>
              <linearGradient id="crispGreenPulse" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4B735F" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#234E39" stopOpacity="1" />
                <stop offset="100%" stopColor="#4B735F" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <rect width="1000" height="600" fill="url(#pureConsoleBg)" />

            {/* Technical Calibration Grid in Soft Silver */}
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="600" stroke="#DCE5E0" strokeWidth="1" />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} stroke="#DCE5E0" strokeWidth="1" />
            ))}

            {/* Diagnostic Monitor Console in Pristine White with Silver Bezel */}
            <rect x="180" y="80" width="640" height="420" rx="8" stroke="#CFDBD5" strokeWidth="2" fill="#FFFFFF" filter="drop-shadow(0 4px 16px rgba(45,69,57,0.06))" />
            
            {/* Real 12-Lead ECG Waveform Precision Vector */}
            <path 
              d="M 210 290 L 300 290 L 315 295 L 325 285 L 335 330 L 350 180 L 365 320 L 375 290 L 420 290 C 440 290 450 270 470 270 C 490 270 500 290 520 290 L 600 290 L 615 295 L 625 285 L 635 330 L 650 180 L 665 320 L 675 290 L 720 290 C 740 290 750 270 770 270" 
              stroke="url(#crispGreenPulse)" 
              strokeWidth="2.8" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" 
            />

            {/* Direct Quantitative Diagnostic Readings */}
            <text x="220" y="130" fill="#2D4539" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" letterSpacing="0.12em">
              RODNEY STREET DIAGNOSTIC SUITE · 12-LEAD TELEMETRY
            </text>
            <text x="780" y="130" textAnchor="end" fill="#234E39" fontFamily="Plus Jakarta Sans" fontSize="12" fontWeight="700">
              64 BPM · NORMAL SINUS RHYTHM
            </text>

            <line x1="220" y1="430" x2="780" y2="430" stroke="#E2ECE7" strokeWidth="1" />

            <text x="220" y="465" fill="#586E63" fontFamily="Plus Jakarta Sans" fontSize="10" letterSpacing="0.15em">
              PR: 156ms · QRS: 86ms · QTc: 410ms · BP: 116/74 mmHg
            </text>
            <text x="780" y="465" textAnchor="end" fill="#586E63" fontFamily="Plus Jakarta Sans" fontSize="10" letterSpacing="0.15em">
              CALIBRATED ISO-13485 ACCREDITED
            </text>
          </svg>
        </div>
      );

    case "doctor-vance":
    case "doctor-hughes":
    case "doctor-thornton":
    case "doctor-rahman": {
      const doctorData = {
        "doctor-vance": {
          initials: "AV",
          discipline: "CONSULTANT PHYSICIAN",
          reg: "GMC 4921083",
          monogram: "Dr. Alistair Vance",
          sub: "Internal Medicine & Preventative Cardiology"
        },
        "doctor-hughes": {
          initials: "EH",
          discipline: "WOMEN'S HEALTH LEAD",
          reg: "GMC 6138402",
          monogram: "Dr. Eleanor Hughes",
          sub: "Gynaecology, Menopause & Preventative Care"
        },
        "doctor-thornton": {
          initials: "MT",
          discipline: "ORTHOPAEDIC SPECIALIST",
          reg: "GMC 5183920",
          monogram: "Mr. Marcus Thornton",
          sub: "Musculoskeletal & Joint Preservation"
        },
        "doctor-rahman": {
          initials: "TR",
          discipline: "CONSULTANT CARDIOLOGIST",
          reg: "GMC 5829144",
          monogram: "Dr. Tariq Rahman",
          sub: "Cardiovascular Imaging & Arterial Health"
        }
      }[type];

      return (
        <div className="w-full h-full min-h-[380px] bg-[#FAF8F5] relative flex flex-col items-center justify-between p-8 border border-[#E2DDD3] overflow-hidden">
          <div className="w-full flex justify-between items-center text-[10px] tracking-[0.25em] text-[#5C5F5D] uppercase font-sans">
            <span>{doctorData.discipline}</span>
            <span className="font-mono text-[#2D4539] font-semibold">{doctorData.reg}</span>
          </div>

          {/* Distinguished Monogram Portrait in Soft Sage & Ivory */}
          <div className="my-auto relative flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border border-[#D5CDC0] flex items-center justify-center bg-white shadow-sm mb-4">
              <span className="font-serif text-3xl text-[#234E39] tracking-wider font-normal">
                {doctorData.initials}
              </span>
            </div>
            <div className="text-center">
              <div className="w-8 h-[1.5px] bg-[#234E39] mx-auto mb-3" />
              <span className="font-serif text-2xl text-[#1E2024] block">
                {doctorData.monogram}
              </span>
              <span className="text-xs text-[#5C5F5D] font-sans tracking-wide mt-1 block">
                {doctorData.sub}
              </span>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[11px] text-[#5C5F5D] border-t border-[#E2DDD3] pt-3">
            <span>Rodney Street Practice</span>
            <span className="font-serif italic text-[#234E39] font-medium">GMC Specialist Register</span>
          </div>
        </div>
      );
    }

    default:
      return (
        <div className="w-full h-full min-h-[320px] bg-[#FAF8F5] relative flex items-center justify-center p-8 overflow-hidden">
          <svg className="w-full h-full absolute inset-0 opacity-60" viewBox="0 0 600 400" fill="none">
            <rect width="600" height="400" fill="#FFFFFF" />
            <circle cx="300" cy="200" r="140" stroke="#E2DDD3" strokeWidth="1" />
            <circle cx="300" cy="200" r="100" stroke="#365847" strokeOpacity="0.4" strokeWidth="1.5" />
            <circle cx="300" cy="200" r="60" stroke="#E2DDD3" strokeWidth="1" />
            <line x1="160" y1="200" x2="440" y2="200" stroke="#E2DDD3" strokeWidth="1" />
            <line x1="300" y1="60" x2="300" y2="340" stroke="#E2DDD3" strokeWidth="1" />
          </svg>
          <div className="relative z-10 text-center">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#5C5F5D] font-sans block mb-2">
              CLINICAL SPECIFICATION
            </span>
            <span className="font-serif text-2xl text-[#1E2024]">
              Consultant Rigor
            </span>
          </div>
        </div>
      );
  }
}
