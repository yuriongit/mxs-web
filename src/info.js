export const repo = "https://github.com/yuriongit/xs";
export const repoNoHttps = "github.com/yuriongit/xs";

export const features = [
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

// Placeholder asset names. Match them to the files attached to each release.
export const release = `${repo}/releases/latest/download`;

export const systems = [
  {
    id: "ubuntu",
    label: "Ubuntu",
    url: `${release}/xs-linux-amd64`,
    commands: (url) => [`wget ${url} -O xs`, "chmod +x xs", "sudo mv xs /usr/local/bin/"],
  },
  {
    id: "fedora",
    label: "Fedora",
    url: `${release}/xs-linux-amd64`,
    commands: (url) => [`curl -L ${url} -o xs`, "chmod +x xs", "sudo mv xs /usr/local/bin/"],
  },
  {
    id: "mac",
    label: "macOS",
    url: `${release}/xs-darwin-arm64`,
    commands: (url) => [`curl -L ${url} -o xs`, "chmod +x xs", "sudo mv xs /usr/local/bin/"],
  },
];

export const requirements = [
  { name: "Go", version: "1.27" },
  {
    name: "Bash",
    version: "5.3.9",
  },
  { name: "Architecture", version: "x86_64" },
];

export const infrastructure = [
  ["Main", "Go, Cobra, BubbleTea"],
  ["Tooling", "GolangCI-Lint, Go"],
  ["UI", "Bubbles, Lipgloss"],
];

export const steps = [
  {
    label: "Clone",
    code: `git clone ${repo}.git\ncd xs`,
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

export const docs = [
  ["Architecture", `${repo}/blob/main/docs/architecture.md`],
  ["Planned", `${repo}/blob/main/docs/planned.md`],
  ["Preview", `${repo}/blob/main/docs/preview.md`],
  ["~/.xs layout", `${repo}/blob/main/docs/xs.md`],
];
