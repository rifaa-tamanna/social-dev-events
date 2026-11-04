"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import {
  CalendarDays,
  MapPin,
  Heart,
  Loader2,
  Users,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

interface JoinedEvent {
  _id?: string;
  joiningId: string;
  eventId: string;
  title: string;
  type?: string;
  date: string;
  location: string;
  thumbnail: string;
  description: string;
  organizerEmail?: string;
  joinedAt?: string;
  volunteersCount?: number;
}

interface JoinedEventsResponse {
  success: boolean;
  result: JoinedEvent[];
  message?: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

const JoinedEventPage = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const [events, setEvents] = useState<JoinedEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [leavingId, setLeavingId] = useState<string | null>(null);

  // Fetch Joined Events
  useEffect(() => {
    if (isPending) return;

    if (!user?.email) {
      setLoading(false);
      return;
    }

    let ignore = false;

    const fetchJoinedEvents = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/my-joined-events/${encodeURIComponent(user.email)}`,
        );

        const data: JoinedEventsResponse = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.message || "Failed to fetch joined events");
        }

        if (!ignore) {
          setEvents(data.result);
        }
      } catch (error: unknown) {
        if (!ignore) {
          const errorMessage =
            error instanceof Error ? error.message : "Something went wrong!";

          toast.error(errorMessage, {
            position: "top-center",
          });
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchJoinedEvents();

    return () => {
      ignore = true;
    };
  }, [user?.email, isPending]);

  // Leave Event
  const handleLeaveEvent = async (event: JoinedEvent) => {
    if (!user?.email) return;

    try {
      setLeavingId(event.eventId);
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/joining`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: event.eventId,
          email: user.email,
        }),
      });

      const resultData: ApiResponse = await res.json();

      if (!res.ok || !resultData.success) {
        throw new Error(resultData.message || "Failed to leave event");
      }

      setEvents((prev) =>
        prev.filter((item) => item.joiningId !== event.joiningId),
      );

      toast.success("You have left the event successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong!";

      toast.error(errorMessage, {
        position: "top-center",
      });
    } finally {
      setLeavingId(null);
    }
  };

  // Loading State
  if (loading || isPending) {
    return (
      <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-background px-6 py-24 text-foreground">
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-brand/10 blur-[120px]" />

        <div className="relative text-center">
          <Loader2 className="mx-auto mb-5 h-10 w-10 animate-spin text-brand" />

          <p className="text-sm text-muted-foreground">
            Loading your joined events...
          </p>
        </div>
      </main>
    );
  }

  // Login Check
  if (!user?.email) {
    return (
      <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-background px-6 py-24 text-foreground">
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-brand-2/10 blur-[120px]" />

        <div className="relative w-full max-w-lg rounded-3xl border border-border bg-subtle/50 px-7 py-14 text-center shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-2/30 bg-brand-2/10">
            <Heart className="h-8 w-8 text-brand-2" />
          </div>

          <h2 className="text-2xl font-bold text-foreground">
            Please Login First
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
            Login to see the events you have joined and continue making a
            difference in your community.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex-1 overflow-hidden bg-background text-foreground">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-brand/[0.055] blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 top-60 h-[450px] w-[450px] rounded-full bg-brand-2/[0.07] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-12 sm:px-10 sm:pt-16">
        {/* Page Header */}
        <section className="border-b border-border pb-9 sm:pb-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-2/25 bg-subtle/70 px-4 py-2 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-brand" />

                <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-muted-foreground">
                  My Activities
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                My Joined{" "}
                <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
                  Events
                </span>
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                Manage the events you have joined and continue making a positive
                difference in your community.
              </p>
            </div>

            {/* Event Count */}
            <div className="flex w-fit items-center gap-4 rounded-2xl border border-border bg-subtle/70 px-5 py-4 shadow-lg shadow-black/10 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10">
                <Users className="h-5 w-5 text-brand" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {events.length}
                </h3>

                <p className="text-xs text-muted-foreground">
                  Events Joined
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="pt-10">
          {events.length === 0 ? (
            /* Empty State */
            <div className="flex min-h-[370px] items-center justify-center py-5">
              <div className="relative w-full max-w-[505px] overflow-hidden rounded-3xl border border-border bg-subtle/50 px-6 py-14 text-center shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-12">
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-2/10 blur-[70px]" />

                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-brand/10 blur-[70px]" />

                <div className="relative">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand/25 bg-brand/[0.08] shadow-lg shadow-brand/5">
                    <ShieldCheck className="h-8 w-8 text-brand" />
                  </div>

                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                    No Events Joined Yet
                  </h2>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                    You haven't joined any events yet. Explore upcoming events
                    and become part of something meaningful.
                  </p>

                  <Link
                    href="/events"
                    className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-2 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-2/25"
                  >
                    <Sparkles className="h-4 w-4" />
                    Explore Events
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* Joined Events Grid */
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <div
                  key={event.joiningId}
                  className="group overflow-hidden rounded-2xl border border-border bg-subtle/50 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/40 hover:bg-subtle/80"
                >
                  {/* Event Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={event.thumbnail}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-black/10" />

                    {/* Event Type */}
                    <span className="absolute left-4 top-4 rounded-full border border-foreground/20 bg-background/60 px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur-xl">
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                      {event.type || "Community Event"}
                    </span>
                  </div>

                  {/* Event Information */}
                  <div className="p-6">
                    <h3 className="line-clamp-1 text-xl font-bold text-foreground transition-colors group-hover:text-brand">
                      {event.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground/80">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="mt-5 space-y-3 border-t border-border pt-5">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10">
                          <CalendarDays className="h-4 w-4 text-brand" />
                        </div>

                        <span>
                          {event.date}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-2/10">
                          <MapPin className="h-4 w-4 text-brand-2" />
                        </div>

                        <span>
                          {event.location}
                        </span>
                      </div>
                    </div>

                    {/* Leave Button */}
                    <button
                      onClick={() => handleLeaveEvent(event)}
                      disabled={leavingId === event.eventId}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-destructive/20 bg-destructive/[0.07] px-5 py-3 text-sm font-bold text-destructive backdrop-blur-xl transition-all duration-300 hover:border-destructive/40 hover:bg-destructive/15 hover:text-destructive disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {leavingId === event.eventId ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Leaving...
                        </>
                      ) : (
                        <>
                          <Heart className="h-4 w-4" />
                          Leave Event
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default JoinedEventPage;



