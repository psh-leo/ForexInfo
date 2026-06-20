import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang",
  description: "Latar belakang dan tujuan pembuatan website informasi Forex ini.",
};

export default function TentangPage() {
  return (
    <div className="page-container space-y-12">
      {/* PAGE HEADER */}
      <div className="text-center md:text-left animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-4">Tentang</h1>
        <p className="text-lg text-muted max-w-3xl">
          Latar belakang dan tujuan pembuatan website informasi Forex ini.
        </p>
      </div>

      <div className="space-y-6">
        {/* SECTION 1 — Latar Belakang Website */}
        <section className="bg-surface border border-border rounded-xl p-8 shadow-sm animate-slide-down" style={{ animationDelay: "100ms" }}>
          <h2 className="text-2xl font-bold text-primary mb-4">Latar Belakang</h2>
          <p className="text-base text-foreground/90 leading-relaxed text-justify md:text-left">
            Website ini dikembangkan sebagai implementasi dari proyek penulisan ilmiah di Program Studi Sistem Informasi, Universitas Gunadarma. Tujuan utama pembuatan website ini adalah menyediakan platform informasi yang dapat membantu masyarakat, khususnya mahasiswa dan investor pemula, dalam memahami dasar-dasar pasar foreign exchange (forex) secara sistematis dan mudah dipahami.
          </p>
        </section>

        {/* SECTION 2 — Tujuan Website */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-down" style={{ animationDelay: "200ms" }}>
          {/* Card 1 */}
          <div className="bg-surface-alt border border-border rounded-xl p-6 transition-colors hover:border-primary/30">
            <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Edukasi</h3>
            <p className="text-sm text-muted">
              Menyediakan materi edukasi dasar forex yang akurat dan mudah dipahami.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-alt border border-border rounded-xl p-6 transition-colors hover:border-primary/30">
            <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"></path>
                <rect x="7" y="10" width="4" height="7"></rect>
                <rect x="13" y="4" width="4" height="13"></rect>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Informasi</h3>
            <p className="text-sm text-muted">
              Menampilkan grafik harga pasangan mata uang secara visual dan interaktif.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-alt border border-border rounded-xl p-6 transition-colors hover:border-primary/30">
            <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Referensi</h3>
            <p className="text-sm text-muted">
              Menjadi referensi awal bagi investor pemula sebelum memasuki pasar forex.
            </p>
          </div>
        </section>

        {/* SECTION 3 — Tech Stack */}
        <section className="bg-surface border border-border rounded-xl p-8 shadow-sm animate-slide-down" style={{ animationDelay: "300ms" }}>
          <h2 className="text-2xl font-bold text-primary mb-6">Teknologi yang Digunakan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tech 1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-alt border border-border rounded-lg flex items-center justify-center font-bold text-white">
                Nx
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Next.js 14</h3>
                <p className="text-sm text-muted">
                  Framework React untuk membangun aplikasi web statis dan dinamis.
                </p>
              </div>
            </div>

            {/* Tech 2 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-alt border border-border rounded-lg flex items-center justify-center font-bold text-blue-400">
                TS
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">TypeScript</h3>
                <p className="text-sm text-muted">
                  Superset JavaScript yang memberikan pengecekan tipe statis.
                </p>
              </div>
            </div>

            {/* Tech 3 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-alt border border-border rounded-lg flex items-center justify-center font-bold text-teal-400">
                TW
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Tailwind CSS 3</h3>
                <p className="text-sm text-muted">
                  Framework CSS berbasis utility class untuk styling yang cepat dan konsisten.
                </p>
              </div>
            </div>

            {/* Tech 4 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-alt border border-border rounded-lg flex items-center justify-center font-bold text-primary">
                TV
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">TradingView Widget</h3>
                <p className="text-sm text-muted">
                  Widget grafik harga yang disematkan dari platform TradingView.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        {/* SECTION 4 — Disclaimer */}
        <section className="animate-slide-down" style={{ animationDelay: "400ms" }}>
          <div className="bg-surface border border-border border-l-4 border-l-orange-500 rounded-lg p-4">
            <p className="text-sm text-muted leading-relaxed">
              <span className="font-bold text-orange-500">Disclaimer: </span> 
              Website ini bersifat informatif dan edukatif semata. Seluruh konten yang tersedia tidak dimaksudkan sebagai rekomendasi investasi atau saran keuangan. Keputusan investasi sepenuhnya merupakan tanggung jawab individu masing-masing.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
