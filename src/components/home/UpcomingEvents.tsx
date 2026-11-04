import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react";

interface Event {
  _id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  thumbnail: string;
  description: string;
  organizerEmail?: string;
}

const UpcomingEvents = async () => {
  let events: Event[] = [];

  try {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/recent-upcoming-events`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch recent events");
    }

    const data = await res.json();
    events = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Upcoming Events Error:", error);
  }

  return (
    <section className="relative bg-background py-20 px-6 md:px-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-brand/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-subtle border border-border text-xs font-semibold tracking-widest text-muted-foreground mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand" />
              UPCOMING INITIATIVES
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-3">
              Recent Upcoming {" "}
              <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
                Events
              </span>
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base">
              Latest community drives scheduled in your city. Get involved
              today.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-2 transition-colors shrink-0"
          >
            See All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Events Grid */}
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-card border border-border rounded-3xl overflow-hidden group hover:border-brand/40 transition-all duration-300 flex flex-col"
              >
                {/* Event Image */}
                <div className="relative w-full h-64 overflow-hidden bg-muted">
                  <Image
                    src={
                      event.thumbnail ||
                      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8"
                    }
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Category */}
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur-md border border-border text-xs font-medium text-brand">
                    <Sparkles className="w-3.5 h-3.5" />
                    {event.type}
                  </div>

                  {/* Date */}
                  <div className="absolute bottom-4 left-5 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-background/85 backdrop-blur-md border border-border text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-brand-2" />
                    {event.date}
                  </div>
                </div>

                {/* Event Information */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-brand transition-colors line-clamp-1">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 text-brand-2 shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>

                  <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2 mb-6">
                    {event.description}
                  </p>

                  <div className="mt-auto pt-5 border-t border-border">
                    <Link
                      href={`/events/${event._id}`}
                      className="w-full py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-brand to-brand-2 hover:opacity-90 transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      View Event
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="min-h-[280px] rounded-3xl border border-dashed border-border bg-subtle/40 flex flex-col items-center justify-center text-center px-5">
            <Calendar className="w-10 h-10 text-brand mb-4" />

            <h3 className="text-xl font-bold text-foreground mb-2">
              No Upcoming Events Yet
            </h3>

            <p className="text-sm text-muted-foreground/60 mb-6">
              Be the first to create a community initiative!
            </p>

            <Link
              href="/create-event"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand to-brand-2 text-black font-semibold text-sm hover:opacity-90 transition-all"
            >
              Create an Event
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
