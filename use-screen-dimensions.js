import { useEffect, useState } from "react";

const useScreenDimensions = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    updateDimensions();

    const resizeListener = window.addEventListener("resize", () => {
      updateDimensions();
    });

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return { width, height };
};

export { useScreenDimensions };
