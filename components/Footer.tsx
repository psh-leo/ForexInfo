import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-nav-bg border-t border-border">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===== Top section ===== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
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
            <span className="text-lg font-bold tracking-tight">
              <span className="text-primary">Forex</span>
              <span className="text-foreground">Info</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              { href: "/", label: "Beranda" },
              { href: "/edukasi", label: "Edukasi" },
              { href: "/analisis", label: "Analisis" },
              { href: "/grafik", label: "Grafik" },
              { href: "/tentang", label: "Tentang" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ===== Divider ===== */}
        <div className="border-t border-border mb-8" />

        {/* ===== Bottom section ===== */}
        <div className="flex flex-col items-center text-center gap-3">
          <p className="text-sm text-muted">
            &copy; {currentYear}{" "}
            <span className="text-foreground font-medium">ForexInfo</span>{" "}
            &mdash; Website Informasi Foreign Exchange
          </p>
          <p className="text-xs text-muted/60">
            Dibuat untuk keperluan akademis Universitas Gunadarma
          </p>

          {/* Decorative dots */}
          <div className="flex items-center gap-1.5 mt-2">
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            <span className="w-1 h-1 rounded-full bg-secondary/40" />
            <span className="w-1 h-1 rounded-full bg-primary/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
