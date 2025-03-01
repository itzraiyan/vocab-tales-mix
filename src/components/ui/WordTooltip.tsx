
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

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(word);
    toast.success('Word copied to clipboard!');
  };

  const speak = (e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  // Position the tooltip based on available space
  useEffect(() => {
    const positionTooltip = () => {
      if (!isOpen || !tooltipRef.current || !wordRef.current) return;
      
      const tooltipEl = tooltipRef.current;
      const wordEl = wordRef.current;
      const wordRect = wordEl.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      
      // Reset any previous positioning
      tooltipEl.style.left = '50%';
      tooltipEl.style.transform = 'translateX(-50%)';
      
      // Get tooltip dimensions after reset
      const tooltipRect = tooltipEl.getBoundingClientRect();
      
      // Check if tooltip overflows on the left
      if (tooltipRect.left < 0) {
        tooltipEl.style.left = '0';
        tooltipEl.style.transform = 'translateX(0)';
      }
      
      // Check if tooltip overflows on the right
      if (tooltipRect.right > viewportWidth) {
        tooltipEl.style.left = 'auto';
        tooltipEl.style.right = '0';
        tooltipEl.style.transform = 'translateX(0)';
      }
    };

    positionTooltip();
    window.addEventListener('resize', positionTooltip);
    
    return () => {
      window.removeEventListener('resize', positionTooltip);
    };
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
    <div className="relative inline-block" ref={tooltipRef}>
      <span 
        ref={wordRef}
        className="english-word"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
      </span>
      
      {isOpen && (
        <div className="absolute z-50 mt-2 w-64 max-w-[calc(100vw-2rem)] transform -translate-x-1/2 left-1/2 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-border p-4 animate-scale-in">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white dark:bg-gray-900 border-t border-l border-border"></div>
          
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
