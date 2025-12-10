// src/pages/Curriculum.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { CheckCircle, Heart, BookOpen, Shapes, Palette, Globe, Sparkles } from "lucide-react";

export default function Curriculum() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 py-20 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Curriculum & Educational Approach
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            A rich, play-based curriculum inspired by the British EYFS framework
            and Reggio Emilia – nurturing the whole child from birth to four.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-16 pb-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-pink-600 font-semibold uppercase mb-2">
            Our Philosophy
          </p>
          <h2 className="text-3xl font-bold mb-4">
            Learning Through Play, Relationships & Exploration
          </h2>
          <p className="text-gray-700 max-w-3xl">
            Tiny Dreams combines the structure of the Early Years Foundation
            Stage (EYFS) with the creativity and child-led spirit of Reggio
            Emilia. Children learn best when they feel secure, curious and
            deeply engaged in meaningful play experiences that reflect their
            interests and culture.
          </p>
        </div>
      </section>

      {/* EYFS Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
          <h2 className="text-3xl font-bold mb-3">EYFS Areas of Learning</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our planning covers all prime and specific areas of the EYFS, ensuring
            a balanced, developmentally appropriate experience for every child.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Personal, Social & Emotional Development",
              desc: "Building confidence, resilience, friendships and self-regulation.",
            },
            {
              icon: BookOpen,
              title: "Communication & Language",
              desc: "Developing listening, understanding, conversation and early literacy.",
            },
            {
              icon: Sparkles,
              title: "Physical Development",
              desc: "Gross and fine motor skills, coordination and healthy habits.",
            },
            {
              icon: Shapes,
              title: "Mathematics",
              desc: "Counting, comparison, patterns, shapes and problem-solving.",
            },
            {
              icon: Globe,
              title: "Understanding the World",
              desc: "Exploring nature, communities, cultures and early science.",
            },
            {
              icon: Palette,
              title: "Expressive Arts & Design",
              desc: "Art, music, role-play and creative self-expression.",
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

      {/* How We Plan */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-pink-600 font-semibold uppercase mb-2">
              How We Plan Learning
            </p>
            <h2 className="text-3xl font-bold mb-4">Child-Led, Carefully Guided</h2>
            <p className="text-gray-700 mb-6">
              Educators observe children’s play and interests, then plan
              invitations and experiences that stretch their thinking and skills.
              Learning is sequenced so that children revisit ideas in deeper,
              more complex ways as they grow.
            </p>

            <ul className="space-y-3">
              {[
                "Long-term curriculum goals across all EYFS areas",
                "Weekly and daily planning informed by observations",
                "Focus on schemas and repeated patterns in play",
                "Planned provocations that invite curiosity and experimentation",
                "Reflection time to evaluate learning and next steps",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-pink-600 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-linear-to-br from-cyan-400 to-pink-500 h-72 md:h-96 shadow-lg" />
        </div>
      </section>
    </div>
  );
}
