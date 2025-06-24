"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { categories, locations, priceRanges } from "@/data/artists";

const languages = [
  "Hindi",
  "English",
  "Sanskrit",
  "Marathi",
  "Gujarati",
  "Bengali",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Punjabi",
  "Rajasthani",
];

const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    bio: yup
      .string()
      .required("Bio is required")
      .min(50, "Bio must be at least 50 characters"),
    category: yup
      .array()
      .min(1, "Please select at least one category")
      .required("Category is required"),
    languages: yup
      .array()
      .min(1, "Please select at least one language")
      .required("Languages are required"),
    feeRange: yup.string().required("Fee range is required"),
    location: yup.string().required("Location is required"),
    experience: yup.string().required("Experience is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    imageUrl: yup.string().url("Must be a valid URL").optional(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function OnboardPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

  const watchedCategories = watch("category");
  const watchedLanguages = watch("languages");

  const handleCategoryChange = (category: string) => {
    const currentCategories = watchedCategories || [];
    const newCategories = currentCategories.includes(category)
      ? currentCategories.filter((c) => c !== category)
      : [...currentCategories, category];
    setValue("category", newCategories);
  };

  const handleLanguageChange = (language: string) => {
    const currentLanguages = watchedLanguages || [];
    const newLanguages = currentLanguages.includes(language)
      ? currentLanguages.filter((l) => l !== language)
      : [...currentLanguages, language];
    setValue("languages", newLanguages);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    reset();
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-green-500 text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Application Submitted!
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Thank you for applying to join Artistly.com. We&apos;ll review your
            application and get back to you within 48 hours.
          </p>
          <Button
            onClick={() => setSubmitSuccess(false)}
            className="hover:cursor-pointer text-gray-800 bg-gradient-to-r from-blue-200 to-purple-600"
          >
            Submit Another Application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Join Artistly.com
            </h1>
            <p className="text-gray-600">
              Complete your artist profile to start receiving booking requests
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  {...register("name")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  {...register("phone")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <input
                  {...register("experience")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  placeholder="e.g., 5+ years"
                />
                {errors.experience && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.experience.message}
                  </p>
                )}
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio *
              </label>
              <textarea
                {...register("bio")}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="Tell us about your background, achievements, and what makes you unique..."
              />
              {errors.bio && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.bio.message}
                </p>
              )}
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Performance Categories * (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {categories.map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={watchedCategories?.includes(category) || false}
                      onChange={() => handleCategoryChange(category)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Languages */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Languages Spoken * (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {languages.map((language) => (
                  <label key={language} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={watchedLanguages?.includes(language) || false}
                      onChange={() => handleLanguageChange(language)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{language}</span>
                  </label>
                ))}
              </div>
              {errors.languages && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.languages.message}
                </p>
              )}
            </div>

            {/* Location and Fee */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <select
                  {...register("location")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                >
                  <option value="">Select your location</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fee Range *
                </label>
                <select
                  {...register("feeRange")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                >
                  <option value="">Select your fee range</option>
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.feeRange && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.feeRange.message}
                  </p>
                )}
              </div>
            </div>

            {/* Profile Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Image URL (Optional)
              </label>
              <input
                {...register("imageUrl")}
                type="url"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/your-image.jpg"
              />
              {errors.imageUrl && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.imageUrl.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 hover:cursor-pointer text-gray-800 bg-gradient-to-r from-blue-200 to-purple-600"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
