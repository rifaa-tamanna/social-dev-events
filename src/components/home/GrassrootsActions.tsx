import {
  Users,
  CalendarCheck,
  ShieldCheck,
  Compass,
} from "lucide-react";

const GrassrootsActions = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-brand" />,
      iconBg: "bg-brand/15 border-brand/30",
      title: "Community-Led Drives",
      description:
        "Every citizen can organize cleanups, winter drives, and food distributions in their local area in minutes.",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-brand-2" />,
      iconBg: "bg-brand-2/15 border-brand-2/30",
      title: "One-Click Participation",
      description:
        "Join verified social initiatives with a single click and coordinate directly with local volunteer leaders.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-success" />,
      iconBg: "bg-success/15 border-success/30",
      title: "Creator Controls",
      description:
        "Manage, update, and track participation for your own initiatives with built-in creator authorization.",
    },
    {
      icon: <Compass className="w-6 h-6 text-brand" />,
      iconBg: "bg-brand/15 border-brand/30",
      title: "Upcoming Only Discovery",
      description:
        "Strict future-date filters guarantee you will always discover upcoming active initiatives that need volunteers.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background text-foreground py-24 px-6 md:px-12 transition-colors duration-300">

      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-2/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-xs md:text-sm font-medium tracking-wide mb-4 backdrop-blur-md">

            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />

            <span className="uppercase text-muted-foreground tracking-widest font-semibold">
              Platform Features
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Built for Grassroots {" "}
            <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
              Action
            </span>
            
          </h2>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            A frictionless platform connecting compassionate citizens with direct local community initiatives.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card/80 text-card-foreground backdrop-blur-xl border border-border rounded-2xl p-6 transition-all duration-300 hover:bg-card hover:border-brand/50 hover:shadow-xl flex flex-col justify-between"
            >
              <div>

                {/* Icon Box */}
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 ${feature.iconBg}`}
                >
                  {feature.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-card-foreground mb-3 tracking-wide">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground/80 group-hover:text-foreground transition-colors">

                <span>Learn more</span>

                <span className="text-brand transform translate-x-0 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default GrassrootsActions;
