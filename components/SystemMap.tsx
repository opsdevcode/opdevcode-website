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

function SvgWords({
  words,
  className,
  x,
  y,
  anchor = 'middle',
  gap = 8,
  size = 12,
}: {
  words: string[]
  className: string
  x: number
  y: number
  anchor?: 'start' | 'middle' | 'end'
  gap?: number
  size?: number
}) {
  return (
    <text className={className} x={x} y={y} textAnchor={anchor} fontSize={size}>
      {words.map((word, index) => (
        <tspan key={`${word}-${index}`} dx={index === 0 ? undefined : gap}>
          {word}
        </tspan>
      ))}
    </text>
  )
}

function HeroCut() {
  return (
    <svg className="sysmap-section sysmap-field--desktop" viewBox="0 0 640 400" aria-hidden="true">
      <title>Partial section cut</title>
      <desc>
        Software state and governed intent meet an ink policy gate. The gate is a plane, not a
        product domain.
      </desc>
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35">
        <path d="M48 28 H592 V372" />
      </g>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path d="M88 96 V56 H168" />
        <path d="M472 56 H552 V96" />
      </g>
      <text className="sysmap-svg-kicker" x="320" y="48" textAnchor="middle" fontSize={12}>
        SECTION
      </text>
      <SvgWords
        className="sysmap-svg-note"
        x={320}
        y={68}
        words={['partial', 'cut', '·', 'not', 'the', 'whole', 'system']}
      />
      <SvgWords
        className="sysmap-label sysmap-label--repave"
        x={234}
        y={124}
        words={['software', 'state']}
      />
      <SvgWords
        className="sysmap-label sysmap-label--dispatch"
        x={414}
        y={124}
        words={['governed', 'intent']}
      />
      <rect className="sysmap-bed sysmap-bed--repave" x="168" y="138" width="132" height="88" />
      <rect className="sysmap-bed sysmap-bed--dispatch" x="340" y="138" width="148" height="88" />
      <g className="sysmap-plane sysmap-plane--repave">
        <path d="M188 168 H256" />
        <path d="M188 188 H238" />
        <path d="M218 206 H256" />
        <path d="M188 168 V188" />
        <path d="M256 188 V206" />
      </g>
      <g className="sysmap-plane sysmap-plane--dispatch">
        <path d="M360 182 H394" />
        <path d="M394 162 V202" />
        <path d="M434 162 V202" />
        <path d="M414 182 H476" />
        <path className="sysmap-intent" d="M464 174 L476 182 L464 190" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path className="sysmap-policy-rule" d="M148 250 H492" />
      </g>
      <SvgWords
        className="sysmap-svg-note"
        x={320}
        y={274}
        words={['policy', 'gate', '·', 'ink']}
      />
      <SvgWords
        className="sysmap-svg-foot"
        x={320}
        y={352}
        words={['the', 'drawing', 'continues', 'past', 'the', 'frame']}
      />
    </svg>
  )
}

function FamilyDesktop() {
  return (
    <svg className="sysmap-section sysmap-field--desktop" viewBox="0 0 720 500" aria-hidden="true">
      <title>Engineering system</title>
      <desc>
        Four independent domains. Neutral rules are context. Product-colored planes are authority.
        Dispatch coordinates and does not own the other domains.
      </desc>
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35">
        <path d="M36 28 H684 V472 H36 Z" />
      </g>
      <SvgWords
        className="sysmap-title"
        x={360}
        y={56}
        size={22}
        words={['Engineering', 'system']}
      />
      <SvgWords
        className="sysmap-svg-note"
        x={360}
        y={76}
        words={['four', 'authoritative', 'domains', '·', 'not', 'a', 'runtime', 'topology']}
      />

      <text className="sysmap-svg-kicker" x="156" y="108" textAnchor="middle" fontSize={12}>
        <tspan x="156" dy="0">
          SOFTWARE
        </tspan>
        <tspan x="156" dy="14">
          STATE
        </tspan>
      </text>
      <text className="sysmap-svg-kicker" x="360" y="108" textAnchor="middle" fontSize={12}>
        <tspan x="360" dy="0">
          INFRASTRUCTURE
        </tspan>
        <tspan x="360" dy="14">
          STATE
        </tspan>
      </text>
      <text className="sysmap-svg-kicker" x="564" y="108" textAnchor="middle" fontSize={12}>
        <tspan x="564" dy="0">
          ECONOMIC
        </tspan>
        <tspan x="564" dy="14">
          STATE
        </tspan>
      </text>

      <rect className="sysmap-bed sysmap-bed--repave" x="88" y="148" width="136" height="80" />
      <rect className="sysmap-bed sysmap-bed--overpass" x="292" y="148" width="136" height="80" />
      <rect className="sysmap-bed sysmap-bed--toll" x="496" y="148" width="136" height="80" />

      <g className="sysmap-plane sysmap-plane--repave sysmap-path--repave">
        <path d="M108 176 H196" />
        <path d="M108 196 H168" />
        <path d="M148 212 H196" />
      </g>
      <g className="sysmap-plane sysmap-plane--overpass sysmap-path--overpass">
        <path d="M312 172 H408" />
        <path d="M312 200 H408" />
        <path d="M336 172 V200" />
        <path d="M384 172 V200" />
      </g>
      <g className="sysmap-plane sysmap-plane--toll sysmap-path--toll">
        <path d="M516 184 H556" />
        <path d="M572 184 H612" />
        <path d="M556 168 V200" />
        <path d="M572 168 V200" />
      </g>

      <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" opacity="0.7">
        <path d="M156 228 V256" />
        <path d="M360 228 V256" />
        <path d="M564 228 V256" />
        <path d="M156 256 H564" />
        <path d="M360 256 V300" />
      </g>
      <SvgWords
        className="sysmap-svg-note"
        x={360}
        y={278}
        words={['context', '·', 'no', 'authority', 'transfer']}
      />

      <rect className="sysmap-bed sysmap-bed--dispatch" x="292" y="312" width="136" height="64" />
      <g className="sysmap-plane sysmap-plane--dispatch sysmap-path--dispatch">
        <path d="M312 344 H346" />
        <path d="M346 328 V360" />
        <path d="M386 328 V360" />
        <path d="M366 344 H408" />
        <path className="sysmap-intent" d="M396 336 L408 344 L396 352" />
      </g>
      <SvgWords className="sysmap-svg-kicker" x={360} y={404} words={['GOVERNED', 'INTENT']} />
      <SvgWords
        className="sysmap-svg-foot"
        x={360}
        y={448}
        words={['Dispatch', 'coordinates.', 'Domains', 'remain', 'owners.']}
      />
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
      <li className="sysmap-stack-item sysmap-stack-item--gate">
        <p className="sysmap-kicker">Policy gate</p>
        <p>Ink plane. Not a product domain. Authority stays with the domain that evaluates it.</p>
      </li>
    </ol>
  )
}

function HeroMobile() {
  return (
    <ol className="sysmap-stack sysmap-field--mobile">
      <li className="sysmap-stack-item sysmap-stack-item--repave">
        <p className="sysmap-kicker">Software state</p>
        <p>Repave reads the approved and observed repository cut.</p>
      </li>
      <li className="sysmap-stack-item sysmap-stack-item--dispatch">
        <p className="sysmap-kicker">Governed intent</p>
        <p>Dispatch carries the question. It does not take domain authority.</p>
      </li>
      <li className="sysmap-stack-item sysmap-stack-item--gate">
        <p className="sysmap-kicker">Policy gate · ink</p>
        <p>A plane on the cut, not a product domain.</p>
      </li>
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
      <SvgWords
        className="sysmap-svg-note"
        x={80}
        y={216}
        anchor="start"
        words={['domain', 'state', '·', 'identity', '·', 'requested', 'change']}
      />
      <g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
        <path className="sysmap-policy-rule" d="M48 248 H672" />
        <path d="M360 248 V248" />
      </g>
      <text className="sysmap-svg-kicker" x="360" y="276" textAnchor="middle">
        POLICY EVALUATE
      </text>
      <SvgWords
        className="sysmap-svg-note"
        x={360}
        y={296}
        words={['ink', 'decision', 'boundary', '·', 'not', 'a', 'product', 'domain']}
      />
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
      <SvgWords
        className="sysmap-svg-foot"
        x={360}
        y={392}
        words={['evaluation', 'is', 'explicit.', 'gates', 'stay', 'with', 'domains.']}
      />
    </svg>
  )
}

function ContextCut() {
  return (
    <svg className="sysmap-section sysmap-field--desktop" viewBox="0 0 720 400" aria-hidden="true">
      <title>Cross-domain context</title>
      <desc>
        What changed, what did it affect, and what did it cost. Connections are context, not a
        required pipeline.
      </desc>
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35">
        <path d="M36 24 H684 V392 H36 Z" />
      </g>
      <text className="sysmap-svg-kicker" x="120" y="52" textAnchor="middle" fontSize={12}>
        CHANGED
      </text>
      <text className="sysmap-svg-kicker" x="360" y="52" textAnchor="middle" fontSize={12}>
        AFFECTED
      </text>
      <text className="sysmap-svg-kicker" x="600" y="52" textAnchor="middle" fontSize={12}>
        COST
      </text>
      <text className="sysmap-label sysmap-label--repave" x="120" y="78" textAnchor="middle">
        Repave
      </text>
      <text className="sysmap-label sysmap-label--overpass" x="360" y="78" textAnchor="middle">
        Overpass
      </text>
      <text className="sysmap-label sysmap-label--toll" x="600" y="78" textAnchor="middle">
        Toll
      </text>
      <rect className="sysmap-bed sysmap-bed--repave" x="56" y="92" width="128" height="56" />
      <rect className="sysmap-bed sysmap-bed--overpass" x="296" y="92" width="128" height="56" />
      <rect className="sysmap-bed sysmap-bed--toll" x="536" y="92" width="128" height="56" />
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" opacity="0.75">
        <path d="M120 148 V176" />
        <path d="M360 148 V176" />
        <path d="M600 148 V176" />
        <path d="M120 176 H600" />
      </g>
      <SvgWords
        className="sysmap-svg-note"
        x={360}
        y={196}
        words={['context', 'may', 'cross', '·', 'authority', 'does', 'not']}
      />
      <g fill="none" stroke="currentColor" strokeLinecap="square">
        <path className="sysmap-policy-rule" d="M56 228 H664" />
      </g>
      <SvgWords
        className="sysmap-svg-kicker"
        x={360}
        y={250}
        words={['policy', 'gate', '·', 'ink']}
      />
      <text className="sysmap-svg-note" x="360" y="268" textAnchor="middle" fontSize={12}>
        not a product domain
      </text>
      <text className="sysmap-label sysmap-label--dispatch" x="360" y="300" textAnchor="middle">
        Dispatch
      </text>
      <rect className="sysmap-bed sysmap-bed--dispatch" x="296" y="312" width="128" height="48" />
      <SvgWords
        className="sysmap-svg-foot"
        x={360}
        y={380}
        words={['conceptual', 'example', '·', 'not', 'a', 'required', 'pipeline']}
      />
    </svg>
  )
}

function ContextMobile() {
  return (
    <ol className="sysmap-stack sysmap-field--mobile">
      <li className="sysmap-stack-item sysmap-stack-item--repave">
        <p className="sysmap-kicker">What changed?</p>
        <p>Repave owns the software-state reading.</p>
      </li>
      <li className="sysmap-stack-item sysmap-stack-item--overpass">
        <p className="sysmap-kicker">What did it affect?</p>
        <p>Overpass owns infrastructure relationships.</p>
      </li>
      <li className="sysmap-stack-item sysmap-stack-item--toll">
        <p className="sysmap-kicker">What did it cost?</p>
        <p>Toll owns the economic record.</p>
      </li>
      <li className="sysmap-stack-item sysmap-stack-item--gate">
        <p className="sysmap-kicker">Policy gate · ink</p>
        <p>A plane across the cut. Not a fifth product and not a badge on a card.</p>
      </li>
      <li className="sysmap-stack-item sysmap-stack-item--dispatch">
        <p className="sysmap-kicker">Who asks?</p>
        <p>Dispatch can coordinate the question. Authority stays in the domain.</p>
      </li>
    </ol>
  )
}

const captions: Record<SystemMapVariant, string> = {
  hero: 'A partial section cut through the OpsDevCode engineering system. Software state and governed intent meet an ink policy gate. The gate is a plane, not a product domain. The frame is incomplete because this is not the whole drawing.',
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
      {kind === 'hero' && (
        <>
          <HeroCut />
          <HeroMobile />
        </>
      )}
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
      {kind === 'context' && (
        <>
          <ContextCut />
          <ContextMobile />
        </>
      )}
      {family && (
        <p className="sysmap-aside">
          Design informed by <span>Convergence</span>
          <small>Independent · not an OpsDevCode product · not in the runtime path</small>
        </p>
      )}
    </figure>
  )
}
