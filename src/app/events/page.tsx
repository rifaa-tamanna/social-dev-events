import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import EventsFilter from "@/components/events/EventsFilter";

interface Event {
  _id?: string;
  title: string;
  type: string;
  date: string;
  location: string;
  thumbnail: string;
  description: string;
  organizerEmail?: string;
}

export const dynamic = "force-dynamic";

const AllEventsPage = async () => {
  let events: Event[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }

    const data = await res.json();
    events = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch events:", error);
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-6 md:px-12 relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-2/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-subtle border border-border text-xs md:text-sm font-medium tracking-wide mb-4 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />

              <span className="uppercase text-muted-foreground tracking-widest font-semibold">
                Upcoming Initiatives
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-2">
              Recent Upcoming Events
            </h1>

            <p className="text-muted-foreground text-sm md:text-base">
              Latest community drives scheduled in your city. Get involved today.
            </p>
          </div>

          <Link
            href="/create-event"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-2 transition-colors mt-4 md:mt-0"
          >
            <span>Create Event</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter and Search */}
        <EventsFilter events={events} />

      </div>
    </div>
  );
};

export default AllEventsPage;
