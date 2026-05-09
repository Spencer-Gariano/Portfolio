export interface IPageHeaderProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

const PageHeader = (props: IPageHeaderProps) => {
  return (
    <section className='space-y-3'>
      <h1 className='text-3xl font-semibold'>{props.title}</h1>
      <p className='text-muted-foreground max-w-2xl text-base'>{props.subtitle}</p>
    </section>
  );
};

export { PageHeader };
