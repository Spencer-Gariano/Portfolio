import { Card } from '@/components/ui/card';

export interface IHighlightCardProps {
  title: string;
  content: string;
}

const HighlightCard = (props: IHighlightCardProps) => {
  return (
    <Card className='rounded-xl border p-6'>
      <h2 className='mb-2 font-semibold'>{props.title}</h2>
      <p className='text-muted-foreground text-sm'>{props.content}</p>
    </Card>
  );
};

export { HighlightCard };
