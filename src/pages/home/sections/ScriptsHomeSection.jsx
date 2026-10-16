import { repo } from "../../../info"
import { Block } from "../../../shared/Block"
import { Chip } from "../../../shared/Chip"
import { FileTree } from "../../../shared/FileTree"
import { Headline } from "../../../shared/Headline"
import { Lead } from "../../../shared/Lead"

export const HomeForYourScriptsSections = () => (
  <Block bottomBorder={true} id="home">
    <div>
      <Headline>
        The Home for
        <br />
        Your Scripts
      </Headline>
      <Lead>
        Everything lives in{" "}
        <code className="font-syntax font-medium text-code text-lime">
          ~/.mxs
        </code>
        . No need to setup anything: MXS offers automatic setup.
      </Lead>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <Chip>mxs init</Chip>
        <a
          href={`${repo}/blob/main/docs/configuration-directory.md`}
          className="text-sm underline decoration-neutral-700 underline-offset-4 transition hover:text-neutral-100"
        >
          Layout Document (coming soon)
        </a>
      </div>
    </div>

    <div className="space-y-10">
      <FileTree />
    </div>
  </Block>
)
