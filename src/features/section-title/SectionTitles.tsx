import type { PropsWithChildren } from 'react';

const SectionTitle = (props: PropsWithChildren) => {
  return <h2 className='text-muted-foreground text-sm font-medium'>{props.children}</h2>;
};

export { SectionTitle };
