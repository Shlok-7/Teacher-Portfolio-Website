
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Me</h1>
        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-md mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">minal.deshmukh@viit.ac.in</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">+ 91 9850035005</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground">
                    Department of Electronics and Telecommnuication<br />
                    Vishwakarma Institute of Information Technology, Building C<br />
                    Survey No. 3/4, Kondhwa Budruk<br />
                    Pune,411048
                  </span>
                </div>
                
                
                
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a href="https://www.linkedin.com/in/dr-minal-deshmukh-967b24a8/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/minaldeshmukh
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
              <p className="text-muted-foreground mb-4">
                I'm available for student consultations during the following hours:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="font-medium">Monday</p>
                  <p className="text-muted-foreground">10:00 AM - 4:00 PM</p>
                </div>
                
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="font-medium">Wednesday</p>
                  <p className="text-muted-foreground">10:00 PM - 4:00 PM</p>
                </div>
                
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="font-medium">Thursday</p>
                  <p className="text-muted-foreground">10:00 PM - 4:00 PM</p>
                </div>
                
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="font-medium">Friday</p>
                  <p className="text-muted-foreground">10:00 PM - 4:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
