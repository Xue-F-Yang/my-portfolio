import React from 'react';
import Nav from "./Nav";

const Header = ({ selectedSection, onSelectSection }) => {
  return (
    <header>
      <h1>Xue Yang</h1>
      <Nav selectedSection={selectedSection} onSelectSection={onSelectSection} />
    </header>
  );
};

export default Header;