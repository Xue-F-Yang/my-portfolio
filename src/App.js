import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";
import "./App.css";

const App = () => {
  const [selectedSection, setSelectedSection] = useState("about");

  const handleSelectSection = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <Header
        selectedSection={selectedSection}
        onSelectSection={handleSelectSection}
      />
      {selectedSection === "about" && <About />}
      {selectedSection === "portfolio" && <Portfolio />}
      {selectedSection === "contact" && <Contact />}
      {selectedSection === "resume" && <Resume />}
      <Footer />
    </div>
  );
};

export default App;