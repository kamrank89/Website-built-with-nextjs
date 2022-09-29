import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterNavbar() {
  return (
    <div className="relative h-auto bg-gray-800">
      <div className="relative mx-auto bg-slate-500 flex flex-col  w-24 rounded">
        <h1 className="bg-slate-600 text-3xl">Socials</h1>
        <FontAwesomeIcon icon={faInstagram} size="3x" />
        <FontAwesomeIcon icon={faTwitter} size="3x" />
        <FontAwesomeIcon icon={faFacebook} size="3x" />
        <FontAwesomeIcon icon={faYoutube} size="3x" />
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </div>
    </div>
  );
}
