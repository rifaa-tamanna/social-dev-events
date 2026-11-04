import Link from "next/link";
import { ArrowLeft, Home, Search, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-6 py-20 text-foreground">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-brand-2/10 blur-[120px]" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-2xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-4 py-2">
          <Sparkles className="h-4 w-4 text-brand" />
          <span className="text-xs font-bold uppercase tracking-[2px] text-muted-foreground">
            Page Not Found
          </span>
        </div>

        {/* 404 */}
        <h1 className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-8xl font-extrabold tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-2xl font-bold sm:text-4xl">
          Oops! Lost Your Way?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
          The page you're looking for doesn't exist or may have been moved.
          Don't worry, let's get you back on track!
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-2 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>

          <Link
            href="/events"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-sm font-bold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-muted sm:w-auto"
          >
            <Search className="h-4 w-4" />
            Explore Events
          </Link>
        </div>

        {/* Bottom Text */}
        <p className="mt-12 text-xs text-muted-foreground">
          Error Code: 404 · Page Not Found
        </p>
      </div>
    </main>
  );
}
