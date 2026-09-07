#!/usr/bin/env node
/**
 * Derive the 1200×630 share card from the org-profile banner.
 * The banner is the brand visual; do not invent a second OG layout.
 */
const { execFileSync } = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')

const root = path.join(__dirname, '..')
const banner = path.join(root, 'public', 'assets', 'opsdevco-banner.png')
const ogOut = path.join(root, 'public', 'assets', 'og-image.png')
const previewOut = path.join(root, 'public', 'assets', 'preview-v5.png')

if (!fs.existsSync(banner)) {
  throw new Error(`missing brand banner: ${banner}`)
}

const work = fs.mkdtempSync(path.join(os.tmpdir(), 'opsdevco-og-'))
const scaled = path.join(work, 'scaled.jpg')
const cropped = path.join(work, 'og.jpg')

execFileSync('sips', ['-z', '675', '1200', banner, '--out', scaled], { stdio: 'inherit' })
execFileSync(
  'sips',
  ['--cropOffset', '0', '0', '--cropToHeightWidth', '630', '1200', scaled, '--out', cropped],
  { stdio: 'inherit' }
)
execFileSync('sips', ['-s', 'format', 'png', cropped, '--out', ogOut], { stdio: 'inherit' })
fs.copyFileSync(ogOut, previewOut)
fs.rmSync(work, { recursive: true, force: true })

console.log('Saved:', ogOut)
console.log('Saved:', previewOut)
