import { Link } from "react-router-dom"
import { repo } from "../info"

export const Navbar = () => (
  <nav className="w-full flex items-center justify-center border-b border-b-line-break fixed top-0 backdrop-blur-md z-40 -bg-linear-330 from-box/15 to-black/50">
    <div className="max-w-4xl py-6 lg:px-10 text-sm w-full flex justify-between">
      <Link to="/" className="font-extrabold text-zinc-100">
        <span className="text-blue">M</span>
        <span className="text-lime">X</span>
        <span className="text-pink">S</span>
      </Link>
      <ul className="space-x-6 text-sm flex">
        <li>
          <Link
            to="/start"
            className="transition text-zinc-400 hover:text-pink"
          >
            Start
          </Link>
        </li>
        <li>
          <Link to="/docs" className="transition text-zinc-400 hover:text-pink">
            Docs
          </Link>
        </li>
        <li>
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="transition text-zinc-400 hover:text-pink"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </nav>
)
