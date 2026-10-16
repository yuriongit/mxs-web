export const Requirements = ({
  reqs,
  systemId,
  title = "Requirements",
  className = "",
}) => (
  <div
    className={`sm:max-w-xs w-full shrink-0 border border-box-outline bg-box/50 ${className}`}
  >
    <p className="border-b border-box-outline px-4 py-2 text-xs font-normal text-pink">
      {title} {systemId && `for ${systemId}`}
    </p>
    <dl className="divide-y divide-box-outline text-xs">
      {reqs.map((req) => {
        let header
        let value

        if (
          // Table header = Requirement type
          // Table value = Requirement name
          // e.g. (Shell, Bash)
          req.version == null
          && req.type != null
          && req.name != null
        ) {
          header = req.type
          value = req.name
        } else {
          // Table header = Requirement name
          // Table value = Requirement version
          // e.g. (Go, 1.27.1+)
          header = req.name
          value = req.version
        }

        return (
          <div
            key={req.name}
            className="flex items-center justify-between gap-4 px-4 py-2.5"
          >
            <dt className="text-paragraph">{header}</dt>
            <dd className="font-normal text-blue">{value}</dd>
          </div>
        )
      })}
    </dl>
  </div>
)
