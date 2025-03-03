
import React, { useState } from 'react';
import { Copy, Volume2, X } from 'lucide-react';
import { toast } from 'sonner';

type WordTooltipProps = {
  word: string;
  bengaliPronunciation: string;
  meaning: string;
  children: React.ReactNode;
};

const WordTooltip = ({ word, bengaliPronunciation, meaning, children }: WordTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(word);
    toast.success('Word copied to clipboard!');
  };

  const speak = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    try {
      // Create and configure the utterance
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // Slightly slower than default
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      // Cancel any ongoing speech before starting new one
      window.speechSynthesis.cancel();
      
      // Speak the word
      window.speechSynthesis.speak(utterance);
      
      // Show toast confirmation
      toast.success(`Playing pronunciation for "${word}"`);
    } catch (error) {
      console.error('Speech synthesis error:', error);
      toast.error('Unable to play pronunciation');
    }
  };

  // Close when clicking outside or pressing Escape
  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isOpen && e.target instanceof Node) {
        // Close if we click outside the modal content
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <span 
        className="english-word cursor-pointer inline-block border-b border-dotted border-primary"
        onClick={() => setIsOpen(true)}
      >
        {children}
      </span>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div 
            className="bg-background w-[90%] max-w-md rounded-lg shadow-lg border border-border animate-in fade-in-0 zoom-in-95 p-5 max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">{word} <span className="text-muted-foreground">({bengaliPronunciation})</span></h3>
              <div className="flex space-x-2">
                <button 
                  onClick={speak} 
                  className="p-1.5 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Pronounce"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={copyToClipboard} 
                  className="p-1.5 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Copy"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-1.5 rounded-full bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="mt-2">
              <p className="text-foreground">{meaning}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WordTooltip;
