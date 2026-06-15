import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export interface IHighlightCardProps {
  title: string;
  content: React.ReactNode;
}

const HighlightCard = (props: IHighlightCardProps) => {
  return (
    <Card className='rounded-xl border'>
      <CardHeader>
        <CardTitle className='font-semibold'>{props.title}</CardTitle>
      </CardHeader>
      <CardContent className='text-muted-foreground text-sm'>{props.content}</CardContent>
    </Card>
  );
};

export { HighlightCard };
