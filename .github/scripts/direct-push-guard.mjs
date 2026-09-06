#!/usr/bin/env node
import {
  evaluateDirectPush,
  mergedMainPrNumbers,
  parseAllowedUsers,
} from './direct-push-policy.mjs'

async function fetchAssociatedPulls({ owner, repo, sha, token }) {
  const url = `https://api.github.com/repos/${owner}/${repo}/commits/${sha}/pulls`
  const delays = [0, 2000, 4000, 8000]
  let lastError

  for (const delay of delays) {
    if (delay) {
      await new Promise((resolve) => setTimeout(resolve, delay))
    }
    const response = await fetch(url, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
    if (!response.ok) {
      lastError = new Error(`GitHub API ${response.status} listing PRs for ${sha}`)
      continue
    }
    const pulls = await response.json()
    const numbers = mergedMainPrNumbers(pulls)
    if (numbers.length > 0 || delay === delays[delays.length - 1]) {
      return numbers
    }
  }

  if (lastError) {
    throw lastError
  }
  return []
}

async function main() {
  const actor = process.env.GITHUB_ACTOR || ''
  const owner = process.env.GITHUB_REPOSITORY_OWNER || ''
  const repoFull = process.env.GITHUB_REPOSITORY || ''
  const repo = repoFull.split('/')[1] || ''
  const sha = process.env.GITHUB_SHA || ''
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || ''
  const allowedUsers = parseAllowedUsers(process.env.ALLOWED_DIRECT_PUSH_USERS)
  const committerUsername = process.env.COMMITTER_USERNAME || ''

  let mergedPrNumbers = []
  if (owner && repo && sha && token) {
    mergedPrNumbers = await fetchAssociatedPulls({ owner, repo, sha, token })
  }

  const result = evaluateDirectPush({
    actor,
    owner,
    allowedUsers,
    mergedPrNumbers,
    committerUsername,
  })

  if (result.allowed) {
    console.log(`Direct Push Guard passed: ${result.reason}`)
    process.exit(0)
  }

  console.error(`::error::${result.reason}`)
  process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
