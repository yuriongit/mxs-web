import { repoNoHttps, repo } from "../info";

export const Footer = () => (
  <footer className="border-t border-neutral-900 w-full">
    <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-xs text-neutral-600">
      <span>MIT License</span>
      <p className="text-sm text-neutral-500 italic">
        <span className="text-lime">X</span>
        <span className="text-pink">S</span>
        {" = "}
        <span className="text-lime">Execute</span>
        <span className="text-pink">Script</span>
      </p>''
      <a href={repo} className="hover:text-neutral-300 transition">
        {repoNoHttps}
      </a>
    </div>
  </footer>
);
