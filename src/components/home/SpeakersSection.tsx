"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const SpeakersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const speakers = [
    {
      name: "Timothy Wallwork",
      role: "Event Speaker",
      image: "/speakers/speaker-7.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Brooklyn Simmons",
      role: "Event Speaker",
      image: "/speakers/speaker-2.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Ronald Richards",
      role: "Event Speaker",
      image: "/speakers/speaker-3.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Dianne Russell",
      role: "Community Leader",
      image: "/speakers/speaker-4.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Dianne Russell",
      role: "Community Leader",
      image: "/speakers/speaker-5.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Dianne Russell",
      role: "Community Leader",
      image: "/speakers/speaker-6.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Dianne Russell",
      role: "Community Leader",
      image: "/speakers/speaker-7.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Dianne Russell",
      role: "Community Leader",
      image: "/speakers/speaker-3.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, speakers.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <section className="relative bg-[#0A0A0E] text-white py-24 px-6 md:px-12 font-['Space_Grotesk'] overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#884AE9]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium tracking-wide mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#F08C2F] animate-pulse" />
              <span className="uppercase text-[#D6CDBD] tracking-widest font-semibold">
                Featured Speakers
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Meet Our Change Makers
            </h2>
          </div>
          <p className="text-[#D6CDBD] text-sm md:text-base max-w-md mt-4 md:mt-0">
            Learn from passionate leaders, community organizers, and social innovators driving real impact.
          </p>
        </div>

        {/* Carousel Grid Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 270}px)` }}
          >
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="group relative min-w-[280px] sm:min-w-[300px] h-[420px] rounded-3xl overflow-hidden bg-[#2A2823] border border-white/10 shadow-2xl flex-shrink-0"
              >
                {/* Speaker Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Glassmorphism Info Overlay - Filled across card bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4 pt-6 bg-gradient-to-t from-[#0A0A0E]/90 via-[#0A0A0E]/60 to-transparent backdrop-blur-md border-t border-white/10 flex flex-col items-center text-center transition-all duration-300">
                  <h3 className="text-lg font-bold text-[#F08C2F] tracking-wide">
                    {speaker.name}
                  </h3>
                  <p className="text-xs text-[#D6CDBD] tracking-wider uppercase mt-0.5">
                    {speaker.role}
                  </p>

                  {/* Social Icons Container with Gradient (#2A2823 to #D6CDBD) and Hover Glow */}
                  <div className="flex items-center gap-3 mt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300 overflow-hidden">
                    <a
                      href={speaker.socials.linkedin}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2A2823] to-[#D6CDBD]/40 border border-white/20 hover:border-[#F08C2F] hover:bg-[#F08C2F]/20 flex items-center justify-center text-white transition-all duration-200"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        {" "}
                        <FaLinkedinIn />{" "}
                      </div>
                    </a>
                    <a
                      href={speaker.socials.twitter}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2A2823] to-[#D6CDBD]/40 border border-white/20 hover:border-[#F08C2F] hover:bg-[#F08C2F]/20 flex items-center justify-center text-white transition-all duration-200"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        {" "}
                        <FaXTwitter />{" "}
                      </div>
                    </a>
                    <a
                      href={speaker.socials.instagram}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2A2823] to-[#D6CDBD]/40 border border-white/20 hover:border-[#F08C2F] hover:bg-[#F08C2F]/20 flex items-center justify-center text-white transition-all duration-200"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        {" "}
                        <FaInstagram />{" "}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Bottom Control Bar & Progress Indicator */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-white/10">
          <div className="flex items-center gap-4 w-1/3">
            <span className="text-sm font-semibold text-gray-400">
              0{currentIndex + 1}
            </span>
            <div className="w-full max-w-[200px] h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#F08C2F] to-[#884AE9] transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / speakers.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
