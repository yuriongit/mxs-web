import {
  IconFolderOpen,
  IconMarkdown,
  IconStack2,
} from "@tabler/icons-react"
import {
  docs,
  infrastructure,
  repo,
} from "../../info"
import { FileTree } from "../../shared/components/FileTree"
import { ParagraphLink } from "../../shared/components/ParagraphLink"
import { Section } from "../../shared/ui/Section"
import { Installation } from "./sections/InstallationSection"
import { LandingSection } from "./sections/LandingSection"
import { DisclaimerSection } from "./sections/DisclaimerSection"
import { FeaturesSection } from "./sections/FeaturesSection"
import { BuildFromSourceSection } from "./sections/BuildFromSourceSection"

export const Home = () => (
  <div className="min-h-screen text-neutral-300">
    <main id="top" className="mx-auto">
      <LandingSection/>
      <DisclaimerSection/>
      <FeaturesSection/>
      <Installation />
      <BuildFromSourceSection/>

      <Section
        id="scripts-home"
        title="Your Script's Home"
        icon={IconFolderOpen}
      >
        <div className="flex w-full flex-col gap-8.5 md:flex-row md:items-start md:justify-between">
          <p className="text-base leading-relaxed text-paragraph max-w-sm">
            <code className="text-pink font-syntax text-code">~/.mxs </code> is
            the home for your scripts. View the full layout document for more
            detailed information:{" "}
            <ParagraphLink href={`${repo}/blob/main/docs/mxs.md`} />{" "}
            docs/config.md{" "}
            <span className="text-subnote">(document coming soon).</span>
          </p>
          <FileTree />
        </div>
      </Section>

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

      <Section
        id="documents"
        title="Documents"
        lineBreak={true}
        icon={IconMarkdown}
      >
        <ul className="space-y-2 text-sm">
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
    </main>
  </div>
)
