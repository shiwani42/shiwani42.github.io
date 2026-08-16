import { Icons } from "@/components/icons";
import {
  Aperture,
  BookOpenIcon,
  Bot,
  HomeIcon,
  Lock,
  NotebookIcon,
  Shield,
} from "lucide-react";
import { Cplusplus } from "@/components/ui/svgs/cplusplus";
import { Docker } from "@/components/ui/svgs/docker";
import { EmbeddedSystems } from "@/components/ui/svgs/embeddedSystems";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { Pytorch } from "@/components/ui/svgs/pytorch";
import { ReactDark } from "@/components/ui/svgs/reactDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { VerilogVhdl } from "@/components/ui/svgs/verilogVhdl";

export const DATA = {
  name: "Shiwani Mishra",
  initials: "SM",
  url: "https://shiwani42.github.io/",
  location: "Mumbai, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Co-Founder @Heisenbug | Research Intern @EPFL LPQM | Electrical Engineering @IIT Bombay",
  summary:
    "A builder in the making, driven by curiosity and a deep passion for technology and entrepreneurship. I love creating things that matter and connecting with people who share the same hunger to innovate and make an impact.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactDark },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "PyTorch", icon: Pytorch },
    { name: "Agentic AI", icon: Bot },
    { name: "Cryptography", icon: Lock },
    { name: "Cybersecurity", icon: Shield },
    { name: "C/C++", icon: Cplusplus },
    { name: "Verilog/VHDL", icon: VerilogVhdl },
    { name: "Embedded Systems", icon: EmbeddedSystems },
    { name: "Photonics", icon: Aperture },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/bookshelf", icon: BookOpenIcon, label: "Bookshelf" },
  ],
  contact: {
    email: "shiwani.mishra@iitb.ac.in",
    // tel: "+919576870986",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shiwani42",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shiwani-mishra",
        icon: Icons.linkedin,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://twitter.com/ishiwanimishra",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:shiwanimishra418@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Heisenbug",
      href: "https://heisenbug.ai",
      badges: ["Co-Founder"],
      location: "Mumbai, India",
      title: "Co-Founder",
      logoUrl: "/heisenbug1.png",
      start: "Dec 2025",
      end: "Present",
      description:
        "Heisenbug is a technology company building agentic compliance and security-first systems for a world where data, regulation, and digital workflows are rapidly colliding.Our mission is to help organizations navigate the growing complexity of data privacy, governance, and compliance through trustworthy, continuously adaptive infrastructure.\n\nOur first product, Goodman, is an agentic privacy-operations platform that monitors, enforces, and responds to data-protection obligations across an organization’s entire data stack.",
    },
    {
      company: "EPFL LPQM",
      href: "https://www.epfl.ch/labs/k-lab/",
      badges: ["Research Internship"],
      location: "Lausanne, Switzerland",
      title: "Research Intern",
      logoUrl: "/epfl.png",
      start: "May 2026",
      end: "Jul 2026",
      description:
        "Research intern at the Laboratory of Photonics and Quantum Measurements (LPQM) under Prof. Tobias J. Kippenberg, mentored by Xinru Ji. Designed, simulated, and laid out chirped-Bragg-grating Fabry-Perot microresonators in silicon nitride for dissipative Kerr soliton generation, with symmetric and asymmetric drop-port geometries validated through Lugiato-Lefever soliton dynamics and prepared on a fabrication mask.\n\nImplemented and validated a roughness-limited scattering-loss model for Si3N4 waveguides against a published high-confinement photonic platform, then extended the analysis toward 1 um operation. Contributed three technical notes (PowerPoint vectorized search, KLab GDS library, Lumerical LSF scripting) and built three internal tools still in use by the group: a semantic search interface for the lab slide archive, a searchable technical-notes catalog, and a browser front end for the fabrication design-file share.",
    },
    {
      company: "OWASP OpenCRE",
      href: "https://www.opencre.org/",
      badges: ["Open Source"],
      location: "Remote",
      title: "Open Source Developer",
      logoUrl: "/opencre.png",
      start: "Mar 2026",
      end: "Present",
      description:
        "Contributed to OWASP OpenCRE, an open mapping platform for security standards and controls. Merged fixes for a text-search crash when the query parameter is missing, corrected a database node test expectation, and centralized the CRE_ALLOW_IMPORT feature flag so config and gate behavior stay consistent across the API and frontend.",
    },
    {
      company: "IITBNF",
      href: "https://www.iitbnf.iitb.ac.in/",
      badges: ["Research"],
      location: "IIT Bombay",
      title: "Undergraduate Researcher",
      logoUrl: "/iitbnf.jpeg",
      start: "Aug 2025",
      end: "Feb 2026",
      description:
        "As an undergraduate researcher in IIT Bombay Nanofabrication Facility under Prof. Veeresh Deshpande, I explored the design of a 2T embedded DRAM cell using amorphous oxide semiconductors. The goal was to create a BEOL-compatible and fully transparent thin-film transistor structure. I worked on device simulations, material stack evaluation, and design iterations to understand retention behavior, switching characteristics, and fabrication feasibility within IITBNF’s process flow. I collaborated closely with PhD students in the group, who guided me through the device physics, characterization data, and design trade-offs involved in the project."
    },
    {
      company: "ChromoSight",
      badges: ["Co-Founder"],
      location: "Mumbai, India",
      title: "Co-Founder",
      logoUrl: "/chromosight.png",
      start: "Jan 2025",
      end: "Jan 2026",
      description:
        "At ChromoSight Technologies, we were building a deep-tech product based on electrochromic technology, developing smart windows that could adjust color and contrast for commercial and high-end residential buildings. The goal was better thermal management and reduced energy loads on HVAC and lighting. With architecture trending toward nature-connected spaces and organizations focusing on employee well-being, the market signals were positive.\n\nWe had no background in electrochromics, so we started from scratch and learned through extensive reading, lab work, and rapid experimentation. We progressed to IDEAS Level 2 at the Desai Sethi School of Entrepreneurship and received a ₹5L grant. We were later awarded the ₹9L SINE IOE grant, pre-incubated at SINE, and joined the SINE START program. We also ranked among the top 25 teams in the Carbon Zero Challenge 5.0 by IIT Madras and secured another ₹5L, and were one of only two Indian university teams selected for the HKUST Startup Competition by HKUST.\n\nEventually, due to timeline misalignment and team-execution issues, we stepped away from the company and returned the grants. We couldn’t take the product to market, and we couldn’t turn the tech into something people could use. It was something we were genuinely excited about.\n\nWhat stayed with me, though, were the lessons that only a first startup can teach: talking to customers without bias, focusing on benefits instead of features, learning how to execute with discipline, managing finances, hiring and working with a team, and having the hard conversations when they matter. ChromoSight didn’t become the company we imagined, but it was a practical and humbling learning curve."    
      },

  {
      company: "IITB Trust Lab",
      badges: ["Cybersecurity"],
      href: "https://www.iitb.ac.in/",
      location: "IIT Bombay",
      title: "Cybersecurity Research Developer",
      logoUrl: "/trust_lab.jpg",
      start: "Nov 2023",
      end: "Jul 2024",
      description:
        "At IITB Trust Lab, we began by exploring the capabilities and cybersecurity applications of Wireshark. We studied its architecture, protocol-dissection workflows, and opportunities for improving detection, analysis, and operational visibility. During this phase, we proposed enhancements related to protocol dissection, anomaly detection, and SOC integration, including visualization workflows using Grafana.\n\nBuilding on this foundation, we later joined the Summer of Code program, where we were selected among 131 participating teams to co-author a whitepaper with the Wireshark team. We developed a Wireshark plugin that integrates machine-learning-based threat detection for encrypted network traffic, applying protocol fingerprinting and a Naive Bayes classifier for advanced traffic analysis. We also built a Lua-based detection module after setting up and compiling the full Wireshark and Mercury source code locally with CMake.",
    },
  ],

  education: [
    {
      school: "Indian Institute of Technology, Bombay",
      href: "https://www.iitb.ac.in/",
      degree: "Dual Degree in Electrical Engineering | Minor in Computer Science & AI",
      logoUrl: "/iitb.png",
      start: "2022",
      end: "2027",
    },
  ],

  projects: [
    {
      title: "Goodman - Agentic Privacy Operations Platform",
      href: "https://www.heisenbug.ai/",
      dates: "December 2025 - Present",
      active: true,
      description:
        "Heisenbug's flagship product. An agentic privacy operations platform that continuously monitors, enforces, and responds to data protection obligations across an organization's entire data infrastructure, built ground-up for India's DPDP Act with agentic AI at the core.",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "Agentic AI",
        "DPDP Compliance",
        "Next.js",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.heisenbug.ai/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
      image: "/project/goodman.png",
      video: "",
    },
    {
      title: "Verity - SBOM Validator and Risk Platform",
      href: "https://verity-thvb.onrender.com/login",
      dates: "2026",
      active: true,
      description:
        "SBOM validation and risk assessment platform for third-party risk management. Parses CycloneDX and SPDX formats, scores SBOM quality across seven categories, checks compliance against NTIA, BSI, FSCT, and OpenChain profiles, and enriches components with live OSV, CISA KEV, and EPSS data. Includes a React dashboard, CLI for CI pipelines, PDF and JSON export, and workspace analytics.",
      technologies: [
        "Python",
        "React",
        "CycloneDX",
        "SPDX",
        "OSV.dev",
        "Docker",
        "TPRM",
        "SBOM",
      ],
      links: [
        {
          type: "Website",
          href: "https://verity-thvb.onrender.com/login",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/saurabh4269/verity",
          icon: <Icons.github className="h-4 w-4" />,
        },
        {
          type: "Demo",
          href: "https://vimeo.com/1195269402",
          icon: <Icons.youtube className="h-4 w-4" />,
        },
      ],
      image: "/project/verity.gif",
      video: "",
    },
    {
      title: "Dependency Aging Advisor",
      href: "https://github.com/shiwani42/dependency-aging-advisor",
      dates: "2026",
      active: true,
      description:
        "Most dependency scanners report how many packages are outdated without saying which ones matter. Dependency Aging Advisor scans your source to see where each dependency is used, combines that with OSV vulnerability data, and posts a prioritized weekly GitHub issue: what to fix this sprint, what to schedule next, and what is safe to ignore. Runs as a GitHub Action with no external services, supporting npm, PyPI, RubyGems, Go, Rust, Maven, PHP, and NuGet.",
      technologies: [
        "Python",
        "GitHub Actions",
        "OSV.dev",
        "ripgrep",
        "DevSecOps",
        "Supply Chain Security",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shiwani42/dependency-aging-advisor",
          icon: <Icons.github className="h-4 w-4" />,
        },
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/posts/shiwani-mishra_built-a-tool-ive-been-wanting-for-a-while-activity-7446268445727449088-wiq2",
          icon: <Icons.linkedin className="h-4 w-4" />,
        },
      ],
      image: "/project/daa-advisory-light.png",
      video: "",
    },
    {
      title: "Toto - In-Store AI Concierge",
      href: "https://github.com/shiwani42/toto",
      dates: "2026",
      active: true,
      description:
        "In-store AI concierge for an outdoor retailer. Shoppers open the app from a QR code, build a product list, navigate store zones, and use a camera AR overlay to highlight matching barcodes on the shelf. Includes trip planning with live weather, price decoding, repair-versus-replace guidance, and real-time multi-shopper sessions. Built as an install-free web app on top of zxing-wasm barcode scanning.",
      technologies: [
        "TypeScript",
        "zxing-wasm",
        "Web AR",
        "Supabase",
        "Claude",
        "Open-Meteo",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shiwani42/toto",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/project/toto.png",
      video: "",
    },
    {
      title: "Matrix - Interpretable Candidate Ranker",
      href: "https://github.com/saurabh4269/matrix",
      dates: "2026",
      active: false,
      description:
        "Hiring tools usually rank people by keyword overlap with the job description, or by embedding cosine similarity. That rewards resumes stuffed with the same phrases, and it hides why someone landed at rank 3.\n\nMatrix reads the JD into named checks we can run on each profile: shipped vs researched, verified assessments vs claimed skills, consulting-only careers when the JD forbids them, reachability. High-trust signals weigh more than things anyone can type. We then rank 100,000 profiles with confidence labels, pool percentiles, and a diversity pass so the shortlist does not collapse into one company.",
      technologies: [
        "Python",
        "YAML",
        "Information Retrieval",
        "Learning to Rank",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/saurabh4269/matrix",
          icon: <Icons.github className="h-4 w-4" />,
        },
        {
          type: "Demo",
          href: "https://vimeo.com/1206506693",
          icon: <Icons.youtube className="h-4 w-4" />,
        },
      ],
      image: "/project/matrix.gif",
      video: "",
    },
    {
      title: "Sidekick - Local-First Accountability App",
      href: "https://github.com/shiwani42/sidekick_v2",
      dates: "2026",
      active: true,
      description:
        "Local-first accountability app built around a daily loop: plan tomorrow, close today, and review the long view. Features day, week, and month calendar views with RFC 5545 repeats, offline IndexedDB storage, optional end-to-end encrypted partner sync, and no accounts or analytics for solo use. Built with Preact.",
      technologies: [
        "TypeScript",
        "Preact",
        "IndexedDB",
        "PWA",
        "E2EE",
        "RFC 5545",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shiwani42/sidekick_v2",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/project/sidekick-today.png",
      video: "",
    },
    {
      title: "Chirped-Bragg-Grating Fabry-Perot Microresonators",
      href: "#",
      dates: "May 2026 - Jul 2026",
      active: false,
      description:
        "I designed chirped-Bragg-grating Fabry-Perot microresonators in thin silicon nitride for dissipative Kerr soliton generation, during my internship at EPFL LPQM with Xinru Ji. I built a coupled-mode cavity model and a standing-wave Lugiato-Lefever solver with thermal feedback, and I kept second-order dispersion D2 under 10 MHz so a single soliton would form.\n\nI found four symmetric geometries with loaded Q up to 1.03e7 and D2/2pi between 8.0 and 9.1 MHz at 220 to 260 mW on-chip. I also designed an asymmetric drop-port cavity so the soliton has a dedicated output, and confirmed two of those in simulation. I laid the set out on a 7 mm by 12 mm mask with 72 devices, now ready for fabrication.",
      technologies: [
        "Silicon Nitride",
        "Lugiato-Lefever",
        "Lumerical",
        "Python",
        "GDS",
        "Integrated Photonics",
      ],
      links: [],
      image: "/project/cbg-fp-soliton.png",
      video: "",
    },
    {
      title: "Roughness-Limited Scattering Loss in Si3N4 Waveguides",
      href: "#",
      dates: "May 2026 - Jul 2026",
      active: false,
      description:
        "I implemented a roughness-limited scattering-loss model for Si3N4 waveguides, extending the Payne-Lacey equivalent-current picture with a 2D finite-element mode overlap, and I checked it against the high-confinement platform published by the group.\n\nThe model matches the top and bottom surface contribution within the platform's own bound. The sidewall piece sits a factor of 2.5 to 3.9 below what the measured linewidth needs, and that gap grows with waveguide width. The likely cause is sidewall RMS roughness larger than the reported 0.75 nm, still inside that paper's SEM resolution limit. I then re-evaluated the same model at 1 um for a future platform.",
      technologies: [
        "COMSOL",
        "Finite Element",
        "Python",
        "Silicon Nitride",
        "Waveguide Scattering",
        "Integrated Photonics",
      ],
      links: [],
      image: "/project/si3n4-scattering-loss.png",
      video: "",
    },
    {
      title: "Advanced NS-Net",
      href: "https://github.com/shiwani42/Advanced-NSNet", // ← replace with your actual repo URL
      dates: "2025",
      active: true,
      description: "Improved NS-Net (Yan et al. 2025) for generalizable AI-generated image detection. Removes semantic components from CLIP embeddings via Null-Space Projection to expose GAN/diffusion artifacts that supervised detectors miss. Replicated the unreleased NS-Net codebase, extended it with architectural improvements, and presented findings to Prof. Amit Sethi (IIT Bombay). Co-authored with Sachi Deshmukh and Neel Rambhia.",
      technologies: [
        "Python",
        "PyTorch",
        "CLIP",
        "Null-Space Projection",
        "Diffusion Models",
        "GAN Detection",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shiwani42/Advanced-NSNet",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/project/nsnet-architecture.png", // ← drop your architecture diagram here, or leave ""
      video: "",
    },
    {
      title: "Broke-O-Meter: Zero Knowledge Proof of Poverty",
      href: "https://broke.heisenbug.ai",
      dates: "2025 - Present",
      active: true,
      description:
        "Built a fully client side system to prove a user's bank balance is below a chosen threshold without revealing the actual value. Designed a cryptographic proof flow using a simulated Pedersen commitment and Fiat Shamir transformation with SHA 256 via the Web Crypto API.\n\nIntegrated Tesseract.js for in browser OCR and created a portable proof format that encodes commitments, challenges, and validity checks without exposing the balance. Implemented independent verification and currency normalization, keeping the system entirely serverless.",
      technologies: [
        "JavaScript",
        "Web Crypto API",
        "SHA-256",
        "Tesseract.js",
        "Zero Knowledge Proofs",
        "Cryptography",
        "OCR",
      ],
      links: [
        {
          type: "Website",
          href: "https://broke.heisenbug.ai",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
      image: "/project/broke_o_meter.gif",
      video: "",
    },
    {
      title: "Ground Penetrating Radar - SFCW & FMCW Dual Approach",
      href: "https://github.com/shiwani42/sfcw_ground_penetrating_radar",
      dates: "2025",
      active: false,
      description:
        "Built a dual-track ground penetrating radar system capable of scanning along a spatial axis and generating radargrams to detect subsurface objects. Part A implemented SFCW technique from scratch using an STM32 Nucleo F103, MCP4725 DAC, VCO, LNA, bias tee, and custom Vivaldi antipodal antennas, with an RF mixer extracting phase-shift data and FFT-based depth reconstruction visualized on an LCD.\n\nPart B leveraged an IVS-362 24 GHz FMCW radar module with I/Q output, DC offset correction via an op-amp subtractor, and SAR-based time-domain signal processing in MATLAB to produce hyperbolic radargrams. A rack-and-pinion stepper motor system achieved 1.5 cm spatial resolution over a 30 cm scan range.",
      technologies: [
        "STM32",
        "RF Signal Processing",
        "FFT",
        "SAR",
        "MATLAB",
        "Python",
        "PCB Design",
        "Vivaldi Antenna",
        "SPI / I2C",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shiwani42/sfcw_ground_penetrating_radar",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/project/gpr.gif",
      video: "",
    },
    {
      title: "Threshold Voltage Modeling of p-AlGaN HEMTs",
      href: "https://github.com/shiwani42/pAlGaN-HEMT-Vth-Model",
      dates: "November 2025",
      active: false,
      description:
        "Replicated and validated the Bakeroot (2018) analytical model for threshold voltage in p-AlGaN gate HEMTs using physics-based equations from Ambacher (1999) for bandgap, polarization, and dielectric properties.\n\nDecomposed the closed-form VT expression into four physical terms: energy, acceptor charge, channel depletion, and net polarization. Extended the model with a Gaussian Monte Carlo framework (2000-5000 samples) to simulate fabrication variations in barrier composition, thickness, and doping, quantifying their impact on VT distribution and device yield.",
      technologies: [
        "Python",
        "GaN HEMT",
        "Monte Carlo Simulation",
        "Semiconductor Physics",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shiwani42/pAlGaN-HEMT-Vth-Model",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/project/hemt.png",
      video: "",
    },
    {
      title: "2T Embedded DRAM using Amorphous Oxide Semiconductors",
      href: "https://github.com/shiwani42/ito-fet-2t-edram",
      dates: "Aug 2025 - Nov 2025",
      active: false,
      description:
        "Explored the design of a BEOL-compatible, fully transparent 2T embedded DRAM cell using ITO thin-film transistors at the IIT Bombay Nanofabrication Facility under Prof. Veeresh Deshpande.\n\nWorked on device simulations, material stack evaluation, and fabrication process iterations to study retention behavior and switching characteristics. Collaborated with PhD researchers on bias stress characterization, contributing to a conference paper demonstrating 1.5x improved BTI immunity through channel encapsulation and annealing optimization.",
      technologies: [
        "ITO FET",
        "Amorphous Oxide Semiconductors",
        "PEALD",
        "Semiconductor Device Fabrication",
        "Bias Temperature Instability",
        "Channel Encapsulation",
        "Keysight B1500A",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shiwani42/ito-fet-2t-edram",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/project/ito-fet.jpeg",
      video: "",
    },
    
    {
      title: "Diamond Nanopillar Arrays for Quantum Biosensing",
      href: "https://github.com/shiwani42/diamond-nanopillar-biosensing",
      dates: "Aug 2025 - Nov 2025",
      active: true,
      description:
        "Fabricating and characterizing diamond nanopillar arrays with embedded nitrogen-vacancy (NV) centers for quantum biosensing of mammalian neuronal signals.\n\nNanopillars (500 nm wide, 1.3 µm tall) are patterned via e-beam lithography and etched using ICP-RIE, serving as both optical waveguides to enhance NV sensitivity and biomechanical scaffolds to position neurons near the sensing volume. Characterization pipeline includes XPS, XRD, Raman spectroscopy, confocal microscopy, and ODMR.",
      technologies: [
        "E-Beam Lithography",
        "ICP-RIE",
        "NV Centers",
        "Confocal Microscopy",
        "ODMR",
        "XPS",
        "Raman Spectroscopy",
        "Quantum Sensing",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shiwani42/diamond-nanopillar-biosensing",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/project/neuron.jpeg",
      video: "",
    },
    {
      title: "Pipelined Median & Binary Thresholding on MAX-10 FPGA",
      href: "https://github.com/shiwani42/pipelined_median_thresholding_max10_fpga",
      dates: "2024",
      active: false,
      description:
        "Implemented a fully pipelined image filtering system on the MAX-10 FPGA (Xen-10 board) for underwater gas pipeline detection. Designed a 7-stage hardware pipeline in VHDL processing 128x128 grayscale images stored in dual-port BRAM, using a DEMUX, four intermediate line buffers, MUXes, and a custom encoder to assemble 3x3 pixel kernels each clock cycle.\n\nThe median filter applies a bubble sort over 9 pixels per cycle, followed by binary thresholding at value 140 to isolate pipeline structures. Verified the full datapath against MATLAB-simulated results and validated the design using ModelSim-Altera.",
      technologies: [
        "VHDL",
        "Verilog",
        "MAX-10 FPGA",
        "Altera Quartus",
        "ModelSim",
        "BRAM",
        "Pipelined Architecture",
        "Median Filter",
        "Binary Thresholding",
        "MATLAB",
        "Digital Design",
        "Image Processing"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shiwani42/pipelined_median_thresholding_max10_fpga",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/project/binary_thresholding.png",
      video: "",
    },
    {
      title: "Digital Signature Algorithm Hardware Core",
      href: "#",
      dates: "Oct 2024 - Dec 2024",
      active: false,
      description:
        "Built complete cryptographic hardware implementation in Verilog. Designed specialized modules for modular arithmetic using Montgomery methods. Created SHA-256 hashing unit and pseudo-random number generator for secure signing operations.",
      technologies: [
        "Verilog",
        "VLSI",
        "Cryptography",
        "Hardware Security",
      ],
      links: [],
      image: "/project/dsa.png",
      video: "",
    },
    {
      title: "Pipelined RISC CPU",
      href: "#",
      dates: "Mar 2024 - May 2024",
      active: false,
      description:
        "Implemented 16-bit, 6-stage pipelined processor with 26 instructions. Developed complete datapath with ALU, register file, and dual memory. Executed hazard detection, data forwarding, and pipeline stalling for high throughput.",
      technologies: [
        "VHDL",
        "Computer Architecture",
        "Digital Design",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shiwani42/iitb-risc23-pipeline",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/project/pipelined_risc_cpu.png",
      video: "",
    },
    {
      title: "Wireshark Privacy-Preserving Threat Detection Plugin",
      href: "https://github.com/saurabh4269/fdc_plugin",
      dates: "May 2024 - July 2024",
      active: false,
      description:
        "Developed a Wireshark Lua plugin integrating ML-based threat detection to analyze encrypted network traffic. Used Naive Bayes classifiers with network protocol fingerprinting. Co-authored a whitepaper selected from 131 teams at IITB Trust Lab's FOSSx program.",
      technologies: [
        "Lua",
        "Python",
        "Wireshark",
        "Naive Bayes",
        "CMake",
        "Mercury",
        "Cybersecurity",
      ],
      links: [
        {
          type: "Drive",
          href: "https://drive.google.com/drive/folders/1-YYDsH1iOsmtf3EUxBonaDoeZG4W8rpb",
          icon: <Icons.googleDrive className="h-4 w-4" />,
        },
      ],
      image: "/project/wireshark.gif",
      video: "",
    },
  ],

  volunteering: [
    {
      title: "Electronics and Robotics Club - Convener",
      dates: "May 2023 - Mar 2024",
      location: "IIT Bombay, Mumbai",
      description:
        "I worked with a core team of eight to lead the execution of XLR8’23, the Institute’s largest freshmen technical event with over 800 participants. I helped curate the technical content for the Control Theory and ROS Bootcamp, which enrolled over 280 students, and delivered sessions on computer networking and IoT while working on communication protocols and path-planning concepts.\n\nOutside the formal work, it was a lot of all-nighters, late-night brainstorming sessions modelling different systems, and countless dry-runs before events. The people I worked with were exceptional, and the experience is especially meaningful because I met my future co-founder there.",
      image: "/erc.jpeg",
      links: [],
    },
    {
      title: "Institute Innovation Council - Manager",
      dates: "May 2024 - Apr 2025",
      location: "IIT Bombay, Mumbai",
      description: "Part of the first team appointed by Dean Strategy to establish IIT Bombay's Innovation Council, with a mandate to improve IITB's innovation output and NIRF ranking. Headed the organisation of Smart India Hackathon at IIT Bombay, launched the Innovation General Championship, and initiated nationwide competitions. IITB was subsequently ranked 1st in the NIRF Innovation category.",
      image: "/iic.jpeg",
      links: [],
    },
    {
      title: "India SHE Summit - Volunteer",
      dates: "Aug 2025 - Jan 2026",
      location: "India",
      description:
        "Coordinated creative, strategic, and community efforts for the initiative. Led the branding process, securing a logo designed pro bono by Padma Shri awardee calligrapher. Brought on a website and design agency offering voluntary support, built a volunteer team from IITs and IIMs, and helped assemble an advisory board by reaching out to professors, CEOs, marketers, and other leaders. Created and executed the LinkedIn pre-launch campaign featuring stories of Indian women entrepreneurs, which received strong engagement and celebrity attention. Collaborated with an AI media company to produce the launch video.",
      image: "/india-she-summit.jpg",
      links: [],
    },
  ],
} as const;
