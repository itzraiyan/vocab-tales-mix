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
  const tooltipRef = useRef<HTMLSpanElement>(null);  // Changed from div to span
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

  // Updated positioning code to ensure tooltip is always visible
  useEffect(() => {
    if (!isOpen || !tooltipContentRef.current) return;
    
    const tooltipEl = tooltipContentRef.current;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // For mobile devices or small screens (viewport width less than 768px)
    if (viewportWidth < 768) {
      // Center in viewport
      tooltipEl.style.position = 'fixed';
      tooltipEl.style.width = 'min(320px, 85vw)';
      tooltipEl.style.left = '50%';
      tooltipEl.style.top = '50%';
      tooltipEl.style.transform = 'translate(-50%, -50%)';
      tooltipEl.style.maxHeight = '70vh';
      
      // Hide arrow on mobile
      const arrow = tooltipEl.querySelector('.tooltip-arrow') as HTMLElement;
      if (arrow) {
        arrow.style.display = 'none';
      }
    } else {
      // On larger screens, position near the word but ensure it's visible
      const wordRect = wordRef.current?.getBoundingClientRect();
      
      if (!wordRect) return;
      
      tooltipEl.style.position = 'fixed';
      tooltipEl.style.width = '320px';
      
      // Calculate initial position
      let left: number | string = wordRect.left;
      let top: number | string = wordRect.bottom + 10; // Position below the word by default
      
      // Check if tooltip would go off the right edge
      if (left + 320 > viewportWidth - 20) {
        left = Math.max(20, viewportWidth - 340); // At least 20px from left
      }
      
      // Check if tooltip would go off the bottom edge
      if (top + 200 > viewportHeight - 20) { // assuming tooltip height ~200px
        // Try positioning above the word instead
        top = wordRect.top - 210; // 200px height + 10px gap
        
        // If still doesn't fit, center it
        if (top < 20) {
          tooltipEl.style.left = '50%';
          tooltipEl.style.top = '50%';
          tooltipEl.style.transform = 'translate(-50%, -50%)';
          
          // Hide arrow when centered
          const arrow = tooltipEl.querySelector('.tooltip-arrow') as HTMLElement;
          if (arrow) {
            arrow.style.display = 'none';
          }
          return;
        }
      }
      
      tooltipEl.style.left = typeof left === 'string' ? left : `${left}px`;
      tooltipEl.style.top = typeof top === 'string' ? top : `${top}px`;
      tooltipEl.style.transform = 'none'; // Clear any transform
      
      // Position arrow
      const arrow = tooltipEl.querySelector('.tooltip-arrow') as HTMLElement;
      if (arrow) {
        arrow.style.display = 'block';
        
        // Position arrow depending on whether tooltip is above or below word
        if (typeof top === 'number' && top < wordRect.top) {
          // Tooltip is above word
          arrow.style.top = 'auto';
          arrow.style.bottom = '-8px';
          arrow.style.left = `${Math.min(160, wordRect.left + (wordRect.width / 2) - (typeof left === 'number' ? left : 0))}px`;
          arrow.style.transform = 'rotate(225deg)';
        } else {
          // Tooltip is below word
          arrow.style.top = '-8px';
          arrow.style.bottom = 'auto';
          arrow.style.left = `${Math.min(160, wordRect.left + (wordRect.width / 2) - (typeof left === 'number' ? left : 0))}px`;
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
    <span className="inline relative" ref={tooltipRef}>
      <span 
        ref={wordRef}
        className="english-word cursor-pointer hover:underline"
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
            <h3 className="font-medium">{word} ({bengaliPronunciation})</h3>
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
          
          <div className="text-sm border-t border-border pt-2 mt-1">
            <p>{meaning}</p>
          </div>
        </div>
      )}
    </span>
  );
};

export default WordTooltip;
