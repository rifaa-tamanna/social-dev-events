"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Edit3, Trash2, X, AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Event Type
type EventData = {
  _id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  thumbnail: string;
  description: string;
  organizerEmail: string;
};

type Props = {
  event: EventData;
};

const EditDeleteButton = ({ event }: Props) => {
  const router = useRouter();

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: event.title,
    type: event.type,
    date: event.date?.slice(0, 10) || "",
    location: event.location,
    thumbnail: event.thumbnail,
    description: event.description,
  });

  // Update form when event changes
  useEffect(() => {
    setFormData({
      title: event.title,
      type: event.type,
      date: event.date?.slice(0, 10) || "",
      location: event.location,
      thumbnail: event.thumbnail,
      description: event.description,
    });
  }, [event]);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Edit Event
  const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/events/${event._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            organizerEmail: event.organizerEmail,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update event");
      }

      setEditOpen(false);
      router.refresh();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  // Delete Event
  const handleDelete = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/events/${event._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            organizerEmail: event.organizerEmail,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete event");
      }

      setDeleteOpen(false);
      router.refresh();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-1.5 w-full">

      {/* ================= EDIT BUTTON & DIALOG ================= */}

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogTrigger>
          <Button
            type="button"
            className="w-full h-10 px-2 rounded-xl font-semibold text-white bg-[#884AE9]/10 border border-[#884AE9]/30 hover:bg-[#884AE9]/20 hover:border-[#884AE9]/60 transition-all duration-300 flex items-center justify-center gap-1.5 text-xs cursor-pointer shadow-sm"
          >
            <Edit3 className="w-3.5 h-3.5 text-[#B78BFF]" />
            <span>Edit</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-[#111116] border border-white/10 text-white rounded-2xl max-h-[85vh] overflow-y-auto sm:max-w-lg p-6 shadow-2xl">

          <DialogHeader className="space-y-2 border-b border-white/10 pb-5">
            <div className="w-11 h-11 rounded-xl bg-[#884AE9]/15 border border-[#884AE9]/30 flex items-center justify-center">
              <Edit3 className="w-5 h-5 text-[#B78BFF]" />
            </div>

            <DialogTitle className="text-xl font-bold text-white">
              Edit Event
            </DialogTitle>

            <DialogDescription className="text-gray-400 text-sm">
              Update your event details and keep your community informed.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleEdit} className="space-y-4 pt-2">

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-300">
                Event Title
              </label>
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter event title"
                required
                className="h-11 bg-[#1B1B24] border-white/10 text-white focus-visible:ring-[#884AE9]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-300">
                  Event Type
                </label>
                <Input
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  placeholder="Event type"
                  required
                  className="h-11 bg-[#1B1B24] border-white/10 text-white focus-visible:ring-[#884AE9]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-300">
                  Event Date
                </label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="h-11 bg-[#1B1B24] border-white/10 text-white focus-visible:ring-[#884AE9] [color-scheme:dark]"
                />
              </div>

            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-300">
                Location
              </label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter event location"
                required
                className="h-11 bg-[#1B1B24] border-white/10 text-white focus-visible:ring-[#884AE9]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-300">
                Thumbnail URL
              </label>
              <Input
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                placeholder="Enter image URL"
                required
                className="h-11 bg-[#1B1B24] border-white/10 text-white focus-visible:ring-[#884AE9]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-300">
                Description
              </label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write about your event..."
                rows={4}
                required
                className="bg-[#1B1B24] border-white/10 text-white resize-none focus-visible:ring-[#884AE9]"
              />
            </div>

            <div className="flex gap-2 pt-3 border-t border-white/10">

              <Button
                type="button"
                variant="outline"
                disabled={loading}
                onClick={() => setEditOpen(false)}
                className="flex-1 h-11 bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={loading}
                className="flex-1 h-11 rounded-xl bg-gradient-to-r from-[#F08C2F] to-[#884AE9] text-white font-bold hover:opacity-90 transition-all shadow-lg shadow-[#884AE9]/20"
              >
                {loading ? "Updating..." : "Save Changes"}
              </Button>

            </div>

          </form>
        </DialogContent>
      </Dialog>

      {/* ================= DELETE BUTTON & DIALOG ================= */}

      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogTrigger>
          <Button
            type="button"
            className="w-full h-10 px-2 rounded-xl font-semibold text-red-400 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 flex items-center justify-center gap-1.5 text-xs cursor-pointer shadow-sm"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Delete</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-[#111116] border border-white/10 text-white rounded-2xl sm:max-w-md p-6 shadow-2xl">

          <DialogHeader className="items-center text-center space-y-3">

            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>

            <DialogTitle className="text-xl font-bold text-white">
              Delete Event?
            </DialogTitle>

            <DialogDescription className="text-gray-400 text-sm leading-relaxed">
              Are you sure you want to delete{" "}
              <span className="text-white font-semibold">
                {event.title}
              </span>
              ? This action cannot be undone.
            </DialogDescription>

          </DialogHeader>

          <div className="mt-4 p-3 rounded-xl bg-red-500/5 border border-red-500/15">
            <p className="text-xs text-red-300 text-center">
              <Trash2 className="w-3.5 h-3.5 inline mr-1" />
              This event will be permanently removed.
            </p>
          </div>

          <DialogFooter className="grid grid-cols-2 gap-2 mt-4">

            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={() => setDeleteOpen(false)}
              className="h-11 rounded-xl bg-white text-black border-white hover:bg-gray-200 hover:text-black font-semibold"
            >
              <X className="w-4 h-4 mr-1" />
              Cancel
            </Button>

            <Button
              type="button"
              disabled={loading}
              onClick={handleDelete}
              className="h-11 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold transition-all"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              {loading ? "Deleting..." : "Yes, Delete"}
            </Button>

          </DialogFooter>

        </DialogContent>
      </Dialog>

    </div>
  );
};

export default EditDeleteButton;
