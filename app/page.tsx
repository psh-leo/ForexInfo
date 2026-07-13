import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1 — Hero */}
      <section className="relative flex items-center justify-center min-h-[85vh] pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-border/50">
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle CSS Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(to right, #ffffff15 1px, transparent 1px), linear-gradient(to bottom, #ffffff15 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
              Pahami Pasar <br className="hidden lg:block" /><span className="text-primary">Forex</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted animate-slide-down max-w-xl" style={{ animationDelay: '100ms' }}>
              Platform informasi dan edukasi foreign exchange untuk investor pemula hingga berpengalaman.
            </p>
          </div>
          
          <div className="relative w-full max-w-md md:max-w-lg mx-auto lg:max-w-full animate-slide-down" style={{ animationDelay: '300ms' }}>
            <div className="relative aspect-square md:aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden border border-border/80 shadow-2xl shadow-primary/20 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 pointer-events-none"></div>
              <img src="/hero-image.png" alt="Forex Trading Illustration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Mengapa Mempelajari Forex? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-down" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl font-bold text-white mb-6">
              Mengapa Mempelajari <span className="text-primary">Forex?</span>
            </h2>
            <div className="space-y-4 text-muted text-lg leading-relaxed">
              <p>
                Pasar valuta asing (Foreign Exchange) adalah tulang punggung perdagangan internasional dan investasi global. Berbeda dengan pasar saham tradisional, forex beroperasi secara desentralisasi selama 24 jam sehari.
              </p>
              <p>
                Memahami dinamika pasar ini bukan hanya penting bagi para trader, melainkan juga bagi siapa saja yang ingin memahami bagaimana kebijakan moneter, indikator ekonomi makro, dan peristiwa geopolitik memengaruhi nilai tukar mata uang yang berdampak langsung pada perekonomian sehari-hari.
              </p>
            </div>
          </div>
          
          <div className="bg-surface-alt border border-border/50 rounded-2xl p-8 relative overflow-hidden group hover:border-primary/30 transition-colors animate-slide-down" style={{ animationDelay: '300ms' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-2xl transition-all group-hover:bg-primary/20"></div>
            
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
              Faktor Penggerak Utama
            </h3>
            
            <ul className="space-y-4">
              {[
                { title: "Suku Bunga & Inflasi", desc: "Kebijakan Bank Sentral sangat memengaruhi daya tarik sebuah mata uang." },
                { title: "Kondisi Geopolitik", desc: "Stabilitas politik dan hubungan dagang antar negara." },
                { title: "Neraca Perdagangan", desc: "Arus ekspor dan impor barang serta jasa." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 p-4 rounded-xl bg-surface/50 border border-border/30">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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

      {/* SECTION 4 — Pendekatan Sistematis */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        <div className="animate-slide-down" style={{ animationDelay: '400ms' }}>
          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Pendekatan Sistematis</h2>
          <p className="text-lg text-muted leading-relaxed">
            Menavigasi pasar forex membutuhkan pendekatan yang terstruktur. Kombinasi antara pemahaman ekonomi makro (analisis fundamental) dengan kemampuan membaca pola pergerakan harga historis (analisis teknikal) merupakan fondasi utama bagi siapa pun yang ingin menganalisis pergerakan nilai tukar mata uang secara objektif dan rasional.
          </p>
        </div>
      </section>
    </div>
  );
}
