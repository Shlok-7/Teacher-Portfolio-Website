
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ResourceCard from '@/components/ResourceCard';
import { getSubjectBySlug } from '@/data/subjects';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Book, FileText, Code } from 'lucide-react';

const SubjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const subject = slug ? getSubjectBySlug(slug) : undefined;
  
  const subjectIcons = {
    'operating-system': <FileText className="h-10 w-10 text-primary" />,
    'software-engineering': <Code className="h-10 w-10 text-primary" />,
    'object-oriented-programming': <Book className="h-10 w-10 text-primary" />,
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!subject) {
    return (
      <Layout>
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Subject not found</h1>
          <p className="mb-8 text-muted-foreground">The subject you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <Button asChild variant="outline" size="sm" className="group">
            <Link to="/" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
        </div>
        
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
            {slug && subjectIcons[slug as keyof typeof subjectIcons]}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{subject.title}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subject.description}</p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Course Overview</h2>
          <p className="text-muted-foreground mb-4">
            This course provides a comprehensive introduction to {subject.title}. 
            You'll learn both theoretical concepts and practical applications through 
            a combination of lectures, readings, and hands-on projects.
          </p>
          <p className="text-muted-foreground">
            The resources below include lecture notes, presentations, and supplementary 
            materials that will help you master the essential concepts of this subject.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subject.resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                type={resource.type as 'pdf' | 'ppt' | 'link'}
                url={resource.url}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubjectPage;
