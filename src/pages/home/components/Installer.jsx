import { systems } from "../../../info"
import { CodeBlock } from "../../../shared/ui/CodeBlock"

// Controlled: the parent owns the active tab.
export const Installer = ({ active, onChange }) => {
  const system = systems.find((s) => s.id === active)

  return (
    <div className="bg-white/0.25 backdrop-blur-xs">
      <div
        role="tablist"
        className="flex border-t border-l border-b-none border-r border-box-outline text-xs font-normal"
      >
        {systems.map((s) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={s.id === active}
            onClick={() => onChange(s.id)}
            className={`px-4 py-2.5 transition hover:cursor-pointer ${
              s.id === active
                ? "bg-pink/10 text-pink"
                : "text-zinc-500 hover:text-zinc-200"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      <CodeBlock bare>{system.commands.join("\n")}</CodeBlock>
    </div>
  )
}

export const installationSteps = [
  {
    label: "Initialize MXS",
    code: "mxs init",
  },
  {
    label: "Run the demo",
    code: `mxs demo "Your FirstName"`,
  },
]
