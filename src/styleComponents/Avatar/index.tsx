import "./styles.scss";

interface IProps {
  src: string;
}

export const Avatar: React.FC<IProps> = ({ src }) => {
  return (
    <div className="avatar--container">
      <img className="avatar" src={src} alt="Rachel Hall" />
      <div className="avatar--inner c2" />
      <div className="avatar--background" />
      <div className="avatar--inner" />
    </div>
  );
};
