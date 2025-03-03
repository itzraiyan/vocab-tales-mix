
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

  // Improved positioning logic to ensure tooltip is always visible
  useEffect(() => {
    if (!isOpen || !tooltipContentRef.current || !wordRef.current) return;
    
    const tooltipEl = tooltipContentRef.current;
    const wordRect = wordRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const tooltipWidth = 320;
    const tooltipHeight = 200; // Approximate height
    
    // Reset styles first
    tooltipEl.style.position = 'fixed';
    tooltipEl.style.maxHeight = '70vh';
    tooltipEl.style.transform = 'none';
    
    // For mobile devices (viewport width less than 768px)
    if (viewportWidth < 768) {
      // Center in viewport with fixed positioning
      tooltipEl.style.width = 'min(320px, 85vw)';
      tooltipEl.style.left = '50%';
      tooltipEl.style.top = '50%';
      tooltipEl.style.transform = 'translate(-50%, -50%)';
      
      // Hide the arrow on mobile
      const arrow = tooltipEl.querySelector('.tooltip-arrow') as HTMLElement;
      if (arrow) {
        arrow.style.display = 'none';
      }
      return;
    }
    
    // On desktop, position tooltip intelligently
    tooltipEl.style.width = `${tooltipWidth}px`;
    
    // Horizontal positioning logic
    let leftPos = wordRect.left + (wordRect.width / 2) - (tooltipWidth / 2);
    
    // Ensure tooltip doesn't go off left edge
    leftPos = Math.max(20, leftPos);
    
    // Ensure tooltip doesn't go off right edge
    leftPos = Math.min(leftPos, viewportWidth - tooltipWidth - 20);
    
    // Vertical positioning logic - try above the word first
    let topPos = wordRect.top - tooltipHeight - 15;
    let arrowOnTop = false;
    
    // If doesn't fit above, try below
    if (topPos < 50) {
      topPos = wordRect.bottom + 15;
      arrowOnTop = true;
      
      // If doesn't fit below either, position at center of screen
      if (topPos + tooltipHeight > viewportHeight - 20) {
        leftPos = viewportWidth / 2 - tooltipWidth / 2;
        topPos = viewportHeight / 2 - tooltipHeight / 2;
        
        // Hide arrow when centered
        const arrow = tooltipEl.querySelector('.tooltip-arrow') as HTMLElement;
        if (arrow) {
          arrow.style.display = 'none';
        }
      }
    }
    
    // Apply calculated position
    tooltipEl.style.left = `${leftPos}px`;
    tooltipEl.style.top = `${topPos}px`;
    
    // Position arrow
    const arrow = tooltipEl.querySelector('.tooltip-arrow') as HTMLElement;
    if (arrow) {
      arrow.style.display = 'block';
      
      if (arrowOnTop) {
        // Arrow on top (tooltip is below word)
        arrow.style.top = '-8px';
        arrow.style.bottom = 'auto';
        arrow.style.transform = 'rotate(45deg)';
      } else {
        // Arrow on bottom (tooltip is above word)
        arrow.style.top = 'auto';
        arrow.style.bottom = '-8px';
        arrow.style.transform = 'rotate(225deg)';
      }
      
      // Position arrow horizontally
      const arrowLeftPos = Math.min(
        tooltipWidth - 20, 
        Math.max(
          20, 
          wordRect.left + (wordRect.width / 2) - leftPos
        )
      );
      arrow.style.left = `${arrowLeftPos}px`;
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
      if (isOpen && tooltipContentRef.current) {
        // Force DOM recalculation by temporarily hiding and reshowing
        const tooltip = tooltipContentRef.current;
        tooltip.style.opacity = '0';
        setTimeout(() => {
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
