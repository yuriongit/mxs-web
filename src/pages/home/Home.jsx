import { IconAlertTriangle, IconCarambola } from "@tabler/icons-react"
import {
  buildFromSourceReqs,
  buildFromSourceSteps,
  docs,
  features,
  infrastructure,
  installationReqs,
  repo,
} from "../../info"
import { FileTree } from "../../shared/components/FileTree"
import { ParagraphLink } from "../../shared/components/ParagraphLink"
import { CodeBlock } from "../../shared/ui/CodeBlock"
import { Section } from "../../shared/ui/Section"
import { Installer, installationSteps } from "./components/Installer"

export const Home = () => (
  <div className="min-h-screen text-neutral-300">
    <main id="top" className="mx-auto">
      <div className="min-h-screen flex flex-col justify-center gap-10">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-fit justify-center items-start text-left flex flex-col">
            <div className="flex flex-col items-center text-center">
              <p className="text-[10px] sm:text-[12px] text-neutral-500 font-medium mr-2 opacity-50 tracking-tight">
                <span className="text-lime">Manage</span>
                {""} • {""}
                <span className="text-blue">Execute</span>
                {""} • {""}
                <span className="text-pink">Script</span>
              </p>
              <h1 className="text-6xl font-syntax tracking-wide text-neutral-100 sm:text-7xl font-black flex items-center">
                <span className="text-lime">M</span>
                <span className="text-blue">X</span>
                <span className="text-pink">S</span>
              </h1>
            </div>
            <p className="mt-3 max-w-xs text-lg text-white">
              A simple & <span className="italic">colored</span> CLI to{" "}
              <span className="text-lime">manage </span> and{" "}
              <span className="text-blue">execute</span>
              {""} your Bash <span className="text-pink">scripts.</span>
            </p>

            <div className="mt-8 max-w-2xs w-full flex gap-2.5 text-sm">
              <a
                href="#start"
                className="group w-full uppercase bg-lime px-5 text-center py-1.5 hover:font-black font-extrabold text-neutral-950 transition-all duration-175 hover:bg-blue"
              >
                Execute!
              </a>
              <a
                href={repo}
                className="group w-full border border-dashed border-pink px-5 text-center py-1.5 hover:font-bold font-medium text-pink transition-all duration-175 hover:bg-pink/8"
              >
                Source
              </a>
            </div>
          </div>

          {/* Demo GIF. Swap the placeholder for: <img src={demoGif} alt="MXS demo" className="h-full w-full object-cover" /> */}
          <div className="aspect-video w-full sm:max-w-lg overflow-hidden border border-dashed border-box-outline bg-box/50">
            <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-wide text-neutral-600">
              Demo GIF
            </div>
          </div>
        </div>
      </div>

      <Section id="status" title="Disclaimer" icon={IconAlertTriangle}>
        <div className="flex w-full flex-col gap-8.5 md:flex-row md:items-start md:justify-between">
          <p className="text-base leading-relaxed text-paragraph">
            This page is still being built. Releases aren't available yet, so
            the Installation section won't work for now, and some docs are
            marked as coming soon. To try out MXS, build it from source: See{" "}
            <ParagraphLink href="#start" text={"Quick Start"} />.
          </p>
        </div>
      </Section>

      <Section id="features" title="Features" icon={IconCarambola}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="border border-box-outline p-4">
              <h3 className="text-base font-bold text-paragraph">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{f.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-subnote">
          For a detailed list of features, view the {""}
          <ParagraphLink text={"Features"} path={"/features"} /> page.
        </p>
      </Section>

      <Section
        id="install"
        title="Installation"
        reqs={installationReqs}
        note={
          <>
            Get started with a public release. If you prefer to build from
            source, see the{" "}
            <ParagraphLink href={"#quick-start"} text={"Quick Start"} /> section
            below.
          </>
        }
      >
        <ol className="space-y-6">
          <li>
            <div className="mb-2 text-sm text-paragraph">
              <span className="text-pink">1.</span> Download and install the
              binary
            </div>
            <Installer />
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

      <Section
        id="build-from-source"
        title="Build From Source"
        reqs={buildFromSourceReqs}
        note={
          <>
            This section builds MXS from source. If you prefer to install a
            public release, see the{" "}
            <ParagraphLink href={"#install"} text={"Installation"} /> section.
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

      <Section id="config" title="Configuration">
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

      <Section id="infrastructure" title="Infrastructure">
        <dl className="divide-y divide-box-outline border border-box-outline text-sm">
          {infrastructure.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 px-4 py-3">
              <dt className="text-subnote">{k}</dt>
              <dd className="text-right text-paragraph">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="documents" title="Documents" lineBreak={true}>
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
