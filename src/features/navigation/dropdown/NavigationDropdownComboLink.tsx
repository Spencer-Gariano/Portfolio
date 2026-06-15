import { NavigationMenuTrigger } from '@/components/ui/NavigationMenu';
import { NavigationItemLink } from '../NavigationItemLink';
import type { INavigationItem } from '../Types';
import { useIsNavigationItemActive } from '../hooks/UseIsNavigationItemActive';
import clsx from 'clsx';
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/ButtonGroup';

export interface INavigationDropdownComboLinkProps {
  navigationItem: INavigationItem;
}

const NavigationDropdownComboLink = (props: INavigationDropdownComboLinkProps) => {
  const isActiveSection = useIsNavigationItemActive(props.navigationItem);

  return (
    <ButtonGroup className={'flex items-center'}>
      <NavigationItemLink name={props.navigationItem.label} link={props.navigationItem.to!} />
      <ButtonGroupSeparator />
      <NavigationMenuTrigger
        className={clsx(
          'text-muted-foreground hover:bg-muted data-[state=open]:bg-muted h-9 min-w-0 px-2 py-0 rounded-md',
          isActiveSection && 'text-foreground',
        )}
        aria-label={`Dropdown button for ${props.navigationItem.label} sub menu`}
      />
    </ButtonGroup>
  );
};

export { NavigationDropdownComboLink };
