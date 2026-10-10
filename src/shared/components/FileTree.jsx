// Placeholder layout. Edit to match what ~/.mxs really contains.
const tree = [
  // "border-b border-neutral-800 px-4 py-2 font-bold text-pink"
  { name: "~/.mxs", type: "base", depth: 0, note: "Home" },
  { name: "scripts", type: "dir", depth: 1, note: "Your scripts" },
  { name: "demo.sh", type: "file", depth: 2 },
  { name: "clone.sh", type: "file", depth: 2 },
  { name: "+doc.sh", type: "file", depth: 2 },
  { name: "gopile.sh", type: "file", depth: 2 },
  { name: "...", type: "file", depth: 2 },
]

export const FileTree = () => {
  return (
    <div className="p-1.5 w-full sm:max-w-lg overflow-hidden font-syntax text-xs backdrop-blur-xs border border-dashed border-box-outline bg-box/50">
      <ul className="py-2">
        {tree.map((n) => {
          let color = ""

          if (n.type === "dir") {
            color = "font-bold text-blue"
          } else if (n.type === "base") {
            color = "text-pink"
          } else {
            color = "text-lime"
          }

          return (
            <li
              key={`${n.depth}-${n.name}`}
              className="flex items-center justify-between gap-4 px-4 py-1"
            >
              <span style={{ paddingLeft: n.depth * 18 }} className={color}>
                {n.name}
                {n.type === "dir" && "/"}
              </span>
              <span className="text-neutral-600 italic">{n.note}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
