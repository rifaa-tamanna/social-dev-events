"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Heart, Share2, Users } from "lucide-react";
import { toast } from "react-toastify";

interface EventData {
  _id: string;
  volunteersCount?: number;
}

interface JoinedEventCardProps {
  data: EventData;
}

interface JoinEventResponse {
  success: boolean;
  message: string;
}

const JoinedEventCard = ({ data }: JoinedEventCardProps) => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);

  // Join Event
  const handleJoinEvent = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!user?.email) {
      toast.warning("Please login first to join this event!", {
        position: "top-center",
      });
      return;
    }

    try {
      setLoading(true);

      const joinEventData = {
        eventId: data._id,
        userName: user.name,
        email: user.email,
        image: user.image,
        ...data,
      };

      const res = await fetch("http://localhost:5000/joining", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(joinEventData),
      });

      const joiningRes: JoinEventResponse = await res.json();


      if (!res.ok) {
        throw new Error(joiningRes.message || "Failed to join event");
      }

      setJoined(true);

      toast.success("Successfully joined the event!", {
        position: "top-center",
        autoClose: 3000,
      });

    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong!";

      toast.error(errorMessage, {
        position: "top-center",
      });

    } finally {
      setLoading(false);
    }
  };

  // Leave Event
  const handleLeaveEvent = async () => {
    if (!user?.email) return;

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/joining", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: data._id,
          email: user.email,
        }),
      });

      const leaveRes: JoinEventResponse = await res.json();

      if (!res.ok) {
        throw new Error(leaveRes.message || "Failed to leave event");
      }

      setJoined(false);

      toast.success("You have left the event successfully!", {
        position: "top-center",
        autoClose: 3000,
      });

    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong!";

      toast.error(errorMessage, {
        position: "top-center",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 sm:px-10 py-6 border-b border-white/10 bg-[#2A2823]/40 flex flex-col sm:flex-row items-center justify-between gap-4">

      {/* Volunteer Information */}
      <div className="flex items-center gap-4 w-full sm:w-auto">

        <div className="w-12 h-12 rounded-2xl bg-[#8E54DF]/15 border border-[#8E54DF]/30 flex items-center justify-center text-[#8E54DF]">
          <Users className="w-6 h-6" />
        </div>

        <div>
          <h4 className="text-base font-bold text-white">
            {data.volunteersCount || 0} Volunteers Joined
          </h4>

          <p className="text-xs text-[#D6CDBD]">
            Sign up to join hands for this drive
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-end">

        <button
          type="button"
          className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition cursor-pointer"
          aria-label="Share Event"
        >
          <Share2 className="w-5 h-5" />
        </button>

        {joined ? (
          <button
            type="button"
            onClick={handleLeaveEvent}
            disabled={loading}
            className="px-6 py-3 rounded-xl font-bold text-white bg-red-500/80 hover:bg-red-600 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Heart className="w-4 h-4" />

            <span>
              {loading ? "Leaving..." : "Leave Event"}
            </span>
          </button>
        ) : (
          <form onSubmit={handleJoinEvent}>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-xl font-bold text-black bg-gradient-to-r from-[#F08C2F] to-[#8E54DF] hover:opacity-95 transition shadow-lg shadow-[#F08C2F]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Heart className="w-4 h-4 fill-black" />

              <span>
                {loading ? "Joining..." : "Join Event"}
              </span>
            </button>
          </form>
        )}

      </div>

    </div>
  );
};

export default JoinedEventCard;
