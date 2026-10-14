import demoVideo from "../../../assets/demo.webm"
import { repo } from "../../../info"

export const LandingSection = () => (
  <div className="min-h-screen flex flex-col justify-center gap-10">
    <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="w-fit justify-center items-start text-left flex flex-col">
        <div className="flex flex-col items-center text-center">
          <p className="text-[10px] sm:text-sm text-neutral-500 font-medium mr-2 opacity-50 tracking-tight">
            <span className="text-lime">Manage</span>
            {""} • {""}
            <span className="text-blue">Execute</span>
            {""} • {""}
            <span className="text-pink">Script</span>
          </p>
          <h1 className="text-6xl font-syntax tracking-wide text-neutral-100 sm:text-8xl font-black flex items-center">
            <span className="text-lime">M</span>
            <span className="text-blue">X</span>
            <span className="text-pink">S</span>
          </h1>
        </div>
        <p className="mt-3 max-w-xs text-xl text-white">
          A simple & <span className="italic">colored</span> CLI to{" "}
          <span className="text-lime">manage </span> and{" "}
          <span className="text-blue">execute</span>
          {""} your Bash <span className="text-pink">scripts.</span>
        </p>

        <div className="mt-8 max-w-2xs w-full flex gap-2.5 text-lg">
          <a
            href="#installation"
            className="group w-full uppercase bg-lime px-5 text-center py-1.5 hover:font-black font-extrabold text-neutral-950 transition-all duration-175 hover:bg-blue"
          >
            Execute!
          </a>
          <a
            href={repo}
            className="group w-full border border-dashed border-pink px-5 text-center py-1.5 hover:font-bold font-medium text-pink transition-all duration-175 hover:bg-pink/8"
          >
            Source
          </a>
        </div>
      </div>

      {/* Demo GIF. Swap the placeholder for: <img src={demoGif} alt="MXS demo" className="h-full w-full object-cover" /> */}
      <div className="aspect-video w-full sm:max-w-lg overflow-hidden border border-dashed border-box-outline bg-box/50">
        <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-wide text-neutral-600">
          <video
            alt="MXS Demo"
            muted
            loop
            autoPlay
            className="h-full w-full object-cover backdrop-blur-xs"
          >
            <source src={demoVideo} type="video/webm"></source>
            <track kind="captions" src={null} />
          </video>
        </div>
      </div>
    </div>
  </div>
)
