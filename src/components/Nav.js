import React from "react";

const Nav = ({ selectedSection, onSelectSection }) => {
  const handleSelectSection = (section) => {
    onSelectSection(section);
  };

  const navItems = [
    { name: "About", section: "about" },
    { name: "Portfolio", section: "portfolio" },
    { name: "Contact", section: "contact" },
    { name: "Resume", section: "resume" },
  ];

  return (
    <header className="header">
      <nav>
        {navItems.map((item) => (
          <button
            key={item.section}
            className={selectedSection === item.section ? "selected" : ""}
            onClick={() => handleSelectSection(item.section)}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Nav;