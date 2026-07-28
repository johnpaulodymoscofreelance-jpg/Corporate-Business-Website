import {
  ServiceItem,
  IndustryItem,
  CaseStudy,
  GlobalOffice,
  LeadershipMember,
  ArticleItem,
  JobOpening,
  TestimonialItem,
  MilestoneItem
} from '../types';

export const PARTNER_LOGOS = [
  { name: 'NVIDIA', symbol: 'NVIDIA AI Stack' },
  { name: 'Microsoft', symbol: 'Azure Sovereign' },
  { name: 'Apple', symbol: 'Custom Silicon' },
  { name: 'Siemens', symbol: 'Industrial IoT' },
  { name: 'Salesforce', symbol: 'Enterprise Core' },
  { name: 'IBM', symbol: 'Quantum Network' },
  { name: 'SpaceX', symbol: 'Starlink Telemetry' },
  { name: 'BMW Group', symbol: 'Autonomous Production' }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-neural',
    title: 'Enterprise AI & Neural Systems',
    tagline: 'Custom Sovereign Large Language Models & Autonomous Agent Swarms',
    description: 'Deploy fine-tuned enterprise AI models within your private cloud. Automate multi-departmental workflows, complex decisioning, and predictive intelligence with zero-data-leakage guarantees.',
    iconName: 'Cpu',
    features: [
      'Private Sovereign LLM Fine-Tuning & RAG Pipelines',
      'Autonomous Multi-Agent Orchestration Frameworks',
      'Real-Time Computer Vision & Anomaly Detection',
      'Model Governance & Ethical AI Alignment Auditing'
    ],
    metrics: [
      { label: 'Decision Velocity', value: '+420%' },
      { label: 'Operational Cost Savings', value: '58%' }
    ],
    accentColor: '#0057FF',
    architectureBlueprint: 'Multi-layer Transformer with Vector Embedding DB & Sovereign Guardrails'
  },
  {
    id: 'cloud-sovereign',
    title: 'Sovereign Cloud & Quantum Systems',
    tagline: 'Hyper-scalable Infrastructure with Zero-Trust Hybrid Edge Security',
    description: 'Multi-cloud orchestration engineered for 99.999% SLA uptime. Prepare your legacy data centers for post-quantum cryptography standards and distributed edge processing.',
    iconName: 'Cloud',
    features: [
      'Multi-Region Cloud Federation (AWS, Azure, GCP, Private)',
      'Quantum-Resistant Encryption Protocols (PQC)',
      'Sub-5ms Ultra-Low Latency Edge Processing',
      'Kubernetes Infrastructure Automation & FinOps'
    ],
    metrics: [
      { label: 'Uptime SLA Guarantee', value: '99.999%' },
      { label: 'Cloud Waste Reduction', value: '44%' }
    ],
    accentColor: '#00D2FF',
    architectureBlueprint: 'Federated Mesh with Hardware Security Module (HSM) Vaults'
  },
  {
    id: 'cybersecurity',
    title: 'Next-Gen Cyber Defense',
    tagline: 'AI-Driven Threat Hunting & Zero-Trust Architecture',
    description: 'Proactive defense systems powered by continuous neural threat monitoring, automated patch synthesis, and instantaneous incident containment across global enterprise perimeters.',
    iconName: 'ShieldCheck',
    features: [
      'Automated Zero-Trust Access Management (ZTA)',
      'Real-Time AI Incident Response & Autonomous Mitigation',
      'Red-Team Offensive Security & Penetration Audits',
      'Regulatory Compliance (FedRAMP, HIPAA, GDPR, ISO27001)'
    ],
    metrics: [
      { label: 'Threat Intercept Rate', value: '99.98%' },
      { label: 'Mean Time to Detect', value: '< 1.2s' }
    ],
    accentColor: '#9D00FF',
    architectureBlueprint: 'Behavioral Neural Telemetry & Distributed Cryptographic Isolation'
  },
  {
    id: 'digital-transform',
    title: 'Digital Transformation & Modernization',
    tagline: 'Re-engineering Legacy Enterprise Core Systems',
    description: 'Deconstruct monolithic legacy platforms into high-throughput microservices. Accelerate feature delivery cycles while maintaining continuous business availability.',
    iconName: 'Zap',
    features: [
      'Monolith-to-Microservices Automated Decomposition',
      'Real-Time Event-Driven Architecture (Kafka/NATS)',
      'Continuous Integration & Deployment Pipeline Modernization',
      'Executive Change Management & Strategy Blueprinting'
    ],
    metrics: [
      { label: 'Deployment Velocity', value: '6.5x' },
      { label: 'Legacy Maintenance Reduction', value: '72%' }
    ],
    accentColor: '#00E676',
    architectureBlueprint: 'Event-Driven Micro-Frontends with Distributed Saga Transactions'
  },
  {
    id: 'data-analytics',
    title: 'Predictive Data Systems',
    tagline: 'Turn Terabytes of Unstructured Streams into Strategic Action',
    description: 'Harness enterprise data lakes with real-time stream processing, automated predictive forecasting, and executive telemetry dashboards powered by live neural analytics.',
    iconName: 'BarChart3',
    features: [
      'Petabyte-Scale Real-Time Data Streaming & Lakehouse',
      'Automated Financial & Supply Chain Forecasting',
      'Executive KPI Telemetry & Immersive 3D Dashboards',
      'Self-Service Natural Language Query Engine'
    ],
    metrics: [
      { label: 'Query Execution Speed', value: '18x faster' },
      { label: 'Forecast Accuracy Rate', value: '97.4%' }
    ],
    accentColor: '#FF9100',
    architectureBlueprint: 'Apache Iceberg Lakehouse with Real-Time Vector Search Indexing'
  },
  {
    id: 'erp-automation',
    title: 'Autonomous ERP & Workflow Automation',
    tagline: 'End-to-End Enterprise Process Optimization',
    description: 'Connect finance, supply chain, human capital, and customer operations into a synchronized intelligent nervous system that eliminates manual overhead.',
    iconName: 'Workflow',
    features: [
      'Cross-Platform ERP Integration (SAP, Oracle, Salesforce)',
      'Intelligent Document & Invoice AI Processing',
      'Autonomous Inventory & Procurement Routing',
      'Real-Time Audit Trail & Compliance Logging'
    ],
    metrics: [
      { label: 'Manual Processing Cuts', value: '85%' },
      { label: 'Order-to-Cash Cycle Time', value: '-60%' }
    ],
    accentColor: '#FF0055',
    architectureBlueprint: 'BPMN 2.0 Autonomous Engine with Distributed Ledger Verification'
  },
  {
    id: 'software-architecture',
    title: 'Modern Software Engineering',
    tagline: 'Mission-Critical Digital Products Built for Billions of Interactions',
    description: 'Bespoke web applications, mobile ecosystems, and high-frequency transaction interfaces built with bulletproof TypeScript, React, and native performant engines.',
    iconName: 'Code2',
    features: [
      'Mission-Critical Web & Mobile Applications',
      'High-Frequency API Gateway & Mesh Architecture',
      'Sub-Millisecond UI Performance & WebGL Graphics',
      'Rigorous Test Automation & Quality Assurance'
    ],
    metrics: [
      { label: 'Page Load Speed', value: '< 400ms' },
      { label: 'User Satisfaction (CSAT)', value: '98.8%' }
    ],
    accentColor: '#00B0FF',
    architectureBlueprint: 'Isomorphic TypeScript Core with Rust/Wasm Performance Modules'
  },
  {
    id: 'strategic-consulting',
    title: 'Strategic Technology Advisory',
    tagline: 'Fortune 500 Board-Level Technology Roadmap & M&A Auditing',
    description: 'Align executive leadership on technology capital deployment, technical due diligence for multi-billion dollar M&A, and long-term innovation roadmaps.',
    iconName: 'TrendingUp',
    features: [
      'Technology Strategy & Capital Budget Allocation',
      'M&A Technical & Cybersecurity Due Diligence',
      'C-Suite & Board Governance Advisory',
      'Global Regulatory & IP Strategy Planning'
    ],
    metrics: [
      { label: 'Capital Efficiency Boost', value: '3.4x' },
      { label: 'M&A Risk Identification', value: '100%' }
    ],
    accentColor: '#FFD600',
    architectureBlueprint: 'NEXUS Strategic Maturity Matrix & Capital Benchmark Index'
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'finance',
    name: 'Banking & Financial Markets',
    iconName: 'Landmark',
    tagline: 'High-Frequency Algorithmic Systems & Fraud Prevention',
    description: 'Powering tier-1 investment banks and global stock exchanges with sub-millisecond trade execution, automated fraud neural detectors, and regulatory reporting.',
    keyMetrics: [
      { label: 'Transactions Processed/Sec', value: '4.8M+' },
      { label: 'Fraud Detection Accuracy', value: '99.96%' }
    ],
    compliance: ['SEC Rule 17a-4', 'FINRA', 'MiFID II', 'PCI-DSS v4.0'],
    caseHighlight: 'Modernized core clearing system for Global Tier-1 Bank, handling $120B daily settlement.',
    recommendedSolutions: ['High-Frequency Clearing Engine', 'Quantum Fraud Shield', 'Autonomous Compliance Auditor']
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    iconName: 'HeartPulse',
    tagline: 'Precision Diagnostics & Clinical Trial Neural Modeling',
    description: 'Accelerating drug discovery pipelines, securing patient genomic data, and connecting medical IoT infrastructure across global hospital networks.',
    keyMetrics: [
      { label: 'Drug Candidate Time-to-Trial', value: '-55%' },
      { label: 'HIPAA Security Score', value: '100/100' }
    ],
    compliance: ['HIPAA', 'FDA 21 CFR Part 11', 'SOC2 Type II', 'ISO 27701'],
    caseHighlight: 'Engineered AI genomic analysis platform processing 50,000 patient genomes per week.',
    recommendedSolutions: ['Federated Health Data Mesh', 'AI Clinical Trial Synthesizer', 'Medical IoT Guard']
  },
  {
    id: 'manufacturing',
    name: 'Smart Manufacturing & Industrial IoT',
    iconName: 'Building2',
    tagline: 'Autonomous Supply Chains & Zero-Downtime Smart Factories',
    description: 'Integrating digital twin 3D modeling, predictive equipment maintenance, and robot swarm coordination in gigafactories.',
    keyMetrics: [
      { label: 'Unplanned Downtime Cut', value: '88%' },
      { label: 'Overall Equipment Effectiveness', value: '+32%' }
    ],
    compliance: ['ISO 9001', 'IEC 62443', 'OSHA Compliance', 'REACH'],
    caseHighlight: 'Deployed 3D Digital Twin system across 14 global automotive assembly lines.',
    recommendedSolutions: ['Predictive Equipment Neural Twin', 'Robotic Swarm Controller', 'Supply Chain Vision']
  },
  {
    id: 'energy',
    name: 'Energy, Utilities & Sustainability',
    iconName: 'Zap',
    tagline: 'Grid Optimization & Renewable Energy Forecasting',
    description: 'Optimizing regional power grid distribution, predicting solar/wind output with machine learning, and tracking carbon offset compliance.',
    keyMetrics: [
      { label: 'Grid Distribution Efficiency', value: '+24%' },
      { label: 'Carbon Footprint Reduction', value: '1.2M Tons' }
    ],
    compliance: ['NERC CIP', 'ESG Sustainability Standards', 'ISO 50001'],
    caseHighlight: 'Real-time smart grid balance engine managing 12 GW of renewable energy capacity.',
    recommendedSolutions: ['Smart Grid Load Balancer', 'Renewable Production Forecast AI', 'Carbon Ledger']
  },
  {
    id: 'retail',
    name: 'Omnichannel Retail & E-Commerce',
    iconName: 'Heart',
    tagline: 'Hyper-Personalized Shopping & Dynamic Supply Logistics',
    description: 'Delivering real-time inventory visibility, dynamic pricing algorithms, and personalized AI shopping assistants across millions of concurrent users.',
    keyMetrics: [
      { label: 'Cart Conversion Boost', value: '+38%' },
      { label: 'Inventory Fulfillment Speed', value: '3x Faster' }
    ],
    compliance: ['GDPR', 'CCPA', 'PCI-DSS', 'ISO 27001'],
    caseHighlight: 'Architected peak Black Friday cloud platform handling 1.2M orders per minute with zero downtime.',
    recommendedSolutions: ['Sub-Second Product Catalog Mesh', 'Neural Recommendation Engine', 'Autonomous Logistics']
  },
  {
    id: 'aerospace',
    name: 'Aerospace & Defense',
    iconName: 'Plane',
    tagline: 'Mission-Critical Telemetry & Satellite Fleet Automation',
    description: 'Building hardened aerospace telemetry systems, satellite constellation command centers, and secure defense cloud networks.',
    keyMetrics: [
      { label: 'Telemetry Stream Throughput', value: '10 Gbps' },
      { label: 'Cyber Intrusion Prevention', value: '100%' }
    ],
    compliance: ['ITAR', 'FedRAMP High', 'DoD Impact Level 6', 'NIST 800-171'],
    caseHighlight: 'Next-gen ground telemetry software tracking 400+ low-earth orbit satellites continuously.',
    recommendedSolutions: ['Aerospace Telemetry Core', 'Sovereign Satellite Mesh', 'Mission Assurance AI']
  },
  {
    id: 'logistics',
    name: 'Global Logistics & Transportation',
    iconName: 'Truck',
    tagline: 'Autonomous Fleet Management & Multi-Modal Routing',
    description: 'Optimizing sea, air, and ground transport networks with real-time GPS predictive tracking and automated customs documentation.',
    keyMetrics: [
      { label: 'Fuel Consumption Cut', value: '19%' },
      { label: 'On-Time Arrival Rate', value: '98.9%' }
    ],
    compliance: ['C-TPAT', 'IATA Safety Standards', 'IMO 2020'],
    caseHighlight: 'Multi-modal route optimization engine re-routing 45,000 daily shipping containers worldwide.',
    recommendedSolutions: ['Global Route Telemetry', 'Autonomous Customs Clearing', 'Fleet AI Predictor']
  },
  {
    id: 'telecom',
    name: 'Telecommunications & 6G Networks',
    iconName: 'Radio',
    tagline: 'Ultra-Dense Network Slicing & Edge Compute Orchestration',
    description: 'Empowering tier-1 telecom operators with self-healing cell networks, automated bandwidth allocation, and edge compute nodes.',
    keyMetrics: [
      { label: 'Network Latency', value: '< 1.8ms' },
      { label: 'OPEX Reduction', value: '31%' }
    ],
    compliance: ['3GPP Standards', 'eSIM GSMA', 'FCC Compliance'],
    caseHighlight: 'Built national edge computing orchestrator connecting 8,500 5G tower locations.',
    recommendedSolutions: ['Dynamic Network Slicer', 'Self-Healing Cell Neural Network', 'Edge Node Orchestrator']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-global-bank',
    title: 'Sovereign AI Core for $2.4 Trillion Investment Group',
    client: 'Vanguard Global Financials',
    industry: 'Banking & Capital Markets',
    logoText: 'VANGUARD FINANCIAL',
    challenge: 'High latency in legacy settlement systems caused $40M annually in slippage and required 600 human analysts for risk verification.',
    solution: 'NEXUS deployed a Sovereign AI Financial Neural Network alongside a high-throughput Rust event broker across 4 global financial centers.',
    results: {
      throughputImprovement: '+520%',
      costReduction: '$34M / year',
      deploymentSpeed: '4.2x Faster'
    },
    beforeAfter: {
      beforeLabel: 'Legacy Clearing Time',
      beforeValue: '48 Minutes',
      afterLabel: 'NEXUS Clearing Time',
      afterValue: '120 Milliseconds'
    },
    featured: true,
    imageBg: 'from-blue-900 to-indigo-950'
  },
  {
    id: 'case-automotive',
    title: '3D Digital Twin Factory Orchestration for Global Auto Giant',
    client: 'AeroMotion Motors',
    industry: 'Smart Manufacturing',
    logoText: 'AEROMOTION',
    challenge: 'Unplanned robotic line stops led to 140 hours of lost production every quarter across 8 international plants.',
    solution: 'Engineered an interactive Three.js 3D Digital Twin and predictive IoT sensor mesh that identifies component fatigue 14 days before failure.',
    results: {
      throughputImprovement: '+28% Output',
      costReduction: '$52M Saved',
      deploymentSpeed: '9 Months'
    },
    beforeAfter: {
      beforeLabel: 'Unplanned Line Downtime',
      beforeValue: '140 Hours/Qtr',
      afterLabel: 'NEXUS Autonomous Downtime',
      afterValue: '2.5 Hours/Qtr'
    },
    featured: true,
    imageBg: 'from-cyan-950 to-slate-900'
  },
  {
    id: 'case-pharma',
    title: 'Accelerating AI Oncology Drug Discovery Pipeline',
    client: 'BioNexus Generics',
    industry: 'Healthcare & Life Sciences',
    logoText: 'BIONEXUS PHARMA',
    challenge: 'Simulating complex protein folding and clinical drug trial simulations took 18 months per compound.',
    solution: 'Constructed a custom sovereign LLM and GPU-accelerated molecular simulator on a private Kubernetes cluster.',
    results: {
      throughputImprovement: '12x Speedup',
      costReduction: '$85M R&D Cut',
      deploymentSpeed: '6 Months'
    },
    beforeAfter: {
      beforeLabel: 'Target Simulation Time',
      beforeValue: '18 Months',
      afterLabel: 'NEXUS AI Pipeline Time',
      afterValue: '3 Weeks'
    },
    featured: true,
    imageBg: 'from-purple-950 to-blue-900'
  },
  {
    id: 'case-logistics',
    title: 'Autonomous Supply Chain Routing for 12,000 Cargo Fleets',
    client: 'TransOcean Shipping Corp',
    industry: 'Global Logistics',
    logoText: 'TRANSOCEAN',
    challenge: 'Global port congestion and weather delays caused $120M in delayed container penalties and fuel waste.',
    solution: 'Implemented real-time satellite telemetry, predictive route optimization, and automated port customs documentation.',
    results: {
      throughputImprovement: '+45% Velocity',
      costReduction: '$68M Saved',
      deploymentSpeed: '8 Months'
    },
    beforeAfter: {
      beforeLabel: 'Average Port Transit Time',
      beforeValue: '11.4 Days',
      afterLabel: 'NEXUS Optimized Transit',
      afterValue: '6.1 Days'
    },
    featured: false,
    imageBg: 'from-emerald-950 to-navy-900'
  }
];

export const GLOBAL_OFFICES: GlobalOffice[] = [
  {
    id: 'hq-sf',
    city: 'San Francisco',
    country: 'United States',
    region: 'Americas',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    timezone: 'America/Los_Angeles',
    address: 'One Maritime Plaza, Suite 3400, San Francisco, CA 94111',
    phone: '+1 (415) 890-2000',
    staffCount: 1250,
    latencyMs: 12,
    isHQ: true
  },
  {
    id: 'office-ny',
    city: 'New York',
    country: 'United States',
    region: 'Americas',
    coordinates: { lat: 40.7128, lng: -74.006 },
    timezone: 'America/New_York',
    address: '7 World Trade Center, Floor 48, New York, NY 10007',
    phone: '+1 (212) 555-0190',
    staffCount: 840,
    latencyMs: 18
  },
  {
    id: 'office-london',
    city: 'London',
    country: 'United Kingdom',
    region: 'EMEA',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    timezone: 'Europe/London',
    address: '100 Bishopsgate, Level 28, London EC2N 4AG',
    phone: '+44 20 7946 0912',
    staffCount: 920,
    latencyMs: 34
  },
  {
    id: 'office-zurich',
    city: 'Zurich',
    country: 'Switzerland',
    region: 'EMEA',
    coordinates: { lat: 47.3769, lng: 8.5417 },
    timezone: 'Europe/Zurich',
    address: 'Gotthardstrasse 26, 8002 Zürich, Switzerland',
    phone: '+41 44 215 5000',
    staffCount: 510,
    latencyMs: 41
  },
  {
    id: 'office-tokyo',
    city: 'Tokyo',
    country: 'Japan',
    region: 'APAC',
    coordinates: { lat: 35.6762, lng: 139.6503 },
    timezone: 'Asia/Tokyo',
    address: 'Roppongi Hills Mori Tower, 45F, Minato City, Tokyo',
    phone: '+81 3 5555 0143',
    staffCount: 780,
    latencyMs: 82
  },
  {
    id: 'office-singapore',
    city: 'Singapore',
    country: 'Singapore',
    region: 'APAC',
    coordinates: { lat: 1.3521, lng: 103.8198 },
    timezone: 'Asia/Singapore',
    address: 'Marina Bay Financial Centre, Tower 1, Singapore 018981',
    phone: '+65 6789 0111',
    staffCount: 650,
    latencyMs: 95
  },
  {
    id: 'office-dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'EMEA',
    coordinates: { lat: 25.2048, lng: 55.2708 },
    timezone: 'Asia/Dubai',
    address: 'DIFC Gate Precinct 4, Level 6, Dubai, UAE',
    phone: '+971 4 312 4000',
    staffCount: 430,
    latencyMs: 68
  },
  {
    id: 'office-sydney',
    city: 'Sydney',
    country: 'Australia',
    region: 'APAC',
    coordinates: { lat: -33.8688, lng: 151.2093 },
    timezone: 'Australia/Sydney',
    address: '200 George Street, Level 32, Sydney NSW 2000',
    phone: '+61 2 9250 8000',
    staffCount: 390,
    latencyMs: 120
  }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: 'exec-1',
    name: 'Dr. Alexander Vance',
    role: 'Chief Executive Officer & Founder',
    division: 'Executive Management',
    bio: 'Former VP of Systems Architecture at IBM and MIT Ph.D. in Distributed Quantum Systems. Founded NEXUS in 2012 to engineer enterprise sovereign intelligence.',
    quote: 'True enterprise innovation isn’t about following technology trends—it’s about engineering resilient neural architectures that withstand decades of market shift.',
    linkedin: 'https://linkedin.com',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    achievements: ['Named Top 50 Tech CEO by Forbes', '14 Quantum Computing Patents', 'Keynote Speaker at DAVOS 2025']
  },
  {
    id: 'exec-2',
    name: 'Elena Rostova',
    role: 'Chief Technology Officer',
    division: 'Engineering & R&D',
    bio: 'Ex-Principal Systems Architect at Google Brain and DARPA fellow. Spearheads NEXUS 3D Graphics Engine, Quantum Cryptography, and Neural Core Frameworks.',
    quote: 'When you remove system latency down to single-digit milliseconds, software becomes an instant extension of human thought.',
    linkedin: 'https://linkedin.com',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    achievements: ['Creator of Sovereign Vector Mesh', 'ACM Turing Fellow Finalist', 'Pioneer in Post-Quantum Security']
  },
  {
    id: 'exec-3',
    name: 'Marcus Sterling',
    role: 'Global President & Chief Operations Officer',
    division: 'Global Delivery & Advisory',
    bio: 'Over 20 years guiding Fortune 100 enterprise transformations at McKinsey & Siemens. Oversees NEXUS global operations across 8 international offices.',
    quote: 'Flawless execution is our single currency. We measure our impact by the billions of dollars in enterprise value unlocked for our clients.',
    linkedin: 'https://linkedin.com',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    achievements: ['Led $10B+ in M&A Tech Audits', 'Board Member at Global Energy Alliance', 'Harvard Business School Alum']
  },
  {
    id: 'exec-4',
    name: 'Dr. Sarah Chen',
    role: 'Head of Enterprise AI & Neural Research',
    division: 'Artificial Intelligence',
    bio: 'Pioneer in autonomous agent alignment and multi-modal neural architectures. Published 40+ peer-reviewed papers on self-healing LLM networks.',
    quote: 'Sovereign AI guarantees that an enterprise’s proprietary knowledge remains their most protected strategic asset.',
    linkedin: 'https://linkedin.com',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    achievements: ['Stanford AI Fellow', 'Top 10 Women in AI Award 2025', 'Advisor to EU AI Ethics Council']
  }
];

export const MILESTONES: MilestoneItem[] = [
  {
    year: '2012',
    title: 'NEXUS Foundation',
    description: 'Established in San Francisco by Dr. Alexander Vance with an initial focus on distributed high-frequency financial computing.',
    metric: 'Initial Core Team',
    category: 'Founding'
  },
  {
    year: '2016',
    title: 'Sovereign Cloud Launch',
    description: 'Pioneered Zero-Trust multi-region cloud mesh for Tier-1 European and US Investment Banks.',
    metric: '$100M+ Infrastructure Managed',
    category: 'Expansion'
  },
  {
    year: '2020',
    title: 'Global Expansion & 3D Twin Engine',
    description: 'Expanded offices to Zurich, Tokyo, and London. Unveiled industrial 3D Digital Twin factory simulation engine.',
    metric: '1,000+ Enterprise Clients',
    category: 'Global'
  },
  {
    year: '2023',
    title: 'Sovereign LLM & Quantum Readiness',
    description: 'Introduced private on-premise Large Language Models and Post-Quantum Cryptography vaults for government & aerospace.',
    metric: '99.999% SLA Uptime',
    category: 'AI Breakthrough'
  },
  {
    year: '2026+',
    title: 'NEXUS Autonomous Enterprise OS',
    description: 'Unifying global supply chains, financial markets, and sovereign AI into an interconnected 3D interactive intelligence platform.',
    metric: '$42B+ Client Value Created',
    category: 'Next-Gen'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'David Harrison',
    role: 'Chief Technology Officer',
    company: 'Apex Global Capital',
    logo: 'APEX CAPITAL',
    quote: 'NEXUS completely re-architected our global trading infrastructure. Their 3D data telemetry and sub-millisecond AI clearing engine saved us over $34M in trading slippage in year one.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    impactMetric: '$34M Annual Savings'
  },
  {
    id: 'test-2',
    author: 'Sarah Lin-Vogel',
    role: 'VP of Manufacturing & Automation',
    company: 'AeroMotion Global',
    logo: 'AEROMOTION',
    quote: 'The 3D Digital Twin interface created by NEXUS gave our plant directors complete visibility across 14 factories. Unplanned line downtime dropped by 88% almost immediately.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    impactMetric: '88% Less Downtime'
  },
  {
    id: 'test-3',
    author: 'Dr. Robert Thorne',
    role: 'Head of Digital Research',
    company: 'BioNexus Therapeutics',
    logo: 'BIONEXUS',
    quote: 'Implementing NEXUS private sovereign LLM pipeline cut our oncology clinical trial modeling from 18 months down to 3 weeks. They are lightyears ahead of standard IT consultancies.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    impactMetric: '12x R&D Velocity'
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'art-1',
    title: 'The 2026 Sovereign AI Index: Securing Corporate LLMs Against Data Leakage',
    category: 'Enterprise AI Strategy',
    date: 'July 14, 2026',
    readTime: '8 min read',
    summary: 'An executive report on fine-tuning private models, air-gapped vector stores, and mathematical guardrails for Fortune 500 decision makers.',
    author: 'Dr. Sarah Chen',
    type: 'Whitepaper',
    downloadable: true
  },
  {
    id: 'art-2',
    title: 'Post-Quantum Cryptography in Financial Clearing: A Blueprint for 2027',
    category: 'Cybersecurity',
    date: 'June 28, 2026',
    readTime: '12 min read',
    summary: 'How global clearing houses are upgrading HSM infrastructure to withstand quantum lattice factorization algorithms.',
    author: 'Elena Rostova',
    type: 'Research',
    downloadable: true
  },
  {
    id: 'art-3',
    title: '3D Digital Twins in Industrial Supply Chains: Real-Time Telemetry at Scale',
    category: 'Smart Manufacturing',
    date: 'May 19, 2026',
    readTime: '6 min read',
    summary: 'Combining WebGL 3D canvases, IoT edge sensors, and predictive neural maintenance to eliminate factory bottlenecking.',
    author: 'Dr. Alexander Vance',
    type: 'Industry Insights',
    downloadable: false
  }
];

export const CAREERS_DATA: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Principal Systems Architect (Rust / WebGL / C++)',
    department: 'Core Platform Engineering',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    experience: '8+ Years',
    description: 'Architect ultra-low latency sub-millisecond graphics rendering engines and distributed streaming systems for global enterprise dashboards.',
    requirements: [
      'Expertise in WebGL, Three.js, Rust, and WebAssembly',
      'Track record building mission-critical real-time platforms',
      'Strong grasp of GPU pipeline optimization and shader GLSL'
    ]
  },
  {
    id: 'job-2',
    title: 'Senior Enterprise AI Research Engineer',
    department: 'Artificial Intelligence',
    location: 'Zurich, Switzerland or Remote',
    type: 'Full-time',
    experience: '6+ Years',
    description: 'Design sovereign RAG pipelines, multi-agent frameworks, and fine-tuning techniques for tier-1 financial and medical clients.',
    requirements: [
      'Ph.D. or Master’s in Computer Science / Machine Learning',
      'Experience with PyTorch, CUDA, Transformers, and Vector DBs',
      'Proven background in AI security guardrails'
    ]
  },
  {
    id: 'job-3',
    title: 'Managing Director - Financial Services Advisory',
    department: 'Strategic Consulting',
    location: 'New York, NY',
    type: 'Executive',
    experience: '12+ Years',
    description: 'Lead C-suite client engagements with Wall Street firms, advising on cloud migration, regulatory compliance, and AI capital allocation.',
    requirements: [
      'Extensive leadership experience at Tier-1 Strategy Consulting firm',
      'Deep network across Chief Technology Officers and Chief Risk Officers',
      'Proven track record scaling $20M+ enterprise accounts'
    ]
  }
];
