import type { LucideIcon } from "lucide-react";
import {
  ExternalLink, TrendingUp, Music,
  ArrowRight, Link2, Terminal, Github, Server,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic    = "force-static";
export const revalidate = 3600;

const SIGNAL =
  "M 0,25 C 20,25 55,5 75,5 C 95,5 130,25 150,25 " +
  "C 170,25 205,45 225,45 C 245,45 280,25 300,25 " +
  "C 320,25 355,5 375,5 C 395,5 430,25 450,25 " +
  "C 470,25 505,45 525,45 C 545,45 580,25 600,25 " +
  "C 620,25 655,5 675,5 C 695,5 730,25 750,25 " +
  "C 770,25 805,45 825,45 C 845,45 880,25 900,25 " +
  "C 920,25 955,5 975,5 C 995,5 1030,25 1050,25 " +
  "C 1070,25 1105,45 1125,45 C 1145,45 1180,25 1200,25";

const SYSCALLS = [
  "0x00  sys_read",
  "0x28  sys_sendfile",
  "0x29  sys_socket",
  "0x32  sys_listen",
  "0x2b  sys_accept",
];

type Card = {
  id:    string;
  title: string;
  tag:   string;
  desc:  string;
  stack: string[];
  Icon:  LucideIcon;
  link:  string;
  gh:    string;
  demo:  boolean;
  dot:   string;
  beam:  string;
  glow:  string;
};

const PROJECTS: Card[] = [
  {
    id:    "linkpure",
    title: "LinkPure",
    tag:   "URL Sanitizer",
    desc:  "Strips tracking parameters and affiliate tokens from shopping URLs. Open-source, privacy-first, zero client-side dependencies.",
    stack: ["TypeScript", "Next.js", "Regex Engine"],
    Icon:  Link2,
    link:  "https://linkpure.geovanedd.com",
    gh:    "https://github.com/geovane2dd/LinkPure",
    demo:  true,
    dot:   "bg-violet-400",
    beam:  "via-violet-500/40",
    glow:  "hover:shadow-violet-950/50",
  },
  {
    id:    "b3api",
    title: "B3 API",
    tag:   "Financial Data API",
    desc:  "RESTful API exposing real-time and historical data from Brazil's stock exchange (B3) for developers and financial applications.",
    stack: ["Node.js", "REST", "Finance"],
    Icon:  TrendingUp,
    link:  "",
    gh:    "https://github.com/geovane2dd/B3API",
    demo:  false,
    dot:   "bg-sky-400",
    beam:  "via-sky-500/40",
    glow:  "hover:shadow-sky-950/50",
  },
  {
    id:    "little-dolly",
    title: "Little Dolly",
    tag:   "Artist Website",
    desc:  "Modern, performance-optimised website for the band Little Dolly. Custom design built for immersive music-content promotion.",
    stack: ["React", "Tailwind", "Web Design"],
    Icon:  Music,
    link:  "",
    gh:    "https://github.com/bandalittledolly/Website",
    demo:  false,
    dot:   "bg-rose-400",
    beam:  "via-rose-500/40",
    glow:  "hover:shadow-rose-950/50",
  },
  {
    id:    "flextux",
    title: "FlexTux Bot",
    tag:   "Discord Bot",
    desc:  "Feature-rich Discord bot with economy, moderation, utility and fun modules. Built for high-traffic servers.",
    stack: ["Node.js", "Discord.js", "CLI"],
    Icon:  Terminal,
    link:  "",
    gh:    "https://github.com/geovane2dd/FlexTux",
    demo:  false,
    dot:   "bg-emerald-400",
    beam:  "via-emerald-500/40",
    glow:  "hover:shadow-emerald-950/50",
  },
];

const TECH = [
  { label: "x86-64 ASM",   sub: "Systems"  },
  { label: "TypeScript",   sub: "Primary"  },
  { label: "React / Next", sub: "Frontend" },
  { label: "Node.js",      sub: "Backend"  },
  { label: "Linux",        sub: "Platform" },
  { label: "Self-Hosted",  sub: "Privacy"  },
];

export default function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-[#040409]"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <Navbar />
      <main className="flex-grow" itemProp="mainContentOfPage">

        {/* ═══════════════════════════ HERO ═══════════════════════════ */}
        <section
          className="relative min-h-screen flex flex-col justify-center overflow-hidden"
          aria-label="Geovane2dd — Systems and Web Developer"
        >
          <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
            <div
              className="absolute inset-0 opacity-[0.012]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px)," +
                  "linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
            <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px]
              rounded-full opacity-[0.04]
              bg-[radial-gradient(ellipse,#7c3aed,transparent_58%)]" />
            <div className="absolute bottom-[-18%] right-[-6%] w-[55vw] h-[55vw] max-w-[680px] max-h-[680px]
              rounded-full opacity-[0.028]
              bg-[radial-gradient(ellipse,#b45309,transparent_58%)]" />
          </div>

          <div
            className="absolute top-24 right-6 sm:right-10 pointer-events-none select-none"
            aria-hidden="true"
          >
            <div className="font-mono text-right space-y-[3px] text-white/[0.05]"
              style={{ fontSize: "9px" }}>
              {SYSCALLS.map(s => <div key={s}>{s}</div>)}
            </div>
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 pt-28 pb-20 sm:pt-36">

            <p className="font-mono text-[10px] tracking-[0.42em] text-white/[0.15] uppercase mb-10 select-none">
              geovane2dd · 2026 · systems &amp; web developer
            </p>

            <h1
              className="font-black leading-[0.85] tracking-[-0.048em] mb-10 select-none"
              aria-label="Open-source developer — from assembly to the browser"
            >
              <span
                className="block text-white"
                style={{ fontSize: "clamp(3.6rem,10.5vw,8.5rem)" }}
              >
                OPEN-SOURCE
              </span>
              <span
                className="block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-400
                  bg-clip-text text-transparent pb-2"
                style={{ fontSize: "clamp(3.6rem,10.5vw,8.5rem)" }}
              >
                DEVELOPER
              </span>
              <span
                className="block text-amber-400/88"
                style={{ fontSize: "clamp(3.6rem,10.5vw,8.5rem)" }}
              >
                GEOVANE.
              </span>
            </h1>

            <div
              className="my-10 overflow-hidden"
              style={{ marginLeft: "calc(-1 * clamp(1.5rem,2.5vw,2.5rem))", marginRight: "calc(-1 * clamp(1.5rem,2.5vw,2.5rem))" }}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 1200 50"
                preserveAspectRatio="none"
                style={{ width: "100%", height: "38px", display: "block" }}
              >
                <defs>
                  <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#8b5cf6" stopOpacity="0"   />
                    <stop offset="12%"  stopColor="#8b5cf6" stopOpacity="0.75"/>
                    <stop offset="50%"  stopColor="#f59e0b" stopOpacity="0.9" />
                    <stop offset="88%"  stopColor="#8b5cf6" stopOpacity="0.75"/>
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"   />
                  </linearGradient>
                  <filter id="wave-glow" x="-2%" y="-100%" width="104%" height="300%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d={SIGNAL}
                  fill="none"
                  stroke="url(#wave-grad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#wave-glow)"
                  className="signal-trace"
                />
              </svg>
            </div>

            <p className="text-base sm:text-lg font-light leading-relaxed max-w-[510px] text-white/[0.38] mb-10">
              Building{" "}
              <span className="text-white/[0.68]">open-source tools</span>
              {" "}and{" "}
              <span className="text-white/[0.68]">self-hosted applications</span>
              {" "}— from raw Linux syscalls to browser-ready React.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2
                  px-7 py-3.5 rounded-xl bg-white text-black text-sm font-semibold
                  hover:bg-neutral-100 active:scale-[0.975]
                  transition-all duration-200 shadow-xl shadow-white/10"
                aria-label="View featured projects"
              >
                View Projects
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="https://github.com/geovane2dd"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2.5
                  px-7 py-3.5 rounded-xl
                  bg-white/[0.05] hover:bg-white/[0.08]
                  border border-white/[0.09] hover:border-white/[0.18]
                  text-sm text-white/[0.52] hover:text-white font-medium
                  transition-all duration-200 active:scale-[0.975]"
                aria-label="GitHub profile — @geovane2dd"
              >
                <Github size={15} />
                @geovane2dd
              </a>
            </div>

          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 select-none" aria-hidden="true">
            <div className="w-px h-10 bg-gradient-to-b from-white/[0.1] to-transparent" />
          </div>
        </section>

        <section
          id="projects"
          className="relative py-32 sm:py-40 scroll-mt-20"
          aria-label="Featured Projects"
        >
          <div className="absolute top-0 inset-x-0 h-px
            bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
            aria-hidden="true" />
          <div className="absolute bottom-0 inset-x-0 h-px
            bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
            aria-hidden="true" />

          <div className="max-w-7xl mx-auto px-6 sm:px-10">

            <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
              <div>
                <p className="font-mono text-[10px] tracking-[0.35em] text-violet-400/60 uppercase mb-3">
                  01 · Work
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Featured Projects
                </h2>
              </div>
              <a
                href="https://github.com/geovane2dd?tab=repositories"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group self-start sm:self-auto inline-flex items-center gap-1.5
                  text-sm text-white/[0.24] hover:text-white/[0.52]
                  font-medium transition-colors duration-200"
                aria-label="View all repositories on GitHub"
              >
                All repositories
                <ArrowRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4" role="list">

              <article
                role="listitem"
                className="group relative md:col-span-2
                  bg-[#0a0a15] rounded-2xl overflow-hidden
                  border border-white/[0.065]
                  hover:border-amber-500/[0.22]
                  hover:shadow-[0_12px_60px_-12px_rgba(120,53,15,0.5)]
                  transition-all duration-300"
              >
                <div className="absolute top-0 inset-x-0 h-px
                  bg-gradient-to-r from-transparent via-amber-500/45 to-transparent"
                  aria-hidden="true" />

                <div className="grid md:grid-cols-[1fr_auto] h-full">

                  <div className="flex flex-col p-7 sm:p-8">
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg
                          bg-amber-500/[0.1] border border-amber-500/[0.2]
                          text-amber-400/[0.8] shrink-0">
                          <Server size={16} />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" aria-hidden="true" />
                            <span className="text-[10px] font-mono tracking-widest uppercase text-white/[0.22]">
                              Static File Server
                            </span>
                          </div>
                          <h3 className="text-lg font-bold font-mono text-white/[0.9]">
                            <a
                              href="https://asmttp.geovanedd.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-white transition-colors duration-150"
                              aria-label="asmttp — Static File Server"
                            >
                              asmttp
                            </a>
                          </h3>
                        </div>
                      </div>
                      <span className="font-mono tabular-nums text-[11px] text-white/[0.06] select-none mt-0.5">
                        00
                      </span>
                    </div>

                    <p className="text-sm text-white/[0.34] leading-relaxed mb-5 flex-1
                      group-hover:text-white/[0.5] transition-colors duration-200">
                      Written in{" "}
                      <span className="text-amber-300/[0.82]">100% x86-64 assembly</span>.
                      No libc, no runtime — raw Linux syscalls and zero-copy{" "}
                      <code className="font-mono text-[0.85em]">sendfile</code>.
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {["x86-64 ASM", "Linux", "sendfile(2)", "no libc"].map(t => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md font-mono tracking-wide text-[10px]
                            bg-amber-500/[0.06] border border-amber-500/[0.14] text-amber-400/[0.55]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <footer className="flex gap-2.5 pt-5 border-t border-white/[0.055]">
                      <a
                        href="https://asmttp.geovanedd.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5
                          py-2.5 px-4 rounded-xl
                          bg-amber-500 hover:bg-amber-400
                          text-black text-xs font-semibold
                          active:scale-[0.975] transition-all duration-200"
                        aria-label="Try asmttp live server"
                      >
                        <ExternalLink size={12} />
                        Try Server
                      </a>
                      <a
                        href="https://github.com/Geovane2dd/asmttp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5
                          py-2.5 px-4 rounded-xl
                          bg-white/[0.05] hover:bg-white/[0.09]
                          border border-white/[0.07] hover:border-white/[0.17]
                          text-white/[0.48] hover:text-white text-xs font-medium
                          transition-all duration-200 active:scale-[0.975]"
                        aria-label="asmttp source code on GitHub"
                      >
                        <Github size={13} />
                        Source Code
                      </a>
                    </footer>
                  </div>

                  <div
                    className="hidden md:flex flex-col w-[360px] lg:w-[400px]
                      bg-[#060609] border-l border-white/[0.04] font-mono"
                    aria-hidden="true"
                  >
                    <div className="flex items-center justify-between px-4 py-2.5
                      border-b border-white/[0.04] bg-[#08080c] select-none">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/[0.45]" />
                        <span className="text-[10px] text-white/[0.16]">server.asm</span>
                      </div>
                      <span className="text-[9.5px] tracking-wider text-amber-500/[0.3]">
                        NASM · x86-64
                      </span>
                    </div>

                    <div className="flex-1 p-5 text-[11px] leading-[2.1] select-none overflow-hidden">
                      <div>
                        <span className="text-violet-400/[0.88]">global</span>
                        <span className="ml-2 text-white/[0.48]">_start</span>
                      </div>
                      <div>
                        <span className="text-violet-400/[0.88]">section</span>
                        <span className="ml-2 text-sky-300/[0.62]">.text</span>
                      </div>
                      <div className="mt-1 text-white/[0.48]">_start:</div>
                      <div className="ml-5">
                        <span className="text-amber-400">mov</span>
                        <span className="ml-2 text-sky-300/[0.82]">rax</span>
                        <span className="text-white/[0.2]">,</span>
                        <span className="ml-2 text-emerald-400/[0.82]">41</span>
                        <span className="ml-3 text-[10px] text-white/[0.14]">; sys_socket</span>
                      </div>
                      <div className="ml-5">
                        <span className="text-amber-400">mov</span>
                        <span className="ml-2 text-sky-300/[0.82]">rdi</span>
                        <span className="text-white/[0.2]">,</span>
                        <span className="ml-2 text-emerald-400/[0.82]">2</span>
                        <span className="ml-3 text-[10px] text-white/[0.14]">; AF_INET</span>
                      </div>
                      <div className="ml-5">
                        <span className="text-amber-400">xor</span>
                        <span className="ml-2 text-sky-300/[0.82]">rdx</span>
                        <span className="text-white/[0.2]">,</span>
                        <span className="ml-2 text-sky-300/[0.82]">rdx</span>
                      </div>
                      <div className="ml-5">
                        <span className="text-amber-400">syscall</span>
                        <span className="ml-3 text-[10px] text-white/[0.14]">; → fd</span>
                      </div>
                      <div className="mt-0.5 ml-5 text-[10px] text-white/[0.12]">
                        ; bind · listen · accept ...
                      </div>
                      <div className="mt-1 text-white/[0.48]">.loop:</div>
                      <div className="ml-5">
                        <span className="text-amber-400">mov</span>
                        <span className="ml-2 text-sky-300/[0.82]">rax</span>
                        <span className="text-white/[0.2]">,</span>
                        <span className="ml-2 text-emerald-400/[0.82]">40</span>
                        <span className="ml-3 text-[10px] text-white/[0.14]">; sys_sendfile</span>
                      </div>
                      <div className="ml-5">
                        <span className="text-amber-400">syscall</span>
                        <span className="ml-3 text-[10px] text-white/[0.14]">; zero-copy</span>
                      </div>
                      <div className="ml-5">
                        <span className="text-amber-400">jmp</span>
                        <span className="ml-2 text-white/[0.45]">.loop</span>
                      </div>
                    </div>
                  </div>

                </div>
              </article>

              {PROJECTS.map((p, i) => (
                <article
                  key={p.id}
                  role="listitem"
                  className={`group relative flex flex-col
                    bg-[#0a0a15] rounded-2xl overflow-hidden
                    border border-white/[0.065]
                    hover:border-white/[0.12]
                    hover:shadow-[0_8px_48px_-10px]
                    ${p.glow}
                    transition-all duration-300`}
                >
                  <div
                    className={`absolute top-0 inset-x-0 h-px
                      bg-gradient-to-r from-transparent ${p.beam} to-transparent`}
                    aria-hidden="true"
                  />

                  <div className="flex flex-col flex-1 p-6 sm:p-7">
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg
                          bg-white/[0.05] border border-white/[0.07]
                          text-white/[0.36] shrink-0">
                          <p.Icon size={16} />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${p.dot} shrink-0`} aria-hidden="true" />
                            <span className="text-[10px] font-mono tracking-widest uppercase text-white/[0.22]">
                              {p.tag}
                            </span>
                          </div>
                          <h3 className="text-base font-bold tracking-tight text-white/[0.88]">
                            <a
                              href={p.demo ? p.link : p.gh}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-white transition-colors duration-150"
                              aria-label={`${p.title} — ${p.tag}`}
                            >
                              {p.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                      <span className="font-mono tabular-nums text-[10px] text-white/[0.06] select-none mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-[13px] text-white/[0.33] leading-relaxed mb-5 flex-1
                      group-hover:text-white/[0.5] transition-colors duration-200">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5" aria-label={`${p.title} technologies`}>
                      {p.stack.map(t => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md font-mono tracking-wide text-[10px]
                            bg-white/[0.03] border border-white/[0.055] text-white/[0.26]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <footer className="flex gap-2 pt-4 border-t border-white/[0.055]">
                      {p.demo && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5
                            py-2 px-3 rounded-xl bg-white text-black text-xs font-semibold
                            hover:bg-neutral-100 active:scale-[0.975] transition-all duration-200"
                          aria-label={`Live demo — ${p.title}`}
                        >
                          <ExternalLink size={11} />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={p.gh}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${p.demo ? "flex-1" : "w-full"} inline-flex items-center justify-center gap-1.5
                          py-2 px-3 rounded-xl
                          bg-white/[0.05] hover:bg-white/[0.09]
                          border border-white/[0.07] hover:border-white/[0.15]
                          text-white/[0.44] hover:text-white text-xs font-medium
                          transition-all duration-200 active:scale-[0.975]`}
                        aria-label={`Source code — ${p.title}`}
                      >
                        <Github size={12} />
                        Source
                      </a>
                    </footer>
                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>

        <section
          id="about"
          className="relative py-32 sm:py-40 scroll-mt-20"
          aria-label="About Geovane2dd"
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 inset-x-0 h-px
              bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
            <div className="absolute bottom-[-18%] right-[-4%] w-[50vw] h-[50vw] max-w-[680px] max-h-[680px]
              rounded-full opacity-[0.022]
              bg-[radial-gradient(ellipse,#a855f7,transparent_65%)]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              <div>
                <p className="font-mono text-[10px] tracking-[0.35em] text-cyan-400/[0.5] uppercase mb-5">
                  02 · About
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5 leading-tight">
                  Building the open web,
                  <br />
                  <span className="text-white/[0.24] font-light">one commit at a time.</span>
                </h2>

                <div className="w-10 h-px bg-white/[0.09] mb-7" aria-hidden="true" />

                <div className="space-y-4 text-sm sm:text-base font-light leading-relaxed text-white/[0.36]">
                  <p>
                    Developer from Brazil working across the full stack — from bare-metal{" "}
                    <span className="font-mono text-[0.9em] text-amber-300/[0.75]">x86-64 assembly</span>
                    {" "}to{" "}
                    <span className="text-white/[0.62]">TypeScript</span>
                    {" "}and{" "}
                    <span className="text-white/[0.62]">React</span>
                    {" "}— building tools that put users in control of their data.
                  </p>
                  <p>
                    Every project is designed with performance, security and developer
                    experience as first-class concerns.
                  </p>
                  <p>
                    Interested in systems programming, privacy infrastructure and the
                    intersection of security and usability in modern web applications.
                  </p>
                </div>

                <a
                  href="https://github.com/geovane2dd"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group inline-flex items-center gap-2 mt-9
                    px-5 py-2.5 rounded-xl
                    bg-white/[0.05] hover:bg-white/[0.09]
                    border border-white/[0.08] hover:border-white/[0.18]
                    text-sm text-white/[0.48] hover:text-white font-medium
                    transition-all duration-200 active:scale-[0.975]"
                  aria-label="GitHub — @geovane2dd"
                >
                  <Github size={15} />
                  @geovane2dd
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/[0.15] mb-5">
                  Technologies &amp; Tools
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4" aria-label="Technology stack">
                  {TECH.map(({ label, sub }) => (
                    <div
                      key={label}
                      className="group relative overflow-hidden flex flex-col gap-1 p-4 rounded-xl
                        bg-white/[0.025] border border-white/[0.05]
                        hover:bg-white/[0.045] hover:border-white/[0.09]
                        transition-all duration-200"
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-px
                          bg-gradient-to-r from-transparent via-white/[0.09] to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold text-white/[0.58]
                        group-hover:text-white/[0.78] transition-colors duration-200">
                        {label}
                      </span>
                      <span className="font-mono text-[10px] text-white/[0.18]">{sub}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl
                  bg-[#0a0a15] border border-white/[0.065]">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0
                    bg-white/[0.05] border border-white/[0.07] text-white/[0.4]">
                    <Github size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white/[0.65]">All projects on GitHub</p>
                    <p className="font-mono text-[11px] text-white/[0.25] mt-0.5 truncate">
                      github.com/geovane2dd
                    </p>
                  </div>
                  <a
                    href="https://github.com/geovane2dd"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="shrink-0 inline-flex items-center gap-1.5
                      px-4 py-2 rounded-lg
                      bg-white/[0.06] hover:bg-white/[0.11]
                      border border-white/[0.08] hover:border-white/[0.18]
                      text-xs text-white/[0.48] hover:text-white font-medium
                      transition-all duration-200 active:scale-[0.975]"
                    aria-label="Open GitHub profile"
                  >
                    Open
                    <ArrowRight size={11} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
