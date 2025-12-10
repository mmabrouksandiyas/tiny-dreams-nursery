// src/pages/EmotionalWellbeing.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Heart, Smile, ShieldCheck, CheckCircle } from "lucide-react";

export default function EmotionalWellbeing() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 py-20 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Emotional Wellbeing & Behaviour
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Helping children feel safe, seen and supported as they learn to
            understand and manage their emotions.
          </p>
        </div>
      </section>

      {/* Key Person & Attachment */}
      <section className="pt-16 pb-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-pink-600 font-semibold uppercase mb-2">
              Key Person Approach
            </p>
            <h2 className="text-3xl font-bold mb-4">Secure Attachments First</h2>
            <p className="text-gray-700 mb-6">
              Each child has a named key person who builds a warm, trusting
              relationship with them and their family. This bond allows the
              child to feel secure enough to explore, learn and try new things.
            </p>
            <ul className="space-y-3">
              {[
                "Consistent, responsive caregiving",
                "Comfort and reassurance during transitions",
                "Deep knowledge of each child’s personality and needs",
                "Regular communication with families about wellbeing",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-pink-600 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-linear-to-br from-rose-400 to-pink-600 h-72 md:h-96 shadow-lg" />
        </div>
      </section>

      {/* Behaviour & Self-Regulation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Gentle, Respectful Behaviour Guidance
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We support children to understand their feelings, make kind choices
            and resolve conflicts through modelling, coaching and calm
            boundaries.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Emotion Coaching",
              desc: "Naming feelings, validating experiences and offering comfort.",
            },
            {
              icon: Smile,
              title: "Self-Regulation Skills",
              desc: "Helping children use strategies to calm, wait, share and problem-solve.",
            },
            {
              icon: ShieldCheck,
              title: "Positive Boundaries",
              desc: "Clear, consistent expectations delivered with kindness and respect.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={i} className="rounded-3xl bg-white p-6 shadow-md">
                <Icon className="w-10 h-10 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
