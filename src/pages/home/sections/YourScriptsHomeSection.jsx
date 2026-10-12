import { IconFolderOpen } from "@tabler/icons-react"
import { repo } from "../../../info"
import { FileTree } from "../../../shared/components/FileTree"
import { ParagraphLink } from "../../../shared/components/ParagraphLink"
import { Section } from "../../../shared/ui/Section"

export const YourScriptsHomeSection = () => (
  <Section id="scripts-home" title="Your Script's Home" icon={IconFolderOpen}>
    <div className="flex w-full flex-col gap-8.5 md:flex-row md:items-start md:justify-between">
      <p className="text-base leading-relaxed text-paragraph max-w-sm">
        <code className="text-pink font-syntax text-code">~/.mxs </code> is the
        home for your scripts. View the full layout document for more detailed
        information: <ParagraphLink href={`${repo}/blob/main/docs/mxs.md`} />{" "}
        docs/config.md{" "}
        <span className="text-subnote">(document coming soon).</span>
      </p>
      <FileTree />
    </div>
  </Section>
)
