import Link from "next/link";
import {
  ArrowUpRight,
  HeartHandshake,
  Target,
  Users,
  Globe2,
  Sparkles,
  HandHeart,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Community First",
    description:
      "We believe meaningful change begins when people come together and support one another.",
    color: "from-pink-500/20 to-rose-500/10",
    iconColor: "text-pink-500",
  },
  {
    icon: Target,
    title: "Purposeful Action",
    description:
      "We connect people with meaningful events where their time and effort can make a difference.",
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Users,
    title: "Stronger Together",
    description:
      "We encourage collaboration, participation, and shared responsibility for social development.",
    color: "from-purple-500/20 to-violet-500/10",
    iconColor: "text-purple-500",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-20 text-foreground transition-colors duration-300 md:px-12 lg:px-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 top-[500px] h-72 w-72 rounded-full bg-brand-2/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Hero section */}
        <section className="mx-auto mb-24 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
            <Sparkles size={16} />
            WHO WE ARE
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Together, We Can{" "}
            <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
              Make a Difference
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            Social Development Events is a platform that brings people together
            through meaningful events, shared causes, and community-driven
            action.
          </p>

          <Link
            href="/events"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Explore Events
            <ArrowUpRight size={18} />
          </Link>
        </section>

        {/* Mission and Vision */}
        <section className="mb-24 grid gap-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 md:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand/10 blur-3xl transition-all group-hover:bg-brand/20" />

            <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand-2/20 text-brand">
              <Target size={28} />
            </div>

            <h2 className="relative mb-4 text-2xl font-bold">Our Mission</h2>

            <p className="relative text-sm leading-8 text-muted-foreground md:text-base">
              Our mission is to make it easier for people to discover, organize,
              and participate in social development events. We want to turn good
              intentions into meaningful community action.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 md:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand-2/10 blur-3xl transition-all group-hover:bg-brand-2/20" />

            <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand-2/20 text-brand-2">
              <Globe2 size={28} />
            </div>

            <h2 className="relative mb-4 text-2xl font-bold">Our Vision</h2>

            <p className="relative text-sm leading-8 text-muted-foreground md:text-base">
              We envision a connected community where everyone has opportunities
              to contribute, support important causes, and become part of
              positive social change.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
              <HeartHandshake size={16} />
              WHAT MATTERS TO US
            </div>

            <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              The Values Behind{" "}
              <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
                Our Work
              </span>
            </h2>

            <p className="text-base leading-7 text-muted-foreground md:text-lg">
              Every meaningful action starts with the right values. These
              principles guide the community we are building.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/5 blur-2xl transition-all duration-500 group-hover:bg-brand/15" />

                  <span className="absolute right-6 top-6 text-4xl font-bold text-muted-foreground/10">
                    0{index + 1}
                  </span>

                  <div
                    className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${value.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.8}
                      className={value.iconColor}
                    />
                  </div>

                  <h3 className="relative mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-brand">
                    {value.title}
                  </h3>

                  <p className="relative text-sm leading-7 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-r from-brand/10 via-card to-brand-2/10 px-6 py-12 text-center md:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <HandHeart size={38} className="mx-auto mb-5 text-brand" />

            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Be Part of Something{" "}
              <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
                Meaningful
              </span>
            </h2>

            <p className="mb-8 text-sm leading-7 text-muted-foreground md:text-base">
              Discover events, connect with people, and take a step toward
              creating positive change in your community.
            </p>

            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Discover Events
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
