import Banner from "@/components/home/Banner";
import GrassrootsActions from "@/components/home/GrassrootsActions";
import SpeakersSection from "@/components/home/SpeakersSection";
import SubscriptionSection from "@/components/home/SubscriptionSection";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <GrassrootsActions></GrassrootsActions>
      <SpeakersSection></SpeakersSection>
      <SubscriptionSection></SubscriptionSection>
    </div>
  );
}
