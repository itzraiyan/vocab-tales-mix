
import React from 'react';
import { Link } from 'react-router-dom';
import { stories } from '../data/stories';
import StoryCard from '../components/ui/StoryCard';
import CategoryBadge from '../components/ui/CategoryBadge';
import { ArrowRight, BookOpen, BookOpenCheck, Languages } from 'lucide-react';

const Index = () => {
  // Get a list of unique categories
  const categories = Array.from(new Set(stories.map(story => story.category)));
  
  // Featured stories - take the first 3
  const featuredStories = stories.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Learn English Through
              <span className="text-highlight ml-2">Bengali-English</span>
              <span className="block mt-2">Mixed Stories</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mx-auto max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Enhance your vocabulary with our collection of engaging stories that blend Bengali and 
              English, making language learning fun and effective.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/stories"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all group"
              >
                <span>Explore Stories</span>
                <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/50 dark:bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">How VocabTales Makes Learning Easy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl text-center flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Contextual Learning</h3>
              <p className="text-muted-foreground">Learn words in the context of engaging stories, making it easier to remember and understand their usage.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Languages className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Bengali-English Mix</h3>
              <p className="text-muted-foreground">Stories combine both languages, helping you transition smoothly from Bengali to English vocabulary.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpenCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Interactive Tools</h3>
              <p className="text-muted-foreground">Hover over words to see meanings, hear pronunciations, and copy vocabulary for later review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">Featured Stories</h2>
              <p className="text-muted-foreground">Dive into our most popular language learning stories</p>
            </div>
            <Link 
              to="/stories" 
              className="text-primary mt-4 md:mt-0 hover:text-primary/80 inline-flex items-center group"
            >
              <span>View all stories</span>
              <ArrowRight className="ml-1 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStories.map((story, index) => (
              <StoryCard key={story.id} story={story} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-secondary/50 dark:bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Browse by Category</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <CategoryBadge 
                key={category} 
                category={category} 
                className="text-sm px-4 py-2"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
