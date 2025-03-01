
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { stories } from '../data/stories';
import StoryCard from '../components/ui/StoryCard';
import CategoryBadge from '../components/ui/CategoryBadge';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const Stories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredStories, setFilteredStories] = useState(stories);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get a list of unique categories
  const categories = Array.from(new Set(stories.map(story => story.category)));

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    setActiveCategory(categoryParam);
    setSearchTerm(searchParam || '');
    
    // Filter stories based on URL parameters
    let result = stories;
    
    if (categoryParam) {
      result = result.filter(story => story.category.toLowerCase() === categoryParam.toLowerCase());
    }
    
    if (searchParam) {
      const search = searchParam.toLowerCase();
      result = result.filter(
        story => 
          story.title.toLowerCase().includes(search) || 
          story.description.toLowerCase().includes(search)
      );
    }
    
    setFilteredStories(result);
  }, [searchParams]);

  const handleCategorySelect = (category: string | null) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (category) {
      newParams.set('category', category);
    } else {
      newParams.delete('category');
    }
    
    setSearchParams(newParams);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    
    if (searchTerm.trim()) {
      newParams.set('search', searchTerm.trim());
    } else {
      newParams.delete('search');
    }
    
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Stories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of Bengali-English mixed stories to enhance your vocabulary
            and language learning journey.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <form onSubmit={handleSearch} className="w-full md:w-auto md:min-w-[300px]">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-muted-foreground" />
                </div>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2.5 pl-10 pr-4 text-sm rounded-full bg-secondary/80 dark:bg-secondary/40 border-border hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background"
                  placeholder="Search stories..."
                />
              </div>
            </form>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleFilters}
                className="md:hidden flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>
              
              {(activeCategory || searchParams.get('search')) && (
                <button 
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                  <span>Clear filters</span>
                </button>
              )}
            </div>
          </div>
          
          <div className={`mt-4 ${isFilterOpen || 'hidden md:block'}`}>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategorySelect(null)}
                className={`text-xs md:text-sm font-medium px-3 md:px-4 py-1.5 rounded-full border transition-colors ${
                  !activeCategory 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'bg-background text-muted-foreground border-border hover:bg-secondary/50'
                }`}
              >
                All Stories
              </button>
              
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`text-xs md:text-sm font-medium px-3 md:px-4 py-1.5 rounded-full border transition-colors ${
                    activeCategory === category 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : 'bg-background text-muted-foreground border-border hover:bg-secondary/50'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Results count */}
        <div className="mb-6 text-muted-foreground">
          <p>Showing {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'}</p>
        </div>
        
        {/* Stories Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story, index) => (
              <StoryCard key={story.id} story={story} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium mb-2">No stories found</h3>
            <p className="text-muted-foreground">Try changing your search or filters</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-primary hover:text-primary/80"
            >
              View all stories
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stories;
