import { useEffect, useRef, useState } from "react"
import mxsArgsSupport from "../../../assets/mxs-args-support.webm"
import mxsPreRunScript from "../../../assets/mxs-pre-run-script.png"
import mxsScriptsList from "../../../assets/mxs-scripts-list.png"
import { Section } from "../../../shared/Section"

const DURATION = 5000

const features = [
  {
    title: "Execution Simplicity",
    body: "Just run a script by using its name: No file extension needed for execution",
    image: mxsPreRunScript,
    text: "text-lime",
    bar: "bg-lime",
  },
  {
    title: "Script Management",
    body: "Easily view, delete, update, and create scripts",
    image: mxsScriptsList,
    text: "text-blue",
    bar: "bg-blue",
  },
  {
    title: "Arguments Support",
    body: "Built-in support for passing arguments to your scripts",
    video: mxsArgsSupport,
    text: "text-pink",
    bar: "bg-pink",
  },
  {
    title: "Structured Output",
    body: "Colored and structured output with error/success reports",
    image: null,
    text: "text-lime",
    bar: "bg-lime",
  },
  {
    title: "Concise Syntax",
    body: "Short and sweet syntax specifically made for workflows",
    image: null,
    text: "text-blue",
    bar: "bg-blue",
  },
]

const pad = (n) => String(n).padStart(2, "0")

export const FeatureShowcaseSection = () => {
  const [active, setActive] = useState(0)
  const [cycle, setCycle] = useState(0)
  const [paused, setPaused] = useState(false)
  const videoRefs = useRef({})
  const count = features.length
  const current = features[active]

  // Auto-advance to next feature when progress bar finishes
  const handleProgressEnd = () => {
    setActive((prev) => (prev + 1) % count)
    setCycle((c) => c + 1)
  }

  // Navigate to feature and restart its video
  const go = (i) => {
    const targetIndex = (i + count) % count
    setActive(targetIndex)
    setCycle((c) => c + 1)

    // Reset and play the target video if it exists
    setTimeout(() => {
      const video = videoRefs.current[targetIndex]
      if (video) {
        video.currentTime = 0
        video.play().catch(() => {})
      }
    }, 0)
  }

  // Restart the current video
  const replayVideo = () => {
    const video = videoRefs.current[active]
    if (video) {
      video.currentTime = 0
      video.play().catch(() => {})
    }
    // Restart the progress bar
    setCycle((c) => c + 1)
  }

  // Ensure video plays when feature becomes active
  useEffect(() => {
    const video = videoRefs.current[active]
    if (video && current.video) {
      video.currentTime = 0
      video.play().catch(() => {})
    }
  }, [active, current.video])

  return (
    <Section id="features" title="Features">
      <style>{`
        @keyframes mxs-progress { from { width: 0 } to { width: 100% } }
        @media (prefers-reduced-motion: reduce) {
          .mxs-bar { animation: none !important; width: 100% }
        }
      `}</style>

      <div
        role="listbox"
        className="grid md:max-w-lg lg:max-w-none gap-8 lg:flex lg:items-start transition-all"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <ol className="flex flex-col lg:max-w-sm w-full">
          {features.map((f, i) => {
            const isActive = i === active
            return (
              <li key={f.title}>
                <button
                  type="button"
                  aria-current={isActive}
                  onClick={() => go(i)}
                  className={`relative flex w-full gap-5 px-4 py-4 text-left transition hover:cursor-pointer ${
                    isActive ? "bg-box/50" : "hover:bg-box/30"
                  }`}
                >
                  <span
                    className={`pt-0.5 text-xs ${isActive ? f.text : "text-neutral-600"}`}
                  >
                    {pad(i + 1)}
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span
                      className={`font-bold ${isActive ? f.text : "text-neutral-500"}`}
                    >
                      {f.title}
                    </span>
                    {isActive && (
                      <span className="text-sm leading-relaxed text-paragraph">
                        {f.body}
                      </span>
                    )}
                  </span>

                  {isActive && (
                    <span
                      key={`${active}-${cycle}`}
                      className={`mxs-bar absolute bottom-0 left-0 h-0.5 ${f.bar}`}
                      style={{
                        animation: `mxs-progress ${DURATION}ms linear forwards`,
                        animationPlayState: paused ? "paused" : "running",
                      }}
                      onAnimationEnd={handleProgressEnd}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ol>

        <div className="order-first w-full md:min-w-lg lg:order-last">
          <div className="border border-box-outline bg-box/50">
            <div className="flex items-center justify-between border-b border-box-outline px-4 py-2 text-xs">
              <span className={`font-bold ${current.text}`}>
                {current.title}
              </span>
              <span className="text-neutral-600 font-bold">
                {pad(active + 1)} / {pad(count)}
              </span>
            </div>

            <div className="relative aspect-video w-full overflow-hidden">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {f.image ? (
                    <img
                      src={f.image}
                      alt={`${f.title} demo`}
                      className="h-full w-full object-cover"
                    />
                  ) : f.video ? (
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[i] = el
                      }}
                      alt={`${f.title} demo`}
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="h-full w-full border border-box-outline border-dashed object-cover backdrop-blur-xs"
                    >
                      <source src={f.video} type="video/webm" />
                      <track kind="captions" src={null} />
                    </video>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-wide text-neutral-600">
                      No media available
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-neutral-600 font-medium text-sm">
            <span className="text-xs">Hover to pause.</span>
            <div className="flex gap-2">
              {[
                ["‹", "Previous feature", () => go(active - 1)],
                ["Replay", "Replay this feature", replayVideo],
                ["›", "Next feature", () => go(active + 1)],
              ].map(([label, aria, onClick]) => (
                <button
                  key={aria}
                  type="button"
                  aria-label={aria}
                  onClick={onClick}
                  className="border border-box-outline px-3 py-1 transition hover:cursor-pointer hover:border-neutral-500 hover:text-neutral-200"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
