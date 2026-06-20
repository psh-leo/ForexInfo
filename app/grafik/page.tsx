"use client";

import { useState, useEffect, useRef } from "react";

// Symbol mapping based on requirements
const currencyPairs = [
  { label: "EUR/USD", symbol: "FX:EURUSD" },
  { label: "GBP/USD", symbol: "FX:GBPUSD" },
  { label: "USD/JPY", symbol: "FX:USDJPY" },
  { label: "AUD/USD", symbol: "FX:AUDUSD" },
  { label: "USD/IDR", symbol: "FX:USDIDR" },
];

export default function GrafikPage() {
  const [activeSymbol, setActiveSymbol] = useState<string>(currencyPairs[0].symbol);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make sure container exists
    const container = document.getElementById("tradingview-widget-container");
    if (!container) return;

    // Clear previous widget/script
    container.innerHTML = "";

    // Create and inject the new script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore - TradingView is injected globally by tv.js
      if (window.TradingView) {
        // @ts-ignore
        new window.TradingView.widget({
          symbol: activeSymbol,
          interval: "D",
          timezone: "Asia/Jakarta",
          theme: "dark",
          style: "1",
          locale: "id",
          toolbar_bg: "#111111",
          enable_publishing: false,
          hide_top_toolbar: false,
          save_image: false,
          container_id: "tradingview-widget-container",
        });
      }
    };
    
    container.appendChild(script);

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [activeSymbol]);

  return (
    <div className="page-container space-y-10">
      {/* PAGE HEADER */}
      <div className="text-center md:text-left animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-4">Grafik Harga</h1>
        <p className="text-lg text-muted max-w-3xl">
          Pantau pergerakan harga pasangan mata uang secara interaktif menggunakan data pasar.
        </p>
      </div>

      {/* SECTION 1 — Currency Pair Selector */}
      <section className="animate-slide-down" style={{ animationDelay: "100ms" }}>
        <div className="flex flex-wrap gap-3">
          {currencyPairs.map((pair) => {
            const isActive = activeSymbol === pair.symbol;
            return (
              <button
                key={pair.symbol}
                onClick={() => setActiveSymbol(pair.symbol)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-black shadow-[0_0_15px_rgba(34,197,94,0.3)] border border-primary"
                    : "bg-surface text-muted border border-primary hover:bg-primary/10 hover:text-foreground"
                }`}
              >
                {pair.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* SECTION 2 — TradingView Widget */}
      <section className="animate-slide-down" style={{ animationDelay: "200ms" }}>
        <div className="bg-surface border border-border rounded-xl p-2 md:p-4 shadow-sm overflow-hidden">
          {/* Inner container for the widget to prevent React hydration mismatches */}
          <div 
            id="tradingview-widget-container" 
            ref={containerRef}
            className="h-[500px] w-full rounded-lg overflow-hidden"
          />
        </div>
      </section>

      {/* SECTION 3 — Info Note */}
      <section className="animate-slide-down" style={{ animationDelay: "300ms" }}>
        <div className="bg-surface border border-border border-l-4 border-l-secondary rounded-lg p-4 flex items-start gap-4">
          <div className="text-2xl mt-0.5" aria-hidden="true">⚠️</div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Grafik di atas disediakan oleh TradingView dan menampilkan data pasar secara real-time. Website ini bersifat informatif dan tidak menyediakan layanan trading atau rekomendasi investasi.
          </p>
        </div>
      </section>
    </div>
  );
}
