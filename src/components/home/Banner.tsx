import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlusCircle } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative bg-[#0A0A0E] text-white pt-16 md:pt-24 pb-16 px-6 md:px-12 overflow-hidden font-['Space_Grotesk']">
      {/* Decorative Glow Background Effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#F08C2F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#884AE9]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: 3D Community Illustration */}
        <div className="relative flex justify-center items-center order-2 lg:order-1">
          <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
            <Image
              src="/connected-community-hub.png"
              alt="3D Community Illustration"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(136,74,233,0.3)]"
              priority
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start gap-6 order-1 lg:order-2">
          {/* Eyebrow Text Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium tracking-wide">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F08C2F] animate-pulse" />
            <span className="uppercase text-gray-300">
              A COMMUNITY THAT CARES
            </span>
          </div>

          {/* Headline with Gradient Accent */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            Together, We Make a{" "}
            <span className="bg-gradient-to-r from-[#F08C2F] via-[#E86D3A] to-[#884AE9] bg-clip-text text-transparent">
              Difference.
            </span>
          </h1>

          {/* Main Description */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            Discover meaningful events, connect with passionate people, and turn
            small actions into powerful social change. Your next opportunity to
            inspire starts here.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary Button */}
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-black bg-gradient-to-r from-[#F08C2F] to-[#884AE9] hover:opacity-95 transition duration-300 shadow-lg shadow-[#F08C2F]/20"
            >
              <span>Explore Upcoming Events</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/create-event"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-white border border-[#884AE9] hover:bg-[#884AE9]/10 transition duration-300"
            >
              <span>Create an Event</span>
              <PlusCircle className="w-4 h-4 text-[#884AE9]" />
            </Link>
          </div>

          {/* Supporting Text */}
          <div className="pt-4 border-t border-white/10 w-full">
            <p className="text-xs md:text-sm tracking-wider uppercase text-gray-400 font-medium">
              Connect <span className="text-[#F08C2F] mx-1.5">•</span>{" "}
              Collaborate <span className="text-[#884AE9] mx-1.5">•</span>{" "}
              Create Impact
            </p>
          </div>
        </div>
      </div>

      {/* Centered Stats Counter Section */}
      {/* Centered Stats Counter Section */}
      <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
        {/* Stat 1 */}
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs md:text-sm tracking-wider mb-1">
            Active Volunteers
          </span>
          <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-[#D6CDBD] bg-clip-text text-transparent">
            1,450+
          </span>
        </div>

        {/* Divider for desktop */}
        <div className="hidden md:block w-px h-10 bg-white/10" />

        {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs md:text-sm tracking-wider mb-1">
            Events Completed
          </span>
          <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F08C2F] to-[#E86D3A] bg-clip-text text-transparent">
            180+
          </span>
        </div>

        {/* Divider for desktop */}
        <div className="hidden md:block w-px h-10 bg-white/10" />

        {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs md:text-sm tracking-wider mb-1">
            Lives Impacted
          </span>
          <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#884AE9] to-purple-400 bg-clip-text text-transparent">
            24,000+
          </span>
        </div>

        {/* Divider for desktop */}
        <div className="hidden md:block w-px h-10 bg-white/10" />

        {/* Stat 4 */}
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs md:text-sm tracking-wider mb-1">
            Community Driven
          </span>
          <div className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl font-bold text-white">
              100%
            </span>
            <div className="flex -space-x-3 overflow-hidden">
              {/* Avatar 1 */}
              <div className="relative h-10 w-10 rounded-full ring-2 ring-[#0A0A0E] overflow-hidden bg-[#F08C2F]">
                <Image
                  src="/pic-1.png"
                  alt="Community Volunteer 1"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Avatar 2 */}
              <div className="relative h-10 w-10 rounded-full ring-2 ring-[#0A0A0E] overflow-hidden bg-[#884AE9]">
                <Image
                  src="/pic-2.png"
                  alt="Community Volunteer 2"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Avatar 3 */}
              <div className="relative h-10 w-10 rounded-full ring-2 ring-[#0A0A0E] overflow-hidden bg-[#884AE9]">
                <Image
                  src="/pic-3.png"
                  alt="Community Volunteer 3"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Avatar 4 */}
              <div className="relative h-10 w-10 rounded-full ring-2 ring-[#0A0A0E] overflow-hidden bg-gray-600">
                <Image
                  src="/pic-4.png"
                  alt="Community Volunteer 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
