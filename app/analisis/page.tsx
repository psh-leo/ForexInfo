import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analisis Teknikal",
  description: "Indikator teknikal yang digunakan untuk menganalisis pergerakan harga di pasar forex.",
};

export default function AnalisisPage() {
  return (
    <div className="page-container space-y-12">
      {/* PAGE HEADER */}
      <div className="text-center md:text-left animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-4">Analisis Teknikal</h1>
        <p className="text-lg text-muted max-w-3xl">
          Indikator teknikal yang digunakan untuk menganalisis pergerakan harga di pasar forex.
        </p>
      </div>

      <div className="space-y-6">
        {/* INDICATOR 1 — Moving Average (MA) */}
        <section className="bg-surface border border-border rounded-xl p-8 shadow-sm animate-slide-down" style={{ animationDelay: "100ms" }}>
          <div className="flex flex-col gap-4 mb-6">
            <span className="inline-block bg-primary text-black text-sm font-bold px-3 py-1 rounded w-max">
              MA
            </span>
            <h2 className="text-2xl font-bold text-white">Moving Average (MA)</h2>
          </div>
          
          <p className="text-base text-foreground/90 leading-relaxed text-justify md:text-left mb-8">
            Moving Average (MA) adalah indikator teknikal yang menghitung rata-rata harga aset pada periode waktu tertentu untuk mengidentifikasi arah tren pasar. Terdapat dua jenis Moving Average yang umum digunakan, yaitu Simple Moving Average (SMA) yang menghitung rata-rata harga secara sederhana, dan Exponential Moving Average (EMA) yang memberikan bobot lebih besar pada harga terbaru sehingga lebih responsif terhadap pergerakan harga terkini (Murphy, 1999). Indikator MA digunakan oleh trader untuk menentukan arah tren, mengidentifikasi level support dan resistance dinamis, serta sebagai sinyal beli atau jual ketika dua garis MA dengan periode berbeda saling berpotongan.
          </p>

          {/* Visual: MA Lines */}
          <div className="bg-surface-alt border border-border rounded-lg p-6">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-around">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
                <span className="text-sm font-medium text-white">SMA 20</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-secondary rounded-full shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                <span className="text-sm font-medium text-secondary">SMA 50</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                <span className="text-sm font-medium text-primary">SMA 200</span>
              </div>
            </div>
          </div>
        </section>

        {/* INDICATOR 2 — RSI */}
        <section className="bg-surface border border-border rounded-xl p-8 shadow-sm animate-slide-down" style={{ animationDelay: "200ms" }}>
          <div className="flex flex-col gap-4 mb-6">
            <span className="inline-block bg-secondary text-black text-sm font-bold px-3 py-1 rounded w-max">
              RSI
            </span>
            <h2 className="text-2xl font-bold text-white">Relative Strength Index (RSI)</h2>
          </div>
          
          <p className="text-base text-foreground/90 leading-relaxed text-justify md:text-left mb-8">
            Relative Strength Index (RSI) adalah indikator momentum yang mengukur kecepatan dan perubahan pergerakan harga untuk menentukan kondisi overbought atau oversold suatu aset. RSI dihitung dalam skala 0 hingga 100, di mana nilai RSI di atas 70 mengindikasikan kondisi overbought (harga terlalu tinggi dan berpotensi turun), sedangkan nilai RSI di bawah 30 mengindikasikan kondisi oversold (harga terlalu rendah dan berpotensi naik) (Murphy, 1999). Indikator ini dikembangkan oleh J. Welles Wilder dan pertama kali dipublikasikan pada tahun 1978, dan hingga saat ini tetap menjadi salah satu indikator momentum paling populer dalam analisis teknikal pasar keuangan.
          </p>

          {/* Visual: RSI Bar */}
          <div className="bg-surface-alt border border-border rounded-lg p-6">
            <div className="flex justify-between text-xs text-muted mb-2 font-medium">
              <span>0 (Oversold)</span>
              <span>30</span>
              <span>70</span>
              <span>100 (Overbought)</span>
            </div>
            {/* The RSI bar is 100% wide. 0-30 is 30% (green), 30-70 is 40% (gray), 70-100 is 30% (red). */}
            <div className="w-full h-4 rounded-full overflow-hidden flex">
              <div className="h-full w-[30%] bg-primary/80" title="Oversold Zone (0-30)"></div>
              <div className="h-full w-[40%] bg-muted/30" title="Neutral Zone (30-70)"></div>
              <div className="h-full w-[30%] bg-red-500/80" title="Overbought Zone (70-100)"></div>
            </div>
          </div>
        </section>

        {/* INDICATOR 3 — MACD */}
        <section className="bg-surface border border-border rounded-xl p-8 shadow-sm animate-slide-down" style={{ animationDelay: "300ms" }}>
          <div className="flex flex-col gap-4 mb-6">
            <span className="inline-block bg-muted text-white text-sm font-bold px-3 py-1 rounded w-max">
              MACD
            </span>
            <h2 className="text-2xl font-bold text-white">Moving Average Convergence Divergence (MACD)</h2>
          </div>
          
          <p className="text-base text-foreground/90 leading-relaxed text-justify md:text-left mb-8">
            Moving Average Convergence Divergence (MACD) adalah indikator tren-momentum yang menunjukkan hubungan antara dua Exponential Moving Average (EMA) dari harga suatu aset. MACD dihitung dengan mengurangkan EMA 26 periode dari EMA 12 periode, menghasilkan MACD line. Selanjutnya, Signal line dihitung sebagai EMA 9 periode dari MACD line itu sendiri (Murphy, 1999). Sinyal beli muncul ketika MACD line memotong Signal line dari bawah ke atas, sedangkan sinyal jual muncul ketika MACD line memotong Signal line dari atas ke bawah. Selain itu, histogram MACD yang menunjukkan selisih antara MACD line dan Signal line digunakan untuk mengukur kekuatan momentum tren yang sedang berlangsung.
          </p>

          {/* Visual: MACD Lines */}
          <div className="bg-surface-alt border border-border rounded-lg p-6">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="w-24 text-sm font-medium text-muted text-right">MACD Line</span>
                <div className="flex-1 h-0.5 bg-primary shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-24 text-sm font-medium text-muted text-right">Signal Line</span>
                <div className="flex-1 h-0.5 bg-secondary shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-24 text-sm font-medium text-muted text-right">Zero Line</span>
                <div className="flex-1 border-t-2 border-dashed border-muted/50"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
