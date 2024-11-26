import React from "react";

import styles from "./About.module.scss";
import Links from "../Links";
import Bio from "../Bio";

interface IProps {}

export const About: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className={styles.About}>
      <Links />
      <Bio />
    </div>
  );
};

export default About;
