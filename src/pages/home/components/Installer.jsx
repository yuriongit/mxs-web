import { systems } from "../../../info";
import { CodeBlock } from "../../../shared/ui/CodeBlock";
import { useState } from "react";

export const Installer = () => {
  const [active, setActive] = useState(systems[0].id);
  const system = systems.find((s) => s.id === active);

  return (
    <div className="rounded-md bg-white/0.25 backdrop-blur-xs">
      <div role="tablist" className="flex border-t border-l border-r rounded-t-md border-line-break text-xs font-bold">
        {systems.map((s) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={s.id === active}
            onClick={() => setActive(s.id)}
            className={`px-4 py-2.5 transition hover:cursor-pointer ${
              s.id === active ? "bg-pink/10 text-pink" : "text-zinc-500 hover:text-zinc-200"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      <CodeBlock bare topBorder={false}>
        {system.commands(system.url).join("\n")}
      </CodeBlock>
    </div>
  );
};
