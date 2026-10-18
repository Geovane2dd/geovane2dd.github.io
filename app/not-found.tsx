import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-32">
        <p className="font-mono text-sm text-muted">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-muted">The page you are looking for does not exist or was moved.</p>
        <Link href="/" className="mt-8 inline-block underline underline-offset-4 hover:text-accent">
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
