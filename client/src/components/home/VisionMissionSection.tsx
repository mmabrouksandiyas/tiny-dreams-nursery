// src/components/home/VisionMissionSection.tsx
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Sparkles, Heart } from "lucide-react";

export function VisionMissionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">Our Vision & Mission</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Tiny Dreams Nurseries exists to nurture hearts and minds, so every
            child feels valued, confident and curious about the world around
            them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-3xl shadow-md bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-pink-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To be a nurturing and inspiring early childhood centre where
                every child feels valued, confident and curious – a joyful place
                where tiny dreams grow into bright futures.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-md bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-pink-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To nurture children in a safe, caring and inspiring environment,
                supporting their growth through play, exploration and positive
                relationships – in close partnership with families.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
