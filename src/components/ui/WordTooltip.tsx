
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

  // Calculate optimal position for the tooltip
  useEffect(() => {
    if (!isOpen || !tooltipContentRef.current) return;
    
    const tooltipEl = tooltipContentRef.current;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // For mobile devices (viewport width less than 768px)
    if (viewportWidth < 768) {
      // Center in viewport with fixed positioning
      tooltipEl.style.position = 'fixed';
      tooltipEl.style.width = 'min(320px, 85vw)'; // Either 320px or 85% of viewport width, whichever is smaller
      tooltipEl.style.left = '50%';
      tooltipEl.style.top = '50%';
      tooltipEl.style.transform = 'translate(-50%, -50%)';
      tooltipEl.style.maxHeight = '70vh';
      
      // Hide the arrow on mobile
      const arrow = tooltipEl.querySelector('.tooltip-arrow') as HTMLElement;
      if (arrow) {
        arrow.style.display = 'none';
      }
    } else {
      // On desktop, we have more space
      // By default, try to position the tooltip near the word
      const wordRect = wordRef.current?.getBoundingClientRect();
      
      if (!wordRect) return;
      
      // Basic positioning above the word
      tooltipEl.style.position = 'fixed';
      tooltipEl.style.width = '320px';
      
      // Initial position calculation
      let left = wordRect.left + (wordRect.width / 2) - 160; // Center tooltip horizontally over word
      let top = wordRect.top - 10; // Position above the word
      
      // Check if tooltip would go off the left edge
      if (left < 20) {
        left = 20;
      }
      
      // Check if tooltip would go off the right edge
      if (left + 320 > viewportWidth - 20) {
        left = viewportWidth - 340; // 20px margin from right edge
      }
      
      // Check if tooltip would go off the top edge
      // If so, position it below the word instead
      if (top < 60) { // Allow for some space at top for browser UI
        top = wordRect.bottom + 10;
        
        // If it still doesn't fit in the viewport, center it
        if (top + 300 > viewportHeight - 20) { // assuming max tooltip height
          left = '50%';
          top = '50%';
          tooltipEl.style.transform = 'translate(-50%, -50%)';
          
          // Hide the arrow when centered
          const arrow = tooltipEl.querySelector('.tooltip-arrow') as HTMLElement;
          if (arrow) {
            arrow.style.display = 'none';
          }
          
          return;
        }
      }
      
      tooltipEl.style.left = typeof left === 'string' ? left : `${left}px`;
      tooltipEl.style.top = typeof top === 'string' ? top : `${top}px`;
      
      // Only use transform if we're centering
      if (typeof left === 'string' && left === '50%') {
        tooltipEl.style.transform = 'translate(-50%, -50%)';
      } else {
        tooltipEl.style.transform = 'none';
      }
      
      // Position arrow based on tooltip position
      const arrow = tooltipEl.querySelector('.tooltip-arrow') as HTMLElement;
      if (arrow) {
        arrow.style.display = 'block';
        
        // If tooltip is above the word
        if (parseInt(tooltipEl.style.top) < wordRect.top) {
          arrow.style.top = 'auto';
          arrow.style.bottom = '-8px';
          arrow.style.left = `${wordRect.left + (wordRect.width / 2) - left - 4}px`;
          arrow.style.transform = 'rotate(225deg)';
        } else {
          // If tooltip is below the word
          arrow.style.top = '-8px';
          arrow.style.bottom = 'auto';
          arrow.style.left = `${wordRect.left + (wordRect.width / 2) - left - 4}px`;
          arrow.style.transform = 'rotate(45deg)';
        }
      }
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

  // Handle window resize - reposition tooltip if open
  useEffect(() => {
    const handleResize = () => {
      // Trigger the positioning effect by toggling a state
      if (isOpen && tooltipContentRef.current) {
        // Force DOM recalculation by temporarily hiding and reshowing
        const tooltip = tooltipContentRef.current;
        tooltip.style.opacity = '0';
        setTimeout(() => {
          // This will trigger the positioning useEffect
          tooltip.style.opacity = '1';
        }, 10);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
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
          className="tooltip-content z-50 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-border p-4 animate-scale-in"
          style={{ 
            overflowY: 'auto'
          }}
        >
          <div className="tooltip-arrow absolute w-4 h-4 rotate-45 bg-white dark:bg-gray-900 border-t border-l border-border"></div>
          
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
