import { ApproachStage, ServiceCategory, NavLink } from './types';

export const COMPANY_NAME = "Exstrat Ventures";
export const LEGAL_NAME = "Exstrat Ventures (KT0595268-K)";
export const TAGLINE = "Your Strategic Partner for Sustainable Growth.";

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Our Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

export const APPROACH_STAGES: ApproachStage[] = [
  {
    id: 1,
    title: "Assess",
    description: "Aligning business vision with actionable goals.",
    icon: "fa-magnifying-glass-chart",
    details: [
      "Ecosystem Mapping",
      "Competitive Landscape Analysis",
      "Business Profile Development",
      "Compliance Review"
    ]
  },
  {
    id: 2,
    title: "Create",
    description: "Tracking progress and forecasting growth.",
    icon: "fa-pen-ruler",
    details: [
      "Financial Forecast",
      "Budget Planning",
      "KPI Defining",
      "BI Analytics"
    ]
  },
  {
    id: 3,
    title: "Execute",
    description: "Bringing strategies to life and building workflows.",
    icon: "fa-rocket",
    details: [
      "Business Workflow",
      "Investor & Management Reporting",
      "Operation Strategies"
    ]
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'investment-management',
    title: "Category A: Investment Management",
    icon: "fa-sack-dollar",
    services: [
      {
        title: "Financial Forecasting/Modelling",
        description: "Building complete forecasts based on revenue models to achieve justifiable numbers (PnL statements)."
      },
      {
        title: "Valuation Model & Report",
        description: "Constructing fair valuation models to price the company per share."
      },
      {
        title: "Cap Table Management",
        description: "Planning fundraising rounds, dilution, and share pricing."
      }
    ]
  },
  {
    id: 'investment-relations',
    title: "Category B: Investment Relations",
    icon: "fa-handshake",
    services: [
      {
        title: "Pitch Deck Construction",
        description: "Designing better presentation flows for fundraising and stakeholder engagement."
      },
      {
        title: "Investor Reporting",
        description: "Creating dashboards for investors to view less sensitive performance data transparently."
      }
    ]
  },
  {
    id: 'internal-management',
    title: "Category C: Internal Management",
    icon: "fa-people-group",
    services: [
      {
        title: "Finance Reporting Dashboard",
        description: "Comprehensive views of sales, operations, and product development for decision-making."
      },
      {
        title: "Strategic Planning",
        description: "Analyzing market trends and tracking growth strategies."
      },
      {
        title: "Product Design & Workflow",
        description: "Analyzing user journeys and removing bottlenecks in operations."
      },
      {
        title: "Performance Reporting",
        description: "Comparing forecasted outcomes vs. actual results to identify discrepancies."
      },
      {
        title: "Task Tracking",
        description: "Facilitating weekly meetings to report progress and maintain accountability."
      }
    ]
  },
  {
    id: 'customized-solutions',
    title: "Category D: Customized Solutions",
    icon: "fa-puzzle-piece",
    services: [
      {
        title: "Specialized Requests",
        description: "Tailored solutions for specialized workforce needs or automation of repetitive operational tasks."
      }
    ]
  }
];