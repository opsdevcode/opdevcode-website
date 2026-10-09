import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

describe('opsdevcode.release/v0', () => {
  it('keeps GitHub Releases canonical and forbids latest on prereleases', () => {
    const data = JSON.parse(
      readFileSync(join(root, 'opsdevcode-release.json'), 'utf8'),
    )
    assert.equal(data.schema, 'opsdevcode.release/v0')
    assert.equal(data.repository, 'opsdevcode/opdevcode-website')
    assert.equal(data.canonical, 'github-release')
    assert.equal(data.tagPolicy.manualTags, false)
    assert.equal(data.tagPolicy.retag, false)
    assert.equal(data.prerelease.githubMakeLatest, false)
    assert.equal(data.provenance.synthesize, false)
  })
})
