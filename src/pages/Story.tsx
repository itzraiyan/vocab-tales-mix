
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { stories } from '../data/stories';
import CategoryBadge from '../components/ui/CategoryBadge';
import WordTooltip from '../components/ui/WordTooltip';
import { ArrowLeft, Clock } from 'lucide-react';

const Story = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [story, setStory] = useState(stories.find(s => s.id.toString() === id));
  const [footnoteVisibility, setFootnoteVisibility] = useState<Record<string, boolean>>({});
  
  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundStory = stories.find(s => s.id.toString() === id);
    
    if (foundStory) {
      setStory(foundStory);
      // Initialize footnote visibility
      const footnotes: Record<string, boolean> = {};
      foundStory.footnotes.forEach(note => {
        footnotes[note.id] = false;
      });
      setFootnoteVisibility(footnotes);
    } else {
      // If story not found, redirect to stories page
      navigate('/stories', { replace: true });
    }
  }, [id, navigate]);
  
  if (!story) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <p>Loading story...</p>
      </div>
    );
  }
  
  const toggleFootnote = (id: string) => {
    setFootnoteVisibility(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Process content to handle mixed Bengali-English text
  const renderStoryContent = () => {
    return story.content.map((paragraph, pIndex) => {
      const processedText = paragraph.split(/(\{.*?\})/).map((part, partIndex) => {
        // Check if this part is a vocabulary word (enclosed in curly braces)
        if (part.startsWith('{') && part.endsWith('}')) {
          const wordId = part.substring(1, part.length - 1);
          const vocab = story.vocabulary.find(v => v.id === wordId);
          
          if (vocab) {
            return (
              <WordTooltip
                key={`word-${pIndex}-${partIndex}`}
                word={vocab.english}
                bengaliPronunciation={vocab.bengaliPronunciation}
                meaning={vocab.meaning}
              >
                {vocab.english}
              </WordTooltip>
            );
          }
          return part;
        }
        
        // Check if this part has a footnote reference (e.g., [1])
        const footnoteRegex = /\[(\w+)\]/g;
        let lastIndex = 0;
        const pieces = [];
        let match;
        
        // eslint-disable-next-line no-cond-assign
        while ((match = footnoteRegex.exec(part)) !== null) {
          // Add text before the footnote
          if (match.index > lastIndex) {
            pieces.push(
              <span key={`text-${pIndex}-${partIndex}-${lastIndex}`}>
                {part.substring(lastIndex, match.index)}
              </span>
            );
          }
          
          // Add footnote reference
          const footnoteId = match[1];
          pieces.push(
            <sup 
              key={`footnote-${pIndex}-${partIndex}-${lastIndex}`}
              className="inline-block text-primary cursor-pointer"
              onClick={() => toggleFootnote(footnoteId)}
            >
              [{footnoteId}]
            </sup>
          );
          
          lastIndex = match.index + match[0].length;
        }
        
        // Add remaining text
        if (lastIndex < part.length) {
          pieces.push(
            <span key={`text-${pIndex}-${partIndex}-${lastIndex}`}>
              {part.substring(lastIndex)}
            </span>
          );
        }
        
        return pieces.length > 0 ? pieces : part;
      });
      
      return (
        <p key={`paragraph-${pIndex}`} className="mb-6 leading-relaxed text-balance">
          {processedText}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link 
            to="/stories" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to stories</span>
          </Link>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <CategoryBadge category={story.category} />
            <div className="flex items-center text-muted-foreground text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>{story.readingTime} min read</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{story.title}</h1>
          <p className="text-muted-foreground text-lg mb-6">{story.description}</p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-foreground prose-headings:text-foreground">
          {renderStoryContent()}
        </div>
        
        {/* Footnotes */}
        {story.footnotes.length > 0 && (
          <div className="mt-12 pt-6 border-t border-border">
            <h2 className="text-xl font-semibold mb-4">Footnotes</h2>
            <div className="space-y-3">
              {story.footnotes.map(note => (
                <div 
                  key={note.id} 
                  className={`${
                    footnoteVisibility[note.id] ? 'bg-secondary/50' : 'bg-transparent'
                  } p-3 rounded-lg transition-colors`}
                >
                  <p className="flex">
                    <span className="font-medium text-primary mr-2">[{note.id}]</span>
                    <span>{note.text}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Vocabulary Section */}
        <div className="mt-12 pt-6 border-t border-border">
          <h2 className="text-xl font-semibold mb-4">Vocabulary List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {story.vocabulary.map(vocab => (
              <div key={vocab.id} className="glass-card p-4 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-lg">{vocab.english}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {vocab.bengaliPronunciation}
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-2">{vocab.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
