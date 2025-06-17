
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">About Me</h1>
        
        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">My Background</h2>
              <p className="text-muted-foreground mb-4">
                With over 18 years of teaching experience and 2 years in the industry, I have cultivated a deep understanding of electronics and communication engineering, with expertise in signal and image processing, VLSI design, and machine learning. I hold an M.E. in E&TC and am currently pursuing my Ph.D. in the VLSI domain. I am working as an Assistant Professor in the Electronics and Telecommunication Department at VIIT, Pune.


              </p>
              <p className="text-muted-foreground">
                In addition to teaching, I have co-authored research papers in the areas of medical image classification and neural networks and hold two patents, including one for an Automated Mask Detection and Thermal Screening System to help prevent the spread of COVID-19. I have also mentored over 20 undergraduate and 2 postgraduate research projects.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Teaching Philosophy</h2>
              <p className="text-muted-foreground mb-4">
                I believe in a practical, hands-on approach to teaching engineering concepts. My classes are designed to bridge the gap between theory and real-world applications, helping students build confidence in solving complex technical problems. I regularly incorporate latest tools, simulation software, and real-time datasets into my teaching.

                
              </p>
              <p className="text-muted-foreground">
                Creating an interactive and inclusive learning environment is a priority for me. I encourage students to ask questions, challenge ideas, and explore beyond the textbook. My aim is to shape not just engineers, but future innovators and problem-solvers.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Research Interests</h2>
              <p className="text-muted-foreground">
                 My current research interests include VLSI system design, signal processing, medical image analysis, and machine learning applications in healthcare. I have presented papers in national-level conferences, including work on brain tumor detection using MRF and arrhythmia classification using probabilistic neural networks.

                With a strong inclination toward research-driven teaching, I strive to merge my academic insights with real-world challenges to make learning both relevant and impactful.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
