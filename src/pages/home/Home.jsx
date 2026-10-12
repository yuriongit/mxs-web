import { BuildFromSourceSection } from "./sections/BuildFromSourceSection"
import { DisclaimerSection } from "./sections/DisclaimerSection"
import { DocumentsSection } from "./sections/DocumentsSection"
import { FeaturesSection } from "./sections/FeaturesSection"
import { Installation } from "./sections/InstallationSection"
import { LandingSection } from "./sections/LandingSection"
import { YourScriptsHomeSection } from "./sections/YourScriptsHomeSection"

export const Home = () => (
  <div className="min-h-screen text-neutral-300">
    <main id="top" className="mx-auto">
      <LandingSection />
      <DisclaimerSection />
      <FeaturesSection />
      <Installation />
      <BuildFromSourceSection />
      <YourScriptsHomeSection />
      <DocumentsSection />
    </main>
  </div>
)
