
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/stories?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`relative flex items-center transition-all duration-300 w-full ${
        isFocused
          ? 'ring-2 ring-ring ring-offset-0'
          : 'ring-0'
      }`}
    >
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-4 h-4 text-muted-foreground" />
        </div>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full py-2 pl-10 pr-10 text-sm transition-all duration-300 border rounded-full bg-secondary/80 dark:bg-secondary/40 border-border hover:bg-secondary focus:outline-none focus:bg-background"
          placeholder="Search stories..."
        />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
