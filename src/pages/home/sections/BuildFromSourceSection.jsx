import { IconHammer } from "@tabler/icons-react"
import { buildFromSourceReqs, buildFromSourceSteps } from "../../../info"
import { ParagraphLink } from "../../../shared/components/ParagraphLink"
import { CodeBlock } from "../../../shared/ui/CodeBlock"
import { Section } from "../../../shared/ui/Section"

export const BuildFromSourceSection = () => (
  <Section
    id="build-from-source"
    title="Build From Source"
    reqs={buildFromSourceReqs}
    icon={IconHammer}
    note={
      <>
        This section builds MXS from source. If you prefer to install a public
        release, see the{" "}
        <ParagraphLink href={"#installation"} text={"Installation"} /> section.
      </>
    }
  >
    <ol className="space-y-6">
      {buildFromSourceSteps.map((s, i) => (
        <li key={s.label}>
          <div className="mb-2 text-paragraph text-base">
            <span className="text-pink">{i + 1}.</span> {s.label}
          </div>
          <CodeBlock>{s.code}</CodeBlock>
        </li>
      ))}
    </ol>
  </Section>
)
