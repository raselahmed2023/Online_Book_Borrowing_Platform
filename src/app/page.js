"use client"
import dynamic from "next/dynamic";
import HeroSection from "@/components/shared/HeroSection";
import LatestBookUpdate from "@/components/shared/Latest";
import PodCast from "@/components/shared/PodCast";
import Review from "@/components/shared/Review";
import Started from "@/components/shared/Started";

const Card = dynamic(() => import("@/components/books/card"), {
  ssr: false,
});

const Home = () => {
  return (
    <div>
      <LatestBookUpdate />
      <HeroSection />
      <Card />
      <PodCast />
      <Started></Started>
      <Review />
    </div>
  );
};

export default Home;