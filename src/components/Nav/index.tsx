import { Link } from "../../styleComponents/Link";
import { Text } from "../../styleComponents/Text";

import "./styles.scss";

export interface INavItem {
  title: string;
  url: string;
}

interface IProps {
  pages: INavItem[];
}

export const Nav: React.FC<IProps> = ({ pages }) => {



  return (
    <div>
      <ul className="nav--list">
        {pages.map((page) => (
          <Link key={page.title} url={page.url} external={true}>
            <li className="nav--item">
              <Text>{page.title}</Text>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
