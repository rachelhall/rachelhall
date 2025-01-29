import { useModal } from "../../utils/useModal";

import Technologies from "../../components/Technologies";
import { IPortfolioItem } from "../../portfolioData";
import { Text } from "../../styleComponents";
// import { GoArrowUpRight } from "react-icons/go";

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
          <Text fontWeight="medium" color="dark">
            {description}
          </Text>
          <ul className="portfolioItem--bulletpoint">
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
        <div className="portfolioItem--thumbnail-title-container">
          {/* <GoArrowUpRight /> */}
          <Text
            className="portfolioItem--thumbnail-title"
            fontSize="small"
            textAlign="center"
            color="light"
          >
            {title}
          </Text>
        </div>
        <Text color="dark" fontSize="tiny">
          {description}
        </Text>
      </div>
      {modal}
    </div>
  );
};
