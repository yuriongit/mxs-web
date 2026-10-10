export const repo = "https://github.com/yuriongit/mxs"
export const repoNoHttps = "github.com/yuriongit/mxs"

export const features = [
  {
    title: "Arguments Support",
    body: "Built-in support for passing arguments to your scripts.",
  },
  {
    title: "Execution Simplicity",
    body: "Just run a script by using it's name: No file extension needed.",
  },
  {
    title: "Structured Output",
    body: "Colored and helpful output with automatic error/success reports.",
  },
  {
    title: "Concise Syntax",
    body: "Short and sweet syntax specifically made for workflows.",
  },
]

// Placeholder asset names. Match them to the files attached to each release.
export const release = `${repo}/releases/latest/download`

export const systems = [
  {
    id: "ubuntu",
    label: "Ubuntu",
    url: `${release}/mxs-linux-amd64`,
    commands: (url) => [
      `wget ${url} -O mxs`,
      "chmod +x mxs",
      "sudo mv mxs /usr/local/bin/",
    ],
  },
  {
    id: "fedora",
    label: "Fedora",
    url: `${release}/mxs-linux-amd64`,
    commands: (url) => [
      `curl -L ${url} -o mxs`,
      "chmod +x mxs",
      "sudo mv mxs /usr/local/bin/",
    ],
  },
  {
    id: "mac",
    label: "macOS",
    url: `${release}/mxs-darwin-arm64`,
    commands: (url) => [
      `curl -L ${url} -o mxs`,
      "chmod +x mxs",
      "sudo mv mxs /usr/local/bin/",
    ],
  },
]

export const quickStartRequirements = [
  { name: "Go", version: "1.27" },
  {
    name: "Bash",
    version: "5.3.9",
  },
  { name: "Architecture", version: "x86_64" },
]

export const installationRequirements = [
  {
    name: "Bash",
    version: "5.3.9",
  },
  { name: "Architecture", version: "x86_64" },
]
export const infrastructure = [
  ["Main", "Go, Cobra, BubbleTea"],
  ["Tooling", "GolangCI-Lint, Go"],
  ["UI", "Bubbles, Lipgloss"],
]

export const quickStartSteps = [
  {
    label: "Clone",
    code: `git clone ${repo}.git\ncd mxs`,
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
    label: "Initialize MXS",
    code: "mxs init",
  },
  {
    label: "Run the demo",
    code: `mxs demo "Your FirstName"`,
  },
]

export const docs = [
  ["Architecture", `${repo}/blob/main/docs/architecture.md`],
  ["Planned", `${repo}/blob/main/docs/planned.md`],
  ["Preview", `${repo}/blob/main/docs/preview.md`],
  ["~/.mxs layout", `${repo}/blob/main/docs/mxs.md`],
]
