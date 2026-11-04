"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Social Development Events?",
    answer:
      "Social Development Events is a community-driven platform that connects people with meaningful social initiatives. You can discover upcoming events, participate in community activities, and contribute to positive changes in society.",
  },
  {
    question: "How can I participate in a social event?",
    answer:
      "Simply explore the Upcoming Events section, choose an initiative that interests you, and click the Join button. Once you join, you can stay connected with the event and its community.",
  },
  {
    question: "Can I create my own community event?",
    answer:
      "Absolutely! Registered users can create their own social initiatives, including community cleanups, winter clothing drives, food distributions, and other volunteering activities.",
  },
  {
    question: "Is there any cost to join an event?",
    answer:
      "Participation depends on the individual event. Many community initiatives are free to join. If an event requires any contribution, its details should be clearly mentioned in the event information.",
  },
  {
    question: "How can I manage an event I created?",
    answer:
      "You can visit the Manage Events section from your profile to access your initiatives, update event information, and track participation using your creator permissions.",
  },
  {
    question: "How do I find upcoming events near me?",
    answer:
      "Visit the Upcoming Events page to discover active initiatives. You can explore available event information and choose activities that match your interests and community goals.",
  },
  {
    question: "Can I leave an event after joining?",
    answer:
      "Your participation is connected to your account. For changes to your participation, check the Joined Events section and follow the available options for that event.",
  },
  {
    question: "How can I stay updated about new initiatives?",
    answer:
      "You can subscribe to our cause alerts to receive updates about new community activities, winter drives, food distributions, and other social initiatives.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-background text-foreground py-24 px-6 md:px-12 transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-brand/10 blur-[130px] pointer-events-none" />

      <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-brand-2/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border mb-5">
            <HelpCircle className="w-4 h-4 text-brand" />

            <span className="text-xs md:text-sm uppercase tracking-widest font-semibold text-muted-foreground">
              Got Questions?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Everything you need to know about discovering events, joining
            initiatives, and making a difference in your community.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Side */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="relative overflow-hidden bg-card border border-border rounded-3xl p-8 shadow-lg">
              {/* Decorative Gradient */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-brand/15 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand-2/20 border border-brand/20 mb-6">
                  <MessageCircle className="w-7 h-7 text-brand" />
                </div>

                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  Still have questions?
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-7">
                  We are here to help you get started and become part of
                  something meaningful.
                </p>

                <a
                  href="mailto:support@example.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand to-brand-2 text-white font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-brand/20"
                >
                  Contact Support
                  <MessageCircle className="w-4 h-4" />
                </a>

                <p className="text-xs text-muted-foreground mt-5">
                  Together, we can create positive change.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-card border-brand/40 shadow-lg shadow-brand/5"
                      : "bg-card/70 border-border hover:border-brand/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`hidden sm:flex shrink-0 w-9 h-9 items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                          isOpen
                            ? "bg-brand text-black"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-sm md:text-base font-semibold transition-colors ${
                          isOpen ? "text-brand" : "text-card-foreground"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-brand/15 text-brand rotate-180"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-6 pb-6 pt-0">
                        <div className="sm:ml-[52px] border-l-2 border-brand/30 pl-4">
                          <p className="text-sm text-muted-foreground leading-7">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
