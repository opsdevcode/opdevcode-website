import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const loader = join(root, 'node_modules/next/dist/compiled/@next/font/dist/google/loader.js')

describe('next/font google loader patch', () => {
  it('defaults extensionless google font urls to woff2', () => {
    const src = readFileSync(loader, 'utf8')
    assert.match(src, /googleFontFileUrl\.split\(\/\[\?#\]\/, 1\)\[0\]/)
    assert.match(src, /\?\? 'woff2'/)
  })
})
