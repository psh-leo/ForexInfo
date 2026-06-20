import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1 — Hero */}
      <section className="relative flex items-center justify-center min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle CSS Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(to right, #ffffff15 1px, transparent 1px), linear-gradient(to bottom, #ffffff15 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            Pahami Pasar <span className="text-primary">Forex</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-10 max-w-2xl mx-auto animate-slide-down" style={{ animationDelay: '100ms' }}>
            Platform informasi dan edukasi foreign exchange untuk investor pemula hingga berpengalaman.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-slide-down" style={{ animationDelay: '200ms' }}>
            <Link 
              href="/edukasi" 
              className="w-full sm:w-auto px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary-hover transition-colors text-center"
            >
              Mulai Belajar
            </Link>
            <Link 
              href="/grafik" 
              className="w-full sm:w-auto px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors text-center"
            >
              Lihat Grafik
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Navigation Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <Link href="/edukasi" className="block group">
            <div className="bg-surface-alt border border-border rounded-xl p-6 h-full transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/30">
              <div className="w-10 h-10 mb-4 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Edukasi Forex</h2>
              <p className="text-muted">Pelajari dasar-dasar trading forex, currency pair, dan mekanisme pasar.</p>
            </div>
          </Link>
          
          {/* Card 2 */}
          <Link href="/analisis" className="block group">
            <div className="bg-surface-alt border border-border rounded-xl p-6 h-full transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/30">
              <div className="w-10 h-10 mb-4 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Analisis Teknikal</h2>
              <p className="text-muted">Memahami indikator MA, RSI, dan MACD untuk membaca pergerakan harga.</p>
            </div>
          </Link>
          
          {/* Card 3 */}
          <Link href="/grafik" className="block group">
            <div className="bg-surface-alt border border-border rounded-xl p-6 h-full transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/30">
              <div className="w-10 h-10 mb-4 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Grafik Harga</h2>
              <p className="text-muted">Pantau pergerakan harga pasangan mata uang secara visual interaktif.</p>
            </div>
          </Link>
          
          {/* Card 4 */}
          <Link href="/tentang" className="block group">
            <div className="bg-surface-alt border border-border rounded-xl p-6 h-full transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/30">
              <div className="w-10 h-10 mb-4 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Tentang</h2>
              <p className="text-muted">Latar belakang dan tujuan pembuatan website informasi ini.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* SECTION 3 — Stats Bar */}
      <section className="bg-surface border-y border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="flex flex-col items-center pt-8 md:pt-0 first:pt-0">
              <h3 className="text-lg text-muted mb-2">Pasar Forex Global</h3>
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">$7,5 Triliun</p>
              <p className="text-sm text-muted">Volume transaksi harian (BIS, 2022)</p>
            </div>
            
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <h3 className="text-lg text-muted mb-2">Pasangan Mata Uang</h3>
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">170+</p>
              <p className="text-sm text-muted">Tersedia di pasar internasional</p>
            </div>
            
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <h3 className="text-lg text-muted mb-2">Indikator Teknikal</h3>
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">3</p>
              <p className="text-sm text-muted">MA, RSI, dan MACD dibahas di website ini</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="bg-gradient-to-br from-[#0f1f0f] to-[#0a0a0a] border border-primary/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-32 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Memahami Forex?</h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Mulai dari edukasi dasar hingga analisis teknikal, semua tersedia di sini.
            </p>
            <Link 
              href="/edukasi" 
              className="inline-flex px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary-hover hover:scale-105 transition-all shadow-lg shadow-primary/20"
            >
              Mulai Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
