import { Project, Service, Insight, Testimonial, TeamMember } from "./types";

export const STATS = [
  { label: "Years of Heritage", value: "75+", subtitle: "Established 1950" },
  { label: "Completed Projects", value: "520+", subtitle: "Built Across Southern Africa" },
  { label: "Metropolitan Nodes Served", value: "34", subtitle: "Strategic SADC Cities" },
  { label: "Elite Multi-Disciplinary Staff", value: "65+", subtitle: "Architects, Engineers & PMs" }
];

export const SERVICES: Service[] = [
  {
    id: "architecture",
    title: "Bespeak Architecture",
    icon: "Building",
    description: "Creating monumental structures that redefine skylines while maintaining severe spatial functionality and structural elegance.",
    details: [
      "Residential commissions of luxury tier",
      "Headquarters and commercial developments",
      "Civic, spatial and administrative centers",
      "Sustainable and responsive thermal designs"
    ],
    features: ["BIM Integration (Revit/ArchiCAD)", "Parametric Facade Systems", "Net-Zero Thermal Analysis", "LEED & Green Star Compliance"]
  },
  {
    id: "urban-design",
    title: "Urban Design & Frameworks",
    icon: "Boxes",
    description: "Designing walkable, climate-resilient cities that connect human life with structural beauty and transit networks.",
    details: [
      "Mixed-use neighborhood conceptualization",
      "Metropolitan redevelopment schemes",
      "Public pedestrian plazas and streetscapes",
      "Smart-city digital twins planning"
    ],
    features: ["Transit-Oriented Development (TOD)", "Microclimate Wind Studies", "Spatial Flow Simulation", "Public-Private Integration Proposals"]
  },
  {
    id: "interior-design",
    title: "Premium Interior Architecture",
    icon: "Layers",
    description: "Sculpting immersive private spaces, aligning high-end materiality, ambient lighting, and bespoke joinery to cultivate well-being.",
    details: [
      "Corporate workspace design with acoustic balance",
      "High-end residential interior curations",
      "Aesthetic retail prototypes",
      "Custom acoustic, custom furniture commissioning"
    ],
    features: ["Bespoke Millwork Prototyping", "Acoustic Engineering Studies", "High-End Mineral & Wood Material Sourcing", "Daylight Penetration Mapping"]
  },
  {
    id: "landscape-architecture",
    title: "Landscape Architecture",
    icon: "TreePine",
    description: "Re-integrating native vegetation and open spaces with built environments to restore localized biological balance.",
    details: [
      "Biophilic corporate recreational gardens",
      "Eco-resort master planned landscaping",
      "Constructed ecological wetlands and greywater filtration",
      "Urban green corridors"
    ],
    features: ["Indigenous Plant Sourcing", "Constructed Wetland Water Preservation", "Topographical Parallax Leveling", "Climate-Adaptive Soil Systems"]
  },
  {
    id: "project-management",
    title: "Rigorous Project Management",
    icon: "Briefcase",
    description: "Taking full lifecycle command of projects, shielding clients from risk while delivering on budget with absolute schedules.",
    details: [
      "Comprehensive cost engineering of architectural schemes",
      "Contract administration (JBCC, FIDIC, NEC3)",
      "Strict quality control and fast-track constructability review",
      "Consortium coordination"
    ],
    features: ["JBCC/FIDIC Master Advisory", "Earned Value Management (EVM)", "4D Constructability Timelining", "Aggressive Procurement Optimization"]
  },
  {
    id: "master-planning",
    title: "Master Planning & Visioning",
    icon: "Map",
    description: "Synthesizing spatial frameworks, zoning legislation, and socioeconomic data into multi-decade growth visions.",
    details: [
      "Large-scale agricultural and trade parks",
      "Prestige residential gated country estates",
      "Special Economic Zone (SEZ) frameworks",
      "Academic and healthcare megacity campuses"
    ],
    features: ["GIS Mapping & Legal Zoning", "Long-term Economic Modelling", "Socio-Spatial Demography", "Phased Asset Deployment Mapping"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj_tshwane_hq",
    title: "The Tshwane Metropolitan Pavilion",
    category: "Commercial",
    location: "Pretoria, South Africa",
    completionYear: 2021,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "A monumental civic headquarters prioritizing vertical spatial flow, parametric external sun-shading, and strict climate adaptation.",
    details: [
      "12,000 sqm of premium, self-powering office space",
      "Awarded 6-Star Green Star ratings by GBCSA",
      "Integrated water-harvesting concrete storage basins"
    ],
    stats: [
      { label: "Project Value", value: "R280M" },
      { label: "Completed Area", value: "12,000 m²" },
      { label: "Operational Carbon", value: "-12%" }
    ],
    coordinates: { x: 58, y: 72 }, // Map percentage in Southern Africa
    region: "Gauteng"
  },
  {
    id: "proj_gaborone_center",
    title: "Mukuba Mixed-Use Hub",
    category: "Urban Development",
    location: "Gaborone, Botswana",
    completionYear: 2023,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    description: "A master planned retail, residential, and transit hub creating an upscale pedestrian node connecting the old Gaborone core with modern avenues.",
    details: [
      "Integration of local clay bricks with high-performance glass",
      "Pedestrian priority transit integration",
      "Over 45,000 sqm developed across five phases"
    ],
    stats: [
      { label: "Scale", value: "45,000 m²" },
      { label: "Pedestrian Reach", value: "12k daily" },
      { label: "Economic Uplift", value: "+18%" }
    ],
    coordinates: { x: 50, y: 65 },
    region: "Botswana"
  },
  {
    id: "proj_obsidian_oasis",
    title: "The Obsidian Oasis Guesthouse",
    category: "Residential",
    location: "Windhoek, Namibia",
    completionYear: 2024,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A high-end brutalist residential estate tucked into the Khomas-Hochland ridgetops. Designed to float over dry canyons with solar microgrids.",
    details: [
      "Passive thermal cooling using heavy double-skin basalt walls",
      "Off-grid battery and borehole filtration integration",
      "Bespoke cedarwood ceiling cassettes and seamless concrete flooring"
    ],
    stats: [
      { label: "Off-Grid Score", value: "100%" },
      { label: "Bespoke Rooms", value: "8 Suite Wing" },
      { label: "Construction Speed", value: "14 months" }
    ],
    coordinates: { x: 28, y: 64 },
    region: "Namibia"
  },
  {
    id: "proj_maseru_academy",
    title: "Lesotho Highlands Wellness Sanctuary",
    category: "Healthcare",
    location: "Maseru, Lesotho",
    completionYear: 2022,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    description: "An isolated orthopedic healing sanctuary mimicking mountain rock contours. High timber glulam trusses provide severe insulation and acoustic warmth.",
    details: [
      "Sourced local mountain sandstone and natural slate tiles",
      "Extensive botanical landscape walk to accelerate healing",
      "Complete seismic balancing of architectural segments"
    ],
    stats: [
      { label: "Elevation", value: "1,600m ASL" },
      { label: "Local Sourcing", value: "78%" },
      { label: "Sanctuary Beds", value: "140 units" }
    ],
    coordinates: { x: 56, y: 82 },
    region: "Lesotho"
  },
  {
    id: "proj_cape_villa",
    title: "Atlantic Edge Villa & Gardens",
    category: "Hospitality",
    location: "Cape Town, South Africa",
    completionYear: 2020,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    description: "An ultra-luxury retreat cut directly into the granite slopes of Clifton, featuring hanging gardens, natural seawall pools, and modular layouts.",
    details: [
      "Hanging landscape terraces matching mountain biophilia",
      "Cantilevered saltwater pools and high-performance glass partitions",
      "Full home automation with dynamic sun shutters"
    ],
    stats: [
      { label: "Structural Angle", value: "34° Incline" },
      { label: "Aesthetic Core", value: "Glass & Basalt" },
      { label: "Sqm Footprint", value: "1,450 m²" }
    ],
    coordinates: { x: 38, y: 92 },
    region: "Western Cape"
  },
  {
    id: "proj_zambezi_master",
    title: "Zambezi Ecosphere Waterfront",
    category: "Urban Development",
    location: "Victoria Falls, Zimbabwe",
    completionYear: 2023,
    image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1200&q=80",
    description: "A sustainable tourism master plan and landscape architecture framework balancing dense visitor infrastructure with delicate river wetland habitats.",
    details: [
      "Zero concrete intrusion on floodplain systems",
      "Bespoke suspended wooden walkways for wildlife clearance",
      "Locally powered micro-turbines and bio-digester integration"
    ],
    stats: [
      { label: "Master Plan Scale", value: "120 Hectares" },
      { label: "Protected Coast", value: "4.2 km" },
      { label: "Tourism Beds", value: "520 beds" }
    ],
    coordinates: { x: 48, y: 45 },
    region: "Zimbabwe"
  },
  {
    id: "proj_sandton_pavilion",
    title: "The Helix Real Estate Pavilion",
    category: "Commercial",
    location: "Sandton, Johannesburg",
    completionYear: 2024,
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
    description: "An exhibition, dining, and artistic gallery featuring a dramatic central spiral of structural concrete, copper-mesh screens, and custom interior curation.",
    details: [
      "Oxidized copper self-adjusting architectural mesh facade",
      "Polished concrete interior floating stairs with hidden tension cables",
      "Direct spatial acoustics setup for high-frequency private events"
    ],
    stats: [
      { label: "Structural Span", value: "18m Column-Free" },
      { label: "Acoustics rating", value: "NRC 0.85" },
      { label: "Client Capacity", value: "350 VIPs" }
    ],
    coordinates: { x: 59, y: 74 },
    region: "Gauteng"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test_01",
    client: "Lehlohonolo Mokgatle",
    role: "Chief Development Director",
    company: "Tshwane Infrastructure Corp",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    comment: "KWPCreate transformed our public-service vision into a breathtaking, sustainable civic hub. Their multi-disciplinary management saved us millions in structural corrections by identifying BIM coordinate conflicts during early digital twin modelling. Absolute architectural mastery.",
    metric: { label: "Value Delivered", value: "R24M Saved" }
  },
  {
    id: "test_02",
    client: "Evelyn van der Merwe",
    role: "Asset Portfolio Lead",
    company: "Clifton Heights Real Estate",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    comment: "The execution of our Atlantic Edge project was flawless. Working on a 34-degree sheer slope presented severe geo-technical hazards, but KWPCreate's integrated landscape and structural engineering teams managed the site perfectly. Their Apple-level spatial detailing is unmatched.",
    metric: { label: "Satisfaction Rate", value: "100%" }
  },
  {
    id: "test_03",
    client: "Tariq Chiluba",
    role: "Sovereign Master Planner Envoy",
    company: "SADC Economic Zones Advisory",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    comment: "KWPCreate's 75-year depth of regional Southern African architectural trends is incredibly valuable. They navigated complex zoning legislations, native conservation directives, and socioeconomic matrices flawlessly to draft our Zambezi ecosphere. Outstanding foresight.",
    metric: { label: "Project Phase Accuracy", value: "On Time" }
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: "article_01",
    title: "Brutalist Adaptation: Designing for Thermal Extremes in Southern Africa",
    category: "Sustainability",
    summary: "How modern high-performance concrete combined with basaltic layering helps maintain ideal indoor temperatures without active air system dependency.",
    author: {
      name: "Dr. Thabo Khumalo",
      role: "Partner & Sustainability Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    readTime: "6 min read",
    date: "May 28, 2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    content: "The climate dynamics of Southern Africa demand robust thermal responses. In the arid highlands of Windhoek, we observe midday temperature swings of up to 25°C. Conventional glass-heavy facades rely on continuous air cooling systems, raising operating carbon footprints drastically. By embracing double-skin masonry layouts, basalt insulated panels, and strategic ventilation ducts, we capture cool night air within localized floor mass, radiating standard cooling during hot midday sequences. This biophilic approach is the future of resilient infrastructure."
  },
  {
    id: "article_02",
    title: "Walkable Gautransit Nodes: Solving Density in the Pretoria-Johannesburg Corridor",
    category: "Urban Planning",
    summary: "Redesigned hubs that decouple commuting congestion, utilizing pedestrian grids and integrated rail-terminal master plans.",
    author: {
      name: "Sarah Jenkins",
      role: "Director of Urban Design",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
    },
    readTime: "8 min read",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    content: "Rapid metropolitan densification within Gauteng has outpaced classic highway networks. The answer lies not in lane-widening but in transit-oriented development (TOD). Designing high-density residential towers directly adjacent to Gautrain rail terminals combined with central landscaped open parks coordinates pedestrian flow cleanly. Removing private vehicles from our immediate civic plazas returns land to native landscape structures and small-scale commercial activities, developing thriving local micro-economies."
  },
  {
    id: "article_03",
    title: "The Emotional Resonance of Copper: Materiality in Immersive Interiors",
    category: "Interior Design",
    summary: "Exploring how natural oxidation and architectural mesh manipulate spatial acoustics and mood in high-end projects.",
    author: {
      name: "Jean-Pierre Rossouw",
      role: "Head of Interior Architecture",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80"
    },
    readTime: "5 min read",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80",
    content: "Materials speak a language. In our Sandton real-estate pavilion, we introduced mesh grids composed of untreated copper. Over months of exposure to Gauteng breezes, the metal transforms, building dark, earthy undertones and rich verde patinas. Indoors, this metal screens light dynamically, generating dynamic shadows that evolve during solar sweeps. Paired with heavy, sound-absorbing concrete and soft timber ceiling slats, we evoke a sanctuary-like quietness that shields users from the bustling streetscape."
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "team_01",
    name: "Johannes van Wyk, Pr. Arch",
    role: "Principal Director / Senior Partner",
    specialty: "Brutalist Adaptations & Institutional Commissions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500&q=80",
    bio: "With over 35 years directing flagship commissions, Johannes coordinates major structural projects, ensuring flawless compliance and severe engineering precision across SADC.",
    experience: "35 Years Practice (SACAP, South African Institute of Architects)"
  },
  {
    id: "team_02",
    name: "Dr. Kitso Siboniso",
    role: "Director of Landscape & Biophilia",
    specialty: "Constructed Wetlands & Arid Urban Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80",
    bio: "Kitso focuses on reconciling high density city blocks with green open space networks, ensuring indigenous plant integration and constructed wetland performance.",
    experience: "22 Years Practice"
  },
  {
    id: "team_03",
    name: "Eléna Petrovic, AIA",
    role: "Director of Modern Interiors",
    specialty: "High-End Corporate Workspace & Bespoke Acoustic Joinery",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80",
    bio: "Eléna implements precise, Apple-inspired corporate workspaces with seamless layouts, high-end organic mineral panels, and custom furniture setups.",
    experience: "18 Years Practice"
  }
];
