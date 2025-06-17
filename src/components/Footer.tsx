
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">Professor</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
             Mrs.Minal Deshmukh 
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="minal.deshmukh@viit.ac.in" 
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
             
              <a 
                href="https://www.linkedin.com/in/dr-minal-deshmukh-967b24a8/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mrs.Minal Deshmukh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
