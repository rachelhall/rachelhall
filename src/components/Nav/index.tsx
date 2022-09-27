import { Link } from "../../styleComponents/Link";
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
          <Link url={page.url}>
            <li className="nav--item">{page.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
