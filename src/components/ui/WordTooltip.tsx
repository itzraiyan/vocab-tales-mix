
import React, { useState, useRef, useEffect } from 'react';
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
  const modalRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Create a formatted text to copy
    const textToCopy = `${word} (${bengaliPronunciation})\n${meaning}`;
    
    navigator.clipboard.writeText(textToCopy);
    toast.success('Word information copied to clipboard!');
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
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        // Close animation
        if (modalRef.current) {
          modalRef.current.classList.remove('animate-in', 'fade-in-0', 'zoom-in-95');
          modalRef.current.classList.add('animate-out', 'fade-out-0', 'zoom-out-95');
          
          // Wait for animation to finish before closing
          setTimeout(() => {
            setIsOpen(false);
          }, 200); // Match animation duration
        }
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        // Close animation
        if (modalRef.current) {
          modalRef.current.classList.remove('animate-in', 'fade-in-0', 'zoom-in-95');
          modalRef.current.classList.add('animate-out', 'fade-out-0', 'zoom-out-95');
          
          // Wait for animation to finish before closing
          setTimeout(() => {
            setIsOpen(false);
          }, 200); // Match animation duration
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Close animation
    if (modalRef.current) {
      modalRef.current.classList.remove('animate-in', 'fade-in-0', 'zoom-in-95');
      modalRef.current.classList.add('animate-out', 'fade-out-0', 'zoom-out-95');
      
      // Wait for animation to finish before closing
      setTimeout(() => {
        setIsOpen(false);
      }, 200); // Match animation duration
    }
  };

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
            ref={modalRef}
            className="bg-background w-[90%] max-w-md rounded-lg shadow-lg border border-border animate-in fade-in-0 zoom-in-95 p-5 max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg flex items-center">
                <span>{word}</span>
              </h3>
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
                  onClick={handleCloseClick} 
                  className="p-1.5 rounded-full bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="mt-2 space-y-2">
              {/* Transliteration */}
              <p className="text-foreground">
                <span className="text-muted-foreground text-sm">Transliteration: </span>
                <span className="font-medium">{bengaliPronunciation}</span>
              </p>
              
              {/* Translation */}
              <p className="text-foreground">
                <span className="text-muted-foreground text-sm">Translation: </span>
                <span className="font-medium">{meaning}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WordTooltip;
