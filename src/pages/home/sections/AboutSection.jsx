import { IconDownloadFilled } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { Block } from "../../../shared/Block"
import { Headline } from "../../../shared/Headline"
import { Lead } from "../../../shared/Lead"

// 3. About MXS
const stats = [
  ["Files to install", "1", "One binary from GitHub Releases"],
  ["Binary size", "~5 MB", "5.04 MB on macOS, 5.32 MB on Linux"],
  ["File Extensions Typed", "0", "Voila."],
  ["License", "MIT", "Free to use, read and change"],
]

export const AboutSection = () => (
  <Block id="about" bottomBorder={true}>
    <div>
      <Headline>
        Simple on <br /> Purpose
      </Headline>
      <Lead>
        MXS was simply made with the focus of <br className="md:hidden" />{" "}
        making managing and executing scripts easy.
      </Lead>
      <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
        <Link
          to="/install"
          className="bg-lime flex gap-1.5 justify-center items-center px-5 py-2 font-extrabold text-neutral-950 text-lg transition hover:bg-blue"
        >
          Get the release{" "}
          <span>
            <IconDownloadFilled />
          </span>
        </Link>
      </div>
    </div>

    <div className="space-y-10">
      <dl className="grid grid-cols-2 gap-px border border-box-outline bg-box-outline max-w-lg">
        {stats.map(([label, value, note]) => (
          <div key={label} className="bg-box p-5">
            <dt className="text-xs uppercase font-bold text-pink">{label}</dt>
            <dd className="mt-3 text-5xl font-black text-neutral-100">
              {value}
            </dd>
            <p className="mt-3 text-xs font-medium text-subnote">{note}</p>
          </div>
        ))}
      </dl>

      {/* <Bullets
        items={[
          ["Arguments", "pass straight through to your script"],
          ["Output", "is colored, with automatic success and error reports"],
          ["Built with", "Go, Cobra and BubbleTea"],
          ["Platforms", "macOS (arm64) and Linux (x86_64) in this release"],
          ["Planned", "AI-assisted managerial operations for your scripts"],
          ["Status", "currently in beta"],
        ]}
      />*/}
    </div>
  </Block>
)
