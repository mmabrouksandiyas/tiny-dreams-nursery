// src/pages/Locations.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import { Link } from "wouter";

// ✅ Import actual images using your @assets alias
import khalidiyaPhoto from "@assets/Khalidiyah_branch.png";
import mamouraPhoto from "@assets/almamoura_branch.png";

type Location = {
  name: string;
  address: string;
  phone: string;
  mobile: string;
  hours: string;
  mapSrc: string;
  photo: string;
};

const locations: Location[] = [
  {
    name: "Khalidiya Garden Branch",
    address: "Villa 16, Alrimth Street, Opposite Makani Khalidiya Garden",
    phone: "02-6655789",
    mobile: "056-5152795",
    hours: "Mon–Fri: 7:30 AM – 5:30 PM",
    mapSrc:
      "https://www.google.com/maps?q=Tiny%20Dreams%20Nursery%20Khalidiya%20Abu%20Dhabi&output=embed",
    photo: khalidiyaPhoto,
  },
  {
    name: "Al Mamoura Branch",
    address:
      "Villa 89, Aljimi Street, Beside Azerbaijan Embassy, Behind Al Mamoura British Academy",
    phone: "02-6650407",
    mobile: "056-4414262",
    hours: "Mon–Fri: 7:30 AM – 5:30 PM",
    mapSrc:
      "https://www.google.com/maps?q=Tiny%20Dreams%20Nursery%20Al%20Mamoura%20Abu%20Dhabi&output=embed",
    photo: mamouraPhoto,
  },
];

export default function Locations() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Page header */}
      <section className="border-b border-gray-100 bg-white pt-12 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-pink-600">
            Our Locations
          </p>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Visit Tiny Dreams Nurseries in Abu Dhabi
          </h1>
          <p className="max-w-2xl text-gray-600">
            We currently welcome families at two outstanding branches in Abu
            Dhabi. Explore our locations on the map and book a tour at the
            branch that suits you best.
          </p>
        </div>
      </section>

      {/* Locations grid */}
      <section className="pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {locations.map((loc) => (
              <Card
                key={loc.name}
                className="flex flex-col overflow-hidden rounded-3xl border-0 bg-white shadow-lg"
              >
                {/* Photo */}
                <img
                  src={loc.photo}
                  alt={`${loc.name} exterior`}
                  className="h-72 w-full rounded-t-3xl object-cover sm:h-80"
                  loading="lazy"
                />

                {/* Map */}
                <div className="relative h-64 w-full overflow-hidden rounded-b-3xl bg-gray-100">
                  <iframe
                    src={loc.mapSrc}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    title={`${loc.name} location map`}
                  />
                </div>

                {/* Info + CTA */}
                <div className="flex flex-1 flex-col p-8">
                  <CardHeader className="mb-4 p-0">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <MapPin className="h-6 w-6 text-pink-600" />
                      {loc.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-4 p-0">
                    {/* Address */}
                    <div className="flex gap-3">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-pink-600" />
                      <p className="text-gray-700">{loc.address}</p>
                    </div>

                    {/* Phone numbers */}
                    <div className="flex gap-3">
                      <Phone className="mt-1 h-5 w-5 shrink-0 text-pink-600" />
                      <div className="space-y-0.5">
                        <p className="font-semibold text-gray-700">
                          {loc.phone}
                        </p>
                        <p className="font-semibold text-gray-700">
                          {loc.mobile}
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex gap-3">
                      <Clock className="mt-1 h-5 w-5 shrink-0 text-pink-600" />
                      <p className="text-gray-700">{loc.hours}</p>
                    </div>
                  </CardContent>

                  {/* CTA row */}
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <a
                      href={loc.mapSrc.replace("output=embed", "")}
                      className="text-sm text-pink-600 underline hover:text-pink-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>

                    <Link href="/book-tour">
                      <Button className="button-primary">Book a Tour</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
