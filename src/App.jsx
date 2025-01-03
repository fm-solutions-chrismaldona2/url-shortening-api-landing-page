import "@/styles/global.css";
import "@/styles/variants.css";
import { NavBar } from "@/shared/components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home/HomePage";

export const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
