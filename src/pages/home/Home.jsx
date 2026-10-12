import {
  IconMarkdown,
} from "@tabler/icons-react"
import {
  docs,
} from "../../info"
import { Section } from "../../shared/ui/Section"
import { Installation } from "./sections/InstallationSection"
import { LandingSection } from "./sections/LandingSection"
import { DisclaimerSection } from "./sections/DisclaimerSection"
import { FeaturesSection } from "./sections/FeaturesSection"
import { BuildFromSourceSection } from "./sections/BuildFromSourceSection"
import { YourScriptsHomeSection } from "./sections/YourScriptsHomeSection"

export const Home = () => (
  <div className="min-h-screen text-neutral-300">
    <main id="top" className="mx-auto">
      <LandingSection/>
      <DisclaimerSection/>
      <FeaturesSection/>
      <Installation />
      <BuildFromSourceSection/>
      <YourScriptsHomeSection/>

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
