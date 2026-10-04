export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  lead: string;
  description: string;
  duration: string;
  feeGuidance: string;
  consultantDiscipline: string;
  scopeOfCare: string[];
  preparation: string;
  highlights: string[];
}

export interface DoctorProfile {
  id: string;
  name: string;
  title: string;
  specialty: string;
  gmcNumber: string;
  qualifications: string;
  experience: string;
  biography: string;
  areasOfCare: string[];
  daysAtClinic: string;
  fellowships: string[];
}

export interface PatientPerspective {
  id: string;
  quote: string;
  context: string;
  treatmentCategory: string;
  patientInitials: string;
  tenure: string;
}

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: "general-medicine",
    number: "01",
    name: "General & Preventative Medicine",
    subtitle: "Unhurried, comprehensive physician consultations",
    lead: "A return to continuous, attentive medical practice where 45-minute appointments allow root causes to be identified rather than symptoms managed.",
    description: "Our private general practice provides direct access to senior physicians without triage barriers. We manage acute presentations, complex multi-system complaints, and long-term preventative health strategies with dedicated continuity of care.",
    duration: "45 or 60 Minutes",
    feeGuidance: "From £195 initial consultation",
    consultantDiscipline: "General Internal Medicine & Family Practice",
    scopeOfCare: [
      "Thorough clinical history and systematic physical examination",
      "Immediate on-site phlebotomy & point-of-care biochemistry",
      "Same-day prescription delivery to local pharmacies",
      "Direct rapid referrals to our on-site and regional specialist network",
      "Comprehensive written clinical consultation summary within 24 hours"
    ],
    preparation: "Please bring a list of current medications and any recent hospital discharge or test letters.",
    highlights: ["45-minute standard consultation", "Same-day access available", "Direct physician follow-up"]
  },
  {
    id: "cardiovascular",
    number: "02",
    name: "Cardiovascular Health & Diagnostics",
    subtitle: "Non-invasive hemodynamic & arterial evaluation",
    lead: "Early identification of arterial stiffness, subclinical atherosclerosis, and cardiac rhythm irregularities using precision diagnostic tools.",
    description: "Led by consultant cardiologists, our cardiovascular clinic offers integrated baseline assessment, resting and stress 12-lead ECG, 24-hour Holter monitoring, and direct access echocardiography in our Rodney Street diagnostic suite.",
    duration: "60 Minutes",
    feeGuidance: "From £320 including resting 12-lead ECG",
    consultantDiscipline: "Consultant Cardiology",
    scopeOfCare: [
      "Advanced 12-lead resting and ambulatory rhythm electrocardiography",
      "High-resolution transthoracic echocardiography",
      "Non-invasive central blood pressure & arterial wave analysis",
      "Advanced lipid subfractionation and Apolipoprotein B profiling",
      "Personalised cardiovascular risk mitigation roadmap"
    ],
    preparation: "Wear comfortable two-piece clothing for electrode placement. Avoid caffeine 3 hours prior to consultation.",
    highlights: ["Same-day ECG analysis", "Consultant-led reporting", "Integrated vascular biomarker profile"]
  },
  {
    id: "advanced-screening",
    number: "03",
    name: "Comprehensive Health Screening",
    subtitle: "Systematic multi-organ longevity assessments",
    lead: "An exhaustive physiological appraisal combining over 60 biochemical markers with ultrasound imaging, spirometry, and full-body physical assessment.",
    description: "Beyond routine check-ups, our health screening packages evaluate metabolic balance, cardiovascular health, organ function, nutritional indices, and endocrine baselines. Every assessment concludes with an unhurried, face-to-face debrief with your physician.",
    duration: "90–120 Minutes",
    feeGuidance: "From £550 (Silver) to £1,150 (Executive Comprehensive)",
    consultantDiscipline: "Senior Consultant Physicians",
    scopeOfCare: [
      "Full blood count, liver, renal, thyroid, and metabolic biochemistry (60+ biomarkers)",
      "Cardiovascular profiling with resting ECG and HbA1c",
      "Resting spirometry and pulmonary function assessment",
      "Abdominal ultrasound examination of major organs",
      "Detailed 14-page bound physiological dossier with physician action plan"
    ],
    preparation: "10-hour overnight fast required for fasting glucose and lipid subfractions. Water is encouraged.",
    highlights: ["Complete multi-organ audit", "60+ biological parameters", "Bound written physician report"]
  },
  {
    id: "specialist-consultations",
    number: "04",
    name: "Specialist Consultant Medicine",
    subtitle: "Direct access to accredited senior hospital consultants",
    lead: "Access secondary-care hospital expertise without months of waiting or the impersonal nature of large medical complexes.",
    description: "Our clinic hosts senior NHS and private hospital consultants across gastroenterology, neurology, rheumatology, and respiratory medicine. Consultations take place in the quiet, confidential surroundings of our private Rodney Street practice.",
    duration: "45–60 Minutes",
    feeGuidance: "From £260 (specialty dependent)",
    consultantDiscipline: "Cross-Disciplinary Consultant Specialists",
    scopeOfCare: [
      "Complex second opinions for unresolved medical symptoms",
      "Direct referral pathways for MRI, CT, and endoscopic investigations",
      "Multidisciplinary review between generalist and specialist clinicians",
      "Structured treatment initiation and specialist prescribing",
      "Private medical insurance liaison and paperwork completion"
    ],
    preparation: "Please provide any relevant prior radiology CDs, scan reports, or previous specialist letters.",
    highlights: ["GMC Specialist Register consultants", "Unhurried second opinions", "Seamless diagnostic imaging links"]
  },
  {
    id: "womens-health",
    number: "05",
    name: "Women’s Health & Menopause Care",
    subtitle: "Evidence-led hormonal, gynaecological, and longevity care",
    lead: "Dedicated clinical expertise for perimenopause, menopause, pelvic health, and preventative hormonal care tailored to individual physiology.",
    description: "Dr. Eleanor Hughes and our women's health team provide compassionate, research-grounded consultations for hormonal balance, body-identical HRT titration, cervical cytology, and preventative breast and bone density monitoring.",
    duration: "45 Minutes",
    feeGuidance: "From £220",
    consultantDiscipline: "Gynaecology & Women's Health Specialist GP",
    scopeOfCare: [
      "Comprehensive perimenopause and menopause symptom mapping",
      "Individualised body-identical HRT evaluation and prescribing",
      "Well-Woman screening including cervical cytology and HPV typing",
      "Pelvic and transvaginal ultrasound coordination",
      "Bone health, osteoporosis risk, and cardiovascular longevity counselling"
    ],
    preparation: "We recommend keeping a 4-week symptom and menstrual diary prior to your first appointment if applicable.",
    highlights: ["British Menopause Society principles", "Body-identical HRT", "Empathetic, unhurried space"]
  },
  {
    id: "mens-health",
    number: "06",
    name: "Men’s Health & Longevity",
    subtitle: "Proactive endocrinology, prostate, and metabolic vitality",
    lead: "Targeting the specific health challenges of men over 35: cardiovascular resilience, testosterone status, metabolic markers, and prostate vigilance.",
    description: "A private, dignified environment for men to address fatigue, erectile function, hormonal decline, urinary changes, and cardiovascular risks with direct diagnostic testing and evidence-based clinical protocols.",
    duration: "45 Minutes",
    feeGuidance: "From £220",
    consultantDiscipline: "Men's Health & Urology Specialists",
    scopeOfCare: [
      "Total and Free Testosterone, SHBG, prolactin, and pituitary hormonal panel",
      "Serum PSA testing and refined age-adjusted risk stratifications",
      "Metabolic health profiling: visceral adiposity, insulin resistance, HbA1c",
      "Cardiovascular endurance and arterial stiffness checks",
      "Holistic lifestyle and physician-supervised therapeutic interventions"
    ],
    preparation: "Fasting morning appointment recommended (before 10:00 AM) for accurate testosterone bio-assays.",
    highlights: ["Morning hormonal profiles", "Discreet, confidential consultations", "Preventative prostate screening"]
  },
  {
    id: "metabolic-health",
    number: "07",
    name: "Metabolic & Endocrine Medicine",
    subtitle: "Insulin sensitivity, thyroid optimisation, and cellular energy",
    lead: "Addressing prediabetes, subclinical thyroid dysfunction, and chronic metabolic fatigue through cellular biochemistry.",
    description: "Modern metabolic medicine moves beyond binary disease definitions. We map glucose variability, continuous glucose metrics, thyroid autoantibodies, and micronutrient status to restore cellular metabolic efficiency.",
    duration: "60 Minutes",
    feeGuidance: "From £240",
    consultantDiscipline: "Endocrinology & Metabolic Health",
    scopeOfCare: [
      "Comprehensive thyroid cascade: TSH, Free T3, Free T4, Reverse T3, and antibodies",
      "Continuous Glucose Monitor (CGM) application and analytical review",
      "HOMA-IR insulin resistance indexing and lipid sub-fraction analysis",
      "Vitamin D, B12, folate, ferritin, and cellular magnesium assays",
      "Customised medical nutritional prescription"
    ],
    preparation: "12-hour fasting state required for baseline lipid and insulin blood draw.",
    highlights: ["CGM sensor integration", "Advanced thyroid panel", "Evidence-based metabolic restoration"]
  },
  {
    id: "musculoskeletal",
    number: "08",
    name: "Musculoskeletal & Joint Assessment",
    subtitle: "Orthopaedic assessment and diagnostic ultrasound",
    lead: "Focused physical examination and on-site ultrasound evaluation for acute spinal, joint, and soft tissue dysfunction.",
    description: "Led by Mr. Marcus Thornton, our orthopaedic and joint assessment clinic provides rapid diagnosis for joint pain, spinal stiffness, and sports injuries without NHS waitlists, including ultrasound-guided joint injections.",
    duration: "45 Minutes",
    feeGuidance: "From £240",
    consultantDiscipline: "Orthopaedic & Musculoskeletal Medicine",
    scopeOfCare: [
      "Focused physical functional testing and range-of-motion biometrics",
      "Point-of-care diagnostic musculoskeletal ultrasound",
      "Targeted ultrasound-guided joint and soft-tissue therapeutic injections",
      "Fast-track private MRI referrals with report turnaround within 48 hours",
      "Bespoke rehabilitation planning with trusted regional physiotherapy partners"
    ],
    preparation: "Please wear loose garments allowing clear examination of the affected joint or limb.",
    highlights: ["Point-of-care ultrasound", "Targeted joint therapy", "Direct 48hr MRI access"]
  }
];

export const CLINIC_PHYSICIANS: DoctorProfile[] = [
  {
    id: "dr-alistair-vance",
    name: "Dr. Alistair Vance",
    title: "Clinical Director & Senior Consultant Physician",
    specialty: "Internal Medicine & Preventative Cardiology",
    gmcNumber: "4921083",
    qualifications: "MBChB (Hons), BSc, FRCP (Edin)",
    experience: "24 Years Clinical Practice",
    biography: "Dr. Alistair Vance trained at the University of Liverpool Medical School and St Bartholomew’s Hospital, London, before holding senior consultant appointments across the North West. He established Liverpool Medical Clinic to deliver unhurried, rigorous clinical consultations grounded in clinical listening, comprehensive diagnostics, and continuity of care.",
    areasOfCare: [
      "Complex Medical Diagnosis",
      "Cardiovascular Preventative Medicine",
      "Executive Multi-Organ Health Screening",
      "Hypertension & Arterial Health Management"
    ],
    daysAtClinic: "Monday, Tuesday, Thursday",
    fellowships: ["Fellow of the Royal College of Physicians (Edinburgh)", "Member of the British Cardiovascular Society", "Member of the Independent Doctors Federation"]
  },
  {
    id: "dr-eleanor-hughes",
    name: "Dr. Eleanor Hughes",
    title: "Lead Physician for Women’s Health",
    specialty: "Gynaecology, Menopause & Preventative Medicine",
    gmcNumber: "6138402",
    qualifications: "MBChB, MRCGP, DRCOG, BMS Accredited",
    experience: "18 Years Clinical Practice",
    biography: "Dr. Eleanor Hughes is an accredited British Menopause Society specialist with extensive experience across primary care and hospital women's health units. Her approach combines deep empathetic listening with rigorous hormonal and metabolic profiling, providing women with clear, evidence-based options for long-term health and vitality.",
    areasOfCare: [
      "Perimenopause & Menopause Care",
      "Body-Identical Hormone Replacement Therapy",
      "Preventative Well-Woman Health Screening",
      "Thyroid & Female Metabolic Health"
    ],
    daysAtClinic: "Tuesday, Wednesday, Friday",
    fellowships: ["Royal College of General Practitioners", "Diploma of the Royal College of Obstetricians & Gynaecologists", "British Menopause Society"]
  },
  {
    id: "mr-marcus-thornton",
    name: "Mr. Marcus Thornton",
    title: "Consultant Orthopaedic & MSK Specialist",
    specialty: "Musculoskeletal Medicine & Joint Preservation",
    gmcNumber: "5183920",
    qualifications: "MBChB, FRCS (Tr & Orth), DipSEM",
    experience: "21 Years Clinical Practice",
    biography: "Mr. Marcus Thornton has worked as an NHS and elite sports consultant orthopaedic surgeon for over two decades. At Liverpool Medical Clinic, he provides conservative joint assessment, diagnostic ultrasound, and precision image-guided therapy, helping patients maintain mobility and avoid unnecessary surgical intervention.",
    areasOfCare: [
      "Joint Pain & Osteoarthritis Management",
      "Diagnostic Musculoskeletal Ultrasound",
      "Ultrasound-Guided Injections (Hyaluronic Acid & Steroid)",
      "Sports Injury Assessment & Rehabilitation Protocols"
    ],
    daysAtClinic: "Wednesday, Thursday",
    fellowships: ["Fellow of the Royal College of Surgeons", "Faculty of Sport & Exercise Medicine UK"]
  },
  {
    id: "dr-tariq-rahman",
    name: "Dr. Tariq Rahman",
    title: "Consultant Cardiologist & Hemodynamic Lead",
    specialty: "Interventional & Preventative Cardiology",
    gmcNumber: "5829144",
    qualifications: "MBBS, MRCP (UK), PhD, FESC",
    experience: "19 Years Clinical Practice",
    biography: "Dr. Tariq Rahman holds an NHS consultant cardiologist post in the Merseyside region alongside his private practice at Rodney Street. His research focuses on subclinical coronary plaque identification, early microvascular dysfunction, and personalized risk mitigation in individuals with family history of premature heart disease.",
    areasOfCare: [
      "Echocardiography & Cardiac Imaging",
      "Coronary Artery Disease Risk Stratification",
      "Arrhythmia & Palpitations Workup",
      "Advanced Lipid & Lipoprotein(a) Evaluation"
    ],
    daysAtClinic: "Monday, Friday",
    fellowships: ["Royal College of Physicians (London)", "Fellow of the European Society of Cardiology", "British Society of Echocardiography"]
  }
];

export const CARE_JOURNEY_STAGES = [
  {
    step: "01",
    label: "LISTEN",
    title: "The Unhurried Dialogue",
    timeframe: "First 20 Minutes",
    focus: "Medical Narrative & Context",
    description: "Care begins with 20 uninterrupted minutes dedicated entirely to your narrative. We examine lifestyle cadence, stress architecture, family patterns, and subtle symptom progressions that 10-minute appointments routinely miss."
  },
  {
    step: "02",
    label: "ASSESS",
    title: "The Physical & Biological Audit",
    timeframe: "Minutes 20–35",
    focus: "Objective Diagnostic Measures",
    description: "Targeted clinical examination combined with immediate point-of-care biochemistry, 12-lead ECG, or diagnostic ultrasound. We measure physiology objectively rather than guessing."
  },
  {
    step: "03",
    label: "UNDERSTAND",
    title: "The Diagnostic Synthesis",
    timeframe: "Minutes 35–45",
    focus: "Collaborative Review",
    description: "Your physician translates data into transparent understanding. We review your results together on clinical displays, explaining the biochemical mechanisms and anatomical foundations."
  },
  {
    step: "04",
    label: "CARE",
    title: "The Continuous Protocol",
    timeframe: "Ongoing Relationship",
    focus: "Action & Continuity",
    description: "A comprehensive written report delivered within 24 hours, clear prescriptions arranged, direct email follow-up with your consultant, and scheduled milestone reassessments."
  }
];

export const PATIENT_PERSPECTIVES: PatientPerspective[] = [
  {
    id: "perspective-1",
    quote: "For three years I was told my exhaustion and cardiac palpitations were simply stress. At Liverpool Medical Clinic, Dr. Vance conducted an unhurried 60-minute review, identified an overlooked endocrine imbalance that same morning, and transformed my life within six weeks.",
    context: "Patient under long-term preventative care following complex diagnosis",
    treatmentCategory: "Metabolic & Cardiovascular Medicine",
    patientInitials: "C.H.",
    tenure: "Patient since 2021"
  },
  {
    id: "perspective-2",
    quote: "The environment on Rodney Street is unlike any clinic I have visited. Quiet, respectful, and completely devoid of the chaotic rush of standard healthcare. When Dr. Hughes spoke to me, she listened without looking at a computer clock. That made all the difference.",
    context: "Menopause & Preventative Health Consultation",
    treatmentCategory: "Women’s Health & Endocrinology",
    patientInitials: "M.T.",
    tenure: "Patient since 2023"
  },
  {
    id: "perspective-3",
    quote: "As an active professional, having direct access to a consultant who can perform an ultrasound on the spot, review my MRI within 48 hours, and articulate the treatment options with clinical honesty is invaluable.",
    context: "Joint Preservation & Sports Medicine",
    treatmentCategory: "Musculoskeletal Assessment",
    patientInitials: "R.B.",
    tenure: "Patient since 2022"
  }
];

export const CLINIC_FAQS = [
  {
    question: "Do I require a GP referral to book an appointment?",
    answer: "No. You do not require a referral letter from your NHS GP to see any of our private general practitioners or consultant physicians. You may book directly through our online appointment portal or by calling our clinical coordination team. If you have previous medical summaries or letters, bringing them is helpful but not mandatory."
  },
  {
    question: "How long are standard consultations at the clinic?",
    answer: "Our standard initial consultation is 45 minutes, with 60-minute appointments reserved for complex multiple-system assessments and cardiology reviews. Health screening sessions range between 90 and 120 minutes. We intentionally schedule buffer periods between patients to ensure zero waiting room crowding and absolute clinical calm."
  },
  {
    question: "Can I use private medical insurance?",
    answer: "Our consultant physicians (Cardiology, Orthopaedics, and specialist second opinions) are recognized by major private medical insurers including Bupa, AXA Health, Aviva, and Vitality. General Practice and routine preventative health screening are typically self-pay. We provide comprehensive coded itemised invoices for insurance claim reimbursement."
  },
  {
    question: "Where is the clinic located and what parking is available?",
    answer: "We are situated in Liverpool’s historic medical quarter at 48 Rodney Street, Liverpool, L1 9ED. Pay-and-display on-street parking is available directly outside on Rodney Street, with multi-storey parking 300 metres away at Mount Pleasant Car Park. We are an 8-minute walk from Liverpool Central Station and 12 minutes from Lime Street Station."
  },
  {
    question: "How quickly do I receive test results and physician reports?",
    answer: "Point-of-care tests and ECGs are interpreted and reviewed with you during your appointment. Routine blood biochemistry panels are returned within 24 to 48 hours with a bespoke written clinical commentary from your consultant. A full consultation summary is dispatched via secure encrypted email within 24 hours."
  },
  {
    question: "What emergency care do you provide?",
    answer: "Liverpool Medical Clinic is an outpatient private practice designed for planned consultations, preventative medicine, and diagnostic investigations. We do not operate an emergency department. In cases of acute chest pain, suspected stroke, severe trauma, or life-threatening emergencies, patients must immediately dial 999 or attend the Royal Liverpool University Hospital A&E."
  }
];
