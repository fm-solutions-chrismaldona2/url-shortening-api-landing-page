import "@/styles/global.css";
import "@/styles/reset.css";
import GeneralLayout from "@/shared/layouts/GeneralLayout/GeneralLayout";
import NavBar from "@/shared/components/Navbar/NavBar";
import Home from "@/pages/home";
import Footer from "@/shared/components/Footer/Footer";
import BoostLinksSection from "@/shared/components/BoostLinksSection/BoostLinksSection";

export const App = () => {
  return (
    <>
      <GeneralLayout>
        <NavBar />
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
