import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edukasi Forex",
  description: "Pengantar dasar foreign exchange untuk memahami pasar valuta asing global.",
};

export default function EdukasiPage() {
  return (
    <div className="page-container space-y-12">
      {/* PAGE HEADER */}
      <div className="text-center md:text-left animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-4">Edukasi Forex</h1>
        <p className="text-lg text-muted max-w-3xl">
          Pengantar dasar foreign exchange untuk memahami pasar valuta asing global.
        </p>
      </div>

      {/* SECTION 1 — Pengertian Forex */}
      <section className="bg-surface border border-border rounded-xl p-8 shadow-sm animate-slide-down" style={{ animationDelay: "100ms" }}>
        <h2 className="text-2xl font-bold text-primary mb-4">
          Pengertian Foreign Exchange (Forex)
        </h2>
        <p className="text-base text-foreground/90 leading-relaxed text-justify md:text-left">
          Foreign Exchange (Forex) adalah pasar keuangan global tempat mata uang dari berbagai negara diperdagangkan satu sama lain. Pasar forex beroperasi selama 24 jam sehari, lima hari dalam seminggu, dan merupakan pasar keuangan terbesar di dunia dengan volume transaksi harian mencapai 7,5 triliun dolar Amerika Serikat (BIS, 2022). Berbeda dengan pasar saham yang terpusat di bursa tertentu, pasar forex bersifat terdesentralisasi dan beroperasi secara over-the-counter (OTC) melalui jaringan bank, institusi keuangan, perusahaan, pemerintah, dan investor individu di seluruh dunia (Wang, 2018).
        </p>
      </section>

      {/* SECTION 2 — Currency Pair */}
      <section className="bg-surface border border-border rounded-xl p-8 shadow-sm animate-slide-down" style={{ animationDelay: "200ms" }}>
        <h2 className="text-2xl font-bold text-primary mb-4">
          Currency Pair (Pasangan Mata Uang)
        </h2>
        <p className="text-base text-foreground/90 leading-relaxed mb-8 text-justify md:text-left">
          Transaksi dalam pasar forex selalu melibatkan dua mata uang yang dipasangkan dan dikenal sebagai currency pair. Setiap currency pair terdiri dari base currency (mata uang dasar) di posisi pertama dan quote currency (mata uang kutipan) di posisi kedua. Nilai tukar yang ditampilkan menunjukkan jumlah quote currency yang dibutuhkan untuk membeli satu unit base currency.
        </p>

        {/* 3-column info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface-alt border border-border rounded-xl p-6 transition-colors hover:border-primary/30">
            <h3 className="text-lg font-bold text-white mb-3">Major Pairs</h3>
            <span className="inline-block bg-primary/10 text-primary border border-primary/20 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
              Likuiditas Tinggi
            </span>
            <p className="text-sm text-muted">
              EUR/USD, GBP/USD, USD/JPY — pasangan dengan likuiditas tertinggi
            </p>
          </div>

          <div className="bg-surface-alt border border-border rounded-xl p-6 transition-colors hover:border-secondary/30">
            <h3 className="text-lg font-bold text-white mb-3">Minor Pairs</h3>
            <span className="inline-block bg-secondary/10 text-secondary border border-secondary/20 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
              Cross Pairs
            </span>
            <p className="text-sm text-muted">
              EUR/GBP, GBP/JPY — tidak melibatkan USD
            </p>
          </div>

          <div className="bg-surface-alt border border-border rounded-xl p-6 transition-colors hover:border-muted/50">
            <h3 className="text-lg font-bold text-white mb-3">Exotic Pairs</h3>
            <span className="inline-block bg-muted/10 text-muted border border-border text-xs font-medium px-2.5 py-1 rounded-full mb-3">
              Spread Lebar
            </span>
            <p className="text-sm text-muted">
              USD/IDR, EUR/TRY — melibatkan mata uang negara berkembang
            </p>
          </div>
        </div>

        <p className="text-base text-foreground/90 leading-relaxed text-justify md:text-left">
          Pemahaman mengenai currency pair merupakan fondasi utama dalam aktivitas perdagangan forex. Setiap perubahan nilai tukar dalam currency pair dipengaruhi oleh berbagai faktor seperti kondisi ekonomi, kebijakan moneter bank sentral, dan sentimen pasar global.
        </p>
      </section>
    </div>
  );
}
