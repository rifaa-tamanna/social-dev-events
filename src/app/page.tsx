import Banner from "@/components/home/Banner";
import GrassrootsActions from "@/components/home/GrassrootsActions";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import SpeakersSection from "@/components/home/SpeakersSection";
import SubscriptionSection from "@/components/home/SubscriptionSection";
import ReviewsSection from "@/components/home/ReviewsSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <GrassrootsActions />
      <UpcomingEvents />
      <SpeakersSection />
      <ReviewsSection />
      <SubscriptionSection />
    </div>
  );
}
