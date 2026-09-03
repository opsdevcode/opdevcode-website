export default function MaturityMeta({
  index,
  label,
  extra,
}: {
  index: string
  label: string
  extra?: string
}) {
  return (
    <p className="meta-row" aria-label={`${label}. Product index ${index}.`}>
      <span className="product-index" aria-hidden="true">
        {index}
      </span>
      <span className="meta-sep" aria-hidden="true">
        ·
      </span>
      <span>{label}</span>
      {extra ? (
        <>
          <span className="meta-sep" aria-hidden="true">
            ·
          </span>
          <span>{extra}</span>
        </>
      ) : null}
    </p>
  )
}
