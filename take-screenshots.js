const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'lampiran-output');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const pagesToCapture = [
    { url: 'http://localhost:3000/', name: '0-Halaman-Pembuka' },
    { url: 'http://localhost:3000/beranda', name: '1-Beranda' },
    { url: 'http://localhost:3000/edukasi', name: '2-Edukasi-Forex' },
    { url: 'http://localhost:3000/analisis', name: '3-Analisis-Teknikal' },
    { url: 'http://localhost:3000/grafik', name: '4-Grafik-Harga', waitSelector: '.tradingview-widget-container iframe' },
    { url: 'http://localhost:3000/tentang', name: '5-Tentang' },
];

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        defaultViewport: { width: 1440, height: 900 }
    });
    const page = await browser.newPage();

    for (const item of pagesToCapture) {
        console.log(`Navigating to ${item.url}...`);
        await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 90000 });
        
        if (item.waitSelector) {
            console.log(`Waiting for ${item.waitSelector} to load...`);
            // Wait for iframe and maybe an extra second for widget to fully render inside iframe
            await page.waitForSelector(item.waitSelector, { timeout: 10000 }).catch(() => console.log('Selector timeout'));
            await new Promise(resolve => setTimeout(resolve, 3000));
        } else {
            // Give normal pages a tiny delay for animations (fade-in, slide-down) to finish
            await new Promise(resolve => setTimeout(resolve, 1500));
        }

        const outputPath = path.join(outputDir, `output-${item.name}.png`);
        console.log(`Saving screenshot to ${outputPath}...`);
        await page.screenshot({ path: outputPath, fullPage: true });
    }

    await browser.close();
    console.log('All screenshots completed successfully!');
})();
