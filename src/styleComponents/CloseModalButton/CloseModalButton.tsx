import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./styles.scss";

type IProps = {
  handleClose: (argument?: JSX.Element) => void;
};

export const CloseModalButton: React.FC<IProps> = ({ handleClose }) => {
  return (
    <button
      className="closeButton"
      onClick={() => handleClose()}
      tabIndex={-1}
      type="button"
    >
      <AiOutlineCloseCircle />
    </button>
  );
};

export default CloseModalButton;
