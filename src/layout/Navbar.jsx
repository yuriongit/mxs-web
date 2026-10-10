import { Link } from "react-router-dom"
import { repo } from "../info"

export const Navbar = () => (
  <nav className="w-full flex items-center justify-center border-b border-b-box-outline fixed top-0 backdrop-blur-md z-40 -bg-linear-330 from-box/15 to-black/50">
    <div className="max-w-4xl py-6 px-5 lg:px-10 text-sm w-full flex justify-between items-center">
      <Link to="/" className="font-extrabold text-navlogo">
        <span className="text-lime">M</span>
        <span className="text-blue">X</span>
        <span className="text-pink">S</span>
      </Link>
      <ul className="space-x-6 text-sm flex">
        <li>
          <Link
            to="/start"
            className="transition text-subnote font-medium hover:text-pink"
          >
            Start
          </Link>
        </li>
        <li>
          <Link
            to="/docs"
            className="transition text-subnote font-medium hover:text-pink"
          >
            Docs
          </Link>
        </li>
        <li>
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="transition text-subnote font-medium hover:text-pink"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </nav>
)
