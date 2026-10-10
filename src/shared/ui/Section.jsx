import { Requirements } from "../components/Requirements"

export const Section = ({
  lineBreak,
  icon: Icon,
  id,
  title,
  note,
  reqs,
  children,
}) => {
  return (
    <>
      {!lineBreak && <div className="bg-dark-line-break w-full h-px" />}

      <section id={id} className="my-20">
        <div
          className={`flex items-start justify-between w-full gap-5 ${reqs != null && "min-h-45"}`}
        >
          <div className="w-full">
            <div
              className={`flex gap-3.5 items-center ${note ? "pb-2" : "pb-6"}`}
            >
              <h2 className={`text-heading font-light text-lime`}>{title}</h2>
              {/* Check if Icon is truthy (not undefined or null) */}
              {Boolean(Icon) && (
                <Icon stroke={1.25} size={26.5} className="text-lime" />
              )}
            </div>
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
