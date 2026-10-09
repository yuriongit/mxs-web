export const Section = ({ id, title, note, children }) => {
  return (
    <section id={id} className="mt-20">
      <h2
        className={`${note ? "mb-2" : "mb-6"} text-heading font-bold text-lime`}
      >
        {title}
      </h2>
      {note && (
        <p className="mb-6 max-w-md lg:pr-10 text-sm text-neutral-500">
          {note}
        </p>
      )}
      {children}
    </section>
  )
}
