import type { ILink } from '@/types/types';

export interface IProject {
  title: string;
  summary: string;
  techStackTags: string[];
  highlights?: string[];
  footer: string;
  link?: ILink;
}

export interface IFeaturedProject extends IProject {
  highlights: string[];
}
