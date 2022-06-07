import { useEffect, useState } from "react";

export const useDisplay = (ms: number) => {
  const [displayed, setDisplayed] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayed(true);
    }, ms); // desired
    return () => {
      clearTimeout(timeout);
    };
  });
  return {
      displayed
  }
};
