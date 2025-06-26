export interface PortfolioData {
  name: string; // ✅ Add this
  title: string;
  bio: string;
  techStack: string;
  projects: {
    name: string;
    description: string;
    link: string;
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
}
