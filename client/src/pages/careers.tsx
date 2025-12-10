// src/pages/Careers.tsx
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, Smile, Sparkles, Users } from "lucide-react";
import { Link } from "wouter";

export default function Careers() {
  const openings = [
    {
      title: "Early Years Teacher",
      type: "Full-Time",
      location: "Abu Dhabi – Khalidiya / Al Mamoura",
      description:
        "We are looking for passionate early years educators who can create nurturing, stimulating learning environments.",
    },
    {
      title: "Teaching Assistant",
      type: "Full-Time",
      location: "Abu Dhabi – Khalidiya / Al Mamoura",
      description:
        "Support classroom activities, child development, and daily routines with warmth and enthusiasm.",
    },
    {
      title: "Receptionist / Front Desk Coordinator",
      type: "Full-Time",
      location: "Abu Dhabi – Khalidiya",
      description:
        "Be the welcoming face of Tiny Dreams and ensure smooth communication with families.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            At Tiny Dreams Nurseries, we believe our people shape the future.
            Join us in building a nurturing, creative, and inspiring environment
            for every child.
          </p>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Work at Tiny Dreams?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Supportive Culture",
                desc: "A warm, family-oriented work environment that values your growth.",
              },
              {
                icon: Sparkles,
                title: "Professional Growth",
                desc: "Training, certifications, and continuous development opportunities.",
              },
              {
                icon: Users,
                title: "Collaborative Team",
                desc: "Work with passionate educators dedicated to early childhood excellence.",
              },
              {
                icon: Smile,
                title: "Make an Impact",
                desc: "Every day, you help shape a child’s future — and that matters.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card
                  key={idx}
                  className="rounded-3xl shadow-md p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="text-pink-600 mb-4">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Current Job Openings
          </h2>

          <div className="grid gap-8">
            {openings.map((job, idx) => (
              <Card
                key={idx}
                className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-shadow p-6 bg-white"
              >
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl">{job.title}</CardTitle>
                </CardHeader>

                <CardContent className="p-0 space-y-3">
                  <p className="text-gray-600">{job.description}</p>
                  <p className="text-sm text-gray-500">
                    <strong>Type:</strong> {job.type}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Location:</strong> {job.location}
                  </p>

                  <Link href="/apply">
                    <Button className="button-primary mt-4">Apply Now</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you're an experienced educator or just starting your career
            in early childhood development, we'd love to hear from you.
          </p>

          <Link href="/apply">
            <Button className="button-primary text-lg px-8 py-6">
              Submit Your Application
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
