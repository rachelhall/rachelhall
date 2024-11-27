import React, {
  useEffect,
  // useEffect,
  useState,
} from "react";

import Toggle from "../../styleComponents/Toggle";
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

import styles from "./ThemeSwitch.module.scss";
import { useTheme } from "../../context/ThemeContext";

interface IProps {}

export const ThemeSwitch: React.FC<IProps> = (props) => {
  const {} = props;

  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className={styles.ThemeSwitch}>
      <CiSun />
      <Toggle
        label="Toggle"
        isChecked={theme === "dark"}
        onChange={handleChange}
      />
      <IoMoonOutline />
    </div>
  );
};

export default ThemeSwitch;
