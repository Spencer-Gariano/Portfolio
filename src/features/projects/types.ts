export interface IProjectSummary {
  title: string;
  summary: string;
  techStackTags: string[];
  highlights: string[];
  footer: string;
}

export interface IBriefProject {
  title: string;
  summary: string;
  techStackTags: string[];
  footer: React.ReactNode;
}
