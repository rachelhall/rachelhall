import { pages } from "../../pages";
import { Nav } from "../Nav";
import { Text } from "../../styleComponents/Text";
import rachel from "../../media/rachel-2.png";
import { Avatar } from "../../styleComponents/Avatar";
import { BsCodeSquare, BsFileEarmarkMusic } from "react-icons/bs";
import { GiHollowCat, GiRollerSkate } from "react-icons/gi";
import { Contact } from "../Contact";

import "./styles.scss";
import { useModal } from "../../utils/useModal";
import React from "react";
import { EMediaBreakPoint, useMediaQuery } from "../../utils/useMediaQuery";
import { Cats } from "../Cats/Cats";

export const Header: React.FC = () => {
  const { handleModal, modal } = useModal({
    heading: "Cats",
    content: <Cats />,
  });

  const handleClick = () => {
    handleModal();
  };

  const isMobile = useMediaQuery(EMediaBreakPoint.mobile);
  return (
    <header className="header" id="header">
      <Nav pages={pages} />
      <div className="header--content">
        <div className="header--title">
          <div className="header--name">
            <Text
              textAlign="center"
              fontSize="huge"
              uppercase
              fontWeight="bold"
            >
              Rachel
            </Text>
            <Text fontSize="huge" uppercase fontWeight="bold">
              Hall
            </Text>
          </div>

          <Text
            url="#portfolio"
            leadingIcon={BsCodeSquare}
            fontSize="large"
            uppercase
            fontWeight="bold"
            external={false}
          >
            Software Developer
          </Text>

          <Text
            leadingIcon={BsFileEarmarkMusic}
            fontSize="large"
            uppercase
            fontWeight="bold"
            external={true}
            url="https://www.mariela.band"
          >
            Musician
          </Text>

          <Text
            leadingIcon={GiRollerSkate}
            fontSize="large"
            uppercase
            fontWeight="bold"
            external={true}
            url="https://www.instagram.com/grindylocks/"
          >
            Rollerblader
          </Text>

          <div role="button" onClick={handleClick}>
            <Text
              onClick={handleClick}
              leadingIcon={GiHollowCat}
              fontSize="large"
              uppercase
              fontWeight="bold"
              url=""
            >
              Cat Mom
            </Text>
          </div>
          <Contact />
        </div>
        <div>
          <Avatar src={rachel} />
          <div className="header--bio">
            <Text verticalSpacing={isMobile ? "small" : "large"}>
              From composer to coder, I’m a musician-turned-engineer who
              specializes in building clean, reusable apps with React.js,
              TypeScript, Next.js, and Python. I’m passionate about writing
              well-organized, maintainable code and enjoy using tools like
              GraphQL and React Query to create scalable applications with
              seamless user experiences. Outside of work, you’ll find me
              recording music with friends or rollerblading through Southern
              California.
            </Text>
          </div>
        </div>
      </div>
      {modal}
    </header>
  );
};
