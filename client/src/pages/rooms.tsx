import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, BookOpen, Smile, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Rooms() {
  const rooms = [
    {
      id: "nest",
      name: "The Nest",
      age: "Birth to 1 year",
      icon: Heart,
      gradient: "from-pink-500/90 via-pink-400/90 to-rose-400/90",
      tagline: "A calm, nurturing start to your child’s journey.",
      highlights: [
        "A calm, safe and nurturing space with a dedicated key person.",
        "Focus on key developmental milestones like head control, rolling and sitting.",
        "Gentle social communication through songs, games and nursery rhymes.",
        "Calming massages and spa-style sessions to support relaxation.",
        "Fine motor activities to develop pincer grip and manual dexterity.",
      ],
    },
    {
      id: "nook",
      name: "The Nook",
      age: "1–2 years",
      icon: Sparkles,
      gradient: "from-cyan-400/90 via-sky-400/90 to-teal-400/90",
      tagline: "A creative, social space that awakens curiosity.",
      highlights: [
        "Role play area with kitchen and utensils for imagination and social growth.",
        "Cosy book corner to spark early literacy and communication.",
        "Messy play and arts & crafts to enhance physical and cognitive development.",
        "Regular music and movement sessions, including ‘Baby Boogie’.",
        "Activities that build rhythm, coordination and confidence.",
      ],
    },
    {
      id: "atelier",
      name: "The Atelier",
      age: "2–3 years",
      icon: BookOpen,
      gradient: "from-purple-500/90 via-fuchsia-500/90 to-pink-500/90",
      tagline: "A vibrant studio for creativity, exploration and self-expression.",
      highlights: [
        "Seasonal-themed role play in a large, engaging kitchen area.",
        "Creative and messy play with paints, glue and natural materials.",
        "Mark-making stations that foster early writing skills.",
        "Small world area with cars, dinosaurs, blocks and more.",
        "Cosy book corner and regular yoga sessions for calm and mindfulness.",
      ],
    },
    {
      id: "studio",
      name: "The Studio",
      age: "3–4 years",
      icon: Smile,
      gradient: "from-amber-400/90 via-orange-400/90 to-pink-500/90",
      tagline: "A warm, structured space that gently prepares children for school.",
      highlights: [
        "Stimulating mathematical resources to build number confidence.",
        "Drawing and writing area to develop pencil control and fine motor skills.",
        "Cosy book corner for quiet time and a love of stories.",
        "Home corner for imaginative play and social interaction.",
        "Feelings corner and group yoga to support self-regulation and mindfulness.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero / Intro */}
      <section className="pt-12 pb-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-pink-600 font-semibold uppercase tracking-wide text-sm mb-2">
            Our Learning Rooms
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Spaces Designed for Every Stage of Early Childhood
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Each Tiny Dreams room is carefully designed to meet the needs of a
            specific age group. From nurturing newborns to preparing confident
            preschoolers, every environment supports your child’s growth,
            curiosity and happiness.
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {rooms.map((room, index) => {
            const Icon = room.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={room.id}
                id={room.id}
                className={`grid gap-8 lg:gap-12 items-stretch lg:grid-cols-2 ${
                  isReversed ? "lg:auto-cols-fr lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text side */}
                <div className="flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-3 py-1 mb-3 w-max text-xs font-semibold text-pink-700">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-[10px] text-white">
                      {index + 1}
                    </span>
                    Learning Room
                  </div>

                  <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-100">
                      <Icon className="w-6 h-6 text-pink-600" />
                    </span>
                    {room.name}
                  </h2>

                  <p className="text-sm font-semibold text-pink-600 mb-4">
                    {room.age}
                  </p>

                  <p className="text-gray-700 mb-5">{room.tagline}</p>

                  <ul className="space-y-3">
                    {room.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual / Mood side */}
                <div className="relative">
                  <div
                    className={`relative h-full min-h-[260px] rounded-3xl bg-gradient-to-br ${room.gradient} p-[2px] shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <div className="h-full w-full rounded-3xl bg-white/95 backdrop-blur-sm flex flex-col justify-between p-6 sm:p-8">
                      <div className="space-y-4">
                        <p className="text-xs font-medium uppercase tracking-wide text-pink-500">
                          Inside {room.name}
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Each element in {room.name} is carefully chosen to
                          support your child’s emotional, social and physical
                          development — from soft furnishings and natural
                          materials to open-ended resources that inspire play.
                        </p>
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm">
                        <div className="rounded-2xl bg-pink-50 px-3 py-2">
                          <p className="font-semibold text-pink-700 mb-1">
                            Focus Areas
                          </p>
                          <p className="text-gray-700">
                            {index === 0 && "Attachment, sensory play, motor skills"}
                            {index === 1 && "Imagination, language, messy play"}
                            {index === 2 && "Creativity, early writing, yoga"}
                            {index === 3 && "School readiness, literacy, wellbeing"}
                          </p>
                        </div>
                        <div className="rounded-2xl bg-cyan-50 px-3 py-2">
                          <p className="font-semibold text-cyan-700 mb-1">
                            Daily Experiences
                          </p>
                          <p className="text-gray-700">
                            {index === 0 &&
                              "Soft play, tummy time, songs and gentle routines."}
                            {index === 1 &&
                              "Role play, stories, music and movement sessions."}
                            {index === 2 &&
                              "Art projects, small world play and quiet reading."}
                            {index === 3 &&
                              "Group activities, focused tasks and calm reflection."}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-pink-100 px-3 py-1 text-[11px] font-medium text-pink-700">
                          Nurturing environment
                        </span>
                        <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-medium text-cyan-700">
                          Child-led learning
                        </span>
                        <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-[11px] font-medium text-purple-700">
                          Safe & supportive
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-6 sm:px-10 py-10 sm:py-12 text-center text-white shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              What are you waiting for?
            </h2>
            <p className="text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Visit your nearest Tiny Dreams branch and start the first
              milestone in your child’s education and life journey. See our
              rooms in action, meet our team and feel the atmosphere for
              yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/book-tour">
                <Button className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8">
                  Book a Tour
                </Button>
              </Link>
              <Link href="/locations">
                <Button className="bg-white/10 border border-white text-white hover:bg-white/20 font-semibold px-8">
                  View Locations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
