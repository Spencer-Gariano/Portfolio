import { ProjectSummaryCard } from '@/features/projects/ProjectSummaryCard';
import { PageHeader } from './PageHeader';
import type { IFeaturedProject, IProject } from '@/features/projects/types';
import { BriefProjectCard } from '@/features/projects/BriefProjectCard';
import { SectionTitle } from '@/features/section-title/SectionTitles';

const ProjectsPage = () => {
  const projects: IProject[] = [
    {
      title: 'Authentication Infrastructure Scaling',
      summary:
        'Helped design and implement sharding strategies for an authentication platform to improve scalability, reliability, and operational separation as system load increased.',
      techStackTags: ['Keycloak', 'Authentication', 'Infrastructure', 'Frontend Integration'],
      highlights: [
        'Worked on distributed authentication architecture',
        'Improved scalability through tenant/data partitioning',
        'Coordinated frontend contract changes',
        'Focused on reliability and predictable migration paths',
      ],
      footer: 'Professional Work',
    },
    {
      title: 'Frontend System Architecture Refactor',
      summary:
        'Refactored sections of a frontend codebase to reduce instability introduced by long-lived feature flags and divergent rendering paths.',
      techStackTags: ['LaunchDarkly', 'Maintainability', 'UI consistency', 'System complexity'],
      highlights: [
        'Simplified conditional rendering logic',
        'Improved UI consistency across features',
        'Restored predictable component behavior',
        'Improved rollout reliability',
      ],
      footer: 'Professional Work',
    },
    {
      title: 'Product UI Redesign',
      summary:
        'Redesigned the navigation flow and introduced an in-app onboarding walkthrough to improve first-time user experience and product clarity. The changes reduced friction during onboarding.',
      techStackTags: ['React', 'Typescript', 'UI/UX'],
      highlights: [
        'Simplified navigation structure to reduce user confusion',
        'Introduced guided onboarding flow for new users',
        'Improved clarity of core product paths',
      ],
      footer: 'Professional Work',
    },
    {
      title: 'Portfolio Website',
      summary:
        'Designed and built a personal portfolio to showcase engineering projects, frontend systems thinking, and UI design work. Focused on clean structure, reusable components, and consistent visual hierarchy.',
      techStackTags: ['React', 'TypeScript', 'Tailwind CSS', 'UI Design'],
      footer: 'Personal Project',
      link: { href: 'https://github.com/Spencer-Gariano/Portfolio', title: 'Github' },
    },
    {
      title: 'Sparring',
      summary:
        'Built a mobile app MVP that matches gym partners based on shared fitness goals. Focused on user onboarding, authentication flow, and location-based matching.',
      techStackTags: ['Flutter', 'Firebase', 'Location Services'],
      footer: 'Capstone Project',
    },
    {
      title: 'SubmittalXpress',
      summary:
        'Developed a web tool for construction teams to streamline document submission workflows. Included form generation, file uploads, and structured data handling for project submissions.',
      techStackTags: ['Java', 'File Uploads'],
      footer: 'Capstone Project',
      link: { href: 'https://github.com/Spencer-Gariano/SubmittalXpress', title: 'Github' },
    },
  ];

  const featuredProjects = projects.filter(
    (project): project is IFeaturedProject => !!project.highlights?.length,
  );

  const secondaryProjects = projects.filter(
    (project) => !project.highlights || project.highlights.length === 0,
  );

  return (
    <div className='space-y-8'>
      <PageHeader
        title={'Projects'}
        subtitle={'Selected projects, technical experiments, and frontend engineering work.'}
      />
      <section className='space-y-5'>
        <SectionTitle>Featured Work</SectionTitle>
        {featuredProjects.map((project) => (
          <ProjectSummaryCard {...project} key={project.title} />
        ))}
      </section>
      <section className='space-y-6'>
        <SectionTitle>Other Projects</SectionTitle>
        <div className='grid items-start gap-6 md:grid-cols-3'>
          {secondaryProjects.map((project) => (
            <BriefProjectCard {...project} key={project.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export { ProjectsPage };
