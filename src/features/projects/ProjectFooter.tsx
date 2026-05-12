import type { ILink } from '@/types/types';
import { HighlightLink } from '../highlight-link/HighlightLink';

export interface IProjectFooterProps {
  link?: ILink;
  type: string;
}

const ProjectFooter = (props: IProjectFooterProps) => {
  return (
    <div className='flex flex-col gap-2'>
      {props.link && <HighlightLink href={props.link.href}>{props.link.title}</HighlightLink>}
      <span className={'text-muted-foreground text-xs'}>{props.type}</span>
    </div>
  );
};

export { ProjectFooter };
