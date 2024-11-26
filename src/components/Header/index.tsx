import { Text } from "../../styleComponents/Text";
import rachel from "../../media/rachel-2.png";
import { Avatar } from "../../styleComponents/Avatar";

import { Contact } from "../Contact";

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
