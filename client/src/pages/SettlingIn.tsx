// src/pages/Inclusion.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe, Users, Heart, CheckCircle } from "lucide-react";

export default function Inclusion() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 py-20 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Inclusion & Diversity
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Every child and family is welcomed, represented and celebrated at
            Tiny Dreams.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Inclusive Values</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We believe that children flourish when they feel a deep sense of
            belonging. Our curriculum, environment and relationships reflect the
            rich diversity of our community.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Belonging",
              desc: "Warm, respectful relationships with children and families from all backgrounds.",
            },
            {
              icon: Globe,
              title: "Representation",
              desc: "Books, resources and displays that reflect diverse cultures, languages and abilities.",
            },
            {
              icon: Heart,
              title: "Support",
              desc: "Working closely with families and professionals to support additional needs.",
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

      {/* Practices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">How We Put Inclusion Into Practice</h2>
          <ul className="space-y-3">
            {[
              "Partnering with families to understand cultural values, traditions and languages.",
              "Adapting activities and environments so all children can participate fully.",
              "Using visual supports, gestures and simple language to aid understanding.",
              "Celebrating festivals and events from across our community.",
              "Early identification and support for children with additional needs.",
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
