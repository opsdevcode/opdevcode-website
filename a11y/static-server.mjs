#!/usr/bin/env node
/**
 * Tiny static file server for the Next.js `out/` export.
 */

import http from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { extname, join, normalize, resolve } from 'node:path'

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

function resolveFile(root, urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0])
  let rel = decoded === '/' ? '/index.html' : decoded
  if (rel.endsWith('/')) rel = `${rel}index.html`
  const candidate = normalize(join(root, rel))
  if (!candidate.startsWith(root)) return null
  if (existsSync(candidate) && statSync(candidate).isFile()) return candidate
  // trailingSlash: false export still uses path/index.html for nested routes
  const asIndex = normalize(join(root, rel, 'index.html'))
  if (asIndex.startsWith(root) && existsSync(asIndex) && statSync(asIndex).isFile()) {
    return asIndex
  }
  // Next export without trailing slash: /about.html
  const asHtml = normalize(join(root, `${rel}.html`))
  if (asHtml.startsWith(root) && existsSync(asHtml) && statSync(asHtml).isFile()) {
    return asHtml
  }
  return null
}

export function createStaticServer(rootDir, port = 0) {
  const root = resolve(rootDir)
  const server = http.createServer((req, res) => {
    const file = resolveFile(root, req.url || '/')
    if (!file) {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
      res.end('Not found')
      return
    }
    const type = TYPES[extname(file)] || 'application/octet-stream'
    res.writeHead(200, { 'content-type': type })
    createReadStream(file).pipe(res)
  })

  return new Promise((resolvePromise, reject) => {
    server.once('error', reject)
    server.listen(port, '127.0.0.1', () => {
      const address = server.address()
      resolvePromise({
        server,
        port: address.port,
        origin: `http://127.0.0.1:${address.port}`,
        close: () =>
          new Promise((res, rej) => {
            server.close((err) => (err ? rej(err) : res()))
          }),
      })
    })
  })
}

const isDirect = process.argv[1]?.endsWith('static-server.mjs')
if (isDirect) {
  const root = process.argv[2] || 'out'
  const port = Number(process.argv[3] || 4173)
  const { origin } = await createStaticServer(root, port)
  process.stdout.write(`Serving ${root} at ${origin}\n`)
}
