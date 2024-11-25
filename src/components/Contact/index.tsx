import { Text } from "../../styleComponents/Text";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "../../styleComponents/Link";

import "./styles.scss";

export const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="contact--content">
        <Link url="tel:251-472-5419" animation={false}>
          <Text
            color="white"
            fontWeight="bold"
            fontSize="tiny"
            leadingIcon={FiPhone}
            url="tel:251-472-5419"
          >
            251-472-5419
          </Text>
        </Link>
        <Link
          external={true}
          url="mailto:rachelraspberrypie@gmail.com?subject=I%20visited%20your%20portfolio%20today"
          animation={false}
        >
          <Text
            external={true}
            url="mailto:rachelraspberrypie@gmail.com?subject=I%20visited%20your%20portfolio%20today"
            leadingIcon={AiOutlineMail}
            color="white"
            fontSize="tiny"
            fontWeight="bold"
          >
            rachelraspberrypie@gmail.com
          </Text>
        </Link>
      </div>
    </div>
  );
};
