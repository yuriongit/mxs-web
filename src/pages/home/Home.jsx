import {
  IconCarambola,
  IconFolderOpen,
  IconHammer,
  IconMarkdown,
  IconStack2,
} from "@tabler/icons-react"
import {
  buildFromSourceReqs,
  buildFromSourceSteps,
  docs,
  features,
  infrastructure,
  repo,
} from "../../info"
import { FileTree } from "../../shared/components/FileTree"
import { ParagraphLink } from "../../shared/components/ParagraphLink"
import { CodeBlock } from "../../shared/ui/CodeBlock"
import { Section } from "../../shared/ui/Section"
import { Installation } from "./sections/InstallationSection"
import { LandingSection } from "./sections/LandingSection"
import { DisclaimerSection } from "./sections/DisclaimerSection"

export const Home = () => (
  <div className="min-h-screen text-neutral-300">
    <main id="top" className="mx-auto">
      <LandingSection/>
      <DisclaimerSection/>
      <Section id="features" title="Features" icon={IconCarambola}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="border border-box-outline p-4">
              <h3 className="text-base font-light text-paragraph">{f.title}</h3>
              <p className="mt-1 text-sm text-subnote">{f.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-subnote">
          For a detailed list of features, view the {""}
          <ParagraphLink text={"Features"} path={"/features"} /> page.
        </p>
      </Section>

      <Installation />

      <Section
        id="build-from-source"
        title="Build From Source"
        reqs={buildFromSourceReqs}
        icon={IconHammer}
        note={
          <>
            This section builds MXS from source. If you prefer to install a
            public release, see the{" "}
            <ParagraphLink href={"#installation"} text={"Installation"} />{" "}
            section.
          </>
        }
      >
        <ol className="space-y-6">
          {buildFromSourceSteps.map((s, i) => (
            <li key={s.label}>
              <div className="mb-2 text-paragraph">
                <span className="text-pink text-base">{i + 1}.</span> {s.label}
              </div>
              <CodeBlock>{s.code}</CodeBlock>
            </li>
          ))}
        </ol>
      </Section>

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
