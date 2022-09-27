import "./styles.scss";
interface IProps {
  children?: JSX.Element | string;
  url: string;
  external?: boolean;
}

export const Link: React.FC<IProps> = ({ children, external = false, url }) => {
  return (
    <a
      href={url}
      className="link"
      target={external ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
