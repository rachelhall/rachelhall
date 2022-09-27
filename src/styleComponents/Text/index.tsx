import cx from "classnames";

import "./styles.scss";

interface IProps {
  children?: JSX.Element | string;
  color?: "pink" | "light-pink" | "blue";
  fontSize?: "small" | "medium" | "large" | "huge";
  fontWeight?: "light" | "regular" | "bold";
  uppercase?: boolean;
  textAlign?: "left" | "center" | "right";
  verticalSpacing?: "small" | "large";
}

export const Text: React.FC<IProps> = ({
  children,
  color,
  fontSize = "medium",
  fontWeight = "regular",
  uppercase = false,
  textAlign,
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
    "text--light-pink": color === "light-pink",
    "text--blue": color === "blue",
    "text--pink": color === "pink",
    "text--center": textAlign === "center",
  });
  return (
    <div className="text">
      <p className={mainClass}>{children}</p>
    </div>
  );
};
