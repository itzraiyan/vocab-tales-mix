
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ModeToggle } from '../ui/ModeToggle';
import { Menu, X, BookOpen } from 'lucide-react';
import SearchBar from '../ui/SearchBar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Stories', path: '/stories' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-xl relative group"
        >
          <BookOpen className="w-6 h-6 text-primary" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            VocabTales
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative overflow-hidden group py-1 ${
                location.pathname === link.path
                  ? 'text-primary font-medium'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                  location.pathname === link.path
                    ? 'bg-primary scale-x-100'
                    : 'bg-primary scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
          ))}
          <div className="hidden lg:block w-56">
            <SearchBar />
          </div>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-4">
          <ModeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-1 text-foreground/80 hover:text-foreground focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-[57px] bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
          <div className="w-full">
            <SearchBar />
          </div>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg py-2 border-b border-border ${
                  location.pathname === link.path
                    ? 'text-primary font-medium'
                    : 'text-foreground/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
