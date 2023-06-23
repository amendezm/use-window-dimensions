"use client";

import { useEffect, useState } from "react";

const useScreenDimensions = (): ScreenDimensions => {
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
      //@ts-ignore
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return { width, height };
};

export type ScreenDimensions = {
  width: number;
  height: number;
};

export { useScreenDimensions };
