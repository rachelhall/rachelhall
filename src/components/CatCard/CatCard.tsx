import { Text } from "../../styleComponents";

interface ICatProps {
  image: string;
  title: string;
}

export const CatCard: React.FC<ICatProps> = ({ image, title }) => {
  return (
    <div className="single-cat-container">
      <img
        className="cat-image"
        src={image}
        height="250"
        alt="Brown striped tabby"
      />
      <Text>{title}</Text>
    </div>
  );
};
