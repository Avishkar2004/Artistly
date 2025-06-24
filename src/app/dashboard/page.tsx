"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, Eye, MessageSquare } from "lucide-react";

// Mock data for artist submissions
const artistSubmissions = [
  {
    id: 1,
    name: "Priya Sharma",
    category: "Classical Singer",
    city: "Mumbai",
    fee: "₹50,000 - ₹1,00,000",
    status: "pending",
    submittedDate: "2024-01-15",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
  },
  {
    id: 2,
    name: "Rahul Verma",
    category: "Stand-up Comedian",
    city: "Delhi",
    fee: "₹25,000 - ₹60,000",
    status: "approved",
    submittedDate: "2024-01-14",
    email: "rahul.verma@email.com",
    phone: "+91 98765 43211",
  },
  {
    id: 3,
    name: "Anjali Patel",
    category: "Contemporary Dancer",
    city: "Bangalore",
    fee: "₹30,000 - ₹80,000",
    status: "rejected",
    submittedDate: "2024-01-13",
    email: "anjali.patel@email.com",
    phone: "+91 98765 43212",
  },
  {
    id: 4,
    name: "Vikram Singh",
    category: "Motivational Speaker",
    city: "Pune",
    fee: "₹75,000 - ₹1,50,000",
    status: "pending",
    submittedDate: "2024-01-12",
    email: "vikram.singh@email.com",
    phone: "+91 98765 43213",
  },
];

export default function DashboardPage() {
  const [submissions, setSubmissions] = useState(artistSubmissions);
  const [selectedSubmission, setSelectedSubmission] = useState<
    (typeof artistSubmissions)[0] | null
  >(null);

  const handleStatusChange = (
    id: number,
    newStatus: "approved" | "rejected"
  ) => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
    );
  };

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      pending: "bg-yellow-100 text-yellow-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          statusStyles[status as keyof typeof statusStyles]
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Manager Dashboard
          </h1>
          <p className="text-gray-600">
            Manage artist submissions and booking requests
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Total Submissions
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {submissions.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <MessageSquare className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">
                  {submissions.filter((s) => s.status === "pending").length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-gray-900">
                  {submissions.filter((s) => s.status === "approved").length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold text-gray-900">
                  {submissions.filter((s) => s.status === "rejected").length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Artist Submissions
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Artist
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fee Range
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {submissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {submission.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {submission.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {submission.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {submission.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {submission.fee}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(submission.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(submission.submittedDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedSubmission(submission)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        {submission.status === "pending" && (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleStatusChange(submission.id, "approved")
                              }
                              className="text-green-600 border-green-600 hover:bg-green-50"
                            >
                              <Check className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleStatusChange(submission.id, "rejected")
                              }
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Submission Detail Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Artist Details
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedSubmission(null)}
                  className="hover:cursor-pointer"
                >
                  ×
                </Button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Name:
                  </label>
                  <p className="text-sm text-gray-900">
                    {selectedSubmission.name}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Category:
                  </label>
                  <p className="text-sm text-gray-900">
                    {selectedSubmission.category}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Location:
                  </label>
                  <p className="text-sm text-gray-900">
                    {selectedSubmission.city}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Fee Range:
                  </label>
                  <p className="text-sm text-gray-900">
                    {selectedSubmission.fee}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email:
                  </label>
                  <p className="text-sm text-gray-900">
                    {selectedSubmission.email}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Phone:
                  </label>
                  <p className="text-sm text-gray-900">
                    {selectedSubmission.phone}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Status:
                  </label>
                  <div className="mt-1">
                    {getStatusBadge(selectedSubmission.status)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
