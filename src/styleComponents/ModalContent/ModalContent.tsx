import React from "react";
import { ModalHeader } from "../../components/ModalHeader";

import "./styles.scss";

type IProps = {
  ariaLabelID?: string;
  handleModal: (content?: JSX.Element) => void;
  heading?: string;
  modalContent?: JSX.Element;
};

export const ModalContent: React.FC<IProps> = ({
  ariaLabelID,
  handleModal,
  heading,
  modalContent,
}) => {
  return (
    <div className={"ModalContent"}>
      {heading && <ModalHeader handleModal={handleModal} title={heading} />}
      <div className="ModalContent-inner">{modalContent}</div>
    </div>
  );
};

export default ModalContent;
