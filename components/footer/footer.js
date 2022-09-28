import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="h-36 bg-gray-800 bottom-0 w-full">
      <FontAwesomeIcon icon={faInstagram} size="3x" />
    </div>
  );
}

export default Footer;
