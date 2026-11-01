"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Image as ImageIcon,
  Sparkles,
  PlusCircle,
} from "lucide-react";

const CreateEventPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "Donation",
    date: "",
    location: "",
    thumbnail: "",
    description: "",
    organizerEmail: "rifa@gmail.com",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePresetClick = (presetText: string) => {
    setFormData({
      ...formData,
      title: `e.g. ${presetText} Drive – Mirpur 10, Dhaka`,
    });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/create-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const data = await res.json()    

    console.log("Event Data Submitted:", data);
    alert("Event Published Successfully!");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0E] text-white py-12 px-4 sm:px-6 lg:px-8 font-['Space_Grotesk'] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#F08C2F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#884AE9]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#D6CDBD] hover:text-[#F08C2F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Upcoming Events</span>
          </Link>
        </div>

        {/* Form Container Card */}
        <div className="bg-[#121218]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Badge & Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium tracking-wide mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F08C2F] animate-pulse" />
              <span className="uppercase text-gray-300 tracking-widest font-semibold">
                Social Service Drive
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Create a Community Event
            </h1>
            <p className="text-[#D6CDBD] text-sm md:text-base">
              Organize a local relief effort, environmental cleanup, or
              community support drive.
            </p>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Title */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Event Title <span className="text-[#F08C2F]">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Sparkles className="w-4 h-4 text-[#F08C2F]" />
                </span>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Winter Clothes Distribution – Mirpur 10, Dhaka"
                  className="w-full bg-[#2A2823]/60 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#F08C2F] transition text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Event Type & Date Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Event Type */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Event Type <span className="text-[#F08C2F]">*</span>
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full bg-[#2A2823]/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#F08C2F] transition text-sm sm:text-base"
                >
                  <option value="Donation" className="bg-[#2A2823] text-white">
                    Donation
                  </option>
                  <option value="Cleanup" className="bg-[#2A2823] text-white">
                    Cleanup Drive
                  </option>
                  <option
                    value="Food Distribution"
                    className="bg-[#2A2823] text-white"
                  >
                    Food Distribution
                  </option>
                  <option
                    value="Tree Plantation"
                    className="bg-[#2A2823] text-white"
                  >
                    Tree Plantation
                  </option>
                </select>
              </div>

              {/* Event Date */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Event Date <span className="text-[#F08C2F]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#2A2823]/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#F08C2F] transition text-sm sm:text-base"
                  />
                </div>
                <p className="text-[11px] text-[#D6CDBD]/70 mt-1">
                  Dates must be in the future (today or later)
                </p>
              </div>
            </div>

            {/* Location / Venue */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Location / Venue <span className="text-[#F08C2F]">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <MapPin className="w-4 h-4 text-[#884AE9]" />
                </span>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Mohammadpur Town Hall, Dhaka"
                  className="w-full bg-[#2A2823]/60 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#F08C2F] transition text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Thumbnail Image URL */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Thumbnail Image URL <span className="text-[#F08C2F]">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <ImageIcon className="w-4 h-4 text-[#F08C2F]" />
                </span>
                <input
                  type="url"
                  name="thumbnail"
                  required
                  value={formData.thumbnail}
                  onChange={handleChange}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full bg-[#2A2823]/60 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#F08C2F] transition text-sm sm:text-base"
                />
              </div>

              {/* Quick Photo Presets */}
              <div className="flex flex-wrap items-center gap-2 mt-2 text-xs">
                <span className="text-[#D6CDBD]">Quick photo presets:</span>
                {[
                  "Winter Clothes",
                  "Blanket Relief",
                  "Cleanup",
                  "Tree Plantation",
                ].map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handlePresetClick(preset)}
                    className="text-[#EB8B42] hover:underline focus:outline-none"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Event Description */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Event Description <span className="text-[#F08C2F]">*</span>
              </label>
              <textarea
                name="description"
                rows={4}
                required
                value={formData.description}
                onChange={handleChange}
                placeholder="Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete..."
                className="w-full bg-[#2A2823]/60 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#F08C2F] transition text-sm sm:text-base"
              />
            </div>

            {/* Organizer Email Attached */}
            <div className="bg-[#2A2823]/40 border border-white/10 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-sm text-[#D6CDBD]">
                Organizer Email attached:
              </span>
              <span className="text-sm font-semibold text-white bg-[#0A0A0E] px-3 py-1.5 rounded-lg border border-white/10 w-fit">
                {formData.organizerEmail}
              </span>
            </div>

            {/* Publish Event Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#F08C2F] to-[#884AE9] hover:opacity-90 transition duration-300 shadow-lg shadow-[#00a884]/20 flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                <PlusCircle className="w-5 h-5" />
                <span>Publish Event</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEventPage;
