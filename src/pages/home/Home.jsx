import { repo, features, requirements, steps, infrastructure, docs } from "../../info";
import { CodeBlock } from "../../shared/ui/CodeBlock";
import { Section } from "../../shared/ui/Section";
import { Installer } from "./components/Installer";

export const Home = () => (
  <div className="min-h-screen text-neutral-300">
    <main id="top" className="mx-auto">
      <div className="">
        <div>
          <p className="text-xs text-neutral-500 italic font-medium tracking-tight opacity-50">
            <span className="text-lime">Execute</span>
            <span className="text-pink">Script</span>
          </p>
          <h1 className="text-5xl font-jetbrains text-neutral-100 sm:text-6xl font-black flex items-center">
            <span className="text-lime">X</span>
            <span className="text-pink">S</span>
          </h1>
        </div>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white">
          A CLI tool for <span className="text-lime">executing </span>and <span className="text-yellow">managing</span>
          {""} your Bash <span className="text-pink">scripts.</span>
        </p>

        <div className="mt-8 flex gap-3 group text-sm">
          <a
            href="#start"
            className="rounded-md bg-lime px-5 text-center py-1.5 font-black text-neutral-950 transition hover:text-pink"
          >
            Get Started
          </a>
          <a
            href={repo}
            className="rounded-md border border-dashed border-pink px-5 text-center py-1.5 transition hover:bg-pink/10 hover:border-pink/85 text-white"
          >
            View Source
          </a>
        </div>
      </div>

      <div className="my-20 bg-line-break w-full h-px"></div>

      <Section id="features" title="Features">
        <div className="grid gap-4 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-md border border-line-break p-4">
              <h3 className="text-sm font-bold text-neutral-100">{f.title}</h3>
              <p className="mt-1 text-base text-neutral-500">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="start"
        title="Quick Start"
        note={
          <>
            This section builds XS from source and is aimed at developers. For actual usage, see{" "}
            <a
              href="#install"
              className="underline decoration-neutral-700 underline-offset-4 hover:text-neutral-300 transition"
            >
              Installation
            </a>{" "}
            below.
          </>
        }
      >
        <ul className="mb-8 flex flex-wrap gap-3">
          {requirements.map((req) => (
            <li
              key={req.name}
              className="inline-flex items-center overflow-hidden rounded-md border border-line-break bg-box text-xs font-bold"
            >
              <span className="px-3 py-1.5 text-neutral-400">{req.name}</span>
              <span className="border-l border-line-break bg-pink/10 px-3 py-1.5 text-pink">{req.version}</span>
            </li>
          ))}
        </ul>
        <ol className="space-y-6">
          {steps.map((s, i) => (
            <li key={s.label}>
              <div className="mb-2 text-sm text-neutral-400">
                <span className="text-pink">{i + 1}.</span> {s.label}
              </div>
              <CodeBlock>{s.code}</CodeBlock>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="install" title="Installation" note="Prebuilt binary. Go is not required.">
        <ol className="space-y-6">
          <li>
            <div className="mb-2 text-sm text-neutral-400">
              <span className="text-pink">1.</span> Download and install the binary
            </div>
            <Installer />
            <p className="mt-2 text-xs text-neutral-600">
              Other platforms and versions are on the{" "}
              <a
                href={`${repo}/releases`}
                className="underline decoration-neutral-700 underline-offset-4 hover:text-neutral-300"
              >
                Releases
              </a>{" "}
              page.
            </p>
          </li>
          <li>
            <div className="mb-2 text-sm text-neutral-400">
              <span className="text-pink">2.</span> Init and run the demo
            </div>
            <CodeBlock>{'xs init\nxs demo "Your FirstName"'}</CodeBlock>
          </li>
        </ol>
      </Section>

      <Section id="config" title="Configuration">
        <p className="text-sm leading-relaxed text-neutral-400">
          <code className="text-pink font-jetbrains text-xs">~/.xs </code> is the home for your scripts. See the
          directory layout doc for more info:{" "}
          <a
            href={`${repo}/blob/main/docs/xs.md`}
            className="underline decoration-neutral-700 underline-offset-4 hover:text-neutral-100 transition"
          >
            docs/config.md
          </a>{" "}
          (doc coming soon).
        </p>
      </Section>

      <Section id="infrastructure" title="Infrastructure">
        <dl className="divide-y divide-neutral-900 rounded-md border border-neutral-800 text-sm">
          {infrastructure.map(([k, v]) => (
            <div key={k} className="flex justify-between px-4 py-3">
              <dt className="text-neutral-500">{k}</dt>
              <dd className="text-neutral-200">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="docs" title="Docs">
        <ul className="space-y-2 text-sm">
          {docs.map(([name, href]) => (
            <li key={name}>
              <a href={href} className="text-neutral-400 hover:text-pink transition">
                <span className="text-neutral-700">→ </span>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  </div>
);
