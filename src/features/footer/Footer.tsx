const Footer = () => {
  return (
    <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-4'>
      {/* Identity */}
      <p className='text-muted-foreground text-sm'>Spencer Gariano</p>
      {/* Links */}
      <div className='text-muted-foreground flex items-center gap-6 text-sm'>
        <a href='mailto:srgariano@gmail.com'>Email</a>
        <a href='https://github.com/Spencer-Gariano' target='_blank' rel='noreferrer'>
          GitHub
        </a>
        <a href='https://linkedin.com/in/spencer-gariano-sde' target='_blank' rel='noreferrer'>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export { Footer };
