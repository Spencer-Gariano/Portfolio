import type { PropsWithChildren } from 'react';

export interface ISectionTitleProps extends PropsWithChildren {}

const SectionTitle = (props: ISectionTitleProps) => {
  return <h2 className='text-muted-foreground text-sm font-medium'>{props.children}</h2>;
};

export { SectionTitle };
