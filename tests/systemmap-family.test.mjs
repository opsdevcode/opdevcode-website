import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const map = readFileSync(join(root, 'components/SystemMap.tsx'), 'utf8')
const home = readFileSync(join(root, 'src/app/page.tsx'), 'utf8')
const tokens = readFileSync(join(root, 'src/styles/design-tokens.css'), 'utf8')
const header = readFileSync(join(root, 'components/Header.tsx'), 'utf8')
const footer = readFileSync(join(root, 'components/Footer.tsx'), 'utf8')

describe('parent SystemMap and homepage family', () => {
  it('keeps policy as a mechanism, not a fifth product accent', () => {
    assert.match(tokens, /--rule-structural: 1.5px/)
    assert.match(map, /'policy',\s*'gate',\s*'·',\s*'ink'/)
    assert.match(map, /not a product domain/)
    assert.match(home, /not a fifth product/)
    assert.doesNotMatch(home, /Open Policy Agent/)
    assert.doesNotMatch(home, /\bOPA\b/)
    assert.doesNotMatch(home, /Policy Runtime/)
    assert.doesNotMatch(home, /\bRelay\b/)
    assert.match(map, /function PolicyCut/)
    assert.match(header, /\/architecture/)
    assert.doesNotMatch(footer, /Relay/)
  })

  it('states product independence and no runtime hierarchy', () => {
    assert.match(home, /Independent products. Connected engineering context/)
    assert.match(home, /not a central runtime/)
    assert.match(home, /Customers are not required to use/)
    assert.match(map, /'not',\s*'a',\s*'runtime',\s*'topology'/)
    assert.match(map, /'Dispatch',\s*'coordinates\.',\s*'Domains',\s*'remain',\s*'owners\.'/)
    assert.match(map, /not an OpsDevCode product/)
  })

  it('uses canonical marks and product hosts as entry points', () => {
    assert.match(map, /ProductMark/)
    assert.match(home, /PRODUCT_URLS/)
    assert.match(home, /Explore the products/)
    assert.match(home, /Explore the system/)
    assert.doesNotMatch(home, /Start Free/)
    assert.doesNotMatch(home, /Deploy Now/)
  })

  it('recomposes the family map on small viewports', () => {
    const css = readFileSync(join(root, 'src/styles/system.css'), 'utf8')
    assert.match(css, /sysmap-field--mobile/)
    assert.match(css, /@media \(max-width: 899px\)/)
    assert.match(map, /sysmap-stack/)
  })
})
