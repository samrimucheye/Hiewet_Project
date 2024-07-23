import React from "react";
import NavBar from "./components/NavBar";
import { BrowesRouter, Routes, Route } from "react-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <BrowesRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <section>&copy; כל הזכויות שמורות להייוות דלתות 2024</section>
        </footer>
      </div>
    </BrowesRouter>
  );
};

export default App;
