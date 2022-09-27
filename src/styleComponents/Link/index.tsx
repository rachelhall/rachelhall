import { Text } from "../Text";
import "./styles.scss";
interface IProps {
  children?: JSX.Element | string;
  url: string;
}

export const Link: React.FC<IProps> = ({ children, url }) => {
  return (
    <a href={url} className="link">
      {children}
    </a>
  );
};
