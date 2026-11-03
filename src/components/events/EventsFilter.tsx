
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  User,
  ArrowRight,
  Sparkles,
  Search,
  Filter,
  RotateCcw,
} from "lucide-react";

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

interface EventsFilterProps {
  events: Event[];
}

const categories = [
  "All",
  "Donation",
  "Cleanup",
  "Plantation",
  "Winter Relief",
  "Food Drive",
  "Health Camp",
  "Education",
];

const getTodayDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const EventsFilter = ({ events }: EventsFilterProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const today = getTodayDate();

  // Only show upcoming events
  const upcomingEvents = useMemo(() => {
    return events.filter((event) => {
      return event.date && event.date >= today;
    });
  }, [events, today]);

  // Search and category filtering
  const filteredEvents = useMemo(() => {
    return upcomingEvents.filter((event) => {
      const matchesCategory =
        activeCategory === "All" ||
        event.type?.toLowerCase() === activeCategory.toLowerCase();

      const search = searchTerm.trim().toLowerCase();

      const matchesSearch =
        !search ||
        event.title?.toLowerCase().includes(search) ||
        event.location?.toLowerCase().includes(search) ||
        event.description?.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [upcomingEvents, activeCategory, searchTerm]);

  const resetFilters = () => {
    setActiveCategory("All");
    setSearchTerm("");
  };

  return (
    <div className="font-['Space_Grotesk']">

      {/* Filter and Search Section */}
      <div className="mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#F08C2F] text-black border-[#F08C2F] shadow-lg shadow-[#F08C2F]/10"
                  : "bg-white/[0.03] text-[#D6CDBD] border-white/10 hover:border-[#F08C2F]/50 hover:text-[#F08C2F]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:max-w-[320px] shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D6CDBD]/60" />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search events..."
            aria-label="Search events"
            className="w-full h-11 pl-11 pr-4 rounded-full bg-[#121218] border border-white/15 text-white text-sm outline-none placeholder:text-[#D6CDBD]/50 focus:border-[#F08C2F] focus:ring-2 focus:ring-[#F08C2F]/10 transition-all"
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-[#D6CDBD]/70">
          Showing{" "}
          <span className="text-[#F08C2F] font-semibold">
            {filteredEvents.length}
          </span>{" "}
          of {upcomingEvents.length} upcoming events
        </p>

        {(activeCategory !== "All" || searchTerm) && (
          <button
            type="button"
            onClick={resetFilters}
            className="flex items-center gap-2 text-sm text-[#D6CDBD] hover:text-[#F08C2F] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Filters
          </button>
        )}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div
              key={event._id || `${event.title}-${index}`}
              className="bg-[#121218]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#F08C2F]/40 transition-all duration-300"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative w-full h-52 overflow-hidden bg-black/40">
                  <Image
                    src={
                      event.thumbnail ||
                      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8"
                    }
                    alt={event.title || "Event Image"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0E]/80 backdrop-blur-md border border-white/15 text-xs font-medium text-[#F08C2F]">
                    <Sparkles className="w-3 h-3" />
                    <span>{event.type || "Community"}</span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0A0E]/85 backdrop-blur-md border border-white/10 text-xs text-[#D6CDBD]">
                    <Calendar className="w-3.5 h-3.5 text-[#8E54DF]" />
                    <span>{event.date || "Upcoming"}</span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-[#F08C2F] transition-colors line-clamp-1">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-[#D6CDBD] mb-2">
                    <MapPin className="w-4 h-4 text-[#8E54DF] shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>

                  <p className="text-gray-400 text-sm line-clamp-2 mb-6">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-0 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs text-[#D6CDBD] pt-4 border-t border-white/10">
                  <User className="w-3.5 h-3.5 text-[#F08C2F]" />
                  <span className="truncate">
                    {event.organizerEmail || "Community Organizer"}
                  </span>
                </div>

                <Link
                  href={`/events/${event._id || "#"}`}
                  className="w-full py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-[#F08C2F] to-[#8E54DF] hover:opacity-90 transition duration-300 shadow-lg shadow-[#F08C2F]/10 flex items-center justify-center gap-2 text-sm text-center"
                >
                  <span>View Event</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          /* Empty State */
          <div className="col-span-full min-h-[330px] flex flex-col items-center justify-center text-center px-5 py-12 rounded-3xl border border-dashed border-white/10 bg-white/[0.015]">

            <div className="w-14 h-14 rounded-2xl bg-white/[0.04] flex items-center justify-center mb-5">
              <Filter className="w-6 h-6 text-[#F08C2F]" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              No Upcoming Events Found
            </h3>

            <p className="text-sm text-[#D6CDBD]/60 max-w-md mb-7">
              There are currently no upcoming events matching your selected
              filter or search term.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-xl border border-white/15 text-white text-sm hover:bg-white/5 transition-all"
              >
                Reset Filters
              </button>

              <Link
                href="/create-event"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F08C2F] to-[#8E54DF] text-black font-semibold text-sm hover:opacity-90 transition-all"
              >
                Create New Event
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsFilter;
