// src/components/home/CoreValuesStrip.tsx
import { Card } from "../ui/card";

const values = [
  "Nurture",
  "Growth",
  "Creativity",
  "Partnership",
  "Respect",
  "Curiosity",
];

export function CoreValuesStrip() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">Our Core Values</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            These six values shape every decision we make and every experience
            we design for children and families.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {values.map((label) => (
            <Card
              key={label}
              className="rounded-2xl bg-gray-50 border-0 shadow-sm text-center py-4"
            >
              <p className="font-semibold text-pink-600 text-sm">{label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
