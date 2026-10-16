export const Section = ({ lineBreak, id, title, note, reqs, children }) => {
  return (
    <>
      {!lineBreak && <div className="bg-dark-line-break w-full h-px" />}

      <section id={id} className="py-40">
        <div
          className={`flex items-start justify-between w-full gap-5 ${reqs != null && "min-h-45"}`}
        >
          <div className="w-full">
            <div
              className={`flex gap-3.5 items-center ${note ? "pb-2" : "pb-6"}`}
            >
              <h2 className="mt-6 break-words font-jetbrains text-5xl font-black leading-[0.95] tracking-tighter text-neutral-100 sm:text-6xl max-w-sm">
                {title}
              </h2>
            </div>
            {note && (
              <p className="mb-6 max-w-116 text-lg text-paragraph">{note}</p>
            )}
          </div>
        </div>
        {children}
      </section>

      {!lineBreak && <div className="bg-dark-line-break w-full h-px" />}
    </>
  )
}
