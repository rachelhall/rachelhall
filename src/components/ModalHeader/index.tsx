import CloseButton from "../../styleComponents/CloseModalButton";
import { Text } from "../../styleComponents/Text";
import "./styles.scss";
interface IProps {
  title: string;
  handleModal: (content?: JSX.Element) => void;
  url?: string;
}

export const ModalHeader: React.FC<IProps> = ({ handleModal, title, url }) => {
  return (
    <div className="modalHeader">
      <CloseButton handleClose={handleModal} />
      <Text url={url} fontSize="large" fontWeight="bold">
        {title}
      </Text>
    </div>
  );
};
