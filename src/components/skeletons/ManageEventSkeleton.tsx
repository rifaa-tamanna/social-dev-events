import { Skeleton } from "@/components/ui/skeleton";

const ManageEventSkeleton = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background px-6 py-12 text-foreground md:px-12">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-10 top-20 h-96 w-96 rounded-full bg-brand/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-96 w-96 rounded-full bg-brand-2/15 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-center">
          <div className="space-y-4">
            {/* Dashboard Badge */}
            <Skeleton className="h-8 w-48 rounded-full" />

            {/* Heading */}
            <Skeleton className="h-12 w-80 max-w-full" />

            {/* Description */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full max-w-2xl" />
              <Skeleton className="h-4 w-3/4 max-w-xl" />
            </div>
          </div>

          {/* Create Event Button */}
          <Skeleton className="h-12 w-48 rounded-xl" />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/90 shadow-2xl"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative p-3">
                  <Skeleton className="h-52 w-full rounded-2xl" />

                  {/* Category Badge */}
                  <Skeleton className="absolute left-6 top-6 h-7 w-32 rounded-full" />

                  {/* Date Badge */}
                  <Skeleton className="absolute bottom-6 left-6 h-8 w-28 rounded-lg" />
                </div>

                {/* Event Information */}
                <div className="space-y-4 p-6">
                  {/* Title */}
                  <Skeleton className="h-7 w-3/4" />

                  {/* Location */}
                  <Skeleton className="h-4 w-1/2" />

                  {/* Description */}
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="space-y-4 px-6 pb-6">
                {/* Organizer */}
                <div className="flex items-center gap-2 border-t border-border pt-4">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-36" />
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <Skeleton className="h-10 rounded-xl" />
                  <Skeleton className="col-span-2 h-10 rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageEventSkeleton;
