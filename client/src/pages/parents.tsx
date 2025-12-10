// src/pages/Parents.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, Users, Sparkles, ShieldCheck, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Parents() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Parent Partnership</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            At Tiny Dreams Nurseries, parents are at the heart of everything we do.
            Together, we nurture confidence, curiosity, and a joyful start to learning.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="pt-16 pb-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">A Partnership Built on Trust</h2>
          <p className="text-gray-700 max-w-3xl">
            We believe early years education is a shared journey between families and our educators.
            When nursery and home work together, children thrive emotionally, socially, and academically.
            Our goal is to ensure every parent feels confident, connected, and supported.
          </p>
        </div>
      </section>

      {/* WHY PARENTS LOVE US */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Parents Love Tiny Dreams
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Warm Environment",
                desc: "A nurturing, family-like atmosphere where every child is valued.",
              },
              {
                icon: Users,
                title: "Strong Communication",
                desc: "Daily updates, photos, progress notes, and ongoing dialogue.",
              },
              {
                icon: Sparkles,
                title: "Smooth Transitions",
                desc: "Gentle settling-in routines to help your child feel secure.",
              },
              {
                icon: ShieldCheck,
                title: "Safe & Trusted",
                desc: "Strict safeguarding, trained staff, and a secure environment.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={i}
                  className="rounded-3xl shadow-md p-6 hover:shadow-xl transition-shadow bg-white"
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

      {/* PARENT APP SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-pink-600 font-semibold uppercase mb-2">
              Parent App
            </p>
            <h2 className="text-3xl font-bold mb-4">
              Stay Connected Throughout the Day
            </h2>
            <p className="text-gray-700 mb-6">
              Our Parent App keeps families up to date with daily photos,
              activities, meals, sleep times, and developmental progress.
              Even during a busy day, you can stay connected with your child’s learning journey.
            </p>

            <ul className="space-y-3">
              {[
                "Daily photos and updates",
                "Child development tracking",
                "Direct communication with educators",
                "Instant notifications and reminders",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-pink-600 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-cyan-400 to-pink-500 h-72 md:h-96 shadow-lg" />
        </div>
      </section>

      {/* SAFETY SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Safety, Security & Wellbeing
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Secure entry systems and visitor checks",
              "Trained staff in first aid & safeguarding",
              "Age-appropriate environments",
              "Daily health & hygiene routines",
              "Emergency drills and action plans",
              "Wellbeing-first learning culture",
            ].map((item, i) => (
              <Card key={i} className="rounded-2xl bg-white p-6 shadow-md">
                <p className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-pink-600 mt-1" />
                  {item}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Parents Say</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Happy Parent",
                text: "TDN is our favorite place to keep our little one safe. The love and dedication mean so much.",
              },
              {
                name: "Proud Parent",
                text: "My child smiles every day after nursery. The staff truly care and it shows.",
              },
              {
                name: "Satisfied Parent",
                text: "A wonderful, nurturing environment. Highly recommended!",
              },
              {
                name: "Grateful Parent",
                text: "A place where my daughter learns, grows, and creates beautiful memories.",
              },
            ].map((item, i) => (
              <Card key={i} className="rounded-3xl p-8 shadow-md bg-gray-50 border border-gray-200">
                <p className="text-gray-700 italic mb-6">"{item.text}"</p>
                <p className="font-bold text-gray-900">{item.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey With Us</h2>
          <p className="text-white/90 mb-6">
            Visit your nearest Tiny Dreams branch and discover how we support children and families.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-tour">
              <Button className="bg-white text-pink-600 font-semibold px-8 py-6 hover:bg-gray-100">
                Book a Tour
              </Button>
            </Link>

            <Link href="/locations">
              <Button className="bg-white/20 border border-white text-white px-8 py-6 hover:bg-white/30">
                View Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
