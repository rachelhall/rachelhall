import { useModal } from "../../utils/useModal";

import Technologies from "../../components/Technologies";
import { IPortfolioItem } from "../../portfolioData";
import { Text } from "../../styleComponents";

import "./styles.scss";

export const PortfolioItem: React.FC<IPortfolioItem> = ({
  bulletPoints,
  description,
  title,
  url,
  tools,
}) => {
  const content = (
    <div className="portfolioItem">
      <Technologies tools={tools} />
      <div className="portfolioItem--link">
        <div className="portfolioItem--text">
          <Text color="pink">{description}</Text>
          <ul className="portfolio--bulletpoint">
            {bulletPoints?.map((point) => (
              <li key={point.details}>
                <strong>{point.heading}</strong>
                {point.details}
              </li>
            ))}
          </ul>
          <div>
            <Text color="dark" url={url} external={true} fontWeight="bold">
              View site
            </Text>
          </div>
        </div>
      </div>
    </div>
  );

  const { handleModal, modal } = useModal({
    heading: title,
    url,
    content,
  });

  return (
    <div key={`${title[0]}${description?.[0]}`}>
      <div onClick={handleModal} className="portfolioItem--thumbnail">
        <Text fontSize="small" fontWeight="bold" textAlign="center">
          {title}
        </Text>
      </div>
      {modal}
    </div>
  );
};
