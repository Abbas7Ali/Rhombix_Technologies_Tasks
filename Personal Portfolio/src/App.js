import React from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Description from "./Components/Description";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="w-full max-w-[1600px] mx-auto">
        <Navbar />
        <Content />
        <About />
        <Skills />
        <div className="w-full p-2 mt-2 mb-2">
          <hr className="m-auto w-28 border-t-8 border-green-800 my-4" />
        </div>

        <Description />
        <Projects />
        <div className="w-full p-2 mt-2 mb-2">
          <hr className="m-auto w-28 border-t-8 border-green-800 my-4" />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
