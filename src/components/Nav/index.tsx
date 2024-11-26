import { Text } from "../../styleComponents/Text";
import ThemeSwitch from "../ThemeSwitch";

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
    <div className="nav">
      <ThemeSwitch />
      <ul className="nav--list">
        {pages.map((page) => (
          <li className="nav--item" key={page.url}>
            <Text fontWeight="bold" url={page.url} external={true}>
              {page.title}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};
