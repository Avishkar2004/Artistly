import Link from "next/link";
import { Artist } from "@/data/artists";
import { Button } from "@/components/ui/button";
import { Star, MapPin, DollarSign, Clock, Languages } from "lucide-react";

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      "Classical Singer": "from-pink-500 to-rose-500",
      "Contemporary Dancer": "from-purple-500 to-indigo-500",
      "Stand-up Comedian": "from-yellow-500 to-orange-500",
      "DJ": "from-green-500 to-emerald-500",
      "Motivational Speaker": "from-blue-500 to-cyan-500",
      "Folk Singer": "from-red-500 to-pink-500"
    };
    return colors[category as keyof typeof colors] || "from-blue-500 to-purple-500";
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
      {/* Header with gradient */}
      <div className={`bg-gradient-to-r ${getCategoryColor(artist.category)} p-6 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative flex items-center justify-between">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
            <span className="text-white font-bold text-2xl">
              {artist.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            <span className="text-sm font-semibold text-white">
              {artist.rating}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {artist.name}
        </h3>
        <p className="text-sm text-blue-600 font-semibold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          {artist.category}
        </p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
            <span className="truncate">{artist.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            <span className="font-medium text-green-600">{artist.priceRange}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
            <span>{artist.experience}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed">
          {artist.bio}
        </p>
        
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Languages className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Languages</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {artist.languages.slice(0, 2).map((language, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
              >
                {language}
              </span>
            ))}
            {artist.languages.length > 2 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                +{artist.languages.length - 2} more
              </span>
            )}
          </div>
        </div>
        
        <div className="flex gap-3">
          <Link href={`/artists/${artist.id}`} className="flex-1">
            <Button 
              variant="outline" 
              className="w-full group-hover:border-blue-500 group-hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                View Profile
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Button>
          </Link>
          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="flex items-center gap-2 cursor-not-allowed">
              Get Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
