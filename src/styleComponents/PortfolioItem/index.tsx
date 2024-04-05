import { useModal } from "../../utils/useModal";
import { Text } from "../Text";
import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import { FaPython } from "react-icons/fa";

import { ECodeTool } from "../../portfolioData";
import { Link } from "../Link";

import "./styles.scss";
import { EMediaBreakPoint, useMediaQuery } from "../../utils/useMediaQuery";

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
      return <DiHtml5 fontSize="2.5rem" key={`k-${tool}`} />;
    case ECodeTool.CSS:
      return <DiCss3 fontSize="2.5rem" key={`k-${tool}`} />;
    case ECodeTool.JAVASCRIPT:
      return <DiJavascript fontSize="2.5rem" key={`k-${tool}`} />;
    case ECodeTool.REACT:
      return <DiReact fontSize="2.5rem" key={`k-${tool}`} />;
    case ECodeTool.GRAPHQL:
      return <GrGraphQl fontSize="2.5rem" key={`k-${tool}`} />;
    case ECodeTool.REACT_NATIVE:
      return <TbBrandReactNative fontSize="2.5rem" key={`k-${tool}`} />;
    case ECodeTool.PYTHON:
      return <FaPython fontSize="2.5rem" key={`k-${tool}`} />

  }
};

export const PortfolioItem: React.FC<IProps> = ({
  description,
  mainImage,
  title,
  url,
  tools,
}) => {

  const isMobile = useMediaQuery(EMediaBreakPoint.mobile);

  const { handleModal, modal } = useModal({
    heading: title,
    content: (
      <div>
        <div className="portfolioItem">
          <div>
            <img
              src={mainImage}
              height={isMobile ? "150" : "200"}
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
            <Link url={url} animation={false} external={true}>
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
