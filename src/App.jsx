import "@/styles/global.css";
import "@/styles/reset.css";
import GeneralLayout from "@/shared/layouts/GeneralLayout/GeneralLayout";
import NavBar from "@/shared/components/Navbar/NavBar";
import HomePage from "@/pages/HomePage";
import Footer from "@/shared/components/Footer/Footer";
import BoostLinksSection from "@/shared/components/BoostLinksSection/BoostLinksSection";

export const App = () => {
  return (
    <>
      <GeneralLayout>
        <NavBar />
        <HomePage />
        <div>
          <BoostLinksSection />
          <Footer />
        </div>
      </GeneralLayout>
    </>
  );
};

export default App;
