import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda",
};

export default function BerandaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1 — Mengapa Mempelajari Forex? */}
      <section className="py-16 pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-10 animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-4">Beranda</h1>
          <p className="text-lg text-muted max-w-3xl">
            Selamat datang di ForexInfo — platform informasi dan edukasi foreign exchange.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-down" style={{ animationDelay: '100ms' }}>
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
          
          <div className="bg-surface-alt border border-border/50 rounded-2xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 animate-slide-down" style={{ animationDelay: '200ms' }}>
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

      {/* SECTION 2 — Stats Bar */}
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

      {/* SECTION 3 — Pendekatan Sistematis */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        <div className="animate-slide-down" style={{ animationDelay: '300ms' }}>
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
