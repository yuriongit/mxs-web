export const Block = ({ id, children, bottomBorder, topBorder }) => (
  <section
    id={id}
    className={`py-40 border-box-outline grid gap-14 lg:grid-cols-2 lg:items-start ${bottomBorder && "border-b"} ${topBorder && "border-t"}`}
  >
    {children}
  </section>
)
