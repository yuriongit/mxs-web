export const Requirements = ({
  reqs,
  title = "Requirements",
  className = "",
}) => (
  <div
    className={`w-full shrink-0 border border-dashed border-box-outline bg-box/50 ${className}`}
  >
    <p className="border-b border-dashed border-box-outline px-4 py-2 text-xs font-normal text-pink">
      {title}
    </p>
    <dl className="divide-y divide-box-outline text-xs">
      {reqs.map((req) => (
        <div
          key={req.name}
          className="flex items-center justify-between gap-4 px-4 py-2.5"
        >
          <dt className="text-paragraph">{req.name}</dt>
          <dd className="font-bold text-blue">{req.version}</dd>
        </div>
      ))}
    </dl>
  </div>
)
