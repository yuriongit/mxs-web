import { useState } from "react"
import { repo, systems } from "../../../info"
import { ParagraphLink } from "../../../shared/components/ParagraphLink"
import { CodeBlock } from "../../../shared/ui/CodeBlock"

export const Installer = () => {
  const [active, setActive] = useState(systems[0].id)
  const system = systems.find((s) => s.id === active)

  return (
    <div className="bg-white/0.25 backdrop-blur-xs">
      <div
        role="tablist"
        className="flex border-t border-l border-b-none border-r border-box-outline text-xs font-bold"
      >
        {systems.map((s) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={s.id === active}
            onClick={() => setActive(s.id)}
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
      <CodeBlock bare>{system.commands(system.url).join("\n")}</CodeBlock>

      <p className="mt-2.5 text-sm text-subnote">
        Other platforms and versions are on the{" "}
        <ParagraphLink href={`${repo}/releases`} text={"Releases"} /> page.
      </p>
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
