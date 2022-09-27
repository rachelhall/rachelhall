import { pages } from "../../pages";
import { Nav } from "../Nav";
import { Text } from "../../styleComponents/Text";
import { Avatar } from "../../styleComponents/Avatar";
import rachel from "../../media/rachel.png";
import "./styles.scss";

import { BsCodeSquare, BsFileEarmarkMusic } from "react-icons/bs";
import { GiHollowCat, GiRollerSkate } from "react-icons/gi";
import { Link } from "../../styleComponents/Link";

interface IProps {}

export const Header: React.FC<IProps> = () => {
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
          <Text fontSize="large" uppercase fontWeight="bold">
            <>
              <GiHollowCat /> Cat Mom
            </>
          </Text>
        </div>
        <div>
          <Avatar src={rachel} />
          <Text verticalSpacing="large">
            I'm a musician turned software engineer, specialzing in React.js. I
            love writing clean reusable code that's well-organized and easy to
            maintain. Some of my favorite tools to work with include Typescript,
            Next.js, Graphql, Python and Django. Outside of work, I enjoy
            recording music with friends and rollerblading across souther
            California.
          </Text>
        </div>
      </div>
    </div>
  );
};
