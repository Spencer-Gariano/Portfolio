import { HighlightLink } from '../highlight-link/HighlightLink';

const Footer = () => {
  return (
    <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-4'>
      {/* Identity */}
      <p className='text-muted-foreground text-sm'>Spencer Gariano</p>
      {/* Links */}
      <div className='text-muted-foreground flex items-center gap-6 text-sm'>
        <HighlightLink href={'mailto:srgariano@gmail.com'}>Email</HighlightLink>
        <HighlightLink href={'https://github.com/Spencer-Gariano'} newTab>
          Github
        </HighlightLink>
        <HighlightLink href={'https://linkedin.com/in/spencer-gariano-sde'} newTab>
          LinkedIn
        </HighlightLink>
      </div>
    </div>
  );
};

export { Footer };
