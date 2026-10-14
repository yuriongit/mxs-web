import { IconMarkdown } from "@tabler/icons-react"
import { docs } from "../../../info"
import { Section } from "../../../shared/ui/Section"

export const DocumentsSection = () => (
  <Section
    id="documents"
    title="Documents"
    lineBreak={true}
    icon={IconMarkdown}
  >
    <ul className="space-y-2 text-base">
      {docs.map(([name, href]) => (
        <li key={name}>
          <a
            href={href}
            className="text-paragraph hover:text-pink transition flex gap-x-2.5 w-fit p-px"
          >
            <span className="text-neutral-700">→ </span>
            {name}
          </a>
        </li>
      ))}
    </ul>
  </Section>
)
