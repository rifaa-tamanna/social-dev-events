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
        `${process.env.NEXT_PUBLIC_API_URL}/events/${event._id}`,
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
        `${process.env.NEXT_PUBLIC_API_URL}/events/${event._id}`,
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
            className="w-full h-10 px-2 rounded-xl font-semibold text-foreground bg-brand-2/10 border border-brand-2/30 hover:bg-brand-2/20 hover:border-brand-2/60 transition-all duration-300 flex items-center justify-center gap-1.5 text-xs cursor-pointer shadow-sm"
          >
            <Edit3 className="w-3.5 h-3.5 text-brand-2" />
            <span>Edit</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-popover border border-border text-foreground rounded-2xl max-h-[85vh] overflow-y-auto sm:max-w-lg p-6 shadow-2xl">
          <DialogHeader className="space-y-2 border-b border-border pb-5">
            <div className="w-11 h-11 rounded-xl bg-brand-2/15 border border-brand-2/30 flex items-center justify-center">
              <Edit3 className="w-5 h-5 text-brand-2" />
            </div>

            <DialogTitle className="text-xl font-bold text-foreground">
              Edit Event
            </DialogTitle>

            <DialogDescription className="text-muted-foreground text-sm">
              Update your event details and keep your community informed.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleEdit} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted-foreground">
                Event Title
              </label>

              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter event title"
                required
                className="h-11 bg-inset border-border text-foreground focus-visible:ring-brand-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-muted-foreground">
                  Event Type
                </label>

                <Input
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  placeholder="Event type"
                  required
                  className="h-11 bg-inset border-border text-foreground focus-visible:ring-brand-2"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-muted-foreground">
                  Event Date
                </label>

                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="h-11 bg-inset border-border text-foreground focus-visible:ring-brand-2"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted-foreground">
                Location
              </label>

              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter event location"
                required
                className="h-11 bg-inset border-border text-foreground focus-visible:ring-brand-2"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted-foreground">
                Thumbnail URL
              </label>

              <Input
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                placeholder="Enter image URL"
                required
                className="h-11 bg-inset border-border text-foreground focus-visible:ring-brand-2"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted-foreground">
                Description
              </label>

              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write about your event..."
                rows={4}
                required
                className="bg-inset border-border text-foreground resize-none focus-visible:ring-brand-2"
              />
            </div>

            <div className="flex gap-2 pt-3 border-t border-border">
              <Button
                type="button"
                variant="outline"
                disabled={loading}
                onClick={() => setEditOpen(false)}
                className="flex-1 h-11 bg-subtle border-border text-foreground hover:bg-elevated rounded-xl"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={loading}
                className="flex-1 h-11 rounded-xl bg-gradient-to-r from-brand to-brand-2 text-white font-bold hover:opacity-90 transition-all shadow-lg shadow-brand-2/20"
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
            className="w-full h-10 px-2 rounded-xl font-semibold text-destructive bg-destructive/10 border border-destructive/30 hover:bg-destructive/20 hover:border-destructive/50 transition-all duration-300 flex items-center justify-center gap-1.5 text-xs cursor-pointer shadow-sm"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Delete</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-popover border border-border text-foreground rounded-2xl sm:max-w-md p-6 shadow-2xl">
          <DialogHeader className="items-center text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>

            <DialogTitle className="text-xl font-bold text-foreground">
              Delete Event?
            </DialogTitle>

            <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
              Are you sure you want to delete{" "}
              <span className="text-foreground font-semibold">
                {event.title}
              </span>
              ? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 p-3 rounded-xl bg-destructive/5 border border-destructive/15">
            <p className="text-xs text-destructive text-center">
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
              className="h-11 rounded-xl bg-foreground text-background hover:bg-foreground/90 hover:text-background border-transparent font-semibold"
            >
              <X className="w-4 h-4 mr-1" />
              Cancel
            </Button>

            <Button
              type="button"
              disabled={loading}
              onClick={handleDelete}
              className="h-11 rounded-xl bg-destructive hover:bg-destructive/90 text-white font-bold transition-all"
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
