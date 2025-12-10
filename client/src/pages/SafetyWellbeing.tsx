// src/pages/SafetyWellbeing.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldCheck, HeartPulse, AlertTriangle, CheckCircle } from "lucide-react";

export default function SafetyWellbeing() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 py-20 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Safety & Wellbeing
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Your child’s physical and emotional safety is our highest priority.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Commitments</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We maintain rigorous policies and daily practices to keep children
            safe, healthy and supported at all times.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Safeguarding & Security",
              desc: "Secure entry systems, visitor checks and robust child-protection procedures.",
            },
            {
              icon: HeartPulse,
              title: "Health & Hygiene",
              desc: "Cleaning routines, handwashing, illness policies and food safety practices.",
            },
            {
              icon: AlertTriangle,
              title: "Emergency Preparedness",
              desc: "Fire drills, risk assessments and trained first-aid staff on site.",
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
          <h2 className="text-2xl font-bold mb-6">Daily Safety Practices</h2>
          <ul className="space-y-3">
            {[
              "Daily room and outdoor checks before children arrive.",
              "Safe sleep practices and supervision in all rooms.",
              "Strict collection procedures with authorised adults only.",
              "All staff hold or are working towards paediatric first-aid qualifications.",
              "Clear policies for medication, allergies and medical conditions.",
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
