import {
  Search,
  Users,
  HeartHandshake,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discover Opportunities",
    description:
      "Explore meaningful events and causes that match your interests and passion for making a difference.",
    icon: Search,
    color: "from-brand to-brand-2",
  },
  {
    number: "02",
    title: "Join the Community",
    description:
      "Connect with like-minded people, register for events, and become part of a community that cares.",
    icon: Users,
    color: "from-brand-2 to-brand",
  },
  {
    number: "03",
    title: "Make an Impact",
    description:
      "Take action, share your skills, and help create positive changes in people's lives and communities.",
    icon: HeartHandshake,
    color: "from-brand to-brand-2",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-20 text-foreground transition-colors duration-300 md:px-12 lg:px-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-brand-2/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
            <Sparkles size={16} />
            SIMPLE PROCESS
          </div>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How It{" "}
            <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
              Works
            </span>
            ?
          </h2>

          <p className="text-base leading-7 text-muted-foreground md:text-lg">
            Making a difference doesn't have to be complicated. Follow these
            three simple steps and start creating positive change in your
            community.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-7 md:grid-cols-3">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[18%] right-[18%] top-14 hidden border-t-2 border-dashed border-brand/30 md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-border bg-card p-7 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10"
              >
                {/* Number */}
                <div className="absolute right-6 top-6 text-4xl font-bold text-muted-foreground/15 transition-colors duration-300 group-hover:text-brand/30">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/15 to-brand-2/15 text-brand ring-1 ring-brand/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                {/* Step label */}
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">
                  Step {index + 1}
                </p>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-brand">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mb-7 min-h-[84px] text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>

                {/* Bottom line */}
                <div className="flex items-center justify-between border-t border-border pt-5">
                  <span className="text-sm font-semibold text-foreground">
                    {index === 0
                      ? "Find your purpose"
                      : index === 1
                        ? "Be part of us"
                        : "Change lives"}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                    <ArrowRight size={17} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="mb-5 text-muted-foreground">
            Ready to make a difference?
          </p>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Explore Events
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
