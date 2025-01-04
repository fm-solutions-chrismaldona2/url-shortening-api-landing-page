import "@/styles/global.css";
import "@/styles/variants.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/shared/layouts/MainLayout/MainLayout";
import NavBar from "@/shared/components/Navbar/NavBar";
import HomePage from "@/pages/home/HomePage";
import Footer from "@/shared/components/Footer/Footer";

export const App = () => {
  return (
    <MainLayout>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </MainLayout>
  );
};

export default App;
