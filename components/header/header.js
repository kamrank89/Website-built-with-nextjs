import { useEffect, useState, useCallback } from "react";
import DropDown from "./dropdown";
import Logo from "./logo";
import Navbar from "./navbar";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const handler = (e) => updateTarget(e);
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", handler);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", handler);
  }, [updateTarget, width]);

  return targetReached;
};

const Header = () => {
  const breakpoint = useMediaQuery(780);
  return (
    <div className="h-36 bg-gray-800">
      {breakpoint ? (
        <div className="absolute right-0 mt-16 mr-16">
          <DropDown />
        </div>
      ) : (
        <div>
          <div className="absolute right-0 mt-16 mr-10">
            <Navbar />
          </div>
          <div className="absolute">
            <Logo />
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
