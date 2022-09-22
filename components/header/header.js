import { useEffect, useState } from "react";
import Logo from "./logo";
import Navbar from "./navbar";

const Header = () => {
  const useWindowDimensions = () => {
    const hasWindow = typeof window !== "undefined";

    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null;
      const height = hasWindow ? window.innerHeight : null;
      return {
        width,
        height,
      };
    }

    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    });

    return windowDimensions;
  };

  const { height, width } = useWindowDimensions();
  const breakpoint = 501;
  return (
    <div className="h-36 bg-gray-800">
      {width > breakpoint ? (
        <div>
          <div className="absolute right-0 mt-16 mr-10">
            <Navbar />
          </div>
          <div className="absolute">
            <Logo />
          </div>
        </div>
      ) : (
        <div>
          <h1>Lower than 480</h1>{" "}
        </div>
      )}
    </div>
  );
};
export default Header;
