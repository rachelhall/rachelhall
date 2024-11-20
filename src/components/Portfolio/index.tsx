import { portfolioData } from "../../portfolioData";
import { PortfolioItem } from "../../styleComponents/PortfolioItem";
import { Text } from "../../styleComponents/Text";

import "./styles.scss";
interface IProps {}

export const Portfolio: React.FC<IProps> = () => {
  return (
    <div id="portfolio" className="portfolio">
      <Text uppercase fontSize="large" fontWeight="bold">
        Work History
      </Text>
      <div className="portfolio--items">
        {portfolioData.map((item) => (
          <PortfolioItem
            key={item.description}
            description={item.description}
            title={item.title}
            mainImage={item.mainImage}
            url={item.url}
            tools={item.tools}
            bulletPoints={item.bulletPoints}
          />
        ))}
      </div>
    </div>
  );
};
