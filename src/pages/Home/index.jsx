import Hero from "./components/Hero/Hero";
import StatisticSection from "./components/StatisticSection/StatisticSection";
import HomePageLayout from "./layouts/HomePageLayout";
import LinkShortener from "@/features/shortening/LinkShortener";

const Home = () => {
  return (
    <HomePageLayout>
      <Hero />
      <LinkShortener />
      <StatisticSection />
    </HomePageLayout>
  );
};
export default Home;
