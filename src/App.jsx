import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BroswerRouter>
        <Routes>
          <Route path="/React-Portfolio/navbar" element={<Navbar />} />
          <Route path="/React-Portfolio/home" element={<Hero />} />
          <Route path="/React-Portfolio/about" element={<About />} />
          <Route path="/React-Portfolio/services" element={<Services />} />
          <Route path="/React-Portfolio/mywork" element={<MyWork />} />
          <Route path="/React-Portfolio/contact" element={<Contact />} />
          <Route path="/React-Portfolio/footer" element={<Footer />} />
        </Routes>
      </BroswerRouter>
      {/* <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;
