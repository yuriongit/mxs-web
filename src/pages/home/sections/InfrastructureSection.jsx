import { IconStack2 } from "@tabler/icons-react"
import { infrastructure } from "../../info"

export const InfrastructureSection = () => (
  <Section id="infrastructure" title="Infrastructure" icon={IconStack2}>
    <dl className="divide-y divide-box-outline border border-box-outline text-sm">
      {infrastructure.map(([k, v]) => (
        <div key={k} className="flex justify-between gap-4 px-4 py-3">
          <dt className="text-subnote">{k}</dt>
          <dd className="text-right text-paragraph">{v}</dd>
        </div>
      ))}
    </dl>
  </Section>
)
