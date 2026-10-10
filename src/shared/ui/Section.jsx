import { Requirements } from "../components/Requirements"

export const Section = ({ lineBreak, id, title, note, reqs, children }) => {
  return (
    <>
      {!lineBreak && <div className="bg-dark-line-break w-full h-px" />}

      <section id={id} className="my-20">
        <div
          className={`flex items-start justify-between w-full gap-5 ${reqs != null && "min-h-45"}`}
        >
          <div className="w-full">
            <h2
              className={`${note ? "mb-2" : "mb-6"} text-heading font-bold text-lime`}
            >
              {title}
            </h2>
            {note && (
              <p className="mb-6 max-w-116 text-sm text-neutral-500">{note}</p>
            )}
          </div>
          <div className="pb-5 w-full">
            {reqs != null && <Requirements reqs={reqs} />}
          </div>
        </div>
        {children}
      </section>

      {!lineBreak && <div className="bg-dark-line-break w-full h-px" />}
    </>
  )
}
