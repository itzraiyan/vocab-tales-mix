
import React, { useState, useRef, useEffect } from 'react';
import { Copy, Volume2 } from 'lucide-react';
import { toast } from 'sonner';

type WordTooltipProps = {
  word: string;
  bengaliPronunciation: string;
  meaning: string;
  children: React.ReactNode;
};

const WordTooltip = ({ word, bengaliPronunciation, meaning, children }: WordTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const tooltipContentRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(word);
    toast.success('Word copied to clipboard!');
  };

  const speak = (e: React.MouseEvent) => {
    e.stopPropagation();
    
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
  };

  // Position the tooltip in the center of the screen
  useEffect(() => {
    if (!isOpen || !tooltipContentRef.current) return;
    
    const tooltipEl = tooltipContentRef.current;
    
    // Center the tooltip in the viewport
    tooltipEl.style.left = '50%';
    tooltipEl.style.top = '50%';
    tooltipEl.style.transform = 'translate(-50%, -50%)';
    
    // Make sure the arrow is not visible when centered
    const arrow = tooltipEl.querySelector('.tooltip-arrow') as HTMLElement;
    if (arrow) {
      arrow.style.display = 'none';
    }
  }, [isOpen]);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="inline-block relative" ref={tooltipRef}>
      <span 
        ref={wordRef}
        className="english-word"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        {children}
      </span>
      
      {isOpen && (
        <div 
          ref={tooltipContentRef}
          className="tooltip-content fixed z-50 w-80 max-w-[90vw] bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-border p-4 animate-scale-in"
          style={{ 
            maxHeight: '80vh',
            overflowY: 'auto'
          }}
        >
          <div className="tooltip-arrow absolute -top-2 w-4 h-4 rotate-45 bg-white dark:bg-gray-900 border-t border-l border-border"></div>
          
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">{word}</h3>
            <div className="flex space-x-1">
              <button 
                onClick={speak} 
                className="p-1.5 text-xs rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Pronounce"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={copyToClipboard} 
                className="p-1.5 text-xs rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Copy"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground mb-2">
            <span className="font-medium">Pronunciation:</span> {bengaliPronunciation}
          </div>
          
          <div className="text-sm border-t border-border pt-2">
            <p>{meaning}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordTooltip;
