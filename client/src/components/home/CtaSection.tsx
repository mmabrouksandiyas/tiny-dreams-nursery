// src/components/home/CtaSection.tsx
import { Button } from "../ui/button";
import { Link } from "wouter";

export function CtaSection() {
  return (
    <section className="py-20 bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Join Tiny Dreams?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Give your child the gift of a nurturing, creative learning environment
          where they can thrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book-tour">
            <Button className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6 font-bold">
              Schedule a Tour
            </Button>
          </Link>
          <Link href="/locations">
            <Button className="bg-white/20 text-white hover:bg-white/30 border-2 border-white text-lg px-8 py-6 font-bold">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
