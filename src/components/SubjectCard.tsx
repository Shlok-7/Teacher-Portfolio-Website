
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface SubjectCardProps {
  title: string;
  description: string;
  slug: string;
  icon?: React.ReactNode;
  isHovered?: boolean;
}

const SubjectCard = ({ title, description, slug, icon, isHovered = false }: SubjectCardProps) => {
  return (
    <Card className={`h-full transition-all duration-300 ${
      isHovered ? 'shadow-lg border-primary/20' : 'shadow-sm'
    }`}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex flex-col items-center mb-4">
          {icon}
          <h3 className="text-xl font-semibold text-center">{title}</h3>
        </div>
        <p className="text-muted-foreground text-center mb-6 flex-grow">{description}</p>
        <Button asChild variant="outline" className="w-full mt-auto">
          <Link to={`/subject/${slug}`} className="flex items-center justify-center">
            View Resources
            <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${
              isHovered ? 'transform translate-x-1' : ''
            }`} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
