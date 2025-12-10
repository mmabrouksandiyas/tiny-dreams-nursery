// src/components/Navbar.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import logo from "@assets/tdn-logo.svg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="relative mx-auto flex max-w-7xl items-stretch px-4 sm:px-6 lg:px-8">
        {/* Logo column */}
        <div className="flex items-center pr-6">
          <Link href="/">
            <img
              src={logo}
              alt="Tiny Dreams Nursery"
              className="h-16 w-auto cursor-pointer md:h-20"
            />
          </Link>
        </div>

        {/* Right side */}
        <div className="flex flex-1 flex-col items-end">
          {/* Top line: Careers / News / Resources (desktop only) */}
          <div className="hidden h-9 w-full items-center justify-end gap-6 pr-10 text-xs text-gray-600 sm:text-sm md:flex md:pr-24">
            <Link href="/careers" className="hover:text-pink-600 transition-colors">
              Careers
            </Link>
            <Link href="/news" className="hover:text-pink-600 transition-colors">
              News
            </Link>
            <Link href="/resources" className="hover:text-pink-600 transition-colors">
              Resources
            </Link>
          </div>

          {/* Main nav + CTAs */}
          <div className="flex w-full items-center justify-between py-4">
            {/* Desktop nav links */}
            <div className="hidden items-center gap-8 md:flex">
              <Link href="/" className="nav-link">
                Home
              </Link>

              {/* same-page section → anchor */}
              <a href="#about" className="nav-link">
                Our Story
              </a>

              <Link href="/programs" className="nav-link">
                Programs
              </Link>

              <Link href="/admission" className="nav-link">
                Admission
              </Link>
              <Link href="/parents" className="nav-link">
                Parents
              </Link>
              <Link href="/locations" className="nav-link">
                Locations
              </Link>
            </div>

            {/* CTAs + Mobile menu button */}
            <div className="flex items-center gap-3">
              {/* Desktop CTAs */}
              <div className="hidden gap-3 sm:flex">
                <Link href="/book-tour">
                  <Button className="button-secondary">
                    Book A Tour
                  </Button>
                </Link>
                <Button className="button-primary">Register Now</Button>
              </div>

              {/* Mobile: only Tour + hamburger */}
              <div className="flex items-center gap-2 md:hidden">
                <Link href="/book-tour">
                  <Button className="button-secondary px-3 py-2 text-xs">
                    Book a Tour
                  </Button>
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileOpen(prev => !prev)}
                  className="ml-1 inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 hover:bg-gray-50"
                >
                  {mobileOpen ? (
                    <X className="h-5 w-5 text-gray-800" />
                  ) : (
                    <Menu className="h-5 w-5 text-gray-800" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="absolute inset-x-0 top-full border-t border-gray-200 bg-white/98 shadow-lg md:hidden">
            <div className="space-y-1 px-4 py-4">
              <Link
                href="/"
                onClick={closeMobile}
                className="block py-2 text-sm text-gray-800 hover:text-pink-600"
              >
                Home
              </Link>
              <a
                href="#about"
                onClick={closeMobile}
                className="block py-2 text-sm text-gray-800 hover:text-pink-600"
              >
                Our Story
              </a>
              <Link
                href="/programs"
                onClick={closeMobile}
                className="block py-2 text-sm text-gray-800 hover:text-pink-600"
              >
                Programs
              </Link>
              <Link
                href="/admission"
                onClick={closeMobile}
                className="block py-2 text-sm text-gray-800 hover:text-pink-600"
              >
                Admission
              </Link>
              <Link
                href="/parents"
                onClick={closeMobile}
                className="block py-2 text-sm text-gray-800 hover:text-pink-600"
              >
                Parents
              </Link>
              <Link
                href="/locations"
                onClick={closeMobile}
                className="block py-2 text-sm text-gray-800 hover:text-pink-600"
              >
                Locations
              </Link>

              <div className="mt-3 border-t border-gray-200 pt-3">
                <Link
                  href="/careers"
                  onClick={closeMobile}
                  className="block py-2 text-sm text-gray-800 hover:text-pink-600"
                >
                  Careers
                </Link>
                <Link
                  href="/news"
                  onClick={closeMobile}
                  className="block py-2 text-sm text-gray-800 hover:text-pink-600"
                >
                  News
                </Link>
                <Link
                  href="/resources"
                  onClick={closeMobile}
                  className="block py-2 text-sm text-gray-800 hover:text-pink-600"
                >
                  Resources
                </Link>
              </div>

              <div className="mt-3 flex flex-col gap-2 border-t border-gray-200 pt-3">
                <Link href="/book-tour" onClick={closeMobile}>
                  <Button className="button-secondary w-full">
                    Book A Tour
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
