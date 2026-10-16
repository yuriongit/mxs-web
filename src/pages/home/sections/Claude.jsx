const _VERSION = "v0.1.0-beta"

const _Eyebrow = ({ tag, children }) => (
  <p className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-neutral-500">
    <span className="bg-lime px-2 py-0.5 font-black text-neutral-950">
      {tag}
    </span>
    {children}
  </p>
)

const _Headline = ({ children }) => (
  <h2 className="mt-6 break-words font-jetbrains text-5xl font-black leading-[0.95] tracking-tighter text-neutral-100 sm:text-7xl">
    {children}
  </h2>
)

const _Lead = ({ children }) => (
  <p className="mt-6 max-w-md leading-relaxed text-paragraph">{children}</p>
)

const _Chip = ({ children }) => (
  <span className="inline-block border border-line-break px-4 py-2 text-xs font-bold">
    {children}
  </span>
)

const _Bullets = ({ items }) => (
  <ul className="grid gap-x-8 gap-y-5 text-sm text-paragraph sm:grid-cols-2">
    {items.map(([term, text]) => (
      <li key={term} className="flex gap-3">
        <span className="mt-2 size-1 shrink-0 bg-pink" />
        <p>
          <code className="font-syntax font-bold text-neutral-100">{term}</code>{" "}
          {text}
        </p>
      </li>
    ))}
  </ul>
)

const _Block = ({ id, children }) => (
  <section
    id={id}
    className="mt-28 grid gap-14 border-t border-line-break pt-20 lg:grid-cols-2 lg:items-start"
  >
    {children}
  </section>
)

// 3. About MXS
const _stats = [
  ["Binary size", "~5 MB", "5.04 MB on macOS, 5.32 MB on Linux"],
  ["Files to install", "1", "One binary from GitHub Releases"],
  ["Extensions typed", "0", 'mxs demo "Your FirstName"'],
  ["License", "MIT", "Free to use, read and change"],
]
