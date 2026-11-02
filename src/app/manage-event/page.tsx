import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  MapPin, 
  User, 
  PlusCircle, 
  Eye, 
  Edit3, 
  Trash2, 
  Sparkles, 
  ShieldAlert 
} from "lucide-react";

interface EventItem {
  _id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  thumbnail: string;
  description: string;
  organizerEmail?: string;
}

// Always render this page per request so a freshly published event
// shows up immediately instead of being served from a prerendered page.
export const dynamic = "force-dynamic";

const ManageEventPage = async () => {
  // ==================== 1. AUTH & DATA FETCHING SECTION ====================
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  // Fetching user specific created events from backend API
  let createEvent: EventItem[] = [];
  try {
    if (user?.email) {
      const res = await fetch(
        `http://localhost:5000/my-events/${encodeURIComponent(user.email)}`,
        {
          cache: "no-store",
        },
      );
      const data = await res.json();
      createEvent = Array.isArray(data) ? data : [];
    }
  } catch (error) {
    console.error("Failed to fetch user events:", error);
  }

  return (
    <div className="min-h-screen bg-[#0A0A0E] text-white py-12 px-6 md:px-12 font-['Space_Grotesk'] relative overflow-hidden">
      
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#F08C2E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8E54DF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ==================== 2. HEADER SECTION ==================== */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          <div>
            {/* Dashboard Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium tracking-wide mb-4 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#F08C2E]" />
              <span className="uppercase text-[#D6CDBD] tracking-widest font-semibold">
                Organizer Dashboard
              </span>
            </div>

            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
              Manage My Events
            </h1>

            {/* Subtitle Description */}
            <p className="text-[#D6CDBD] text-sm md:text-base max-w-2xl">
              View, edit, and manage the social drives you have published. Only you have permission to edit or delete your created initiatives.
            </p>
          </div>

          {/* Create New Event Button */}
          <Link
            href="/create-event"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F08C2F] to-[#884AE9] text-white font-bold px-6 py-3.5 rounded-xl hover:opacity-90 transition duration-300 shadow-lg shadow-[#00a884]/20 text-sm sm:text-base flex-shrink-0 w-fit"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Create New Event</span>
          </Link>
        </div>

        {/* ==================== 3. EVENTS GRID SECTION ==================== */}
        {createEvent && createEvent.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {createEvent.map((event) => (
              <div
                key={event._id}
                className="bg-[#121218]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#F08C2E]/40 transition-all duration-300"
              >
                <div>
                  {/* Thumbnail Image Container */}
                  <div className="relative w-full h-52 overflow-hidden bg-black/40">
                    <Image
                      src={event.thumbnail || "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8"}
                      alt={event.title || "Event Banner"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Event Type Badge on Top */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0E]/75 backdrop-blur-md border border-white/15 text-xs font-medium text-[#00a884]">
                      <span className="w-2 h-2 rounded-full bg-[#00a884] animate-pulse" />
                      <span>{event.type || "Community Drive"}</span>
                    </div>

                    {/* Event Date Badge on Bottom Left */}
                    <div className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0A0A0E]/85 backdrop-blur-md border border-white/10 text-xs text-[#D6CDBD]">
                      <Calendar className="w-3.5 h-3.5 text-[#8E54DF]" />
                      <span>{event.date || "Upcoming"}</span>
                    </div>
                  </div>

                  {/* Card Body Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-[#F08C2E] transition-colors truncate">
                      {event.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-[#D6CDBD] mb-3">
                      <MapPin className="w-4 h-4 text-[#8E54DF] flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>

                    {/* Description Snippet */}
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Organizer Info & Action Buttons (View, Edit, Delete) */}
                <div className="px-6 pb-6 pt-0 flex flex-col gap-4">
                  
                  {/* Organizer Name/Email */}
                  <div className="flex items-center gap-2 text-xs text-[#D6CDBD] pt-3 border-t border-white/10">
                    <User className="w-3.5 h-3.5 text-[#F08C2E]" />
                    <span className="truncate">{user?.name || event.organizerEmail || "Organizer"}</span>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="grid grid-cols-3 gap-2">
                    {/* View Button */}
                    <Link
                      href={`/events/${event._id}`}
                      className="py-2.5 px-2 rounded-xl font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition duration-200 flex items-center justify-center gap-1.5 text-xs text-center"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#D6CDBD]" />
                      <span>View</span>
                    </Link>

                    {/* Edit Button */}
                    <Link
                      href={`/events/edit/${event._id}`}
                      className="py-2.5 px-2 rounded-xl font-semibold text-white bg-[#8E54DF]/20 border border-[#8E54DF]/40 hover:bg-[#8E54DF]/30 transition duration-200 flex items-center justify-center gap-1.5 text-xs text-center"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-[#8E54DF]" />
                      <span>Edit</span>
                    </Link>

                    {/* Delete Button */}
                    <button
                      type="button"
                      className="py-2.5 px-2 rounded-xl font-semibold text-red-400 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition duration-200 flex items-center justify-center gap-1.5 text-xs text-center cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-red-400" />
                      <span>Delete</span>
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        ) : (
          // ==================== 4. EMPTY STATE SECTION ====================
          <div className="text-center py-20 bg-[#121218]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#F08C2E]/10 border border-[#F08C2E]/30 flex items-center justify-center mx-auto mb-4 text-[#F08C2E]">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No Events Created Yet</h3>
            <p className="text-[#D6CDBD] text-sm mb-6">
              You haven&apos;t published any community initiatives or drives yet. Start organizing to make an impact!
            </p>
            <Link
              href="/create-event"
              className="inline-flex items-center gap-2 bg-[#F08C2E] text-black font-bold px-6 py-3 rounded-xl hover:opacity-90 transition duration-300 text-sm shadow-lg shadow-[#F08C2E]/20"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Create Your First Event</span>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default ManageEventPage;