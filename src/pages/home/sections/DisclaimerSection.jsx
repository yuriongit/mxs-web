import { IconAlertTriangle } from "@tabler/icons-react"
import { ParagraphLink } from "../../../shared/components/ParagraphLink"
import { Section } from "../../../shared/ui/Section"

export const DisclaimerSection = () => (
  <Section id="status" title="Disclaimer" icon={IconAlertTriangle}>
    <div className="flex w-full flex-col gap-2.5 md:items-start md:justify-between">
      <p className="text-base leading-relaxed text-paragraph">
        1. This page is still under active development.
      </p>
      <p className="text-base leading-relaxed text-paragraph">
        2. MXS has now been released under v0.1.0-beta.
      </p>
      <p className="text-base leading-relaxed text-paragraph">
        To get started, see either the{" "}
        <ParagraphLink href="#installation" text={"Installation"} /> or the{" "}
        <ParagraphLink href={"#build-from-source"} text={"Build From Source"} />{" "}
        section.
      </p>
    </div>
  </Section>
)
