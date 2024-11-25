import cx from "classnames";

import "./styles.scss";
import { IconType } from "react-icons";

interface IProps {
  children?: JSX.Element | string;
  className?: string;
  color?: "pink" | "white" | "blue" | "dark";
  external?: boolean;
  fontSize?:
    | "tiny"
    | "body"
    | "small"
    | "medium"
    | "large"
    | "huge"
    | "way-huge"
    | "massive";
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
  fontSize = "body",
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
      "text--tiny": fontSize === "tiny",
      "text--small": fontSize === "small",
      "text--medium": fontSize === "medium",
      "text--large": fontSize === "large",
      "text--huge": fontSize === "huge",
      "text--way-huge": fontSize === "way-huge",
      "text--massive": fontSize === "massive",
      "text--uppercase": uppercase,
      "text--spacing-small": verticalSpacing === "small",
      "text--spacing-large": verticalSpacing === "large",
      "text--light": fontWeight === "light",
      "text--bold": fontWeight === "bold",
      "text--white": color === "white",
      "text--blue": color === "blue",
      "text--pink": color === "pink",
      "text--dark": color === "dark",
      "text--center": textAlign === "center",
      "text--italic": italic === true,
    },
    className
  );

  const getTextElement = () => {
    if (
      fontSize === "huge" ||
      fontSize === "way-huge" ||
      fontSize === "massive"
    ) {
      return <h1 className={mainClass}>{children}</h1>;
    }
    if (fontSize === "large") {
      return <h2 className={mainClass}>{children}</h2>;
    }
    if (fontSize === "medium") {
      return <h3 className={mainClass}>{children}</h3>;
    }
    if (fontSize === "small") {
      return <h4 className={mainClass}>{children}</h4>;
    } else return <p className={mainClass}>{children}</p>;
  };

  return (
    <div className="text">
      {LeadingIcon && <LeadingIcon className={mainClass} />}

      {onClick ? (
        <button onClick={onClick} className={mainClass}>
          {getTextElement()}
        </button>
      ) : url ? (
        <a
          className={mainClass}
          href={url}
          target={external ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          {getTextElement()}
        </a>
      ) : (
        getTextElement()
      )}
    </div>
  );
};
