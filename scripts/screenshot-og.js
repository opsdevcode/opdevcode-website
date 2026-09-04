#!/usr/bin/env node
const { chromium } = require('playwright')
const path = require('path')
const fs = require('fs')

;(async () => {
  const ogHtmlPath = path.join(__dirname, 'og-image.html')
  const ogOutPath = path.join(__dirname, '..', 'public', 'assets', 'og-image.png')
  const previewV5Path = path.join(__dirname, '..', 'public', 'assets', 'preview-v5.png')
  const html = fs.readFileSync(ogHtmlPath, 'utf8')

  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1200, height: 630 })
  await page.setContent(html, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: ogOutPath })
  fs.copyFileSync(ogOutPath, previewV5Path)

  await browser.close()
  console.log('Saved:', ogOutPath)
  console.log('Saved:', previewV5Path)
})()
