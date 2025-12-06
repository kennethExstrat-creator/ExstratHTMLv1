export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  services: ServiceItem[];
}

export interface ApproachStage {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface NavLink {
  label: string;
  href: string;
}