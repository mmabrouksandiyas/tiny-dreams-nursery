// src/components/home/FactsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MapPin, BookOpen, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

export function FactsSection() {
  return (
    <section id="facts" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Tiny Dreams at a Glance</h2>
          <p className="text-gray-600 mt-4">
            Key facts and figures about our nurseries and community.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 items-stretch">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="h-full transform-gpu"
          >
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-pink-600" />
                  Branches
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-auto">
                <p className="text-3xl font-bold text-gray-900 mb-1">2</p>
                <p className="text-gray-600 text-sm">Nurseries in Abu Dhabi</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="h-full transform-gpu"
          >
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  ADEK Rating
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-3xl font-bold text-gray-900 mb-1">
                  Outstanding
                </p>
                <p className="text-gray-600 text-sm">
                  Recognized by ADEK for quality and care
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="h-full transform-gpu"
          >
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-cyan-600" />
                  Age Group
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-auto">
                <p className="text-3xl font-bold text-gray-900 mb-1">0–4 years</p>
                <p className="text-gray-600 text-sm">
                  Early years education and care
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="h-full transform-gpu"
          >
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-purple-600" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-auto">
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  500+ Families
                </p>
                <p className="text-gray-600 text-sm">
                  A growing, supportive parent community
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
