import Link from "next/link";
import { Github, ArrowRight, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Projects",         href: "#projects",                                        external: false },
  { label: "About",            href: "#about",                                           external: false },
  { label: "All repositories", href: "https://github.com/geovane2dd?tab=repositories",  external: true  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.055] bg-[#060610]">

      <div
        className="absolute top-0 inset-x-0 h-px
          bg-gradient-to-r from-transparent via-violet-500/25 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div className="space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group"
              aria-label="Geovane2dd — home"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg
                bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white text-xs font-bold
                shadow-lg shadow-violet-500/20 select-none">
                G
              </span>
              <span className="text-sm font-semibold text-white/72
                group-hover:text-white transition-colors duration-200">
                Geovane2dd
              </span>
            </Link>
            <p className="text-xs text-white/24 leading-relaxed max-w-xs">
              Developer building open-source tools and self-hosted
              applications — from assembly to the browser.
            </p>
            <a
              href="https://github.com/geovane2dd"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg
                bg-white/[0.05] hover:bg-white/[0.09]
                border border-white/[0.07] hover:border-white/[0.16]
                text-sm text-white/50 hover:text-white font-medium
                transition-all duration-200 active:scale-[0.97]"
              style={{ minHeight: "40px" }}
              aria-label="Visit GitHub profile"
            >
              <Github size={14} />
              GitHub
              <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] text-white/20 tracking-[0.25em] uppercase font-mono">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer nofollow" } : {})}
                    className="text-sm text-white/34 hover:text-white/68
                      transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] text-white/20 tracking-[0.25em] uppercase font-mono">
              Featured
            </p>
            <div className="rounded-xl border border-amber-500/16 bg-[#0b0a08] p-4 space-y-3
              hover:border-amber-500/30 transition-all duration-300">
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg
                  bg-amber-500/10 border border-amber-500/20 shrink-0
                  font-mono text-[8px] font-bold text-amber-400 select-none">
                  ASM
                </span>
                <span className="text-sm font-semibold text-white/65 font-mono">asmttp</span>
              </div>
              <p className="text-[11px] text-white/28 leading-relaxed">
                Static file server in 100% x86-64 assembly. No libc, raw Linux syscalls.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://asmttp.geovanedd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5
                    px-3 py-1.5 rounded-lg
                    bg-amber-500/12 hover:bg-amber-500/20
                    border border-amber-500/20 hover:border-amber-500/35
                    text-[11px] text-amber-400/80 hover:text-amber-300 font-medium
                    transition-all duration-200"
                  aria-label="Try asmttp live server"
                >
                  <ExternalLink size={10} />
                  Live
                </a>
                <a
                  href="https://github.com/Geovane2dd/asmttp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5
                    px-3 py-1.5 rounded-lg
                    bg-white/[0.04] hover:bg-white/[0.08]
                    border border-white/[0.07] hover:border-white/[0.15]
                    text-[11px] text-white/38 hover:text-white/65 font-medium
                    transition-all duration-200"
                  aria-label="asmttp source code"
                >
                  <Github size={10} />
                  Source
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/[0.045]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-white/18 font-mono">
              © 2026 Geovane2dd · GNU GPL v3 ·{" "}
              <a
                href="https://geovanedd.me"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="hover:text-white/42 transition-colors duration-200"
              >
                geovanedd.me
              </a>
            </p>
            <p className="text-[10px] text-white/14 font-mono text-center sm:text-right">
              Free software — redistribute under the{" "}
              <a
                href="https://www.gnu.org/licenses/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/26 hover:text-white/52 transition-colors duration-200 underline"
              >
                GNU GPL v3
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
