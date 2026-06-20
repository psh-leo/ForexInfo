"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/edukasi", label: "Edukasi Forex" },
  { href: "/analisis", label: "Analisis Teknikal" },
  { href: "/grafik", label: "Grafik Harga" },
  { href: "/tentang", label: "Tentang" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for subtle background opacity change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nav-bg/95 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-nav-bg"
      } border-b border-border`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* ===== Logo ===== */}
          <Link
            href="/"
            className="flex items-center gap-1 group"
          >
            {/* Logo icon */}
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mr-1 group-hover:bg-primary/20 transition-colors duration-300">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M3 17L9 11L13 15L21 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 7H21V11"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-primary">Forex</span>
              <span className="text-foreground">Info</span>
            </span>
          </Link>

          {/* ===== Desktop Navigation ===== */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {/* Active indicator underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
                  )}
                  {/* Hover background */}
                  {!isActive && (
                    <span className="absolute inset-0 rounded-lg bg-foreground/0 hover:bg-foreground/5 transition-colors duration-300" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ===== Mobile Hamburger ===== */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:border-primary/30 transition-colors duration-300"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                  mobileOpen
                    ? "rotate-45 translate-y-[7px]"
                    : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                  mobileOpen
                    ? "-rotate-45 -translate-y-[7px]"
                    : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu Overlay ===== */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ===== Mobile Menu Panel ===== */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-nav-bg border-b border-border transition-all duration-300 ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted hover:text-foreground hover:bg-surface"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Dot indicator */}
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-primary" : "bg-border"
                  }`}
                />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
