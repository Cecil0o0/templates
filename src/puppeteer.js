const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  await page.screenshot({ fullPage: true, path: __dirname + '/../dist/example.png' });

  await browser.close();
})();
