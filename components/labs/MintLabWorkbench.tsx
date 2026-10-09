'use client'

import { useState } from 'react'
import Link from 'next/link'
import { trackLabProof } from '@/components/labs/LabsAnalytics'
import { CAPTURED_LABEL, MINT_LAB, MINT_LAB_CAPTURE } from '@/lib/mint-lab'
import {
  MINT_ACTION_URL,
  MINT_LANGUAGE_URL,
  MINT_QUICKSTART_URL,
  MINT_STARTER_URL,
} from '@/lib/site'

export default function MintLabWorkbench() {
  const [open, setOpen] = useState(false)
  return (
    <div className="lab-workbench">
      <p className="rail-label">Labs</p>
      <h1 className="page-title">{MINT_LAB.title}</h1>
      <p className="lede">{MINT_LAB.summary}</p>
      <p className="lab-sim-banner" role="status">
        {CAPTURED_LABEL}. These JSON objects were produced by the real <code>mint</code> executable.
        This page does not compile Mint in the browser and does not apply anything.
      </p>
      <p className="lab-authority">
        <span>{MINT_LAB.authority}</span> {MINT_LAB.authorityVerb}
      </p>
      <h2>Captured check</h2>
      <pre className="mint-install">
        <code>{JSON.stringify(MINT_LAB_CAPTURE.check, null, 2)}</code>
      </pre>
      <h2>Captured compile / plan kinds</h2>
      <pre className="mint-install">
        <code>
          {JSON.stringify(
            {
              compiler: MINT_LAB_CAPTURE.compiler,
              languageTag: MINT_LAB_CAPTURE.languageTag,
              project: MINT_LAB_CAPTURE.project,
              ir: MINT_LAB_CAPTURE.ir,
              plan: MINT_LAB_CAPTURE.plan,
            },
            null,
            2
          )}
        </code>
      </pre>
      <details
        className="lab-evidence"
        onToggle={(event) => {
          if (event.currentTarget.open && !open) {
            setOpen(true)
            trackLabProof()
          }
        }}
      >
        <summary>How this was captured</summary>
        <p>
          Isolated Python 3.12: <code>pip install specmint</code> from the{' '}
          <code>{MINT_LAB_CAPTURE.languageTag}</code> GitHub Release / PyPI mirror, then{' '}
          <code>mint check</code>, <code>mint compile</code>, and <code>mint plan --locked</code> on{' '}
          <code>{MINT_LAB_CAPTURE.project}</code>. Version line:{' '}
          <code>{MINT_LAB_CAPTURE.versionLine}</code>.
        </p>
      </details>
      <h2>Adopt in a repository</h2>
      <p>
        Use the first-party action or the starter template. Both pin the same GitHub Release wheel.
        There is no <code>latest</code> tag and no <code>mint apply</code>.
      </p>
      <p className="cta-row">
        <Link className="btn primary" href="/products/mint">
          Mint product
        </Link>
        <a className="btn" href={MINT_ACTION_URL} target="_blank" rel="noopener noreferrer">
          mint-action
        </a>
        <a className="btn" href={MINT_STARTER_URL} target="_blank" rel="noopener noreferrer">
          mint-starter
        </a>
        <a className="btn" href={MINT_QUICKSTART_URL} target="_blank" rel="noopener noreferrer">
          Language quickstart
        </a>
        <a className="btn" href={MINT_LANGUAGE_URL} target="_blank" rel="noopener noreferrer">
          Language source
        </a>
      </p>
    </div>
  )
}
