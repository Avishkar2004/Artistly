"use client";

import { useState } from "react";
import { artists } from "@/data/artists";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock, { FilterState } from "@/components/FilterBlock";
import { Grid, List, Users, Sparkles } from "lucide-react";

export default function ArtistsPage() {
  const [filteredArtists, setFilteredArtists] = useState(artists);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleFilterChange = (filters: FilterState) => {
    let filtered = artists;

    // Search filter
    if (filters.searchQuery) {
      filtered = filtered.filter(
        (artist) =>
          artist.name
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase()) ||
          artist.category
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase()) ||
          artist.bio.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(
        (artist) => artist.category === filters.category
      );
    }

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(
        (artist) => artist.location === filters.location
      );
    }

    // Price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(
        (artist) => artist.priceRange === filters.priceRange
      );
    }

    setFilteredArtists(filtered);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Browse Artists
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover talented performers and find the perfect match for your
            next event
          </p>
        </div>

        {/* Filters */}
        <FilterBlock onFilterChange={handleFilterChange} />

        {/* View Toggle and Results */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span className="text-lg font-semibold text-gray-700">
              {filteredArtists.length} artist
              {filteredArtists.length !== 1 ? "s" : ""} found
            </span>
          </div>
          <div className="flex items-center bg-white rounded-xl p-1 shadow-lg border border-gray-100">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-3 rounded-lg transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-3 rounded-lg transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Artists Grid/List */}
        {filteredArtists.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No artists found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Try adjusting your filters or search terms to find more artists.
              We have a wide variety of talented performers waiting to be
              discovered.
            </p>
            <button
              onClick={() => {
                const clearedFilters = {
                  category: "",
                  location: "",
                  priceRange: "",
                  searchQuery: "",
                };
                handleFilterChange(clearedFilters);
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
            }
          >
            {filteredArtists.map((artist, index) => (
              <div
                key={artist.id}
                className="transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ArtistCard artist={artist} />
              </div>
            ))}
          </div>
        )}

        {/* Load More Section */}
        {filteredArtists.length > 0 && (
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg border border-gray-100">
              <span className="text-gray-600 font-medium">
                Showing {filteredArtists.length} of {artists.length} artists
              </span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
