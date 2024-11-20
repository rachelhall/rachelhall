import { ForwardedRef, forwardRef, RefObject } from "react";
import { ModalHeader } from "../../components/ModalHeader";

import "./styles.scss";

interface IProps {
  ariaLabelID?: string;
  handleModal: (content?: JSX.Element) => void;
  heading?: string;
  modalContent?: JSX.Element;
  url?: string;
  ref: RefObject<HTMLDivElement>;
}

export const ModalContent = forwardRef(
  (props: IProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { ariaLabelID, handleModal, heading, modalContent, url } = props;

    return (
      <div className={"ModalContent"} ref={ref}>
        {heading && (
          <ModalHeader url={url} handleModal={handleModal} title={heading} />
        )}
        <div aria-labelledby={ariaLabelID} className="ModalContent-inner">
          {modalContent}
        </div>
      </div>
    );
  }
);

export default ModalContent;
