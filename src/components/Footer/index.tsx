import React from "react";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

import { Text } from "../../styleComponents";

import styles from "./Footer.module.scss";

interface IProps {}

export const Footer: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className={styles.Footer}>
      <Text
        fontWeight="bold"
        fontSize="small"
        leadingIcon={FiPhone}
        url="tel:251-472-5419"
        uppercase
      >
        251-472-5419
      </Text>
      <Text
        external={true}
        url="mailto:rachelraspberrypie@gmail.com?subject=I%20visited%20your%20portfolio%20today"
        leadingIcon={AiOutlineMail}
        fontWeight="bold"
        fontSize="small"
        uppercase
      >
        rachelraspberrypie@gmail.com
      </Text>
    </div>
  );
};

export default Footer;
