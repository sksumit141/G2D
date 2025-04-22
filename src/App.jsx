import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/ui/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/ui/Contact";
import Footer from "../src/components/Footer";
import Publication from "./components/Publication";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20 pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
