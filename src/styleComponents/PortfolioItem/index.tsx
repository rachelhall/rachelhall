import { useModal } from "../../utils/useModal";
import { Text } from "../Text";
import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";

import { ECodeTool } from "../../portfolioData";
import { Link } from "../Link";

import "./styles.scss";

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
    case ECodeTool.REACT_NATIVE:
      return <GrGraphQl fontSize="2.5rem" />;
    case ECodeTool.GRAPHQL:
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
        <div className="portfolioItem">
          <div>
            <img
              src={mainImage}
              height="200"
              alt="Thumbnail of portfolio item."
              className="portfolioItem--image"
            />

            <Text fontWeight="bold" color="pink">
              Technology used:
            </Text>
            <div className="portfolioItem--tools">
              {tools?.map((tool, i) => getToolIcon(tool))}
            </div>
          </div>
          <div className="portfolioItem--link">
            <Text>{description}</Text>
            <Link url={url} animation={false}>
              <Text fontWeight="bold" color="pink">
                View site
              </Text>
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
    <div onClick={handleClick} className="portfolioItem--thumbnail">
      <Text fontSize="large" fontWeight="bold" textAlign="center">
        {title}
      </Text>

      {modal}
    </div>
  );
};
