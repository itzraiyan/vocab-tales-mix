
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
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const tooltipContentRef = useRef<HTMLDivElement>(null);

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
      if (!isOpen || !tooltipRef.current || !wordRef.current || !tooltipContentRef.current) return;
      
      const tooltipEl = tooltipContentRef.current;
      const wordRect = wordRef.current.getBoundingClientRect();
      const tooltipRect = tooltipEl.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      
      // Calculate the horizontal center of the word
      const wordCenter = wordRect.left + (wordRect.width / 2);
      
      // Default position (centered)
      let tooltipLeft = '50%';
      let arrowLeft = '50%';
      let transform = 'translateX(-50%)';
      
      // Check if tooltip would overflow left side
      if (wordCenter - (tooltipRect.width / 2) < 10) {
        // Position tooltip at left edge with padding
        tooltipLeft = '0';
        transform = 'translateX(0)';
        
        // Calculate arrow position relative to tooltip
        // Arrow should point at word center
        const arrowLeftPx = wordCenter - 10; // 10px is half of arrow width
        arrowLeft = `${arrowLeftPx}px`;
      } 
      // Check if tooltip would overflow right side
      else if (wordCenter + (tooltipRect.width / 2) > viewportWidth - 10) {
        // Position tooltip at right edge with padding
        tooltipLeft = 'auto';
        tooltipEl.style.right = '0';
        transform = 'translateX(0)';
        
        // Calculate arrow position relative to tooltip
        const distanceFromRight = viewportWidth - wordCenter;
        const arrowRightPx = distanceFromRight - 10;
        tooltipEl.style.setProperty('--arrow-right', `${arrowRightPx}px`);
        arrowLeft = 'auto';
      }
      
      tooltipEl.style.left = tooltipLeft;
      tooltipEl.style.transform = transform;
      
      // Set arrow position
      const arrow = tooltipEl.querySelector('.tooltip-arrow') as HTMLElement;
      if (arrow) {
        arrow.style.left = arrowLeft;
        if (arrowLeft === 'auto') {
          arrow.style.right = 'var(--arrow-right)';
        } else {
          arrow.style.right = 'auto';
        }
      }
    };

    // Position immediately and on resize
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
    <span className="relative inline-block" ref={tooltipRef}>
      <span 
        ref={wordRef}
        className="english-word cursor-pointer"
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
          className="tooltip-content absolute z-50 mt-2 w-64 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-border p-4 animate-scale-in"
          style={{ top: '100%' }}
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
    </span>
  );
};

export default WordTooltip;
