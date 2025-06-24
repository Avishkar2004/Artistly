import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories, locations, priceRanges } from "@/data/artists";
import { Search, Filter, X, MapPin, DollarSign, Music } from "lucide-react";

interface FilterBlockProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  category: string;
  location: string;
  priceRange: string;
  searchQuery: string;
}

export default function FilterBlock({ onFilterChange }: FilterBlockProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: "",
    location: "",
    priceRange: "",
    searchQuery: "",
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      category: "",
      location: "",
      priceRange: "",
      searchQuery: "",
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters =
    filters.category ||
    filters.location ||
    filters.priceRange ||
    filters.searchQuery;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <Filter className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Find Your Perfect Artist
            </h3>
            <p className="text-sm text-gray-600">Filter by your preferences</p>
          </div>
        </div>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 transition-all duration-300"
          >
            <X className="w-4 h-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Search */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <Search className="w-4 h-4 text-blue-500" />
            Search Artists
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, category, or bio..."
              value={filters.searchQuery}
              onChange={(e) =>
                handleFilterChange("searchQuery", e.target.value)
              }
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 transition-all duration-300 hover:border-gray-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Category */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <Music className="w-4 h-4 text-purple-500" />
            Category
          </label>
          <div className="relative">
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange("category", e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 transition-all duration-300 hover:border-gray-300 appearance-none bg-white"
            >
              <option value="" className="text-gray-800">
                All Categories
              </option>
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="text-gray-800"
                >
                  {category}
                </option>
              ))}
            </select>
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-green-500" />
            Location
          </label>
          <div className="relative">
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800 transition-all duration-300 hover:border-gray-300 appearance-none bg-white"
            >
              <option value="" className="text-gray-800">
                All Locations
              </option>
              {locations.map((location) => (
                <option
                  key={location}
                  value={location}
                  className="text-gray-800"
                >
                  {location}
                </option>
              ))}
            </select>
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Price Range */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-yellow-500" />
            Price Range
          </label>
          <div className="relative">
            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange("priceRange", e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-800 transition-all duration-300 hover:border-gray-300 appearance-none bg-white"
            >
              <option value="" className="text-gray-800">
                All Prices
              </option>
              {priceRanges.map((range) => (
                <option key={range} value={range} className="text-gray-800">
                  {range}
                </option>
              ))}
            </select>
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-gray-700">
              Active filters:
            </span>
            {filters.searchQuery && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Search: &quot;{filters.searchQuery}&quot;
                <button
                  onClick={() => handleFilterChange("searchQuery", "")}
                  className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.category && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                {filters.category}
                <button
                  onClick={() => handleFilterChange("category", "")}
                  className="ml-1 hover:bg-purple-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.location && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                {filters.location}
                <button
                  onClick={() => handleFilterChange("location", "")}
                  className="ml-1 hover:bg-green-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.priceRange && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                {filters.priceRange}
                <button
                  onClick={() => handleFilterChange("priceRange", "")}
                  className="ml-1 hover:bg-yellow-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
