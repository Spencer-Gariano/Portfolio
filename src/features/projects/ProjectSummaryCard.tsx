import { Badge } from '@/components/ui/Badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { ProjectFooter } from './ProjectFooter';
import type { ILink } from '@/types/types';

export interface IProjectSummaryCardProps {
  title: string;
  summary: string;
  techStackTags: string[];
  highlights: string[];
  footer: string;
  link?: ILink;
}

const ProjectSummaryCard = (props: IProjectSummaryCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription className='max-w-2xl leading-relaxed'>{props.summary}</CardDescription>
      </CardHeader>
      <CardContent className='space-y-5'>
        <div className='flex flex-wrap gap-2'>
          {props.techStackTags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className='space-y-2'>
          <h3 className='text-sm font-medium'>Highlights</h3>
          <ul className='text-muted-foreground space-y-1.5 text-sm'>
            {props.highlights.map((highlight) => (
              <li className='flex gap-2' key={highlight}>
                <span className='text-foreground'>-</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className='border-t px-4 py-3'>
        <ProjectFooter type={props.footer} link={props.link} />
      </CardFooter>
    </Card>
  );
};

export { ProjectSummaryCard };
