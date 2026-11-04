
import { Skeleton } from "@/components/ui/skeleton";

export default function UpcomingEventsSkeleton() {
  return (
    <section className="bg-background px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 space-y-4">
          <Skeleton className="h-8 w-44 rounded-full" />
          <Skeleton className="h-12 w-80 max-w-full" />
          <Skeleton className="h-5 w-96 max-w-full" />
        </div>

        {/* Event Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-border bg-card"
            >
              <Skeleton className="h-64 w-full rounded-none" />

              <div className="space-y-4 p-6">
                <Skeleton className="h-7 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
