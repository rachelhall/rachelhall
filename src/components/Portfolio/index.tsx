import { portfolioData } from "../../portfolioData";
import { PortfolioItem } from "../../styleComponents/PortfolioItem";
import { Text } from "../../styleComponents/Text";

import "./styles.scss";
interface IProps {}

export const Portfolio: React.FC<IProps> = ({}) => {
  return (
    <div id="portfolio">
      <Text fontSize="large" fontWeight="bold">
        Portfolio
      </Text>
      <div className="portfolio--items">
        {portfolioData.map((item) => (
          <PortfolioItem
            description={item.description}
            title={item.title}
            mainImage={item.mainImage}
            url={item.url}
            tools={item.tools}
          />
        ))}
      </div>
    </div>
  );
};
