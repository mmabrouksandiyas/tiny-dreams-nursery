// src/components/layout/Footer.tsx
import { Link } from "wouter";
import logo from "@assets/tdn-logo.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          {/* Brand + tagline */}
          <div>
            <Link href="/">
              <img
                src={logo}
                alt="Tiny Dreams Nursery"
                className="mb-4 h-8 w-auto cursor-pointer"
              />
            </Link>
            <p className="text-gray-400">
              Nurturing young minds, building bright futures.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-bold text-white">Quick Links</h4>
            <nav aria-label="Footer quick links">
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/">
                    <span className="cursor-pointer transition hover:text-white">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <a
                    href="#about"
                    className="transition hover:text-white"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <Link href="/rooms">
                    <span className="cursor-pointer transition hover:text-white">
                      Rooms
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/parents">
                    <span className="cursor-pointer transition hover:text-white">
                      Parents
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Khalidiya branch */}
          <div>
            <h4 className="mb-4 font-bold text-white">Khalidiya Branch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                📞{" "}
                <a
                  href="tel:026655789"
                  className="hover:text-white"
                >
                  02-6655789
                </a>
              </li>
              <li>
                📱{" "}
                <a
                  href="tel:0565152795"
                  className="hover:text-white"
                >
                  056-5152795
                </a>
              </li>
              <li>
                📧{" "}
                <a
                  href="mailto:admin@tinydreams.ae"
                  className="hover:text-white"
                >
                  admin@tinydreams.ae
                </a>
              </li>
            </ul>
          </div>

          {/* Al Mamoura branch */}
          <div>
            <h4 className="mb-4 font-bold text-white">Al Mamoura Branch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                📞{" "}
                <a
                  href="tel:026650407"
                  className="hover:text-white"
                >
                  02-6650407
                </a>
              </li>
              <li>
                📱{" "}
                <a
                  href="tel:0564414262"
                  className="hover:text-white"
                >
                  056-4414262
                </a>
              </li>
              <li>
                📧{" "}
                <a
                  href="mailto:almamouraadmin@tinydreams.ae"
                  className="hover:text-white"
                >
                  almamouraadmin@tinydreams.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {year} Tiny Dreams Nurseries. All rights reserved. | Rated Outstanding
            by ADEK
          </p>
        </div>
      </div>
    </footer>
  );
}
