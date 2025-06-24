"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { artists } from "@/data/artists";
import { Button } from "@/components/ui/button";
import { Star, MapPin, DollarSign, Clock } from "lucide-react";

export default function ArtistDetailPage() {
  const params = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const artist = artists.find((a) => a.id === parseInt(params.id as string));

  if (!artist) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Artist Not Found
          </h1>
          <Link href="/artists" className="text-blue-600 hover:underline">
            ← Back to Artists
          </Link>
        </div>
      </div>
    );
  }

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-green-500 text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Booking Request Sent!
          </h2>
          <p className="text-gray-600 mb-6">
            Your booking request has been sent to {artist.name}. We&apos;ll get
            back to you within 24 hours.
          </p>
          <div className="space-y-2">
            <Link href="/artists">
              <Button className="w-full">Browse More Artists</Button>
            </Link>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setSubmitSuccess(false)}
            >
              Send Another Request
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/artists"
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to Artists
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Artist Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold">
                {artist.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{artist.name}</h1>
                <p className="text-xl text-blue-100 mb-4">{artist.category}</p>
                <div className="flex items-center justify-center md:justify-start gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{artist.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{artist.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{artist.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Artist Details */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    About
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{artist.bio}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Languages
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {artist.languages.map((language, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Performance Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-gray-900">
                          Fee Range
                        </div>
                        <div className="text-sm text-gray-600">
                          {artist.priceRange}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900">
                          Experience
                        </div>
                        <div className="text-sm text-gray-600">
                          {artist.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="lg:col-span-1">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Request Booking
                  </h3>
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Event Type *
                      </label>
                      <select
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="conference">Conference</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Event Details *
                      </label>
                      <textarea
                        required
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us about your event, venue, audience size, etc."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? "Sending Request..." : "Request Booking"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
