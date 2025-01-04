import Hero from "./components/Hero/Hero";
import StatisticSection from "./components/StatisticSection/StatisticSection";
import HomePageLayout from "./layouts/HomePageLayout";
import LinkShortener from "@/features/shortening/LinkShortener";

export default function Home() {
  return (
    <HomePageLayout>
      <Hero />
      <LinkShortener />
      <StatisticSection />
    </HomePageLayout>
  );
}
