// Complete academic content for Ege Çırakman's portfolio
// Professional academic website optimized for PhD applications

// Research Interests
export const interests = [
  "Score-based / diffusion generative modeling (EDM, wavelet/curvelet adaptations)",
  "Seismic Bayesian inversion; simulation-based inference", 
  "Learning dynamics: abrupt learning, ghost mechanisms, short-term memory in RNNs",
  "Trustworthy image super-resolution and evaluation",
  "Real-time anomaly detection; digital twins"
];

// Personal Information
export const person = {
  name: "Ege Çırakman",
  tagline: "AI + mathematical modeling — generative models for scientific inverse problems, learning dynamics in RNNs, and trustworthy vision systems.",
  email: "cirakman18@itu.edu.tr",
  location: "Istanbul, Turkey",
  scholar: "https://scholar.google.com/citations?user=ZX7U-TgAAAAJ",
  linkedin: "https://www.linkedin.com/in/ege-%C3%A7%C4%B1rakman-527759200/",
  cv_pdf_url: "/files/Ege_Cirakman_CV.pdf",
  headshot_alt: "Professional portrait of Ege Çırakman, researcher in AI and mathematical modeling",
  researchSummary: "I develop generative models and scalable inference methods for scientific imaging (seismic), study learning dynamics in RNNs, and work on trustworthy vision systems.",
  interests
};

export const personalInfo = {
  name: person.name,
  tagline: person.tagline,
  email: person.email,
  location: person.location,
  profiles: {
    scholar: person.scholar,
    linkedin: person.linkedin,
    email: `mailto:${person.email}`,
    cv: person.cv_pdf_url,
  },
  researchSummary: person.researchSummary,
  interests
};

export const education = [
  {
    school: "Istanbul Technical University (ITU)",
    degree: "B.Sc., Control & Automation Engineering",
    dates: "Exp. Jun 2026",
    notes: "GPA 3.71/4.00; Department rank 1/101 (end of 2024)"
  }
];

export const news = [
  { date: "Aug 2025", text: "IMAGE 2025 oral: WSGM posterior surrogate for seismic inversion" },
  { date: "Feb 2025", text: "ICML 2025 paper on STM mechanisms in RNNs posted to arXiv" },
  { date: "Jan 2025", text: "Ghost mechanism paper accepted to PRX (in press); preprint on arXiv" },
  { date: "Feb 2024", text: "ICIP 2024 paper on trustworthy SR available on arXiv" }
];

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: string;
  badges?: string[];
  links: {
    page?: string;
    pdf?: string;
    arxiv?: string;
    icml?: string;
    lab?: string;
    overview?: string;
    code?: string;
    doi?: string;
    openreview?: string;
    program?: string;
    rg?: string;
  };
  summary: string;
  teaser?: string;
}

export const publications: Publication[] = [
  {
    title: "Efficient and scalable posterior surrogate for seismic inversion via wavelet score-based generative models",
    authors: "E. Çırakman*, H. T. Erdinc*, F. J. Herrmann",
    venue: "IMAGE 2025 (oral)",
    year: "2025",
    status: "published (conference)",
    links: {
      page: "https://slim.gatech.edu/content/efficient-and-scalable-posterior-surrogate-seismic-inversion-wavelet-score-based-generative",
      pdf: "https://slim.gatech.edu/Publications/Public/Conferences/SEG/2025/cirakman2025IMAGEesp/IMAGE_Ege.pdf"
    },
    summary: "Conditional WSGM + EDM scheduling in the wavelet domain; multi-resolution posterior sampling with large speed/memory gains."
  },
  {
    title: "Dynamical phases of short-term memory mechanisms in RNNs",
    authors: "B. Kurtkaya, E. Çırakman, et al.",
    venue: "ICML 2025",
    year: "2025",
    status: "published (conference)",
    links: {
      arxiv: "https://arxiv.org/abs/2502.17433",
      icml: "https://icml.cc/virtual/2025/poster/43521"
    },
    summary: "Two STM mechanisms (slow-point manifolds vs. limit cycles); scaling law for critical learning rate; large RNN sweeps."
  },
  {
    title: "A ghost mechanism: An analytical model of abrupt learning",
    authors: "F. Dinc*, E. Çırakman*, Y. Jiang, M. Yuksekgönül, M. J. Schnitzer, H. Tanaka",
    venue: "Physical Review X (accepted, in press)",
    year: "2025",
    status: "accepted",
    links: {
      arxiv: "https://arxiv.org/abs/2501.02378",
      lab: "https://schnitzerlab.stanford.edu/publications"
    },
    summary: "Ghost-induced transient bottleneck explains abrupt learning; exact critical learning-rate law; stabilization via rank and output-confidence control."
  },
  {
    title: "Trustworthy SR: Resolving ambiguity in image super-resolution via diffusion models and human feedback",
    authors: "C. Korkmaz, E. Çırakman, A. M. Tekalp, Z. Doğan",
    venue: "ICIP 2024",
    year: "2024",
    status: "published (conference)",
    links: { arxiv: "https://arxiv.org/abs/2402.07597" },
    summary: "Human-in-the-loop selection + ensembling for diffusion SR; preference-informed evaluation when metrics misalign with trust."
  },
  {
    title: "A Big Data Application in Manufacturing Industry — Computer Vision to Detect Defects on Bearings",
    authors: "P. Ünal, E. Çırakman, et al.",
    venue: "IEEE Big Data",
    year: "2022",
    status: "published (conference)",
    links: {
      overview: "https://scispace.com/papers/a-big-data-application-in-manufacturing-industry-computer-c255siux"
    },
    summary: "TC‑VISION: real-time CNN-based optical inspection pipeline with hardware + big-data integration for rolling-bearing QC."
  }
];

export interface Experience {
  org: string;
  role: string;
  dates: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    org: "Georgia Institute of Technology — SLIM",
    role: "Research Intern",
    dates: "Dec 2024–Present",
    bullets: [
      "Conditional WSGM posterior surrogate in wavelet domain; EDM scheduling; calibrated UQ across 32^2–256^2",
      "Tail-robust schedules (t-EDM) for minority/outlier modes; 1D→2D guidance for well-logs",
      "Curvelet-adapted diffusion; Curvelet Neural Operator; standardized evaluation; pipelines with JUDI/Devito"
    ]
  },
  {
    org: "Stanford University — CNC Program (M. J. Schnitzer; F. Dinc)",
    role: "Research Intern",
    dates: "Jan 2024–Dec 2024",
    bullets: [
      "FORCE learning in a dynamical-systems framework; stability/chaos & memory-parameter scaling",
      "Ghost mechanism theory (abrupt learning); slow-point vs. limit-cycle phases; large-scale diagnostics",
      "Stabilization via trainable-rank and output-confidence control; McClelland Scholarship support"
    ]
  },
  {
    org: "Koç University — KUIS AI Center (A. M. Tekalp)",
    role: "Research Intern",
    dates: "2021–Jan 2024",
    bullets: [
      "SwinIR customizations for single-image SR; capacity‑fidelity benchmarks",
      "Diffusion SR with human-in-the-loop selection and ensemble decoding; universal IQA protocols"
    ]
  },
  {
    org: "TEKNOPAR (Ankara)",
    role: "Researcher",
    dates: "2022–2023",
    bullets: [
      "Real-time, patch-wise SVDD for anomaly detection on manufacturing lines",
      "Digital twins: sensor telemetry integrated with data-driven monitoring"
    ]
  }
];

export const internationalExperience: Experience[] = [
  experience[0], experience[1]
];

export const nationalExperience: Experience[] = [
  experience[2], experience[3]
];

export const awards = [
  "McClelland Scholarship, Stanford University (2024)",
  "Top 0.7% in Turkey's national university entrance exam (YKS)",
  "SAUVC World Champion (2022) and RAMI Runner-up (2023), ITU AUV Team (vision + ROS)",
  "Teknofest AI Finalist (transportation with AI)"
];

export interface Project {
  name: string;
  summary: string;
  link?: string;
}

export const projects: Project[] = [
  { name: "Cryptocurrency price forecasting with BERT+LSTM", summary: "Contextual embeddings + sequence models for short/long horizons under high volatility." },
  { name: "ITU AUV Team", summary: "Vision pipeline + ROS integration for autonomous navigation." }
];

export const skills = {
  programming: ["Python", "C/C++", "MATLAB"],
  frameworks: ["PyTorch", "TensorFlow", "OpenCV"],
  systems: ["CUDA", "Docker", "Linux", "ROS", "Simulink", "Devito", "JUDI"]
};

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Publications", href: "#publications" },
  { name: "Research", href: "#research" },
  { name: "Experience", href: "#experience" },
  { name: "Awards", href: "#awards" },
  { name: "Projects", href: "#projects" },
  { name: "CV", href: "#cv" },
  { name: "Contact", href: "#contact" }
];