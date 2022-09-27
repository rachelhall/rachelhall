import { Text } from "../../styleComponents/Text";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import "./styles.scss";

interface IProps {}

export const Contact: React.FC<IProps> = () => {
  return (
    <div className="contact">
      <Text color="light-pink">
        <>
          <FiPhone />
          251-472-5419
        </>
      </Text>
      <Text color="light-pink">
        <>
          <AiOutlineMail />
          rachelraspberrypie@gmail.com
        </>
      </Text>
    </div>
  );
};
