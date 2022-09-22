import { useEffect, useState } from "react";

const Home = () => {
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
    <div>
      {width > breakpoint ? (
        <div>
          <h1>Higher than 480</h1>
        </div>
      ) : (
        <div>
          <h1>Lower than 480</h1>{" "}
        </div>
      )}
    </div>
  );
};
export default Home;
