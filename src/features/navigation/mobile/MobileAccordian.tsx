import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordian';
import type { INavigationItem } from '../types';
import { NavigationLink } from '../NavigationLink';
import clsx from 'clsx';
import { useIsNavigationItemActive } from '../hooks/UseIsNavigationItemActive';

export interface IMobileAccordianProps {
  navigationItem: INavigationItem;
  onClick: () => void;
}

const MobileAccordian = (props: IMobileAccordianProps) => {
  const isActiveSection = useIsNavigationItemActive(props.navigationItem);

  return (
    <AccordionItem
      key={props.navigationItem.label}
      value={props.navigationItem.label}
      className='border-b'
    >
      <AccordionTrigger
        className={clsx(
          'text-muted-foreground hover:text-foreground px-3 py-2 text-sm transition hover:no-underline',
          isActiveSection && 'text-foreground',
        )}
      >
        {props.navigationItem.label}
      </AccordionTrigger>
      <AccordionContent className='[&_a]:no-underline'>
        <div className='flex flex-col gap-1 pb-2 pl-4'>
          {props.navigationItem.children?.map((child) => (
            <NavigationLink
              key={child.to}
              to={child.to!}
              onClick={props.onClick}
              className='text-muted-foreground hover:text-foreground rounded-md py-2 text-sm transition-colors'
            >
              {child.label}
            </NavigationLink>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export { MobileAccordian };
