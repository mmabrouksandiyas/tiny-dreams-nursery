// app/rooms/page.tsx  OR  pages/rooms.tsx
import { Button } from "../../src/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Admission Requirements</h2>
            <p className="text-gray-600 mt-4">
              Admission.
            </p>
          </div>

          <div className="space-y-12">
            {/* Paste the room blocks you already had here (The Nest, The Nook, The Atelier, The Studio) */}
          </div>
        </div>
      </main>
    </div>
  );
}
