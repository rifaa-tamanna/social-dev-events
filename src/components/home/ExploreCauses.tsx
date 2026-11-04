import Link from "next/link";
import {
  BookOpen,
  Leaf,
  HeartPulse,
  HandHeart,
  Users,
  PawPrint,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const causes = [
  {
    title: "Education",
    description:
      "Empower minds and create better opportunities through accessible education.",
    icon: BookOpen,
    color: "from-blue-500/15 to-cyan-500/15",
    iconColor: "text-blue-500",
    category: "Education",
  },
  {
    title: "Environment",
    description:
      "Protect our planet through environmental awareness and sustainable action.",
    icon: Leaf,
    color: "from-green-500/15 to-emerald-500/15",
    iconColor: "text-green-500",
    category: "Environment",
  },
  {
    title: "Healthcare",
    description:
      "Support healthier communities with healthcare awareness and assistance.",
    icon: HeartPulse,
    color: "from-rose-500/15 to-pink-500/15",
    iconColor: "text-rose-500",
    category: "Healthcare",
  },
  {
    title: "Poverty Relief",
    description:
      "Extend a helping hand to families and individuals facing hardship.",
    icon: HandHeart,
    color: "from-orange-500/15 to-amber-500/15",
    iconColor: "text-orange-500",
    category: "Poverty Relief",
  },
  {
    title: "Community Support",
    description:
      "Bring people together to build stronger, safer, and happier communities.",
    icon: Users,
    color: "from-violet-500/15 to-purple-500/15",
    iconColor: "text-violet-500",
    category: "Community Support",
  },
  {
    title: "Animal Welfare",
    description:
      "Protect animals and promote kindness, care, and responsible treatment.",
    icon: PawPrint,
    color: "from-teal-500/15 to-cyan-500/15",
    iconColor: "text-teal-500",
    category: "Animal Welfare",
  },
];

export default function ExploreCauses() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-20 text-foreground transition-colors duration-300 md:px-12 lg:px-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-brand-2/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
            <Sparkles size={16} />
            MAKE A DIFFERENCE
          </div>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Explore{" "}
            <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
              Causes
            </span>
          </h2>

          <p className="text-base leading-7 text-muted-foreground md:text-lg">
            Everyone has the power to make a difference. Discover the causes you
            care about and turn your passion into meaningful action.
          </p>
        </div>

        {/* Causes Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause, index) => {
            const Icon = cause.icon;

            return (
              <div
                key={cause.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10"
              >
                {/* Decorative background */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/5 blur-2xl transition-all duration-500 group-hover:bg-brand/15" />

                {/* Category number */}
                <span className="absolute right-6 top-6 text-4xl font-bold text-muted-foreground/10">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${cause.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    className={cause.iconColor}
                  />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-brand">
                  {cause.title}
                </h3>

                <p className="mb-7 min-h-[72px] text-sm leading-7 text-muted-foreground">
                  {cause.description}
                </p>

                {/* Explore Link */}
                <Link
                  href={`/events?category=${encodeURIComponent(cause.category)}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all duration-300 hover:gap-3"
                >
                  Explore Events
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-muted-foreground">
            Your small contribution can create a big change.
          </p>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Discover All Events
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
