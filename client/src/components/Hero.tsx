// src/components/home/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { Heart, Globe, BookOpen, Sparkles } from "lucide-react";
import heroBanner from "@assets/hero-banner.jpg"; // 👈 use alias

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-8 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <img
            src={heroBanner} // 👈 use imported asset
            alt="Children playing in nursery"
            className="w-full h-96 object-cover rounded-3xl shadow-xl"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent rounded-3xl" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center rounded-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Welcome to Tiny Dreams Nurseries
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl drop-shadow-md">
              A world of possibilities where every child feels valued, confident,
              and curious.
            </p>
            <a href="#facts">
              <Button className="button-primary text-lg px-8 py-6">
                Explore More
              </Button>
            </a>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-medium text-white/90">
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4" />
                Trusted since 2015
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4" />
                Bilingual learning environment
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <BookOpen className="w-4 h-4" />
                British EYFS Framework
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                Reggio Emilia & Curiosity Approach
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
