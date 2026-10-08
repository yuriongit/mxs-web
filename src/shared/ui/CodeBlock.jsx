import { useState } from "react";

// Commands that take plain arguments instead of a subcommand.
const NO_SUBCOMMAND = new Set(["cd"]);

export const CodeBlock = ({ children, topBorder: topRounding }) => {
  const [copied, setCopied] = useState(false);

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
    <div className={`group relative ${!topRounding ? "rounded-t-none" : ""} border rounded-md border-line-break bg-white/1 backdrop-blur-xs`}>
      <pre className="overflow-x-auto p-4 pr-16 text-code font-jetbrains font-bold leading-relaxed text-zinc-200">
        {children.split("\n").map((line, i) => (
          <div key={i}>
            <span className="select-none text-zinc-500">$ </span>
            {highlight(line)}
          </div>
        ))}
      </pre>
      <button
        type="button"
        onClick={copy}
        className="absolute right-3 top-3 text-xs text-zinc-500 transition hover:text-lime hover:cursor-pointer"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

// command = white, subcommand = pink, args = blue
function highlight(line) {
  const parts = [...line.matchAll(/(\s+)|("[^"]*"|'[^']*'|\S+)/g)];
  const command = parts.find((p) => p[2])?.[2];
  let index = 0;

  return parts.map((p, i) => {
    if (p[1]) return p[1];

    const position = index++;
    let color = "text-yellow";
    if (position === 0) color = "text-lime";
    else if (position ===1 ? !NO_SUBCOMMAND.has(command) : "") color = "text-pink";

    return (
      <span key={i} className={color}>
        {p[2]}
      </span>
    );
  });
}
