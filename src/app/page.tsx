import Banner from "@/components/home/Banner";
import GrassrootsActions from "@/components/home/GrassrootsActions";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import SpeakersSection from "@/components/home/SpeakersSection";
import SubscriptionSection from "@/components/home/SubscriptionSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import FAQSection from "@/components/home/FAQSection";
import HowItWorks from "@/components/home/HowItWorks";
import ExploreCauses from "@/components/home/ExploreCauses";
import UpcomingEventsSkeleton from "@/components/home/UpcomimgEventsSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <GrassrootsActions />
      <HowItWorks />
      <ExploreCauses />

      <Suspense fallback={<UpcomingEventsSkeleton />}>
        <UpcomingEvents />
      </Suspense>



      <SpeakersSection />
      <ReviewsSection />
      <SubscriptionSection />
      <FAQSection />
    </div>
  );
}
