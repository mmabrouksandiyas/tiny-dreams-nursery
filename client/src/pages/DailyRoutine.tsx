// src/pages/DailyRoutine.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock, UtensilsCrossed, Sun, MoonStar } from "lucide-react";

export default function DailyRoutine() {
  const schedule = [
    { time: "7:30 – 9:00", title: "Arrival & Free Play" },
    { time: "9:00 – 9:30", title: "Morning Circle & Songs" },
    { time: "9:30 – 10:30", title: "Focused Activities & Invitations to Play" },
    { time: "10:30 – 11:15", title: "Outdoor Play" },
    { time: "11:15 – 12:00", title: "Lunch / Snack" },
    { time: "12:00 – 2:00", title: "Rest, Quiet Time & Small Group Learning" },
    { time: "2:00 – 3:30", title: "Afternoon Activities & Outdoor Play" },
    { time: "3:30 – 5:30", title: "Late Snack & Home Time" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 py-20 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            A Day at Tiny Dreams
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            A predictable, nurturing routine that balances play, rest, learning
            and care.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="pt-16 pb-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="flex gap-3">
            <Clock className="w-6 h-6 text-pink-600 mt-1" />
            <p className="text-gray-700 text-sm">
              A familiar daily rhythm helps children feel secure and understand
              what will happen next.
            </p>
          </div>
          <div className="flex gap-3">
            <UtensilsCrossed className="w-6 h-6 text-pink-600 mt-1" />
            <p className="text-gray-700 text-sm">
              Mealtimes are relaxed, social opportunities where children share
              food and conversation.
            </p>
          </div>
          <div className="flex gap-3">
            <MoonStar className="w-6 h-6 text-pink-600 mt-1" />
            <p className="text-gray-700 text-sm">
              Younger children have dedicated sleep/rest times, with cosy,
              calm spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Sample Daily Routine
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {schedule.map((item) => (
              <Card
                key={item.time + item.title}
                className="rounded-3xl bg-white p-5 shadow-md flex justify-between items-center"
              >
                <div>
                  <p className="text-sm font-semibold text-pink-600">
                    {item.time}
                  </p>
                  <p className="text-gray-800">{item.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
