import { Text } from "../../styleComponents/Text";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import "./styles.scss";
import { Link } from "../../styleComponents/Link";
import { EMediaBreakPoint, useMediaQuery } from "../../utils/useMediaQuery";

interface IProps {}

export const Contact: React.FC<IProps> = () => {
  const isMobile = useMediaQuery(EMediaBreakPoint.mobile);
  return (
    <div className="contact">
      <Link url="tel:251-472-5419" animation={false}>
        <Text
          color="light-pink"
          fontWeight="bold"
          fontSize={isMobile ? "small" : "medium"}
        >
          <>
            <FiPhone />
            251-472-5419
          </>
        </Text>
      </Link>
      <Link
        external={true}
        url="mailto:rachelraspberrypie@gmail.com?subject=I%20visited%20your%20portfolio%20today"
        animation={false}
      >
        <Text
          color="light-pink"
          fontWeight="bold"
          fontSize={isMobile ? "small" : "medium"}
        >
          <>
            <AiOutlineMail />
            rachelraspberrypie@gmail.com
          </>
        </Text>
      </Link>
    </div>
  );
};
