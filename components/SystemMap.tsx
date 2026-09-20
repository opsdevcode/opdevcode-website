import { ProductMark } from '@/components/BrandMark'
import { PRODUCT_URLS } from '@/lib/site'

export type SystemMapVariant = 'hero' | 'family' | 'policy' | 'context'

const domains = [
  { slug: 'repave' as const, name: 'Repave', domain: 'Software state', href: PRODUCT_URLS.repave },
  {
    slug: 'overpass' as const,
    name: 'Overpass',
    domain: 'Infrastructure state',
    href: PRODUCT_URLS.overpass,
  },
  { slug: 'toll' as const, name: 'Toll', domain: 'Economic state', href: PRODUCT_URLS.toll },
  {
    slug: 'dispatch' as const,
    name: 'Dispatch',
    domain: 'Governed intent',
    href: PRODUCT_URLS.dispatch,
  },
]

function HiddenCaption({ children }: { children: string }) {
  return <figcaption className="visually-hidden">{children}</figcaption>
}

function HeroCut() {
  return (
    <svg className="sysmap-section" viewBox="0 0 640 360" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35">
        <path d="M48 36 H592 V300" />
      </g>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path d="M88 108 V68 H168" />
        <path d="M472 68 H552 V108" />
      </g>
      <rect className="sysmap-bed sysmap-bed--repave" x="168" y="128" width="132" height="96" />
      <rect className="sysmap-bed sysmap-bed--dispatch" x="340" y="128" width="148" height="96" />
      <g className="sysmap-plane sysmap-plane--repave">
        <path d="M188 164 H256" />
        <path d="M188 184 H238" />
        <path d="M218 204 H256" />
        <path d="M188 164 V184" />
        <path d="M256 184 V204" />
      </g>
      <g className="sysmap-plane sysmap-plane--dispatch">
        <path d="M360 176 H394" />
        <path d="M394 156 V196" />
        <path d="M434 156 V196" />
        <path d="M414 176 H476" />
        <path className="sysmap-intent" d="M464 168 L476 176 L464 184" />
      </g>
      <text className="sysmap-svg-kicker" x="320" y="56" textAnchor="middle">
        SECTION
      </text>
      <text className="sysmap-svg-note" x="320" y="76" textAnchor="middle">
        partial cut · not the whole system
      </text>
      <text className="sysmap-label sysmap-label--repave" x="188" y="150">
        software state
      </text>
      <text className="sysmap-label sysmap-label--dispatch" x="360" y="150">
        governed intent
      </text>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path className="sysmap-policy-rule" d="M148 220 H492" />
      </g>
      <text className="sysmap-svg-note" x="320" y="244" textAnchor="middle">
        policy gate · ink
      </text>
      <text className="sysmap-svg-foot" x="320" y="332" textAnchor="middle">
        the drawing continues past the frame
      </text>
    </svg>
  )
}

function FamilyDesktop() {
  return (
    <svg className="sysmap-section sysmap-field--desktop" viewBox="0 0 720 460" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35">
        <path d="M36 36 H684 V424 H36 Z" />
      </g>
      <text className="sysmap-title" x="360" y="64" textAnchor="middle">
        Engineering system
      </text>
      <text className="sysmap-svg-note" x="360" y="84" textAnchor="middle">
        four authoritative domains · not a runtime topology
      </text>

      <text className="sysmap-svg-kicker" x="156" y="118">
        SOFTWARE STATE
      </text>
      <text className="sysmap-svg-kicker" x="360" y="118" textAnchor="middle">
        INFRASTRUCTURE STATE
      </text>
      <text className="sysmap-svg-kicker" x="564" y="118" textAnchor="middle">
        ECONOMIC STATE
      </text>

      <rect className="sysmap-bed sysmap-bed--repave" x="88" y="132" width="136" height="88" />
      <rect className="sysmap-bed sysmap-bed--overpass" x="292" y="132" width="136" height="88" />
      <rect className="sysmap-bed sysmap-bed--toll" x="496" y="132" width="136" height="88" />

      <g className="sysmap-plane sysmap-plane--repave sysmap-path--repave">
        <path d="M108 168 H196" />
        <path d="M108 188 H168" />
        <path d="M148 204 H196" />
      </g>
      <g className="sysmap-plane sysmap-plane--overpass sysmap-path--overpass">
        <path d="M312 164 H408" />
        <path d="M312 192 H408" />
        <path d="M336 164 V192" />
        <path d="M384 164 V192" />
      </g>
      <g className="sysmap-plane sysmap-plane--toll sysmap-path--toll">
        <path d="M516 176 H556" />
        <path d="M572 176 H612" />
        <path d="M556 160 V192" />
        <path d="M572 160 V192" />
      </g>

      <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" opacity="0.7">
        <path d="M156 220 V268" />
        <path d="M360 220 V268" />
        <path d="M564 220 V268" />
        <path d="M156 268 H564" />
        <path d="M360 268 V304" />
      </g>
      <text className="sysmap-svg-note" x="360" y="292" textAnchor="middle">
        connected engineering context · does not transfer authority
      </text>

      <rect className="sysmap-bed sysmap-bed--dispatch" x="292" y="312" width="136" height="72" />
      <g className="sysmap-plane sysmap-plane--dispatch sysmap-path--dispatch">
        <path d="M312 348 H346" />
        <path d="M346 332 V364" />
        <path d="M386 332 V364" />
        <path d="M366 348 H408" />
        <path className="sysmap-intent" d="M396 340 L408 348 L396 356" />
      </g>
      <text className="sysmap-svg-kicker" x="360" y="400" textAnchor="middle">
        GOVERNED INTENT + ACTION
      </text>
      <text className="sysmap-svg-foot" x="360" y="428" textAnchor="middle">
        Dispatch coordinates. Domains remain owners.
      </text>
    </svg>
  )
}

function FamilyMobile() {
  return (
    <ol className="sysmap-stack sysmap-field--mobile">
      {domains.map((item) => (
        <li key={item.slug} className={`sysmap-stack-item sysmap-stack-item--${item.slug}`}>
          <p className="sysmap-kicker">{item.domain}</p>
          <a className={`sysmap-anchor sysmap-anchor--${item.slug}`} href={item.href}>
            <ProductMark slug={item.slug} className="sysmap-mark" />
            <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ol>
  )
}

function PolicyCut() {
  return (
    <svg className="sysmap-section" viewBox="0 0 720 420" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35">
        <path d="M36 36 H684 V384 H36 Z" />
      </g>
      <text className="sysmap-svg-kicker" x="80" y="72">
        INTENT
      </text>
      <text className="sysmap-title" x="80" y="108">
        Requested outcome
      </text>
      <path
        d="M88 128 V168"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <text className="sysmap-svg-kicker" x="80" y="196">
        CONTEXT
      </text>
      <text className="sysmap-svg-note" x="80" y="216">
        domain state · identity · requested change
      </text>
      <g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
        <path className="sysmap-policy-rule" d="M48 248 H672" />
        <path d="M360 248 V248" />
      </g>
      <text className="sysmap-svg-kicker" x="360" y="276" textAnchor="middle">
        POLICY EVALUATE
      </text>
      <text className="sysmap-svg-note" x="360" y="296" textAnchor="middle">
        ink decision boundary · not a product domain
      </text>
      <path
        d="M360 308 V336"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <text className="sysmap-svg-kicker" x="220" y="360">
        ALLOWED → DOMAIN CHANGE
      </text>
      <text className="sysmap-svg-kicker" x="500" y="360">
        REFUSED
      </text>
      <text className="sysmap-svg-foot" x="360" y="392" textAnchor="middle">
        direction: evaluation is explicit. current gates stay with domains.
      </text>
    </svg>
  )
}

function ContextCut() {
  return (
    <svg className="sysmap-section" viewBox="0 0 720 360" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35">
        <path d="M36 28 H684 V332 H36 Z" />
      </g>
      <text className="sysmap-svg-kicker" x="120" y="64" textAnchor="middle">
        WHAT CHANGED?
      </text>
      <text className="sysmap-svg-kicker" x="360" y="64" textAnchor="middle">
        WHAT DID IT AFFECT?
      </text>
      <text className="sysmap-svg-kicker" x="600" y="64" textAnchor="middle">
        WHAT DID IT COST?
      </text>
      <rect className="sysmap-bed sysmap-bed--repave" x="56" y="84" width="128" height="64" />
      <rect className="sysmap-bed sysmap-bed--overpass" x="296" y="84" width="128" height="64" />
      <rect className="sysmap-bed sysmap-bed--toll" x="536" y="84" width="128" height="64" />
      <text className="sysmap-label sysmap-label--repave" x="72" y="122">
        Repave
      </text>
      <text className="sysmap-label sysmap-label--overpass" x="312" y="122">
        Overpass
      </text>
      <text className="sysmap-label sysmap-label--toll" x="552" y="122">
        Toll
      </text>
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" opacity="0.75">
        <path d="M120 148 V200" />
        <path d="M360 148 V200" />
        <path d="M600 148 V200" />
        <path d="M120 200 H600" />
        <path d="M360 200 V236" />
      </g>
      <text className="sysmap-svg-note" x="360" y="192" textAnchor="middle">
        context may cross · authority does not
      </text>
      <rect className="sysmap-bed sysmap-bed--dispatch" x="296" y="240" width="128" height="52" />
      <text className="sysmap-label sysmap-label--dispatch" x="312" y="272">
        Dispatch
      </text>
      <text className="sysmap-svg-foot" x="360" y="316" textAnchor="middle">
        conceptual example · not a required pipeline
      </text>
    </svg>
  )
}

const captions: Record<SystemMapVariant, string> = {
  hero: 'A partial section cut through the OpsDevCode engineering system. Software state and governed intent meet an ink policy gate. The frame is incomplete because this is not the whole drawing.',
  family:
    'OpsDevCode is the parent view of four independent domains. Repave owns software state, Overpass owns infrastructure state, Toll owns economic state, and Dispatch owns governed intent. Neutral rules are context. Product-colored planes are authority. This is not a runtime hierarchy and Dispatch does not own the other domains.',
  policy:
    'Policy is a cross-cutting decision boundary drawn in ink. Intent and context meet evaluation. Allowed work continues into a domain change; refused work stops. Policy is not a fifth product and does not receive a product accent.',
  context:
    'A company-level question: what changed, what did it affect, and what did it cost. Repave, Overpass, and Toll remain independent authorities. Dispatch can coordinate the question. The connections are context, not a mandatory sequence.',
}

export default function SystemMap({
  compact,
  variant,
}: {
  compact?: boolean
  variant?: SystemMapVariant
}) {
  const kind: SystemMapVariant = variant ?? (compact ? 'hero' : 'family')
  const family = kind === 'family'

  return (
    <figure className={`sysmap sysmap--${kind}${compact ? ' sysmap--compact' : ''}`}>
      <HiddenCaption>{captions[kind]}</HiddenCaption>
      {kind === 'hero' && <HeroCut />}
      {kind === 'family' && (
        <>
          <FamilyDesktop />
          <FamilyMobile />
          <ul className="sysmap-legend">
            {domains.map((item) => (
              <li key={item.slug}>
                <a className={`sysmap-anchor sysmap-anchor--${item.slug}`} href={item.href}>
                  <ProductMark slug={item.slug} className="sysmap-mark" />
                  <span>
                    {item.name}
                    <small>{item.domain}</small>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
      {kind === 'policy' && <PolicyCut />}
      {kind === 'context' && <ContextCut />}
      {family && (
        <p className="sysmap-aside">
          Design informed by <span>Convergence</span>
          <small>Independent · not an OpsDevCode product · not in the runtime path</small>
        </p>
      )}
    </figure>
  )
}
