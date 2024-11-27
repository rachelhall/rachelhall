import "./styles.scss";

import React from "react";

import Greeting from "../Greeting";
import About from "../About";

export const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <Greeting />
      <About />
    </header>
  );
};
