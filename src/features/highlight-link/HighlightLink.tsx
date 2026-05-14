import type { PropsWithChildren } from 'react';

export interface IHighlightlinkProps extends PropsWithChildren {
  href: string;
  newTab?: boolean;
}

/**
 * Used for external links that have styling to underline on hover and optionally open in new tab
 *
 * @param props - Props for HighlightLink
 */
const HighlightLink = (props: IHighlightlinkProps) => {
  return (
    <a
      className={
        'no-underline decoration-transparent transition hover:underline hover:decoration-current'
      }
      href={props.href}
      target={props.newTab ? '_blank' : undefined}
      rel={props.newTab ? 'noreferrer' : undefined}
    >
      {props.children}
    </a>
  );
};

export { HighlightLink };
