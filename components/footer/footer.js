import FooterInfo from "./footer-components.js/footerinfo";
import FooterInfoBar from "./footer-components.js/footerinfobar";
import FooterNavbar from "./footer-components.js/footerNavbar";

function Footer() {
  return (
    <div className="flex bg-gray-800 h-auto ">
      <div className="w-1/3">
        <FooterInfo />
      </div>
      <div className="w-1/3">
        {" "}
        <FooterInfoBar />
      </div>
      <div className="w-1/3 mx-auto">
        <FooterNavbar />
      </div>
    </div>
  );
}

export default Footer;
