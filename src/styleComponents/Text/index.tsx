import cx from "classnames";

import "./styles.scss";

interface IProps {
  children?: JSX.Element | string;
  fontSize?: "small" | "medium" | "large" | "huge";
  fontWeight?: "light" | "regular" | "bold";
  uppercase?: boolean;
  verticalSpacing?: "small" | "large";
}

export const Text: React.FC<IProps> = ({
  children,
  fontSize = "medium",
  fontWeight = "regular",
  uppercase = false,
  verticalSpacing,
}) => {
  const mainClass = cx("text", {
    "text--small": fontSize === "small",
    "text--medium": fontSize === "medium",
    "text--large": fontSize === "large",
    "text--huge": fontSize === "huge",
    "text--uppercase": uppercase,
    "text--spacing-small": verticalSpacing === "small",
    "text--spacing-large": verticalSpacing === "large",
    "text--light": fontWeight === "light",
    "text--bold": fontWeight === "bold",
  });
  return (
    <div className="text">
      <p className={mainClass}>{children}</p>
    </div>
  );
};
