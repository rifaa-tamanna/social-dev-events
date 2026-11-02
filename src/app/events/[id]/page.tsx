import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  CheckCircle2,
  Mail,
  Sparkles,
} from "lucide-react";
import JoinedEventCard from "@/components/joining/JoinedEventCard";

interface EventData {
  _id?: string;
  title: string;
  type: string;
  date: string;
  location: string;
  thumbnail: string;
  description: string;
  organizerEmail?: string;
  organizerName?: string;
  volunteersCount?: number;
}

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/events/${id}`, {
    cache: "no-store",
  });
  const data: EventData = await res.json();

  return (
    <div className="min-h-screen bg-[#0A0A0E] text-white py-12 px-4 sm:px-6 lg:px-8 font-['Space_Grotesk'] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#F08C2F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#8E54DF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm text-[#D6CDBD] hover:text-[#F08C2F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Upcoming Events</span>
          </Link>
        </div>

        {/* Main Card Container */}
        <div className="bg-[#121218]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {/* Top Hero Banner Section */}
          <div className="relative w-full h-[350px] sm:h-[420px]">
            <Image
              src={
                data.thumbnail ||
                "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8"
              }
              alt={data.title || "Event Banner"}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-[#121218]/40 to-transparent" />

            {/* Event Category Badge */}
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0A0A0E]/80 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#F08C2F]">
                <Sparkles className="w-3.5 h-3.5" />
                {data.type || "Donation"}
              </span>
            </div>

            {/* Title & Meta info on Banner Bottom */}
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
                {data.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#D6CDBD]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#8E54DF]" />
                  <span>{data.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#F08C2F]" />
                  <span>{data.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Bar (Volunteers & Join Button) */}
          <JoinedEventCard data={data} ></JoinedEventCard>

          {/* Detailed Content & Organizer Sidebar */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column: About & Guidelines */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4">
                  About this Social Initiative
                </h2>
                <p className="text-[#D6CDBD] leading-relaxed text-sm sm:text-base whitespace-pre-line">
                  {data.description}
                </p>
              </div>

              {/* Volunteer Guidelines */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#F08C2F] mb-4">
                  Volunteer Guidelines
                </h3>
                <ul className="space-y-3 text-sm text-[#D6CDBD]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E54DF] mt-2 flex-shrink-0" />
                    <span>
                      Please arrive 15 minutes before the scheduled time at the designated location.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E54DF] mt-2 flex-shrink-0" />
                    <span>
                      Wear comfortable clothing suitable for physical social work and distribution.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E54DF] mt-2 flex-shrink-0" />
                    <span>
                      Bring any pre-coordinated relief packages or distribution items if requested.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Initiative Organizer Card */}
            <div className="space-y-6">
              <div className="bg-[#2A2823]/60 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#F08C2F] mb-4">
                  Initiative Organizer
                </h3>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F08C2F] to-[#8E54DF] flex items-center justify-center font-bold text-white text-lg">
                    {(data.organizerName || data.organizerEmail || "O")[0].toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {data.organizerName || "Organizer"}
                    </h4>
                    <p className="text-xs text-[#D6CDBD] flex items-center gap-1.5 mt-0.5">
                      <Mail className="w-3.5 h-3.5 text-[#8E54DF]" />
                      <span className="truncate max-w-[170px]">
                        {data.organizerEmail || "N/A"}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#00a884]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Platform Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;