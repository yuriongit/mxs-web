import { Installation } from "./sections/InstallationSection"
import { LandingSection } from "./sections/LandingSection"
import { DisclaimerSection } from "./sections/DisclaimerSection"
import { FeaturesSection } from "./sections/FeaturesSection"
import { BuildFromSourceSection } from "./sections/BuildFromSourceSection"
import { YourScriptsHomeSection } from "./sections/YourScriptsHomeSection"
import { DocumentsSection } from "./sections/DocumentsSection"

export const Home = () => (
  <div className="min-h-screen text-neutral-300">
    <main id="top" className="mx-auto">
      <LandingSection/>
      <DisclaimerSection/>
      <FeaturesSection/>
      <Installation />
      <BuildFromSourceSection/>
      <YourScriptsHomeSection/>
      <DocumentsSection/>
    </main>
  </div>
)
