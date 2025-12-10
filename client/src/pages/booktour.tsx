// src/pages/BookTour.tsx
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, User } from "lucide-react";
import { toast } from "sonner";

export default function BookTour() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Basic required fields check
    const requiredFields = ["parentName", "email", "phone", "branch", "preferredDate"];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        toast.error("Please fill in all required fields.");
        return;
      }
    }

    setIsSubmitting(true);

    // Simulate submit (you can replace this with real API call)
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Our team will contact you to confirm your tour.");
      form.reset();
    }, 800);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-4xl w-full mx-auto">
        <div className="text-center mb-10">
          <p className="text-pink-600 font-semibold uppercase tracking-wide">
            Book a Visit
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Schedule a Tour at Tiny Dreams Nurseries
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Come and see our warm, nurturing environment in person. Fill out the form
            below and our team will get in touch to confirm your visit.
          </p>
        </div>

        <Card className="rounded-3xl shadow-xl border-0 bg-white">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <User className="w-5 h-5 text-pink-600" />
              Parent & Child Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Parent & child info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Parent Full Name <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="+971 5x xxx xxxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Child&apos;s Name
                  </label>
                  <input
                    type="text"
                    name="childName"
                    className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Your child’s name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Child&apos;s Age Group
                  </label>
                  <select
                    name="ageGroup"
                    className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="">Select age group</option>
                    <option value="0-1">0–1 year</option>
                    <option value="1-2">1–2 years</option>
                    <option value="2-3">2–3 years</option>
                    <option value="3-4">3–4 years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Branch <span className="text-pink-600">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-pink-500 absolute left-3 top-3.5" />
                    <select
                      name="branch"
                      className="w-full rounded-xl border border-gray-200 pl-9 pr-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    >
                      <option value="">Select a branch</option>
                      <option value="khalidiya">Khalidiya Garden Branch</option>
                      <option value="almamoura">Al Mamoura Branch</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Date & time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date <span className="text-pink-600">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-pink-500 absolute left-3 top-3.5" />
                    <input
                      type="date"
                      name="preferredDate"
                      className="w-full rounded-xl border border-gray-200 pl-9 pr-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-pink-500 absolute left-3 top-3.5" />
                    <input
                      type="time"
                      name="preferredTime"
                      className="w-full rounded-xl border border-gray-200 pl-9 pr-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                </div>
              </div>

              {/* Extra info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    How did you hear about us?
                  </label>
                  <select
                    name="source"
                    className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="friend">Friend / Family</option>
                    <option value="school">School / Nursery Recommendation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Children
                  </label>
                  <input
                    type="number"
                    name="childrenCount"
                    min={1}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Any specific questions or requirements?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Tell us anything you’d like us to know before your visit."
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="consent"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                />
                <p className="text-xs text-gray-600">
                  I agree to be contacted by Tiny Dreams Nurseries regarding my tour
                  booking and understand that my data will be used for this purpose only.
                </p>
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="button-primary px-8 py-2.5"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Tour"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
