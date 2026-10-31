"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2 } from "lucide-react";

const SubscriptionSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative pb-28 px-6 md:px-12 font-['Space_Grotesk'] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/speaker-bg.jpg" // 1st picture background path
          alt="Audience Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Gradient Overlay to match website theme */}
        <div className="absolute inset-0 bg-[#0A0A0E]/85 backdrop-blur-[2px]" />
      </div>

      {/* Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#F08C2F]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main Container Card (Inspired by 2nd image layout) */}
      <div className="relative z-10 max-w-4xl mx-auto bg-[#2A2823]/80 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 md:p-14 shadow-2xl text-center">
        
        {/* Eyebrow Text */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium tracking-wide mb-6 backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F08C2F] animate-pulse" />
          <span className="uppercase text-[#D6CDBD] tracking-widest font-semibold">
            Stay Connected
          </span>
        </div>

        {/* Heading from 2nd Image */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
          Subscribe to Local Cause <span className="text-[#F08C2F]">Alerts</span>
        </h2>

        {/* Description from 2nd Image */}
        <p className="text-[#D6CDBD] text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Get notified when new winter drives, blanket distributions, or emergency cleanups are organized in your neighborhood.
        </p>

        {/* Subscription Form */}
        {submitted ? (
          <div className="flex items-center justify-center gap-2 bg-[#00a884]/20 border border-[#00a884]/40 py-4 px-6 rounded-2xl max-w-md mx-auto text-[#00a884]">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-medium">Thank you! You have successfully subscribed.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full sm:flex-1 bg-black/40 border border-white/15 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#F08C2F] transition text-sm md:text-base backdrop-blur-md"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F08C2F] text-black font-semibold px-8 py-4 rounded-2xl hover:opacity-90 transition duration-300 shadow-lg shadow-[#F08C2F]/20 text-sm md:text-base cursor-pointer flex-shrink-0"
            >
              <Send className="w-4 h-4" />
              <span>Subscribe</span>
            </button>
          </form>
        )}

        {/* Footer Note from 2nd Image */}
        <p className="text-xs text-gray-400 mt-6 tracking-wide">
          No spam guaranteed. Unsubscribe at any time.
        </p>

      </div>
    </section>
  );
};

export default SubscriptionSection;