import { IconCarambola } from "@tabler/icons-react"
import { features } from "../../../info"
import { ParagraphLink } from "../../../shared/components/ParagraphLink"
import { Section } from "../../../shared/ui/Section"

export const FeaturesSection = () => (
  <Section id="features" title="Features" icon={IconCarambola}>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((f) => (
        <div key={f.title} className="border border-box-outline p-4">
          <h3 className="text-base font-light text-paragraph">{f.title}</h3>
          <p className="mt-1 text-sm text-subnote">{f.body}</p>
        </div>
      ))}
    </div>
    <p className="mt-5 text-sm text-subnote">
      For a detailed list of features, view the {""}
      <ParagraphLink text={"Features"} path={"/features"} /> page.
    </p>
  </Section>
)
