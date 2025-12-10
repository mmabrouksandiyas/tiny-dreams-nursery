// src/pages/Programs.tsx
import {
  Card,
} from "@/components/ui/card";
import {
  CheckCircle,
  Sparkles,
  BookOpen,
  Heart,
  Palette,
  Globe,
  Shapes,
  Leaf,
  Baby,
  Sun,
  Users,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";

// ✅ Import images via @assets alias
import programsHero from "@assets/images/programs-hero.png";
import reggioBanner from "@assets/images/reggio-banner.png";
import learningStagesImg from "@assets/images/learning-stages.png";
import observationImg from "@assets/images/observation.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const EYFS_AREAS = [
  {
    icon: Heart,
    title: "Personal, Social & Emotional Development",
    desc: "Self-regulation, confidence, friendships, emotional resilience.",
  },
  {
    icon: BookOpen,
    title: "Communication & Language",
    desc: "Vocabulary growth, listening, early literacy foundations.",
  },
  {
    icon: Shapes,
    title: "Mathematics",
    desc: "Counting, patterns, shapes, problem solving, logical thinking.",
  },
  {
    icon: Palette,
    title: "Creative Arts & Expression",
    desc: "Art, music, drama, imagination, creative thinking.",
  },
  {
    icon: Globe,
    title: "Understanding the World",
    desc: "Nature, culture, community, early science concepts.",
  },
  {
    icon: Sparkles,
    title: "Physical Development",
    desc: "Gross and fine motor skills, coordination, self-care skills.",
  },
];

const ENVIRONMENT_FEATURES = [
  {
    icon: Leaf,
    title: "Natural, Calming Spaces",
    desc: "Wood, plants, fabrics, and neutral colors create peaceful environments.",
  },
  {
    icon: Palette,
    title: "Learning Corners",
    desc: "Well-planned areas for literacy, art, science, role-play, and construction.",
  },
  {
    icon: Sun,
    title: "Environment as the ‘Third Teacher’",
    desc: "Every element is intentionally designed to support exploration and independence.",
  },
];

const LEARNING_STAGES = [
  {
    icon: Baby,
    title: "Birth to 1 Year",
    desc:
      "Attachment, sensory exploration, early communication, physical milestones.",
  },
  {
    icon: Users,
    title: "1 to 2 Years",
    desc:
      "Role-play, messy play, vocabulary growth, music & movement, independence.",
  },
  {
    icon: Brain,
    title: "2 to 3 Years",
    desc:
      "Creative arts, mark-making, imaginative play, early numeracy & literacy concepts.",
  },
  {
    icon: Sparkles,
    title: "3 to 4 Years",
    desc:
      "School readiness: pencil control, early phonics, numeracy, emotional regulation.",
  },
];

const REGGIO_POINTS = [
  "Environment designed with purpose, beauty, and natural materials",
  "Open-ended play resources to spark imagination",
  "Child-led inquiry projects and explorations",
  "Strong emphasis on creativity, independence, and collaboration",
];

const ASSESSMENT_POINTS = [
  "Learning journals for every child",
  "Daily documentation and photos",
  "Developmental checkpoints",
  "Individual next-step planning",
  "Regular parent communication",
];

export default function Programs() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* HERO */}
      <motion.section
        className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 py-20 text-center text-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="relative mx-auto max-w-5xl px-4">
          {/* Soft glow */}
          <div className="pointer-events-none absolute -top-24 -left-32 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-32 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

          <motion.h1
            className="relative mb-4 text-4xl font-bold sm:text-5xl"
            variants={fadeUp}
          >
            Our Programs &amp; Curriculum
          </motion.h1>
          <motion.p
            className="relative text-lg text-white/90 sm:text-xl"
            variants={fadeUp}
          >
            A play-based, child-led learning journey inspired by EYFS and
            Reggio Emilia — nurturing confident, curious, and capable learners.
          </motion.p>
        </div>
      </motion.section>

      {/* CURRICULUM PHILOSOPHY + BANNER */}
      <section className="bg-white pt-16 pb-10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.2fr,1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="mb-2 text-sm font-semibold uppercase text-pink-600">
              Our Philosophy
            </p>
            <h2 className="mb-4 text-3xl font-bold">
              A Holistic, Child-Led Learning Experience
            </h2>
            <p className="max-w-3xl text-gray-700">
              Our curriculum blends the British EYFS framework with the Reggio
              Emilia philosophy, emphasizing exploration, creativity, emotional
              wellbeing, communication, and meaningful relationships. Children
              learn through hands-on experiences, guided discovery, and
              open-ended play — developing essential life skills at their own
              pace.
            </p>
          </motion.div>

          <motion.div
            className="h-56 overflow-hidden rounded-3xl shadow-lg sm:h-64 lg:h-72"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <img
              src={programsHero}
              alt="Children engaged in learning activities"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* EYFS AREAS OF LEARNING */}
      <section className="bg-gray-50 py-16">
        <motion.div
          className="mx-auto max-w-6xl px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="mb-3 text-3xl font-bold">EYFS Areas of Learning</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Our program follows the Early Years Foundation Stage (EYFS),
            supporting children&apos;s development across prime and specific
            areas of learning.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 grid max-w-6xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {EYFS_AREAS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full rounded-3xl bg-white p-6 shadow-md">
                  <Icon className="mb-4 h-10 w-10 text-pink-600" />
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* REGGIO EMILIA APPROACH + IMAGE */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="mb-2 text-sm font-semibold uppercase text-pink-600">
              Our Approach
            </p>
            <h2 className="mb-4 text-3xl font-bold">Inspired by Reggio Emilia</h2>
            <p className="mb-6 text-gray-700">
              Guided by the Reggio Emilia philosophy, we view children as
              capable, curious learners. We encourage them to explore,
              investigate, and express themselves through creativity, movement,
              storytelling, and collaboration. The learning environment itself
              acts as a “third teacher.”
            </p>

            <ul className="space-y-3">
              {REGGIO_POINTS.map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <CheckCircle className="mt-1 h-5 w-5 text-pink-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="h-72 overflow-hidden rounded-3xl shadow-lg md:h-96"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <img
              src={reggioBanner}
              alt="Reggio-inspired classroom"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* LEARNING ENVIRONMENT */}
      <section className="bg-gray-50 py-20">
        <motion.div
          className="mx-auto max-w-6xl px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="mb-10 text-center text-3xl font-bold">
            The Learning Environment
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ENVIRONMENT_FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full rounded-3xl bg-white p-6 shadow-md transition-shadow hover:shadow-xl">
                  <Icon className="mb-4 h-10 w-10 text-pink-600" />
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* LEARNING STAGES + BANNER */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.2fr,1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h2 className="mb-4 text-3xl font-bold">Learning Stages (0–4 Years)</h2>
            <p className="mb-8 max-w-2xl text-gray-700">
              From birth to four years, children progress through exciting
              milestones. Our rooms and curriculum are designed to meet the
              needs of each stage, from secure attachments to school readiness.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {LEARNING_STAGES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="h-full rounded-3xl border bg-gray-50 p-5 shadow-md"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <Icon className="h-8 w-8 text-purple-600" />
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </Card>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="h-64 overflow-hidden rounded-3xl shadow-lg sm:h-72"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <img
              src={learningStagesImg}
              alt="Children at different learning stages"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* OBSERVATION & ASSESSMENT + IMAGE */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="mb-2 text-sm font-semibold uppercase text-pink-600">
              How We Support Growth
            </p>
            <h2 className="mb-4 text-3xl font-bold">Observation &amp; Assessment</h2>
            <p className="mb-6 text-gray-700">
              Educators document children&apos;s learning through observations,
              photos, and reflective notes. These insights help us understand
              each child&apos;s interests, needs, and developmental progress.
            </p>

            <ul className="space-y-3">
              {ASSESSMENT_POINTS.map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <CheckCircle className="mt-1 h-5 w-5 text-pink-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="h-64 overflow-hidden rounded-3xl shadow-lg sm:h-72 md:h-80"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <img
              src={observationImg}
              alt="Teacher observing and documenting children's learning"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* POWER OF PLAY */}
      <section className="bg-white py-20">
        <motion.div
          className="mx-auto max-w-5xl px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="mb-4 text-3xl font-bold">The Power of Play</h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            Play is the foundation of learning. It allows children to experiment,
            express, negotiate, problem-solve, and discover the world around
            them. Through play, children develop language, creativity, motor
            skills, emotional resilience, and confidence.
          </p>
        </motion.div>
      </section>

      {/* INCLUSION */}
      <section className="bg-gray-50 py-20">
        <motion.div
          className="mx-auto max-w-6xl px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="mb-4 text-3xl font-bold">Inclusion &amp; Diversity</h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            We celebrate culture, language, ability, and uniqueness. Every child
            receives tailored support to help them achieve their fullest
            potential in a welcoming, inclusive environment.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
