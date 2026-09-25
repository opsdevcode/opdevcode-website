/**
 * Proves the axe gate fails on a deliberate inaccessible fixture.
 * Requires Playwright browsers (`npx playwright install chromium`).
 *
 * Skipped when A11Y_SKIP_BROWSER=1 (detector-only CI shards).
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const skipBrowser = process.env.A11Y_SKIP_BROWSER === '1'

describe('a11y fixture gate', { skip: skipBrowser }, () => {
  it('fails the axe gate on the inaccessible fixture', async () => {
    const { chromium } = await import('playwright')
    const AxeBuilder = (await import('@axe-core/playwright')).default
    const fixture = pathToFileURL(join(root, 'a11y/fixtures/inaccessible.html')).href
    const browser = await chromium.launch({ headless: true })
    const context = await browser.newContext()
    const page = await context.newPage()
    try {
      await page.goto(fixture)
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa'])
        .analyze()
      assert.ok(
        results.violations.length > 0,
        'expected deliberate inaccessible fixture to produce axe violations'
      )
      const ids = results.violations.map((v) => v.id)
      assert.ok(
        ids.includes('image-alt') || ids.includes('button-name') || ids.includes('link-name'),
        `expected a known rule id, got: ${ids.join(', ')}`
      )
    } finally {
      await page.close()
      await context.close()
      await browser.close()
    }
  })
})
