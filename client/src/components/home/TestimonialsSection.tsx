// src/components/home/TestimonialsSection.tsx
import { useState } from "react";
import { Card } from "../ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Happy Parent",
    text: "TDN is our favorite place to keep our little one safe. The love and dedication mean so much.",
  },
  {
    name: "Proud Parent",
    text: "My child smiles every day after nursery. The staff truly care and it shows in her confidence.",
  },
  {
    name: "Satisfied Parent",
    text: "A wonderful, nurturing environment. The team is supportive, caring and very professional.",
  },
  {
    name: "Grateful Parent",
    text: "Tiny Dreams is where my daughter learns, grows and creates beautiful memories with her friends.",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const active = testimonials[current];

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">What Parents Say</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A few words from families who trust Tiny Dreams with their little
            ones.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-6">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <motion.div
              key={active.name + current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1"
            >
              <Card className="rounded-3xl bg-gray-50 p-8 shadow-md border border-gray-200">
                <div className="flex gap-1 mb-3 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-center">
                  “{active.text}”
                </p>
                <p className="text-center font-semibold text-gray-900">
                  {active.name}
                </p>
              </Card>
            </motion.div>

            <button
              type="button"
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrent(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === current ? "w-6 bg-pink-500" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
