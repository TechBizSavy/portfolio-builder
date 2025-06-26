// types/portfolio.ts

export interface PortfolioData {
  name: string;
  email: string;
  title: string;
  bio: string;
  techStack: string[];
  projects: {
    title: string;
    description: string;
    link?: string;
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
}
