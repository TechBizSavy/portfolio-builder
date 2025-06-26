// types/portfolio.ts
export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  techStack: string;
  resumeUrl?: string;
  email?: string;
  projects: Array<{
    title: string;
    description: string;
    githubUrl?: string;
    liveUrl?: string;
  }>;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

// Raw data structure that might come from localStorage or API
export interface RawPortfolioData {
  [key: string]: any;
  projects?: Array<{
    name?: string;
    title?: string;
    description: string;
    link?: string;
    githubUrl?: string;
    liveUrl?: string;
  }>;
}