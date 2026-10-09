'use client'

import { useId, useMemo, useState, type ReactNode } from 'react'
import Link from 'next/link'
import {
  CLOUD_PROVIDERS,
  LABS,
  ORG_ENGINES,
  SIMULATED_BUDGET_USD,
  SIMULATED_CLOUDS,
  SIMULATED_DIGEST,
  SIMULATED_LABEL,
  SIMULATED_SPEND_USD,
  SIMULATED_TENANT,
  SIMULATED_TTL_DAYS,
  observeOutcome,
  reclaimOutcome,
  type CloudProvider,
  type LabSlug,
  type ObservationScenario,
  type OrgEngine,
  type ReclaimScenario,
} from '@/lib/labs'
import { trackLabProof } from '@/components/labs/LabsAnalytics'
import LabsCtas from '@/components/labs/LabsCtas'

function ChoiceSet<T extends string>({
  legend,
  name,
  value,
  options,
  onChange,
}: {
  legend: string
  name: string
  value: T
  options: { id: T; label: string; hint?: string }[]
  onChange: (next: T) => void
}) {
  const groupId = useId()
  return (
    <fieldset className="lab-choices" aria-describedby={`${groupId}-hint`}>
      <legend>{legend}</legend>
      <p id={`${groupId}-hint`} className="lab-hint">
        Immediate feedback updates the evidence panel. {SIMULATED_LABEL}.
      </p>
      <div className="lab-choice-grid">
        {options.map((option) => (
          <label key={option.id} className={value === option.id ? 'is-selected' : undefined}>
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
            />
            <span>
              <strong>{option.label}</strong>
              {option.hint ? <em>{option.hint}</em> : null}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function Evidence({
  title,
  children,
  defaultOpen = true,
}: {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}) {
  return (
    <details className="lab-evidence" open={defaultOpen} onToggle={trackLabProof}>
      <summary>{title}</summary>
      <div className="lab-evidence-body">{children}</div>
    </details>
  )
}

function Authority({ product, fact }: { product: string; fact: string }) {
  return (
    <p className="lab-authority">
      <span>{product}</span> {fact}
    </p>
  )
}

function CreateLab() {
  const [cloud, setCloud] = useState<CloudProvider>('aws')
  const [engine, setEngine] = useState<OrgEngine>('terraform')
  const [ttl, setTtl] = useState<(typeof SIMULATED_TTL_DAYS)[number]>(14)
  const sim = SIMULATED_CLOUDS[cloud]
  const iac = engine === 'terraform' ? sim.terraform : sim.pulumi

  return (
    <>
      <ChoiceSet
        legend="Cloud provider"
        name="create-cloud"
        value={cloud}
        onChange={setCloud}
        options={CLOUD_PROVIDERS.map((id) => ({
          id,
          label: SIMULATED_CLOUDS[id].label,
          hint: SIMULATED_CLOUDS[id].environmentId,
        }))}
      />
      <ChoiceSet
        legend="Org realization engine"
        name="create-engine"
        value={engine}
        onChange={setEngine}
        options={ORG_ENGINES.map((id) => ({
          id,
          label: id === 'terraform' ? 'Terraform / OpenTofu' : 'Pulumi',
          hint: 'Representative IaC only. No apply.',
        }))}
      />
      <ChoiceSet
        legend="TTL"
        name="create-ttl"
        value={String(ttl)}
        onChange={(next) => setTtl(Number(next) as (typeof SIMULATED_TTL_DAYS)[number])}
        options={SIMULATED_TTL_DAYS.map((days) => ({
          id: String(days),
          label: `${days} days`,
          hint: 'expires_at on the environment record',
        }))}
      />

      <div className="lab-feedback" aria-live="polite">
        <p>
          Realization recorded <strong>EXECUTION_COMPLETED</strong>. Verification status is{' '}
          <strong>VERIFICATION_PENDING</strong>. Executed is not verified.
        </p>
        <p>
          Capabilities: object-storage ({sim.objectStorageKind}) and queue ({sim.queueKind}). Budget
          ${SIMULATED_BUDGET_USD}. TTL {ttl} days.
        </p>
      </div>

      <Authority product="Repave" fact="owns environment_id mint, run_id, and GitOps intent." />
      <Authority product="Overpass" fact="is not involved until a citation is posted." />
      <Authority product="Toll" fact="is not involved at mint." />
      <Authority product="Dispatch" fact="does not mint environment_id." />

      <Evidence title="Simulated environment record">
        <dl>
          <dt>tenant_id</dt>
          <dd>
            <code>{SIMULATED_TENANT}</code>
          </dd>
          <dt>environment_id</dt>
          <dd>
            <code>{sim.environmentId}</code>
          </dd>
          <dt>stack_name</dt>
          <dd>
            <code>{sim.stackName}</code>
          </dd>
          <dt>verification_status</dt>
          <dd>
            <code>VERIFICATION_PENDING</code>
          </dd>
          <dt>object-storage</dt>
          <dd>Approved in the blueprint. Not observed cloud.</dd>
          <dt>queue</dt>
          <dd>Approved in the blueprint. Not observed cloud.</dd>
        </dl>
      </Evidence>
      <Evidence title={`Representative ${engine} (not applied)`}>
        <pre>
          <code>{iac}</code>
        </pre>
        <p>
          This snippet is a teaching artifact. The lab does not call AWS, Azure, or GCP and does not
          open a production tenant.
        </p>
      </Evidence>
    </>
  )
}

function ObserveLab() {
  const [cloud, setCloud] = useState<CloudProvider>('aws')
  const [scenario, setScenario] = useState<ObservationScenario>('present')
  const sim = SIMULATED_CLOUDS[cloud]
  const outcome = useMemo(() => {
    const base = observeOutcome(scenario)
    const ids = scenario === 'address_as_id' ? base.resourceIds : [sim.objectStorageId, sim.queueId]
    return { ...base, resourceIds: ids }
  }, [scenario, sim])

  return (
    <>
      <ChoiceSet
        legend="Approved environment"
        name="observe-cloud"
        value={cloud}
        onChange={setCloud}
        options={CLOUD_PROVIDERS.map((id) => ({
          id,
          label: SIMULATED_CLOUDS[id].label,
          hint: SIMULATED_CLOUDS[id].environmentId,
        }))}
      />
      <ChoiceSet
        legend="Posted Overpass citation"
        name="observe-scenario"
        value={scenario}
        onChange={setScenario}
        options={[
          { id: 'present', label: 'Present + native IDs', hint: 'Can become VERIFIED' },
          { id: 'stale', label: 'Stale freshness', hint: 'Stays pending' },
          { id: 'absent', label: 'Absent citation', hint: 'Unknown ≠ false' },
          { id: 'address_as_id', label: 'Terraform address as ID', hint: 'Not a native ID' },
        ]}
      />

      <div className="lab-feedback" aria-live="polite">
        <p>
          Approved IaC is still {sim.objectStorageKind} + {sim.queueKind}. Observed status is{' '}
          <strong>{outcome.status}</strong> with freshness <strong>{outcome.freshness}</strong>.
        </p>
        <p>{outcome.note}</p>
      </div>

      <Authority
        product="Overpass"
        fact="owns freshness, inventory_digest, and native resource_id[]."
      />
      <Authority
        product="Repave"
        fact="consumes the posted citation. It does not scrape the cloud."
      />

      <div className="lab-compare">
        <section>
          <h3>Approved (Repave)</h3>
          <p>Desired / recorded. Not live inventory.</p>
          <ul>
            <li>
              <code>{sim.environmentId}</code>
            </li>
            <li>{sim.objectStorageKind}</li>
            <li>{sim.queueKind}</li>
          </ul>
        </section>
        <section>
          <h3>Observed (Overpass)</h3>
          <p>Posted citation only. IaC is not the cloud.</p>
          <ul>
            <li>freshness: {outcome.freshness}</li>
            <li>digest: {scenario === 'absent' ? 'omitted' : SIMULATED_DIGEST.slice(0, 16)}…</li>
            <li>count: {scenario === 'absent' ? 'n/a' : outcome.resourceIds.length}</li>
          </ul>
        </section>
      </div>

      <Evidence title="Simulated observation citation">
        <dl>
          <dt>tenant_id</dt>
          <dd>
            <code>{SIMULATED_TENANT}</code>
          </dd>
          <dt>environment_id</dt>
          <dd>
            <code>{sim.environmentId}</code>
          </dd>
          <dt>freshness</dt>
          <dd>
            <code>{outcome.freshness}</code>
          </dd>
          <dt>resource_id[]</dt>
          <dd>
            {outcome.resourceIds.length ? (
              <ul>
                {outcome.resourceIds.map((id) => (
                  <li key={id}>
                    <code>{id}</code>
                  </li>
                ))}
              </ul>
            ) : (
              'none posted'
            )}
          </dd>
        </dl>
      </Evidence>
    </>
  )
}

function ReclaimLab() {
  const [cloud, setCloud] = useState<CloudProvider>('aws')
  const [scenario, setScenario] = useState<ReclaimScenario>('leftover')
  const sim = SIMULATED_CLOUDS[cloud]
  const outcome = reclaimOutcome(scenario)

  return (
    <>
      <ChoiceSet
        legend="Environment under budget"
        name="reclaim-cloud"
        value={cloud}
        onChange={setCloud}
        options={CLOUD_PROVIDERS.map((id) => ({
          id,
          label: SIMULATED_CLOUDS[id].label,
          hint: SIMULATED_CLOUDS[id].environmentId,
        }))}
      />
      <ChoiceSet
        legend="Toll evidence"
        name="reclaim-scenario"
        value={scenario}
        onChange={setScenario}
        options={[
          {
            id: 'leftover',
            label: 'Over budget + leftover IDs',
            hint: 'REQUEST_RECLAIM, not verified gone',
          },
          {
            id: 'verified_empty',
            label: 'Present + resource_count 0',
            hint: 'Verified reclaim, still not destroy in this lab',
          },
          {
            id: 'no_digest',
            label: 'Spend without digest',
            hint: 'Hide dollars. No reclaim intent.',
          },
        ]}
      />

      <div className="lab-feedback" aria-live="polite">
        <p>
          Budget ${SIMULATED_BUDGET_USD}. Spend{' '}
          {outcome.showDollars ? `$${SIMULATED_SPEND_USD}` : 'hidden (no digest)'}. Intent{' '}
          <strong>{outcome.intent}</strong>. Verified reclaim:{' '}
          <strong>{outcome.verifiedReclaim ? 'yes' : 'no'}</strong>. Leftover:{' '}
          <strong>{outcome.leftover ? 'recorded' : 'none'}</strong>.
        </p>
        <p>{outcome.note}</p>
        <p>
          This simulated REQUEST_RECLAIM did not destroy infrastructure and did not call a cloud
          API.
        </p>
      </div>

      <Authority product="Toll" fact="owns economic condition persist and digest-gated totals." />
      <Authority product="Repave" fact="owns REQUEST_RECLAIM and leftover finalize." />
      <Authority product="Overpass" fact="owns the leftover observation, when posted." />

      <Evidence title="Simulated economic citation">
        <dl>
          <dt>kind</dt>
          <dd>
            <code>{outcome.kind}</code>
          </dd>
          <dt>tenant_id</dt>
          <dd>
            <code>{SIMULATED_TENANT}</code>
          </dd>
          <dt>environment_id</dt>
          <dd>
            <code>{sim.environmentId}</code>
          </dd>
          <dt>totals</dt>
          <dd>
            {outcome.showDollars
              ? `$${SIMULATED_SPEND_USD} / budget $${SIMULATED_BUDGET_USD}`
              : 'omitted'}
          </dd>
          <dt>digest</dt>
          <dd>
            {scenario === 'no_digest' ? 'missing' : <code>{SIMULATED_DIGEST.slice(0, 16)}…</code>}
          </dd>
          <dt>native leftover IDs</dt>
          <dd>
            {outcome.leftover ? (
              <ul>
                <li>
                  <code>{sim.objectStorageId}</code>
                </li>
                <li>
                  <code>{sim.queueId}</code>
                </li>
              </ul>
            ) : (
              'none'
            )}
          </dd>
        </dl>
      </Evidence>
    </>
  )
}

export default function LabWorkbench({ slug }: { slug: LabSlug }) {
  const lab = LABS.find((item) => item.slug === slug)
  if (!lab) return null
  const index = LABS.findIndex((item) => item.slug === slug)
  const prev = index > 0 ? LABS[index - 1] : undefined
  const next = index < LABS.length - 1 ? LABS[index + 1] : undefined

  return (
    <article className="lab-workbench">
      <p className="lab-sim-banner" role="status">
        {SIMULATED_LABEL}. No AWS, Azure, or GCP credentials. No production tenant. No secrets.
      </p>
      <header className="lab-workbench-head">
        <p className="rail-label">
          Lab {lab.number} · {lab.authority}
        </p>
        <h1 className="page-title">{lab.title}</h1>
        <p className="lede">{lab.summary}</p>
        <p className="lab-authority-line">
          {lab.authority} {lab.authorityVerb}.
        </p>
      </header>

      {slug === 'create' ? <CreateLab /> : null}
      {slug === 'observe' ? <ObserveLab /> : null}
      {slug === 'reclaim' ? <ReclaimLab /> : null}

      <nav className="lab-pager" aria-label="Labs">
        <Link href="/labs">All labs</Link>
        {prev ? <Link href={prev.href}>Previous: {prev.title}</Link> : <span />}
        {next ? <Link href={next.href}>Next: {next.title}</Link> : <span />}
      </nav>
      <LabsCtas compact />
    </article>
  )
}
