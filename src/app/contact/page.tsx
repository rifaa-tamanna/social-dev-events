import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Have a question? Send us an email.",
    value: "YOUR_EMAIL@example.com",
    href: "mailto:YOUR_EMAIL@example.com",
    color: "text-blue-500",
    bg: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: MessageCircle,
    title: "Let's Talk",
    description: "We would love to hear your thoughts.",
    value: "Send us a message",
    href: "#contact-form",
    color: "text-purple-500",
    bg: "from-purple-500/20 to-violet-500/10",
  },
  {
    icon: Clock,
    title: "Our Response",
    description: "We aim to get back to you as soon as possible.",
    value: "We are here to help",
    href: "#contact-form",
    color: "text-emerald-500",
    bg: "from-emerald-500/20 to-teal-500/10",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-20 text-foreground transition-colors duration-300 md:px-12 lg:px-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-brand-2/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <section className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
            <Sparkles size={16} />
            GET IN TOUCH
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>

          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            Have a question, suggestion, or idea? We would love to hear from
            you. Reach out and let's make something meaningful happen together.
          </p>
        </section>
        
        {/* Contact form and side information */}
        <section className="grid items-start gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Form */}
          <div
            id="contact-form"
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm md:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl" />

            <div className="relative mb-8">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                Send Us a Message
              </h2>

              <p className="text-sm leading-7 text-muted-foreground">
                Fill out the form below. We will be happy to hear from you.
              </p>
            </div>

            <div className="relative">
              <ContactForm />
            </div>
          </div>

          {/* Side card */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/10 via-card to-brand-2/10 p-8">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-lg shadow-brand/20">
                  <MessageCircle size={27} />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  Every Great Change Starts with a Conversation
                </h3>

                <p className="mb-7 text-sm leading-7 text-muted-foreground">
                  Whether you want to organize an event, join a cause, or share
                  an idea, your voice matters to our community.
                </p>

                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 font-semibold text-brand transition-all hover:gap-3"
                >
                  Explore Events
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="mb-4 flex items-center gap-3">
                <MapPin size={21} className="text-brand" />
                <h3 className="text-lg font-bold">Our Community</h3>
              </div>

              <p className="text-sm leading-7 text-muted-foreground">
                We believe in bringing people together to create positive
                change, one meaningful action at a time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
