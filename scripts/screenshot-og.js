#!/usr/bin/env node
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const htmlPath = path.join(__dirname, 'og-image.html');
  const outPath = path.join(__dirname, '..', 'public', 'assets', 'og-image.png');
  const fileUrl = 'file://' + htmlPath;

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.screenshot({ path: outPath });
  await browser.close();
  console.log('Saved:', outPath);
})();
