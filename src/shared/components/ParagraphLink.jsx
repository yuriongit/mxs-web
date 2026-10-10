import { Link } from "react-router-dom"

export const ParagraphLink = ({ text, path, href }) => {
  if (path !== null && href == null) {
    return (
      <Link
        to={`/${path}`}
        className={`underline font-semibold decoration-neutral-700 underline-offset-4 transition hover:brightness-190 brightness-150`}
      >
        {text}
      </Link>
    )
  } else {
    return (
      <a
        href={href}
        className={`underline font-semibold decoration-neutral-700 underline-offset-4 transition hover:brightness-190 brightness-150`}
      >
        {text}
      </a>
    )
  }
}
