export interface IProjectFooterProps {
  link?: string;
  title?: string;
  type: string;
}

const ProjectFooter = (props: IProjectFooterProps) => {
  return (
    <div className='flex flex-col gap-2'>
      {props.link && props.title && (
        <a
          className='no-underline decoration-transparent transition hover:underline hover:decoration-current'
          href={props.link}
          target='_blank'
          rel='noreferrer'
        >
          {props.title}
        </a>
      )}
      <span className={'text-muted-foreground text-xs'}>{props.type}</span>
    </div>
  );
};

export { ProjectFooter };
