import { Routes, Route } from "react-router-dom";

import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  );
}