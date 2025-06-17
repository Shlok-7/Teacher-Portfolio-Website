
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, FileType, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResourceCardProps {
  title: string;
  type: 'pdf' | 'ppt' | 'link';
  url: string;
}

const ResourceCard = ({ title, type, url }: ResourceCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-10 w-10 text-primary/80" />;
      case 'ppt':
        return <FileType className="h-10 w-10 text-primary/80" />;
      case 'link':
        return <ExternalLink className="h-10 w-10 text-primary/80" />;
      default:
        return <FileText className="h-10 w-10 text-primary/80" />;
    }
  };

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-primary/20">
      <CardContent className="p-6 flex flex-col items-center h-full">
        <div className="bg-muted/50 p-3 rounded-full mb-4">
          {getIcon()}
        </div>
        <h3 className="text-lg font-medium text-center mb-4">{title}</h3>
        <div className="mt-auto w-full">
          <Button asChild variant="outline" className="w-full group">
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Download 
              <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
