const FIGURE_TITLE = 'Repository lifecycle'
const FIGURE_DESC =
  'Repave compares approved repository state with actual repository state, identifies differences, routes supported differences through governed change, verifies resulting state, and retains lifecycle history and evidence.'

export default function RepaveLifecycleFigure() {
  return (
    <figure className="repave-figure">
      <figcaption className="visually-hidden">{FIGURE_DESC}</figcaption>
      <DesktopLifecycle />
      <MobileLifecycle />
    </figure>
  )
}

function DesktopLifecycle() {
  return (
    <svg
      className="repave-figure-svg repave-figure-svg--desktop"
      viewBox="0 0 640 560"
      role="img"
      aria-labelledby="repave-life-title-d repave-life-desc-d"
    >
      <title id="repave-life-title-d">{FIGURE_TITLE}</title>
      <desc id="repave-life-desc-d">{FIGURE_DESC}</desc>
      <g className="repave-fig-frame" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="12" y="12" width="616" height="536" />
        <path d="M12 12 h10 M12 12 v10" />
        <path d="M628 12 h-10 M628 12 v10" />
        <path d="M12 548 h10 M12 548 v-10" />
        <path d="M628 548 h-10 M628 548 v-10" />
      </g>
      <text className="repave-fig-title" x="28" y="38">
        REPOSITORY LIFECYCLE
      </text>
      <text className="repave-fig-brand" x="612" y="38" textAnchor="end">
        REPAVE
      </text>

      <text className="repave-fig-state" x="148" y="68" textAnchor="middle">
        APPROVED STATE
      </text>
      <text className="repave-fig-state" x="492" y="68" textAnchor="middle">
        ACTUAL STATE
      </text>

      <g className="repave-fig-box" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="48" y="80" width="200" height="118" />
        <rect x="392" y="80" width="200" height="118" />
      </g>
      <text className="repave-fig-note" x="60" y="104">
        expected configuration
      </text>
      <text className="repave-fig-note" x="60" y="124">
        supported baseline
      </text>
      <text className="repave-fig-note" x="60" y="144">
        governance
      </text>
      <text className="repave-fig-cut" x="60" y="176">
        baseline · governance
      </text>

      <text className="repave-fig-note" x="404" y="104">
        observed configuration
      </text>
      <text className="repave-fig-note" x="404" y="124">
        current repository state
      </text>
      <text className="repave-fig-cut" x="404" y="176">
        current state · repository
      </text>

      <g className="repave-fig-path" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M148 198 V228 H320" />
        <path d="M492 198 V228 H320" />
        <path d="M320 228 V248" />
      </g>

      <g className="repave-fig-diff" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="236" y="248" width="168" height="52" />
      </g>
      <text className="repave-fig-diff-label" x="320" y="270" textAnchor="middle">
        DIFFERENCE
      </text>
      <text className="repave-fig-diff-note" x="320" y="288" textAnchor="middle">
        APPROVED != ACTUAL
      </text>

      <g className="repave-fig-path" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M320 300 V328" />
      </g>
      <text className="repave-fig-gate" x="320" y="344" textAnchor="middle">
        supported?
      </text>
      <text className="repave-fig-gate-side" x="412" y="344">
        SUPPORTED PATH
      </text>
      <g className="repave-fig-path" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M320 352 V372" />
      </g>

      <g className="repave-fig-box" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="214" y="372" width="212" height="40" />
      </g>
      <text className="repave-fig-state" x="320" y="397" textAnchor="middle">
        GOVERNED CHANGE
      </text>

      <g className="repave-fig-path" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M320 412 V436" />
      </g>
      <text className="repave-fig-state" x="320" y="454" textAnchor="middle">
        VERIFIED STATE
      </text>
      <g className="repave-fig-return" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M392 448 H560 V139 H592" />
      </g>
      <text
        className="repave-fig-return-note"
        x="568"
        y="292"
        textAnchor="middle"
        transform="rotate(90 568 292)"
      >
        observed lifecycle continues
      </text>

      <g className="repave-fig-path" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M320 462 V484" />
      </g>
      <text className="repave-fig-state" x="320" y="502" textAnchor="middle">
        HISTORY + EVIDENCE
      </text>

      <g className="repave-fig-rail" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M48 524 H592" />
      </g>
      <text className="repave-fig-rail-label" x="90" y="542" textAnchor="middle">
        APPROVED
      </text>
      <text className="repave-fig-rail-label" x="230" y="542" textAnchor="middle">
        OBSERVED
      </text>
      <text
        className="repave-fig-rail-label repave-fig-rail-label--accent"
        x="380"
        y="542"
        textAnchor="middle"
      >
        DIFFERENCE
      </text>
      <text className="repave-fig-rail-label" x="530" y="542" textAnchor="middle">
        VERIFIED
      </text>
    </svg>
  )
}

function MobileLifecycle() {
  return (
    <svg
      className="repave-figure-svg repave-figure-svg--mobile"
      viewBox="0 0 320 820"
      role="img"
      aria-labelledby="repave-life-title-m repave-life-desc-m"
    >
      <title id="repave-life-title-m">{FIGURE_TITLE}</title>
      <desc id="repave-life-desc-m">{FIGURE_DESC}</desc>
      <g className="repave-fig-frame" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="8" y="8" width="304" height="804" />
        <path d="M8 8 h8 M8 8 v8" />
        <path d="M312 8 h-8 M312 8 v8" />
        <path d="M8 812 h8 M8 812 v-8" />
        <path d="M312 812 h-8 M312 812 v-8" />
      </g>
      <text className="repave-fig-title" x="20" y="32">
        REPOSITORY LIFECYCLE
      </text>
      <text className="repave-fig-brand" x="300" y="32" textAnchor="end">
        REPAVE
      </text>

      <text className="repave-fig-state" x="160" y="64" textAnchor="middle">
        APPROVED STATE
      </text>
      <g className="repave-fig-box" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="48" y="76" width="224" height="88" />
      </g>
      <text className="repave-fig-note" x="60" y="100">
        expected configuration
      </text>
      <text className="repave-fig-note" x="60" y="120">
        supported baseline
      </text>
      <text className="repave-fig-note" x="60" y="140">
        governance
      </text>

      <g className="repave-fig-path" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M160 164 V196" />
        <path d="M160 180 H248" />
      </g>
      <text className="repave-fig-gate" x="252" y="176">
        compare
      </text>

      <text className="repave-fig-state" x="160" y="220" textAnchor="middle">
        ACTUAL STATE
      </text>
      <g className="repave-fig-box" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="48" y="232" width="224" height="72" />
      </g>
      <text className="repave-fig-note" x="60" y="256">
        observed configuration
      </text>
      <text className="repave-fig-note" x="60" y="276">
        current repository state
      </text>
      <g className="repave-fig-return" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M248 180 V268 H272" />
      </g>

      <g className="repave-fig-path" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M160 304 V336" />
      </g>
      <g className="repave-fig-diff" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="56" y="336" width="208" height="56" />
      </g>
      <text className="repave-fig-diff-label" x="160" y="360" textAnchor="middle">
        DIFFERENCE
      </text>
      <text className="repave-fig-diff-note" x="160" y="380" textAnchor="middle">
        APPROVED != ACTUAL
      </text>

      <g className="repave-fig-path" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M160 392 V420" />
      </g>
      <text className="repave-fig-gate" x="160" y="438" textAnchor="middle">
        supported?
      </text>
      <text className="repave-fig-gate-side" x="160" y="456" textAnchor="middle">
        SUPPORTED PATH
      </text>
      <g className="repave-fig-path" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M160 464 V488" />
      </g>

      <g className="repave-fig-box" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="48" y="488" width="224" height="44" />
      </g>
      <text className="repave-fig-state" x="160" y="516" textAnchor="middle">
        GOVERNED CHANGE
      </text>

      <g className="repave-fig-path" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M160 532 V564" />
      </g>
      <text className="repave-fig-state" x="160" y="588" textAnchor="middle">
        VERIFIED STATE
      </text>
      <g className="repave-fig-path" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M160 598 V630" />
      </g>
      <text className="repave-fig-state" x="160" y="654" textAnchor="middle">
        HISTORY + EVIDENCE
      </text>

      <g className="repave-fig-rail" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M32 700 H288" />
      </g>
      <text className="repave-fig-rail-label" x="160" y="728" textAnchor="middle">
        APPROVED
      </text>
      <text className="repave-fig-rail-label" x="160" y="748" textAnchor="middle">
        OBSERVED
      </text>
      <text
        className="repave-fig-rail-label repave-fig-rail-label--accent"
        x="160"
        y="768"
        textAnchor="middle"
      >
        DIFFERENCE
      </text>
      <text className="repave-fig-rail-label" x="160" y="788" textAnchor="middle">
        VERIFIED
      </text>
    </svg>
  )
}
