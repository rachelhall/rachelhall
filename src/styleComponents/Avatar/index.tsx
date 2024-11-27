import "./styles.scss";

interface IProps {
  src: string;
}

export const Avatar: React.FC<IProps> = ({ src }) => {
  return (
    <div className="avatar">
      <img className="avatar-img" src={src} alt="Rachel Hall" />
      <div className="avatar--inner c2" />
      <div className="avatar--inner" />
    </div>
  );
};
