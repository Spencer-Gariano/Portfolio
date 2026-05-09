import { Badge } from '@/components/ui/Badge';
import { HighlightCard } from '@/features/highlight-card/HighlightCard';
import { PageHeader } from './PageHeader';
import { ExperienceTimeline } from '@/features/timeline/ExperienceTimeline';
import type { IExperienceTimeline } from '@/features/timeline/types';

const AboutPage = () => {
  const experiences: IExperienceTimeline[] = [
    {
      company: 'Vegacloud',
      role: 'Software Engineer',
      period: 'June 2022 - June 2025',
      summary:
        'Built, shipped, and maintained scalable UI systems with a focus on frontend architecture, deployment workflows, and developer experience.',
      highlights: [
        'Developed and maintained React + TypeScript single-page applications.',
        'Contributed to cloud infrastructure and deployment workflows using AWS, Terraform, and CDK.',
        'Helped improve CI/CD pipelines with GitHub Actions to streamline releases and code quality.',
        'Collaborated in architecture and planning discussions across frontend and backend systems.',
      ],
    },
    {
      company: 'Vegacloud',
      role: 'Software Development Intern',
      period: 'June 2021 - August 2021',
      summary:
        'Contributed to frontend and backend development across internal and client-facing applications while gaining experience in full project lifecycles and collaborative engineering workflows.',
      highlights: [
        'Built internal and client-facing tools using React, TypeScript, and C#.',
        'Completed independent projects from concept to prototype with positive technical review feedback.',
        'Contributed across the software development lifecycle, including planning, testing, and deployment.',
        'Documented code and debugged application issues across frontend and backend workflows.',
      ],
    },
  ];

  return (
    <div className='space-y-8'>
      <PageHeader
        title={'About'}
        subtitle={'A bit more detail about my work, focus, and how I approach engineering.'}
      />
      <section>
        <HighlightCard
          title={'How I Think'}
          content={
            'I design components and features with predictability in mind, so that once a pattern is established in one area, it can be consistently reused across the rest of the codebase.'
          }
        />
      </section>
      <section>
        <HighlightCard
          title={'What I Build'}
          content={
            'I focus on frontend development, with enough backend experience to design interfaces that align well with system and data architecture.'
          }
        />
      </section>
      <section className='grid gap-6 md:grid-cols-2'>
        <HighlightCard
          title={'Technology Stack'}
          content={
            <div className='flex flex-wrap gap-2'>
              <Badge>React</Badge>
              <Badge>Typescript</Badge>
              <Badge>Vite</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>TanStack Router</Badge>
              <Badge>shadcn/ui</Badge>
              <Badge>Tanstack Table</Badge>
              <Badge>Tanstack Form</Badge>
            </div>
          }
        />
        <HighlightCard
          title={'Focus'}
          content={
            'I’m focused on improving how I structure frontend applications so that features remain predictable, reusable, and easy to reason about as they grow.'
          }
        />
      </section>
      <section>
        <ExperienceTimeline experiences={experiences} />
      </section>
    </div>
  );
};

export { AboutPage };
