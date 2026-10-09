import {
  docs,
  features,
  infrastructure,
  repo,
  quickStartRequirements,
  installationRequirements,
  quickStartSteps,
} from "../../info";
import { CodeBlock } from "../../shared/ui/CodeBlock";
import { FileTree } from "../../shared/components/FileTree";
import { Section } from "../../shared/ui/Section";
import { installationSteps, Installer } from "./components/Installer";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="min-h-screen text-neutral-300">
    <main id="top" className="mx-auto">
      <div className="w-full justify-center items-start text-left flex flex-col">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs text-neutral-500 font-medium mr-2 opacity-50 tracking-tight">
            <span className="text-lime">Manage</span>
            {""} • {""}
            <span className="text-blue">Execute</span>
            {""} • {""}
            <span className="text-pink">Script</span>
          </p>
          <h1 className="text-5xl font-jetbrains tracking-wide text-neutral-100 sm:text-7xl font-black flex items-center">
            <span className="text-lime">M</span>
            <span className="text-blue">X</span>
            <span className="text-pink">S</span>
          </h1>
        </div>
        <p className="mt-6 max-w-xs text-lg text-white">
          A simple command-line interface to <span className="text-lime">manage </span> and{" "}
          <span className="text-blue">execute</span>
          {""} your Bash <span className="text-pink">scripts.</span>
        </p>

        <div className="mt-8 max-w-2xs w-full flex gap-2.5 group text-sm bg-lime p-1.5 rounded-md">
          <Link
            href="#start"
            className="rounded-md group w-full bg-lime px-5 text-center py-1.5 hover:font-black font-extrabold text-neutral-950 transition-all duration-250 hover:-rotate-z-2"
          >
            Get Started
          </Link>
          <Link
            href={repo}
            className="rounded-md w-full bg-pink px-5 text-center py-1.5 transition text-white font-medium hover:font-bold"
          >
            View Source
          </Link>
        </div>
      </div>

      <div className="my-20 bg-line-break w-full h-px" />

      <Section id="features" title="Features">
        <div className="grid gap-4 sm:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-md border border-line-break p-4">
              <h3 className="text-base font-bold text-neutral-100">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-500">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="start"
        title="Quick Start"
        note={
          <>
            This section builds MXS from source and is aimed at developers. For actual usage, see{" "}
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
          {quickStartRequirements.map((req) => (
            <li
              key={req.name}
              className="inline-flex items-center overflow-hidden rounded-md border border-line-break bg-box/50 text-code font-bold"
            >
              <span className="px-3 py-1.5 text-neutral-400">{req.name}</span>
              <span className="border-l border-line-break bg-blue/10 px-3 py-1.5 text-blue">{req.version}</span>
            </li>
          ))}
        </ul>
        <ol className="space-y-6">
          {quickStartSteps.map((s, i) => (
            <li key={s.label}>
              <div className="mb-2 text-neutral-400">
                <span className="text-pink text-base">{i + 1}.</span> {s.label}
              </div>
              <CodeBlock>{s.code}</CodeBlock>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="install"
        title="Installation"
        note={`Prebuilt binary. Go is NOT required
        (This page is still under development; Releases aren't yet available).
          `}
      >
        <ul className="mb-8 flex flex-wrap gap-3">
          {installationRequirements.map((req) => (
            <li
              key={req.name}
              className="inline-flex items-center overflow-hidden rounded-md border border-line-break bg-box/50 text-xs font-bold"
            >
              <span className="px-3 py-1.5 text-neutral-400">{req.name}</span>
              <span className="border-l border-line-break bg-blue/10 px-3 py-1.5 text-blue">{req.version}</span>
            </li>
          ))}
        </ul>
        <ol className="space-y-6">
          <li>
            <div className="mb-2 text-base text-neutral-400">
              <span className="text-pink">1.</span> Download and install the binary
            </div>
            <Installer />
          </li>
          {installationSteps.map((s, i) => (
            <li key={s.label}>
              <div className="mb-2 text-neutral-400">
                <span className="text-pink text-base">{i + 2}.</span> {s.label}
              </div>
              <CodeBlock>{s.code}</CodeBlock>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="config" title="Configuration">
        <div className="flex justify-between w-full gap-8.5">
            <p className="text-base leading-relaxed text-neutral-400 max-w-sm">
            <code className="text-pink font-jetbrains text-sm">~/.mxs </code> is the home for your scripts. View the
            directory layout document for more detailed information:{" "}
            <a
              href={`${repo}/blob/main/docs/mxs.md`}
              className="underline decoration-neutral-700 underline-offset-4 hover:text-neutral-100 transition"
            >
              docs/config.md
            </a>{" "}
            (document coming soon).
          </p>
          <FileTree />
        </div>
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
              <a href={href} className="text-neutral-400 hover:text-pink transition flex gap-x-2.5">
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
