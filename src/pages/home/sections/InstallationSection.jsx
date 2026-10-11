import { IconDownload } from "@tabler/icons-react"
import { useState } from "react"
import { systems } from "../../../info"
import { ParagraphLink } from "../../../shared/components/ParagraphLink"
import { CodeBlock } from "../../../shared/ui/CodeBlock"
import { Section } from "../../../shared/ui/Section"
import { Installer, installationSteps } from "../components/Installer"

// Owns the selected system, so Installer and Requirements stay in sync.
export const Installation = () => {
  const [active, setActive] = useState(systems[0].id)
  const system = systems.find((s) => s.id === active)

  return (
    <Section
      id="install"
      title="Installation"
      reqs={system.requirements}
      icon={IconDownload}
      note={
        <>
          Get started with a public release. If you prefer to build from source,
          see the{" "}
          <ParagraphLink
            href={"#build-from-source"}
            text={"Build From Source"}
          />{" "}
          section below.
        </>
      }
    >
      <ol className="space-y-6">
        <li>
          <div className="mb-2 text-sm text-paragraph">
            <span className="text-pink">1.</span> Download and install the
            binary
          </div>
          <Installer active={active} onChange={setActive} />
        </li>
        {installationSteps.map((s, i) => (
          <li key={s.label}>
            <div className="mb-2 text-paragraph">
              <span className="text-pink text-base">{i + 2}.</span> {s.label}
            </div>
            <CodeBlock>{s.code}</CodeBlock>
          </li>
        ))}
      </ol>
    </Section>
  )
}
