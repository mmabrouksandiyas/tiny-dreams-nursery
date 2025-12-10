// src/pages/OutdoorLearning.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sun, Leaf, Footprints, CheckCircle } from "lucide-react";

export default function OutdoorLearning() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 py-20 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Outdoor Learning
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Fresh air, movement and nature-rich experiences are an essential
            part of every child’s day at Tiny Dreams.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Learning Beyond the Classroom</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our outdoor spaces are an extension of our curriculum, offering
            opportunities for physical development, exploration and imaginative play.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Sun,
              title: "Movement & Gross Motor Skills",
              desc: "Running, climbing, balancing and riding help children build strength and coordination.",
            },
            {
              icon: Leaf,
              title: "Nature & Curiosity",
              desc: "Exploring plants, weather, textures and outdoor loose parts.",
            },
            {
              icon: Footprints,
              title: "Risk & Resilience",
              desc: "Supported opportunities to take age-appropriate risks and build confidence.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={i} className="rounded-3xl bg-gray-50 p-6 shadow-md">
                <Icon className="w-10 h-10 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Bullets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Outdoor Experiences Include</h2>
          <ul className="space-y-3">
            {[
              "Water, sand and sensory play.",
              "Gardening and caring for plants.",
              "Large construction and loose parts play.",
              "Storytime and group games outdoors.",
              "Opportunities to observe seasonal changes.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-pink-600 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
