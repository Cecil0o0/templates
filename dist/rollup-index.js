// this is created from /src/index.js
'use strict';

const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com');
  await page.screenshot({ path: __dirname + '/../dist/example.png' });

  await browser.close();
})();
