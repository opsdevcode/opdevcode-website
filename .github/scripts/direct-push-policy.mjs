/**
 * Decide whether a push to main should pass Direct Push Guard.
 * Merged PRs are allowed. Raw git pushes are not, unless allowlisted.
 */
export function evaluateDirectPush({
  actor,
  owner,
  allowedUsers = [],
  mergedPrNumbers = [],
  committerUsername = '',
}) {
  if (!actor) {
    return { allowed: false, reason: 'missing github actor' }
  }

  if (actor === owner) {
    return { allowed: true, reason: 'repository owner' }
  }

  if (allowedUsers.includes(actor)) {
    return { allowed: true, reason: 'ALLOWED_DIRECT_PUSH_USERS' }
  }

  if (mergedPrNumbers.length > 0) {
    const refs = mergedPrNumbers.map((n) => `#${n}`).join(', ')
    return { allowed: true, reason: `merged pull request ${refs}` }
  }

  if (committerUsername === 'web-flow') {
    return { allowed: true, reason: 'GitHub web merge (web-flow)' }
  }

  return {
    allowed: false,
    reason:
      `direct pushes to main are not allowed for ${actor}. use a PR, ` +
      'or add the username to repo variable ALLOWED_DIRECT_PUSH_USERS',
  }
}

export function parseAllowedUsers(raw) {
  if (!raw || typeof raw !== 'string') {
    return []
  }
  return raw
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter(Boolean)
}

export function mergedMainPrNumbers(pulls) {
  if (!Array.isArray(pulls)) {
    return []
  }
  return pulls
    .filter((p) => p && p.merged_at && p.base?.ref === 'main' && p.number != null)
    .map((p) => p.number)
}
