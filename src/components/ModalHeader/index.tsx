import CloseButton from "../../styleComponents/CloseModalButton";
import { Text } from "../../styleComponents/Text";
import "./styles.scss";
interface IProps {
  title: string;
  handleModal: (content?: JSX.Element) => void;
}

export const ModalHeader: React.FC<IProps> = ({ handleModal, title }) => {
  return (
    <div className="modalHeader">
      <CloseButton handleClose={handleModal} />
      <Text fontSize="large" fontWeight="bold">
        {title}
      </Text>
    </div>
  );
};
