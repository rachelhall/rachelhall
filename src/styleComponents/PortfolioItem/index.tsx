import { useModal } from "../../utils/useModal";
import { Text } from "../Text";
import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import "./styles.scss";
import { ECodeTool } from "../../portfolioData";
import { Link } from "../Link";

interface IProps {
  mainImage: string;
  title: string;
  description?: string;
  url: string;
  tools?: ECodeTool[];
}

const getToolIcon = (tool: ECodeTool) => {
  switch (tool) {
    case ECodeTool.HTML:
      return <DiHtml5 fontSize="2.5rem" />;
    case ECodeTool.CSS:
      return <DiCss3 fontSize="2.5rem" />;
    case ECodeTool.JAVASCRIPT:
      return <DiJavascript fontSize="2.5rem" />;
    case ECodeTool.REACT:
      return <DiReact fontSize="2.5rem" />;
  }
};

export const PortfolioItem: React.FC<IProps> = ({
  description,
  mainImage,
  title,
  url,
  tools,
}) => {
  const { handleModal, modal } = useModal({
    heading: title,
    content: (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "2rem",
          }}
        >
          <div>
            <img
              src={mainImage}
              height="200"
              alt="Thumbnail of portfolio item."
              className="portfolioItem--image"
            />

            <Text fontWeight="bold">Technology used:</Text>
            <div className="portfolioItem--tools">
              {tools?.map((tool) => getToolIcon(tool))}
            </div>
          </div>
          <div>
            <Text>{description}</Text>
            <Link url={url}>
              <Text fontWeight="bold">View site</Text>
            </Link>
          </div>
        </div>
      </div>
    ),
  });
  const handleClick = () => {
    handleModal();
  };
  return (
    <div onClick={handleClick}>
      <img
        height="200"
        src={mainImage}
        alt="Portfolio item"
        className="portfolio--mainImage"
      />
      {modal}
    </div>
  );
};
