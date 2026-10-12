export const repo = "https://github.com/yuriongit/mxs"

const RAW_GITHUB_USER_CONTENT_URL =
  "https://raw.githubusercontent.com/yuriongit/mxs/main"

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

export const systems = [
  {
    id: "ubuntu",
    label: "Ubuntu",
    commands: [
      `wget ${RAW_GITHUB_USER_CONTENT_URL}/install-linux.sh`,
      "sh install-linux.sh",
    ],
    requirements: [
      { name: "Architecture", version: "x86_64" },
      { name: "Shell", version: "Bash" },
    ],
  },
  {
    id: "fedora",
    label: "Fedora",
    commands: [
      `curl -fsSLO ${RAW_GITHUB_USER_CONTENT_URL}/install-linux.sh`,
      "sh install-linux.sh",
    ],
    requirements: [
      { name: "Architecture", version: "x86_64" },
      { name: "Shell", version: "Bash" },
    ],
  },
  {
    id: "mac",
    label: "macOS",
    commands: [
      `curl -fsSLO ${RAW_GITHUB_USER_CONTENT_URL}/install-mac.sh`,
      "sh install-mac.sh",
    ],
    requirements: [
      { type: "Architecture", name: "arm64 (Apple Silicon)" },
      { type: "Shell", name: "Bash" },
    ],
  },
]

export const buildFromSourceReqs = [
  { type: null, name: "Go", version: "1.27+" },
  {
    type: "Shell",
    name: "Bash",
    version: null,
  },
]

export const installationReqs = [
  {
    name: "Bash",
    version: "5.3.9+",
  },
  { name: "Architecture", version: "x86_64" },
]
export const infrastructure = [
  ["Main", "Go, Cobra, BubbleTea"],
  ["Tooling", "GolangCI-Lint, Go"],
  ["UI", "Bubbles, Lipgloss"],
]

export const buildFromSourceSteps = [
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
