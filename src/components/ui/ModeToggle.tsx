
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for user preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }

    // Apply the theme
    applyTheme(savedTheme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  }, []);

  const applyTheme = (newTheme: string) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative overflow-hidden w-9 h-9 rounded-full flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors"
      aria-label="Toggle theme"
    >
      <div className="relative transition-all duration-500 ease-in-out">
        {theme === 'light' ? (
          <Moon className="w-5 h-5 animate-fade-in" />
        ) : (
          <Sun className="w-5 h-5 animate-fade-in" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
