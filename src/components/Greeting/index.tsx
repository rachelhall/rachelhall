import React from "react";

import rachel from "../../media/rachel-2.png";

import { Avatar, Text } from "../../styleComponents";

import styles from "./Greeting.module.scss";

interface IProps {}

export const Greeting: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className={styles.Greeting}>
      <Avatar src={rachel} />
      <Text textAlign="right" fontSize="way-huge" fontWeight="bold">
        Hi, I'm Rachel!
      </Text>
    </div>
  );
};

export default Greeting;
