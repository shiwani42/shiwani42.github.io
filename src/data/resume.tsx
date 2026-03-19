import { Icons } from "@/components/icons";
import { BookOpenIcon, HomeIcon, NotebookIcon } from "lucide-react";
import { Cplusplus } from "@/components/ui/svgs/cplusplus";
import { Docker } from "@/components/ui/svgs/docker";
import { EmbeddedSystems } from "@/components/ui/svgs/embeddedSystems";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { VerilogVhdl } from "@/components/ui/svgs/verilogVhdl";

export const DATA = {
  name: "Shiwani Mishra",
  initials: "SM",
  url: "https://shiwani42.github.io/",
  location: "Mumbai, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Co-Founder @Heisenbug | Building agentic compliance solutions | Electrical Engineering @IIT Bombay",
  summary:
    "A builder in the making, driven by curiosity and a deep passion for technology and entrepreneurship. I love creating things that matter and connecting with people who share the same hunger to innovate and make an impact.",
    avatarUrl: "/me.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "C/C++", icon: Cplusplus },
    { name: "TypeScript", icon: Typescript },
    { name: "Docker", icon: Docker },
    { name: "Verilog/VHDL", icon: VerilogVhdl },
    { name: "Embedded Systems", icon: EmbeddedSystems },
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
        "Heisenbug's flagship product. An agentic privacy operations platform that continuously monitors, enforces, and responds to data protection obligations across an organization's entire data infrastructure — built ground-up for India's DPDP Act with agentic AI at the core.",
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
      links: [],
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
