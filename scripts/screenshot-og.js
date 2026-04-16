#!/usr/bin/env node
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const ogHtmlPath = path.join(__dirname, 'og-image.html');
  const socialV4HtmlPath = path.join(__dirname, 'social-preview-v4.html');
  const ogOutPath = path.join(__dirname, '..', 'public', 'assets', 'og-image.png');
  const previewV4Path = path.join(__dirname, '..', 'public', 'assets', 'preview-v4.png');

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });

  await page.goto('file://' + ogHtmlPath, { waitUntil: 'networkidle' });
  await page.screenshot({ path: ogOutPath });

  await page.goto('file://' + socialV4HtmlPath, { waitUntil: 'networkidle' });
  await page.screenshot({ path: previewV4Path });

  await browser.close();
  console.log('Saved:', ogOutPath);
  console.log('Saved:', previewV4Path);
})();
