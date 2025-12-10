// src/components/home/OurStorySection.tsx
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";
import activitiesImage from "@assets/activities-image.jpg"; // adjust path if needed

const HIGHLIGHTS = [
  "EYFS Curriculum Based",
  "Reggio Emilia Inspired Environment",
  "Outstanding ADEK Rating",
];

export function OurStorySection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text column */}
          <div className="space-y-6">
            <header>
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-pink-600">
                Our Story
              </p>
              <h2 className="section-title">
                Tiny Dreams Early Learning Centre
              </h2>
            </header>

            <p className="text-lg leading-relaxed text-gray-700">
              Tiny Dreams Nurseries were created to provide a warm, high-quality
              early years environment where children can feel safe, loved, and
              inspired to learn. With two Outstanding ADEK-rated nurseries in
              Abu Dhabi, we support children from birth to four years old
              through a carefully designed early learning journey.
            </p>

            <p className="leading-relaxed text-gray-600">
              Our team of passionate educators works closely with families to
              understand every child’s unique personality, interests, and needs.
              Together, we create a nurturing space that supports confidence,
              independence, and a lifelong love of learning.
            </p>

            <ul className="space-y-3" aria-label="Key strengths of Tiny Dreams Nurseries">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-pink-600" />
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/programs">
              <Button className="button-primary">
                Discover Our Philosophy
              </Button>
            </Link>
          </div>

          {/* Visual column */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-linear-to-br from-cyan-400 to-pink-500 opacity-20 blur-2xl" />
            <div className="relative mx-auto flex h-96 w-96 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 to-pink-500 p-1">
              <img
                src={activitiesImage}
                alt="Children happily engaged in early learning activities"
                className="h-full w-full rounded-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
