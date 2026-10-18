export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Geovane2dd</p>
        <p>
          Source on{" "}
          <a
            href="https://github.com/geovane2dd/geovane2dd.github.io"
            className="underline underline-offset-4 hover:text-ink"
          >
            GitHub
          </a>
          , licensed under GPL-3.0.
        </p>
      </div>
    </footer>
  );
}
