import "@/styles/global.css";
import "@/styles/reset.css";
import GeneralLayout from "@/shared/layouts/GeneralLayout/GeneralLayout";
import Home from "@/pages/home";
import Navbar from "@/shared/components/Navbar/Navbar";
import Footer from "@/shared/components/Footer/Footer";
import BoostLinksSection from "@/shared/components/BoostLinksSection/BoostLinksSection";

export const App = () => {
  return (
    <>
      <GeneralLayout>
        <Navbar />
        <Home />
        <div>
          <BoostLinksSection />
          <Footer />
        </div>
      </GeneralLayout>
    </>
  );
};

export default App;
