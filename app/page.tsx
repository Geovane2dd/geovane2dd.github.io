import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, skills } from "./projects";

export const dynamic = "force-static";
export const revalidate = 3600;

const link =
  "underline decoration-line underline-offset-4 transition-colors hover:decoration-accent hover:text-accent";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pt-32">
          <p className="mb-6 font-mono text-sm text-muted">Developer, Brazil</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            I build open-source tools, from assembly to the browser.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Systems and web developer focused on self-hosted software, privacy and
            software that is fast by default.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium">
            <a
              href="#work"
              className="rounded-md bg-ink px-5 py-2.5 text-bg transition-opacity hover:opacity-85"
            >
              See my work
            </a>
            <a
              href="https://github.com/geovane2dd"
              className="rounded-md border border-line px-5 py-2.5 transition-colors hover:bg-surface"
            >
              GitHub profile
            </a>
          </div>
        </section>

        <section id="work" className="scroll-mt-14 border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-12 text-2xl font-semibold tracking-tight">Selected work</h2>
            <ul>
              {projects.map((p) => (
                <li
                  key={p.name}
                  className="grid gap-4 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[8rem_1fr]"
                >
                  <p className="font-mono text-sm text-muted">{p.year}</p>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                    <p className="mt-2 max-w-2xl leading-relaxed text-muted">{p.summary}</p>
                    <p className="mt-4 font-mono text-xs text-muted">{p.stack.join(" / ")}</p>
                    <p className="mt-4 flex gap-5 text-sm">
                      <a href={p.repo} className={link}>
                        Source<span className="sr-only"> for {p.name}</span>
                      </a>
                      {p.demo && (
                        <a href={p.demo} className={link}>
                          Live site<span className="sr-only"> for {p.name}</span>
                        </a>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="about" className="scroll-mt-14 border-t border-line bg-surface">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight">About</h2>
              <div className="space-y-4 leading-relaxed text-muted">
                <p>
                  I am a developer from Brazil working across the stack, from bare-metal
                  x86-64 assembly to TypeScript and React.
                </p>
                <p>
                  I care about tools that leave users in control of their data, and I
                  treat performance, security and ease of maintenance as part of the
                  design rather than a later pass.
                </p>
                <p>
                  Most of what I write is open source and meant to be self-hosted.
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight">Skills</h2>
              <dl className="divide-y divide-line border-y border-line">
                {skills.map((s) => (
                  <div key={s.area} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr]">
                    <dt className="font-medium">{s.area}</dt>
                    <dd className="text-muted">{s.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-14 border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              The best way to reach me is through GitHub. Open an issue on any
              repository or send a message from my profile.
            </p>
            <p className="mt-6">
              <a href="https://github.com/geovane2dd" className={link}>
                github.com/geovane2dd
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
