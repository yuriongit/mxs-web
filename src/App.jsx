import { useState } from "react";

const REPO = "https://github.com/yuriongit/xs";

const features = [
  {
    title: "Global Configuration Directory",
    body: "Scripts live in ~/.xs. XS offers automatic setup with the `init` command",
  },
  {
    title: "Script Execution",
    body: "Run a script by name. Success and errors are reported back.",
  },
  {
    title: "Structured Output",
    body: "Colored, consistent output built with Charm's Bubbles and Lipgloss.",
  },
];

const requirements = [
  { name: "Go", version: "1.27" },
  {
    name: "Bash",
    version: "5.3.9",
  },
  { name: "Architecture", version: "x86_64" },
];

const infrastructure = [
  ["Main", "Go, Cobra, BubbleTea"],
  ["Tooling", "GolangCI-Lint, Go"],
  ["UI", "Bubbles, Lipgloss"],
];

const steps = [
  {
    label: "Clone",
    code: `git clone ${REPO}.git\ncd xs`,
  },
  {
    label: "Build",
    code: "go build",
  },
  {
    label: "Install",
    code: "go install",
  },
  {
    label: "Init and run the demo",
    code: "xs init",
  },
  {
    label: "Run the demo",
    code: `xs demo "Your FirstName"`,
  },
];

const docs = [
  ["Architecture", `${REPO}/blob/main/docs/architecture.md`],
  ["Planned", `${REPO}/blob/main/docs/planned.md`],
  ["Preview", `${REPO}/blob/main/docs/preview.md`],
  ["~/.xs layout", `${REPO}/blob/main/docs/xs.md`],
];

// Commands that take plain arguments instead of a subcommand.
const NO_SUBCOMMAND = new Set(["cd"]);

// command = white, subcommand = pink, args = blue
function highlight(line) {
  const parts = [...line.matchAll(/(\s+)|("[^"]*"|'[^']*'|\S+)/g)];
  const command = parts.find((p) => p[2])?.[2];
  let index = 0;

  return parts.map((p, i) => {
    if (p[1]) return p[1];

    const position = index++;
    let color = "text-yellow";
    if (position === 0) color = "text-lime";
    else if (position === 1 && !NO_SUBCOMMAND.has(command)) color = "text-pink";

    return (
      <span key={i} className={color}>
        {p[2]}
      </span>
    );
  });
}

function Code({ children }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="group relative rounded-md border border-zinc-800 bg-white/1 backdrop-blur-xs">
      <pre className="overflow-x-auto p-4 pr-16 text-sm font-jetbrains font-bold leading-relaxed text-zinc-200">
        {children.split("\n").map((line, i) => (
          <div key={i}>
            <span className="select-none text-zinc-400">$ </span>
            {highlight(line)}
          </div>
        ))}
      </pre>
      <button
        type="button"
        onClick={copy}
        className="absolute right-3 top-3 text-xs text-zinc-500 transition hover:text-lime hover:cursor-pointer"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function Section({ id, title, note, children }) {
  return (
    <section id={id} className="mt-20">
      <h2 className={`${note ? "mb-2" : "mb-6"} text-sm uppercase font-bold text-lime`}>{title}</h2>
      {note && <p className="mb-6 text-sm italic text-zinc-500">{note}</p>}
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-linear-80 from-zinc-950/98 from-50% to-black/99 text-zinc-300 antialiased selection:bg-pink selection:text-zinc-950">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-sm">
        <a href="#top" className="font-extrabold text-zinc-100">
          <span className="text-lime">X</span>
          <span className="text-pink">S</span>
        </a>
        <nav className="flex gap-6 text-zinc-500">
          <a href="#start" className="transition hover:text-zinc-100">
            Start
          </a>
          <a href="#docs" className="transition hover:text-zinc-100">
            Docs
          </a>
          <a href={REPO} className="transition hover:text-zinc-100">
            GitHub
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-6 pb-24">
        <div className="pt-16">
          <h1 className="text-5xl font-jetbrains text-zinc-100 sm:text-6xl font-extrabold flex items-center">
            <span className="text-lime">X</span>
            <span className="text-pink">S</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white">
            A command-line tool for running and managing your Bash scripts.
          </p>
          <p className="mt-2 text-sm text-zinc-600 italic">Pronounced as "ex • es". Written in Go.</p>

          <div className="mt-8 flex gap-3 group text-sm">
            <a
              href="#start"
              className="rounded-md bg-lime px-5 text-center py-1.5 font-black text-zinc-950 transition hover:text-pink"
            >
              Get Started
            </a>
            <a
              href={REPO}
              className="rounded-md border border-dashed border-pink px-5 text-center py-1.5 transition hover:bg-pink/10 hover:border-pink/85 hover:text-zinc-100"
            >
              View Source
            </a>
          </div>
        </div>

        <div className="mt-12">
          <Code>{'xs init\nxs demo "Your FirstName"'}</Code>
        </div>

        <Section id="features" title="Features">
          <div className="grid gap-4 sm:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-md border border-neutral-800 p-4">
                <h3 className="text-sm font-bold text-zinc-100">{f.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{f.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-600 italic">
            Planned: AI-assisted managerial operations for your scripts.
          </p>
        </Section>

        <Section
          id="start"
          title="Quick Start"
          note={
            <>
              This section builds XS from source and is aimed at developers. For actual usage, see{" "}
              <a href="#install" className="underline decoration-zinc-700 underline-offset-4 hover:text-zinc-300">
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
                className="inline-flex items-center overflow-hidden rounded-md border border-zinc-800 bg-white/5 text-xs font-bold"
              >
                <span className="px-3 py-1.5 text-zinc-400">{req.name}</span>
                <span className="border-l border-zinc-800 bg-lime/10 px-3 py-1.5 text-lime">{req.version}+</span>
              </li>
            ))}
          </ul>
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.label}>
                <div className="mb-2 text-sm text-zinc-400">
                  <span className="text-pink">{i + 1}.</span> {s.label}
                </div>
                <Code>{s.code}</Code>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="install" title="Installation" note={"Prebuilt binary. Go is NOT required."}>
          <ol className="space-y-6">
            <li>
              <div className="mb-2 text-sm text-zinc-400">
                <span className="text-pink">1.</span> Download the binary for your platform from{" "}
                <a
                  href={`${REPO}/releases`}
                  className="underline decoration-zinc-700 underline-offset-4 hover:text-zinc-100"
                >
                  Releases
                </a>
              </div>
            </li>
            <li>
              <div className="mb-2 text-sm text-zinc-400">
                <span className="text-pink">2.</span> Make it executable and put it on your PATH
              </div>
              <Code>{"chmod +x xs\nsudo mv xs /usr/local/bin/"}</Code>
            </li>
            <li>
              <div className="mb-2 text-sm text-zinc-400">
                <span className="text-pink">3.</span> Init and run the demo
              </div>
              <Code>{'xs init\nxs demo "Your FirstName"'}</Code>
            </li>
          </ol>
        </Section>

        <Section id="config" title="Configuration">
          <p className="text-sm leading-relaxed text-zinc-400">
            <code className="text-pink font-jetbrains text-xs">~/.xs </code> is the home for your scripts. See the
            directory layout doc for more info:{" "}
            <a
              href={`${REPO}/blob/main/docs/xs.md`}
              className="underline decoration-zinc-700 underline-offset-4 hover:text-zinc-100 transition"
            >
              docs/config.md
            </a>{" "}
            (doc coming soon).
          </p>
        </Section>

        <Section id="infrastructure" title="Infrastructure">
          <dl className="divide-y divide-zinc-900 rounded-md border border-zinc-800 text-sm">
            {infrastructure.map(([k, v]) => (
              <div key={k} className="flex justify-between px-4 py-3">
                <dt className="text-zinc-500">{k}</dt>
                <dd className="text-zinc-200">{v}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="docs" title="Docs">
          <ul className="space-y-2 text-sm">
            {docs.map(([name, href]) => (
              <li key={name}>
                <a href={href} className="text-zinc-400 hover:text-pink transition">
                  <span className="text-zinc-700">→ </span>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="border-t border-zinc-900">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-xs text-zinc-600">
          <span>MIT License</span>
          <a href={REPO} className="hover:text-zinc-300 transition">
            github.com/yuriongit/xs
          </a>
        </div>
      </footer>
    </div>
  );
}
