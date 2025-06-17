
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SubjectCard from '@/components/SubjectCard';
import { subjects } from '@/data/subjects';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Code, Book } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [hoveredSubject, setHoveredSubject] = useState<string | null>(null);

  const subjectIcons = {
    'operating-system': <FileText className="h-10 w-10 mb-2 text-primary/80" />,
    'software-engineering': <Code className="h-10 w-10 mb-2 text-primary/80" />,
    'object-oriented-programming': <Book className="h-10 w-10 mb-2 text-primary/80" />,
  };

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 py-16 md:py-24">
          <div className="md:w-1/3 flex justify-center">
            <Avatar className="h-48 w-48 md:h-56 md:w-56 border-4 border-card shadow-xl transition-transform duration-300 hover:scale-105">
              <AvatarImage 
                src="/photo.png" 
                alt="Professor"
                className="object-cover"
              />
              <AvatarFallback className="bg-primary/10 text-primary text-3xl">JP</AvatarFallback>
            </Avatar>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Mrs. Minal Deshmukh
            </h1>
            <p className="text-xl text-primary mb-6">
              Assistant Professor at E & TC.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
             With over 18 years of teaching experience and 2 years in industry, I bring a rich blend of academic and practical knowledge to the classroom. I currently serve as an Assistant Professor in the E&TC Department at VIIT, Pune, where I specialize in Signal and Image Processing, VLSI, and Machine Learning. My academic background includes an M.E. in Electronics and Telecommunication and I am currently pursuing a Ph.D. in the VLSI domain.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">What I Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-muted/30 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Book className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-4">Expert Teaching</h3>
                <p className="mt-2 text-muted-foreground">
                  Courses designed with a perfect balance of theory and practical applications
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-muted/30 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-4">Quality Resources</h3>
                <p className="mt-2 text-muted-foreground">
                  Comprehensive study materials and resources to support your learning journey
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-muted/30 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-4">Practical Projects</h3>
                <p className="mt-2 text-muted-foreground">
                  Hands-on projects that reinforce concepts and build real-world skills
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="py-16 bg-muted/30 -mx-4 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Subjects I Teach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subjects.map((subject) => (
                <div 
                  key={subject.id} 
                  className="transform transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setHoveredSubject(subject.slug)}
                  onMouseLeave={() => setHoveredSubject(null)}
                >
                  <SubjectCard
                    title={subject.title}
                    description={subject.description}
                    slug={subject.slug}
                    icon={subjectIcons[subject.slug as keyof typeof subjectIcons]}
                    isHovered={hoveredSubject === subject.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore my subjects and access a wealth of educational resources to enhance your understanding of computer science concepts.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
