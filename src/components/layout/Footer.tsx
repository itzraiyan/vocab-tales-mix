
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, BookOpen, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary/50 dark:bg-secondary/30 border-t border-border py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                VocabTales
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Learn English vocabulary through engaging Bengali-English mixed stories.
              Enhance your language skills in a fun and interactive way.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-foreground text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/stories" className="text-muted-foreground hover:text-foreground text-sm">
                    Stories
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/stories?category=adventure" className="text-muted-foreground hover:text-foreground text-sm">
                    Adventure
                  </Link>
                </li>
                <li>
                  <Link to="/stories?category=wisdom" className="text-muted-foreground hover:text-foreground text-sm">
                    Wisdom
                  </Link>
                </li>
                <li>
                  <Link to="/stories?category=mystery" className="text-muted-foreground hover:text-foreground text-sm">
                    Mystery
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-foreground text-sm inline-flex items-center gap-1">
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} VocabTales. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0 flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-500" /> for language learners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
