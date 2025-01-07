import Hero from "./components/Hero/Hero";
import StatisticsSection from "./components/StatisticsSection/StatisticsSection";
import HomePageLayout from "./layouts/HomePageLayout";
import LinkShortener from "@/features/shortening/LinkShortener";

const Home = () => {
  return (
    <HomePageLayout>
      <Hero />
      <LinkShortener />
      <StatisticsSection />
    </HomePageLayout>
  );
};
export default Home;
