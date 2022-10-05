import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function FooterInfoBar() {
  return (
    <div className="mr-36">
      <div className="text-white text-2xl text-center  w-36">
        <ul className="space-y-4">
          <li className="hover:text-yellow-400 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer">
            <Link href="/products">Products</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="flex text-white text-xs text-center mt-36">
        <FontAwesomeIcon icon={faCopyright} />
        <p>All rights reserved for kamran</p>
      </div>
    </div>
  );
}