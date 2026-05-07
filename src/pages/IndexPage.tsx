import { HighlightCard } from '@/features/highlight-card/HighlightCard';

//Used below to assign this to the index route
const IndexPage = () => {
  return (
    //Home page
    <div className='space-y-8'>
      {/* Intro section for home page */}
      <section className='space-y-3'>
        <h1 className='text-4xl font-bold'>Spencer Gariano</h1>
        <p className='text-muted-foreground text-lg'>
          Software Engineer focused on building modern web applications.
        </p>
      </section>

      {/*
        Section for quicklights of different projects.
        Will probably include some details about this portfolio website as well as a future project idea 
      */}
      <section className='grid gap-6 md:grid-cols-2'>
        <HighlightCard
          title={'TanStack Table Playground'}
          content={
            'Interactive data grid exploring sorting, filtering, and column state management, with data sourced from a backend API and NoSQL database to simulate real-world server-driven table behavior.'
          }
        />
        <HighlightCard
          title={'Engineering Highlights'}
          content={`Refactored a production UI codebase to resolve systemic rendering bugs introduced by feature flags and improve component architecture. 
            Contributed to scaling authentication systems through sharding strategies in a distributed backend environment.`}
        />
        <HighlightCard
          title='Portfolio Architecture'
          content='Focused on frontend architecture, routing structure, layout composition, and reusable UI patterns. Built using React, TanStack Router, Tailwind CSS, and shadcn/ui to explore scalable design systems.'
        />
        <HighlightCard
          title={'Future Exploration'}
          content={
            'Exploring game development with S&box, a C# engine built on Source 2 systems with fast hot-reload and real-time rendering, physics, and audio pipelines.'
          }
        />
      </section>

      {/* Section for closing statement, will probably include a footer with this info as well */}
      <section className='space-y-2'>
        <h2 className='text-xl font-semibold'>Let’s connect</h2>
        <p className='text-muted-foreground text-sm'>
          Open to engineering roles and collaboration.
        </p>

        <div className='flex gap-4 text-sm'>
          <a href='mailto:srgariano@gmail.com'>Email</a>
          <a href='https://github.com/Spencer-Gariano' target='_blank' rel='noreferrer'>
            GitHub
          </a>
          <a href='https://linkedin.com/in/spencer-gariano-sde' target='_blank' rel='noreferrer'>
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export { IndexPage };
