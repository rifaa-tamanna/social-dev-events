"use client";

import { useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Community Volunteer",
    avatar: "SA",
    rating: 5,
    review:
      "Being part of these social initiatives has been an amazing experience. I got the opportunity to help people and connect with a wonderful community.",
  },
  {
    id: 2,
    name: "Rahim Hasan",
    role: "Event Organizer",
    avatar: "RH",
    rating: 5,
    review:
      "This platform makes organizing social events so much easier. Finding volunteers and managing community activities has never been this simple.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Student Volunteer",
    avatar: "NJ",
    rating: 4,
    review:
      "I joined a tree plantation campaign through this platform. It was a meaningful experience and inspired me to participate in more social activities.",
  },
  {
    id: 4,
    name: "Tanvir Hossain",
    role: "Community Member",
    avatar: "TH",
    rating: 5,
    review:
      "A great initiative for connecting people who genuinely want to make a difference. I love how easy it is to discover upcoming events.",
  },
  {
    id: 5,
    name: "Ayesha Rahman",
    role: "Social Volunteer",
    avatar: "AR",
    rating: 5,
    review:
      "I had a wonderful experience participating in a winter relief program. Small contributions can create a big impact in someone's life.",
  },
  {
    id: 6,
    name: "Fahim Karim",
    role: "Event Participant",
    avatar: "FK",
    rating: 4,
    review:
      "A helpful platform for discovering meaningful community events. Looking forward to joining more initiatives in the future.",
  },
];

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleReviews = [
    reviews[activeIndex],
    reviews[(activeIndex + 1) % reviews.length],
    reviews[(activeIndex + 2) % reviews.length],
  ];

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const previousReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="relative bg-background py-20 px-6 md:px-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-brand-2/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-subtle border border-border text-xs font-semibold tracking-widest text-muted-foreground mb-5">
            <MessageCircle className="w-4 h-4 text-brand" />
            COMMUNITY VOICES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What People Say {" "}
            <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>

          <p className="text-muted-foreground/70 text-sm sm:text-base leading-relaxed">
            Real experiences from people who are making a difference through
            community initiatives.
          </p>
        </div>

        {/* Average Rating */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-brand text-brand" />
            ))}
          </div>

          <div className="text-center sm:text-left">
            <p className="text-foreground font-bold text-lg">4.8 / 5</p>
            <p className="text-xs text-muted-foreground/60">
              Community satisfaction
            </p>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="relative bg-card/90 border border-border rounded-3xl p-7 hover:border-brand/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand to-brand-2 flex items-center justify-center text-white font-bold text-sm">
                  {review.avatar}
                </div>

                <Quote className="w-8 h-8 text-brand-2/40 group-hover:text-brand/60 transition-colors" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating
                        ? "fill-brand text-brand"
                        : "text-foreground/15"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground/80 text-sm leading-7 min-h-[112px]">
                &quot;{review.review}&quot;
              </p>

              {/* User Info */}
              <div className="mt-6 pt-5 border-t border-border">
                <h3 className="text-foreground font-semibold text-sm">
                  {review.name}
                </h3>

                <p className="text-xs text-muted-foreground/50 mt-1">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            type="button"
            onClick={previousReview}
            aria-label="Previous reviews"
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-brand hover:text-black hover:border-brand transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show review group ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-7 bg-brand"
                    : "w-2 bg-foreground/20 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextReview}
            aria-label="Next reviews"
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-brand-2 hover:border-brand-2 hover:text-white transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
