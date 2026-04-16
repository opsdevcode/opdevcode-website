#!/usr/bin/env node
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const ogHtmlPath = path.join(__dirname, 'og-image.html');
  const socialV3HtmlPath = path.join(__dirname, 'social-preview-v3.html');
  const ogOutPath = path.join(__dirname, '..', 'public', 'assets', 'og-image.png');
  const previewV3Path = path.join(__dirname, '..', 'public', 'assets', 'preview-v3.png');

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });

  await page.goto('file://' + ogHtmlPath, { waitUntil: 'networkidle' });
  await page.screenshot({ path: ogOutPath });

  await page.goto('file://' + socialV3HtmlPath, { waitUntil: 'networkidle' });
  await page.screenshot({ path: previewV3Path });

  await browser.close();
  console.log('Saved:', ogOutPath);
  console.log('Saved:', previewV3Path);
})();
