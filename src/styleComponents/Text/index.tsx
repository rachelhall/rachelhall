import cx from "classnames";

import "./styles.scss";
import { IconType } from "react-icons";

interface IProps {
  children?: JSX.Element | string;
  className?: string;
  color?: "pink" | "light-pink" | "blue" | "dark";
  external?: boolean;
  fontSize?: "small" | "medium" | "large" | "huge";
  fontWeight?: "light" | "regular" | "bold";
  uppercase?: boolean;
  textAlign?: "left" | "center" | "right";
  verticalSpacing?: "small" | "large";
  italic?: boolean;
  url?: string;
  leadingIcon?: IconType;
  onClick?: () => void;
}

export const Text: React.FC<IProps> = ({
  children,
  className,
  color,
  external = true,
  fontSize = "medium",
  fontWeight = "regular",
  italic = false,
  leadingIcon: LeadingIcon,
  uppercase = false,
  textAlign,
  verticalSpacing,
  url,
  onClick,
}) => {
  const mainClass = cx(
    {
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
      "text--dark": color === "dark",
      "text--center": textAlign === "center",
      "text--italic": italic === true,
    },
    className
  );

  const getTextElement = () => {
    if (onClick) {
      return (
        <button onClick={onClick} className={mainClass}>
          {children}
        </button>
      );
    }

    if (url) {
      return (
        <a
          className={mainClass}
          href={url}
          target={external ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    } else return <p className={mainClass}>{children}</p>;
  };

  return (
    <div className="text">
      {LeadingIcon && <LeadingIcon className={mainClass} />}
      {getTextElement()}
    </div>
  );
};
