export const Bullets = ({ items }) => (
  <ul className="grid gap-x-8 gap-y-5 text-paragraph text-base sm:grid-cols-2">
    {items.map(([term, text]) => (
      <li key={term} className="flex gap-3">
        <span className="mt-2 size-1 shrink-0 bg-pink" />
        <p>
          <span className="text-pink font-medium">{term}</span> {text}
        </p>
      </li>
    ))}
  </ul>
)
