import { useEffect, useState, useCallback } from "react";
import DropDown from "./header-components/dropdown";
import Logo from "./header-components/logo";
import Navbar from "./header-components/navbar";
import SignIn from "./header-components/singin";

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
  const breakpoint = useMediaQuery(910);
  return (
    <div className="h-36 bg-gray-800">
      {breakpoint ? (
        <div>
          <div className="absolute right-0 mt-16 mr-16">
            <DropDown />
          </div>
          <div className="absolute">
            <Logo />
          </div>
          <div className="absolute right-0 mt-4 mr-10 ">
            <SignIn />
          </div>
        </div>
      ) : (
        <div>
          <div className="absolute right-0 mt-20 mr-10">
            <Navbar />
          </div>
          <div className="absolute">
            <Logo />
          </div>
          <div className="absolute right-0 mt-4 mr-10 ">
            <SignIn />
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
