import davy from "../../media/davy.jpg";
import finley from "../../media/finley.jpg";
import pip from "../../media/pip.jpg";

import { CatCard } from "../CatCard/CatCard";

import { Text } from "../../styleComponents/Text";

import "./styles.scss";

export const Cats: React.FC = () => {
  return (
    <div className="cats">
      <Text italic>
        Once upon a time, in a magical land, there lived 3 cats...
      </Text>
      <div className="cat-card-container">
        <CatCard image={davy} title="Davy the Dragonheart" />
        <CatCard image={finley} title="Finley the Fair" />
        <CatCard image={pip} title="Pip the Pure" />
      </div>
    </div>
  );
};
