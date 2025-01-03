import Hero from "./components/Hero/Hero";
import HomePageLayout from "./layouts/HomePageLayout";
import LinkShortener from "@/features/shortening/LinkShortener";

export default function Home() {
  return (
    <HomePageLayout>
      <Hero />
      <LinkShortener />
    </HomePageLayout>
  );
}
