import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ForexInfo — Platform Edukasi Forex",
  description: "Platform informasi dan edukasi foreign exchange untuk investor pemula hingga berpengalaman.",
};

export default function IndexPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Subtle CSS Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(to right, #ffffff15 1px, transparent 1px), linear-gradient(to bottom, #ffffff15 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
        {/* Left — Text */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Pahami Pasar <br className="hidden lg:block" /><span className="text-primary">Forex</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted max-w-xl mb-10 animate-slide-down" style={{ animationDelay: '200ms' }}>
            Platform informasi dan edukasi foreign exchange untuk investor pemula hingga berpengalaman.
          </p>

          <Link
            href="/beranda"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold text-lg rounded-xl hover:bg-primary-hover hover:scale-105 transition-all shadow-lg shadow-primary/20 animate-slide-down"
            style={{ animationDelay: '300ms' }}
          >
            Masuk ke Platform
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Right — Image */}
        <div className="relative w-full max-w-md md:max-w-lg mx-auto lg:max-w-full animate-slide-down" style={{ animationDelay: '400ms' }}>
          <div className="relative aspect-square md:aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden border border-border/80 shadow-2xl shadow-primary/20 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 pointer-events-none"></div>
            <img src="/hero-image.png" alt="Forex Trading Illustration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
