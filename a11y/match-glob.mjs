/**
 * Minimal glob matcher for path rules (** and * only).
 * Paths use forward slashes (git-style).
 */

export function matchGlob(filePath, glob) {
  const normalized = String(filePath).replace(/\\/g, '/')
  const pattern = String(glob).replace(/\\/g, '/')
  const re = globToRegExp(pattern)
  return re.test(normalized)
}

function globToRegExp(glob) {
  let out = '^'
  for (let i = 0; i < glob.length; i += 1) {
    const ch = glob[i]
    if (ch === '*' && glob[i + 1] === '*') {
      if (glob[i + 2] === '/') {
        out += '(?:.*/)'
        i += 2
      } else {
        out += '.*'
        i += 1
      }
    } else if (ch === '*') {
      out += '[^/]*'
    } else if (ch === '?') {
      out += '[^/]'
    } else if ('+.^${}()|[]\\'.includes(ch)) {
      out += `\\${ch}`
    } else {
      out += ch
    }
  }
  out += '$'
  return new RegExp(out)
}
