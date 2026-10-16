import { AboutSection } from "./sections/AboutSection"
import { DocumentsSection } from "./sections/DocumentsSection"
import { FeatureShowcaseSection } from "./sections/FeaturesShowcaseSection"
import { InfrastructureSection } from "./sections/InfrastructureSection"
import { LandingSection } from "./sections/LandingSection"
import { HomeForYourScriptsSections } from "./sections/ScriptsHomeSection"

export const Home = () => (
  <div className="min-h-screen text-neutral-300">
    <main id="top" className="mx-auto">
      <LandingSection />
      <FeatureShowcaseSection />
      <HomeForYourScriptsSections />
      <AboutSection />
      <InfrastructureSection />
      <DocumentsSection />
    </main>
  </div>
)
