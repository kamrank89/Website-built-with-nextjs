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
    <div className="space-y-4 h-auto bg-gray-800 mt-6">
      <div className="text-white text-3xl text-center hover:text-yellow-400 cursor-pointer">
        <h1>Socials</h1>
      </div>
      <div className="mx-auto space-y-1 bg-slate-500 flex flex-col w-16 rounded">
        <FontAwesomeIcon
          icon={faInstagram}
          size="3x"
          className="hover:bg-slate-800 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          size="3x"
          className="hover:bg-slate-800 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          size="3x"
          className="hover:bg-slate-800 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faYoutube}
          size="3x"
          className="hover:bg-slate-800 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          size="3x"
          className="hover:bg-slate-800 cursor-pointer"
        />
      </div>
    </div>
  );
}
