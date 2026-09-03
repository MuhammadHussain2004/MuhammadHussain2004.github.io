import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs text-faint sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.fullName}</p>
        <a href="#top" className="transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
