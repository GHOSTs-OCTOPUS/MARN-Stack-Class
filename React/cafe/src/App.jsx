import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Team from "./pages/Team";
import Home from "./pages/Home";

function App() {
  return(
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;