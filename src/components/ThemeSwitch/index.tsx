import React, { useEffect, useState } from "react";

import Toggle from "../../styleComponents/Toggle";
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

import styles from "./ThemeSwitch.module.scss";

interface IProps {}

export const ThemeSwitch: React.FC<IProps> = (props) => {
  const {} = props;

  const [isDark, setIsDark] = useState(false);

  const systemPrefersDark = window.matchMedia("prefers-color-scheme: dark");

  // useEffect(() => {
  //   if (systemPrefersDark) {
  //     setIsDark(true);
  //   }
  // }, [systemPrefersDark]);

  return (
    <div className={styles.ThemeSwitch}>
      <CiSun />
      <Toggle
        isChecked={isDark}
        onChange={() => setIsDark((prevState) => !prevState)}
      />
      <IoMoonOutline />
    </div>
  );
};

export default ThemeSwitch;
