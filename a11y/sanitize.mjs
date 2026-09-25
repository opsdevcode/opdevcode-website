/**
 * Sanitize a11y artifact payloads before upload or local write.
 * Strips absolute paths, home directories, and obvious secrets.
 */

const ABS_PATH =
  /(?:\/(?:Users|home|private|var\/folders|tmp|opt|agent)\/[^\s"'\\]+)|(?:[A-Za-z]:\\[^\s"'\\]+)/g

export function sanitizeString(value) {
  return String(value)
    .replace(
      /((?:api[_-]?key|token|secret|password|authorization|bearer)\s*[:=]\s*)([^\s"',}]+)/gi,
      '$1[REDACTED]'
    )
    .replace(ABS_PATH, '[PATH]')
}

export function sanitizeValue(value) {
  if (value == null) return value
  if (typeof value === 'string') return sanitizeString(value)
  if (Array.isArray(value)) return value.map(sanitizeValue)
  if (typeof value === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(value)) {
      if (/token|secret|password|authorization/i.test(k) && typeof v === 'string') {
        out[k] = '[REDACTED]'
      } else {
        out[k] = sanitizeValue(v)
      }
    }
    return out
  }
  return value
}

export function sanitizeArtifact(artifact) {
  return sanitizeValue(artifact)
}
