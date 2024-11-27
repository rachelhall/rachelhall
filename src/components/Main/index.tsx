import React from "react";

import styles from "./Main.module.scss";
import { Nav } from "../Nav";
import { Header } from "../Header";
import { Portfolio } from "../Portfolio";
import { pages } from "../../pages";
import { useTheme } from "../../context/ThemeContext";

import cx from "classnames";

interface IProps {}

export const Main: React.FC<IProps> = (props) => {
  const {} = props;

  const { theme } = useTheme();

  const MainClass = cx([styles.Main], theme);

  return (
    <main className={MainClass}>
      <Nav pages={pages} />
      <Header />
      <Portfolio />
    </main>
  );
};

export default Main;
