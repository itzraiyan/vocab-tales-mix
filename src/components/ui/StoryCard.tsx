
import React from 'react';
import { Link } from 'react-router-dom';
import CategoryBadge from './CategoryBadge';
import { Clock, BookOpen } from 'lucide-react';
import { Story } from '../../data/stories';

type StoryCardProps = {
  story: Story;
  index: number;
};

const StoryCard = ({ story, index }: StoryCardProps) => {
  const { id, title, description, category, readingTime } = story;

  // Calculate delay for staggered animation
  const delay = `${index * 0.1}s`;

  return (
    <div 
      className="glass-card p-6 rounded-2xl h-full transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
      style={{ animationDelay: delay, animation: 'fade-in 0.5s ease-out both' }}
    >
      <Link to={`/story/${id}`} className="flex flex-col h-full relative">
        <div className="flex justify-between items-start mb-4">
          <CategoryBadge category={category} />
          <div className="flex items-center text-muted-foreground text-xs">
            <Clock className="w-3.5 h-3.5 mr-1" />
            <span>{readingTime} min read</span>
          </div>
        </div>
        
        <h3 className="text-xl font-medium mb-2 text-balance">{title}</h3>
        
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        
        <div className="inline-flex items-center mt-auto text-primary text-sm font-medium transition-all group">
          <span>Read story</span>
          <BookOpen className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:ml-2" />
        </div>
      </Link>
    </div>
  );
};

export default StoryCard;
