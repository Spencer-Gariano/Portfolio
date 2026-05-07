import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu';
import { NavigationLink } from './NavigationLink';

export interface INavigationItemLinkProps {
  name: string;
  link: string;
}

const NavigationItemLink = (props: INavigationItemLinkProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <NavigationLink to={props.link}>{props.name}</NavigationLink>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export { NavigationItemLink };
