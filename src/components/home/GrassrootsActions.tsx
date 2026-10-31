import { Users, CalendarCheck, ShieldCheck, Compass } from "lucide-react";

const GrassrootsActions = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-[#F08C2F]" />,
      iconBg: "bg-[#F08C2F]/15 border-[#F08C2F]/30",
      title: "Community-Led Drives",
      description:
        "Every citizen can organize cleanups, winter drives, and food distributions in their local area in minutes.",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-[#884AE9]" />,
      iconBg: "bg-[#884AE9]/15 border-[#884AE9]/30",
      title: "One-Click Participation",
      description:
        "Join verified social initiatives with a single click and coordinate directly with local volunteer leaders.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00a884]" />,
      iconBg: "bg-[#00a884]/15 border-[#00a884]/30",
      title: "Creator Controls",
      description:
        "Manage, update, and track participation for your own initiatives with built-in creator authorization.",
    },
    {
      icon: <Compass className="w-6 h-6 text-[#F08C2F]" />,
      iconBg: "bg-[#F08C2F]/15 border-[#F08C2F]/30",
      title: "Upcoming Only Discovery",
      description:
        "Strict future-date filters guarantee you will always discover upcoming active initiatives that need volunteers.",
    },
  ];

  return (
    <section className="relative bg-[#0A0A0E] text-white py-24 px-6 md:px-12 font-['Space_Grotesk'] overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F08C2F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#884AE9]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium tracking-wide mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#F08C2F] animate-pulse" />
            <span className="uppercase text-[#D6CDBD] tracking-widest font-semibold">
              Platform Features
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Built for Grassroots Action
          </h2>

          <p className="text-[#D6CDBD] text-sm md:text-base leading-relaxed">
            A frictionless platform connecting compassionate citizens with direct local community initiatives.
          </p>
        </div>

        {/* Custom #2A2823 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#2A2823]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-[#2A2823] hover:border-[#F08C2F]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(240,140,47,0.15)] flex flex-col justify-between"
            >
              <div>
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 ${feature.iconBg}`}>
                  {feature.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#D6CDBD] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Line */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 group-hover:text-white transition-colors">
                <span>Learn more</span>
                <span className="text-[#F08C2F] transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GrassrootsActions;