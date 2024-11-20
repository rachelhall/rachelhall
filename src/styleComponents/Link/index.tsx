import "./styles.scss";
interface IProps {
  children?: JSX.Element | string;
  url?: string;
  external?: boolean;
  animation?: boolean;
}

export const Link: React.FC<IProps> = ({
  animation = true,
  children,
  external = false,
  url,
}) => {
  return (
    <a
      href={url}
      className={animation ? "link" : "link--noAnimation"}
      target={external ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
