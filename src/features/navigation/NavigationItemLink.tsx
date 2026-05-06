import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu';
import { Link } from '@tanstack/react-router';

export interface INavigationItemLinkProps {
  name: string;
  link: string;
}

const NavigationItemLink = (props: INavigationItemLinkProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link to={props.link}>{props.name}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export { NavigationItemLink };
