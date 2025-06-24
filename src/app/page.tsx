import Link from "next/link";
import { artists } from "@/data/artists";
import ArtistCard from "@/components/ArtistCard";
import { Star, Users, Award } from "lucide-react";

const categoryCards = [
  {
    title: "Singers",
    description: "Classical, Bollywood, Folk & Contemporary",
    icon: "🎤",
    count: artists.filter((a) => a.category.includes("Singer")).length,
    href: "/artists?category=Singer",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50",
  },
  {
    title: "Dancers",
    description: "Classical, Contemporary & Folk Dance",
    icon: "💃",
    count: artists.filter((a) => a.category.includes("Dancer")).length,
    href: "/artists?category=Dancer",
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50",
  },
  {
    title: "Comedians",
    description: "Stand-up Comedy & Entertainment",
    icon: "😄",
    count: artists.filter((a) => a.category.includes("Comedian")).length,
    href: "/artists?category=Comedian",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
  },
  {
    title: "Speakers",
    description: "Motivational & Professional Speakers",
    icon: "🎤",
    count: artists.filter((a) => a.category.includes("Speaker")).length,
    href: "/artists?category=Speaker",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
];

export default function HomePage() {
  const featuredArtists = artists.slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div
            className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute bottom-10 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find the Perfect{" "}
              <span className="gradient-text bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Artist
              </span>
              <br />
              for Your Event
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Connect with top performing artists across India. From singers to
              dancers, comedians to speakers - we&apos;ve got you covered with
              the best talent.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/artists"
              className="group px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-hover-effect"
            >
              <span className="flex items-center justify-center gap-2">
                Browse Artists
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="/onboard"
              className="group px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg backdrop-blur-sm glass-effect hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                Join as Artist
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{artists.length}+</div>
              <div className="text-blue-200">Verified Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Successful Bookings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover talented performers across different categories and find
              the perfect match for your event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryCards.map((category, index) => (
              <Link
                key={category.title}
                href={category.href}
                className="group block"
              >
                <div
                  className={`bg-gradient-to-br ${category.bgGradient} rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-gray-100 hover:border-gray-200`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`text-6xl mb-6 animate-bounce-slow`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${category.gradient} text-white rounded-full text-sm font-medium`}
                  >
                    <span>{category.count} Artists</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Featured Artists
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet some of our most popular and highly-rated performers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArtists.map((artist, index) => (
              <div
                key={artist.id}
                className="transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ArtistCard artist={artist} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/artists"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-hover-effect"
            >
              <span>View All Artists</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="gradient-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Artistly
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We make it easy to find and book the perfect artist for your
              special occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl glass-effect">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Verified Artists</h3>
              <p className="text-gray-300 leading-relaxed">
                All our artists are thoroughly vetted and verified to ensure
                quality performances
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl glass-effect">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Wide Selection</h3>
              <p className="text-gray-300 leading-relaxed">
                Choose from hundreds of talented artists across different
                categories and locations
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl glass-effect">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality Guarantee</h3>
              <p className="text-gray-300 leading-relaxed">
                We guarantee satisfaction with every booking or your money back
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Perfect Artist?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start browsing our talented performers and make your event
            unforgettable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/artists"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-hover-effect"
            >
              Start Browsing
            </Link>
            <Link
              href="/onboard"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
            >
              Join as Artist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
