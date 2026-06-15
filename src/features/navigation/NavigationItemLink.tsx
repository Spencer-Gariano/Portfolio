import { NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/NavigationMenu';
import { NavigationLink } from './NavigationLink';

export interface INavigationItemLinkProps {
  name: string;
  link: string;
}

const NavigationItemLink = (props: INavigationItemLinkProps) => {
  return (
    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
      <NavigationLink to={props.link}>{props.name}</NavigationLink>
    </NavigationMenuLink>
  );
};

export { NavigationItemLink };
