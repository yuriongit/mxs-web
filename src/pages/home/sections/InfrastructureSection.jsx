import { infrastructure } from "../../../info"
import { Section } from "../../../shared/Section"

// One plain sentence per row, keyed by the label in info.js.
const notes = {
  Main: "Go builds the binary, Cobra handles the commands, Bubble Tea draws the interface",
  Tooling:
    "Go for tests, builds, etc. GolangCI-Lint for Continuous Integration",
  UI: "Bubbles and Lipgloss supply the styles and components",
}

export const InfrastructureSection = () => (
  <Section id="infrastructure">
    <div className="w-full min-w-full grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div>
        <h2 className="text-5xl font-black leading-[0.95] tracking-tighter text-neutral-100 sm:text-7xl">
          Simple
          <br />
          Infrastructure
          {/* <span className="text-lime">.</span>*/}
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-paragraph">
          {/* MXS is written in Go and ships as a single file, about 5 MB. Download it, put it on your PATH, and run your
          scripts.*/}
        </p>
      </div>

      <ol className="divide-y divide-box-outline border-y border-box-outline">
        {infrastructure.map(([label, value], i) => (
          <li
            key={label}
            className="grid grid-cols-[2rem_1fr] gap-x-4 px-2 py-5 transition hover:bg-white/5"
          >
            <span className="pl-2.5 text-lg font-bold text-subnote">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-bold text-paragraph text-lg">{label}</h3>
              <p className="mt-0.5 font-jetbrains text-sm text-blue">{value}</p>
              {notes[label] && (
                <p className="mt-2 text-sm leading-relaxed text-paragraph">
                  {notes[label]}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  </Section>
)
