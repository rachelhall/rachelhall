import React from "react";
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import { FaPython, FaVuejs } from "react-icons/fa";
import { ECodeTool } from "../../portfolioData";
import { IoLogoFirebase } from "react-icons/io5";

import cx from "classnames";

import styles from "./Technologies.module.scss";

interface IProps {
  orientation?: "horizontal" | "vertical";
  tools?: ECodeTool[];
}

export const Technologies: React.FC<IProps> = (props) => {
  const { orientation = "vertical", tools } = props;

  const getToolIcon = (tool: ECodeTool) => {
    switch (tool) {
      case ECodeTool.HTML:
        return (
          <DiHtml5
            fontSize="2.5rem"
            key={`k-${tool}`}
            className={styles.icon}
          />
        );
      case ECodeTool.CSS:
        return (
          <DiCss3 className={styles.icon} fontSize="2.5rem" key={`k-${tool}`} />
        );
      case ECodeTool.JAVASCRIPT:
        return <DiJavascript1 fontSize="2.5rem" key={`k-${tool}`} />;
      case ECodeTool.REACT:
        return <DiReact fontSize="2.5rem" key={`k-${tool}`} />;
      case ECodeTool.GRAPHQL:
        return <GrGraphQl fontSize="2.5rem" key={`k-${tool}`} />;
      case ECodeTool.REACT_NATIVE:
        return <TbBrandReactNative fontSize="2.5rem" key={`k-${tool}`} />;
      case ECodeTool.PYTHON:
        return <FaPython fontSize="2.5rem" key={`k-${tool}`} />;
      case ECodeTool.VUE:
        return <FaVuejs fontSize="2.5rem" key={`k-${tool}`} />;
      case ECodeTool.FIREBASE:
        return <IoLogoFirebase fontSize="2.5rem" key={`k-${tool}`} />;
    }
  };

  const iconContainerClass = cx(styles.iconsContainer, {
    [styles.horizontal]: orientation === "horizontal",
  });

  return (
    <div className={styles.Technologies}>
      <div className={iconContainerClass}>
        {tools?.map((tool) => getToolIcon(tool))}
      </div>
    </div>
  );
};

export default Technologies;
