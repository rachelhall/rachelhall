import React from "react";
import { BsCodeSquare, BsFileEarmarkMusic } from "react-icons/bs";
import { GiHollowCat, GiRollerSkate } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";

import { Text } from "../../styleComponents";

import styles from "./Links.module.scss";
import { useModal } from "../../utils/useModal";
import { Cats } from "../Cats/Cats";

interface IProps {}

export const Links: React.FC<IProps> = (props) => {
  const {} = props;

  const { handleModal, modal } = useModal({
    heading: "Cats",
    content: <Cats />,
  });

  const handleClick = () => {
    handleModal();
  };

  return (
    <div className={styles.Links}>
      <Text
        url="#portfolio"
        leadingIcon={BsCodeSquare}
        fontSize="small"
        uppercase
        external={false}
        // trailingIcon={GoArrowUpRight}
      >
        Software Developer
      </Text>

      <Text
        leadingIcon={BsFileEarmarkMusic}
        fontSize="small"
        uppercase
        external={true}
        url="https://www.mariela.band"
        // trailingIcon={GoArrowUpRight}
        className="links--item"
      >
        Musician
      </Text>
      <Text
        leadingIcon={GiRollerSkate}
        fontSize="small"
        uppercase
        external={true}
        url="https://www.mariela.band"
        // trailingIcon={GoArrowUpRight}
      >
        Rollerblader
      </Text>

      <div role="button" onClick={handleClick}>
        <Text
          onClick={handleClick}
          leadingIcon={GiHollowCat}
          fontSize="small"
          uppercase

          // trailingIcon={GoArrowUpRight}
        >
          Cat Mom
        </Text>
      </div>
      {modal}
    </div>
  );
};

export default Links;
