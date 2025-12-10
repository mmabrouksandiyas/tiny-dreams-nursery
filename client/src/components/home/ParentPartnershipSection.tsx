// src/components/home/ParentPartnershipSection.tsx
import { MessageCircle, Smartphone, CheckCircle } from "lucide-react";

export function ParentPartnershipSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-pink-600 font-bold mb-2">For Parents</p>
          <h2 className="section-title">Strong Partnership with Families</h2>
          <p className="text-gray-700 mt-4">
            We know how important it is to stay connected to your child’s day.
            At Tiny Dreams we work closely with families, sharing learning,
            routines and milestones in an open, sensitive way.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex gap-3">
              <MessageCircle className="w-5 h-5 text-pink-600 mt-1" />
              <span className="text-gray-700 text-sm">
                Two-way communication through our dedicated Parent App.
              </span>
            </li>
            <li className="flex gap-3">
              <Smartphone className="w-5 h-5 text-pink-600 mt-1" />
              <span className="text-gray-700 text-sm">
                Daily updates with photos, routines and learning moments.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-pink-600 mt-1" />
              <span className="text-gray-700 text-sm">
                Parent Partnership Evenings to review your child’s learning
                journey.
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-linear-to-br from-pink-500 to-purple-500 h-64 md:h-80 shadow-lg flex items-center justify-center text-white text-center px-6">
          <p className="text-lg font-medium">
            “When little hearts feel loved, big dreams begin to grow.”
          </p>
        </div>
      </div>
    </section>
  );
}
