// Complete academic content for Ege Çırakman's portfolio
// Professional academic website optimized for PhD applications

// Author Information
export const author = {
  name: "Ege Çırakman",
  email: "cirakman18@itu.edu.tr", 
  location: "Istanbul, Turkey",
  education: {
    degree: "B.Sc., Control & Automation Engineering",
    institution: "Istanbul Technical University (ITU)",
    gpa: "3.71/4.00",
    rank: "1/101 (end of 2024)",
    grad_expected: "June 2026"
  },
  links: {
    website: "https://egecirakman.com",
    linkedin: "https://www.linkedin.com/in/ege-%C3%A7%C4%B1rakman-527759200/",
    google_scholar: "https://scholar.google.com/citations?user=ZX7U-TgAAAAJ&hl=en",
    orcid: "", // TODO: user to supply  
    semantic_scholar: "", // TODO: user to supply
    openreview: "", // TODO: user to supply
    github: "" // TODO: user to supply
  }
};

// Tagline
export const taglineLines = [
  "AI + mathematical modeling — generative models for scientific inverse problems,",
  "learning dynamics in RNNs, and trustworthy vision systems."
];

// Research Interests
export const researchInterests = [
  "Diffusion/score-based generative modeling (EDM)",
  "Simulation-based Bayesian inference", 
  "Wavelet/curvelet priors for imaging (seismic)",
  "Learning dynamics, abrupt learning & ghost mechanisms",
  "Short-term memory in RNNs",
  "Trustworthy super-resolution & evaluation",
  "Real-time anomaly detection; digital twins"
];

// Publications interface
export interface Publication {
  title: string;
  venue: string;
  year: string;
  status: "published" | "accepted" | "preprint" | "in_prep";
  badges?: string[];
  authors: string[];
  links: {
    pdf?: string;
    arxiv?: string;
    doi?: string;
    venue_page?: string;
    project?: string;
    slides?: string;
    code?: string;
  };
  tldr: string;
  slug: string;
  abstract?: string;
  bibtex?: string;
  selected?: boolean;
  keywords?: string[];
  highlight?: string;
  area?: "inverse-problems" | "learning-dynamics" | "computer-vision" | "diffusion-models";
}

// Publications
export const publications: Publication[] = [
  {
    title: "Efficient and scalable posterior surrogate for seismic inversion via wavelet score-based generative models",
    venue: "IMAGE 2025",
    year: "2025", 
    status: "published",
    badges: ["oral"],
    authors: ["E. Çırakman*", "H. T. Erdinc*", "F. J. Herrmann"],
    links: {
      pdf: "https://slim.gatech.edu/Publications/Public/Conferences/SEG/2025/cirakman2025IMAGEesp/IMAGE_Ege.pdf",
      project: "https://slim.gatech.edu/content/efficient-and-scalable-posterior-surrogate-seismic-inversion-wavelet-score-based-generative",
      slides: "", // TODO
      code: ""    // TODO
    },
    tldr: "Wavelet-domain conditional score surrogate; EDM schedules; ~73% faster sampling & ~50% lower GPU at matched fidelity.",
    slug: "wavelet-score-seismic-inversion-2025",
    selected: true,
    keywords: ["diffusion models", "seismic inversion", "wavelets", "Bayesian inference"],
    highlight: "First wavelet-domain posterior surrogate with provable acceleration via EDM scheduling — 73% faster than frequency-domain baselines",
    area: "inverse-problems",
    bibtex: "@inproceedings{cirakman2025wavelet,\n  title={Efficient and scalable posterior surrogate for seismic inversion via wavelet score-based generative models},\n  author={Çırakman, Ege and Erdinc, H. T. and Herrmann, Felix J.},\n  booktitle={IMAGE Conference},\n  year={2025},\n  organization={Society of Exploration Geophysicists}\n}"
  },
  {
    title: "Dynamical phases of short-term memory mechanisms in RNNs", 
    venue: "ICML 2025",
    year: "2025",
    status: "published",
    authors: ["B. Kurtkaya", "E. Çırakman", "et al."],
    links: {
      arxiv: "https://arxiv.org/abs/2502.17433",
      venue_page: "https://icml.cc/virtual/2025/poster/43521",
      code: "" // TODO
    },
    tldr: "Two STM mechanisms (slow-point manifolds vs. limit cycles); scaling of critical LR with delay; phase diagrams.",
    slug: "rnn-stm-dynamics-icml-2025",
    selected: true,
    keywords: ["RNN dynamics", "short-term memory", "learning theory", "dynamical systems"],
    highlight: "First complete phase diagram of STM mechanisms in RNNs — predicts critical learning rate scaling with delay",
    area: "learning-dynamics",
    bibtex: "@inproceedings{kurtkaya2025dynamical,\n  title={Dynamical phases of short-term memory mechanisms in RNNs},\n  author={Kurtkaya, B. and Çırakman, Ege and others},\n  booktitle={International Conference on Machine Learning},\n  year={2025},\n  organization={PMLR}\n}"
  },
  {
    title: "A ghost mechanism: An analytical model of abrupt learning",
    venue: "Physical Review X",  
    year: "2025",
    status: "accepted",
    authors: ["F. Dinc*", "E. Çırakman*", "M. J. Schnitzer", "H. Tanaka"],
    links: {
      arxiv: "https://arxiv.org/abs/2501.02378",
      doi: "" // TODO when available
    },
    tldr: "Ghost-induced bottleneck near saddle-node remnant; exact α* ∝ T^{-5}; validated across low/full-rank RNNs.",
    slug: "ghost-mechanism-abrupt-learning-2025",
    selected: true,
    keywords: ["abrupt learning", "neural dynamics", "phase transitions", "learning theory"],
    highlight: "Analytical model explaining abrupt learning — exact scaling law α* ∝ T^{-5} validated across architectures",
    area: "learning-dynamics",
    bibtex: "@article{dinc2025ghost,\n  title={A ghost mechanism: An analytical model of abrupt learning},\n  author={Dinc, F. and Çırakman, Ege and Schnitzer, Mark J. and Tanaka, Hidenori},\n  journal={Physical Review X},\n  year={2025},\n  publisher={American Physical Society}\n}"
  },
  {
    title: "Trustworthy SR: Resolving ambiguity in image super-resolution via diffusion models and human feedback",
    venue: "ICIP 2024",
    year: "2024", 
    status: "published",
    authors: ["C. Korkmaz", "E. Çırakman", "A. M. Tekalp", "Z. Doğan"],
    links: {
      arxiv: "https://arxiv.org/abs/2402.07597",
      venue_page: "https://cmsworkshops.com/ICIP2024/view_paper.php?PaperNum=1937&bare=1",
      code: "" // TODO
    },
    tldr: "Ambiguity-aware SR via human-in-the-loop selection & ensembling; preference-aligned evaluation.",
    slug: "trustworthy-sr-icip-2024"
  },
  {
    title: "A Big Data Application in Manufacturing Industry: Computer Vision to Detect Defects on Bearings",
    venue: "IEEE Big Data 2022", 
    year: "2022",
    status: "published",
    authors: ["P. Ünal", "E. Çırakman", "et al."],
    links: {
      doi: "https://doi.org/10.1109/BigData55660.2022.10020608"
    },
    tldr: "Deployed real-time CNN optical inspection (TC-VISION) with big-data pipeline.",
    slug: "bearing-defect-detection-2022"
  },
  // Preprints & In Preparation
  {
    title: "Wavelet-Domain Image Prior Learning for Identity-Preserving Super-Resolution",
    venue: "CVPR 2026 (Target)",
    year: "2026",
    status: "in_prep",
    authors: ["E. Çırakman", "et al."],
    links: {},
    tldr: "Diffusion-based SR in wavelet domain with per-band KL divergence for identity preservation and artifact suppression.",
    slug: "wavelet-domain-sr-cvpr-2026",
    area: "computer-vision",
    highlight: "First identity-preserving SR via wavelet-domain diffusion — maintains OCR consistency and face identity"
  },
  {
    title: "Optimal Whitening Procedures for High-Frequency Detail Capture in Curvelet-Based Generative Models",
    venue: "In Preparation",
    year: "2025",
    status: "in_prep", 
    authors: ["E. Çırakman", "et al."],
    links: {},
    tldr: "Optimal whitening within curvelet transform framework to enhance high-frequency detail capture in generative models.",
    slug: "curvelet-whitening-2025",
    area: "diffusion-models",
    highlight: "Novel whitening approach for curvelet transforms — optimized for high-frequency detail preservation"
  },
  {
    title: "Heavy-Tailed Diffusion for Minority-Mode Coverage",
    venue: "In Preparation", 
    year: "2025",
    status: "in_prep",
    authors: ["E. Çırakman", "et al."],
    links: {},
    tldr: "Heavier-tailed noise schedules to improve rare-structure coverage and address class imbalance in geological features.",
    slug: "heavy-tailed-diffusion-2025",
    area: "inverse-problems",
    highlight: "Addresses minority-mode collapse in diffusion models — improved coverage of rare geological structures"
  },
  {
    title: "Curvelet-Adapted Diffusion and Curvelet Neural Operators",
    venue: "In Preparation",
    year: "2025", 
    status: "in_prep",
    authors: ["E. Çırakman", "et al."],
    links: {},
    tldr: "Exploiting curvelet sparsity and directional anisotropy for 2D/3D inversion with 1D→2D guidance pathways.",
    slug: "curvelet-neural-operators-2025",
    area: "inverse-problems",
    highlight: "First curvelet neural operators — leverages directional sparsity for geological inversion"
  }
];

// Preprints and In-Preparation
export const preprints = [
  "Wavelet-Domain Image Prior Learning for Identity-Preserving Super-Resolution (target: CVPR 2026)",
  "Optimal Whitening for High-Frequency Detail in Curvelet-Based Generative Models", 
  "Heavy-Tailed Diffusion for Minority-Mode Coverage",
  "Curvelet-Adapted Diffusion and Curvelet Neural Operators"
];

// Experience interface
export interface Experience {
  org: string;
  role: string;
  dates: string;
  bullets: string[];
}

// Experience
export const experience: Experience[] = [
  {
    org: "Georgia Institute of Technology, SLIM Lab",
    role: "Research Intern (Advisor: Prof. F. J. Herrmann)",
    dates: "Dec 2024–Present",
    bullets: [
      "Cascaded multi-scale wavelet posterior surrogate; EDM schedules; conditional factorization p(x|y) across scales.",
      "Tail-robust diffusion schedules; 1D→2D guided well-log synthesis.",
      "Curvelet-adapted diffusion; Curvelet Neural Operator prototypes."
    ]
  },
  {
    org: "Stanford University, CNC Program",
    role: "Research Intern (Advisors: Prof. M. J. Schnitzer, Dr. F. Dinc)",
    dates: "Jan 2024–Dec 2024",
    bullets: [
      "FORCE learning as dynamical system; stability/chaos & memory-parameter scaling.",
      "Ghost-mechanism theory; slow-point vs. limit-cycle phases; critical LR scaling.",
      "Stabilization via trainable rank & output-confidence."
    ]
  },
  {
    org: "Koç University, KUIS AI Center", 
    role: "Research Intern (Advisor: Prof. A. M. Tekalp)",
    dates: "2021–Jan 2024",
    bullets: [
      "Customized SwinIR for single-image SR; capacity vs. fidelity benchmarking.",
      "Diffusion SR with human-in-the-loop; universal IQA + PSNR/SSIM/LPIPS/DISTS."
    ]
  },
  {
    org: "TEKNOPAR, Ankara",
    role: "Researcher", 
    dates: "2022–2023",
    bullets: [
      "Real-time patch-wise SVDD anomaly detection.",
      "Digital twins with sensor telemetry + data-driven monitoring."
    ]
  }
];

// International and National Experience (for tabs)
export const internationalExperience = experience.slice(0, 2);
export const nationalExperience = experience.slice(2, 4);

// Awards
export const awards = [
  "McClelland Scholarship, Stanford University (2024)",
  "Top 0.7% nationally in YKS (Turkey)", 
  "SAUVC World Champion (2022), RAMI Runner-up (2023) — ITU AUV Team (Vision & ROS)",
  "Teknofest AI Finalist (Transportation)"
];

// Projects interface
export interface Project {
  name: string;
  summary: string;
  link?: string;
}

// Projects
export const projects: Project[] = [
  { 
    name: "Cryptocurrency Price Forecasting (BERT+LSTM)",
    summary: "Contextual embeddings + sequence models for short/long horizons under high volatility."
  },
  { 
    name: "ITU AUV Team", 
    summary: "Vision pipeline + ROS integration for autonomous navigation."
  }
];

// Skills
export const skills = {
  programming: ["Python (PyTorch, TensorFlow, OpenCV)", "C/C++", "MATLAB"],
  tools: ["CUDA", "Docker", "Linux", "ROS", "Simulink", "Devito", "JUDI"]
};

// News items
export const news = [
  { date: "Aug 2025", text: "IMAGE 2025 oral: WSGM posterior surrogate for seismic inversion" },
  { date: "Feb 2025", text: "ICML 2025 paper on STM mechanisms in RNNs posted to arXiv" }, 
  { date: "Jan 2025", text: "Ghost mechanism paper accepted to PRX (in press); preprint on arXiv" },
  { date: "Feb 2024", text: "ICIP 2024 paper on trustworthy SR available on arXiv" }
];

// Legacy exports for compatibility
export const personalInfo = {
  name: author.name,
  tagline: taglineLines.join(" "),
  email: author.email,
  location: author.location,
  profiles: {
    scholar: author.links.google_scholar,
    linkedin: author.links.linkedin,
    email: `mailto:${author.email}`,
  cv: "/files/Ege_Cirakman_CV.pdf",
  },
  researchSummary: "I develop generative models and scalable inference methods for scientific imaging (seismic), study learning dynamics in RNNs, and work on trustworthy vision systems.",
  interests: researchInterests
};

export const interests = researchInterests;
export const person = author;
export const education = [{
  school: author.education.institution,
  degree: author.education.degree,
  dates: `Exp. ${author.education.grad_expected}`,
  notes: `GPA ${author.education.gpa}; Department rank ${author.education.rank}`
}];

// Navigation
export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "Publications", href: "#publications" },
  { name: "News", href: "#news" },
  { name: "Experience", href: "#experience" },
  { name: "Awards", href: "#awards" },
  { name: "CV", href: "#cv" },
  { name: "Statement", href: "/research-statement" },
  { name: "Contact", href: "#contact" }
];