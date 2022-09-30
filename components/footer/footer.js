import FooterInfo from "./footer-components.js/footerinfo";
import FooterInfoBar from "./footer-components.js/footerinfobar";
import FooterNavbar from "./footer-components.js/footerNavbar";

function Footer() {
  return (
    <div className="flex bg-gray-800 h-96 ">
      <div className="ml-8 mt-8 ">
        <FooterInfo />
      </div>
      <div className="mr-96 mt-12">
        <FooterInfoBar />
      </div>
      <div className="m-8">
        <FooterNavbar />
      </div>
    </div>
  );
}

export default Footer;
