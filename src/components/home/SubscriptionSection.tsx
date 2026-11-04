"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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
    <section className="relative min-h-[600px] flex items-center justify-center pb-0 px-6 md:px-12 overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/speakers/speaker-bg.jpg"
          alt="Audience Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Theme-aware Overlay */}
        <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
      </div>

      {/* Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main Container Card */}
      <div className="relative z-10 max-w-4xl mx-auto bg-card/85 text-card-foreground backdrop-blur-2xl border border-border rounded-3xl p-8 md:p-14 shadow-2xl text-center transition-colors duration-300">
        {/* Eyebrow Text */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-xs md:text-sm font-medium tracking-wide mb-6 backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />

          <span className="uppercase text-muted-foreground tracking-widest font-semibold">
            Stay Connected
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          Subscribe to Local{" "}
          <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
            Cause Alerts
          </span>
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Get notified when new winter drives, blanket distributions, or
          emergency cleanups are organized in your neighborhood.
        </p>

        {/* Subscription Form */}
        {submitted ? (
          <div className="flex items-center justify-center gap-2 bg-success/15 border border-success/40 py-4 px-6 rounded-2xl max-w-md mx-auto text-success">
            <CheckCircle2 className="w-5 h-5" />

            <span className="text-sm font-medium">
              Thank you! You have successfully subscribed.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full sm:flex-1 bg-background text-foreground border border-input rounded-2xl px-5 py-4 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-brand transition text-sm md:text-base backdrop-blur-md"
            />

            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Subscribe
            </Link>
          </form>
        )}

        {/* Footer Note */}
        <p className="text-xs text-muted-foreground/80 mt-6 tracking-wide">
          No spam guaranteed. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default SubscriptionSection;
