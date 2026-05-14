import type { IExperienceTimeline } from './Types';

export interface IExperienceTimelineProps {
  experiences: IExperienceTimeline[];
}

const ExperienceTimeline = (props: IExperienceTimelineProps) => {
  return (
    <div className='border-border relative space-y-10 border-l'>
      {props.experiences.map((exp) => (
        <div key={`${exp.company}-${exp.role}`} className='relative'>
          {/* Dot */}
          <div className='bg-primary absolute top-2 left-0 h-4 w-4 -translate-x-1/2 rounded-full' />

          {/* Card */}
          <div className='bg-muted/20 space-y-2 rounded-xl p-5'>
            <div>
              <h3 className='font-semibold'>{exp.role}</h3>
              <p className='text-muted-foreground text-sm'>
                {exp.company} · {exp.period}
              </p>
            </div>
            <p className='text-muted-foreground text-sm'>{exp.summary}</p>
            {exp.highlights && (
              <ul className='text-muted-foreground list-disc space-y-1 pl-5 text-sm'>
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export { ExperienceTimeline };
