import Card from "@/components/books/card";
import HeroSection from "@/components/shared/HeroSection";
import LatestBookUpdate from "@/components/shared/Latest";
import PodCast from "@/components/shared/PodCast";
import Review from "@/components/shared/Review";

const Home = () => {
  return (
    <div>
      <LatestBookUpdate></LatestBookUpdate>
      <HeroSection></HeroSection>
      <Card />
      <PodCast></PodCast>
      <Review></Review>
    </div>
  );
};

export default Home;