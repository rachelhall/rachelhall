import cx from "classnames";
import React, { useEffect, useRef } from "react";
import { useKeyPress } from "../../utils/useKeyPress";

import ModalContent from "../ModalContent";
import "./styles.scss";

type IProps = {
  ariaLabelID?: string;
  handleModal: (content?: JSX.Element) => void;
  heading?: string;
  isOpen: boolean;
  modalContent?: JSX.Element;
  url?: string;
};

export const Modal: React.FC<IProps> = ({
  ariaLabelID,
  handleModal,
  heading,
  isOpen,
  modalContent,
  url,
}) => {
  const escapePressed = useKeyPress("Escape");

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        console.log("clicking outside");
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          handleModal();
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      if (escapePressed) {
        handleModal();
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [escapePressed, handleModal, isOpen]);

  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const modalClass = cx("modal-overlay", !isOpen && "modal-closed");

  return (
    <div
      className={modalClass}
      onKeyDown={() => handleModal()}
      tabIndex={0}
      aria-labelledby={ariaLabelID}
      aria-modal="true"
      role="dialog"
    >
      <ModalContent
        ref={modalRef}
        handleModal={handleModal}
        heading={heading}
        modalContent={modalContent}
        url={url}
      />
    </div>
  );
};

export default Modal;
