import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  evaluateDirectPush,
  mergedMainPrNumbers,
  parseAllowedUsers,
} from '../.github/scripts/direct-push-policy.mjs'

describe('evaluateDirectPush', () => {
  it('allows a commit that belongs to a merged PR', () => {
    const result = evaluateDirectPush({
      actor: 'erskaggs',
      owner: 'opsdevcode',
      mergedPrNumbers: [65],
    })
    assert.equal(result.allowed, true)
    assert.match(result.reason, /#65/)
  })

  it('rejects a raw push from a non-allowlisted user', () => {
    const result = evaluateDirectPush({
      actor: 'erskaggs',
      owner: 'opsdevcode',
    })
    assert.equal(result.allowed, false)
    assert.match(result.reason, /erskaggs/)
  })

  it('allows users in ALLOWED_DIRECT_PUSH_USERS', () => {
    const result = evaluateDirectPush({
      actor: 'erskaggs',
      owner: 'opsdevcode',
      allowedUsers: ['erskaggs'],
    })
    assert.equal(result.allowed, true)
  })

  it('allows GitHub web-flow when association is delayed', () => {
    const result = evaluateDirectPush({
      actor: 'erskaggs',
      owner: 'opsdevcode',
      committerUsername: 'web-flow',
    })
    assert.equal(result.allowed, true)
  })

  it('allows actor matching owner on user-owned repos', () => {
    const result = evaluateDirectPush({
      actor: 'alice',
      owner: 'alice',
    })
    assert.equal(result.allowed, true)
  })
})

describe('parseAllowedUsers', () => {
  it('splits commas and whitespace', () => {
    assert.deepEqual(parseAllowedUsers('alice, bob  carol'), ['alice', 'bob', 'carol'])
  })

  it('returns empty for missing input', () => {
    assert.deepEqual(parseAllowedUsers(''), [])
    assert.deepEqual(parseAllowedUsers(undefined), [])
  })
})

describe('mergedMainPrNumbers', () => {
  it('keeps only PRs merged into main', () => {
    const numbers = mergedMainPrNumbers([
      { number: 1, merged_at: '2026-01-01T00:00:00Z', base: { ref: 'main' } },
      { number: 2, merged_at: null, base: { ref: 'main' } },
      { number: 3, merged_at: '2026-01-01T00:00:00Z', base: { ref: 'develop' } },
    ])
    assert.deepEqual(numbers, [1])
  })
})
