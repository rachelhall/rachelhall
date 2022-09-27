import { pages } from "../../pages";
import { Nav } from "../Nav";
import { Text } from "../../styleComponents/Text";
import rachel from "../../media/rachel.png";
import { Avatar } from "../../styleComponents/Avatar";
import { BsCodeSquare, BsFileEarmarkMusic } from "react-icons/bs";
import { GiHollowCat, GiRollerSkate } from "react-icons/gi";
import { Link } from "../../styleComponents/Link";
import { Contact } from "../Contact";
import cats from "../../media/cats.jpeg";

import "./styles.scss";
import { useModal } from "../../utils/useModal";
import React from "react";
import { EMediaBreakPoint, useMediaQuery } from "../../utils/useMediaQuery";

interface IProps {}

export const Header: React.FC<IProps> = () => {
  const { handleModal, modal } = useModal({
    heading: "Cats",
    content: (
      <div>
        Coming soon...
        {/* <img src={cats} height="200" alt="3 cats looking out the window" /> */}
      </div>
    ),
  });

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    handleModal();
  };

  const isMobile = useMediaQuery(EMediaBreakPoint.mobile);
  return (
    <div className="header" id="header">
      <Nav pages={pages}></Nav>
      <div className="header--content">
        <div className="header--title">
          <Text fontSize="huge" uppercase fontWeight="bold">
            Rachel
          </Text>
          <Text fontSize="huge" uppercase fontWeight="bold">
            Hall
          </Text>
          <Link url="#portfolio">
            <Text fontSize="large" uppercase fontWeight="bold">
              <>
                <BsCodeSquare /> Software Developer
              </>
            </Text>
          </Link>
          <Link
            external={true}
            url="https://lightning100.com/localmusic/mariela-local-artist-of-the-week/"
          >
            <Text fontSize="large" uppercase fontWeight="bold">
              <>
                <BsFileEarmarkMusic /> Musician
              </>
            </Text>
          </Link>
          <Link external={true} url="https://www.instagram.com/grindylocks/">
            <Text fontSize="large" uppercase fontWeight="bold">
              <>
                <GiRollerSkate /> Rollerblader
              </>
            </Text>
          </Link>
          <div onClick={handleClick}>
            <Link url="">
              <Text fontSize="large" uppercase fontWeight="bold">
                <>
                  <GiHollowCat /> Cat Mom
                </>
              </Text>
            </Link>
          </div>
          <Contact />
        </div>
        <div>
          <Avatar src={rachel} />
          <div className="header--bio">
            <Text verticalSpacing={isMobile ? "small" : "large"}>
              I'm a musician turned software engineer, specialzing in React.js.
              I love writing clean reusable code that's well-organized and easy
              to maintain. Some of my favorite tools include Typescript,
              Next.js, Graphql, Python and Django. Outside of work, I enjoy
              recording music with friends and rollerblading across souther
              California.
            </Text>
          </div>
        </div>
      </div>
      {modal}
    </div>
  );
};
