import { repo, repoNoHttps } from "../info"

export const Footer = () => (
  <footer className="border-t border-dark-line-break w-full">
    <div className="mx-auto flex max-w-4xl justify-center px-5 lg:px-10 py-6 text-sm text-subnote">
      <a href={repo} className="hover:text-pink transition">
        {repoNoHttps}
      </a>
    </div>
  </footer>
)
