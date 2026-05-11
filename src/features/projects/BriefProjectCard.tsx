import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';

export interface IBriefProjectCardProps {
  title: string;
  summary: string;
  techStackTags: string[];
  footer: React.ReactNode;
}

const BriefProjectCard = (props: IBriefProjectCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-5'>
        <div>{props.summary}</div>
        <div className='flex flex-wrap gap-2'>
          {props.techStackTags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className={'border-t px-4 py-3'}>{props.footer}</CardFooter>
    </Card>
  );
};

export { BriefProjectCard };
