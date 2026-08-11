"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Github } from "lucide-react";

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef  = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      const t = e.target as Node;
      if (menuRef.current && btnRef.current &&
          !menuRef.current.contains(t) && !btnRef.current.contains(t)) {
        setOpen(false);
      }
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) {
      document.addEventListener("mousedown",  handler);
      document.addEventListener("touchstart", handler);
      document.addEventListener("keydown",    esc);
    }
    return () => {
      document.removeEventListener("mousedown",  handler);
      document.removeEventListener("touchstart", handler);
      document.removeEventListener("keydown",    esc);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500
          ${scrolled
            ? "bg-[#040409]/92 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_0_0_rgba(255,255,255,0.03)]"
            : "bg-transparent"}`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            <Link
              href="/"
              className="group flex items-center gap-2.5"
              onClick={() => setOpen(false)}
              aria-label="Geovane2dd — home"
            >
              <span className="text-sm font-semibold text-white/82
                group-hover:text-white transition-colors duration-200 tracking-wide">
                Geovane2dd
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {["Projects", "About"].map(label => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="px-4 py-2 text-sm text-white/42 hover:text-white
                    rounded-lg hover:bg-white/[0.05] transition-all duration-200 font-medium"
                  aria-label={`Go to ${label} section`}
                >
                  {label}
                </a>
              ))}

              <a
                href="https://github.com/Geovane2dd/Ajazzy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-mono font-medium
                  text-orange-400/55 hover:text-orange-300
                  rounded-lg hover:bg-orange-500/[0.07]
                  transition-all duration-200"
                aria-label="Ajazzy on GitHub"
              >
                Ajazzy
              </a>

              <div className="w-px h-4 bg-white/10 mx-2" aria-hidden="true" />

              <a
                href="https://github.com/geovane2dd"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium
                  text-white/55 hover:text-white
                  bg-white/[0.06] hover:bg-white/[0.10]
                  border border-white/[0.08] hover:border-white/[0.17]
                  rounded-lg transition-all duration-200 active:scale-[0.97]"
                style={{ minHeight: "40px" }}
                aria-label="Visit GitHub profile"
              >
                <Github size={15} />
                <span className="hidden lg:inline">GitHub</span>
                <span className="lg:hidden">Git</span>
              </a>
            </div>

            <button
              ref={btnRef}
              onClick={() => setOpen(v => !v)}
              className="md:hidden flex items-center justify-center rounded-lg
                bg-white/[0.06] hover:bg-white/[0.10]
                border border-white/[0.08] transition-all duration-200
                touch-manipulation text-white/60 hover:text-white"
              style={{ minWidth: "44px", minHeight: "44px" }}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        ref={menuRef}
        className={`fixed top-16 sm:top-20 inset-x-0 z-50 md:hidden
          bg-[#0b0b18]/98 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl
          transition-all duration-300 ease-out
          ${open
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-3 pointer-events-none invisible"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="max-w-7xl mx-auto px-5 py-4 space-y-1">
          {["Projects", "About"].map(label => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium
                text-white/62 hover:text-white hover:bg-white/[0.05]
                rounded-xl transition-all duration-200 touch-manipulation"
              style={{ minHeight: "48px" }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/Geovane2dd/Ajazzy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium font-mono
              text-orange-400/70 hover:text-orange-300 hover:bg-orange-500/[0.06]
              rounded-xl transition-all duration-200 touch-manipulation"
            style={{ minHeight: "48px" }}
            onClick={() => setOpen(false)}
          >
            Ajazzy
          </a>
          <a
            href="https://github.com/geovane2dd"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium
              text-white/62 hover:text-white hover:bg-white/[0.05]
              rounded-xl transition-all duration-200 touch-manipulation"
            style={{ minHeight: "48px" }}
            onClick={() => setOpen(false)}
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
