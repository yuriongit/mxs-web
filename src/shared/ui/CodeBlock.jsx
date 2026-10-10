import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NO_SUBCOMMAND = new Set(["cd"]);

export const CodeBlock = ({ children }) => {
  const [copied, setCopied] = useState(false);

  // Generate stable line objects with UUIDs
  const linesWithIds = useMemo(() => {
    return children.split("\n").map((line) => ({
      id: uuidv4(),
      line,
    }));
  }, [children]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className={`group relative border border-box-outline bg-box/35 backdrop-blur-xs`}>
      <pre className="overflow-x-auto p-4 pr-16 text-code font-syntax font-bold leading-relaxed text-zinc-200">
        {linesWithIds.map(({ id, line }) => (
          <div key={id}>
            <span className="select-none text-zinc-500">$ </span>
            {highlight(line)}
          </div>
        ))}
      </pre>
      <button
        type="button"
        onClick={copy}
        className="absolute py-0.75 px-2.5 bg-box right-3 top-3 rounded-sm text-xs text-subnote transition hover:text-pink hover:cursor-pointer"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

function highlight(line) {
  const parts = [...line.matchAll(/(\s+)|("[^"]*"|'[^']*'|\S+)/g)];
  const command = parts.find((p) => p[2])?.[2];

  return parts.map((p) => {
    if (p[1]) return p[1];

    const partId = uuidv4();
    let color = "text-pink";
    if (parts.indexOf(p) === 0) color = "text-lime";
    else if (parts.indexOf(p) === 1 ? !NO_SUBCOMMAND.has(command) : "") color = "text-blue";

    return (
      <span key={partId} className={color}>
        {p[2]}
      </span>
    );
  });
}
