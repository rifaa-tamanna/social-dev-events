import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, User, ArrowRight, Sparkles } from "lucide-react";

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

const AllEventsPage = async () => {
  const res = await fetch('http://localhost:5000/events', {
    cache: 'no-store',
  });
  const events: Event[] = await res.json();

  return (
    <div className="min-h-screen bg-[#0A0A0E] text-white py-16 px-6 md:px-12 font-['Space_Grotesk'] relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#F08C2E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8E54DF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium tracking-wide mb-4 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F08C2E] animate-pulse" />
              <span className="uppercase text-[#D6CDBD] tracking-widest font-semibold">
                Upcoming Initiatives
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
              Recent Upcoming Events
            </h1>
            <p className="text-[#D6CDBD] text-sm md:text-base">
              Latest community drives scheduled in your city. Get involved today.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F08C2E] hover:text-[#8E54DF] transition-colors mt-4 md:mt-0"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Events Grid Card Layout (Matching Image Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events && events.length > 0 ? (
            events.map((event, index) => (
              <div
                key={index}
                className="bg-[#121218]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#F08C2E]/40 transition-all duration-300"
              >
                <div>
                  {/* Thumbnail Image Container */}
                  <div className="relative w-full h-52 overflow-hidden bg-black/40">
                    <Image
                      src={event.thumbnail || "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8"}
                      alt={event.title || "Event Image"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Type Badge on Top of Image */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0E]/70 backdrop-blur-md border border-white/15 text-xs font-medium text-[#F08C2E]">
                      <Sparkles className="w-3 h-3 text-[#F08C2E]" />
                      <span>{event.type || "Community"}</span>
                    </div>

                    {/* Date Badge on Bottom Left of Image */}
                    <div className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0A0A0E]/80 backdrop-blur-md border border-white/10 text-xs text-[#D6CDBD]">
                      <Calendar className="w-3.5 h-3.5 text-[#8E54DF]" />
                      <span>{event.date || "Upcoming"}</span>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-[#F08C2E] transition-colors">
                      {event.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-[#D6CDBD] mb-2">
                      <MapPin className="w-4 h-4 text-[#8E54DF] flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>

                    {/* Description Snippet */}
                    <p className="text-gray-400 text-sm line-clamp-2 mb-6">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Organizer & View Event Button */}
                <div className="px-6 pb-6 pt-0 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#D6CDBD] pt-4 border-t border-white/10">
                    <User className="w-3.5 h-3.5 text-[#F08C2E]" />
                    <span className="truncate">{event.organizerEmail || "Community Organizer"}</span>
                  </div>

                  <Link
                    href={`/events/${event._id || '#'} `}
                    className="w-full py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-[#F08C2E] to-[#8E54DF] hover:opacity-90 transition duration-300 shadow-lg shadow-[#F08C2E]/10 flex items-center justify-center gap-2 text-sm text-center"
                  >
                    <span>View Event</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16 text-[#D6CDBD]">
              No upcoming events found. Create one to get started!
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AllEventsPage;