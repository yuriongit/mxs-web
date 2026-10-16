export const Eyebrow = ({ tag, children }) => (
  <p className="flex flex-wrap items-center gap-3 text-xs uppercase text-neutral-500">
    <span className="bg-lime px-2 py-0.5 font-extrabold text-neutral-950">
      {tag}
    </span>
    {children}
  </p>
)
