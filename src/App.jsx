import "@/styles/global.css";
import "@/styles/variants.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home/HomePage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
